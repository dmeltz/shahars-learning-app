package com.shahar.words

import android.content.Context
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.aspectRatio
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.grid.GridCells
import androidx.compose.foundation.lazy.grid.GridItemSpan
import androidx.compose.foundation.lazy.grid.LazyVerticalGrid
import androidx.compose.foundation.lazy.grid.items
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import org.json.JSONObject

/** A room's floor, in the 3D house's floor tiles. */
data class RoomRect(val x0: Float, val z0: Float, val x1: Float, val z1: Float)

/** A house template: where the five rooms are. The shapes live in assets/house/layouts.json, shared with the 3D house. */
data class HouseLayout(val id: String, val he: String, val about: String, val price: Int, val rooms: List<RoomRect>)

private val LAYOUT_TEXT = mapOf(
    "classic" to ("הבית הקלאסי" to "ארבעה חדרים בריבוע, גינה בצד"),
    "long" to ("הבית הארוך" to "כל החדרים בשורה, גינה גדולה מלפנים"),
    "corner" to ("בית הפינה" to "בית בצורת ר שמחבק את הגינה"),
    "courtyard" to ("בית החצר" to "גינה סודית באמצע הבית"),
    "villa" to ("הווילה" to "חדרים ענקיים ושתי דלתות לגינה"),
)

object Layouts {
    private var list: List<HouseLayout> = emptyList()

    fun all(ctx: Context): List<HouseLayout> {
        if (list.isEmpty()) list = load(ctx)
        return list
    }

    fun byId(ctx: Context, id: String): HouseLayout = all(ctx).firstOrNull { it.id == id } ?: all(ctx).first()

    private fun load(ctx: Context): List<HouseLayout> {
        val text = ctx.assets.open("house/layouts.json").bufferedReader().use { it.readText() }
        val arr = JSONObject(text).getJSONArray("layouts")
        return (0 until arr.length()).map { i ->
            val o = arr.getJSONObject(i)
            val id = o.getString("id")
            val rs = o.getJSONArray("rooms")
            val rooms = (0 until rs.length()).map { k ->
                val r = rs.getJSONObject(k)
                RoomRect(r.getDouble("x0").toFloat(), r.getDouble("z0").toFloat(), r.getDouble("x1").toFloat(), r.getDouble("z1").toFloat())
            }
            val (he, about) = LAYOUT_TEXT[id] ?: (id to "")
            HouseLayout(id, he, about, o.optInt("price", 0), rooms)
        }
    }
}

/**
 * Picking the house. [first] is the very first time: a friendly title, and no way back without picking.
 * Free templates can be picked any time; the others are bought with points.
 */
@Composable
fun LayoutPicker(first: Boolean, onDone: () -> Unit, onBack: (() -> Unit)?) {
    val ctx = androidx.compose.ui.platform.LocalContext.current
    val layouts = Layouts.all(ctx)
    Column(Modifier.fillMaxSize(), verticalArrangement = Arrangement.spacedBy(8.dp)) {
        if (onBack != null) TopBar(if (first) "הבית החדש שלי" else "להחליף בית", onBack)
        Text(
            if (first) Store.g("איזה בית את רוצה? 🏠 אפשר להחליף אחר כך, והחפצים עוברים איתך.", "איזה בית אתה רוצה? 🏠 אפשר להחליף אחר כך, והחפצים עוברים איתך.")
            else "החפצים והחברים עוברים איתך לבית החדש 🚚",
            fontSize = 16.sp, fontWeight = FontWeight.Bold, color = Ink,
        )
        LazyVerticalGrid(
            columns = GridCells.Fixed(2),
            horizontalArrangement = Arrangement.spacedBy(10.dp),
            verticalArrangement = Arrangement.spacedBy(10.dp),
            modifier = Modifier.weight(1f),
        ) {
            items(layouts) { l -> LayoutCard(l, onDone) }
            item(span = { GridItemSpan(maxLineSpan) }) { Text(" ") }
        }
    }
}

@Composable
fun LayoutCard(l: HouseLayout, onDone: () -> Unit) {
    val ctx = androidx.compose.ui.platform.LocalContext.current
    val owned = Store.ownsLayout(l)
    val current = Store.layoutChosen && Store.layout == l.id
    val canBuy = !owned && Store.points >= l.price
    Column(
        Modifier.fillMaxWidth().clip(RoundedCornerShape(20.dp)).background(Color.White)
            .border(if (current) 4.dp else 2.dp, if (current) Green else Purple.copy(alpha = 0.3f), RoundedCornerShape(20.dp))
            .padding(10.dp),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.spacedBy(4.dp),
    ) {
        VoxImage("vox_layout_${l.id}", l.he, Modifier.fillMaxWidth().aspectRatio(4f / 3f).clip(RoundedCornerShape(12.dp)))
        Text(l.he, fontSize = 17.sp, fontWeight = FontWeight.Bold, color = Ink)
        Text(l.about, fontSize = 13.sp, color = Purple, textAlign = TextAlign.Center)
        val label = when {
            current -> "✓ הבית שלי"
            owned -> if (l.price == 0) "לבחור 🏠" else "✓ שלך · לעבור"
            else -> "⭐ ${l.price}"
        }
        Text(
            label, fontSize = 16.sp, fontWeight = FontWeight.Bold,
            color = if (current) Green else if (owned || canBuy) Color.White else Ink,
            textAlign = TextAlign.Center,
            modifier = Modifier.fillMaxWidth().clip(RoundedCornerShape(14.dp))
                .background(if (current) Color.Transparent else if (owned) Purple else if (canBuy) Orange else Color(0xFFEDE7F6))
                .clickable(enabled = !current) {
                    if (owned) {
                        Store.setLayout(l.id)
                        onDone()
                    } else if (Store.buyLayout(l)) {
                        android.widget.Toast.makeText(ctx, "ברוכים הבאים ל${l.he}! 🎉", android.widget.Toast.LENGTH_SHORT).show()
                        onDone()
                    } else {
                        android.widget.Toast.makeText(ctx, Store.g("עוד קצת נקודות ותוכלי לקנות 💪", "עוד קצת נקודות ותוכל לקנות 💪"), android.widget.Toast.LENGTH_SHORT).show()
                    }
                }
                .padding(vertical = 8.dp),
        )
    }
}
