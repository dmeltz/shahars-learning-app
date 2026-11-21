plugins {
    id("com.android.application")
    id("org.jetbrains.kotlin.android")
    id("org.jetbrains.kotlin.plugin.compose")
}

val buildNumber = (System.getenv("GITHUB_RUN_NUMBER") ?: "1").toInt()

android {
    namespace = "com.shahar.words"
    compileSdk = 35

    defaultConfig {
        applicationId = "com.shahar.words"
        minSdk = 26
        targetSdk = 35
        versionCode = buildNumber
        versionName = "1.0.$buildNumber"
        // Optional key for uploading problem reports. Empty unless the REPORT_TOKEN secret is set in GitHub.
        // Builds from any branch except the main one are test builds (GitHub pre-releases).
        val branch = System.getenv("GITHUB_REF_NAME") ?: ""
        buildConfigField("boolean", "TEST_BUILD", "${branch.isNotEmpty() && branch != "claude/project-thread-65ep8k"}")
        buildConfigField("String", "REPORT_TOKEN", "\"${System.getenv("REPORT_TOKEN") ?: ""}\"")
    }

    // A fixed key, so every new APK installs over the old one and keeps Shahar's points.
    signingConfigs {
        create("shahar") {
            storeFile = file("shahar.keystore")
            storePassword = "shahar123"
            keyAlias = "shahar"
            keyPassword = "shahar123"
        }
    }

    buildTypes {
        release {
            isMinifyEnabled = false
            signingConfig = signingConfigs.getByName("shahar")
        }
        debug {
            signingConfig = signingConfigs.getByName("shahar")
        }
    }

    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }
    kotlinOptions {
        jvmTarget = "17"
    }
    buildFeatures {
        compose = true
        buildConfig = true
    }
    lint {
        checkReleaseBuilds = false
        abortOnError = false
    }
}

dependencies {
    val bom = platform("androidx.compose:compose-bom:2024.12.01")
    implementation(bom)
    implementation("androidx.compose.ui:ui")
    implementation("androidx.compose.foundation:foundation")
    implementation("androidx.compose.material3:material3")
    implementation("androidx.activity:activity-compose:1.9.3")
    implementation("androidx.core:core-ktx:1.15.0")
    implementation("androidx.work:work-runtime-ktx:2.10.0")
    implementation("org.jetbrains.kotlinx:kotlinx-coroutines-android:1.9.0")
}
