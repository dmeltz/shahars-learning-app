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
    Buddy("boni", "בוני", "ארנבונה", 0, R.drawable.boni_happy, R.drawable.boni_cheer, R.drawable.boni_sleepy),
    Buddy("mika", "מיקה", "ילדה עם קוקים", 800, R.drawable.mika_happy, R.drawable.mika_cheer, R.drawable.mika_sleepy),
    Buddy("pitzi", "פיצי", "חתלתולה", 1000, R.drawable.pitzi_happy, R.drawable.pitzi_cheer, R.drawable.pitzi_sleepy),
    Buddy("blocky", "בלוקי", "דמות מקוביות", 1200, R.drawable.blocky_happy, R.drawable.blocky_cheer, R.drawable.blocky_sleepy),
)


/** Tomer's buddies. He picks one for free on his first visit; the rest are in his shop. */
val TOMER_BUDDIES = listOf(
    Buddy("astro", "אסטרו", "אסטרונאוט", 500, R.drawable.astro_happy, R.drawable.astro_cheer, R.drawable.astro_sleepy),
    Buddy("goli", "גולי", "כדורגלן", 600, R.drawable.goli_happy, R.drawable.goli_cheer, R.drawable.goli_sleepy),
    Buddy("sali", "סלי", "כדורסלן", 700, R.drawable.sali_happy, R.drawable.sali_cheer, R.drawable.sali_sleepy),
    Buddy("ginga", "ג'ינגה", "לוחם קפוארה", 800, R.drawable.ginga_happy, R.drawable.ginga_cheer, R.drawable.ginga_sleepy),
    Buddy("turbo", "טורבו", "אופנוען", 900, R.drawable.turbo_happy, R.drawable.turbo_cheer, R.drawable.turbo_sleepy),
    Buddy("ninja", "שוריקן", "נינג'ה", 1000, R.drawable.ninja_happy, R.drawable.ninja_cheer, R.drawable.ninja_sleepy),
    Buddy("bobi", "בובי", "ארנבון", 1100, R.drawable.bobi_happy, R.drawable.bobi_cheer, R.drawable.bobi_sleepy),
    Buddy("chip", "צ'יפ", "כלבלב", 1200, R.drawable.chip_happy, R.drawable.chip_cheer, R.drawable.chip_sleepy),
    Buddy("kangi", "קנגי", "קנגורו", 1300, R.drawable.kangi_happy, R.drawable.kangi_cheer, R.drawable.kangi_sleepy),
    Buddy("kubi", "קובי", "ילד בלוקים", 1400, R.drawable.kubi_happy, R.drawable.kubi_cheer, R.drawable.kubi_sleepy),
)

/** The buddies of whoever is playing. */
fun buddyList(): List<Buddy> = if (Store.isTomer) TOMER_BUDDIES else BUDDIES

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
