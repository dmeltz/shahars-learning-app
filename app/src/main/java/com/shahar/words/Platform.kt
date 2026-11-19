package com.shahar.words

import android.Manifest
import android.app.NotificationChannel
import android.app.NotificationManager
import android.app.PendingIntent
import android.appwidget.AppWidgetManager
import android.appwidget.AppWidgetProvider
import android.content.ComponentName
import android.content.Context
import android.content.Intent
import android.content.pm.PackageManager
import android.os.Build
import android.speech.tts.TextToSpeech
import android.widget.RemoteViews
import androidx.core.app.NotificationCompat
import androidx.core.content.ContextCompat
import androidx.work.ExistingPeriodicWorkPolicy
import androidx.work.PeriodicWorkRequestBuilder
import androidx.work.WorkManager
import androidx.work.Worker
import androidx.work.WorkerParameters
import java.time.Duration
import java.time.LocalDateTime
import java.util.Locale
import java.util.concurrent.TimeUnit

/** Reads English words out loud. */
object Speaker {
    private var tts: TextToSpeech? = null
    private var ready = false

    fun init(ctx: Context) {
        if (tts != null) return
        tts = TextToSpeech(ctx.applicationContext) { status ->
            if (status == TextToSpeech.SUCCESS) {
                tts?.setLanguage(Locale.US)
                tts?.setSpeechRate(0.85f)
                ready = true
            }
        }
    }

    fun speak(text: String) {
        if (ready) tts?.speak(text, TextToSpeech.QUEUE_FLUSH, null, "word")
    }

    fun shutdown() {
        tts?.shutdown()
        tts = null
        ready = false
    }
}

fun practiceIntent(ctx: Context): PendingIntent {
    val intent = Intent(ctx, MainActivity::class.java)
        .putExtra(MainActivity.EXTRA_PRACTICE, true)
        .addFlags(Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_ACTIVITY_CLEAR_TOP)
    return PendingIntent.getActivity(
        ctx, 1, intent, PendingIntent.FLAG_IMMUTABLE or PendingIntent.FLAG_UPDATE_CURRENT
    )
}

/** Daily reminder to practise. */
object Reminder {
    private const val CHANNEL = "practice"

    fun schedule(ctx: Context) {
        Store.init(ctx)
        val now = LocalDateTime.now()
        var next = now.toLocalDate().atTime(Store.reminderHour, Store.reminderMinute)
        if (!next.isAfter(now)) next = next.plusDays(1)
        val delay = Duration.between(now, next).toMinutes()
        val req = PeriodicWorkRequestBuilder<ReminderWorker>(1, TimeUnit.DAYS)
            .setInitialDelay(delay, TimeUnit.MINUTES)
            .build()
        WorkManager.getInstance(ctx).enqueueUniquePeriodicWork(
            "daily-reminder", ExistingPeriodicWorkPolicy.CANCEL_AND_REENQUEUE, req
        )
    }

    fun show(ctx: Context) {
        if (Build.VERSION.SDK_INT >= 33 &&
            ContextCompat.checkSelfPermission(ctx, Manifest.permission.POST_NOTIFICATIONS) !=
            PackageManager.PERMISSION_GRANTED
        ) return
        val nm = ctx.getSystemService(NotificationManager::class.java) ?: return
        nm.createNotificationChannel(
            NotificationChannel(CHANNEL, "תזכורת לתרגול", NotificationManager.IMPORTANCE_DEFAULT)
        )
        val n = NotificationCompat.Builder(ctx, CHANNEL)
            .setSmallIcon(R.drawable.ic_star)
            .setContentTitle(Store.daysText())
            .setContentText("בואי לתרגל כמה מילים ולאסוף נקודות ⭐")
            .setContentIntent(practiceIntent(ctx))
            .setAutoCancel(true)
            .build()
        nm.notify(1, n)
    }
}

class ReminderWorker(ctx: Context, params: WorkerParameters) : Worker(ctx, params) {
    override fun doWork(): Result {
        Store.init(applicationContext)
        WordsWidget.updateAll(applicationContext)
        if (!Store.practicedToday() && Store.daysUntilExam() >= 0) {
            Reminder.show(applicationContext)
        }
        return Result.success()
    }
}

/** Home-screen widget: days left, points, and a tap to practise. */
class WordsWidget : AppWidgetProvider() {
    override fun onUpdate(context: Context, appWidgetManager: AppWidgetManager, appWidgetIds: IntArray) {
        val views = views(context)
        appWidgetIds.forEach { appWidgetManager.updateAppWidget(it, views) }
    }

    companion object {
        fun views(ctx: Context): RemoteViews {
            Store.init(ctx)
            val v = RemoteViews(ctx.packageName, R.layout.widget)
            val d = Store.daysUntilExam()
            val (num, label) = when {
                d < 0 -> "🎉" to "המבחן עבר!"
                d == 0L -> "🍀" to "המבחן היום!"
                d == 1L -> "1" to "יום למבחן"
                else -> "$d" to "ימים למבחן"
            }
            v.setTextViewText(R.id.w_num, num)
            v.setTextViewText(R.id.w_label, label)
            val done = if (Store.practicedToday()) " ✓" else ""
            v.setTextViewText(R.id.w_points, "⭐ ${Store.points}$done")
            v.setImageViewResource(
                R.id.w_boni,
                if (Store.practicedToday()) R.drawable.boni_cheer else R.drawable.boni_happy,
            )
            v.setOnClickPendingIntent(R.id.w_root, practiceIntent(ctx))
            return v
        }

        fun updateAll(ctx: Context) {
            val m = AppWidgetManager.getInstance(ctx) ?: return
            val ids = m.getAppWidgetIds(ComponentName(ctx, WordsWidget::class.java))
            if (ids.isNotEmpty()) m.updateAppWidget(ids, views(ctx))
        }
    }
}
