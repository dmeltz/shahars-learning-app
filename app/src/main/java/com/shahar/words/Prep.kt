package com.shahar.words

import androidx.activity.compose.BackHandler
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material3.LinearProgressIndicator
import androidx.compose.material3.Text
import androidx.compose.material3.TextButton
import androidx.compose.runtime.Composable
import androidx.compose.runtime.CompositionLocalProvider
import androidx.compose.runtime.getValue
import androidx.compose.runtime.key
import androidx.compose.runtime.mutableIntStateOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.AnnotatedString
import androidx.compose.ui.text.SpanStyle
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.buildAnnotatedString
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.text.style.TextDirection
import androidx.compose.ui.text.withStyle
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import kotlin.random.Random

/** Keeps "30 + 11 = 41" in the right order inside Hebrew sentences (RTL would otherwise flip it). */
private val MATH_RUN = Regex("[0-9❓🟦🔺(][0-9 +−×=❓🟦🔺()]*[0-9❓🟦🔺)]|[0-9]")

fun isolateMath(s: String): String = MATH_RUN.replace(s) { "⁦${it.value}⁩" }

// ---------------- Vocabulary questions ----------------

const val BLANK = "_____"

fun heKey(w: HeWord) = "he:${w.id}"
fun heLevel(w: HeWord) = Store.levels[heKey(w)] ?: 0
fun heKnown() = HE_WORDS.count { heLevel(it) >= 3 }

/** Words he doesn't know yet come up much more often. */
fun pickHeWords(n: Int): List<HeWord> {
    val pool = HE_WORDS.toMutableList()
    val out = mutableListOf<HeWord>()
    repeat(minOf(n, pool.size)) {
        val weights = pool.map { val l = 6 - heLevel(it); (l * l).toDouble() * (if (it.fromSample) 1.5 else 1.0) }
        var r = Random.nextDouble() * weights.sum()
        var i = 0
        while (i < pool.size - 1 && r >= weights[i]) {
            r -= weights[i]
            i++
        }
        out.add(pool.removeAt(i))
    }
    return out
}

sealed class PrepItem {
    data class Choice(val q: ChoiceQ) : PrepItem()
    data class Flash(val w: HeWord) : PrepItem()
    data class Story(val p: WordProblem) : PrepItem()
}

/** Other words for wrong options: the same kind of word when there are enough of them. */
private fun others(w: HeWord, samePos: Boolean = true): List<HeWord> {
    val same = HE_WORDS.filter { it != w && it.pos == w.pos }.shuffled()
    val rest = HE_WORDS.filter { it != w && it.pos != w.pos }.shuffled()
    return if (samePos && same.size >= 3) same else same + rest
}

fun meaningQ(w: HeWord): ChoiceQ {
    val s = anySentence(w)
    val (opts, idx) = shuffleChoice(w.meaning, others(w, false).map { it.meaning })
    return ChoiceQ(heKey(w), "מה הפירוש של המילה \"${w.word}\"?", s, opts, idx,
        "${w.word} = ${w.meaning}", mark = w.form)
}

fun clozeQ(w: HeWord): ChoiceQ {
    val (opts, idx) = shuffleChoice(w.word, others(w).map { it.word })
    return ChoiceQ(heKey(w), "איזו מילה מתאימה למשפט?", w.sentence.replace(w.form, BLANK), opts, idx,
        "${w.sentence}\n${w.word} = ${w.meaning}")
}

fun synonymQ(w: HeWord): ChoiceQ {
    val s = anySentence(w)
    val wrong = (others(w).map { it.syn } + others(w, false).map { it.syn }).filter { it.isNotEmpty() && it != w.syn }
    val (opts, idx) = shuffleChoice(w.syn, wrong)
    return ChoiceQ(heKey(w), "איזו מילה יכולה להחליף את המילה \"${w.word}\" במשפט?", s, opts, idx,
        "\"${w.syn}\" אומרת כמעט אותו דבר כמו \"${w.word}\": ${w.meaning}.", mark = w.form)
}

/**
 * From the 2025 Ministry test: "which pair of words is NOT synonyms?" Three real pairs (a word and
 * its synonym) and one wrong pair: this word with a synonym of a different word.
 */
fun notSynonymPairQ(w: HeWord): ChoiceQ {
    val real = HE_WORDS.filter { it != w && it.syn.isNotEmpty() }.shuffled().take(3).map { "${it.word} – ${it.syn}" }
    val fake = HE_WORDS.filter { it != w && it.syn.isNotEmpty() && it.syn != w.syn }.random().syn
    val wrongPair = "${w.word} – $fake"
    val opts = (real + wrongPair).shuffled()
    return ChoiceQ(heKey(w), "מִלִּים נִרְדָּפוֹת הֵן מִלִּים שֶׁיֵּשׁ לָהֶן אוֹתָהּ מַשְׁמָעוּת. אֵיזֶה זוּג אֵינוֹ מִלִּים נִרְדָּפוֹת?", "",
        opts, opts.indexOf(wrongPair),
        "\"${w.word}\" ו\"$fake\" לא אומרות אותו דבר.\n${w.word} = ${w.meaning}\nמילה נרדפת ל\"${w.word}\" היא \"${w.syn}\".")
}

fun oppositeQ(w: HeWord): ChoiceQ {
    val s = anySentence(w)
    // A tricky option: the word that means the same, not the opposite.
    val wrong = listOf(w.syn).filter { it.isNotEmpty() } + others(w).map { it.opp }.filter { it.isNotEmpty() && it != w.opp } + others(w).map { it.word }
    val (opts, idx) = shuffleChoice(w.opp, wrong)
    return ChoiceQ(heKey(w), "מה ההפך של \"${w.word}\"?", s, opts, idx,
        "ההפך של \"${w.word}\" הוא \"${w.opp}\"." + (if (w.syn.isNotEmpty()) " (\"${w.syn}\" זה דומה, לא הפוך.)" else ""), mark = w.form)
}

/**
 * Which sentence uses the word right? The sentences come in turn from [USAGE], so he doesn't see
 * the same ones again until he has gone through the rest. The turn is saved with his levels.
 */
fun usageQ(w: HeWord): ChoiceQ? {
    val (right, wrong) = USAGE[w.id] ?: return null
    val turnKey = "us:${w.id}"
    val c = Store.levels[turnKey] ?: 0
    Store.levels[turnKey] = c + 1
    val good = right[c % right.size]
    val bad = (0 until 3).map { wrong[(c * 3 + it) % wrong.size] }
    val (opts, idx) = shuffleChoice(good, bad)
    return ChoiceQ(heKey(w), "בְּאֵיזֶה מִשְׁפָּט הַמִּלָּה מַתְאִימָה?", w.word, opts, idx,
        "המשפט הנכון:\n$good\n${w.word} = ${w.meaning}", mark = w.word)
}

/** A flashcard is always followed by a question on using the word in a sentence. */
fun vocabItems(w: HeWord): List<PrepItem> {
    val item = vocabItem(w)
    val usage = usageQ(w)
    return if (item is PrepItem.Flash && usage != null) listOf(item, PrepItem.Choice(usage)) else listOf(item)
}

fun vocabItem(w: HeWord): PrepItem {
    val lvl = heLevel(w)
    if (lvl == 0) return PrepItem.Flash(w)
    val kinds = mutableListOf("meaning", "cloze", "usage")
    if (lvl >= 2 && w.syn.isNotEmpty()) kinds += listOf("syn", "pairs")
    if (lvl >= 2 && w.opp.isNotEmpty()) kinds += "opp"
    if (lvl <= 1) kinds += "flash"
    return when (kinds.random()) {
        "flash" -> PrepItem.Flash(w)
        "meaning" -> PrepItem.Choice(meaningQ(w))
        "cloze" -> PrepItem.Choice(clozeQ(w))
        "usage" -> PrepItem.Choice(usageQ(w) ?: meaningQ(w))
        "syn" -> PrepItem.Choice(synonymQ(w))
        "pairs" -> PrepItem.Choice(notSynonymPairQ(w))
        else -> PrepItem.Choice(oppositeQ(w))
    }
}

fun readingKey(p: Passage) = "rd:${p.id}"

fun readingRound(): List<PrepItem> {
    // The passage he has practised least comes next.
    val p = PASSAGES.sortedBy { (Store.levels[readingKey(it)] ?: 0) + Random.nextDouble() }.first()
    return p.questions.map { rq ->
        // The newer sample tests have 5 answers; the older passages here have 4.
        val (opts, idx) = shuffleChoice(rq.right, rq.wrong, maxWrong = 4)
        PrepItem.Choice(ChoiceQ(readingKey(p), rq.q, "", opts, idx, rq.why, passage = p))
    }
}

enum class PrepArea(val title: String, val emoji: String) {
    VOCAB("אוצר מילים", "📚"),
    MATH("תרגילי חשבון", "➕"),
    STORY("בעיות מילוליות", "🧩"),
    READING("הבנת הנקרא", "📖"),
    MIX("תרגול משולב", "🎲"),
}

fun buildPrepRound(area: PrepArea): List<PrepItem> = when (area) {
    PrepArea.VOCAB -> pickHeWords(8).flatMap { vocabItems(it) }
    PrepArea.MATH -> mathRound(10).map { PrepItem.Choice(it) }
    PrepArea.STORY -> wordProblems(5).map { PrepItem.Story(it) }
    PrepArea.READING -> readingRound()
    // Shuffled as blocks, so a flashcard keeps its sentence question right after it.
    PrepArea.MIX -> (pickHeWords(3).map { vocabItems(it) } +
        mathRound(4).map { listOf(PrepItem.Choice(it)) } +
        wordProblems(2).map { listOf(PrepItem.Story(it)) }).shuffled().flatten()
}

// ---------------- Screens ----------------

val GIFTED_GRADIENT = listOf(Color(0xFF3FA9F5), Color(0xFF8E6CFF))

@Composable
fun PrepScreen(onExit: () -> Unit, onHouse: () -> Unit) {
    var area by rememberSaveable { mutableStateOf<String?>(null) }
    BackHandler(enabled = area != null) { area = null }
    val a = area
    if (a == null) PrepMenu(onExit, onPick = { area = it })
    else if (a == "WORDS") PrepWordsScreen { area = null }
    else PrepRoundScreen(PrepArea.valueOf(a), onExit = { area = null }, onHouse = onHouse)
}

@Composable
fun PrepMenu(onExit: () -> Unit, onPick: (String) -> Unit) {
    Column(
        Modifier.fillMaxSize().verticalScroll(rememberScrollState()).padding(16.dp),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.spacedBy(12.dp),
    ) {
        TopBar("הכנה למבחן", onExit)
        Box(
            Modifier.fillMaxWidth().clip(RoundedCornerShape(24.dp))
                .background(Brush.horizontalGradient(GIFTED_GRADIENT)).padding(18.dp),
            contentAlignment = Alignment.Center,
        ) {
            Column(horizontalAlignment = Alignment.CenterHorizontally) {
                Text("🧠 מבחן המחוננים", fontSize = 20.sp, color = Color.White)
                Text(Store.daysText(), fontSize = 28.sp, fontWeight = FontWeight.Bold, color = Color.White, textAlign = TextAlign.Center)
            }
        }
        BoniSays("כל יום קצת: מילים, חשבון ובעיות. ככה מגיעים מוכנים! 💪", BoniMood.HAPPY, size = 64.dp, fontSize = 17)
        Column(Modifier.fillMaxWidth()) {
            Text("אתה כבר יודע ${heKnown()} מתוך ${HE_WORDS.size} מילים", fontSize = 15.sp, color = Ink)
            Spacer(Modifier.height(4.dp))
            LinearProgressIndicator(
                progress = { heKnown().toFloat() / HE_WORDS.size },
                modifier = Modifier.fillMaxWidth().height(10.dp).clip(RoundedCornerShape(5.dp)),
                color = Green, trackColor = Color.White,
            )
        }
        BigButton("${PrepArea.VOCAB.emoji} ${PrepArea.VOCAB.title}", Pink) { onPick(PrepArea.VOCAB.name) }
        BigButton("${PrepArea.MATH.emoji} ${PrepArea.MATH.title}", Blue) { onPick(PrepArea.MATH.name) }
        BigButton("${PrepArea.STORY.emoji} ${PrepArea.STORY.title}", Orange) { onPick(PrepArea.STORY.name) }
        BigButton("${PrepArea.READING.emoji} ${PrepArea.READING.title}", Green) { onPick(PrepArea.READING.name) }
        BigButton("${PrepArea.MIX.emoji} ${PrepArea.MIX.title}", Purple) { onPick(PrepArea.MIX.name) }
        BigButton("📒 המילים שלומדים", Color(0xFF9A8FB0)) { onPick("WORDS") }
    }
}

@Composable
fun PrepRoundScreen(area: PrepArea, onExit: () -> Unit, onHouse: () -> Unit) {
    var round by remember { mutableStateOf(buildPrepRound(area)) }
    var index by remember { mutableIntStateOf(0) }
    var correct by remember { mutableIntStateOf(0) }
    var earned by remember { mutableIntStateOf(0) }
    var bonus by remember { mutableIntStateOf(0) }
    val scroll = rememberScrollState()

    Column(Modifier.fillMaxSize().verticalScroll(scroll).padding(16.dp)) {
        TopBar("${area.emoji} ${area.title}", onExit)
        if (index < round.size) {
            LinearProgressIndicator(
                progress = { index.toFloat() / round.size },
                modifier = Modifier.fillMaxWidth().height(10.dp).clip(RoundedCornerShape(5.dp)),
                color = Blue, trackColor = Color.White,
            )
            Text(
                "שאלה ${index + 1} מתוך ${round.size}   ·   הרווחת ⭐ $earned",
                fontSize = 15.sp, color = Ink, modifier = Modifier.padding(vertical = 8.dp),
            )
            val item = round[index]
            Stats.shown("prep-${area.name.lowercase()}", "$index: $item")
            key(index, round) {
                val buddy = remember { randomBuddy() }
                CompositionLocalProvider(LocalBuddy provides buddy) {
                    val done: (Boolean, Int) -> Unit = { ok, pts ->
                        if (ok) correct++
                        earned += pts
                        if (index + 1 == round.size) bonus = Store.finishSession()
                        index++
                    }
                    when (item) {
                        is PrepItem.Choice -> ChoiceView(item.q) { ok, pts ->
                            Store.recordPrep(item.q.key, ok, pts)
                            done(ok, pts)
                        }
                        is PrepItem.Flash -> HeFlashCard(item.w) { ok, pts ->
                            Store.recordPrep(heKey(item.w), ok, 0)
                            done(ok, pts)
                        }
                        is PrepItem.Story -> StoryView(item.p) { ok, pts ->
                            Store.recordPrep("wp:${item.p.id}", ok, pts)
                            done(ok, pts)
                        }
                    }
                }
            }
        } else {
            Summary(correct, round.size, earned, bonus,
                again = {
                    round = buildPrepRound(area)
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

private fun marked(text: String, mark: String): AnnotatedString = buildAnnotatedString {
    val i = if (mark.isEmpty()) -1 else text.indexOf(mark)
    if (i < 0) {
        append(text)
    } else {
        append(text.substring(0, i))
        withStyle(SpanStyle(fontWeight = FontWeight.Bold, color = Purple, background = Color(0xFFF1ECFF))) { append(mark) }
        append(text.substring(i + mark.length))
    }
}

@Composable
fun BodyCard(q: ChoiceQ) {
    Column(
        Modifier.fillMaxWidth().clip(RoundedCornerShape(24.dp)).background(Color.White)
            .border(3.dp, if (q.ltr) Blue else Pink, RoundedCornerShape(24.dp))
            .padding(vertical = 22.dp, horizontal = 16.dp),
        horizontalAlignment = Alignment.CenterHorizontally,
    ) {
        if (q.ltr) {
            q.body.split("\n").forEach {
                Text(it, fontSize = 34.sp, fontWeight = FontWeight.Bold, color = Ink, textAlign = TextAlign.Center,
                    style = TextStyle(textDirection = TextDirection.Ltr))
            }
        } else {
            Text(marked(q.body, q.mark), fontSize = 24.sp, color = Ink, textAlign = TextAlign.Center, lineHeight = 34.sp)
        }
    }
}

@Composable
fun PassageView(p: Passage) {
    var open by remember { mutableStateOf(true) }
    Column(
        Modifier.fillMaxWidth().clip(RoundedCornerShape(20.dp)).background(Color(0xFFFFFBEF))
            .border(2.dp, Orange.copy(alpha = 0.5f), RoundedCornerShape(20.dp)).padding(14.dp),
        verticalArrangement = Arrangement.spacedBy(8.dp),
    ) {
        Row(verticalAlignment = Alignment.CenterVertically) {
            Text("📖 ${p.title}", fontSize = 20.sp, fontWeight = FontWeight.Bold, color = Ink, modifier = Modifier.weight(1f))
            TextButton(onClick = { open = !open }) { Text(if (open) "הסתרת הקטע" else "הצגת הקטע", fontSize = 15.sp) }
        }
        if (open) {
            p.paragraphs.forEachIndexed { i, para ->
                Text("${i + 1}.  $para", fontSize = 18.sp, color = Ink, lineHeight = 28.sp)
            }
        }
    }
}

@Composable
fun OptionGrid(options: List<String>, answer: Int, chosen: Int, ltr: Boolean, onPick: (Int) -> Unit) {
    // Two steps, so a slip of the finger doesn't count: tap an answer to mark it, then press "בדיקה".
    var selected by remember(options) { mutableIntStateOf(-1) }
    val short = options.all { it.length <= 6 }
    val cell: @Composable (Int, Modifier) -> Unit = { i, modifier ->
        OptionCell(options[i], i, answer, chosen, selected, ltr, short, modifier) { selected = i }
    }
    if (short) {
        options.indices.chunked(2).forEach { pair ->
            Row(Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.spacedBy(12.dp)) {
                pair.forEach { cell(it, Modifier.weight(1f)) }
            }
        }
    } else {
        options.indices.forEach { cell(it, Modifier.fillMaxWidth()) }
    }
    if (chosen < 0) {
        BigButton(if (selected < 0) "בוחרים תשובה ואז בודקים" else "בדיקה ✓", Green, enabled = selected >= 0) { onPick(selected) }
    }
}

@Composable
private fun OptionCell(text: String, i: Int, answer: Int, chosen: Int, selected: Int, ltr: Boolean, short: Boolean, modifier: Modifier, onClick: () -> Unit) {
        val marked = chosen < 0 && i == selected
        val bg = when {
            chosen < 0 -> if (marked) Color(0xFFE9E1FF) else Color.White
            i == answer -> Green
            i == chosen -> Red
            else -> Color.White
        }
        Text(
            if (ltr) text else isolateMath(text),
            fontSize = if (short) 26.sp else 20.sp, fontWeight = FontWeight.Bold,
            color = if (bg == Color.White || marked) Ink else Color.White, textAlign = TextAlign.Center,
            style = if (ltr) TextStyle(textDirection = TextDirection.Ltr) else TextStyle.Default,
            modifier = modifier.clip(RoundedCornerShape(18.dp)).background(bg)
                .border(if (marked) 4.dp else 2.dp, if (marked) Purple else Purple.copy(alpha = 0.3f), RoundedCornerShape(18.dp))
                .clickable(enabled = chosen < 0, onClick = onClick)
                .padding(vertical = 16.dp, horizontal = 12.dp),
        )
    }

/** A wrong answer costs a quarter of what a right one earns (rounded). */
fun penalty(pts: Int) = (pts + 2) / 4

@Composable
fun PrepFeedback(ok: Boolean, pts: Int, explain: String) {
    val praise = remember(ok) { listOf("מעולה!", "כל הכבוד!", "אלוף!", "יש!", "מדהים!", "בדיוק!").random() }
    BoniSays(
        if (ok) "$praise +$pts ⭐" else "לא נורא! (−${penalty(pts)} ⭐) בוא נראה איך פותרים:",
        if (ok) BoniMood.CHEER else BoniMood.HAPPY,
        if (ok) Color(0xFF1F8A57) else Color(0xFFB85C00),
        size = 60.dp, fontSize = 18,
    )
    if (explain.isNotEmpty()) ExplainBox(explain)
}

private val HEBREW = Regex("[\u0590-\u05FF]")

/**
 * The explanation, one line per row. A line with no Hebrew in it is an exercise: it gets its own
 * row, written left to right, so the order of the numbers never gets flipped by the Hebrew around it.
 */
@Composable
fun ExplainBox(explain: String) {
    Column(
        Modifier.fillMaxWidth().clip(RoundedCornerShape(16.dp)).background(Color(0xFFEAF6FF)).padding(12.dp),
        verticalArrangement = Arrangement.spacedBy(4.dp),
    ) {
        explain.split("\n").filter { it.isNotBlank() }.forEachIndexed { i, line ->
            if (HEBREW.containsMatchIn(line)) {
                Text((if (i == 0) "💡 " else "") + isolateMath(line), fontSize = 17.sp, color = Ink, lineHeight = 26.sp)
            } else {
                MathLine(line, 24)
            }
        }
    }
}

/** An exercise on its own row, left to right. */
@Composable
fun MathLine(text: String, size: Int) {
    Text(
        text, fontSize = size.sp, fontWeight = FontWeight.Bold, color = Ink, textAlign = TextAlign.Center,
        style = TextStyle(textDirection = TextDirection.Ltr), modifier = Modifier.fillMaxWidth(),
    )
}

@Composable
fun ChoiceView(q: ChoiceQ, onDone: (Boolean, Int) -> Unit) {
    var chosen by remember(q) { mutableIntStateOf(-1) }
    Column(Modifier.fillMaxWidth(), verticalArrangement = Arrangement.spacedBy(12.dp)) {
        q.passage?.let { PassageView(it) }
        Prompt(q.title)
        if (q.body.isNotEmpty()) BodyCard(q)
        OptionGrid(q.options, q.answer, chosen, q.ltr) { chosen = it; Stats.picked(q.options[it]) }
        if (chosen >= 0) {
            val ok = chosen == q.answer
            // When he's right he sees the explanation only for math, where the way matters.
            PrepFeedback(ok, q.pts, if (ok && !q.ltr) "" else q.explain)
            BigButton("הבא", Purple) { onDone(ok, if (ok) q.pts else -penalty(q.pts)) }
        }
    }
}

@Composable
fun HeFlashCard(w: HeWord, onDone: (Boolean, Int) -> Unit) {
    var flipped by remember(w) { mutableStateOf(false) }
    Column(Modifier.fillMaxWidth(), verticalArrangement = Arrangement.spacedBy(14.dp)) {
        Prompt(if (heLevel(w) == 0) "מילה חדשה! אתה יודע מה היא אומרת?" else "כרטיסייה: אתה זוכר מה זה?")
        Column(
            Modifier.fillMaxWidth().clip(RoundedCornerShape(24.dp)).background(Color.White)
                .border(3.dp, Pink, RoundedCornerShape(24.dp)).padding(vertical = 26.dp, horizontal = 16.dp),
            horizontalAlignment = Alignment.CenterHorizontally,
        ) {
            Text(w.word, fontSize = 40.sp, fontWeight = FontWeight.Bold, color = Ink)
            if (w.fromSample) Text("⭐ מילה מהמבחן לדוגמה", fontSize = 14.sp, color = Orange)
            Spacer(Modifier.height(12.dp))
            Text(marked(w.sentence, w.form), fontSize = 22.sp, color = Ink, lineHeight = 32.sp, textAlign = TextAlign.Center)
        }
        if (!flipped) {
            BigButton("הפוך את הכרטיס 🔄", Purple) { flipped = true }
        } else {
            Column(
                Modifier.fillMaxWidth().clip(RoundedCornerShape(24.dp)).background(Color(0xFFF1ECFF)).padding(18.dp),
                verticalArrangement = Arrangement.spacedBy(10.dp),
            ) {
                Text("הפירוש: ${w.meaning}", fontSize = 22.sp, fontWeight = FontWeight.Bold, color = Purple, lineHeight = 32.sp)
            }
            Row(horizontalArrangement = Arrangement.spacedBy(12.dp)) {
                BigButton("ידעתי ✓", Green, Modifier.weight(1f)) { onDone(true, 0) }
                BigButton("עוד לא", Orange, Modifier.weight(1f)) { onDone(false, 0) }
            }
        }
    }
}

/** A word problem in three steps: what kind of exercise, which exercise, and the answer. */
@Composable
fun StoryView(p: WordProblem, onDone: (Boolean, Int) -> Unit) {
    var step by remember(p) { mutableIntStateOf(0) }
    var pts by remember(p) { mutableIntStateOf(0) }
    val exChoice = remember(p) { shuffleChoice(p.exercise, p.wrongExercises) }
    val ansChoice = remember(p) { wpAnswerChoice(p) }
    var chosen by remember(p, step) { mutableIntStateOf(-1) }

    Column(Modifier.fillMaxWidth(), verticalArrangement = Arrangement.spacedBy(12.dp)) {
        Column(
            Modifier.fillMaxWidth().clip(RoundedCornerShape(24.dp)).background(Color.White)
                .border(3.dp, Orange, RoundedCornerShape(24.dp)).padding(18.dp),
        ) {
            Text(storyText(p.story), fontSize = 22.sp, color = Ink, lineHeight = 32.sp)
        }
        Text(
            listOf("שלב 1 מתוך 2: הופכים לתרגיל", "שלב 2 מתוך 2: פותרים").getOrElse(step) { "" },
            fontSize = 15.sp, fontWeight = FontWeight.Bold, color = Orange,
        )
        when (step) {
            0 -> {
                Prompt("אֵיזֶה תַּרְגִּיל מַתְאִים לַבְּעָיָה?")
                OptionGrid(exChoice.first, exChoice.second, chosen, true) { chosen = it; Stats.picked("exercise: " + exChoice.first[it]) }
                if (chosen >= 0) {
                    val ok = chosen == exChoice.second
                    PrepFeedback(ok, 10, if (ok) "" else opHint(p.op) + "\nהתרגיל הנכון:\n${p.exercise}")
                    BigButton("לשלב הבא", Purple) {
                        pts += if (ok) 10 else -penalty(10)
                        step = 1
                    }
                }
            }
            else -> {
                Prompt("עַכְשָׁיו פּוֹתְרִים אֶת הַתַּרְגִּיל:")
                Box(
                    Modifier.fillMaxWidth().clip(RoundedCornerShape(20.dp)).background(Color.White)
                        .border(3.dp, Blue, RoundedCornerShape(20.dp)).padding(vertical = 16.dp),
                ) { MathLine("${p.exercise} = ?", 30) }
                OptionGrid(ansChoice.first, ansChoice.second, chosen, true) { chosen = it; Stats.picked("answer: " + ansChoice.first[it]) }
                if (chosen >= 0) {
                    val ok = chosen == ansChoice.second
                    PrepFeedback(ok, 10, p.why + "\nהתשובה: ${p.answer} ${p.unit}")
                    BigButton("הבא", Purple) { onDone(ok, pts + if (ok) 10 else -penalty(10)) }
                }
            }
        }
    }
}

/** Numbers in the story stand out, so he learns to look for the data. */
private fun storyText(s: String): AnnotatedString = buildAnnotatedString {
    var last = 0
    Regex("[0-9]+").findAll(s).forEach { m ->
        append(s.substring(last, m.range.first))
        withStyle(SpanStyle(fontWeight = FontWeight.Bold, color = Blue)) { append(m.value) }
        last = m.range.last + 1
    }
    append(s.substring(last))
}

private fun opHint(op: Int): String = when (op) {
    ADD -> "כאן מחברים: משהו נוסף, מצטרף, או שמחפשים כמה יש ביחד."
    SUB -> "כאן מחסרים: משהו יורד, נלקח, נשאר, או שמחפשים \"בכמה יותר\" (הפרש)."
    MUL -> "כאן כופלים: יש כמה קבוצות שוות, כמו \"בכל קופסה יש...\"."
    else -> "כאן צריך שני שלבים: קודם פעולה אחת, ואז עוד אחת על התוצאה."
}

@Composable
fun PrepWordsScreen(onBack: () -> Unit) {
    Column(Modifier.fillMaxSize().padding(16.dp)) {
        TopBar("המילים שלומדים", onBack)
        Text("★ = כמה טוב אתה יודע. ⭐ = מילה מהמבחן לדוגמה", fontSize = 14.sp, color = Ink)
        Spacer(Modifier.height(8.dp))
        LazyColumn(verticalArrangement = Arrangement.spacedBy(6.dp)) {
            items(HE_WORDS) { w ->
                val lvl = heLevel(w)
                Column(
                    Modifier.fillMaxWidth().clip(RoundedCornerShape(14.dp)).background(Color.White)
                        .padding(horizontal = 14.dp, vertical = 10.dp),
                ) {
                    Row(verticalAlignment = Alignment.CenterVertically) {
                        Text((if (w.fromSample) "⭐ " else "") + w.word, fontSize = 20.sp, fontWeight = FontWeight.Bold, color = Purple, modifier = Modifier.weight(1f))
                        Text("★".repeat(lvl) + "☆".repeat(5 - lvl), color = Orange, fontSize = 14.sp)
                    }
                    Text(w.meaning, fontSize = 16.sp, color = Ink)
                    Spacer(Modifier.width(4.dp))
                    Text(marked(w.sentence, w.form), fontSize = 15.sp, color = Color(0xFF6B5A80))
                }
            }
        }
    }
}
