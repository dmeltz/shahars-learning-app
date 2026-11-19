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

/** Shahar's buddies. Boni is free; the others are bought in the shop. */
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
    Buddy("mika", "מיקה", "ילדה עם קוקים", 400, R.drawable.mika_happy, R.drawable.mika_cheer, R.drawable.mika_sleepy),
    Buddy("pitzi", "פיצי", "חתלתולה", 500, R.drawable.pitzi_happy, R.drawable.pitzi_cheer, R.drawable.pitzi_sleepy),
    Buddy("blocky", "בלוקי", "דמות מקוביות", 600, R.drawable.blocky_happy, R.drawable.blocky_cheer, R.drawable.blocky_sleepy),
)

fun ownedBuddies(): List<Buddy> = BUDDIES.filter { Store.buddies.contains(it.id) }

fun randomBuddy(): Buddy = ownedBuddies().randomOrNull() ?: BUDDIES[0]

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
    "אני אוהבת את הבית שלנו! 💜",
    "בואי נקנה עוד משהו לחדר!",
    "את יודעת איך אומרים ספה באנגלית? sofa!",
    "${Store.daysText()}. את תצליחי!",
    "כל תשובה נכונה = עוד נקודות לבית ⭐",
    "flower = פרח 🌸",
    "הופ הופ! בואי נתאמן ביחד!",
    "candy = ממתק. יאמי!",
)
