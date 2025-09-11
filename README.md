
Tree Growth Calculator (Cordova APK Project) - Codemagic-ready
=============================================================

This Cordova project is ready to upload to Codemagic (or GitHub) and build an Android APK in the cloud.

How to use with Codemagic:
1. Push this project to a GitHub repository.
2. Sign in to https://codemagic.io/ using your GitHub account and add the app (select your repo).
3. In the Codemagic app settings, you can use the default build commands or set custom scripts:
   - npm install -g cordova
   - cordova platform add android
   - cordova build android --debug
4. Add the artifact path in Codemagic UI: platforms/android/app/build/outputs/apk/debug/app-debug.apk
5. Start the build and download the APK from Artifacts when complete.

Notes:
- Codemagic provides Android SDK and Java on their build machines, so no local Android SDK required.
- If you prefer GitHub Actions, I can also include a workflow file.
