package com.shahar.words

import android.app.DatePickerDialog
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.foundation.verticalScroll
import androidx.compose.material3.AlertDialog
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Text
import androidx.compose.material3.TextButton
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.text.input.PasswordVisualTransformation
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import java.time.LocalDate

/** The parent area (entered from Settings). Unlocked only after the password or the sum, until you leave it. */
object ParentArea {
    const val PASSWORD = "meltz1"
    var unlocked by mutableStateOf(false)
}

/** Lock in front of the parent area: the password, or (if a parent chose it) a sum only a grown-up solves quickly. */
@Composable
fun ParentAreaGate(onDismiss: () -> Unit, onPass: () -> Unit) {
    if (Store.parentGateMath) {
        ParentGate(onDismiss, onPass)
        return
    }
    var text by remember { mutableStateOf("") }
    var wrong by remember { mutableStateOf(false) }
    // Phone keyboards often start with a capital letter or add a space: ignore both.
    val ok = { text.trim().equals(ParentArea.PASSWORD, ignoreCase = true) }
    AlertDialog(
        onDismissRequest = onDismiss,
        title = { Text("אזור הורים 🔒", fontWeight = FontWeight.Bold) },
        text = {
            Column(verticalArrangement = Arrangement.spacedBy(10.dp)) {
                Text("כדי להיכנס, הקלידו את הסיסמה:", fontSize = 16.sp)
                OutlinedTextField(
                    value = text,
                    onValueChange = { text = it.take(30); wrong = false },
                    singleLine = true,
                    visualTransformation = PasswordVisualTransformation(),
                    keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Password),
                )
                if (wrong) Text("סיסמה לא נכונה", color = Red, fontSize = 15.sp)
            }
        },
        confirmButton = { TextButton(onClick = { if (ok()) onPass() else wrong = true }) { Text("כניסה") } },
        dismissButton = { TextButton(onClick = onDismiss) { Text("ביטול") } },
    )
}

@Composable
fun ParentScreen(onBack: () -> Unit) {
    Column(
        Modifier.fillMaxSize().verticalScroll(rememberScrollState()).padding(16.dp),
        verticalArrangement = Arrangement.spacedBy(14.dp),
    ) {
        TopBar("אזור הורים", onBack)
        AddPointsSection()
        Spacer(Modifier.height(10.dp))
        ExamSettings()
        Spacer(Modifier.height(10.dp))
        DeviceSettings()
        if (Store.isTomer && !Store.englishLockedOff) {
            Spacer(Modifier.height(10.dp))
            GiftedSettings()
        }
        Spacer(Modifier.height(10.dp))
        SyncSettings()
        Spacer(Modifier.height(10.dp))
        ReportSettings()
        Spacer(Modifier.height(10.dp))
        ProtectionSettings()
        Spacer(Modifier.height(60.dp))
    }
}

/** Parent gives a kid bonus points (synced to the kid's other devices). */
@Composable
fun AddPointsSection() {
    var kid by remember { mutableStateOf(Store.profile ?: SHAHAR) }
    var amount by remember { mutableStateOf("") }
    var confirm by remember { mutableStateOf(0) }
    var status by remember { mutableStateOf("") }
    var busy by remember { mutableStateOf(false) }
    val kidName = if (kid == TOMER) "תומר" else "שחר"
    Text("הוספת נקודות ⭐", fontSize = 20.sp, fontWeight = FontWeight.Bold, color = Ink)
    // A locked kid's device only shows that kid.
    val kids = Store.deviceLock?.let { listOf(it) } ?: listOf(SHAHAR, TOMER)
    Row(Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.spacedBy(10.dp)) {
        kids.forEach { p ->
            val sel = p == kid
            Button(
                onClick = { kid = p; status = "" },
                modifier = Modifier.weight(1f),
                shape = RoundedCornerShape(16.dp),
                colors = ButtonDefaults.buttonColors(
                    containerColor = if (p == TOMER) Blue.copy(alpha = if (sel) 1f else 0.35f) else Pink.copy(alpha = if (sel) 1f else 0.35f),
                ),
            ) {
                Text((if (sel) "✓ " else "") + (if (p == TOMER) "תומר 🚀" else "שחר 🌸"), fontSize = 18.sp, fontWeight = FontWeight.Bold, color = Color.White)
            }
        }
    }
    Text("ל$kidName יש עכשיו ${Store.pointsOf(kid)} נקודות.", fontSize = 16.sp, color = Ink)
    Row(Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.spacedBy(8.dp)) {
        listOf(10, 50, 100, 500).forEach { n ->
            Button(
                onClick = { confirm = n },
                enabled = !busy,
                modifier = Modifier.weight(1f),
                shape = RoundedCornerShape(14.dp),
                colors = ButtonDefaults.buttonColors(containerColor = Orange),
            ) { Text("+$n", fontSize = 17.sp, fontWeight = FontWeight.Bold, color = Color.White) }
        }
    }
    Row(Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.spacedBy(8.dp)) {
        OutlinedTextField(
            value = amount,
            onValueChange = { amount = it.filter { c -> c.isDigit() }.take(5) },
            singleLine = true,
            label = { Text("כמות אחרת") },
            keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Number),
            modifier = Modifier.weight(1f),
        )
        Button(
            onClick = { amount.toIntOrNull()?.takeIf { it > 0 }?.let { confirm = it } },
            enabled = !busy && (amount.toIntOrNull() ?: 0) > 0,
            shape = RoundedCornerShape(14.dp),
            colors = ButtonDefaults.buttonColors(containerColor = Green),
            modifier = Modifier.padding(top = 8.dp),
        ) { Text("הוספה", fontSize = 17.sp, fontWeight = FontWeight.Bold, color = Color.White) }
    }
    if (busy) Text("מוסיפים ומסנכרנים...", fontSize = 15.sp, color = Ink)
    if (status.isNotEmpty()) Text(status, fontSize = 15.sp, color = Green)
    if (confirm > 0) {
        val n = confirm
        AlertDialog(
            onDismissRequest = { confirm = 0 },
            title = { Text("להוסיף $n נקודות ל$kidName?", fontWeight = FontWeight.Bold) },
            text = { Text("הנקודות יופיעו גם במכשירים האחרים של $kidName (אם הסנכרון מופעל).", fontSize = 15.sp) },
            confirmButton = {
                TextButton(onClick = {
                    confirm = 0
                    busy = true
                    status = ""
                    val p = kid
                    Sync.addPoints(p, n) { s ->
                        busy = false
                        amount = ""
                        status = "$n נקודות ל${if (p == TOMER) "תומר" else "שחר"}: $s"
                    }
                }) { Text("כן, להוסיף") }
            },
            dismissButton = { TextButton(onClick = { confirm = 0 }) { Text("ביטול") } },
        )
    }
}

/** The countdown date of the kid on screen. */
@Composable
fun ExamSettings() {
    val ctx = LocalContext.current
    val exam = if (Store.hasExam) LocalDate.ofEpochDay(Store.examDay) else LocalDate.now().plusMonths(1)
    Text("תאריך המבחן של ${Store.name} 📅", fontSize = 20.sp, fontWeight = FontWeight.Bold, color = Ink)
    Text(
        if (Store.hasExam) "${exam.dayOfMonth}.${exam.monthValue}.${exam.year}" else "אין מבחן מתוכנן (לא מוצגת ספירה לאחור).",
        fontSize = 17.sp, color = Ink,
    )
    BigButton(if (Store.hasExam) "שינוי תאריך המבחן 📅" else "הוספת תאריך מבחן 📅", Blue) {
        DatePickerDialog(ctx, { _, y, m, d -> Store.setExam(LocalDate.of(y, m + 1, d)) },
            exam.year, exam.monthValue - 1, exam.dayOfMonth).show()
    }
    if (Store.hasExam && Store.isTomer) {
        TextButton(onClick = { Store.setExam(null) }) { Text("בלי מבחן (להסתיר את הספירה לאחור)", fontSize = 16.sp) }
    }
}

/** How the parent area is locked on this device. */
@Composable
fun ProtectionSettings() {
    Text("נעילת אזור ההורים 🔐", fontSize = 20.sp, fontWeight = FontWeight.Bold, color = Ink)
    Text(
        if (Store.parentGateMath) "עכשיו: תרגיל חשבון (כפל של מספר דו-ספרתי בחד-ספרתי)."
        else "עכשיו: סיסמה.",
        fontSize = 16.sp, color = Ink,
    )
    Text(
        "תרגיל חשבון נוח יותר להורים, אבל ילד שיודע לפתור כפל יוכל להיכנס.",
        fontSize = 14.sp, color = Ink, textAlign = TextAlign.Start,
    )
    BigButton(
        if (Store.parentGateMath) "לחזור לנעילה בסיסמה 🔑" else "להחליף לתרגיל חשבון במקום סיסמה ✖️",
        Color(0xFF6B5B95),
    ) { Store.chooseParentGateMath(!Store.parentGateMath) }
}
