package com.shahar.words

import androidx.compose.animation.core.RepeatMode
import androidx.compose.animation.core.animateFloat
import androidx.compose.animation.core.infiniteRepeatable
import androidx.compose.animation.core.rememberInfiniteTransition
import androidx.compose.animation.core.tween
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.staticCompositionLocalOf
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.graphicsLayer
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

enum class BoniMood { HAPPY, CHEER, SLEEPY }

/** The buddies. Each kid gets one free first friend; the others are bought in the shop. */
data class Buddy(
    val id: String,
    val he: String,
    val about: String,
    val price: Int,
    val happy: Int,
    val cheer: Int,
    val sleepy: Int,
) {
    fun res(mood: BoniMood): Int = when (mood) {
        BoniMood.HAPPY -> happy
        BoniMood.CHEER -> cheer
        BoniMood.SLEEPY -> sleepy
    }
}

val BUDDIES = listOf(
    Buddy("boni", "בוני", "ארנבונה", 0, R.drawable.vox_boni_happy, R.drawable.vox_boni_cheer, R.drawable.vox_boni_sleepy),
    Buddy("mika", "מיקה", "ילדה עם קוקים", 800, R.drawable.vox_mika_happy, R.drawable.vox_mika_cheer, R.drawable.vox_mika_sleepy),
    Buddy("pitzi", "פיצי", "חתלתולה", 1000, R.drawable.vox_pitzi_happy, R.drawable.vox_pitzi_cheer, R.drawable.vox_pitzi_sleepy),
    Buddy("blocky", "בלוקי", "ילדת בלוקים", 1200, R.drawable.vox_blocky_happy, R.drawable.vox_blocky_cheer, R.drawable.vox_blocky_sleepy),
)


/** Tomer's buddies. He picks one for free on his first visit; the rest are in his shop. */
val TOMER_BUDDIES = listOf(
    Buddy("astro", "אסטרו", "אסטרונאוט", 500, R.drawable.vox_astro_happy, R.drawable.vox_astro_cheer, R.drawable.vox_astro_sleepy),
    Buddy("goli", "גולי", "כדורגלן", 600, R.drawable.vox_goli_happy, R.drawable.vox_goli_cheer, R.drawable.vox_goli_sleepy),
    Buddy("sali", "סלי", "כדורסלן", 700, R.drawable.vox_sali_happy, R.drawable.vox_sali_cheer, R.drawable.vox_sali_sleepy),
    Buddy("ginga", "ג'ינגה", "לוחם קפוארה", 800, R.drawable.vox_ginga_happy, R.drawable.vox_ginga_cheer, R.drawable.vox_ginga_sleepy),
    Buddy("turbo", "טורבו", "אופנוען", 900, R.drawable.vox_turbo_happy, R.drawable.vox_turbo_cheer, R.drawable.vox_turbo_sleepy),
    Buddy("ninja", "שוריקן", "נינג'ה", 1000, R.drawable.vox_ninja_happy, R.drawable.vox_ninja_cheer, R.drawable.vox_ninja_sleepy),
    Buddy("bobi", "בובי", "ארנבון", 1100, R.drawable.vox_bobi_happy, R.drawable.vox_bobi_cheer, R.drawable.vox_bobi_sleepy),
    Buddy("chip", "צ'יפ", "כלבלב", 1200, R.drawable.vox_chip_happy, R.drawable.vox_chip_cheer, R.drawable.vox_chip_sleepy),
    Buddy("kangi", "קנגי", "קנגורו", 1300, R.drawable.vox_kangi_happy, R.drawable.vox_kangi_cheer, R.drawable.vox_kangi_sleepy),
    Buddy("kubi", "קובי", "ילד בלוקים", 1400, R.drawable.vox_kubi_happy, R.drawable.vox_kubi_cheer, R.drawable.vox_kubi_sleepy),
)


/** Characters added later: a boy and a girl for every kind of character. */
val MORE_BUDDIES = listOf(
    Buddy("astro_g", "לונה", "אסטרונאוטית", 500, R.drawable.vox_astro_g_happy, R.drawable.vox_astro_g_cheer, R.drawable.vox_astro_g_sleepy),
    Buddy("goli_g", "גלי", "כדורגלנית", 600, R.drawable.vox_goli_g_happy, R.drawable.vox_goli_g_cheer, R.drawable.vox_goli_g_sleepy),
    Buddy("sali_g", "שירי", "כדורסלנית", 700, R.drawable.vox_sali_g_happy, R.drawable.vox_sali_g_cheer, R.drawable.vox_sali_g_sleepy),
    Buddy("ginga_g", "קפרי", "לוחמת קפוארה", 800, R.drawable.vox_ginga_g_happy, R.drawable.vox_ginga_g_cheer, R.drawable.vox_ginga_g_sleepy),
    Buddy("turbo_g", "ספידי", "אופנוענית", 900, R.drawable.vox_turbo_g_happy, R.drawable.vox_turbo_g_cheer, R.drawable.vox_turbo_g_sleepy),
    Buddy("ninja_g", "סאקורה", "נינג'ה", 1000, R.drawable.vox_ninja_g_happy, R.drawable.vox_ninja_g_cheer, R.drawable.vox_ninja_g_sleepy),
    Buddy("shoko", "שוקו", "חתלתול", 1000, R.drawable.vox_shoko_happy, R.drawable.vox_shoko_cheer, R.drawable.vox_shoko_sleepy),
    Buddy("lola", "לולה", "כלבלבה", 1200, R.drawable.vox_lola_happy, R.drawable.vox_lola_cheer, R.drawable.vox_lola_sleepy),
    Buddy("roni", "רוני", "קנגורו עם תינוק", 1300, R.drawable.vox_roni_happy, R.drawable.vox_roni_cheer, R.drawable.vox_roni_sleepy),
    Buddy("noam", "נועם", "ילד עם כובע", 800, R.drawable.vox_noam_happy, R.drawable.vox_noam_cheer, R.drawable.vox_noam_sleepy),
    Buddy("wizard_b", "זיגי", "קוסם", 1500, R.drawable.vox_wizard_b_happy, R.drawable.vox_wizard_b_cheer, R.drawable.vox_wizard_b_sleepy),
    Buddy("wizard_g", "סטלה", "קוסמת", 1500, R.drawable.vox_wizard_g_happy, R.drawable.vox_wizard_g_cheer, R.drawable.vox_wizard_g_sleepy),
    Buddy("dancer_b", "דני", "רקדן היפ הופ", 900, R.drawable.vox_dancer_b_happy, R.drawable.vox_dancer_b_cheer, R.drawable.vox_dancer_b_sleepy),
    Buddy("dancer_g", "בלה", "בלרינה", 900, R.drawable.vox_dancer_g_happy, R.drawable.vox_dancer_g_cheer, R.drawable.vox_dancer_g_sleepy),
    Buddy("builder_b", "טוני", "בנאי", 700, R.drawable.vox_builder_b_happy, R.drawable.vox_builder_b_cheer, R.drawable.vox_builder_b_sleepy),
    Buddy("builder_g", "לבנה", "בנאית", 700, R.drawable.vox_builder_g_happy, R.drawable.vox_builder_g_cheer, R.drawable.vox_builder_g_sleepy),
    Buddy("teacher_b", "דורון", "מורה", 600, R.drawable.vox_teacher_b_happy, R.drawable.vox_teacher_b_cheer, R.drawable.vox_teacher_b_sleepy),
    Buddy("teacher_g", "מורן", "מורה", 600, R.drawable.vox_teacher_g_happy, R.drawable.vox_teacher_g_cheer, R.drawable.vox_teacher_g_sleepy),
    Buddy("police_b", "רון", "שוטר", 900, R.drawable.vox_police_b_happy, R.drawable.vox_police_b_cheer, R.drawable.vox_police_b_sleepy),
    Buddy("police_g", "רונה", "שוטרת", 900, R.drawable.vox_police_g_happy, R.drawable.vox_police_g_cheer, R.drawable.vox_police_g_sleepy),
    Buddy("fire_b", "להב", "כבאי", 1000, R.drawable.vox_fire_b_happy, R.drawable.vox_fire_b_cheer, R.drawable.vox_fire_b_sleepy),
    Buddy("fire_g", "שלהבת", "כבאית", 1000, R.drawable.vox_fire_g_happy, R.drawable.vox_fire_g_cheer, R.drawable.vox_fire_g_sleepy),
    Buddy("manager_b", "גיל", "מנהל", 800, R.drawable.vox_manager_b_happy, R.drawable.vox_manager_b_cheer, R.drawable.vox_manager_b_sleepy),
    Buddy("manager_g", "גלית", "מנהלת", 800, R.drawable.vox_manager_g_happy, R.drawable.vox_manager_g_cheer, R.drawable.vox_manager_g_sleepy),
    Buddy("pilot_b", "רום", "טייס", 1200, R.drawable.vox_pilot_b_happy, R.drawable.vox_pilot_b_cheer, R.drawable.vox_pilot_b_sleepy),
    Buddy("pilot_g", "רומי", "טייסת", 1200, R.drawable.vox_pilot_g_happy, R.drawable.vox_pilot_g_cheer, R.drawable.vox_pilot_g_sleepy),
    Buddy("soldier_b", "טל", "חייל", 1100, R.drawable.vox_soldier_b_happy, R.drawable.vox_soldier_b_cheer, R.drawable.vox_soldier_b_sleepy),
    Buddy("soldier_g", "טליה", "חיילת", 1100, R.drawable.vox_soldier_g_happy, R.drawable.vox_soldier_g_cheer, R.drawable.vox_soldier_g_sleepy),
)

/** One shop for both kids, with each boy/girl pair side by side. Each kid still owns their own. */
val ALL_BUDDIES: List<Buddy> = run {
    val byId = (BUDDIES + TOMER_BUDDIES + MORE_BUDDIES).associateBy { it.id }
    listOf("boni", "bobi", "mika", "noam", "pitzi", "shoko", "chip", "lola", "kangi", "roni", "blocky", "kubi", "astro", "astro_g", "goli", "goli_g", "sali", "sali_g", "ginga", "ginga_g", "turbo", "turbo_g", "ninja", "ninja_g", "wizard_b", "wizard_g", "dancer_b", "dancer_g", "builder_b", "builder_g", "teacher_b", "teacher_g", "police_b", "police_g", "fire_b", "fire_g", "manager_b", "manager_g", "pilot_b", "pilot_g", "soldier_b", "soldier_g").mapNotNull { byId[it] }
}

/** The shop is shared by both kids. */
fun buddyList(): List<Buddy> = ALL_BUDDIES

fun ownedBuddies(): List<Buddy> = buddyList().filter { Store.buddies.contains(it.id) }

fun randomBuddy(): Buddy = ownedBuddies().randomOrNull() ?: buddyList()[0]

/** The buddy who is cheering right now (each question can have a different one). */
val LocalBuddy = staticCompositionLocalOf { BUDDIES[0] }

@Composable
fun Boni(
    mood: BoniMood,
    size: Dp,
    modifier: Modifier = Modifier,
    bounce: Boolean = false,
    buddy: Buddy = LocalBuddy.current,
) {
    val t = rememberInfiniteTransition(label = "boni")
    val hop = t.animateFloat(
        initialValue = 0f,
        targetValue = if (bounce) -8f else 0f,
        animationSpec = infiniteRepeatable(tween(450), RepeatMode.Reverse),
        label = "hop",
    )
    Image(
        painter = painterResource(buddy.res(mood)),
        contentDescription = buddy.he,
        modifier = modifier.size(size).graphicsLayer { translationY = hop.value * density },
    )
}

@Composable
fun BoniSays(
    text: String,
    mood: BoniMood = BoniMood.HAPPY,
    color: Color = Ink,
    size: Dp = 76.dp,
    fontSize: Int = 20,
) {
    Row(Modifier.fillMaxWidth(), verticalAlignment = Alignment.CenterVertically) {
        Boni(mood, size, bounce = mood == BoniMood.CHEER)
        Spacer(Modifier.width(8.dp))
        Text(
            text,
            fontSize = fontSize.sp,
            fontWeight = FontWeight.Bold,
            color = color,
            modifier = Modifier.weight(1f).clip(RoundedCornerShape(18.dp))
                .background(Color(0xFFF1ECFF)).padding(horizontal = 14.dp, vertical = 10.dp),
        )
    }
}

fun boniLines(): List<String> = listOf(
    Store.g("אני אוהבת את הבית שלנו! 💜", "אני אוהב את הבית שלנו! 💙"),
    Store.g("בואי נקנה עוד משהו לחדר!", "בוא נקנה עוד משהו לחדר!"),
    if (Store.isTomer) "אתה יודע איך אומרים כלב באנגלית? dog!" else "את יודעת איך אומרים ספה באנגלית? sofa!",
    if (Store.hasExam) "${Store.daysText()}. את תצליחי!" else "אתה אלוף! כל יום עוד מילה 💪",
    "כל תשובה נכונה = עוד נקודות לבית ⭐",
    "flower = פרח 🌸",
    Store.g("הופ הופ! בואי נתאמן ביחד!", "הופ הופ! בוא נתאמן ביחד!"),
    if (Store.isTomer) "ice cream = גלידה. יאמי!" else "candy = ממתק. יאמי!",
)
