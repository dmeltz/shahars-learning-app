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

data class Placement(val x: Float, val y: Float, val inRoom: Boolean, val room: Int = 0)

data class ShopItem(
    val id: String,
    val emoji: String,
    val he: String,
    val en: String,
    val price: Int,
    val size: Int = 52,
    val wall: Boolean = false,
)

data class WallColor(val id: String, val he: String, val color: Color, val price: Int)

val SHOP = listOf(
    ShopItem("plant", "🪴", "עציץ", "plant", 30, 46),
    ShopItem("flower", "🌻", "פרח", "flower", 30, 40),
    ShopItem("books", "📚", "ספרים", "books", 40, 40),
    ShopItem("chair", "🪑", "כיסא", "chair", 40),
    ShopItem("lamp", "💡", "מנורה", "lamp", 40, 40, wall = true),
    ShopItem("clock", "🕰️", "שעון", "clock", 50, 40, wall = true),
    ShopItem("picture", "🖼️", "תמונה", "picture", 50, 48, wall = true),
    ShopItem("teddy", "🧸", "דובי", "teddy bear", 60, 44),
    ShopItem("candy", "🍭", "ממתק", "candy", 60, 40),
    ShopItem("cake", "🎂", "עוגה", "cake", 70, 44),
    ShopItem("sofa", "🛋️", "ספה", "sofa", 80, 64),
    ShopItem("guitar", "🎸", "גיטרה", "guitar", 100, 52),
    ShopItem("bed", "🛏️", "מיטה", "bed", 120, 68),
    ShopItem("rainbow", "🌈", "קשת", "rainbow", 120, 52, wall = true),
    ShopItem("tv", "📺", "טלוויזיה", "TV", 150, 56),
    ShopItem("game", "🎮", "משחק מחשב", "video game", 180, 44),
    ShopItem("piano", "🎹", "פסנתר", "piano", 200, 60),
    ShopItem("cat", "🐱", "חתול", "cat", 250, 48),
    ShopItem("dog", "🐶", "כלב", "dog", 250, 48),
    ShopItem("watermelon", "🍉", "אבטיח", "watermelon", 40, 44),
    ShopItem("plates", "🍽️", "צלחות", "plates", 50, 44),
    ShopItem("pizza", "🍕", "פיצה", "pizza", 60, 44),
    ShopItem("teapot", "🫖", "קנקן תה", "teapot", 70, 44),
    ShopItem("soap", "🧼", "סבון", "soap", 20, 36),
    ShopItem("duck", "🦆", "ברווז גומי", "rubber duck", 30, 40),
    ShopItem("tulips", "🌷", "צבעונים", "tulips", 30, 40),
    ShopItem("butterfly", "🦋", "פרפר", "butterfly", 40, 36, wall = true),
    ShopItem("tree", "🌳", "עץ", "tree", 120, 80),
    ShopItem("bathtub", "🛁", "אמבטיה", "bathtub", 150, 64),
    ShopItem("fountain", "⛲", "מזרקה", "fountain", 200, 64),
    ShopItem("unicorn", "🦄", "חד קרן", "unicorn", 400, 56),
)

val WALLS = listOf(
    WallColor("cream", "קרם", Color(0xFFFFF1DC), 0),
    WallColor("pink", "ורוד", Color(0xFFFFD1E3), 60),
    WallColor("sky", "תכלת", Color(0xFFCDEBFF), 60),
    WallColor("mint", "מנטה", Color(0xFFCFF5E1), 60),
    WallColor("lavender", "סגול", Color(0xFFE3D7FF), 80),
)

val ROOMS = listOf("חדר שינה", "חדר אוכל", "סלון", "חדר אמבטיה", "גינה")

object Store {
    private lateinit var prefs: SharedPreferences
    private lateinit var appContext: Context

    var points by mutableIntStateOf(0)
    var streak by mutableIntStateOf(0)
    var lastPracticeDay by mutableLongStateOf(-1L)
    var examDay by mutableLongStateOf(LocalDate.of(2026, 11, 24).toEpochDay())
    var reminderHour by mutableIntStateOf(17)
    var reminderMinute by mutableIntStateOf(0)
    val roomWalls = mutableStateListOf("cream", "cream", "cream", "sky", "cream")
    var room by mutableIntStateOf(0)
    val levels = mutableStateMapOf<String, Int>()
    val items = mutableStateMapOf<String, Placement>()
    val walls = mutableStateListOf("cream")
    val buddies = mutableStateListOf("boni")

    @Synchronized
    fun init(ctx: Context) {
        if (::prefs.isInitialized) return
        appContext = ctx.applicationContext
        prefs = appContext.getSharedPreferences("shahar", Context.MODE_PRIVATE)
        points = prefs.getInt("points", 0)
        streak = prefs.getInt("streak", 0)
        lastPracticeDay = prefs.getLong("lastDay", -1L)
        examDay = prefs.getLong("examDay", examDay)
        reminderHour = prefs.getInt("remH", 17)
        reminderMinute = prefs.getInt("remM", 0)
        roomWalls[0] = prefs.getString("wall", "cream") ?: "cream"
        for (i in 1 until ROOMS.size) {
            roomWalls[i] = prefs.getString("wall$i", roomWalls[i]) ?: roomWalls[i]
        }
        room = prefs.getInt("room", 0).coerceIn(0, ROOMS.size - 1)

        val lv = JSONObject(prefs.getString("levels", "{}") ?: "{}")
        lv.keys().forEach { k -> levels[k] = lv.getInt(k) }

        val its = JSONObject(prefs.getString("items", "{}") ?: "{}")
        its.keys().forEach { k ->
            val o = its.getJSONObject(k)
            items[k] = Placement(o.getDouble("x").toFloat(), o.getDouble("y").toFloat(), o.getBoolean("r"), o.optInt("m", 0))
        }

        val wl = JSONArray(prefs.getString("walls", "[\"cream\"]") ?: "[\"cream\"]")
        walls.clear()
        for (i in 0 until wl.length()) walls.add(wl.getString(i))
        if (!walls.contains("cream")) walls.add("cream")

        val bl = JSONArray(prefs.getString("buddies", "[\"boni\"]") ?: "[\"boni\"]")
        buddies.clear()
        for (i in 0 until bl.length()) buddies.add(bl.getString(i))
        if (!buddies.contains("boni")) buddies.add(0, "boni")
    }

    fun save() {
        val lv = JSONObject()
        levels.forEach { (k, v) -> lv.put(k, v) }
        val its = JSONObject()
        items.forEach { (k, p) ->
            its.put(k, JSONObject().put("x", p.x.toDouble()).put("y", p.y.toDouble()).put("r", p.inRoom).put("m", p.room))
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
            .putString("walls", JSONArray(walls.toList()).toString())
            .putString("buddies", JSONArray(buddies.toList()).toString())
            .apply()
        WordsWidget.updateAll(appContext)
    }

    fun today(): Long = LocalDate.now().toEpochDay()

    fun daysUntilExam(): Long = examDay - today()

    fun practicedToday(): Boolean = lastPracticeDay == today()

    fun daysText(): String {
        val d = daysUntilExam()
        return when {
            d < 0 -> "המבחן מאחורייך! 🎉"
            d == 0L -> "המבחן היום! בהצלחה 🍀"
            d == 1L -> "המבחן מחר! 💪"
            else -> "עוד $d ימים למבחן"
        }
    }

    fun level(w: Word): Int = levels[w.en] ?: 0

    fun knownCount(): Int = WORDS.count { level(it) >= 3 }

    /** Picks words for a round. Words she doesn't know yet come up much more often. */
    fun pickWords(n: Int): List<Word> {
        val pool = WORDS.toMutableList()
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
        if (correct) points += pts
        save()
    }

    /** Ends a round. Returns the bonus points she got. */
    fun finishSession(): Int {
        val t = today()
        var bonus = 20
        if (lastPracticeDay != t) {
            streak = if (lastPracticeDay == t - 1) streak + 1 else 1
            bonus += 30 + minOf(streak, 5) * 5
            lastPracticeDay = t
        }
        points += bonus
        save()
        return bonus
    }

    fun buy(item: ShopItem): Boolean {
        if (items.containsKey(item.id) || points < item.price) return false
        points -= item.price
        val x = 0.1f + Random.nextFloat() * 0.6f
        val y = if (item.wall) 0.12f + Random.nextFloat() * 0.2f else 0.58f + Random.nextFloat() * 0.2f
        items[item.id] = Placement(x, y, true, room)
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

    fun buyBuddy(b: Buddy): Boolean {
        if (buddies.contains(b.id) || points < b.price) return false
        points -= b.price
        buddies.add(b.id)
        save()
        return true
    }

    fun setRoomWall(id: String) {
        roomWalls[room] = id
        save()
    }

    fun place(id: String, inRoom: Boolean) {
        val p = items[id] ?: return
        items[id] = if (inRoom) p.copy(inRoom = true, room = room) else p.copy(inRoom = false)
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

    fun setExam(date: LocalDate) {
        examDay = date.toEpochDay()
        save()
    }

    fun setReminder(h: Int, m: Int) {
        reminderHour = h
        reminderMinute = m
        save()
    }
}
