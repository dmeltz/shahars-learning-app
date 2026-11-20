package com.shahar.words

import kotlin.math.abs
import kotlin.random.Random

/**
 * One multiple-choice question in the test-prep track.
 * [key] is where the app keeps how well he knows it. [mark] is a word to highlight in [body].
 */
data class ChoiceQ(
    val key: String,
    val title: String,
    val body: String,
    val options: List<String>,
    val answer: Int,
    val explain: String,
    val pts: Int = 10,
    val ltr: Boolean = false,
    val mark: String = "",
    val passage: Passage? = null,
    val say: String = "",
)

private fun rnd(from: Int, to: Int) = Random.nextInt(from, to + 1)

/** Four number answers: the right one and close mistakes (off by one, off by ten, ...). */
private fun numChoice(ans: Int, vararg near: Int): Pair<List<String>, Int> {
    val set = linkedSetOf(ans)
    near.filter { it >= 0 && it != ans }.shuffled().forEach { if (set.size < 4) set.add(it) }
    for (d in listOf(1, -1, 10, -10, 2, -2, 5, 11, -9).shuffled()) {
        if (set.size >= 4) break
        if (ans + d >= 0) set.add(ans + d)
    }
    var k = 3
    while (set.size < 4) set.add(ans + k++)
    val opts = set.toList().shuffled()
    return opts.map { it.toString() } to opts.indexOf(ans)
}

/** Shuffles the right answer in with the wrong ones. */
fun shuffleChoice(right: String, wrong: List<String>): Pair<List<String>, Int> {
    val opts = (wrong.distinct().filter { it != right }.take(3) + right).shuffled()
    return opts to opts.indexOf(right)
}

private fun mathQ(kind: String, title: String, body: String, ans: Int, explain: String, vararg near: Int): ChoiceQ {
    val (opts, idx) = numChoice(ans, *near)
    return ChoiceQ("math:$kind", title, body, opts, idx, explain, ltr = true)
}

/** Explains adding the way the test's answers do: first to the round ten, then the rest. */
private fun addExplain(a: Int, b: Int): String {
    val s = a + b
    if (b < 10) {
        val up = (10 - a % 10) % 10
        return if (up in 1 until b) "$a + $b: קודם $a + $up = ${a + up}, ואז עוד ${b - up} ומגיעים ל-$s."
        else "$a + $b = $s"
    }
    val tens = a / 10 * 10 + b / 10 * 10
    return "עשרות: ${a / 10 * 10} + ${b / 10 * 10} = $tens. אחדות: ${a % 10} + ${b % 10} = ${a % 10 + b % 10}. ביחד: $tens + ${a % 10 + b % 10} = $s."
}

private fun subExplain(a: Int, b: Int): String {
    val d = a - b
    if (b < 10) {
        val down = a % 10
        return if (down in 1 until b) "$a − $b: קודם מורידים $down ומגיעים ל-${a - down}, ואז עוד ${b - down} ומגיעים ל-$d."
        else "$a − $b = $d"
    }
    val t = b / 10 * 10
    return "קודם מורידים עשרות: $a − $t = ${a - t}. ואז אחדות: ${a - t} − ${b % 10} = $d."
}

private fun mulExplain(a: Int, b: Int): String =
    if (a <= 5) "$a × $b זה $a פעמים $b: " + List(a) { "$b" }.joinToString(" + ") + " = ${a * b}"
    else "$a × $b = ${a * b}. (אפשר גם: $b × $a = ${a * b})"

private fun addQ(): ChoiceQ {
    return if (Random.nextBoolean()) {
        val a = rnd(12, 89)
        val b = rnd(3, 9).coerceAtMost(99 - a)
        mathQ("add", "כמה זה?", "$a + $b = ?", a + b, addExplain(a, b), a + b - 10, a + b + 10)
    } else {
        val a = rnd(11, 68)
        val b = rnd(11, 99 - a)
        mathQ("add", "כמה זה?", "$a + $b = ?", a + b, addExplain(a, b), a + b - 10, a + b + 10)
    }
}

private fun subQ(): ChoiceQ {
    return if (Random.nextBoolean()) {
        val a = rnd(21, 99)
        val b = rnd(3, 9)
        mathQ("sub", "כמה זה?", "$a − $b = ?", a - b, subExplain(a, b), a - b + 10, a - b - 10)
    } else {
        val a = rnd(35, 99)
        val b = rnd(11, a - 5)
        mathQ("sub", "כמה זה?", "$a − $b = ?", a - b, subExplain(a, b), a - b + 10, a - b - 10)
    }
}

private fun mulQ(): ChoiceQ {
    val easy = Store.levels["math:mul"] ?: 0
    val a = if (easy < 3) listOf(2, 3, 4, 5, 10).random() else rnd(2, 10)
    val b = rnd(1, 10)
    val (x, y) = if (Random.nextBoolean()) a to b else b to a
    return mathQ("mul", "כמה זה?", "$x × $y = ?", x * y, mulExplain(x, y), x * (y + 1), x * (y - 1), x + y)
}

/** "Smiley" exercises from the test: a blank instead of one of the numbers. */
private fun missingQ(): ChoiceQ {
    val t = "איזה מספר חסר במקום ה-❓"
    return when (rnd(0, 3)) {
        0 -> {
            val a = rnd(12, 70); val m = rnd(3, 29); val c = a + m
            mathQ("miss", t, "$a + ❓ = $c", m, "כמה צריך להוסיף ל-$a כדי להגיע ל-$c? בודקים: $a + $m = $c. (זה כמו $c − $a)", m + 10, m - 10, c)
        }
        1 -> {
            val b = rnd(3, 25); val c = rnd(10, 60); val a = b + c
            mathQ("miss", t, "❓ − $b = $c", a, "המספר החסר גדול מ-$c ב-$b: $c + $b = $a. בודקים: $a − $b = $c.", c - b, a + 10, a - 10)
        }
        2 -> {
            val a = listOf(2, 3, 4, 5, 10).random(); val m = rnd(2, 10)
            mathQ("miss", t, "$a × ❓ = ${a * m}", m, "$a כפול כמה זה ${a * m}? $a × $m = ${a * m}.", m + 1, m - 1, a * m - a)
        }
        else -> {
            val c = rnd(20, 90); val m = rnd(4, c - 5); val a = c - m
            mathQ("miss", t, "$c − ❓ = $a", m, "כמה מורידים מ-$c כדי להגיע ל-$a? $c − $m = $a.", m + 10, m - 10, c + a)
        }
    }
}

/** Inequalities like "30 + 11 > 30 + __". */
private fun compareQ(): ChoiceQ {
    val base = listOf(10, 20, 30, 40, 50).random()
    val b = rnd(5, 30)
    val bigger = Random.nextBoolean()
    val sign = if (bigger) "<" else ">"
    // "<" means the right side must be bigger; ">" means it must be smaller.
    val right = if (bigger) b + rnd(1, 3) else b - rnd(1, 3)
    val wrong = if (bigger) listOf(b, b - 1, b - 2) else listOf(b, b + 1, b + 2)
    val opts = (wrong + right).shuffled()
    // The sign's open mouth always faces the bigger side. (No sign glyphs in the Hebrew text: RTL would mirror them.)
    val explain = if (bigger) "$base + $b = ${base + b}. הפה הפתוח של הסימן פונה ימינה, אז הצד הימני צריך להיות גדול יותר. רק $base + $right = ${base + right} גדול מ-${base + b}."
    else "$base + $b = ${base + b}. הפה הפתוח של הסימן פונה שמאלה, אז הצד הימני צריך להיות קטן יותר. רק $base + $right = ${base + right} קטן מ-${base + b}."
    return ChoiceQ("math:cmp", "איזה מספר מתאים כדי שהתרגיל יהיה נכון?", "$base + $b $sign $base + ❓", opts.map { "$it" }, opts.indexOf(right), explain, ltr = true)
}

/** Shape puzzles from the test: each shape stands for a number. */
private fun shapesQ(): ChoiceQ {
    val s = rnd(2, 9)
    val t = rnd(3, 15)
    return if (Random.nextBoolean()) {
        mathQ("shape", "כל צורה היא מספר. איזה מספר הוא 🔺?", "🟦 + 🟦 = ${2 * s}\n🟦 + 🔺 = ${s + t}", t,
            "שני ריבועים זהים נותנים ${2 * s}, אז 🟦 = $s. ואז $s + 🔺 = ${s + t}, אז 🔺 = $t.", s, s + t, 2 * s)
    } else {
        mathQ("shape", "כל צורה היא מספר. איזה מספר הוא 🔺?", "🟦 + 🟦 + 🟦 = ${3 * s}\n🔺 − 🟦 = $t", s + t,
            "שלושה ריבועים זהים נותנים ${3 * s}, אז 🟦 = $s. אם 🔺 − $s = $t, אז 🔺 = $t + $s = ${s + t}.", t, t - s, 3 * s)
    }
}

fun mathRound(n: Int = 10): List<ChoiceQ> {
    val kinds = listOf("add", "add", "sub", "sub", "mul", "mul", "miss", "miss", "cmp", "shape").shuffled()
    return List(n) { i ->
        when (kinds[i % kinds.size]) {
            "add" -> addQ()
            "sub" -> subQ()
            "mul" -> mulQ()
            "miss" -> missingQ()
            "cmp" -> compareQ()
            else -> shapesQ()
        }
    }
}

// ---------------- Word problems ----------------

val OPS = listOf("חיבור ➕", "חיסור ➖", "כפל ✖️", "שתי פעולות (שני שלבים)")
const val ADD = 0
const val SUB = 1
const val MUL = 2
const val TWO = 3

/** A word problem solved in three steps: which operation, which exercise, and the answer. */
data class WordProblem(
    val id: String,
    val story: String,
    val op: Int,
    val exercise: String,
    val wrongExercises: List<String>,
    val answer: Int,
    val unit: String,
    val why: String,
)

private val BOYS = listOf("יואב", "עומר", "איתי", "נועם", "אורי", "גיל", "רון", "דניאל", "תומר", "אדם")
private val GIRLS = listOf("נועה", "מאיה", "תמר", "יעל", "שירה", "דנה", "ליה", "רוני")

private fun two(list: List<String>): Pair<String, String> = list.shuffled().let { it[0] to it[1] }

private val TEMPLATES: List<() -> WordProblem> = listOf(
    {
        val a = rnd(10, 18); val b = rnd(10, 18)
        WordProblem("class", "בכיתה של ${BOYS.random()} יש $a בנים ו-$b בנות. כמה ילדים יש בכיתה?", ADD,
            "$a + $b", listOf("${maxOf(a, b)} − ${minOf(a, b)}", "$a + $a", "$b × 2"), a + b, "ילדים",
            "בנים ובנות ביחד הם כל הילדים, ולכן מחברים: $a + $b = ${a + b}.")
    },
    {
        val (x, y) = two(BOYS); val a = rnd(30, 80); val b = rnd(5, 25)
        WordProblem("stickers", "ל$x היו $a מדבקות. הוא נתן ל$y $b מדבקות. כמה מדבקות נשארו ל$x?", SUB,
            "$a − $b", listOf("$a + $b", "$b − 5", "$a − 10"), a - b, "מדבקות",
            "$x נתן מדבקות, אז נשארו לו פחות. מחסרים: $a − $b = ${a - b}.")
    },
    {
        val (x, y) = two(BOYS); val a = rnd(30, 60); val b = a - rnd(5, 20)
        WordProblem("compare", "ל$x יש $a גולות, ול$y יש $b גולות. בכמה גולות יש ל$x יותר מאשר ל$y?", SUB,
            "$a − $b", listOf("$a + $b", "$b + 10", "$a − 10"), a - b, "גולות",
            "\"בכמה יותר\" זו שאלה של הפרש, ולכן מחסרים: $a − $b = ${a - b}. שימו לב: המילה \"יותר\" לא תמיד אומרת לחבר!")
    },
    {
        val a = listOf(3, 4, 5, 10).random(); val k = rnd(2, 6)
        WordProblem("boxes", "בכל קופסה יש $a עפרונות. ל${BOYS.random()} יש $k קופסאות. כמה עפרונות יש לו בסך הכול?", MUL,
            "$k × $a", listOf("$k + $a", "${maxOf(a, k)} − ${minOf(a, k)}", "$a + 10"), a * k, "עפרונות",
            "יש $k קבוצות שוות של $a, ולכן כופלים: $k × $a = ${a * k}.")
    },
    {
        val w = listOf(100, 200, 300).random(); val c = listOf(4, 5, 6, 8, 10).random(); val k = listOf(2, 3).random()
        WordProblem("cookies", "בחבילה ששוקלת $w גרם יש $c עוגיות. כמה עוגיות יש בחבילה ששוקלת ${w * k} גרם?", MUL,
            "$c × $k", listOf("$c + $k", "$c + $w", "${w * k} − $c"), c * k, "עוגיות",
            "${w * k} גרם זה פי $k מ-$w גרם, ולכן יש פי $k עוגיות: $c × $k = ${c * k}.")
    },
    {
        val (first, second) = listOf("כיכר לחם" to "יוגורטים", "מחברת" to "עפרונות", "שקית במבה" to "בקבוקי מים").random()
        val a = rnd(3, 9); val k = rnd(2, 3); val b = rnd(2, 5)
        val cost = a + k * b
        val pay = if (cost <= 20) 20 else 50
        WordProblem("change", "${BOYS.random()} קנה $first ב-$a ₪ ו-$k $second במחיר $b ₪ כל אחד. הוא שילם בשטר של $pay ₪. כמה עודף הוא קיבל?", TWO,
            "$pay − ($a + $k × $b)", listOf("$pay − ($a + $b)", "$a + $k × $b", "$pay − $a − $k"), pay - cost, "₪",
            "שלב 1: כמה עלה הכול? $k × $b = ${k * b}, ועוד $a: ${k * b} + $a = $cost. שלב 2: העודף: $pay − $cost = ${pay - cost}.")
    },
    {
        val (x, y) = two(BOYS); val b = rnd(5, 20); val c = b + rnd(10, 50)
        WordProblem("start", "ל$x היו כמה קלפים. $y נתן לו עוד $b קלפים, ועכשיו יש ל$x $c קלפים. כמה קלפים היו ל$x בהתחלה?", SUB,
            "$c − $b", listOf("$c + $b", "$b + 10", "$c − 10"), c - b, "קלפים",
            "עכשיו יש $c, וזה כולל את ה-$b שקיבל. כדי לדעת כמה היו קודם מורידים אותם: $c − $b = ${c - b}. שימו לב: \"קיבל\" אבל מחסרים!")
    },
    {
        val (many, one, legs) = listOf(Triple("תרנגולות", "תרנגולת", 2), Triple("פרות", "פרה", 4), Triple("ברווזים", "ברווז", 2)).random()
        val k = rnd(3, 9).let { if (it == legs) it + 1 else it }
        WordProblem("legs", "בחווה יש $k $many. לכל $one יש $legs רגליים. כמה רגליים יש לכל ה$many ביחד?", MUL,
            "$k × $legs", listOf("$k + $legs", "$k × $k", "$k + $k + $k"), k * legs, "רגליים",
            "יש $k $many ולכל אחת $legs רגליים, אז כופלים: $k × $legs = ${k * legs}.")
    },
    {
        val a = rnd(20, 40); val b = rnd(3, 12); val c = rnd(2, 10)
        WordProblem("bus", "באוטובוס היו $a נוסעים. בתחנה ירדו $b נוסעים ועלו $c נוסעים. כמה נוסעים יש עכשיו באוטובוס?", TWO,
            "$a − $b + $c", listOf("$a + $b + $c", "$a + $b − $c", "$a − $b − $c"), a - b + c, "נוסעים",
            "שלב 1: ירדו, אז מחסרים: $a − $b = ${a - b}. שלב 2: עלו, אז מחברים: ${a - b} + $c = ${a - b + c}.")
    },
    {
        val x = BOYS.random(); val g = GIRLS.random(); val age = rnd(6, 9); val d = rnd(2, 6)
        WordProblem("age", "$x בן $age. אחותו $g גדולה ממנו ב-$d שנים. בת כמה $g?", ADD,
            "$age + $d", listOf("$age − $d", "$age × $d", "$d + $d"), age + d, "שנים",
            "$g גדולה יותר, אז מוסיפים: $age + $d = ${age + d}.")
    },
    {
        val g = GIRLS.random(); val a = rnd(40, 100); val b = rnd(10, a - 10)
        WordProblem("pages", "בספר יש $a עמודים. $g כבר קראה $b עמודים. כמה עמודים נשאר לה לקרוא?", SUB,
            "$a − $b", listOf("$a + $b", "$b + 10", "$a − 10"), a - b, "עמודים",
            "מכל העמודים מורידים את מה שכבר קראה: $a − $b = ${a - b}.")
    },
    {
        val a = rnd(2, 5)
        WordProblem("week", "${BOYS.random()} קורא $a עמודים בכל יום. כמה עמודים הוא יקרא בשבוע שלם?", MUL,
            "$a × 7", listOf("$a + 7", "$a × 5", "7 − $a"), a * 7, "עמודים",
            "בשבוע יש 7 ימים, ובכל יום $a עמודים: $a × 7 = ${a * 7}. צריך לזכור לבד כמה ימים יש בשבוע!")
    },
    {
        val g = GIRLS.random(); val k = rnd(2, 8)
        WordProblem("coins", "ל$g יש $k מטבעות של 5 ₪ ועוד מטבע אחד של 2 ₪. כמה כסף יש ל$g?", TWO,
            "$k × 5 + 2", listOf("$k + 5 + 2", "$k × 2 + 5", "$k × 5"), k * 5 + 2, "₪",
            "שלב 1: $k מטבעות של 5: $k × 5 = ${k * 5}. שלב 2: ועוד 2: ${k * 5} + 2 = ${k * 5 + 2}.")
    },
    {
        val b = rnd(2, 6); val c = rnd(2, 5)
        WordProblem("wheels", "בחניה עומדים $b אופניים ו-$c מכוניות. לכל אופניים יש 2 גלגלים, ולכל מכונית יש 4 גלגלים. כמה גלגלים יש בחניה?", TWO,
            "$b × 2 + $c × 4", listOf("$b + $c", "($b + $c) × 4", "$b × 4 + $c × 2"), b * 2 + c * 4, "גלגלים",
            "שלב 1: גלגלי האופניים: $b × 2 = ${b * 2}, גלגלי המכוניות: $c × 4 = ${c * 4}. שלב 2: ביחד: ${b * 2} + ${c * 4} = ${b * 2 + c * 4}.")
    },
    {
        val (x, y) = two(GIRLS); val a = rnd(15, 40); val d = rnd(5, 20)
        WordProblem("more", "ל$x יש $a חרוזים. ל$y יש $d חרוזים יותר ממנה. כמה חרוזים יש ל$y?", ADD,
            "$a + $d", listOf("$a − $d", "$a + $a", "$d + 10"), a + d, "חרוזים",
            "ל$y יש יותר, אז מוסיפים: $a + $d = ${a + d}.")
    },
    {
        val (x, y) = two(BOYS); val a = rnd(30, 90); val d = rnd(5, 25)
        WordProblem("less", "ל$x יש $a ₪. ל$y יש $d ₪ פחות ממנו. כמה כסף יש ל$y?", SUB,
            "$a − $d", listOf("$a + $d", "$d − 5", "$a − 10"), a - d, "₪",
            "ל$y יש פחות, אז מורידים: $a − $d = ${a - d}.")
    },
    {
        val k = listOf(2, 3, 4, 5, 10).random(); val r = rnd(3, 9)
        WordProblem("rows", "באולם יש $r שורות של כיסאות, ובכל שורה יש $k כיסאות. כמה כיסאות יש באולם?", MUL,
            "$r × $k", listOf("$r + $k", "$r + $r", "${maxOf(r, k)} − ${minOf(r, k)}"), r * k, "כיסאות",
            "יש $r שורות שוות של $k כיסאות: $r × $k = ${r * k}.")
    },
)

fun wordProblems(n: Int = 5): List<WordProblem> {
    // Ones he got wrong or hasn't seen come first.
    val made = TEMPLATES.map { it() }
    return made.sortedBy { (Store.levels["wp:${it.id}"] ?: 0) + Random.nextDouble() * 2 }.take(n)
}

/** Near-miss answers for the last step of a word problem. */
fun wpAnswerChoice(p: WordProblem): Pair<List<String>, Int> =
    numChoice(p.answer, p.answer + 10, abs(p.answer - 10), p.answer + 1, p.answer - 1)
