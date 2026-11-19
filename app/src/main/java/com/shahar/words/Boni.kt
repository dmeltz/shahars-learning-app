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

/** Boni, Shahar's bunny buddy. */
enum class BoniMood(val res: Int) {
    HAPPY(R.drawable.boni_happy),
    CHEER(R.drawable.boni_cheer),
    SLEEPY(R.drawable.boni_sleepy),
}

@Composable
fun Boni(mood: BoniMood, size: Dp, modifier: Modifier = Modifier, bounce: Boolean = false) {
    val t = rememberInfiniteTransition(label = "boni")
    val hop = t.animateFloat(
        initialValue = 0f,
        targetValue = if (bounce) -8f else 0f,
        animationSpec = infiniteRepeatable(tween(450), RepeatMode.Reverse),
        label = "hop",
    )
    Image(
        painter = painterResource(mood.res),
        contentDescription = "בוני",
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
