package com.shahar.words

import android.content.ActivityNotFoundException
import android.content.Context
import android.content.Intent
import android.net.Uri
import android.provider.Settings
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.setValue
import androidx.core.content.FileProvider
import androidx.core.content.pm.PackageInfoCompat
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext
import org.json.JSONArray
import java.io.File
import java.io.IOException
import java.net.HttpURLConnection
import java.net.URL

sealed class UpdateState {
    data object Idle : UpdateState()
    data object Checking : UpdateState()
    data object UpToDate : UpdateState()
    data class Available(val build: Int, val url: String, val test: Boolean = false, val note: String = "") : UpdateState()
    data class Downloading(val percent: Int) : UpdateState()
    data object NeedsPermission : UpdateState()
    data object Installing : UpdateState()
    data class Failed(val message: String) : UpdateState()
}

/** Checks GitHub for a newer build and installs it. */
object Updater {
    private const val LATEST_PAGE = "https://github.com/dmeltz/shahars-learning-app/releases/latest"
    private const val RELEASES_API = "https://api.github.com/repos/dmeltz/shahars-learning-app/releases?per_page=30"

    var state by mutableStateOf<UpdateState>(UpdateState.Idle)
    var lastUrl = ""
    private val scope = MainScope()
    private var autoChecked = false

    fun startCheck(ctx: Context, quiet: Boolean = false) {
        if (quiet) {
            if (autoChecked) return
            autoChecked = true
        }
        val app = ctx.applicationContext
        scope.launch { check(app, quiet) }
    }

    fun startInstall(ctx: Context) {
        val app = ctx.applicationContext
        scope.launch { downloadAndInstall(app, lastUrl) }
    }

    fun currentBuild(ctx: Context): Int {
        val info = ctx.packageManager.getPackageInfo(ctx.packageName, 0)
        return PackageInfoCompat.getLongVersionCode(info).toInt()
    }

    /**
     * Finds the newest build number. Uses the github.com "latest release" redirect, which is not
     * limited like the GitHub API (60 calls an hour per home network, shared by every device).
     */
    private fun latestBuild(): Int {
        val c = URL(LATEST_PAGE).openConnection() as HttpURLConnection
        c.instanceFollowRedirects = false
        c.connectTimeout = 10000
        c.readTimeout = 10000
        c.requestMethod = "HEAD"
        try {
            val code = c.responseCode
            val loc = c.getHeaderField("Location") ?: throw IOException("HTTP $code")
            return loc.substringAfterLast("/").removePrefix("build-").toInt()
        } finally { c.disconnect() }
    }

    /** Forget the last answer (e.g. the parent switched the test channel on or off). */
    fun reset() {
        state = UpdateState.Idle
        autoChecked = false
    }

    /**
     * Parent's device only: the newest build of all, test builds (GitHub pre-releases) included.
     * Uses the GitHub API (60 calls an hour), which is fine for one parent device.
     */
    private fun newestIncludingTests(): UpdateState.Available? {
        val c = URL(RELEASES_API).openConnection() as HttpURLConnection
        c.connectTimeout = 10000
        c.readTimeout = 15000
        c.setRequestProperty("Accept", "application/vnd.github+json")
        try {
            if (c.responseCode != 200) throw IOException("HTTP ${c.responseCode}")
            val arr = JSONArray(c.inputStream.bufferedReader().readText())
            var best: UpdateState.Available? = null
            for (i in 0 until arr.length()) {
                val r = arr.getJSONObject(i)
                if (r.optBoolean("draft")) continue
                val build = r.optString("tag_name").removePrefix("build-").toIntOrNull() ?: continue
                if (best != null && build <= best.build) continue
                val assets = r.optJSONArray("assets") ?: continue
                var url: String? = null
                for (j in 0 until assets.length()) {
                    val a = assets.getJSONObject(j)
                    if (a.optString("name") == "shahar-words.apk") url = a.optString("browser_download_url")
                }
                if (url.isNullOrEmpty()) continue
                val pre = r.optBoolean("prerelease")
                val note = if (pre) r.optString("body").lineSequence().firstOrNull { it.isNotBlank() }.orEmpty().take(200) else ""
                best = UpdateState.Available(build, url, pre, note)
            }
            return best
        } finally { c.disconnect() }
    }

    suspend fun check(ctx: Context, quiet: Boolean = false) {
        if (!quiet) state = UpdateState.Checking
        state = try {
            val tests = if (Store.parentDevice) {
                withContext(Dispatchers.IO) { runCatching { newestIncludingTests() }.getOrNull() }
            } else null
            val build = tests?.build ?: withContext(Dispatchers.IO) { latestBuild() }
            val url = tests?.url ?: "https://github.com/dmeltz/shahars-learning-app/releases/download/build-$build/shahar-words.apk"
            if (build > currentBuild(ctx)) {
                lastUrl = url
                tests ?: UpdateState.Available(build, url)
            }
            else if (quiet) UpdateState.Idle else UpdateState.UpToDate
        } catch (e: Exception) {
            if (quiet) UpdateState.Idle
            else UpdateState.Failed("הבדיקה לא הצליחה (${e.javaClass.simpleName}: ${e.message ?: ""}). בודקים שיש אינטרנט ומנסים שוב.")
        }
    }

    fun canInstall(ctx: Context): Boolean = ctx.packageManager.canRequestPackageInstalls()

    fun openInstallPermission(ctx: Context) {
        try {
            ctx.startActivity(
                Intent(Settings.ACTION_MANAGE_UNKNOWN_APP_SOURCES, Uri.parse("package:${ctx.packageName}"))
                    .addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
            )
        } catch (e: ActivityNotFoundException) {
            state = UpdateState.Failed(BLOCKED)
        }
    }

    suspend fun downloadAndInstall(ctx: Context, url: String) {
        if (!canInstall(ctx)) {
            state = UpdateState.NeedsPermission
            return
        }
        state = UpdateState.Downloading(0)
        try {
            val file = withContext(Dispatchers.IO) {
                val dir = File(ctx.cacheDir, "updates").apply { mkdirs() }
                val out = File(dir, "shahar-words.apk")
                val c = URL(url).openConnection() as HttpURLConnection
                c.connectTimeout = 15000
                c.readTimeout = 30000
                c.instanceFollowRedirects = true
                try {
                    val total = c.contentLengthLong
                    c.inputStream.use { input ->
                        out.outputStream().use { output ->
                            val buf = ByteArray(64 * 1024)
                            var done = 0L
                            while (true) {
                                val n = input.read(buf)
                                if (n < 0) break
                                output.write(buf, 0, n)
                                done += n
                                if (total > 0) state = UpdateState.Downloading((done * 100 / total).toInt())
                            }
                        }
                    }
                } finally {
                    c.disconnect()
                }
                out
            }
            val uri = FileProvider.getUriForFile(ctx, "${ctx.packageName}.files", file)
            val intent = Intent(Intent.ACTION_VIEW)
                .setDataAndType(uri, "application/vnd.android.package-archive")
                .addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION or Intent.FLAG_ACTIVITY_NEW_TASK)
            ctx.startActivity(intent)
            state = UpdateState.Installing
        } catch (e: Exception) {
            state = UpdateState.Failed(Store.g("ההורדה לא הצליחה. נסי שוב, או שאבא יעדכן מהמחשב.", "ההורדה לא הצליחה. נסה שוב, או שאבא יעדכן מהמחשב."))
        }
    }

    const val BLOCKED = "הטלפון חוסם התקנה מתוך האפליקציה (למשל בגלל Family Link). אבא יכול לעדכן מהמחשב."
}
