package com.shahar.words

import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material3.LinearProgressIndicator
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.CompositionLocalProvider
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.key
import androidx.compose.runtime.mutableIntStateOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalLayoutDirection
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.LayoutDirection
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import kotlin.random.Random

/**
 * One sound to learn: how it is written, how it sounds in Hebrew letters,
 * a word that shows it (spoken by the phone), and a picture of that word.
 * [alts] are look-alike / sound-alike words for listening questions.
 */
data class Phon(
    val shown: String,
    val he: String,
    val say: String,
    val emoji: String,
    val hint: String = "",
    val alts: List<String> = emptyList(),
)

enum class PKind { SOUND, FIRST, READ, HEAR }

data class PStage(
    val id: String,
    val title: String,
    val about: String,
    val items: List<Phon>,
    val kinds: List<PKind>,
    val firstPrompt: String = "",
    val letters: Boolean = false,
)

private fun p(shown: String, he: String, say: String, emoji: String, hint: String = "", alts: List<String> = emptyList()) =
    Phon(shown, he, say, emoji, hint, alts)

// ---------------- Tomer: first steps in reading ----------------

val TOMER_LETTERS = listOf(
    p("a", "אֶ", "apple", "🍎"), p("b", "בּ", "ball", "⚽"), p("c", "ק", "cat", "🐱"),
    p("d", "ד", "dog", "🐶"), p("e", "אֶ", "egg", "🥚"), p("f", "פ", "fish", "🐟"),
    p("g", "ג", "goat", "🐐"), p("h", "ה", "hat", "🎩"), p("i", "אִ", "insect", "🐛"),
    p("j", "ג'", "juice", "🧃"), p("k", "ק", "king", "🤴"), p("l", "ל", "lion", "🦁"),
    p("m", "מ", "moon", "🌙"), p("n", "נ", "nose", "👃"), p("o", "אוֹ", "octopus", "🐙"),
    p("p", "פּ", "pig", "🐷"), p("q", "קוו", "queen", "👸"), p("r", "ר", "rabbit", "🐰"),
    p("s", "ס", "sun", "☀️"), p("t", "ט", "tree", "🌳"), p("u", "אַ", "umbrella", "☂️"),
    p("v", "ו", "van", "🚐"), p("w", "וו", "water", "💧"), p("x", "קס", "fox", "🦊", "בסוף המילה"),
    p("y", "י", "yellow", "🟡"), p("z", "ז", "zebra", "🦓"),
)

val TOMER_BLENDS = listOf(
    p("at", "אֶט", "cat", "🐱", "c + at = cat"), p("an", "אֶן", "pan", "🍳", "p + an = pan"),
    p("ap", "אֶפּ", "cap", "🧢", "c + ap = cap"), p("ag", "אֶג", "bag", "👜", "b + ag = bag"),
    p("am", "אֶם", "ham", "🍖", "h + am = ham"), p("it", "אִט", "sit", "🪑", "s + it = sit"),
    p("in", "אִן", "pin", "📌", "p + in = pin"), p("ig", "אִג", "pig", "🐷", "p + ig = pig"),
    p("ip", "אִפּ", "lip", "👄", "l + ip = lip"), p("ix", "אִקְס", "six", "6️⃣", "s + ix = six"),
    p("ot", "אוֹט", "pot", "🍲", "p + ot = pot"), p("op", "אוֹפּ", "mop", "🧹", "m + op = mop"),
    p("og", "אוֹג", "dog", "🐶", "d + og = dog"), p("ox", "אוֹקְס", "box", "📦", "b + ox = box"),
    p("ug", "אַג", "bug", "🐛", "b + ug = bug"), p("un", "אַן", "sun", "☀️", "s + un = sun"),
    p("up", "אַפּ", "cup", "☕", "c + up = cup"), p("us", "אַס", "bus", "🚌", "b + us = bus"),
)

val TOMER_CVC = listOf(
    p("cat", "קֶט", "cat", "🐱"), p("hat", "הֶט", "hat", "🎩"), p("bat", "בֶּט", "bat", "🦇"),
    p("map", "מֶפּ", "map", "🗺️"), p("bag", "בֶּג", "bag", "👜"), p("van", "וֶן", "van", "🚐"),
    p("man", "מֶן", "man", "👨"), p("dog", "דוֹג", "dog", "🐶"), p("fox", "פוֹקְס", "fox", "🦊"),
    p("box", "בּוֹקְס", "box", "📦"), p("pot", "פּוֹט", "pot", "🍲"), p("pig", "פִּג", "pig", "🐷"),
    p("six", "סִקְס", "six", "6️⃣"), p("lip", "לִפּ", "lip", "👄"), p("bus", "בַּס", "bus", "🚌"),
    p("sun", "סַן", "sun", "☀️"), p("cup", "קַפּ", "cup", "☕"), p("bug", "בַּג", "bug", "🐛"),
    p("hen", "הֶן", "hen", "🐔"), p("bed", "בֶּד", "bed", "🛏️"), p("pen", "פֶּן", "pen", "🖊️"),
    p("net", "נֶט", "net", "🥅"), p("web", "וֶבּ", "web", "🕸️"), p("ten", "טֶן", "ten", "🔟"),
    p("jet", "ג'ֶט", "jet", "✈️"),
)

// ---------------- Shahar: harder sounds ----------------

val SHAHAR_SOUNDS = listOf(
    p("sh", "ש", "sheep", "🐑"), p("ch", "צ'", "cheese", "🧀"),
    p("th", "ת'", "three", "3️⃣", "הלשון בין השיניים"), p("wh", "וו", "whale", "🐳"),
    p("ph", "פ", "phone", "📱"), p("ck", "ק", "duck", "🦆"), p("ng", "נג", "ring", "💍"),
    p("igh", "אַיי", "night", "🌃", "ה-gh שקטה"), p("gh", "פ", "laugh", "😂", "לפעמים gh נשמעת כמו f"),
    p("kn", "נ", "knife", "🔪", "ה-k שקטה"), p("wr", "ר", "write", "✍️", "ה-w שקטה"),
    p("ee", "אִי", "bee", "🐝"), p("ea", "אִי", "tea", "🍵"), p("oo", "אוּ", "moon", "🌙"),
    p("ai", "אֵיי", "rain", "🌧️"), p("ay", "אֵיי", "play", "🎮"), p("oa", "אוֹ", "boat", "⛵"),
    p("ow", "אָאוּ", "cow", "🐮"), p("ou", "אָאוּ", "mouse", "🐭"), p("ar", "אָר", "star", "⭐"),
    p("or", "אוֹר", "corn", "🌽"), p("er", "אֶר", "tiger", "🐯"), p("ir", "אֶר", "bird", "🐦"),
    p("ur", "אֶר", "turtle", "🐢"),
    p("a_e", "אֵיי", "cake", "🎂", "e בסוף שקטה, וה-a אומרת את השם שלה"),
    p("i_e", "אַיי", "kite", "🪁", "e בסוף שקטה, וה-i אומרת את השם שלה"),
    p("o_e", "אוֹ", "bone", "🦴", "e בסוף שקטה, וה-o אומרת את השם שלה"),
    p("u_e", "יוּ", "cube", "🧊", "e בסוף שקטה, וה-u אומרת את השם שלה"),
)

val SHAHAR_WORDS = listOf(
    p("ship", "שִׁיפּ", "ship", "🚢", alts = listOf("chip", "sip", "shop")),
    p("shoe", "שׁוּ", "shoe", "👟", alts = listOf("show", "she", "sue")),
    p("fish", "פִישׁ", "fish", "🐟", alts = listOf("fist", "dish", "fix")),
    p("cheese", "צ'יז", "cheese", "🧀", alts = listOf("chess", "these", "sheet")),
    p("chair", "צ'ֶר", "chair", "🪑", alts = listOf("hair", "share", "cheer")),
    p("lunch", "לַנְץ'", "lunch", "🥪", alts = listOf("launch", "bunch", "lung")),
    p("three", "ת'רִי", "three", "3️⃣", alts = listOf("tree", "free", "there")),
    p("bath", "בָּאת'", "bath", "🛁", alts = listOf("bat", "path", "bass")),
    p("whale", "ווֵייל", "whale", "🐳", alts = listOf("wall", "while", "well")),
    p("phone", "פוֹן", "phone", "📱", alts = listOf("fun", "fan", "foam")),
    p("duck", "דַאק", "duck", "🦆", alts = listOf("dock", "deck", "luck")),
    p("ring", "רִינְג", "ring", "💍", alts = listOf("rink", "rang", "wing")),
    p("night", "נַייט", "night", "🌃", alts = listOf("nut", "neat", "nine")),
    p("light", "לַייט", "light", "💡", alts = listOf("lit", "late", "fight")),
    p("laugh", "לָאף", "laugh", "😂", alts = listOf("leaf", "loft", "lap")),
    p("knee", "נִי", "knee", "🦵", alts = listOf("key", "knit", "need")),
    p("write", "רַייט", "write", "✍️", alts = listOf("rate", "white", "ride")),
    p("tree", "טְרִי", "tree", "🌳", alts = listOf("three", "try", "tray")),
    p("moon", "מוּן", "moon", "🌙", alts = listOf("man", "moan", "noon")),
    p("rain", "רֵיין", "rain", "🌧️", alts = listOf("ran", "rail", "train")),
    p("boat", "בּוֹט", "boat", "⛵", alts = listOf("bat", "but", "coat")),
    p("cow", "קָאוּ", "cow", "🐮", alts = listOf("cool", "coat", "how")),
    p("house", "הָאוּס", "house", "🏠", alts = listOf("horse", "hose", "mouse")),
    p("car", "קָאר", "car", "🚗", alts = listOf("care", "core", "cat")),
    p("horse", "הוֹרְס", "horse", "🐴", alts = listOf("house", "hose", "nurse")),
    p("bird", "בֶּרְד", "bird", "🐦", alts = listOf("bud", "beard", "bored")),
    p("cake", "קֵייק", "cake", "🎂", alts = listOf("cap", "lake", "kick")),
    p("kite", "קַייט", "kite", "🪁", alts = listOf("kit", "cat", "bite")),
    p("bone", "בּוֹן", "bone", "🦴", alts = listOf("bun", "bean", "cone")),
    p("cube", "קְיוּבּ", "cube", "🧊", alts = listOf("cub", "tube", "cab")),
)


/** What the picture words mean, written under each picture so it is clear. */
val PICTURE_MEANING = mapOf(
    "cat" to "חתול",
    "hat" to "כובע",
    "bat" to "עטלף",
    "map" to "מפה",
    "bag" to "תיק",
    "van" to "טנדר",
    "man" to "איש",
    "dog" to "כלב",
    "fox" to "שועל",
    "box" to "קופסה",
    "pot" to "סיר",
    "pig" to "חזיר",
    "six" to "שש",
    "lip" to "שפה",
    "bus" to "אוטובוס",
    "sun" to "שמש",
    "cup" to "כוס",
    "bug" to "חרק",
    "hen" to "תרנגולת",
    "bed" to "מיטה",
    "pen" to "עט",
    "net" to "רשת",
    "web" to "קורי עכביש",
    "ten" to "עשר",
    "jet" to "מטוס",
    "ship" to "ספינה",
    "shoe" to "נעל",
    "fish" to "דג",
    "cheese" to "גבינה",
    "chair" to "כיסא",
    "lunch" to "ארוחת צהריים",
    "three" to "שלוש",
    "bath" to "אמבטיה",
    "whale" to "לווייתן",
    "phone" to "טלפון",
    "duck" to "ברווז",
    "ring" to "טבעת",
    "night" to "לילה",
    "light" to "אור",
    "laugh" to "צחוק",
    "knee" to "ברך",
    "write" to "לכתוב",
    "tree" to "עץ",
    "moon" to "ירח",
    "rain" to "גשם",
    "boat" to "סירה",
    "cow" to "פרה",
    "house" to "בית",
    "car" to "מכונית",
    "horse" to "סוס",
    "bird" to "ציפור",
    "cake" to "עוגה",
    "kite" to "עפיפון",
    "bone" to "עצם",
    "cube" to "קובייה",
)

val TOMER_STAGES = listOf(
    PStage("t1", "1. צלילי האותיות", "כל אות והצליל שלה", TOMER_LETTERS,
        listOf(PKind.SOUND, PKind.FIRST), firstPrompt = "באיזו אות מתחילה המילה?", letters = true),
    PStage("t2", "2. צירופים קלים", "שתי אותיות ביחד: at, in, up...", TOMER_BLENDS,
        listOf(PKind.SOUND, PKind.FIRST), firstPrompt = "איזה צירוף שומעים במילה?"),
    PStage("t3", "3. קוראים מילים", "מחברים צלילים למילה שלמה", TOMER_CVC,
        listOf(PKind.READ, PKind.READ, PKind.SOUND, PKind.HEAR)),
)

val SHAHAR_STAGES = listOf(
    PStage("s1", "1. צלילים מיוחדים", "sh, ch, th, gh, ee, ai ו-e קסומה", SHAHAR_SOUNDS,
        listOf(PKind.SOUND, PKind.FIRST), firstPrompt = "איזה צליל שומעים במילה?"),
    PStage("s2", "2. קוראים ושומעים מילים", "מילים עם הצלילים המיוחדים", SHAHAR_WORDS,
        listOf(PKind.HEAR, PKind.HEAR, PKind.SOUND, PKind.READ)),
)

fun phonicsStages(): List<PStage> = if (Store.isTomer) TOMER_STAGES else SHAHAR_STAGES

fun pKey(s: PStage, it: Phon) = "ph:${s.id}:${it.shown}"

fun stageKnown(s: PStage): Int = s.items.count { (Store.levels[pKey(s, it)] ?: 0) >= 3 }

data class PQ(val item: Phon, val kind: PKind, val options: List<String>, val answer: String)

private fun others(s: PStage, item: Phon, n: Int, by: (Phon) -> String): List<String> =
    s.items.filter { by(it) != by(item) && it.he != item.he }
        .map(by).distinct().shuffled().take(n)

fun buildPhonicsRound(s: PStage, size: Int = 8): List<PQ> {
    val pool = s.items.toMutableList()
    val picked = mutableListOf<Phon>()
    repeat(minOf(size, pool.size)) {
        val weights = pool.map { val l = 6 - (Store.levels[pKey(s, it)] ?: 0); (l * l).toDouble() }
        var r = Random.nextDouble() * weights.sum()
        var idx = 0
        while (idx < pool.size - 1 && r >= weights[idx]) { r -= weights[idx]; idx++ }
        picked.add(pool.removeAt(idx))
    }
    return picked.map { item ->
        when (val kind = s.kinds.random()) {
            PKind.SOUND -> PQ(item, kind, (others(s, item, 3) { it.he } + item.he).shuffled(), item.he)
            PKind.FIRST -> PQ(item, kind, (others(s, item, 3) { it.shown } + item.shown).shuffled(), item.shown)
            PKind.READ -> PQ(item, kind, (s.items.filter { it != item }.map { it.emoji }.shuffled().take(3) + item.emoji).shuffled(), item.emoji)
            PKind.HEAR -> {
                val wrong = item.alts.ifEmpty { others(s, item, 3) { it.shown } }.shuffled().take(3)
                PQ(item, kind, (wrong + item.shown).shuffled(), item.shown)
            }
        }
    }
}

fun showLetters(s: PStage, x: String) = if (s.letters) "${x.uppercase()} $x" else x

@Composable
fun PhonicsScreen(onExit: () -> Unit, onHouse: () -> Unit) {
    var stage by remember { mutableStateOf<PStage?>(null) }
    var practicing by remember { mutableStateOf(false) }
    val s = stage
    Column(Modifier.fillMaxSize().verticalScroll(rememberScrollState()).padding(16.dp)) {
        when {
            s == null -> {
                TopBar("צלילים וקריאה", onExit)
                StageList { stage = it }
            }
            !practicing -> {
                TopBar(s.title.drop(3), onBack = { stage = null })
                LearnCards(s) { practicing = true }
            }
            else -> {
                TopBar("תרגול צלילים", onBack = { practicing = false })
                PhonicsPractice(s, onHouse = onHouse, onExit = { practicing = false })
            }
        }
    }
}

@Composable
fun StageList(open: (PStage) -> Unit) {
    Column(verticalArrangement = Arrangement.spacedBy(12.dp)) {
        BoniSays(
            if (Store.isTomer) "בוא נלמד לקרוא באנגלית! מתחילים בשלב 1, וכשהוא קל עוברים לשלב הבא 📖"
            else "בואי נלמד צלילים מיוחדים באנגלית, כדי לקרוא ולשמוע מילים חדשות 🎧",
            BoniMood.HAPPY, size = 70.dp, fontSize = 17,
        )
        phonicsStages().forEachIndexed { i, s ->
            val known = stageKnown(s)
            val colors = listOf(Pink, Purple, Blue, Green)
            Column(
                Modifier.fillMaxWidth().clip(RoundedCornerShape(22.dp)).background(colors[i % colors.size])
                    .clickable { open(s) }.padding(16.dp),
            ) {
                Text(s.title, fontSize = 24.sp, fontWeight = FontWeight.Bold, color = Color.White)
                Text(s.about, fontSize = 15.sp, color = Color.White)
                Spacer(Modifier.height(6.dp))
                LinearProgressIndicator(
                    progress = { known.toFloat() / s.items.size },
                    modifier = Modifier.fillMaxWidth().height(10.dp).clip(RoundedCornerShape(5.dp)),
                    color = Color.White, trackColor = Color.White.copy(alpha = 0.35f),
                )
                Text("$known מתוך ${s.items.size}", fontSize = 14.sp, color = Color.White)
            }
        }
    }
}

@Composable
fun LearnCards(s: PStage, practice: () -> Unit) {
    Column(verticalArrangement = Arrangement.spacedBy(10.dp)) {
        BigButton(Store.g("לתרגול! 🎯", "לתרגול! 🎯"), Pink, onClick = practice)
        Text(Store.g("לחצי על כרטיס כדי לשמוע את המילה", "לחץ על כרטיס כדי לשמוע את המילה"),
            fontSize = 15.sp, color = Ink)
        s.items.chunked(2).forEach { pair ->
            Row(Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.spacedBy(10.dp)) {
                pair.forEach { item ->
                    Column(
                        Modifier.weight(1f).clip(RoundedCornerShape(18.dp)).background(Color.White)
                            .border(2.dp, Purple.copy(alpha = 0.25f), RoundedCornerShape(18.dp))
                            .clickable { Speaker.speak(item.say) }.padding(10.dp),
                        horizontalAlignment = Alignment.CenterHorizontally,
                    ) {
                        CompositionLocalProvider(LocalLayoutDirection provides LayoutDirection.Ltr) {
                            Text(showLetters(s, item.shown), fontSize = 30.sp, fontWeight = FontWeight.Bold, color = Purple)
                        }
                        Text("נשמע: ${item.he}", fontSize = 18.sp, color = Ink)
                        Text("${item.emoji} ${item.say} 🔊", fontSize = 16.sp, color = Ink)
                        if (item.hint.isNotEmpty()) {
                            Text(item.hint, fontSize = 12.sp, color = Ink, textAlign = TextAlign.Center)
                        }
                    }
                }
                if (pair.size == 1) Spacer(Modifier.weight(1f))
            }
        }
    }
}

@Composable
fun PhonicsPractice(s: PStage, onHouse: () -> Unit, onExit: () -> Unit) {
    var round by remember { mutableStateOf(buildPhonicsRound(s)) }
    var index by remember { mutableIntStateOf(0) }
    var correct by remember { mutableIntStateOf(0) }
    var earned by remember { mutableIntStateOf(0) }
    var bonus by remember { mutableIntStateOf(0) }
    if (index < round.size) {
        LinearProgressIndicator(
            progress = { index.toFloat() / round.size },
            modifier = Modifier.fillMaxWidth().height(10.dp).clip(RoundedCornerShape(5.dp)),
            color = Pink, trackColor = Color.White,
        )
        Text("שאלה ${index + 1} מתוך ${round.size}   ·   הרווחת ⭐ $earned",
            fontSize = 15.sp, color = Ink, modifier = Modifier.padding(vertical = 8.dp))
        val q = round[index]
        Report.question = "phonics ${s.title}: $q"
        key(index, round) {
            PhonicsQuestion(s, q) { ok ->
                Store.recordPhonics(pKey(s, q.item), ok, 10)
                if (ok) { correct++; earned += 10 }
                if (index + 1 == round.size) bonus = Store.finishSession()
                index++
            }
        }
    } else {
        Summary(correct, round.size, earned, bonus,
            again = { round = buildPhonicsRound(s); index = 0; correct = 0; earned = 0; bonus = 0 },
            onHouse = onHouse, onExit = onExit)
    }
}

@Composable
fun PhonicsQuestion(s: PStage, q: PQ, onDone: (Boolean) -> Unit) {
    var chosen by remember { mutableStateOf<String?>(null) }
    val buddy = remember(q) { randomBuddy() }
    val listen = q.kind == PKind.FIRST || q.kind == PKind.HEAR
    LaunchedEffect(Unit) { if (listen) Speaker.speak(q.item.say) }
    CompositionLocalProvider(LocalBuddy provides buddy) {
        Column(Modifier.fillMaxWidth(), verticalArrangement = Arrangement.spacedBy(12.dp)) {
            Prompt(when (q.kind) {
                PKind.SOUND -> "איך זה נשמע?"
                PKind.FIRST -> s.firstPrompt
                PKind.READ -> Store.g("קראי את המילה ובחרי תמונה:", "קרא את המילה ובחר תמונה:")
                PKind.HEAR -> Store.g("הקשיבי: איזו מילה שמעת?", "תקשיב: איזו מילה שמעת?")
            })
            // The card on top
            Column(
                Modifier.fillMaxWidth().clip(RoundedCornerShape(24.dp)).background(Color.White)
                    .border(3.dp, Purple, RoundedCornerShape(24.dp))
                    .clickable(enabled = listen) { Speaker.speak(q.item.say) }
                    .padding(vertical = 22.dp),
                horizontalAlignment = Alignment.CenterHorizontally,
            ) {
                when (q.kind) {
                    PKind.SOUND, PKind.READ -> CompositionLocalProvider(LocalLayoutDirection provides LayoutDirection.Ltr) {
                        Text(showLetters(s, q.item.shown), fontSize = 44.sp, fontWeight = FontWeight.Bold, color = Ink)
                    }
                    PKind.FIRST -> {
                        Text(q.item.emoji, fontSize = 60.sp)
                        Text(Store.g("🔊 לחצי לשמוע שוב", "🔊 לחץ לשמוע שוב"), fontSize = 16.sp, color = Purple)
                    }
                    PKind.HEAR -> {
                        Text("🔊", fontSize = 56.sp)
                        Text(Store.g("לחצי לשמוע שוב", "לחץ לשמוע שוב"), fontSize = 16.sp, color = Purple)
                    }
                }
            }
            q.options.chunked(2).forEach { pair ->
                Row(Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.spacedBy(12.dp)) {
                    pair.forEach { opt ->
                        val picked = chosen
                        val bg = when {
                            picked == null -> Color.White
                            opt == q.answer -> Green
                            opt == picked -> Red
                            else -> Color.White
                        }
                        CompositionLocalProvider(
                            LocalLayoutDirection provides if (q.kind == PKind.SOUND) LayoutDirection.Rtl else LayoutDirection.Ltr,
                        ) {
                            if (q.kind == PKind.READ) {
                                val ph = s.items.firstOrNull { it.emoji == opt }
                                Column(
                                    Modifier.weight(1f).clip(RoundedCornerShape(18.dp)).background(bg)
                                        .border(2.dp, Purple.copy(alpha = 0.3f), RoundedCornerShape(18.dp))
                                        .clickable(enabled = picked == null) {
                                            chosen = opt
                                            Speaker.speak(q.item.say)
                                        }
                                        .padding(vertical = 12.dp),
                                    horizontalAlignment = Alignment.CenterHorizontally,
                                ) {
                                    Text(opt, fontSize = 48.sp, textAlign = TextAlign.Center)
                                    Text(PICTURE_MEANING[ph?.say] ?: "", fontSize = 18.sp, fontWeight = FontWeight.Bold,
                                        color = if (bg == Color.White) Ink else Color.White)
                                }
                            } else Text(
                                if (q.kind == PKind.FIRST && s.letters) showLetters(s, opt) else opt,
                                fontSize = if (q.kind == PKind.READ) 48.sp else 28.sp,
                                fontWeight = FontWeight.Bold, textAlign = TextAlign.Center,
                                color = if (bg == Color.White) Ink else Color.White,
                                modifier = Modifier.weight(1f).clip(RoundedCornerShape(18.dp)).background(bg)
                                    .border(2.dp, Purple.copy(alpha = 0.3f), RoundedCornerShape(18.dp))
                                    .clickable(enabled = picked == null) {
                                        chosen = opt
                                        Speaker.speak(q.item.say)
                                    }
                                    .padding(vertical = 16.dp),
                            )
                        }
                    }
                }
            }
            val c = chosen
            if (c != null) {
                val ok = c == q.answer
                val ph = q.item
                val msg = (if (ok) "כל הכבוד! +10 ⭐\n" else "לא נורא!\n") +
                    "${ph.shown.replace("_", "…")} נשמע ${ph.he}, כמו ${ph.say} ${ph.emoji}" +
                    (if (ph.hint.isNotEmpty()) "\n${ph.hint}" else "")
                BoniSays(msg, if (ok) BoniMood.CHEER else BoniMood.HAPPY,
                    if (ok) Color(0xFF1F8A57) else Color(0xFFB85C00), fontSize = 17)
                BigButton("הבא", Purple) { onDone(ok) }
            }
        }
    }
}
