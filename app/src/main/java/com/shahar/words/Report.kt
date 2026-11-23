package com.shahar.words

import android.app.Activity
import android.content.Context
import android.content.ContextWrapper
import android.graphics.Bitmap
import android.os.Build
import android.os.Handler
import android.os.Looper
import android.util.Base64
import android.view.PixelCopy
import android.widget.Toast
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.FlowRow
import androidx.compose.foundation.layout.ExperimentalLayoutApi
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.heightIn
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material3.AlertDialog
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Text
import androidx.compose.material3.TextButton
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableIntStateOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.alpha
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.asImageBitmap
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.launch
import kotlinx.coroutines.sync.Mutex
import kotlinx.coroutines.sync.withLock
import kotlinx.coroutines.withContext
import org.json.JSONObject
import java.io.ByteArrayOutputStream
import java.io.File
import java.io.IOException
import java.net.HttpURLConnection
import java.net.URL
import java.time.LocalDateTime
import java.time.format.DateTimeFormatter

/**
 * "Something's wrong here" reports. A report = screenshot + short text + what was on screen.
 * It is saved on the phone first, then uploaded to reports/ in the private repo dmeltz/my-practice-data.
 * If there is no internet or no key yet, it waits on the phone and is sent later.
 */
object Report {
    private const val REPO = "dmeltz/my-practice-data"
    private const val DIR = "reports"

    /** The screen the kid is on, set by App(). */
    var screen = ""
    /** The question on screen right now, set by the practice screens (cleared when the screen changes). */
    var question = ""

    var pending by mutableIntStateOf(0)
    /** Result of the last upload try, shown in Settings so a parent can see why nothing arrives. */
    var lastStatus by mutableStateOf("")
    private val scope = MainScope()
    private val lock = Mutex()

    private fun prefs(ctx: Context) = ctx.getSharedPreferences("reports", Context.MODE_PRIVATE)

    /** The key the parent pasted in Settings; else one built into the APK (empty by default). */
    fun token(ctx: Context): String =
        clean(prefs(ctx).getString("token", null) ?: "").takeUnless { it.isEmpty() } ?: BuildConfig.REPORT_TOKEN

    /**
     * GitHub keys are only A-Z, a-z, 0-9 and "_". A key copied from WhatsApp in Hebrew often carries invisible
     * direction marks (U+200E/U+200F) or spaces; those made the HTTP header invalid and every upload failed.
     */
    private fun clean(t: String) = t.filter { it in 'a'..'z' || it in 'A'..'Z' || it in '0'..'9' || it == '_' }

    fun hasToken(ctx: Context) = token(ctx).isNotEmpty()

    fun setToken(ctx: Context, t: String) {
        prefs(ctx).edit().putString("token", clean(t)).apply()
        flush(ctx)
        Store.profile?.let { Sync.now(it) }
    }

    private fun queue(ctx: Context) = File(ctx.filesDir, "reports").apply { mkdirs() }

    fun refreshCount(ctx: Context) {
        pending = queue(ctx).listFiles { f -> f.name.endsWith(".md") }?.size ?: 0
    }

    /** Takes a picture of the whole window (works for the 3D house too) and hands it back on the main thread. */
    fun capture(activity: Activity, done: (Bitmap?) -> Unit) {
        val view = activity.window.decorView
        if (view.width == 0 || view.height == 0) return done(null)
        val bmp = Bitmap.createBitmap(view.width, view.height, Bitmap.Config.ARGB_8888)
        try {
            PixelCopy.request(activity.window, bmp, { res ->
                done(if (res == PixelCopy.SUCCESS) bmp else null)
            }, Handler(Looper.getMainLooper()))
        } catch (e: Exception) {
            done(null)
        }
    }

    private fun jpeg(bmp: Bitmap): ByteArray {
        val maxW = 720
        val small = if (bmp.width > maxW) Bitmap.createScaledBitmap(bmp, maxW, bmp.height * maxW / bmp.width, true) else bmp
        return ByteArrayOutputStream().also { small.compress(Bitmap.CompressFormat.JPEG, 80, it) }.toByteArray()
    }

    /** Saves the report on the phone, then tries to send everything that is waiting. */
    fun submit(ctx: Context, kind: String, text: String, shot: Bitmap?, screenName: String, questionText: String) {
        val app = ctx.applicationContext
        val now = LocalDateTime.now()
        val who = Store.profile ?: "unknown"
        val id = now.format(DateTimeFormatter.ofPattern("yyyy-MM-dd_HHmmss")) + "_" + who
        scope.launch {
            withContext(Dispatchers.IO) {
                val dir = queue(app)
                if (shot != null) File(dir, "$id.jpg").writeBytes(jpeg(shot))
                val md = buildString {
                    appendLine("# דיווח: $kind")
                    appendLine()
                    appendLine("- **מי:** ${Store.name} ($who)")
                    appendLine("- **מתי:** ${now.format(DateTimeFormatter.ofPattern("dd.MM.yyyy HH:mm"))}")
                    appendLine("- **גרסה:** ${Updater.currentBuild(app)}")
                    appendLine("- **מסך:** $screenName")
                    appendLine("- **מכשיר:** ${Build.MANUFACTURER} ${Build.MODEL} (Android ${Build.VERSION.RELEASE})")
                    appendLine("- **סטטוס:** open")
                    appendLine()
                    appendLine("## מה קרה")
                    appendLine()
                    appendLine(text.ifBlank { "(בלי תיאור)" })
                    appendLine()
                    if (questionText.isNotBlank()) {
                        appendLine("## השאלה האחרונה שהוצגה במסך הזה")
                        appendLine()
                        appendLine("```")
                        appendLine(questionText)
                        appendLine("```")
                        appendLine()
                    }
                    if (shot != null) appendLine("![צילום מסך]($id.jpg)")
                }
                File(dir, "$id.md").writeText(md)
            }
            refreshCount(app)
            val sent = send(app)
            val msg = when {
                sent -> "תודה! הדיווח נשלח לאבא 💜"
                !hasToken(app) -> "תודה! הדיווח נשמר בטלפון. אבא צריך להגדיר מפתח שליחה בהגדרות 💜"
                else -> "תודה! הדיווח נשמר בטלפון ויישלח אחר כך 💜"
            }
            Toast.makeText(app, msg, Toast.LENGTH_LONG).show()
        }
    }

    /** Sends waiting reports and practice data in the background (on app start, after a new key, from Settings). */
    fun flush(ctx: Context) {
        val app = ctx.applicationContext
        refreshCount(app)
        if (pending == 0 && Stats.waiting(app) == 0) return
        scope.launch { send(app) }
    }

    /** Uploads every waiting report. True when nothing is left waiting. */
    private suspend fun send(ctx: Context): Boolean = lock.withLock {
        val token = token(ctx)
        if (token.isEmpty()) {
            setStatus(ctx, "לא נשלח: אין מפתח שליחה")
            return@withLock false
        }
        var error: String? = null
        var sentAny = false
        withContext(Dispatchers.IO) {
            val dir = queue(ctx)
            val reports = dir.listFiles { f -> f.name.endsWith(".md") }?.sortedBy { it.name } ?: emptyList()
            for (md in reports) {
                val id = md.name.removeSuffix(".md")
                val jpg = File(dir, "$id.jpg")
                try {
                    if (jpg.exists()) {
                        put(token, "$DIR/$id.jpg", jpg.readBytes(), "Report $id (screenshot)")
                        jpg.delete()
                    }
                    put(token, "$DIR/$id.md", md.readBytes(), "Report $id")
                    md.delete()
                    sentAny = true
                } catch (e: Exception) {
                    error = explain(e)
                    break
                }
            }
            // Finished practice rounds (performance data), see Stats.kt.
            for (f in Stats.outbox(ctx)) {
                try {
                    put(token, Stats.remotePath(f), f.readBytes(), "Practice data ${f.name}")
                    f.delete()
                    sentAny = true
                } catch (e: Exception) {
                    error = explain(e)
                    break
                }
            }
        }
        val time = LocalDateTime.now().format(DateTimeFormatter.ofPattern("dd.MM HH:mm"))
        when {
            error != null -> setStatus(ctx, "שליחה נכשלה ($time): $error")
            sentAny -> setStatus(ctx, "נשלח בהצלחה ✓ ($time)")
        }
        refreshCount(ctx)
        pending == 0
    }

    private fun setStatus(ctx: Context, s: String) {
        lastStatus = s
        prefs(ctx).edit().putString("status", s).apply()
    }

    fun loadStatus(ctx: Context) {
        if (lastStatus.isEmpty()) lastStatus = prefs(ctx).getString("status", "") ?: ""
    }

    /** Turns an upload error into words a parent can act on. */
    private fun explain(e: Exception): String {
        val m = e.message ?: e.javaClass.simpleName
        return when {
            m.startsWith("HTTP 401") -> "המפתח לא תקין או שפג תוקפו (401). צריך ליצור מפתח חדש."
            m.startsWith("HTTP 403") -> "למפתח אין הרשאת כתיבה (403). ב-GitHub צריך לתת לו Contents: Read and write. $m"
            m.startsWith("HTTP 404") -> "המפתח לא רואה את הריפו my-practice-data (404). צריך לבחור אותו ב-Repository access של המפתח."
            m.startsWith("HTTP") -> m
            e is java.net.UnknownHostException -> "אין אינטרנט"
            else -> "${e.javaClass.simpleName}: $m"
        }
    }

    /** Settings "check key" button: asks GitHub what this key may do with the repo. */
    fun checkKey(ctx: Context) {
        val app = ctx.applicationContext
        val token = token(app)
        if (token.isEmpty()) { setStatus(app, "אין מפתח שליחה"); return }
        lastStatus = "בודקים..."
        scope.launch {
            val res = withContext(Dispatchers.IO) {
                try {
                    val c = URL("https://api.github.com/repos/$REPO").openConnection() as HttpURLConnection
                    c.connectTimeout = 15000
                    c.readTimeout = 15000
                    headers(c, token)
                    try {
                        val code = c.responseCode
                        if (code !in 200..299) throw IOException("HTTP $code ${errorText(c)}")
                        val perms = JSONObject(c.inputStream.bufferedReader().readText()).optJSONObject("permissions")
                        if (perms != null && !perms.optBoolean("push", true)) "המפתח רואה את הריפו אבל בלי הרשאת כתיבה. צריך Contents: Read and write."
                        else "המפתח תקין ורואה את my-practice-data ✓"
                    } finally { c.disconnect() }
                } catch (e: Exception) {
                    "בדיקה נכשלה: " + explain(e)
                }
            }
            setStatus(app, res)
            if (res.endsWith("✓")) send(app)
        }
    }

    private fun headers(c: HttpURLConnection, token: String) {
        c.setRequestProperty("Authorization", "Bearer $token")
        c.setRequestProperty("Accept", "application/vnd.github+json")
        c.setRequestProperty("X-GitHub-Api-Version", "2022-11-28")
        c.setRequestProperty("User-Agent", "kids-learning-app")
    }

    private fun errorText(c: HttpURLConnection): String = try {
        val body = c.errorStream?.bufferedReader()?.readText() ?: ""
        JSONObject(body).optString("message", body).take(150)
    } catch (e: Exception) { "" }

    /** Creates one file in the repo with the GitHub contents API. */
    private fun put(token: String, path: String, bytes: ByteArray, message: String) {
        val c = URL("https://api.github.com/repos/$REPO/contents/$path").openConnection() as HttpURLConnection
        c.requestMethod = "PUT"
        c.connectTimeout = 15000
        c.readTimeout = 30000
        c.doOutput = true
        headers(c, token)
        c.setRequestProperty("Content-Type", "application/json")
        try {
            val body = JSONObject()
                .put("message", message)
                .put("content", Base64.encodeToString(bytes, Base64.NO_WRAP))
            c.outputStream.use { it.write(body.toString().toByteArray()) }
            val code = c.responseCode
            // 422 = the file is already there (sent before, but the answer got lost). Treat as sent.
            if (code !in 200..299 && code != 422) throw IOException("HTTP $code ${errorText(c)}")
        } finally {
            c.disconnect()
        }
    }
}

private fun Context.findActivity(): Activity? {
    var c: Context? = this
    while (c is ContextWrapper) {
        if (c is Activity) return c
        c = c.baseContext
    }
    return null
}

/** Small floating button on every screen. Takes the screenshot first, then opens the report form. */
@Composable
fun ReportButton(modifier: Modifier = Modifier) {
    val ctx = LocalContext.current
    var shot by remember { mutableStateOf<Bitmap?>(null) }
    var open by remember { mutableStateOf(false) }
    var screenName by remember { mutableStateOf("") }
    var questionText by remember { mutableStateOf("") }
    Box(
        modifier.size(44.dp).alpha(0.75f).clip(CircleShape).background(Color.White)
            .border(2.dp, Color(0xFFFFB3C8), CircleShape)
            .clickable {
                screenName = Report.screen
                questionText = Report.question
                val act = ctx.findActivity()
                if (act == null) { shot = null; open = true }
                else Report.capture(act) { shot = it; open = true }
            },
        contentAlignment = Alignment.Center,
    ) {
        Text("🐞", fontSize = 22.sp)
    }
    if (open) {
        ReportDialog(shot, onDismiss = { open = false; shot = null }) { kind, text ->
            Report.submit(ctx, kind, text, shot, screenName, questionText)
            open = false
            shot = null
        }
    }
}

@OptIn(ExperimentalLayoutApi::class)
@Composable
fun ReportDialog(shot: Bitmap?, onDismiss: () -> Unit, onSend: (String, String) -> Unit) {
    val kinds = listOf("שאלה מבלבלת 🤔", "טעות בחישוב 🔢", "טעות בטקסט ✏️", "משהו לא עובד 🛠️", "אחר 💬")
    var kind by remember { mutableStateOf(kinds[0]) }
    var text by remember { mutableStateOf("") }
    AlertDialog(
        onDismissRequest = onDismiss,
        title = { Text("משהו לא בסדר? 🐞", fontWeight = FontWeight.Bold) },
        text = {
            Column(Modifier.verticalScroll(rememberScrollState()), verticalArrangement = Arrangement.spacedBy(10.dp)) {
                if (shot != null) {
                    Image(
                        shot.asImageBitmap(), contentDescription = "צילום מסך",
                        modifier = Modifier.fillMaxWidth().heightIn(max = 220.dp).clip(RoundedCornerShape(12.dp))
                            .border(1.dp, Color(0xFFDDD5EE), RoundedCornerShape(12.dp)),
                        contentScale = ContentScale.Fit,
                    )
                    Text("צילום המסך יישלח עם הדיווח", fontSize = 13.sp, color = Ink)
                }
                FlowRow(horizontalArrangement = Arrangement.spacedBy(6.dp), verticalArrangement = Arrangement.spacedBy(6.dp)) {
                    kinds.forEach { k ->
                        val on = k == kind
                        Text(
                            k, fontSize = 15.sp, color = if (on) Color.White else Ink,
                            modifier = Modifier.clip(RoundedCornerShape(14.dp))
                                .background(if (on) Purple else Color(0xFFF1ECFF))
                                .clickable { kind = k }
                                .padding(horizontal = 10.dp, vertical = 6.dp),
                        )
                    }
                }
                OutlinedTextField(
                    value = text,
                    onValueChange = { text = it.take(500) },
                    label = { Text(Store.g("ספרי במילים שלך מה לא בסדר", "ספר במילים שלך מה לא בסדר")) },
                    minLines = 2,
                    modifier = Modifier.fillMaxWidth(),
                )
            }
        },
        confirmButton = { TextButton(onClick = { onSend(kind, text) }) { Text("שליחה ✉️", fontSize = 17.sp) } },
        dismissButton = { TextButton(onClick = onDismiss) { Text("ביטול") } },
    )
}

/** Parent part of Settings: the upload key and the waiting reports. */
@Composable
fun ReportSettings() {
    val ctx = LocalContext.current
    var editing by remember { mutableStateOf(false) }
    var key by remember { mutableStateOf("") }
    LaunchedEffect(Unit) { Report.refreshCount(ctx); Report.loadStatus(ctx) }
    Text("דיווחים על בעיות 🐞", fontSize = 20.sp, fontWeight = FontWeight.Bold, color = Ink)
    Text(
        "בכל מסך יש כפתור 🐞 קטן בפינה. הדיווח (צילום מסך + תיאור) נשמר ונשלח לתיקיית reports בריפו my-practice-data.",
        fontSize = 15.sp, color = Ink,
    )
    Text(
        if (Report.hasToken(ctx)) "מפתח שליחה: מוגדר ✓" else "מפתח שליחה: עוד לא הוגדר. הדיווחים נשמרים בטלפון עד שיוגדר.",
        fontSize = 15.sp, color = if (Report.hasToken(ctx)) Green else Orange,
    )
    if (Report.lastStatus.isNotEmpty()) {
        Text(Report.lastStatus, fontSize = 15.sp, color = if (Report.lastStatus.contains("✓")) Green else Red)
    }
    if (Report.hasToken(ctx)) TextButton(onClick = { Report.checkKey(ctx) }) { Text("בדיקת המפתח והחיבור 🔍", fontSize = 16.sp) }
    Text("גם נתוני התרגול (כל תשובה, נכון/לא, כמה זמן לקח) נשלחים לתיקיית stats באותו ריפו, כדי שאפשר יהיה לנתח ולהתאים את התרגול.", fontSize = 15.sp, color = Ink)
    val statsWaiting = remember(Report.pending) { Stats.waiting(ctx) }
    if (statsWaiting > 0) Text("סבבי תרגול שמחכים לשליחה: $statsWaiting", fontSize = 15.sp, color = Ink)
    if (Report.pending > 0 || statsWaiting > 0) {
        if (Report.pending > 0) Text("דיווחים שמחכים לשליחה: ${Report.pending}", fontSize = 15.sp, color = Ink)
        TextButton(onClick = { Report.flush(ctx) }) { Text("לשלוח עכשיו 📤", fontSize = 16.sp) }
    }
    if (editing) {
        OutlinedTextField(
            value = key, onValueChange = { key = it }, singleLine = true,
            label = { Text("GitHub token") }, modifier = Modifier.fillMaxWidth(),
        )
        BigButton("שמירת המפתח", Purple) {
            Report.setToken(ctx, key)
            key = ""
            editing = false
        }
    } else {
        TextButton(onClick = { editing = true }) { Text("הגדרת מפתח שליחה 🔑", fontSize = 16.sp) }
    }
}
