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
import androidx.compose.ui.text.style.TextOverflow
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
import androidx.compose.runtime.mutableStateMapOf
import androidx.compose.runtime.key
import androidx.compose.ui.unit.Dp

private val Floor = Color(0xFFE8B98A)
private val FloorLine = Color(0xFFD29E6C)

@Composable
fun HouseScreen(onBack: () -> Unit, onShop: () -> Unit) {
    var picking by remember { mutableStateOf(false) }
    if (!Store.layoutChosen || picking) {
        Column(Modifier.fillMaxSize().padding(horizontal = 12.dp, vertical = 8.dp)) {
            LayoutPicker(
                first = !Store.layoutChosen,
                onDone = { picking = false },
                onBack = if (Store.layoutChosen) ({ picking = false }) else onBack,
            )
        }
        return
    }
    Column(
        Modifier.fillMaxSize().padding(horizontal = 12.dp, vertical = 8.dp),
        verticalArrangement = Arrangement.spacedBy(8.dp),
    ) {
        TopBar("הבית שלי", onBack)
        Row(
            Modifier.fillMaxWidth().horizontalScroll(rememberScrollState()),
            horizontalArrangement = Arrangement.spacedBy(8.dp),
        ) {
            ROOMS.forEachIndexed { i, name ->
                val on = Store.room == i
                Text(
                    name,
                    fontSize = 15.sp,
                    fontWeight = FontWeight.Bold,
                    color = if (on) Color.White else Purple,
                    textAlign = TextAlign.Center,
                    modifier = Modifier.clip(RoundedCornerShape(16.dp))
                        .background(if (on) Purple else Color.White)
                        .clickable { Store.goToRoom(i) }
                        .padding(horizontal = 14.dp, vertical = 10.dp),
                )
            }
        }
        val buddyRooms = remember {
            mutableStateMapOf<String, Int>().apply {
                ownedBuddies().forEach { put(it.id, if (it.id == Store.starter) Store.room else Random.nextInt(ROOMS.size)) }
            }
        }
        // The kid's own first friend always follows them to the room they are looking at.
        fun roomOf(b: Buddy): Int = if (b.id == Store.starter) Store.room else buddyRooms[b.id] ?: Store.room
        var news by remember { mutableStateOf<String?>(null) }
        // Every few seconds one of the friends walks over to another room.
        LaunchedEffect(Unit) {
            while (true) {
                delay(Random.nextLong(9000, 16000))
                val b = ownedBuddies().filter { it.id != Store.starter }.randomOrNull() ?: continue
                val from = roomOf(b)
                val to = (from + 1 + Random.nextInt(ROOMS.size - 1)) % ROOMS.size
                buddyRooms[b.id] = to
                news = when {
                    from == Store.room -> "${b.he} יצא/ה לטייל ב${ROOMS[to]} 👋"
                    to == Store.room -> "${b.he} בדרך לבקר כאן! 🎉"
                    else -> null
                }
            }
        }
        LaunchedEffect(news) {
            if (news != null) {
                delay(3000)
                news = null
            }
        }
        // A new house template means a new page: the house is drawn again in its new shape.
        key(Store.layout) {
            House3D(
                Modifier.fillMaxWidth().weight(1f).clip(RoundedCornerShape(24.dp)).border(3.dp, Purple, RoundedCornerShape(24.dp)),
                buddyRooms,
            )
        }
        val elsewhere = ownedBuddies().filter { roomOf(it) != Store.room }
        val status = news ?: if (elsewhere.isNotEmpty()) "👀 " + elsewhere.joinToString(" · ") { "${it.he} ב${ROOMS[roomOf(it)]}" } else null
        Text(
            status ?: Store.g(
                "הקישי על חבר ואז על מקום כדי שילך לשם (או הזיזי עם הג'ויסטיק 🕹️). גררי חפצים, הקישי לסיבוב, הקשה כפולה למחסן.",
                "הקש על חבר ואז על מקום כדי שילך לשם (או הזז עם הג'ויסטיק 🕹️). גרור חפצים, הקש לסיבוב, הקשה כפולה למחסן.",
            ),
            fontSize = 14.sp, color = if (news != null) Green else if (status != null) Purple else Ink, fontWeight = FontWeight.Bold,
            maxLines = 2, overflow = TextOverflow.Ellipsis,
        )
        val stored = Store.items.filter { !it.value.inRoom }.keys.sorted().mapNotNull { k -> shopItemOf(k)?.let { k to it } }
        Row(
            Modifier.fillMaxWidth().horizontalScroll(rememberScrollState()),
            horizontalArrangement = Arrangement.spacedBy(8.dp),
            verticalAlignment = Alignment.CenterVertically,
        ) {
            WALLS.filter { Store.walls.contains(it.id) }.forEach { w ->
                Spacer(
                    Modifier.size(38.dp).clip(CircleShape).background(w.color)
                        .border(if (Store.roomWalls[Store.room] == w.id) 4.dp else 1.dp, Purple, CircleShape)
                        .clickable { Store.setRoomWall(w.id) }
                )
            }
            if (stored.isNotEmpty()) {
                Text("📦", fontSize = 24.sp)
                stored.forEach { (key, item) ->
                    VoxImage(
                        "vox_item_${item.id}", item.he,
                        Modifier.size(48.dp).clip(RoundedCornerShape(12.dp)).background(Color.White)
                            .clickable { Store.place(key, true) }.padding(4.dp),
                    )
                }
            }
        }
        if (stored.isNotEmpty()) {
            Text(Store.g("הקישי על חפץ מהמחסן 📦 כדי להחזיר אותו ל", "הקש על חפץ מהמחסן 📦 כדי להחזיר אותו ל") + ROOMS[Store.room], fontSize = 13.sp, color = Ink)
        }
        Row(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
            BigButton("לחנות 🛍️", Orange, Modifier.weight(1f), onClick = onShop)
            BigButton("בית אחר 🏗️", Purple, Modifier.weight(1f), onClick = { picking = true })
        }
    }
}

/** A picture rendered from the 3D models (res/drawable-nodpi/vox_*.png). */
@Composable
fun VoxImage(name: String, description: String, modifier: Modifier) {
    val ctx = LocalContext.current
    val id = remember(name) { ctx.resources.getIdentifier(name, "drawable", ctx.packageName) }
    if (id != 0) Image(painterResource(id), contentDescription = description, modifier = modifier)
    else Spacer(modifier)
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
                Text("חברים ל" + (buddyList().firstOrNull { it.id == Store.starter }?.he ?: "בוני") + (if (Store.isTomer) " 🚀" else " 🐰"), fontSize = 20.sp, fontWeight = FontWeight.Bold, color = Ink)
            }
            items(buddyList().filter { it.id != Store.starter }) { b ->
                val owned = Store.buddies.contains(b.id)
                ShopCard("", b.he, b.about, Store.priceOf(b), owned, image = b.happy) {
                    if (Store.buyBuddy(b)) {
                        Toast.makeText(ctx, "${b.he} עכשיו גר/ה איתך בבית! 🎉", Toast.LENGTH_SHORT).show()
                    } else {
                        Toast.makeText(ctx, Store.g("עוד קצת נקודות ותוכלי לקנות 💪", "עוד קצת נקודות ותוכל לקנות 💪"), Toast.LENGTH_SHORT).show()
                    }
                }
            }
            ROOMS.forEachIndexed { r, roomName ->
                item(span = { GridItemSpan(maxLineSpan) }) {
                    Text("חפצים ל$roomName", fontSize = 20.sp, fontWeight = FontWeight.Bold, color = Ink,
                        modifier = Modifier.padding(top = 8.dp))
                }
                items(SHOP.filter { it.room == r }) { item ->
                    val count = Store.countOf(item)
                    val owned = count > 0 && !item.multi
                    ShopCard(item.emoji, item.he, item.en, item.price, owned, voxName = "vox_item_${item.id}", have = if (item.multi) count else 0) {
                        if (Store.buy(item)) {
                            Toast.makeText(ctx, "קנית ${item.he}! מחכה לך ב$roomName 🏠", Toast.LENGTH_SHORT).show()
                        } else {
                            Toast.makeText(ctx, Store.g("עוד קצת נקודות ותוכלי לקנות 💪", "עוד קצת נקודות ותוכל לקנות 💪"), Toast.LENGTH_SHORT).show()
                        }
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
                        Toast.makeText(ctx, Store.g("עוד קצת נקודות ותוכלי לקנות 💪", "עוד קצת נקודות ותוכל לקנות 💪"), Toast.LENGTH_SHORT).show()
                    }
                }
            }
            item(span = { GridItemSpan(maxLineSpan) }) {
                Text("בתים חדשים 🏡", fontSize = 20.sp, fontWeight = FontWeight.Bold, color = Ink,
                    modifier = Modifier.padding(top = 8.dp))
            }
            items(Layouts.all(ctx).filter { it.price > 0 }) { l -> LayoutCard(l, onDone = {}) }
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
    voxName: String? = null,
    have: Int = 0,
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
        } else if (voxName != null) {
            VoxImage(voxName, he, Modifier.size(72.dp))
        } else {
            Text(emoji, fontSize = 44.sp)
        }
        Text(he, fontSize = 17.sp, fontWeight = FontWeight.Bold, color = Ink)
        if (en.isNotEmpty()) Text(en, fontSize = 14.sp, color = Purple)
        if (have > 0) Text("יש לך $have · אפשר לקנות עוד", fontSize = 13.sp, color = Green, fontWeight = FontWeight.Bold)
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
