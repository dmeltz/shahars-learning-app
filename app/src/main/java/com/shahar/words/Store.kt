package com.shahar.words

import android.content.Context
import android.content.SharedPreferences
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableIntStateOf
import androidx.compose.runtime.mutableLongStateOf
import androidx.compose.runtime.mutableStateListOf
import androidx.compose.runtime.mutableStateMapOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.setValue
import androidx.compose.ui.graphics.Color
import org.json.JSONArray
import org.json.JSONObject
import java.time.LocalDate
import kotlin.random.Random

/**
 * Where an item is. x/y are its spot in the old flat room picture (kept so nothing is lost);
 * gx/gz/rot are its spot and turn in the 3D house, NaN until the item is first moved there.
 */
data class Placement(
    val x: Float,
    val y: Float,
    val inRoom: Boolean,
    val room: Int = 0,
    val gx: Float = Float.NaN,
    val gz: Float = Float.NaN,
    val rot: Int = 0,
)

data class ShopItem(
    val id: String,
    val emoji: String,
    val he: String,
    val en: String,
    val price: Int,
    val size: Int = 52,
    val wall: Boolean = false,
    val room: Int = 0,
    /** Can be bought again and again (the starter furniture). Copies are kept as "table~2", "table~3"... */
    val multi: Boolean = false,
)

/** The shop item an owned item is: "table~2" is a second "table". */
fun shopItemOf(key: String): ShopItem? = SHOP.firstOrNull { it.id == key.substringBefore('~') }

/** Furniture every kid gets when moving in. It is a normal item: it can be moved, stored and bought again. */
val GIFT_ITEMS = listOf("bedrug", "nightstand", "table", "livrug", "coffee", "sink")

data class WallColor(val id: String, val he: String, val color: Color, val price: Int)

val SHOP = listOf(
    ShopItem("bed", "🛏️", "מיטה", "bed", 300, 68, wall = false, room = 0),
    ShopItem("nightstand", "🗄️", "שידה", "nightstand", 150, 52, room = 0, multi = true),
    ShopItem("bedrug", "🟪", "שטיח ורוד", "rug", 120, 52, room = 0, multi = true),
    ShopItem("teddy", "🧸", "דובי", "teddy bear", 150, 44, wall = false, room = 0),
    ShopItem("lamp", "💡", "מנורה", "lamp", 120, 40, wall = true, room = 0),
    ShopItem("picture", "🖼️", "תמונה", "picture", 140, 48, wall = true, room = 0),
    ShopItem("clock", "🕰️", "שעון", "clock", 130, 40, wall = true, room = 0),
    ShopItem("books", "📚", "ספרים", "books", 100, 40, wall = false, room = 0),
    ShopItem("guitar", "🎸", "גיטרה", "guitar", 350, 52, wall = false, room = 0),
    ShopItem("game", "🎮", "משחק מחשב", "video game", 500, 44, wall = false, room = 0),
    ShopItem("unicorn", "🦄", "חד קרן", "unicorn", 900, 56, wall = false, room = 0),
    ShopItem("table", "🍽️", "שולחן אוכל", "table", 300, 60, room = 1, multi = true),
    ShopItem("chair", "🪑", "כיסא", "chair", 120, 52, wall = false, room = 1),
    ShopItem("plates", "🍽️", "צלחות", "plates", 100, 44, wall = false, room = 1),
    ShopItem("pizza", "🍕", "פיצה", "pizza", 150, 44, wall = false, room = 1),
    ShopItem("cake", "🎂", "עוגה", "cake", 200, 44, wall = false, room = 1),
    ShopItem("teapot", "🫖", "קנקן תה", "teapot", 180, 44, wall = false, room = 1),
    ShopItem("watermelon", "🍉", "אבטיח", "watermelon", 90, 44, wall = false, room = 1),
    ShopItem("candy", "🍭", "ממתק", "candy", 80, 40, wall = false, room = 1),
    ShopItem("cupcake", "🧁", "קאפקייק", "cupcake", 110, 40, wall = false, room = 1),
    ShopItem("candle", "🕯️", "נר", "candle", 90, 40, wall = true, room = 1),
    ShopItem("sofa", "🛋️", "ספה", "sofa", 350, 64, wall = false, room = 2),
    ShopItem("sofa_corner", "🛋️", "ספה פינתית", "corner sofa", 450, 68, wall = false, room = 2),
    ShopItem("loveseat", "🛋️", "ספה קטנה", "small sofa", 250, 56, wall = false, room = 2),
    ShopItem("armchair", "💺", "כורסה", "armchair", 200, 48, wall = false, room = 2),
    ShopItem("beanbag", "🟠", "פוף", "beanbag", 120, 44, wall = false, room = 2),
    ShopItem("rug_round", "🔵", "שטיח עגול", "round rug", 130, 56, room = 0, multi = true),
    ShopItem("rug_stripes", "🟩", "שטיח פסים", "striped rug", 140, 60, room = 2, multi = true),
    ShopItem("rug_heart", "❤️", "שטיח לב", "heart rug", 160, 56, room = 0, multi = true),
    ShopItem("rug_rainbow", "🌈", "שטיח קשת", "rainbow rug", 180, 60, room = 2, multi = true),
    ShopItem("coffee", "☕", "שולחן סלון", "coffee table", 200, 56, room = 2, multi = true),
    ShopItem("livrug", "🟣", "שטיח סגול", "rug", 150, 60, room = 2, multi = true),
    ShopItem("tv", "📺", "טלוויזיה", "TV", 500, 56, wall = false, room = 2),
    ShopItem("piano", "🎹", "פסנתר", "piano", 700, 60, wall = false, room = 2),
    ShopItem("plant", "🪴", "עציץ", "plant", 90, 46, wall = false, room = 2),
    ShopItem("rainbow", "🌈", "קשת", "rainbow", 300, 52, wall = true, room = 2),
    ShopItem("puzzle", "🧩", "פאזל", "puzzle", 120, 40, wall = false, room = 2),
    ShopItem("cat", "🐱", "חתול", "cat", 600, 48, wall = false, room = 2),
    ShopItem("dog", "🐶", "כלב", "dog", 600, 48, wall = false, room = 2),
    ShopItem("bathtub", "🛁", "אמבטיה", "bathtub", 400, 64, wall = false, room = 3),
    ShopItem("sink", "🚰", "כיור", "sink", 250, 60, room = 3, multi = true),
    ShopItem("toilet", "🚽", "שירותים", "toilet", 250, 56, wall = false, room = 3),
    ShopItem("mirror", "🪞", "מראה", "mirror", 200, 48, wall = true, room = 3),
    ShopItem("soap", "🧼", "סבון", "soap", 60, 36, wall = false, room = 3),
    ShopItem("duck", "🦆", "ברווז גומי", "rubber duck", 90, 40, wall = false, room = 3),
    ShopItem("toothbrush", "🪥", "מברשת שיניים", "toothbrush", 70, 36, wall = false, room = 3),
    ShopItem("lotion", "🧴", "קרם", "lotion", 80, 36, wall = false, room = 3),
    ShopItem("sponge", "🧽", "ספוג", "sponge", 60, 36, wall = false, room = 3),
    ShopItem("tree", "🌳", "עץ", "tree", 400, 80, wall = false, room = 4),
    ShopItem("flower", "🌻", "פרח", "flower", 90, 40, wall = false, room = 4),
    ShopItem("tulips", "🌷", "צבעונים", "tulips", 90, 40, wall = false, room = 4),
    ShopItem("mushroom", "🍄", "פטרייה", "mushroom", 80, 36, wall = false, room = 4),
    ShopItem("ball", "⚽", "כדור", "ball", 110, 40, wall = false, room = 4),
    ShopItem("butterfly", "🦋", "פרפר", "butterfly", 120, 36, wall = true, room = 4),
    ShopItem("bee", "🐝", "דבורה", "bee", 100, 32, wall = true, room = 4),
    ShopItem("bunny", "🐇", "ארנב", "rabbit", 500, 48, wall = false, room = 4),
    ShopItem("fountain", "⛲", "מזרקה", "fountain", 700, 64, wall = false, room = 4),
    ShopItem("goal", "🥅", "שער כדורגל", "soccer goal", 450, 64, wall = false, room = 4),
    ShopItem("hoop", "🏀", "סל כדורסל", "basketball hoop", 450, 72, wall = false, room = 4),
)

val WALLS = listOf(
    WallColor("cream", "קרם", Color(0xFFFFF1DC), 0),
    WallColor("pink", "ורוד", Color(0xFFFFD1E3), 60),
    WallColor("sky", "תכלת", Color(0xFFCDEBFF), 60),
    WallColor("mint", "מנטה", Color(0xFFCFF5E1), 60),
    WallColor("lavender", "סגול", Color(0xFFE3D7FF), 80),
)

val ROOMS = listOf("חדר שינה", "חדר אוכל", "סלון", "חדר אמבטיה", "גינה")

const val SHAHAR = "shahar"
const val TOMER = "tomer"
const val NO_EXAM = Long.MIN_VALUE
private val SHAHAR_EXAM = LocalDate.of(2026, 11, 24).toEpochDay()
/** Tomer's gifted-screening test (stage A). */
val TOMER_GIFTED_EXAM: Long = LocalDate.of(2026, 11, 30).toEpochDay()

object Store {
    private lateinit var prefs: SharedPreferences
    private lateinit var meta: SharedPreferences
    private lateinit var appContext: Context

    /** Who is playing. null until someone picks on a fresh install. Each kid has their own saved data. */
    var profile by mutableStateOf<String?>(null)
    var points by mutableIntStateOf(0)
    var streak by mutableIntStateOf(0)
    var lastPracticeDay by mutableLongStateOf(-1L)
    var examDay by mutableLongStateOf(SHAHAR_EXAM)
    var reminderHour by mutableIntStateOf(17)
    var reminderMinute by mutableIntStateOf(0)
    val roomWalls = mutableStateListOf("cream", "cream", "cream", "sky", "cream")
    var room by mutableIntStateOf(0)
    val levels = mutableStateMapOf<String, Int>()
    val items = mutableStateMapOf<String, Placement>()
    val walls = mutableStateListOf("cream")
    val buddies = mutableStateListOf("boni")
    /** The first, free friend. Shahar got Boni; Tomer picks his own on his first visit. */
    var starter by mutableStateOf("boni")
    /** The house template (layouts.json). Everyone starts in "classic" and picks once on their next house visit. */
    var layout by mutableStateOf("classic")
    var layoutChosen by mutableStateOf(false)
    /** Templates bought with points (the free ones are always yours). */
    val boughtLayouts = mutableStateListOf<String>()
    /** A parent can pause English for Tomer so the app is all about the gifted test. */
    var englishPaused by mutableStateOf(false)
    /**
     * Parent's device setup. null = shared device (anyone can pick a player).
     * SHAHAR = Shahar's phone, English only. TOMER = Tomer's tablet, gifted-test prep only.
     * Kept in the "profiles" file, so it never touches either kid's points or house.
     */
    var deviceLock by mutableStateOf<String?>(null)

    /** Parent's device: anyone can pick a player, and the updater also offers test (pre-release) builds. */
    var parentDevice by mutableStateOf(false)

    val isTomer: Boolean get() = profile == TOMER
    val name: String get() = if (isTomer) "תומר" else "שחר"
    val words: List<Word> get() = if (isTomer) TOMER_WORDS else WORDS
    val hasExam: Boolean get() = examDay != NO_EXAM

    /** Picks the girl's or the boy's form of a Hebrew phrase. */
    fun g(fem: String, masc: String): String = if (isTomer) masc else fem

    @Synchronized
    fun init(ctx: Context) {
        if (::prefs.isInitialized) return
        appContext = ctx.applicationContext
        Sync.init(appContext)
        meta = appContext.getSharedPreferences("profiles", Context.MODE_PRIVATE)
        deviceLock = meta.getString("deviceLock", null)?.takeIf { it == SHAHAR || it == TOMER }
        parentDevice = deviceLock == null && meta.getBoolean("parentDevice", false)
        var cur = deviceLock ?: meta.getString("current", null)
        // Shahar's phone already has her data: keep going straight to her, no picker.
        if (cur == null && appContext.getSharedPreferences(SHAHAR, Context.MODE_PRIVATE).contains("points")) {
            cur = SHAHAR
            meta.edit().putString("current", cur).apply()
        }
        if (cur != null && cur != meta.getString("current", null)) meta.edit().putString("current", cur).apply()
        profile = cur
        load(cur ?: SHAHAR)
    }

    @Synchronized
    fun choose(p: String) {
        profile = p
        meta.edit().putString("current", p).apply()
        load(p)
        WordsWidget.updateAll(appContext)
        Sync.now(p)
    }

    /** Sync.kt took this kid's game from another device: show it if this kid is on screen. */
    @Synchronized
    fun reloadFromSync(p: String) {
        if (::prefs.isInitialized && profile == p) {
            load(p)
            WordsWidget.updateAll(appContext)
        }
    }

    private fun load(p: String) {
        // Shahar keeps the original "shahar" file, so nothing of hers moves or changes.
        prefs = appContext.getSharedPreferences(p, Context.MODE_PRIVATE)
        points = prefs.getInt("points", 0)
        streak = prefs.getInt("streak", 0)
        lastPracticeDay = prefs.getLong("lastDay", -1L)
        examDay = prefs.getLong("examDay", if (p == TOMER) NO_EXAM else SHAHAR_EXAM)
        // Tomer: once, set his countdown to the gifted test. A parent can still change it in Settings.
        if (p == TOMER && !prefs.getBoolean("giftedInit", false)) {
            examDay = TOMER_GIFTED_EXAM
            prefs.edit().putBoolean("giftedInit", true).putLong("examDay", examDay).apply()
        }
        englishPaused = p == TOMER && prefs.getBoolean("englishPaused", false)
        reminderHour = prefs.getInt("remH", 17)
        reminderMinute = prefs.getInt("remM", 0)
        val defaultWalls = listOf("cream", "cream", "cream", "sky", "cream")
        roomWalls[0] = prefs.getString("wall", "cream") ?: "cream"
        for (i in 1 until ROOMS.size) {
            roomWalls[i] = prefs.getString("wall$i", defaultWalls[i]) ?: defaultWalls[i]
        }
        room = prefs.getInt("room", 0).coerceIn(0, ROOMS.size - 1)
        layout = prefs.getString("layout", "classic") ?: "classic"
        layoutChosen = prefs.getBoolean("layoutChosen", false)
        boughtLayouts.clear()
        val ll = JSONArray(prefs.getString("layouts", "[]") ?: "[]")
        for (i in 0 until ll.length()) boughtLayouts.add(ll.getString(i))

        levels.clear()
        val lv = JSONObject(prefs.getString("levels", "{}") ?: "{}")
        lv.keys().forEach { k -> levels[k] = lv.getInt(k) }

        items.clear()
        val its = JSONObject(prefs.getString("items", "{}") ?: "{}")
        its.keys().forEach { k ->
            val o = its.getJSONObject(k)
            items[k] = Placement(
                o.getDouble("x").toFloat(), o.getDouble("y").toFloat(), o.getBoolean("r"), o.optInt("m", 0),
                o.optDouble("gx", Double.NaN).toFloat(), o.optDouble("gz", Double.NaN).toFloat(), o.optInt("rot", 0),
            )
        }
        // The furniture that used to be built into the rooms is now the kid's own (same spot as before).
        if (!prefs.getBoolean("gift", false)) {
            for (id in GIFT_ITEMS) {
                val item = shopItemOf(id) ?: continue
                if (!items.containsKey(id)) items[id] = Placement(0.4f, 0.6f, true, item.room)
            }
        }

        val wl = JSONArray(prefs.getString("walls", "[\"cream\"]") ?: "[\"cream\"]")
        walls.clear()
        for (i in 0 until wl.length()) walls.add(wl.getString(i))
        if (!walls.contains("cream")) walls.add("cream")

        // Tomer starts with no friend until he picks one.
        starter = prefs.getString("starter", if (p == TOMER) "" else "boni") ?: ""
        // Early test builds let Tomer pick one of Shahar's friends. Ask him again with his own set.
        if (p == TOMER && starter.isNotEmpty() && ALL_BUDDIES.none { it.id == starter }) starter = ""
        val defBuddies = if (starter.isEmpty()) "[]" else "[\"$starter\"]"
        val bl = JSONArray(prefs.getString("buddies", defBuddies) ?: defBuddies)
        buddies.clear()
        for (i in 0 until bl.length()) buddies.add(bl.getString(i))
        buddies.retainAll { id -> ALL_BUDDIES.any { it.id == id } }
        if (starter.isNotEmpty() && !buddies.contains(starter)) buddies.add(0, starter)
    }

    fun save() {
        val lv = JSONObject()
        levels.forEach { (k, v) -> lv.put(k, v) }
        val its = JSONObject()
        items.forEach { (k, p) ->
            val o = JSONObject().put("x", p.x.toDouble()).put("y", p.y.toDouble()).put("r", p.inRoom).put("m", p.room)
            if (!p.gx.isNaN() && !p.gz.isNaN()) o.put("gx", p.gx.toDouble()).put("gz", p.gz.toDouble())
            if (p.rot != 0) o.put("rot", p.rot)
            its.put(k, o)
        }
        prefs.edit()
            .putInt("points", points)
            .putInt("streak", streak)
            .putLong("lastDay", lastPracticeDay)
            .putLong("examDay", examDay)
            .putInt("remH", reminderHour)
            .putInt("remM", reminderMinute)
            .putString("wall", roomWalls[0])
            .putString("wall1", roomWalls[1])
            .putString("wall2", roomWalls[2])
            .putString("wall3", roomWalls[3])
            .putString("wall4", roomWalls[4])
            .putInt("room", room)
            .putString("levels", lv.toString())
            .putString("items", its.toString())
            .putBoolean("gift", true)
            .putString("walls", JSONArray(walls.toList()).toString())
            .putString("buddies", JSONArray(buddies.toList()).toString())
            .putString("starter", starter)
            .putString("layout", layout)
            .putBoolean("layoutChosen", layoutChosen)
            .putString("layouts", JSONArray(boughtLayouts.toList()).toString())
            .putBoolean("englishPaused", englishPaused)
            .apply()
        WordsWidget.updateAll(appContext)
        profile?.let { Sync.changed(it) }
    }

    fun today(): Long = LocalDate.now().toEpochDay()

    fun daysUntilExam(): Long = examDay - today()

    fun practicedToday(): Boolean = lastPracticeDay == today()

    fun daysText(): String {
        if (!hasExam) return g("בואי נלמד אנגלית! 🚀", "בוא נלמד אנגלית! 🚀")
        val d = daysUntilExam()
        return when {
            d < 0 -> g("המבחן מאחורייך! 🎉", "המבחן מאחוריך! 🎉")
            d == 0L -> "המבחן היום! בהצלחה 🍀"
            d == 1L -> "המבחן מחר! 💪"
            else -> "עוד $d ימים למבחן"
        }
    }

    fun level(w: Word): Int = levels[w.en] ?: 0

    fun knownCount(): Int = words.count { level(it) >= 3 }

    /** Picks words for a round. Words she doesn't know yet come up much more often. */
    fun pickWords(n: Int): List<Word> {
        val pool = words.toMutableList()
        val out = mutableListOf<Word>()
        repeat(minOf(n, pool.size)) {
            val weights = pool.map { val l = 6 - level(it); (l * l).toDouble() }
            var r = Random.nextDouble() * weights.sum()
            var idx = 0
            while (idx < pool.size - 1 && r >= weights[idx]) {
                r -= weights[idx]
                idx++
            }
            out.add(pool.removeAt(idx))
        }
        return out
    }

    fun recordAnswer(w: Word, correct: Boolean, pts: Int) {
        val l = level(w)
        levels[w.en] = if (correct) minOf(l + 1, 5) else maxOf(l - 2, 0)
        points = maxOf(0, points + pts)
        save()
        Stats.answered(w.en, correct, pts)
    }

    fun recordPhonics(key: String, correct: Boolean, pts: Int) {
        val l = levels[key] ?: 0
        levels[key] = if (correct) minOf(l + 1, 5) else maxOf(l - 2, 0)
        points = maxOf(0, points + pts)
        save()
        Stats.answered(key, correct, pts)
    }

    /** Prep answers: [delta] is the points won (or, when below zero, lost). Points never go below zero. */
    fun recordPrep(key: String, correct: Boolean, delta: Int) {
        val l = levels[key] ?: 0
        levels[key] = if (correct) minOf(l + 1, 5) else maxOf(l - 2, 0)
        points = maxOf(0, points + delta)
        save()
        Stats.answered(key, correct, delta)
    }

    /**
     * Points for one of the English practice / phonics answers, or the end-of-round bonus.
     * Shahar answers her questions in a few seconds, while Tomer's prep questions take him
     * 20 to 60 seconds, so Shahar gets about a quarter of the base points (10 -> 3,
     * 20 -> 5) to keep the two kids' points per minute of practice close.
     * The daily streak bonus and the shop prices are the same for both.
     */
    fun pts(base: Int): Int = if (isTomer) base else (base + 2) / 4

    /**
     * Points Shahar loses for a wrong pick on a question with options (multiple choice, phonics),
     * like Tomer's prep questions: a quarter of what a right answer gives, at least 1.
     * Tomer's English practice (paused for now) stays without a penalty.
     */
    fun miss(base: Int): Int = if (isTomer) 0 else maxOf(1, penalty(pts(base)))

    /** Ends a round. Returns the bonus points she got. */
    fun finishSession(): Int {
        val t = today()
        var bonus = if (isTomer) 25 else pts(20)
        if (lastPracticeDay != t) {
            streak = if (lastPracticeDay == t - 1) streak + 1 else 1
            bonus += 30 + minOf(streak, 5) * 5
            lastPracticeDay = t
        }
        points += bonus
        save()
        Stats.close(finished = true)
        return bonus
    }

    /** How many of this shop item the kid has (in the rooms or in the storeroom). */
    fun countOf(item: ShopItem): Int = items.keys.count { it.substringBefore('~') == item.id }

    fun buy(item: ShopItem): Boolean {
        if ((items.containsKey(item.id) && !item.multi) || points < item.price) return false
        points -= item.price
        val x = 0.1f + Random.nextFloat() * 0.6f
        val y = if (item.wall) 0.12f + Random.nextFloat() * 0.2f else 0.58f + Random.nextFloat() * 0.2f
        var key = item.id
        var n = 2
        while (items.containsKey(key)) key = "${item.id}~${n++}"
        items[key] = Placement(x, y, true, item.room)
        save()
        return true
    }

    fun buyWall(w: WallColor): Boolean {
        if (walls.contains(w.id) || points < w.price) return false
        points -= w.price
        walls.add(w.id)
        roomWalls[room] = w.id
        save()
        return true
    }

    val needsStarter: Boolean get() = starter.isEmpty()

    fun pickStarter(b: Buddy) {
        starter = b.id
        buddies.clear()
        buddies.add(b.id)
        save()
    }

    /** Boni is free only as a first friend; for a kid who started with someone else she costs like the cheapest friend. */
    fun priceOf(b: Buddy): Int = when {
        b.id == starter -> 0
        b.price == 0 -> buddyList().filter { it.price > 0 }.minOf { it.price }
        else -> b.price
    }

    fun buyBuddy(b: Buddy): Boolean {
        val price = priceOf(b)
        if (buddies.contains(b.id) || points < price) return false
        points -= price
        buddies.add(b.id)
        save()
        return true
    }

    fun ownsLayout(l: HouseLayout): Boolean = l.price == 0 || boughtLayouts.contains(l.id)

    /**
     * Moves into another house template. Every item stays in its room, at the same spot
     * relative to the room (so a bed in a corner stays in that corner of the new room).
     */
    fun moveToLayout(id: String) {
        val from = Layouts.byId(appContext, layout)
        val to = Layouts.byId(appContext, id)
        if (from.id != to.id) {
            for ((k, p) in items.toMap()) {
                if (p.gx.isNaN() || p.gz.isNaN()) continue
                val a = from.rooms.getOrNull(p.room) ?: continue
                val b = to.rooms.getOrNull(p.room) ?: continue
                val u = ((p.gx - a.x0) / (a.x1 - a.x0)).coerceIn(0f, 1f)
                val v = ((p.gz - a.z0) / (a.z1 - a.z0)).coerceIn(0f, 1f)
                items[k] = p.copy(gx = b.x0 + u * (b.x1 - b.x0), gz = b.z0 + v * (b.z1 - b.z0))
            }
        }
        layout = to.id
        layoutChosen = true
        save()
    }

    fun buyLayout(l: HouseLayout): Boolean {
        if (ownsLayout(l)) return true
        if (points < l.price) return false
        points -= l.price
        boughtLayouts.add(l.id)
        moveToLayout(l.id)
        return true
    }

    fun setRoomWall(id: String) {
        roomWalls[room] = id
        save()
    }

    fun place(id: String, inRoom: Boolean) {
        val p = items[id] ?: return
        // Back from the storeroom: it goes to the room on screen, to its usual spot there.
        items[id] = if (inRoom) p.copy(inRoom = true, room = room, gx = Float.NaN, gz = Float.NaN) else p.copy(inRoom = false)
        save()
    }

    /** An item was dragged or turned in the 3D house. */
    fun move3d(id: String, gx: Float, gz: Float, rot: Int, newRoom: Int) {
        val p = items[id] ?: return
        if (gx.isNaN() || gz.isNaN()) return
        items[id] = p.copy(gx = gx, gz = gz, rot = rot.mod(4), room = newRoom.coerceIn(0, ROOMS.size - 1))
        save()
    }

    fun move(id: String, dx: Float, dy: Float) {
        val p = items[id] ?: return
        items[id] = p.copy(x = (p.x + dx).coerceIn(0f, 0.85f), y = (p.y + dy).coerceIn(0f, 0.85f))
    }

    fun goToRoom(r: Int) {
        room = r.coerceIn(0, ROOMS.size - 1)
        save()
    }

    fun setExam(date: LocalDate?) {
        examDay = date?.toEpochDay() ?: NO_EXAM
        save()
    }

    fun changeEnglishPause(paused: Boolean) {
        englishPaused = paused
        save()
    }

    /** Parent sets whose device this is (null = shared). Switches to that kid; nobody's data changes. */
    @Synchronized
    fun lockDevice(p: String?, parent: Boolean = false) {
        val asParent = p == null && parent
        meta.edit().putString("deviceLock", p).putBoolean("parentDevice", asParent).apply()
        deviceLock = p
        if (parentDevice != asParent) {
            parentDevice = asParent
            Updater.reset()
            if (!asParent) Sync.leftTestMode()
        }
        if (p != null && profile != p) choose(p) else WordsWidget.updateAll(appContext)
    }

    /** Parent gift: adds [n] points to [p]'s game, whether or not that kid is on screen. */
    @Synchronized
    fun addPoints(p: String, n: Int) {
        if (n <= 0) return
        if (profile == p) {
            points += n
            save()
        } else {
            val f = appContext.getSharedPreferences(p, Context.MODE_PRIVATE)
            f.edit().putInt("points", f.getInt("points", 0) + n).commit()
            Sync.changed(p)
        }
    }

    /** Points saved for [p] on this device (the one on screen, or the other kid's file). */
    fun pointsOf(p: String): Int =
        if (profile == p) points else appContext.getSharedPreferences(p, Context.MODE_PRIVATE).getInt("points", 0)

    /** True when the player can't be switched on this device. */
    val locked: Boolean get() = deviceLock != null

    /** Tomer's tablet setup turns English off completely (no parent pause needed). */
    val englishLockedOff: Boolean get() = isTomer && deviceLock == TOMER

    /** Tomer's test-prep screen is the main thing while English is paused or locked off. */
    val prepFirst: Boolean get() = isTomer && (englishPaused || deviceLock == TOMER)

    fun setReminder(h: Int, m: Int) {
        reminderHour = h
        reminderMinute = m
        save()
    }
}
