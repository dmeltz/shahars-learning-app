package com.shahar.words

import android.Manifest
import android.app.DatePickerDialog
import android.app.TimePickerDialog
import android.content.Intent
import android.os.Build
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.BackHandler
import androidx.activity.compose.rememberLauncherForActivityResult
import androidx.activity.compose.setContent
import androidx.activity.result.contract.ActivityResultContracts
import androidx.compose.foundation.background
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
import androidx.compose.foundation.layout.safeDrawingPadding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.LinearProgressIndicator
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.material3.TextButton
import androidx.compose.material3.lightColorScheme
import androidx.compose.runtime.Composable
import androidx.compose.runtime.CompositionLocalProvider
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.platform.LocalLayoutDirection
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.LayoutDirection
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import java.time.LocalDate

val Pink = Color(0xFFFF5C9A)
val Purple = Color(0xFF8E6CFF)
val Green = Color(0xFF2EC27E)
val Orange = Color(0xFFFF9F43)
val Blue = Color(0xFF3FA9F5)
val Red = Color(0xFFFF5A5F)
val Bg = Color(0xFFFFF4FA)
val Ink = Color(0xFF3A2A4D)

enum class Screen { Home, Practice, House, Shop, Words, Settings }

class MainActivity : ComponentActivity() {
    private var startPractice by mutableStateOf(false)

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        Store.init(this)
        Speaker.init(this)
        Reminder.schedule(this)
        WordsWidget.updateAll(this)
        startPractice = intent?.getBooleanExtra(EXTRA_PRACTICE, false) == true
        setContent {
            CompositionLocalProvider(LocalLayoutDirection provides LayoutDirection.Rtl) {
                MaterialTheme(colorScheme = lightColorScheme(primary = Purple, secondary = Pink)) {
                    App(startPractice) { startPractice = false }
                }
            }
        }
    }

    override fun onNewIntent(intent: Intent) {
        super.onNewIntent(intent)
        if (intent.getBooleanExtra(EXTRA_PRACTICE, false)) startPractice = true
    }

    override fun onDestroy() {
        if (isFinishing) Speaker.shutdown()
        super.onDestroy()
    }

    companion object {
        const val EXTRA_PRACTICE = "practice"
    }
}

@Composable
fun App(startPractice: Boolean, onStarted: () -> Unit) {
    var screen by rememberSaveable { mutableStateOf(Screen.Home) }
    LaunchedEffect(startPractice) {
        if (startPractice) {
            screen = Screen.Practice
            onStarted()
        }
    }
    BackHandler(enabled = screen != Screen.Home) { screen = Screen.Home }

    val permission = rememberLauncherForActivityResult(ActivityResultContracts.RequestPermission()) { }
    LaunchedEffect(Unit) {
        if (Build.VERSION.SDK_INT >= 33) permission.launch(Manifest.permission.POST_NOTIFICATIONS)
    }

    Box(Modifier.fillMaxSize().background(Bg).safeDrawingPadding()) {
        when (screen) {
            Screen.Home -> HomeScreen { screen = it }
            Screen.Practice -> PracticeScreen(onExit = { screen = Screen.Home }, onHouse = { screen = Screen.House })
            Screen.House -> HouseScreen(onBack = { screen = Screen.Home }, onShop = { screen = Screen.Shop })
            Screen.Shop -> ShopScreen(onBack = { screen = Screen.Home }, onHouse = { screen = Screen.House })
            Screen.Words -> WordsScreen { screen = Screen.Home }
            Screen.Settings -> SettingsScreen { screen = Screen.Home }
        }
    }
}

@Composable
fun BigButton(
    text: String,
    color: Color,
    modifier: Modifier = Modifier,
    enabled: Boolean = true,
    onClick: () -> Unit,
) {
    Button(
        onClick = onClick,
        enabled = enabled,
        modifier = modifier.fillMaxWidth().height(62.dp),
        shape = RoundedCornerShape(20.dp),
        colors = ButtonDefaults.buttonColors(containerColor = color),
    ) {
        Text(text, fontSize = 20.sp, fontWeight = FontWeight.Bold, color = Color.White, textAlign = TextAlign.Center)
    }
}

@Composable
fun TopBar(title: String, onBack: () -> Unit) {
    Row(Modifier.fillMaxWidth().padding(bottom = 8.dp), verticalAlignment = Alignment.CenterVertically) {
        TextButton(onClick = onBack) { Text("→ חזרה", fontSize = 18.sp) }
        Spacer(Modifier.weight(1f))
        Text(title, fontSize = 24.sp, fontWeight = FontWeight.Bold, color = Ink)
        Spacer(Modifier.weight(1f))
        Text("⭐ ${Store.points}", fontSize = 18.sp, fontWeight = FontWeight.Bold, color = Ink)
        Spacer(Modifier.width(8.dp))
    }
}

@Composable
fun StatBox(value: String, label: String, color: Color, modifier: Modifier = Modifier) {
    Column(
        modifier.clip(RoundedCornerShape(20.dp)).background(Color.White).padding(14.dp),
        horizontalAlignment = Alignment.CenterHorizontally,
    ) {
        Text(value, fontSize = 28.sp, fontWeight = FontWeight.Bold, color = color)
        Text(label, fontSize = 14.sp, color = Ink)
    }
}

@Composable
fun HomeScreen(go: (Screen) -> Unit) {
    val known = Store.knownCount()
    Column(
        Modifier.fillMaxSize().verticalScroll(rememberScrollState()).padding(20.dp),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.spacedBy(14.dp),
    ) {
        val ctx = LocalContext.current
        LaunchedEffect(Unit) { Updater.startCheck(ctx, quiet = true) }
        Text("היי שחר! 👋", fontSize = 32.sp, fontWeight = FontWeight.Bold, color = Ink)
        if (Updater.state is UpdateState.Available) {
            Text(
                "⬆️ יש גרסה חדשה לאפליקציה! לחצי כאן לעדכון",
                fontSize = 16.sp, fontWeight = FontWeight.Bold, color = Color.White, textAlign = TextAlign.Center,
                modifier = Modifier.fillMaxWidth().clip(RoundedCornerShape(16.dp)).background(Green)
                    .clickable { go(Screen.Settings) }.padding(12.dp),
            )
        }
        Box(
            Modifier.fillMaxWidth().clip(RoundedCornerShape(24.dp))
                .background(Brush.horizontalGradient(listOf(Pink, Purple)))
                .padding(22.dp),
            contentAlignment = Alignment.Center,
        ) {
            Text(Store.daysText(), fontSize = 30.sp, fontWeight = FontWeight.Bold, color = Color.White, textAlign = TextAlign.Center)
        }
        Row(Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.spacedBy(12.dp)) {
            StatBox("⭐ ${Store.points}", "נקודות", Orange, Modifier.weight(1f))
            StatBox("🔥 ${Store.streak}", "ימים ברצף", Red, Modifier.weight(1f))
        }
        Column(Modifier.fillMaxWidth()) {
            Text("את כבר יודעת $known מתוך ${WORDS.size} מילים", fontSize = 16.sp, color = Ink)
            Spacer(Modifier.height(6.dp))
            LinearProgressIndicator(
                progress = { known.toFloat() / WORDS.size },
                modifier = Modifier.fillMaxWidth().height(12.dp).clip(RoundedCornerShape(6.dp)),
                color = Green,
                trackColor = Color.White,
            )
        }
        Text(
            if (Store.practicedToday()) "כל הכבוד! כבר התאמנת היום 💪" else "עוד לא התאמנת היום. בואי נאסוף נקודות!",
            fontSize = 16.sp, color = Ink, textAlign = TextAlign.Center,
        )
        BigButton("בואי נתאמן! 🎯", Pink) { go(Screen.Practice) }
        Row(Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.spacedBy(12.dp)) {
            BigButton("הבית שלי 🏠", Purple, Modifier.weight(1f)) { go(Screen.House) }
            BigButton("חנות 🛍️", Orange, Modifier.weight(1f)) { go(Screen.Shop) }
        }
        Row(Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.spacedBy(12.dp)) {
            BigButton("כל המילים 📖", Blue, Modifier.weight(1f)) { go(Screen.Words) }
            BigButton("הגדרות ⚙️", Color(0xFF9A8FB0), Modifier.weight(1f)) { go(Screen.Settings) }
        }
    }
}

@Composable
fun WordsScreen(onBack: () -> Unit) {
    Column(Modifier.fillMaxSize().padding(16.dp)) {
        TopBar("כל המילים", onBack)
        Text("לחצי על מילה כדי לשמוע אותה. ★ = כמה טוב את יודעת", fontSize = 14.sp, color = Ink)
        Spacer(Modifier.height(8.dp))
        LazyColumn(verticalArrangement = Arrangement.spacedBy(6.dp)) {
            items(WORDS) { w ->
                val lvl = Store.level(w)
                Row(
                    Modifier.fillMaxWidth().clip(RoundedCornerShape(14.dp)).background(Color.White)
                        .padding(horizontal = 14.dp, vertical = 10.dp),
                    verticalAlignment = Alignment.CenterVertically,
                ) {
                    Text(w.he, fontSize = 17.sp, color = Ink, modifier = Modifier.weight(1f))
                    Text("★".repeat(lvl) + "☆".repeat(5 - lvl), color = Orange, fontSize = 14.sp)
                    Spacer(Modifier.width(10.dp))
                    TextButton(onClick = { Speaker.speak(w.en) }) {
                        Text("🔊 " + w.en, fontSize = 18.sp, fontWeight = FontWeight.Bold, color = Purple)
                    }
                }
            }
        }
    }
}

@Composable
fun SettingsScreen(onBack: () -> Unit) {
    val ctx = LocalContext.current
    val exam = LocalDate.ofEpochDay(Store.examDay)
    Column(
        Modifier.fillMaxSize().verticalScroll(rememberScrollState()).padding(16.dp),
        verticalArrangement = Arrangement.spacedBy(14.dp),
    ) {
        TopBar("הגדרות", onBack)
        Text("תאריך המבחן: ${exam.dayOfMonth}.${exam.monthValue}.${exam.year}", fontSize = 20.sp, color = Ink)
        BigButton("שינוי תאריך המבחן 📅", Blue) {
            DatePickerDialog(ctx, { _, y, m, d -> Store.setExam(LocalDate.of(y, m + 1, d)) },
                exam.year, exam.monthValue - 1, exam.dayOfMonth).show()
        }
        Spacer(Modifier.height(10.dp))
        Text(
            "תזכורת יומית בשעה %02d:%02d".format(Store.reminderHour, Store.reminderMinute),
            fontSize = 20.sp, color = Ink,
        )
        Text("התזכורת לא תופיע אם כבר התאמנת באותו יום.", fontSize = 14.sp, color = Ink)
        BigButton("שינוי שעת התזכורת ⏰", Purple) {
            TimePickerDialog(ctx, { _, h, m ->
                Store.setReminder(h, m)
                Reminder.schedule(ctx)
            }, Store.reminderHour, Store.reminderMinute, true).show()
        }
        Spacer(Modifier.height(10.dp))
        UpdateSection()
    }
}

@Composable
fun UpdateSection() {
    val ctx = LocalContext.current
    val st = Updater.state
    Text("עדכון האפליקציה", fontSize = 20.sp, fontWeight = FontWeight.Bold, color = Ink)
    Text("הגרסה שלך: ${Updater.currentBuild(ctx)}", fontSize = 16.sp, color = Ink)
    when (st) {
        is UpdateState.Idle, is UpdateState.UpToDate, is UpdateState.Failed -> {
            if (st is UpdateState.UpToDate) Text("יש לך את הגרסה הכי חדשה ✓", fontSize = 16.sp, color = Green)
            if (st is UpdateState.Failed) Text(st.message, fontSize = 16.sp, color = Red)
            BigButton("בדיקת עדכונים 🔄", Blue) { Updater.startCheck(ctx) }
        }
        is UpdateState.Checking -> Text("בודקת אם יש גרסה חדשה...", fontSize = 16.sp, color = Ink)
        is UpdateState.Available -> {
            Text("יש גרסה חדשה (${st.build})! 🎉", fontSize = 18.sp, fontWeight = FontWeight.Bold, color = Green)
            BigButton("הורדה והתקנה ⬇️", Green) { Updater.startInstall(ctx) }
        }
        is UpdateState.Downloading -> {
            Text("מורידה... ${st.percent}%", fontSize = 16.sp, color = Ink)
            LinearProgressIndicator(
                progress = { st.percent / 100f },
                modifier = Modifier.fillMaxWidth().height(10.dp).clip(RoundedCornerShape(5.dp)),
                color = Green,
                trackColor = Color.White,
            )
        }
        is UpdateState.NeedsPermission -> {
            Text(
                "כדי להתקין, צריך לאשר לאפליקציה להתקין עדכונים. במסך שייפתח מדליקים \"אפשר מהמקור הזה\" וחוזרים לכאן.",
                fontSize = 16.sp, color = Ink,
            )
            BigButton("למסך האישור", Purple) { Updater.openInstallPermission(ctx) }
            BigButton("אישרתי, להתקין", Green) {
                if (Updater.canInstall(ctx)) Updater.startInstall(ctx)
                else Updater.state = UpdateState.Failed(Updater.BLOCKED)
            }
        }
        is UpdateState.Installing -> {
            Text(
                "נפתח מסך ההתקנה. לוחצים \"עדכון\". אם ההתקנה נחסמה, אבא יכול לעדכן מהמחשב.",
                fontSize = 16.sp, color = Ink,
            )
            BigButton("בדיקת עדכונים שוב 🔄", Blue) { Updater.startCheck(ctx) }
        }
    }
}
