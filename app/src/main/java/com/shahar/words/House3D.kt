package com.shahar.words

import android.annotation.SuppressLint
import android.os.Handler
import android.os.Looper
import android.webkit.JavascriptInterface
import android.webkit.WebResourceRequest
import android.webkit.WebView
import android.webkit.WebViewClient
import android.util.Log
import android.webkit.ConsoleMessage
import android.webkit.WebChromeClient
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Text
import androidx.compose.ui.Alignment
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import kotlinx.coroutines.delay
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.runtime.snapshotFlow
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.toArgb
import androidx.compose.ui.viewinterop.AndroidView
import org.json.JSONArray
import org.json.JSONObject
import java.time.LocalTime

private const val HOUSE_PAGE = "file:///android_asset/house/index.html"

/**
 * The 3D block house. It is drawn by a small web page bundled inside the app (assets/house),
 * which only ever talks to this screen. All the data (points, items, friends) stays in [Store].
 */
@SuppressLint("SetJavaScriptEnabled")
@Composable
fun House3D(modifier: Modifier, buddyRooms: Map<String, Int>) {
    var ready by remember { mutableStateOf(false) }
    var web by remember { mutableStateOf<WebView?>(null) }
    var error by remember { mutableStateOf<String?>(null) }
    val asleep = remember { LocalTime.now().hour.let { it >= 21 || it < 7 } }

    Box(modifier) {
    AndroidView(
        modifier = Modifier.fillMaxSize(),
        factory = { ctx ->
            WebView(ctx).apply {
                settings.javaScriptEnabled = true
                settings.allowFileAccess = true
                settings.allowContentAccess = false
                settings.domStorageEnabled = true
                setBackgroundColor(android.graphics.Color.rgb(191, 230, 255))
                isVerticalScrollBarEnabled = false
                isHorizontalScrollBarEnabled = false
                // Only the house page itself is ever shown here.
                webViewClient = object : WebViewClient() {
                    override fun shouldOverrideUrlLoading(view: WebView, request: WebResourceRequest): Boolean =
                        !request.url.toString().startsWith(HOUSE_PAGE)
                }
                webChromeClient = object : WebChromeClient() {
                    override fun onConsoleMessage(m: ConsoleMessage): Boolean {
                        Log.i("House3D", "${m.messageLevel()} ${m.message()} (${m.lineNumber()})")
                        return true
                    }
                }
                val main = Handler(Looper.getMainLooper())
                val view = this
                addJavascriptInterface(
                    HouseBridge(
                        main = main,
                        onReady = { ready = true },
                        onError = { error = it },
                        say = { id, line ->
                            view.evaluateJavascript("window.house && house.say(${JSONObject.quote(id)}, ${JSONObject.quote(line)})", null)
                        },
                    ),
                    "Android",
                )
                loadUrl(HOUSE_PAGE)
                web = this
            }
        },
        onRelease = { it.destroy() },
    )
    // If the page could not start, say so (with the reason) instead of showing an empty window.
    LaunchedEffect(Unit) {
        delay(8000)
        if (!ready && error == null) error = "timeout"
    }
    error?.let {
        Text(
            "הבית לא נטען 😕\n$it",
            fontSize = 15.sp, color = Ink, fontWeight = FontWeight.Bold, textAlign = TextAlign.Center,
            modifier = Modifier.align(Alignment.Center).background(Color.White).padding(12.dp),
        )
    }
    }

    // Every time something in the house changes, send the new picture of it to the page.
    LaunchedEffect(ready, web) {
        val w = web ?: return@LaunchedEffect
        if (!ready) return@LaunchedEffect
        snapshotFlow { houseJson(buddyRooms, asleep) }.collect { json ->
            w.evaluateJavascript("window.house && house.setState(${JSONObject.quote(json)})", null)
        }
    }
}

private fun hex(c: Color): String = String.format("#%06X", c.toArgb() and 0xFFFFFF)

private fun houseJson(buddyRooms: Map<String, Int>, asleep: Boolean): String {
    val o = JSONObject()
    o.put("room", Store.room)
    val walls = JSONArray()
    for (i in ROOMS.indices) {
        val w = WALLS.firstOrNull { it.id == Store.roomWalls[i] } ?: WALLS[0]
        walls.put(hex(w.color))
    }
    o.put("walls", walls)
    o.put("asleep", asleep)
    o.put("sleepLine", Store.g("זזז... כולם ישנים. לחצי על מישהו כדי להעיר", "זזז... כולם ישנים. לחץ על מישהו כדי להעיר"))
    val items = JSONArray()
    SHOP.forEach { item ->
        val p = Store.items[item.id] ?: return@forEach
        val it = JSONObject()
            .put("id", item.id)
            .put("room", p.room)
            .put("x", p.x.toDouble())
            .put("y", p.y.toDouble())
            .put("rot", p.rot)
            .put("inRoom", p.inRoom)
        if (!p.gx.isNaN() && !p.gz.isNaN()) it.put("gx", p.gx.toDouble()).put("gz", p.gz.toDouble())
        items.put(it)
    }
    o.put("items", items)
    val buddies = JSONArray()
    ownedBuddies().forEach { b ->
        val main = b.id == Store.starter
        buddies.put(JSONObject().put("id", b.id).put("main", main).put("room", if (main) Store.room else buddyRooms[b.id] ?: Store.room))
    }
    o.put("buddies", buddies)
    return o.toString()
}

/** What the house page can call. A plain public class, so the WebView can always reach its methods. */
class HouseBridge(
    private val main: Handler,
    private val onReady: () -> Unit,
    private val onError: (String) -> Unit,
    private val say: (String, String) -> Unit,
) {
    @JavascriptInterface
    fun onReady() {
        main.post { onReady.invoke() }
    }

    @JavascriptInterface
    fun onError(msg: String) {
        main.post { onError.invoke(msg) }
    }

    @JavascriptInterface
    fun onMoved(id: String, gx: Double, gz: Double, rot: Int, room: Int) {
        main.post { Store.move3d(id, gx.toFloat(), gz.toFloat(), rot, room) }
    }

    @JavascriptInterface
    fun onStore(id: String) {
        main.post { Store.place(id, false) }
    }

    @JavascriptInterface
    fun onFocus(room: Int) {
        main.post { Store.goToRoom(room) }
    }

    @JavascriptInterface
    fun onTapBuddy(id: String) {
        main.post {
            val b = ALL_BUDDIES.firstOrNull { it.id == id } ?: return@post
            say(id, "${b.he}: " + boniLines().random())
        }
    }
}
