package com.shahar.words

import android.content.Context
import android.content.SharedPreferences
import android.util.Base64
import androidx.compose.material3.Text
import androidx.compose.material3.TextButton
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.remember
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.sp
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.setValue
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.Job
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch
import kotlinx.coroutines.sync.Mutex
import kotlinx.coroutines.sync.withLock
import kotlinx.coroutines.withContext
import org.json.JSONArray
import org.json.JSONObject
import java.io.IOException
import java.net.HttpURLConnection
import java.net.URL
import java.time.LocalDateTime
import java.time.format.DateTimeFormatter
import java.util.UUID

/**
 * Keeps a kid's game (points, house, friends, word levels) the same on all their devices.
 *
 * Each kid has one file, sync/<profile>.json, in the private repo dmeltz/my-practice-data, written with
 * the same key as the problem reports. Every save on a device marks it "changed" and uploads it a few
 * seconds later. When the app opens (or comes back to the front) it downloads the file and, if another
 * device saved something newer, takes it.
 *
 * Rules (a kid plays on one device at a time, so clashes are rare):
 * - A device that never synced this kid yet keeps whichever side has more progress (word levels +
 *   furniture + friends). A new tablet with an empty house therefore takes the phone's game.
 * - Both sides changed since the last sync: the newer change wins.
 * - The side that loses is never just thrown away: it is uploaded to sync/backup/ so a parent can restore it.
 * - Parent device (test mode): only downloads. What a parent tries out there never reaches the kid's
 *   game (points, purchases, house, even parent "add points"); it is replaced by the cloud copy at the next sync.
 */
object Sync {
    private const val REPO = "dmeltz/my-practice-data"
    private const val DIR = "sync"
    private const val VERSION = 1

    var lastStatus by mutableStateOf("")
    private val scope = MainScope()
    private val lock = Mutex()
    private var pushJob: Job? = null
    private lateinit var app: Context

    private fun meta(): SharedPreferences = app.getSharedPreferences("sync", Context.MODE_PRIVATE)

    fun init(ctx: Context) {
        if (::app.isInitialized) return
        app = ctx.applicationContext
        lastStatus = meta().getString("status", "") ?: ""
    }

    private fun deviceId(): String {
        val m = meta()
        return m.getString("device", null) ?: UUID.randomUUID().toString().take(8).also {
            m.edit().putString("device", it).apply()
        }
    }

    var enabled: Boolean
        get() = ::app.isInitialized && meta().getBoolean("enabled", true)
        set(v) {
            meta().edit().putBoolean("enabled", v).apply()
            if (v) Store.profile?.let { now(it) }
        }

    /** Store.save() calls this: remember there is something to upload, and upload it soon. */
    fun changed(profile: String) {
        if (!::app.isInitialized) return
        meta().edit().putBoolean("dirty_$profile", true).putLong("rev_$profile", System.currentTimeMillis()).apply()
        if (Store.parentDevice) return
        pushJob?.cancel()
        pushJob = scope.launch {
            delay(4000)
            sync(profile)
        }
    }

    /** Sync right away (app opened, came back to the front, player picked, or "sync now"). */
    fun now(profile: String) {
        if (!::app.isInitialized) return
        pushJob?.cancel()
        scope.launch { sync(profile) }
    }

    /**
     * Parent gift: first take the newest game of [profile] from the cloud (so nothing the kid did on
     * another device is lost), then add the points and upload right away. [done] gets a short status.
     */
    fun addPoints(profile: String, n: Int, done: (String) -> Unit) {
        if (!::app.isInitialized) { Store.addPoints(profile, n); done("נוסף ✓"); return }
        pushJob?.cancel()
        scope.launch {
            sync(profile)
            Store.addPoints(profile, n)
            pushJob?.cancel()
            sync(profile)
            done(if (Store.parentDevice) "נוסף רק במכשיר הזה (מצב ניסוי, לא נשמר בענן)"
                else if (enabled && Report.token(app).isNotEmpty()) "נוסף ✓ $lastStatus" else "נוסף במכשיר הזה ✓")
        }
    }

    /** This device stopped being a parent (test) device: drop test changes, take the cloud game next sync. */
    fun leftTestMode() {
        if (!::app.isInitialized) return
        val m = meta(); val e = m.edit()
        m.all.keys.filter { it.startsWith("dirty_") }.forEach { e.remove(it) }
        m.all.keys.filter { it.startsWith("base_") }.forEach { e.putLong(it, 0L) }
        e.apply()
        Store.profile?.let { now(it) }
    }

    /** Leaving the app: upload a waiting change now instead of in a few seconds. */
    fun flushPending() {
        val p = Store.profile ?: return
        if (::app.isInitialized && !Store.parentDevice && meta().getBoolean("dirty_$p", false)) now(p)
    }

    private class Retry : Exception()

    private class Remote(val sha: String, val rev: Long, val device: String, val data: JSONObject)

    private suspend fun sync(profile: String) = lock.withLock {
        if (!enabled) return@withLock
        val token = Report.token(app)
        if (token.isEmpty()) { setStatus("לא מסונכרן: אין מפתח שליחה"); return@withLock }
        val m = meta()
        val time = LocalDateTime.now().format(DateTimeFormatter.ofPattern("dd.MM HH:mm"))
        try {
            for (tries in 1..3) {
                try {
                val remote = withContext(Dispatchers.IO) { get(token, profile) }
                val dirty = m.getBoolean("dirty_$profile", false)
                val localRev = m.getLong("rev_$profile", 0L)
                val base = m.getLong("base_$profile", -1L)
                val local = snapshot(profile)
                val result: String
                if (Store.parentDevice) {
                    // Test mode: never upload, never back up; just take the kid's real game.
                    result = if (remote == null) "מצב ניסוי: אין עדיין משחק בענן"
                        else if (remote.rev == base && !dirty) "מעודכן ✓ (מצב ניסוי)"
                        else { adopt(profile, remote); "מצב ניסוי: נטען המשחק מהענן ✓" }
                    setStatus("$result ($time)")
                    break
                }
                when {
                    remote == null -> {
                        // Nobody uploaded this kid yet: this device's game becomes the shared one.
                        if (local.length() == 0) { setStatus("אין עדיין משחק לסנכרן"); return@withLock }
                        if (!push(token, profile, local, maxOf(localRev, 1L), null)) throw Retry()
                        result = "הועלה ✓"
                    }
                    base < 0 -> {
                        // First sync on this device: keep whichever side has more progress.
                        if (local.length() > 0 && score(local) > score(remote.data)) {
                            backup(token, profile, remote.data, "other")
                            if (!push(token, profile, local, maxOf(localRev, remote.rev + 1), remote.sha)) throw Retry()
                            result = "הועלה ✓"
                        } else {
                            if (score(local) > 0) backup(token, profile, local, deviceId())
                            adopt(profile, remote)
                            result = "המשחק נטען מהמכשיר השני ✓"
                        }
                    }
                    remote.rev == base -> {
                        if (dirty) {
                            if (!push(token, profile, local, maxOf(localRev, base + 1), remote.sha)) throw Retry()
                            result = "נשמר בענן ✓"
                        } else result = "מעודכן ✓"
                    }
                    // Another device saved since our last sync.
                    !dirty || remote.rev >= localRev -> {
                        if (dirty) backup(token, profile, local, deviceId())
                        adopt(profile, remote)
                        result = "עודכן מהמכשיר השני ✓"
                    }
                    else -> {
                        backup(token, profile, remote.data, remote.device)
                        if (!push(token, profile, local, localRev, remote.sha)) throw Retry()
                        result = "נשמר בענן ✓"
                    }
                }
                setStatus("$result ($time)")
                break
                } catch (r: Retry) {
                    if (tries == 3) throw IOException("מכשיר אחר שומר בדיוק עכשיו, ננסה שוב אחר כך")
                }
            }
        } catch (e: Exception) {
            setStatus("סנכרון נכשל ($time): " + when {
                e is java.net.UnknownHostException -> "אין אינטרנט"
                else -> e.message ?: e.javaClass.simpleName
            })
        }
    }

    /** True when uploaded; false when someone else uploaded first (try again). */
    private suspend fun push(token: String, profile: String, data: JSONObject, rev: Long, sha: String?): Boolean {
        val body = JSONObject().put("v", VERSION).put("rev", rev).put("device", deviceId())
            .put("build", BuildConfig.VERSION_CODE).put("data", data)
        val ok = withContext(Dispatchers.IO) {
            put(token, "$DIR/$profile.json", body.toString(1).toByteArray(), "Sync $profile from ${deviceId()}", sha)
        }
        if (ok) meta().edit().putLong("base_$profile", rev).putLong("rev_$profile", rev).putBoolean("dirty_$profile", false).apply()
        return ok
    }

    private suspend fun backup(token: String, profile: String, data: JSONObject, from: String) {
        val stamp = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd_HHmmss"))
        try {
            withContext(Dispatchers.IO) {
                put(token, "$DIR/backup/${profile}_${stamp}_$from.json", data.toString(1).toByteArray(), "Sync backup $profile", null)
            }
        } catch (_: Exception) { }
    }

    /** Takes the other device's game: rewrite this kid's file and reload it if it is on screen. */
    private suspend fun adopt(profile: String, remote: Remote) {
        withContext(Dispatchers.Main) {
            val p = app.getSharedPreferences(profile, Context.MODE_PRIVATE)
            val e = p.edit().clear()
            val d = remote.data
            d.keys().forEach { k ->
                val a = d.getJSONArray(k)
                when (a.getString(0)) {
                    "i" -> e.putInt(k, a.getInt(1))
                    "l" -> e.putLong(k, a.getLong(1))
                    "b" -> e.putBoolean(k, a.getBoolean(1))
                    "f" -> e.putFloat(k, a.getDouble(1).toFloat())
                    "s" -> e.putString(k, a.getString(1))
                    "ss" -> {
                        val arr = a.getJSONArray(1)
                        e.putStringSet(k, (0 until arr.length()).map { arr.getString(it) }.toSet())
                    }
                }
            }
            e.commit()
            meta().edit().putLong("base_$profile", remote.rev).putLong("rev_$profile", remote.rev)
                .putBoolean("dirty_$profile", false).apply()
            Store.reloadFromSync(profile)
            Reminder.schedule(app)
        }
    }

    /** Everything in this kid's file, with its type, so it can be written back exactly. */
    private fun snapshot(profile: String): JSONObject {
        val o = JSONObject()
        app.getSharedPreferences(profile, Context.MODE_PRIVATE).all.forEach { (k, v) ->
            val a = when (v) {
                is Int -> JSONArray().put("i").put(v)
                is Long -> JSONArray().put("l").put(v)
                is Boolean -> JSONArray().put("b").put(v)
                is Float -> JSONArray().put("f").put(v.toDouble())
                is String -> JSONArray().put("s").put(v)
                is Set<*> -> JSONArray().put("ss").put(JSONArray(v.map { it.toString() }))
                else -> null
            }
            if (a != null) o.put(k, a)
        }
        return o
    }

    /** How much was built up: word levels + furniture + friends + extra houses. */
    private fun score(d: JSONObject): Int {
        fun str(k: String): String? = d.optJSONArray(k)?.optString(1)
        var s = 0
        try {
            str("levels")?.let { val lv = JSONObject(it); lv.keys().forEach { k -> s += lv.optInt(k) } }
            str("items")?.let { s += JSONObject(it).length() * 3 }
            str("buddies")?.let { s += JSONArray(it).length() * 5 }
            str("layouts")?.let { s += JSONArray(it).length() * 5 }
            s += (d.optJSONArray("points")?.optInt(1) ?: 0) / 50
        } catch (_: Exception) { }
        return s
    }

    private fun setStatus(s: String) {
        lastStatus = s
        meta().edit().putString("status", s).apply()
    }

    private fun headers(c: HttpURLConnection, token: String) {
        c.setRequestProperty("Authorization", "Bearer $token")
        c.setRequestProperty("Accept", "application/vnd.github+json")
        c.setRequestProperty("X-GitHub-Api-Version", "2022-11-28")
        c.setRequestProperty("User-Agent", "kids-learning-app")
        c.setRequestProperty("Cache-Control", "no-cache")
        c.useCaches = false
        c.connectTimeout = 15000
        c.readTimeout = 30000
    }

    private fun errorText(c: HttpURLConnection): String = try {
        val body = c.errorStream?.bufferedReader()?.readText() ?: ""
        JSONObject(body).optString("message", body).take(150)
    } catch (e: Exception) { "" }

    private fun get(token: String, profile: String): Remote? {
        val c = URL("https://api.github.com/repos/$REPO/contents/$DIR/$profile.json?t=${System.currentTimeMillis()}")
            .openConnection() as HttpURLConnection
        headers(c, token)
        try {
            val code = c.responseCode
            if (code == 404) return null
            if (code !in 200..299) throw IOException("HTTP $code ${errorText(c)}")
            val meta = JSONObject(c.inputStream.bufferedReader().readText())
            val text = String(Base64.decode(meta.getString("content"), Base64.DEFAULT))
            val o = JSONObject(text)
            return Remote(meta.getString("sha"), o.getLong("rev"), o.optString("device"), o.getJSONObject("data"))
        } finally { c.disconnect() }
    }

    /** Creates or replaces a file. False when the file changed under us (409/422 on an update). */
    private fun put(token: String, path: String, bytes: ByteArray, message: String, sha: String?): Boolean {
        val c = URL("https://api.github.com/repos/$REPO/contents/$path").openConnection() as HttpURLConnection
        c.requestMethod = "PUT"
        c.doOutput = true
        headers(c, token)
        c.setRequestProperty("Content-Type", "application/json")
        try {
            val body = JSONObject().put("message", message).put("content", Base64.encodeToString(bytes, Base64.NO_WRAP))
            if (sha != null) body.put("sha", sha)
            c.outputStream.use { it.write(body.toString().toByteArray()) }
            val code = c.responseCode
            if (code in 200..299) return true
            if (code == 409 || code == 422) return false
            throw IOException("HTTP $code ${errorText(c)}")
        } finally { c.disconnect() }
    }
}

/** Settings part: is this kid's game shared between devices, and what happened last time. */
@Composable
fun SyncSettings() {
    val ctx = LocalContext.current
    var on by remember { mutableStateOf(Sync.enabled) }
    Text("משחק בכמה מכשירים 📱↔️📲", fontSize = 20.sp, fontWeight = FontWeight.Bold, color = Ink)
    Text(
        Store.g(
            "הבית, הנקודות, החברים והמילים שלך נשמרים בענן, אז אפשר לשחק גם בטלפון וגם בטאבלט ולהמשיך מאותו מקום.",
            "הבית, הנקודות, החברים והמילים שלך נשמרים בענן, אז אפשר לשחק בכמה מכשירים ולהמשיך מאותו מקום.",
        ),
        fontSize = 15.sp, color = Ink,
    )
    if (!Report.hasToken(ctx)) {
        Text("כדי לסנכרן צריך להגדיר במכשיר הזה את מפתח השליחה (למטה, אצל דיווחים על בעיות).", fontSize = 15.sp, color = Orange)
    }
    if (on && Sync.lastStatus.isNotEmpty()) {
        Text(Sync.lastStatus, fontSize = 15.sp, color = if (Sync.lastStatus.contains("✓")) Green else Red)
    }
    if (on) {
        TextButton(onClick = { Store.profile?.let { Sync.now(it) } }) { Text("לסנכרן עכשיו 🔄", fontSize = 16.sp) }
    }
    TextButton(onClick = { on = !on; Sync.enabled = on }) {
        Text(if (on) "לכבות סנכרון במכשיר הזה" else "להדליק סנכרון במכשיר הזה", fontSize = 15.sp)
    }
}
