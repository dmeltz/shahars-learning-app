package com.shahar.words

import android.widget.Toast
import androidx.compose.foundation.Canvas
import androidx.compose.foundation.Image
import androidx.compose.ui.res.painterResource
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.gestures.detectDragGestures
import androidx.compose.foundation.gestures.detectTapGestures
import androidx.compose.foundation.horizontalScroll
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.BoxWithConstraints
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.absoluteOffset
import androidx.compose.foundation.layout.aspectRatio
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.lazy.grid.GridCells
import androidx.compose.foundation.lazy.grid.GridItemSpan
import androidx.compose.foundation.lazy.grid.LazyVerticalGrid
import androidx.compose.foundation.lazy.grid.items
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.CompositionLocalProvider
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.geometry.CornerRadius
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.geometry.Size
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.drawscope.Stroke
import androidx.compose.ui.input.pointer.pointerInput
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.platform.LocalLayoutDirection
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.IntOffset
import androidx.compose.ui.unit.LayoutDirection
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import kotlin.math.roundToInt
import kotlin.random.Random
import java.time.LocalTime
import kotlinx.coroutines.delay
import androidx.compose.animation.core.animateFloatAsState
import androidx.compose.animation.core.tween
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.widthIn
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.setValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.mutableFloatStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.key
import androidx.compose.ui.unit.Dp

private val Floor = Color(0xFFE8B98A)
private val FloorLine = Color(0xFFD29E6C)

@Composable
fun HouseScreen(onBack: () -> Unit, onShop: () -> Unit) {
    Column(
        Modifier.fillMaxSize().verticalScroll(rememberScrollState()).padding(16.dp),
        verticalArrangement = Arrangement.spacedBy(12.dp),
    ) {
        TopBar("הבית שלי", onBack)
        Room(Modifier.fillMaxWidth().aspectRatio(0.9f))
        if (Store.items.isEmpty()) {
            Text(
                "בוני גרה כאן, אבל החדר עדיין ריק. אספי נקודות בתרגול ותקני לה חפצים בחנות!",
                fontSize = 17.sp, color = Ink, modifier = Modifier.fillMaxWidth(), textAlign = TextAlign.Center,
            )
        } else {
            Text(
                "גררי חפצים כדי לסדר את החדר. לחיצה כפולה על חפץ מעבירה אותו למחסן. לחצי על בוני כדי לשמוע מה היא אומרת.",
                fontSize = 15.sp, color = Ink,
            )
        }
        val stored = SHOP.filter { Store.items[it.id]?.inRoom == false }
        if (stored.isNotEmpty()) {
            Text("📦 המחסן (לחצי כדי להחזיר לחדר):", fontSize = 16.sp, fontWeight = FontWeight.Bold, color = Ink)
            Row(
                Modifier.fillMaxWidth().horizontalScroll(rememberScrollState()),
                horizontalArrangement = Arrangement.spacedBy(10.dp),
            ) {
                stored.forEach { item ->
                    Text(
                        item.emoji, fontSize = 38.sp,
                        modifier = Modifier.clip(RoundedCornerShape(14.dp)).background(Color.White)
                            .clickable { Store.place(item.id, true) }.padding(8.dp),
                    )
                }
            }
        }
        Text("צבע הקיר:", fontSize = 16.sp, fontWeight = FontWeight.Bold, color = Ink)
        Row(horizontalArrangement = Arrangement.spacedBy(10.dp)) {
            WALLS.filter { Store.walls.contains(it.id) }.forEach { w ->
                Spacer(
                    Modifier.size(44.dp).clip(CircleShape).background(w.color)
                        .border(if (Store.wall == w.id) 4.dp else 1.dp, Purple, CircleShape)
                        .clickable { Store.setRoomWall(w.id) }
                )
            }
        }
        BigButton("לחנות 🛍️", Orange, onClick = onShop)
    }
}

@Composable
fun Room(modifier: Modifier) {
    val wallColor = WALLS.firstOrNull { it.id == Store.wall }?.color ?: WALLS[0].color
    // Positions are stored left-to-right, so the room is laid out LTR.
    CompositionLocalProvider(LocalLayoutDirection provides LayoutDirection.Ltr) {
        BoxWithConstraints(modifier.clip(RoundedCornerShape(24.dp)).border(3.dp, Purple, RoundedCornerShape(24.dp))) {
            val w = constraints.maxWidth.toFloat()
            val h = constraints.maxHeight.toFloat()
            Canvas(Modifier.fillMaxSize()) {
                val wallH = size.height * 0.55f
                drawRect(wallColor, size = Size(size.width, wallH))
                drawRect(Floor, topLeft = Offset(0f, wallH), size = Size(size.width, size.height - wallH))
                for (i in 1..5) {
                    val y = wallH + (size.height - wallH) * i / 6f
                    drawLine(FloorLine, Offset(0f, y), Offset(size.width, y), strokeWidth = 3f)
                }
                drawRect(Color.White, topLeft = Offset(0f, wallH - 10f), size = Size(size.width, 14f))
                val wx = size.width * 0.62f
                val wy = size.height * 0.08f
                val ww = size.width * 0.28f
                val wh = size.height * 0.24f
                drawRoundRect(Color(0xFFBDE7FF), Offset(wx, wy), Size(ww, wh), CornerRadius(14f))
                drawRoundRect(Color.White, Offset(wx, wy), Size(ww, wh), CornerRadius(14f), style = Stroke(9f))
                drawLine(Color.White, Offset(wx + ww / 2, wy), Offset(wx + ww / 2, wy + wh), strokeWidth = 7f)
                drawLine(Color.White, Offset(wx, wy + wh / 2), Offset(wx + ww, wy + wh / 2), strokeWidth = 7f)
                drawCircle(Color(0xFFFFE14D), radius = ww * 0.12f, center = Offset(wx + ww * 0.25f, wy + wh * 0.25f))
            }
            val buddySize = if (Store.buddies.size > 2) maxWidth * 0.2f else maxWidth * 0.26f
            ownedBuddies().forEachIndexed { i, b ->
                key(b.id) { RoomBoni(w, h, buddySize, b, i) }
            }
            SHOP.forEach { item ->
                val p = Store.items[item.id]
                if (p != null && p.inRoom) {
                    Text(
                        item.emoji,
                        fontSize = item.size.sp,
                        modifier = Modifier
                            .absoluteOffset { IntOffset((p.x * w).roundToInt(), (p.y * h).roundToInt()) }
                            .pointerInput(item.id) {
                                detectDragGestures(onDragEnd = { Store.save() }) { change, drag ->
                                    change.consume()
                                    Store.move(item.id, drag.x / w, drag.y / h)
                                }
                            }
                            .pointerInput(item.id + "-tap") {
                                detectTapGestures(onDoubleTap = { Store.place(item.id, false) })
                            },
                    )
                }
            }
        }
    }
}

@Composable
fun ShopScreen(onBack: () -> Unit, onHouse: () -> Unit) {
    val ctx = LocalContext.current
    Column(Modifier.fillMaxSize().padding(16.dp)) {
        TopBar("חנות", onBack)
        LazyVerticalGrid(
            columns = GridCells.Fixed(2),
            horizontalArrangement = Arrangement.spacedBy(10.dp),
            verticalArrangement = Arrangement.spacedBy(10.dp),
            modifier = Modifier.weight(1f),
        ) {
            item(span = { GridItemSpan(maxLineSpan) }) {
                Text("חברים לבוני 🐰", fontSize = 20.sp, fontWeight = FontWeight.Bold, color = Ink)
            }
            items(BUDDIES.filter { it.price > 0 }) { b ->
                val owned = Store.buddies.contains(b.id)
                ShopCard("", b.he, b.about, b.price, owned, image = b.happy) {
                    if (Store.buyBuddy(b)) {
                        Toast.makeText(ctx, "${b.he} עברה לגור איתך בבית! 🎉", Toast.LENGTH_SHORT).show()
                    } else {
                        Toast.makeText(ctx, "עוד קצת נקודות ותוכלי לקנות 💪", Toast.LENGTH_SHORT).show()
                    }
                }
            }
            item(span = { GridItemSpan(maxLineSpan) }) {
                Text("חפצים לחדר", fontSize = 20.sp, fontWeight = FontWeight.Bold, color = Ink,
                    modifier = Modifier.padding(top = 8.dp))
            }
            items(SHOP) { item ->
                val owned = Store.items.containsKey(item.id)
                ShopCard(item.emoji, item.he, item.en, item.price, owned) {
                    if (Store.buy(item)) {
                        Toast.makeText(ctx, "קנית ${item.he}! הוא מחכה לך בבית 🏠", Toast.LENGTH_SHORT).show()
                    } else {
                        Toast.makeText(ctx, "עוד קצת נקודות ותוכלי לקנות 💪", Toast.LENGTH_SHORT).show()
                    }
                }
            }
            item(span = { GridItemSpan(maxLineSpan) }) {
                Text("צבעים לקיר", fontSize = 20.sp, fontWeight = FontWeight.Bold, color = Ink,
                    modifier = Modifier.padding(top = 8.dp))
            }
            items(WALLS.filter { it.price > 0 }) { w ->
                val owned = Store.walls.contains(w.id)
                ShopCard("🎨", "קיר ${w.he}", "", w.price, owned, swatch = w.color) {
                    if (Store.buyWall(w)) {
                        Toast.makeText(ctx, "הקיר נצבע ב${w.he}! 🎨", Toast.LENGTH_SHORT).show()
                    } else {
                        Toast.makeText(ctx, "עוד קצת נקודות ותוכלי לקנות 💪", Toast.LENGTH_SHORT).show()
                    }
                }
            }
        }
        Spacer(Modifier.height(8.dp))
        BigButton("לבית שלי 🏠", Purple, onClick = onHouse)
    }
}

@Composable
fun ShopCard(
    emoji: String,
    he: String,
    en: String,
    price: Int,
    owned: Boolean,
    swatch: Color? = null,
    image: Int? = null,
    onBuy: () -> Unit,
) {
    val canBuy = !owned && Store.points >= price
    Column(
        Modifier.fillMaxWidth().clip(RoundedCornerShape(20.dp)).background(swatch ?: Color.White)
            .border(2.dp, if (owned) Green else Purple.copy(alpha = 0.3f), RoundedCornerShape(20.dp))
            .padding(12.dp),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.spacedBy(4.dp),
    ) {
        if (image != null) {
            Image(painterResource(image), contentDescription = he, modifier = Modifier.size(72.dp))
        } else {
            Text(emoji, fontSize = 44.sp)
        }
        Text(he, fontSize = 17.sp, fontWeight = FontWeight.Bold, color = Ink)
        if (en.isNotEmpty()) Text(en, fontSize = 14.sp, color = Purple)
        val label = if (owned) "✓ שלך" else "⭐ $price"
        Text(
            label, fontSize = 17.sp, fontWeight = FontWeight.Bold,
            color = if (owned) Green else if (canBuy) Color.White else Ink,
            textAlign = TextAlign.Center,
            modifier = Modifier.fillMaxWidth().clip(RoundedCornerShape(14.dp))
                .background(if (owned) Color.Transparent else if (canBuy) Orange else Color(0xFFEDE7F6))
                .clickable(enabled = !owned) { onBuy() }
                .padding(vertical = 8.dp),
        )
    }
}

@Composable
fun RoomBoni(w: Float, h: Float, size: Dp, buddy: Buddy, index: Int) {
    val hour = remember { LocalTime.now().hour }
    var asleep by remember { mutableStateOf(hour >= 21 || hour < 7) }
    var target by remember { mutableFloatStateOf(0.05f + (index * 0.22f) % 0.65f) }
    val rowY = 0.6f + (index % 2) * 0.08f
    var talking by remember { mutableStateOf<String?>(null) }
    val x by animateFloatAsState(target, tween(2500), label = "boniX")
    LaunchedEffect(asleep) {
        while (!asleep) {
            delay(Random.nextLong(3500, 7000))
            target = Random.nextFloat() * 0.65f
        }
    }
    LaunchedEffect(talking) {
        if (talking != null) {
            delay(2800)
            talking = null
        }
    }
    val mood = when {
        talking != null -> BoniMood.CHEER
        asleep -> BoniMood.SLEEPY
        else -> BoniMood.HAPPY
    }
    Box(
        Modifier
            .absoluteOffset { IntOffset((x * w).roundToInt(), (h * rowY).roundToInt()) }
            .pointerInput(Unit) {
                detectTapGestures {
                    asleep = false
                    talking = "${buddy.he}: " + boniLines().random()
                }
            }
    ) {
        Boni(mood, size, bounce = !asleep, buddy = buddy)
    }
    val line = talking ?: if (asleep && index == 0) "זזז... כולם ישנים. לחצי על מישהו כדי להעיר" else null
    if (line != null) {
        Text(
            line,
            fontSize = 15.sp,
            fontWeight = FontWeight.Bold,
            color = Ink,
            modifier = Modifier
                .absoluteOffset { IntOffset((w * 0.05f).roundToInt(), (h * 0.42f).roundToInt()) }
                .widthIn(max = 260.dp)
                .clip(RoundedCornerShape(16.dp))
                .background(Color.White)
                .padding(horizontal = 12.dp, vertical = 8.dp),
        )
    }
}
