package com.shahar.words

import android.content.Context
import android.os.Build
import org.json.JSONArray
import org.json.JSONObject
import java.io.File
import java.time.LocalDateTime
import java.time.format.DateTimeFormatter

/**
 * Performance data: every answer in every practice round, so the practice can be analysed and tuned later.
 *
 * One round = one JSON-lines file: a "round" line, one "answer" line per question, an "end" line.
 * While a round runs it is written to stats-open/; when it ends (finished, left, or app closed) it moves
 * to stats-out/ and is uploaded together with the problem reports to stats/<profile>/ in my-practice-data.
 */
object Stats {
    private lateinit var app: Context
    private val stamp = DateTimeFormatter.ofPattern("yyyy-MM-dd_HHmmss")

    private var area = ""
    private var desc = ""
    private var shownAt = 0L
    private var firstPickAt = 0L
    private val picks = mutableListOf<String>()

    private fun openFile() = File(app.filesDir, "stats-open/current.jsonl")
    private fun outDir() = File(app.filesDir, "stats-out").apply { mkdirs() }

    fun init(ctx: Context) {
        app = ctx.applicationContext
        // A round left open when the app was killed: close it so it gets sent.
        close(finished = false)
    }

    /** Called (on every recomposition) by a round screen with the question it shows. Only a new question resets the clock. */
    fun shown(area: String, question: String) {
        Report.question = question
        if (question == desc) return
        this.area = area
        desc = question
        shownAt = System.currentTimeMillis()
        firstPickAt = 0L
        picks.clear()
    }

    /** An option the kid tapped (or the word they typed). */
    fun picked(answer: String) {
        if (firstPickAt == 0L) firstPickAt = System.currentTimeMillis()
        picks += answer
    }

    /** Called by Store when an answer is scored. */
    fun answered(key: String, ok: Boolean, pts: Int) {
        if (!::app.isInitialized) return
        try {
            val f = openFile()
            if (!f.exists()) {
                f.parentFile?.mkdirs()
                f.writeText(JSONObject()
                    .put("type", "round")
                    .put("profile", Store.profile ?: "")
                    .put("area", area)
                    .put("start", LocalDateTime.now().format(stamp))
                    .put("build", Updater.currentBuild(app))
                    .put("device", "${Build.MANUFACTURER} ${Build.MODEL}")
                    .toString() + "\n")
            }
            val now = System.currentTimeMillis()
            val toAnswer = (if (firstPickAt > 0) firstPickAt else now) - shownAt
            f.appendText(JSONObject()
                .put("type", "answer")
                .put("time", LocalDateTime.now().format(DateTimeFormatter.ISO_LOCAL_TIME).take(8))
                .put("area", area)
                .put("key", key)
                .put("question", desc)
                .put("ok", ok)
                .put("points", pts)
                .put("seconds", if (shownAt > 0) toAnswer / 1000.0 else JSONObject.NULL)
                .put("picked", JSONArray(picks))
                .toString() + "\n")
        } catch (e: Exception) {
            // Never let data collection break practice.
        }
    }

    /** Ends the current round file, if any, and queues it for upload. */
    fun close(finished: Boolean) {
        if (!::app.isInitialized) return
        try {
            val f = openFile()
            if (!f.exists()) return
            val lines = f.readLines().filter { it.isNotBlank() }.map { JSONObject(it) }
            val header = lines.first()
            val answers = lines.filter { it.optString("type") == "answer" }
            f.appendText(JSONObject()
                .put("type", "end")
                .put("finished", finished)
                .put("answers", answers.size)
                .put("correct", answers.count { it.optBoolean("ok") })
                .put("end", LocalDateTime.now().format(stamp))
                .toString() + "\n")
            val name = "${header.optString("profile", "unknown")}__${header.optString("start")}_${header.optString("area")}.jsonl"
            f.renameTo(File(outDir(), name))
        } catch (e: Exception) {
            openFile().delete()
        }
        desc = ""
    }

    fun outbox(ctx: Context): List<File> =
        File(ctx.filesDir, "stats-out").listFiles { f -> f.name.endsWith(".jsonl") }?.sortedBy { it.name } ?: emptyList()

    fun waiting(ctx: Context) = outbox(ctx).size

    /** shahar__2026-11-21_101500_practice.jsonl -> stats/shahar/2026-11/2026-11-21_101500_practice.jsonl */
    fun remotePath(f: File): String {
        val profile = f.name.substringBefore("__")
        val rest = f.name.substringAfter("__")
        return "stats/$profile/${rest.take(7)}/$rest"
    }
}
