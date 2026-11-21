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
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material3.AlertDialog
import androidx.compose.material3.Button
import androidx.compose.material3.OutlinedTextField
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
import androidx.compose.runtime.remember
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.platform.LocalLayoutDirection
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.text.style.TextDirection
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

enum class Screen { Home, Practice, House, Shop, Words, Settings, Who, Pick, Phonics, Prep }

class MainActivity : ComponentActivity() {
    private var startPractice by mutableStateOf(false)

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        Store.init(this)
        Stats.init(this)
        Speaker.init(this)
        Reminder.schedule(this)
        WordsWidget.updateAll(this)
        Report.flush(this)
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

    override fun onStop() {
        // Leaving the app ends the round: queue its data and try to send it.
        Stats.close(finished = false)
        Report.flush(this)
        super.onStop()
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
    var screen by rememberSaveable { mutableStateOf(if (Store.profile == null) Screen.Who else if (Store.needsStarter) Screen.Pick else Screen.Home) }
    LaunchedEffect(startPractice) {
        if (startPractice && Store.profile != null && !Store.needsStarter) {
            screen = if (Store.prepFirst) Screen.Prep else Screen.Practice
            onStarted()
        }
    }
    // After a parent sets the device to a kid who hasn't picked a first friend yet.
    LaunchedEffect(Store.profile) {
        if (Store.profile != null && Store.needsStarter && screen != Screen.Pick) screen = Screen.Pick
        if (Store.locked && screen == Screen.Who) screen = Screen.Home
    }
    BackHandler(enabled = screen != Screen.Home && Store.profile != null && !Store.needsStarter) { screen = Screen.Home }

    val permission = rememberLauncherForActivityResult(ActivityResultContracts.RequestPermission()) { }
    LaunchedEffect(Unit) {
        if (Build.VERSION.SDK_INT >= 33) permission.launch(Manifest.permission.POST_NOTIFICATIONS)
    }

    if (Report.screen != screen.name) {
        Report.screen = screen.name
        Report.question = ""
        Stats.close(finished = false)
    }
    Box(Modifier.fillMaxSize().background(Bg).safeDrawingPadding()) {
        when (screen) {
            Screen.Home -> HomeScreen { screen = it }
            Screen.Practice -> PracticeScreen(onExit = { screen = Screen.Home }, onHouse = { screen = Screen.House })
            Screen.House -> HouseScreen(onBack = { screen = Screen.Home }, onShop = { screen = Screen.Shop })
            Screen.Shop -> ShopScreen(onBack = { screen = Screen.Home }, onHouse = { screen = Screen.House })
            Screen.Words -> WordsScreen { screen = Screen.Home }
            Screen.Settings -> SettingsScreen { screen = Screen.Home }
            Screen.Who -> WhoScreen { screen = if (Store.needsStarter) Screen.Pick else Screen.Home }
            Screen.Pick -> PickStarterScreen { screen = Screen.Home }
            Screen.Phonics -> PhonicsScreen(onExit = { screen = Screen.Home }, onHouse = { screen = Screen.House })
            Screen.Prep -> PrepScreen(onExit = { screen = Screen.Home }, onHouse = { screen = Screen.House })
        }
        if (Store.profile != null) ReportButton(Modifier.align(Alignment.BottomEnd).padding(10.dp))
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
        val greeter = remember { randomBuddy() }
        CompositionLocalProvider(LocalBuddy provides greeter) {
            BoniSays(
                if (Store.practicedToday()) "היי ${Store.name}! כל הכבוד, כבר התאמנו היום 💪" else "היי ${Store.name}! " + Store.g("בואי", "בוא") + " נתאמן ביחד ונאסוף נקודות לבית 💜",
                if (Store.practicedToday()) BoniMood.CHEER else BoniMood.HAPPY,
                size = 96.dp,
            )
        }
        if (Updater.state is UpdateState.Available) {
            Text(
                "⬆️ יש גרסה חדשה לאפליקציה! " + Store.g("לחצי", "לחץ") + " כאן לעדכון",
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
        if (Store.isTomer) {
            BigButton("🧠 הכנה למבחן המחוננים", Color(0xFF3F7CF5)) { go(Screen.Prep) }
        }
        if (Store.prepFirst) {
            Text(if (Store.englishLockedOff) "עכשיו מתאמנים למבחן המחוננים! 🧠" else "האנגלית בהפסקה עד אחרי המבחן. עכשיו מתאמנים למבחן! 🧠", fontSize = 15.sp, color = Ink, textAlign = TextAlign.Center)
        } else Column(Modifier.fillMaxWidth()) {
            Text(Store.g("את כבר יודעת", "אתה כבר יודע") + " $known מתוך ${Store.words.size} מילים", fontSize = 16.sp, color = Ink)
            Spacer(Modifier.height(6.dp))
            LinearProgressIndicator(
                progress = { known.toFloat() / Store.words.size },
                modifier = Modifier.fillMaxWidth().height(12.dp).clip(RoundedCornerShape(6.dp)),
                color = Green,
                trackColor = Color.White,
            )
        }
        if (!Store.prepFirst) {
            BigButton(Store.g("בואי נתאמן! 🎯", "בוא נתאמן! 🎯"), Pink) { go(Screen.Practice) }
            BigButton("צלילים וקריאה 🔤", Green) { go(Screen.Phonics) }
        }
        Row(Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.spacedBy(12.dp)) {
            BigButton("הבית שלי 🏠", Purple, Modifier.weight(1f)) { go(Screen.House) }
            BigButton("חנות 🛍️", Orange, Modifier.weight(1f)) { go(Screen.Shop) }
        }
        Row(Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.spacedBy(12.dp)) {
            if (!Store.prepFirst) BigButton("כל המילים 📖", Blue, Modifier.weight(1f)) { go(Screen.Words) }
            BigButton("הגדרות ⚙️", Color(0xFF9A8FB0), Modifier.weight(1f)) { go(Screen.Settings) }
        }
        if (!Store.locked) TextButton(onClick = { go(Screen.Who) }) {
            Text("👤 לא ${Store.name}? החלפת שחקן", fontSize = 16.sp, color = Ink)
        }
    }
}

@Composable
fun WordsScreen(onBack: () -> Unit) {
    Column(Modifier.fillMaxSize().padding(16.dp)) {
        TopBar("כל המילים", onBack)
        Text(Store.g("לחצי על מילה כדי לשמוע אותה. ★ = כמה טוב את יודעת", "לחץ על מילה כדי לשמוע אותה. ★ = כמה טוב אתה יודע"), fontSize = 14.sp, color = Ink)
        Spacer(Modifier.height(8.dp))
        LazyColumn(verticalArrangement = Arrangement.spacedBy(6.dp)) {
            items(Store.words) { w ->
                val lvl = Store.level(w)
                Row(
                    Modifier.fillMaxWidth().clip(RoundedCornerShape(14.dp)).background(Color.White)
                        .padding(horizontal = 14.dp, vertical = 10.dp),
                    verticalAlignment = Alignment.CenterVertically,
                ) {
                    Text((if (w.emoji.isNotEmpty()) w.emoji + "  " else "") + w.he, fontSize = 17.sp, color = Ink, modifier = Modifier.weight(1f))
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
    val exam = if (Store.hasExam) LocalDate.ofEpochDay(Store.examDay) else LocalDate.now().plusMonths(1)
    Column(
        Modifier.fillMaxSize().verticalScroll(rememberScrollState()).padding(16.dp),
        verticalArrangement = Arrangement.spacedBy(14.dp),
    ) {
        TopBar("הגדרות", onBack)
        Text("שחקן: ${Store.name}", fontSize = 20.sp, color = Ink)
        if (Store.hasExam) {
            Text("תאריך המבחן: ${exam.dayOfMonth}.${exam.monthValue}.${exam.year}", fontSize = 20.sp, color = Ink)
        } else {
            Text("אין מבחן מתוכנן, אז לא מוצגת ספירה לאחור.", fontSize = 18.sp, color = Ink)
        }
        BigButton(if (Store.hasExam) "שינוי תאריך המבחן 📅" else "הוספת תאריך מבחן 📅", Blue) {
            DatePickerDialog(ctx, { _, y, m, d -> Store.setExam(LocalDate.of(y, m + 1, d)) },
                exam.year, exam.monthValue - 1, exam.dayOfMonth).show()
        }
        if (Store.hasExam && Store.isTomer) {
            TextButton(onClick = { Store.setExam(null) }) { Text("בלי מבחן (להסתיר את הספירה לאחור)", fontSize = 16.sp) }
        }
        Spacer(Modifier.height(10.dp))
        DeviceSettings()
        if (Store.isTomer && !Store.englishLockedOff) {
            Spacer(Modifier.height(10.dp))
            GiftedSettings()
        }
        Spacer(Modifier.height(10.dp))
        Text(
            "תזכורת יומית בשעה %02d:%02d".format(Store.reminderHour, Store.reminderMinute),
            fontSize = 20.sp, color = Ink,
        )
        Text(Store.g("התזכורת לא תופיע אם כבר התאמנת באותו יום.", "התזכורת לא תופיע אם כבר התאמנת באותו יום."), fontSize = 14.sp, color = Ink)
        BigButton("שינוי שעת התזכורת ⏰", Purple) {
            TimePickerDialog(ctx, { _, h, m ->
                Store.setReminder(h, m)
                Reminder.schedule(ctx)
            }, Store.reminderHour, Store.reminderMinute, true).show()
        }
        Spacer(Modifier.height(10.dp))
        UpdateSection()
        Spacer(Modifier.height(10.dp))
        ReportSettings()
        Spacer(Modifier.height(60.dp))
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
        is UpdateState.Checking -> Text("בודקים אם יש גרסה חדשה...", fontSize = 16.sp, color = Ink)
        is UpdateState.Available -> {
            Text("יש גרסה חדשה (${st.build})! 🎉", fontSize = 18.sp, fontWeight = FontWeight.Bold, color = Green)
            BigButton("הורדה והתקנה ⬇️", Green) { Updater.startInstall(ctx) }
        }
        is UpdateState.Downloading -> {
            Text("מורידים... ${st.percent}%", fontSize = 16.sp, color = Ink)
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

/** "Who's playing?" Each kid has their own points, house, friends and word list. */
@Composable
fun WhoScreen(onPicked: () -> Unit) {
    val ctx = LocalContext.current
    Column(
        Modifier.fillMaxSize().verticalScroll(rememberScrollState()).padding(20.dp),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.spacedBy(18.dp),
    ) {
        Spacer(Modifier.height(10.dp))
        Row { (BUDDIES.take(2) + TOMER_BUDDIES.take(2)).forEach { Boni(BoniMood.HAPPY, 70.dp, bounce = true, buddy = it) } }
        Text("מי משחק?", fontSize = 34.sp, fontWeight = FontWeight.Bold, color = Ink)
        listOf(
            Triple(SHAHAR, "שחר 🌸", Pink),
            Triple(TOMER, "תומר 🚀", Blue),
        ).forEach { (id, label, color) ->
            Column(
                Modifier.fillMaxWidth().clip(RoundedCornerShape(28.dp)).background(color)
                    .clickable {
                        Store.choose(id)
                        Reminder.schedule(ctx)
                        onPicked()
                    }
                    .padding(vertical = 28.dp),
                horizontalAlignment = Alignment.CenterHorizontally,
            ) {
                Text(label, fontSize = 34.sp, fontWeight = FontWeight.Bold, color = Color.White)
                if (Store.profile == id) Text("(משחק עכשיו)", fontSize = 15.sp, color = Color.White)
            }
        }
        Text("לכל אחד יש נקודות, בית וחברים משלו.", fontSize = 16.sp, color = Ink, textAlign = TextAlign.Center)
    }
}

/** First visit: the kid chooses their first friend, who lives in the house for free. */
@Composable
fun PickStarterScreen(onPicked: () -> Unit) {
    Column(
        Modifier.fillMaxSize().verticalScroll(rememberScrollState()).padding(20.dp),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.spacedBy(14.dp),
    ) {
        Text("היי ${Store.name}! 👋", fontSize = 32.sp, fontWeight = FontWeight.Bold, color = Ink)
        Text(
            Store.g("בחרי את החברה הראשונה שלך. היא תגור איתך בבית ותעודד אותך בתרגול!",
                "בחר את החבר הראשון שלך. הוא יגור איתך בבית ויעודד אותך בתרגול!"),
            fontSize = 18.sp, color = Ink, textAlign = TextAlign.Center,
        )
        buddyList().chunked(2).forEach { pair ->
            Row(Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.spacedBy(12.dp)) {
                pair.forEach { b ->
                    Column(
                        Modifier.weight(1f).clip(RoundedCornerShape(24.dp)).background(Color.White)
                            .clickable {
                                Store.pickStarter(b)
                                onPicked()
                            }
                            .padding(vertical = 14.dp),
                        horizontalAlignment = Alignment.CenterHorizontally,
                    ) {
                        Boni(BoniMood.HAPPY, 110.dp, bounce = true, buddy = b)
                        Text(b.he, fontSize = 24.sp, fontWeight = FontWeight.Bold, color = Purple)
                        Text(b.about, fontSize = 14.sp, color = Ink)
                    }
                }
            }
        }
        Text("את השאר אפשר לקנות אחר כך בחנות עם נקודות ⭐", fontSize = 15.sp, color = Ink, textAlign = TextAlign.Center)
    }
}

/** Parent-only: whose device this is. Once set, the kid can't switch player or turn on the other track. */
@Composable
fun DeviceSettings() {
    val ctx = LocalContext.current
    var asking by remember { mutableStateOf(false) }
    var choosing by remember { mutableStateOf(false) }
    Text("הגדרת המכשיר (להורים) 🔒", fontSize = 20.sp, fontWeight = FontWeight.Bold, color = Ink)
    Text(
        when (Store.deviceLock) {
            SHAHAR -> "זה המכשיר של שחר: רק הכנה למבחן באנגלית. אי אפשר להחליף שחקן."
            TOMER -> "זה המכשיר של תומר: רק הכנה למבחן המחוננים. אנגלית לא זמינה כרגע. אי אפשר להחליף שחקן."
            else -> "מכשיר משותף: אפשר להחליף בין שחר לתומר."
        },
        fontSize = 16.sp, color = Ink,
    )
    BigButton("שינוי הגדרת המכשיר", Color(0xFF6B5B95)) { asking = true }
    if (asking) {
        ParentGate(onDismiss = { asking = false }) {
            asking = false
            choosing = true
        }
    }
    if (choosing) {
        AlertDialog(
            onDismissRequest = { choosing = false },
            title = { Text("של מי המכשיר הזה?", fontWeight = FontWeight.Bold) },
            text = {
                Column(verticalArrangement = Arrangement.spacedBy(10.dp)) {
                    Text("הנקודות, הבית והחברים של כל ילד נשמרים בכל מקרה.", fontSize = 15.sp)
                    listOf(
                        Triple(SHAHAR, "המכשיר של שחר 🌸\nרק אנגלית", Pink),
                        Triple(TOMER, "המכשיר של תומר 🚀\nרק מבחן המחוננים", Blue),
                        Triple(null, "מכשיר משותף\nאפשר להחליף שחקן", Color(0xFF9A8FB0)),
                    ).forEach { (p, label, color) ->
                        Button(
                            onClick = {
                                choosing = false
                                Store.lockDevice(p)
                                Reminder.schedule(ctx)
                            },
                            modifier = Modifier.fillMaxWidth(),
                            shape = RoundedCornerShape(16.dp),
                            colors = ButtonDefaults.buttonColors(containerColor = color),
                        ) {
                            Text(
                                (if (Store.deviceLock == p) "✓ " else "") + label,
                                fontSize = 17.sp, fontWeight = FontWeight.Bold, color = Color.White, textAlign = TextAlign.Center,
                            )
                        }
                    }
                }
            },
            confirmButton = {},
            dismissButton = { TextButton(onClick = { choosing = false }) { Text("ביטול") } },
        )
    }
}

/** Parent-only switch: pause Tomer's English so the app focuses on the gifted test. */
@Composable
fun GiftedSettings() {
    var asking by remember { mutableStateOf(false) }
    Text("מבחן המחוננים 🧠", fontSize = 20.sp, fontWeight = FontWeight.Bold, color = Ink)
    Text(
        if (Store.englishPaused) "האנגלית בהפסקה. במסך הבית רואים רק את ההכנה למבחן, והווידג'ט והתזכורת פותחים אותה."
        else "האנגלית פעילה. ההכנה למבחן נמצאת בכפתור \"הכנה למבחן המחוננים\" במסך הבית.",
        fontSize = 16.sp, color = Ink,
    )
    BigButton(if (Store.englishPaused) "להחזיר את האנגלית ▶️" else "לעצור את האנגלית עד המבחן ⏸️", Color(0xFF3F7CF5)) { asking = true }
    if (asking) {
        ParentGate(onDismiss = { asking = false }) {
            asking = false
            Store.changeEnglishPause(!Store.englishPaused)
        }
    }
}

/** A sum only a grown-up solves quickly, so the kids can't flip parent settings. */
@Composable
fun ParentGate(onDismiss: () -> Unit, onPass: () -> Unit) {
    val a = remember { (23..49).random() }
    val b = remember { (6..9).random() }
    var text by remember { mutableStateOf("") }
    var wrong by remember { mutableStateOf(false) }
    AlertDialog(
        onDismissRequest = onDismiss,
        title = { Text("רק להורים 🔒", fontWeight = FontWeight.Bold) },
        text = {
            Column(verticalArrangement = Arrangement.spacedBy(10.dp)) {
                Text("כדי להמשיך, כמה זה:", fontSize = 16.sp)
                Text("$a × $b", fontSize = 28.sp, fontWeight = FontWeight.Bold, style = TextStyle(textDirection = TextDirection.Ltr))
                OutlinedTextField(
                    value = text,
                    onValueChange = { text = it.filter { c -> c.isDigit() }.take(4); wrong = false },
                    singleLine = true,
                    keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Number),
                )
                if (wrong) Text("לא נכון, נסו שוב", color = Red, fontSize = 15.sp)
            }
        },
        confirmButton = {
            TextButton(onClick = { if (text.toIntOrNull() == a * b) onPass() else wrong = true }) { Text("אישור") }
        },
        dismissButton = { TextButton(onClick = onDismiss) { Text("ביטול") } },
    )
}
