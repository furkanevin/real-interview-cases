# React Native Article Reader (Biometric Lock)

🇬🇧 English | [🇹🇷 Türkçe](./README.tr.md)

> **Level:** Advanced · **Time limit:** 72 hours · **Tech:** React Native CLI, TypeScript, Redux Toolkit, React Navigation v6, AsyncStorage, Keychain/Keystore, Jest, GitHub Actions

## 📋 Task

The task has three modules worth **100 points** in total and must be submitted within **72 hours**.

### Module 1: Article feed (35 pts)

A scrollable feed that fetches the latest articles from the GeeksForGeeks RSS feed (`https://www.geeksforgeeks.org/feed/`).

- Parse the RSS feed and show article cards with the title, a category tag and the estimated reading time.
- Implement **infinite scroll** with **skeleton loaders**.
- Add a **"save offline"** toggle to each card using AsyncStorage.
- On tap, open the article in a **native WebView** with a custom in-app toolbar (back, share, open in browser).

### Module 2: Biometric gate (30 pts)

Protect the "Saved Articles" tab with native biometric authentication (Face ID / fingerprint).

- Use `react-native-biometrics` or an equivalent native module.
- Gracefully fall back to a **PIN screen** if biometrics are unavailable.
- Store the PIN securely in the **iOS Keychain / Android Keystore**.
- Provide a screen recording or screenshots showing the flow working on both platforms.

### Module 3: CI/CD and store readiness (35 pts)

- Write a **GitHub Actions** (or Bitrise) workflow that lints, runs tests and produces a signed **APK + IPA**.
- Write at least **3 meaningful Jest tests** covering the feed reducer and the offline logic.
- Write a **`DEPLOYMENT.md`** explaining how to configure signing certificates and submit to both stores.

### Technical requirements

- All code must be **TypeScript**; no `any` without a comment explaining why.
- Use **React Native CLI** (not Expo).
- Target iOS 15+ and Android API 31+.
- State management: **Redux Toolkit or Zustand** (be ready to justify your choice).
- Navigation: **React Navigation v6** with typed routes.
- The README must let a reviewer run the project in **under 5 minutes**.

### Evaluation

The focus is on **production-quality thinking**, not just working code: edge cases, error handling and platform differences. `DEPLOYMENT.md` is treated as a direct signal of whether the candidate has actually shipped apps to both stores. Shortlist threshold is 70/100; 85+ is a strong hire signal.

## 💡 Solution

### Features

- Article feed with infinite scroll, pull-to-refresh and skeleton loaders
- A "save offline" toggle on each card, persisted to AsyncStorage
- WebView with a back / share / open-in-browser toolbar
- A "Saved" tab protected by Face ID / Touch ID / fingerprint, falling back to a 4-digit PIN stored in the Keychain/Keystore
- A GitHub Actions workflow that runs lint, typecheck and Jest and produces signed APK + IPA artifacts. Store submission notes are in [`DEPLOYMENT.md`](./DEPLOYMENT.md).

### Folder structure

```
src/
├─ components/    ArticleCard, SkeletonCard, BiometricGate, PinPad
├─ navigation/    RootNavigator + typed param lists
├─ screens/       Feed, SavedTab, ArticleWebView
├─ services/      rssParser, rssService, storage, secureStorage, biometric
├─ store/         RTK store with feedSlice, savedSlice, authSlice
├─ types/         Article
└─ utils/         readTime / stripHtml
```

### Technical decisions

- **Why Redux Toolkit?** There are three async flows (initial load, refresh, paged fetch), and all of them need explicit pending/fulfilled/rejected handling and id-based de-duplication. `createAsyncThunk` provides that out of the box; with Zustand these states would be hand-rolled.
- **Navigation:** The root stack has two routes (`Tabs`, `ArticleWebView`), so the WebView covers both tabs. `CompositeScreenProps` gives screens inside the tabs typed access to root navigation.
- **RSS parsing:** The source site now serves a Next.js page at `/feed/` instead of XML. The parser handles both: RSS items if the response looks like XML, otherwise the page's `__NEXT_DATA__` JSON. No extra dependency, about 50 lines.
- **Offline saving:** `savedSlice.toggleSaved` updates state and writes to AsyncStorage in the same dispatch. Data is hydrated once from `App.tsx` on startup.

### Biometric gate flow

1. No PIN set → PIN setup and confirmation first. Without a PIN there is no recovery path if biometrics fail.
2. Biometrics available → biometric prompt; cancel or failure falls back to PIN entry.
3. No biometrics → straight to PIN.
4. 5 wrong PIN attempts lock the gate until the app is restarted.
5. The unlocked state is not persisted; when the app goes to the background, an `AppState` listener locks it again.
6. The PIN is hashed with FNV-1a before being written to the Keychain, as an extra measure against storing a 4-digit PIN in plain text.

### Edge cases handled

- **Duplicate ids across pages:** `feedSlice.seenIds` prevents the same article from appearing twice.
- **End of feed:** If a paged request returns only already-seen articles, no more pages are requested.
- **Pull-to-refresh:** New articles are prepended instead of replacing the list, so the scroll position is kept.
- **Corrupt AsyncStorage data:** Ignored instead of crashing the app.
- **WebView history:** The back button first navigates web history, then falls back to the navigation stack.
- **Sharing on Android:** `Share.share({ url })` does nothing on Android, so the URL is added to the message body.
- **App switcher preview:** The app locks as soon as it leaves the foreground.
- **Re-auth tolerance:** Re-authentication is only requested after more than 60 seconds in the background.

### Out of scope

- No splash / onboarding screen.
- No analytics or Sentry (`DEPLOYMENT.md` explains where they would plug in).
- No E2E tests. The brief asked for at least 3 unit tests; there are **21 tests** covering the feed reducer, offline saving, the RSS parser and secure storage.

## 🚀 Getting started

Requirements:

- Node 22.x
- Ruby 3.2+ (via rbenv; the system Ruby breaks `pod install`)
- Xcode 16.1+ for iOS, Android Studio + JDK 17 for Android

```bash
npm install
cd ios && bundle install && bundle exec pod install && cd ..
npm run ios       # or: npm run android
```

Metro starts automatically with `run-ios` / `run-android`. Use `npm start` to run it separately.

To just check that the code compiles (the same checks CI runs):

```bash
npm run lint
npm run typecheck
npm test
```

**Pre-built APK:** CI produces a signed release APK on every push to `main`. Download `app-release-apk` from the latest run's Artifacts and install it with `adb install`.
