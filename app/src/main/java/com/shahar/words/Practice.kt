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
import androidx.compose.foundation.text.KeyboardActions
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.foundation.verticalScroll
import androidx.compose.material3.LinearProgressIndicator
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Text
import androidx.compose.material3.TextButton
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
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.input.ImeAction
import androidx.compose.ui.text.input.KeyboardCapitalization
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.LayoutDirection
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

enum class QType { FLASH, MC_EN, MC_HE, TYPE, LISTEN }

data class Q(val word: Word, val type: QType, val options: List<Word>)

const val ROUND_SIZE = 10
const val TOMER_ROUND_SIZE = 8

/**
 * Shahar: new words start as flashcards and multiple choice; known words move on to typing.
 * Tomer: no typing. He listens and points at pictures first, and only reads English once he knows a word.
 */
fun buildRound(): List<Q> = Store.pickWords(if (Store.isTomer) TOMER_ROUND_SIZE else ROUND_SIZE).map { w ->
    val lvl = Store.level(w)
    val type = if (Store.isTomer) when {
        lvl == 0 -> listOf(QType.FLASH, QType.LISTEN).random()
        lvl <= 2 -> listOf(QType.LISTEN, QType.LISTEN, QType.MC_HE).random()
        else -> listOf(QType.LISTEN, QType.MC_HE, QType.MC_EN).random()
    } else when {
        lvl == 0 -> listOf(QType.FLASH, QType.MC_EN).random()
        lvl <= 2 -> listOf(QType.MC_EN, QType.MC_HE, QType.TYPE).random()
        else -> listOf(QType.MC_HE, QType.TYPE, QType.TYPE).random()
    }
    val options = (Store.words.filter { it != w }.shuffled().take(3) + w).shuffled()
    Q(w, type, options)
}

private val PRAISE_F = listOf("מעולה!", "כל הכבוד!", "אלופה!", "יש!", "מדהים!", "וואו!", "בדיוק!")
private val PRAISE_M = listOf("מעולה!", "כל הכבוד!", "אלוף!", "יש!", "מדהים!", "וואו!", "בדיוק!", "Great job!")

fun normalize(s: String): String = s.trim().lowercase()
    .replace('’', '\'').replace('`', '\'')
    .replace(".", "").replace(Regex("\\s+"), " ")

@Composable
fun PracticeScreen(onExit: () -> Unit, onHouse: () -> Unit) {
    var round by remember { mutableStateOf(buildRound()) }
    var index by remember { mutableIntStateOf(0) }
    var correct by remember { mutableIntStateOf(0) }
    var earned by remember { mutableIntStateOf(0) }
    var bonus by remember { mutableIntStateOf(0) }

    Column(Modifier.fillMaxSize().verticalScroll(rememberScrollState()).padding(16.dp)) {
        TopBar("תרגול", onExit)
        if (index < round.size) {
            LinearProgressIndicator(
                progress = { index.toFloat() / round.size },
                modifier = Modifier.fillMaxWidth().height(10.dp).clip(RoundedCornerShape(5.dp)),
                color = Pink,
                trackColor = Color.White,
            )
            Text(
                "שאלה ${index + 1} מתוך ${round.size}   ·   הרווחת ⭐ $earned",
                fontSize = 15.sp, color = Ink, modifier = Modifier.padding(vertical = 8.dp),
            )
            val q = round[index]
            Stats.shown("practice", "$index: $q")
            key(index, round) {
                QuestionView(q) { ok, pts ->
                    Store.recordAnswer(q.word, ok, pts)
                    if (ok) {
                        correct++
                        earned += pts
                    }
                    if (index + 1 == round.size) bonus = Store.finishSession()
                    index++
                }
            }
        } else {
            Summary(correct, round.size, earned, bonus,
                again = {
                    round = buildRound()
                    index = 0
                    correct = 0
                    earned = 0
                    bonus = 0
                },
                onHouse = onHouse,
                onExit = onExit,
            )
        }
    }
}

@Composable
fun QuestionView(q: Q, onDone: (Boolean, Int) -> Unit) {
    val buddy = remember(q) { randomBuddy() }
    CompositionLocalProvider(LocalBuddy provides buddy) {
        when (q.type) {
            QType.FLASH -> FlashCard(q, onDone)
            QType.MC_EN -> MultipleChoice(q, fromEnglish = true, onDone = onDone)
            QType.MC_HE -> MultipleChoice(q, fromEnglish = false, onDone = onDone)
            QType.TYPE -> TypeAnswer(q, onDone)
            QType.LISTEN -> ListenAndPick(q, onDone)
        }
    }
}

@Composable
fun Prompt(text: String) {
    BoniSays(text, BoniMood.HAPPY, Purple, size = 60.dp, fontSize = 19)
}

@Composable
fun WordCard(text: String, english: Boolean = false, note: String = "", emoji: String = "") {
    Column(
        Modifier.fillMaxWidth().clip(RoundedCornerShape(24.dp)).background(Color.White)
            .border(3.dp, if (english) Purple else Pink, RoundedCornerShape(24.dp))
            .clickable(enabled = english) { Speaker.speak(text) }
            .padding(vertical = 28.dp, horizontal = 16.dp),
        horizontalAlignment = Alignment.CenterHorizontally,
    ) {
        if (emoji.isNotEmpty()) Text(emoji, fontSize = 64.sp, textAlign = TextAlign.Center)
        Text(text, fontSize = 36.sp, fontWeight = FontWeight.Bold, color = Ink, textAlign = TextAlign.Center)
        if (note.isNotEmpty()) Text("($note)", fontSize = 16.sp, color = Ink)
        if (english) Text(Store.g("🔊 לחצי לשמוע", "🔊 לחץ לשמוע"), fontSize = 14.sp, color = Purple)
    }
}

@Composable
fun Feedback(ok: Boolean, pts: Int, w: Word) {
    val msg = remember(ok) {
        if (ok) "${(if (Store.isTomer) PRAISE_M else PRAISE_F).random()} +$pts ⭐" else "לא נורא! ${w.emoji} ${w.en} = ${w.he}. בפעם הבאה זה יצליח!".replace("  ", " ")
    }
    BoniSays(msg, if (ok) BoniMood.CHEER else BoniMood.HAPPY, if (ok) Color(0xFF1F8A57) else Color(0xFFB85C00))
}

@Composable
fun FlashCard(q: Q, onDone: (Boolean, Int) -> Unit) {
    var flipped by remember { mutableStateOf(false) }
    LaunchedEffect(Unit) { Speaker.speak(q.word.en) }
    Column(Modifier.fillMaxWidth(), verticalArrangement = Arrangement.spacedBy(16.dp)) {
        Prompt(Store.g("כרטיסייה: את יודעת מה זה?", "כרטיסייה: אתה יודע מה זה?"))
        WordCard(q.word.en, english = true, note = q.word.note)
        if (!flipped) {
            BigButton(Store.g("הפכי את הכרטיס 🔄", "הפוך את הכרטיס 🔄"), Purple) { flipped = true }
        } else {
            // The picture is shown only after flipping, so the front makes him listen or read first.
            WordCard(q.word.he, emoji = q.word.emoji)
            Row(horizontalArrangement = Arrangement.spacedBy(12.dp)) {
                BigButton("ידעתי ✓", Green, Modifier.weight(1f)) { onDone(true, 5) }
                BigButton("עוד לא", Orange, Modifier.weight(1f)) { onDone(false, 0) }
            }
        }
    }
}

@Composable
fun MultipleChoice(q: Q, fromEnglish: Boolean, onDone: (Boolean, Int) -> Unit) {
    var chosen by remember { mutableStateOf<Word?>(null) }
    LaunchedEffect(Unit) { if (fromEnglish) Speaker.speak(q.word.en) }
    Column(Modifier.fillMaxWidth(), verticalArrangement = Arrangement.spacedBy(12.dp)) {
        Prompt(if (fromEnglish) "מה הפירוש בעברית?" else "איך אומרים את זה באנגלית?")
        WordCard(if (fromEnglish) q.word.en else q.word.he, english = fromEnglish, note = if (fromEnglish) q.word.note else "",
            emoji = if (fromEnglish) "" else q.word.emoji)
        q.options.forEach { opt ->
            val picked = chosen
            val bg = when {
                picked == null -> Color.White
                opt == q.word -> Green
                opt == picked -> Red
                else -> Color.White
            }
            val fg = if (bg == Color.White) Ink else Color.White
            Text(
                if (fromEnglish && Store.isTomer) "${opt.emoji}  ${opt.he}" else if (fromEnglish) opt.he else opt.en,
                fontSize = 22.sp, fontWeight = FontWeight.Bold, color = fg, textAlign = TextAlign.Center,
                modifier = Modifier.fillMaxWidth().clip(RoundedCornerShape(18.dp)).background(bg)
                    .border(2.dp, Purple.copy(alpha = 0.3f), RoundedCornerShape(18.dp))
                    .clickable(enabled = picked == null) {
                        chosen = opt
                        Stats.picked(opt.en)
                        Speaker.speak(q.word.en)
                    }
                    .padding(vertical = 16.dp, horizontal = 12.dp),
            )
        }
        val c = chosen
        if (c != null) {
            val ok = c == q.word
            Feedback(ok, 10, q.word)
            BigButton("הבא", Purple) { onDone(ok, if (ok) 10 else 0) }
        }
    }
}

/** Tomer's main exercise: hear the English word and tap the right picture. No reading needed. */
@Composable
fun ListenAndPick(q: Q, onDone: (Boolean, Int) -> Unit) {
    var chosen by remember { mutableStateOf<Word?>(null) }
    LaunchedEffect(Unit) { Speaker.speak(q.word.en) }
    Column(Modifier.fillMaxWidth(), verticalArrangement = Arrangement.spacedBy(12.dp)) {
        Prompt(Store.g("הקשיבי ולחצי על התמונה הנכונה:", "תקשיב ולחץ על התמונה הנכונה:"))
        Text(
            "🔊 לשמוע שוב",
            fontSize = 24.sp, fontWeight = FontWeight.Bold, color = Color.White, textAlign = TextAlign.Center,
            modifier = Modifier.fillMaxWidth().clip(RoundedCornerShape(24.dp)).background(Purple)
                .clickable { Speaker.speak(q.word.en) }.padding(vertical = 18.dp),
        )
        q.options.chunked(2).forEach { pair ->
            Row(Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.spacedBy(12.dp)) {
                pair.forEach { opt ->
                    val picked = chosen
                    val bg = when {
                        picked == null -> Color.White
                        opt == q.word -> Green
                        opt == picked -> Red
                        else -> Color.White
                    }
                    Column(
                        Modifier.weight(1f).clip(RoundedCornerShape(20.dp)).background(bg)
                            .border(2.dp, Purple.copy(alpha = 0.3f), RoundedCornerShape(20.dp))
                            .clickable(enabled = picked == null) {
                                chosen = opt
                                Stats.picked(opt.en)
                                Speaker.speak(q.word.en)
                            }
                            .padding(vertical = 14.dp),
                        horizontalAlignment = Alignment.CenterHorizontally,
                    ) {
                        Text(opt.emoji, fontSize = 56.sp, textAlign = TextAlign.Center)
                        // The Hebrew word makes clear what the picture means.
                        Text(opt.he, fontSize = 18.sp, fontWeight = FontWeight.Bold, color = if (bg == Color.White) Ink else Color.White)
                    }
                }
            }
        }
        val c = chosen
        if (c != null) {
            val ok = c == q.word
            Feedback(ok, 10, q.word)
            BigButton("הבא", Purple) { onDone(ok, if (ok) 10 else 0) }
        }
    }
}

@Composable
fun TypeAnswer(q: Q, onDone: (Boolean, Int) -> Unit) {
    var text by remember { mutableStateOf("") }
    var result by remember { mutableStateOf<Boolean?>(null) }
    var hint by remember { mutableStateOf(false) }
    val pts = if (hint) 10 else 15
    val check = {
        if (text.isNotBlank() && result == null) {
            result = normalize(text) == normalize(q.word.en)
            Stats.picked(text)
            Speaker.speak(q.word.en)
        }
    }
    Column(Modifier.fillMaxWidth(), verticalArrangement = Arrangement.spacedBy(14.dp)) {
        Prompt("כתבי את המילה באנגלית:")
        WordCard(q.word.he, note = q.word.note)
        if (hint) {
            Text(
                "רמז: מתחילה ב-\"${q.word.en.first()}\" ויש בה ${q.word.en.length} תווים",
                fontSize = 17.sp, color = Purple, modifier = Modifier.fillMaxWidth(), textAlign = TextAlign.Center,
            )
        }
        CompositionLocalProvider(LocalLayoutDirection provides LayoutDirection.Ltr) {
            OutlinedTextField(
                value = text,
                onValueChange = { if (result == null) text = it },
                singleLine = true,
                textStyle = TextStyle(fontSize = 26.sp, color = Ink),
                keyboardOptions = KeyboardOptions(
                    capitalization = KeyboardCapitalization.None,
                    keyboardType = KeyboardType.Ascii,
                    imeAction = ImeAction.Done,
                ),
                keyboardActions = KeyboardActions(onDone = { check() }),
                modifier = Modifier.fillMaxWidth(),
            )
        }
        val r = result
        if (r == null) {
            BigButton("בדיקה ✓", Purple, enabled = text.isNotBlank()) { check() }
            if (!hint) {
                TextButton(onClick = { hint = true }, modifier = Modifier.fillMaxWidth()) {
                    Text("💡 צריכה רמז?", fontSize = 18.sp)
                }
            }
        } else {
            Feedback(r, pts, q.word)
            if (!r) {
                Text("כתבת: $text", fontSize = 16.sp, color = Ink,
                    modifier = Modifier.fillMaxWidth(), textAlign = TextAlign.Center)
            }
            BigButton("הבא", Purple) { onDone(r, if (r) pts else 0) }
        }
    }
}

@Composable
fun Summary(
    correct: Int,
    total: Int,
    earned: Int,
    bonus: Int,
    again: () -> Unit,
    onHouse: () -> Unit,
    onExit: () -> Unit,
) {
    Column(
        Modifier.fillMaxWidth().padding(top = 20.dp),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.spacedBy(14.dp),
    ) {
        Row(horizontalArrangement = Arrangement.spacedBy(0.dp)) {
            ownedBuddies().forEach { Boni(BoniMood.CHEER, if (ownedBuddies().size > 2) 100.dp else 140.dp, bounce = true, buddy = it) }
        }
        val names = ownedBuddies().joinToString(" ו") { it.he }
        Text(if (correct * 2 >= total) "$names גאים בך! 🎉" else "$names אומרים: " + Store.g("ממשיכות להתאמן! 💪", "ממשיכים להתאמן! 💪"),
            fontSize = 18.sp, color = Purple, fontWeight = FontWeight.Bold, textAlign = TextAlign.Center)
        Text("סיימת סיבוב!", fontSize = 30.sp, fontWeight = FontWeight.Bold, color = Ink)
        Text("$correct מתוך $total תשובות נכונות", fontSize = 22.sp, color = Ink)
        Text("הרווחת ⭐ $earned נקודות", fontSize = 22.sp, color = Orange, fontWeight = FontWeight.Bold)
        if (bonus > 0) Text("בונוס על האימון: +$bonus ⭐", fontSize = 20.sp, color = Green, fontWeight = FontWeight.Bold)
        Text("🔥 ${Store.streak} ימים ברצף", fontSize = 18.sp, color = Red)
        Spacer(Modifier.height(6.dp))
        BigButton("עוד סיבוב 🎯", Pink, onClick = again)
        BigButton("לבית שלי 🏠", Purple, onClick = onHouse)
        BigButton("לתפריט הראשי", Blue, onClick = onExit)
    }
}
