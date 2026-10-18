# React Native Makale Okuyucu (Biyometrik Kilitli)

> **Seviye:** İleri · **Süre:** 72 saat · **Teknolojiler:** React Native CLI, TypeScript, Redux Toolkit, React Navigation v6, AsyncStorage, Keychain/Keystore, Jest, GitHub Actions

## 📋 Görev

Görev, toplam **100 puan** değerinde üç modülden oluşuyor ve **72 saat** içinde teslim edilmesi gerekiyor.

### Modül 1: Makale akışı (35 puan)

GeeksForGeeks RSS akışından (`https://www.geeksforgeeks.org/feed/`) en son makaleleri çeken, kaydırılabilir bir liste.

- RSS'i parse edip her makale için başlık, kategori etiketi ve tahmini okuma süresi içeren kartlar gösterin.
- **Sonsuz kaydırma** (infinite scroll) ve **skeleton loader** kullanın.
- Her karta AsyncStorage ile çalışan bir **"çevrimdışı kaydet"** düğmesi ekleyin.
- Karta dokunulunca makale, özel bir araç çubuğu (geri, paylaş, tarayıcıda aç) olan **native WebView** içinde açılsın.

### Modül 2: Biyometrik kilit (30 puan)

"Kaydedilen Makaleler" sekmesini native biyometrik doğrulamanın (Face ID / parmak izi) arkasına alın.

- `react-native-biometrics` veya benzeri bir native modül kullanın.
- Biyometri yoksa **PIN ekranına** düşün.
- PIN'i **iOS Keychain / Android Keystore** ile güvenli şekilde saklayın.
- Akışın iki platformda da çalıştığını gösteren ekran kaydı veya ekran görüntüleri ekleyin.

### Modül 3: CI/CD ve mağazaya hazırlık (35 puan)

- Lint, test ve imzalı **APK + IPA** üreten bir **GitHub Actions** (veya Bitrise) workflow'u yazın.
- Feed reducer'ı ve çevrimdışı mantığı kapsayan en az **3 anlamlı Jest testi** yazın.
- İmzalama sertifikalarının nasıl ayarlanacağını ve iki mağazaya nasıl gönderim yapılacağını anlatan bir **`DEPLOYMENT.md`** hazırlayın.

### Teknik gereksinimler

- Tüm kod **TypeScript** olmalı; açıklaması olmayan `any` kullanılmamalı.
- **React Native CLI** kullanılmalı (Expo değil).
- Hedef: iOS 15+ ve Android API 31+
- State yönetimi: **Redux Toolkit veya Zustand** (seçimi gerekçelendirmeye hazır olun).
- Navigasyon: tipli rotalarla **React Navigation v6**
- README, değerlendiren kişinin projeyi **5 dakikadan kısa sürede** çalıştırmasını sağlamalı.

### Değerlendirme

Sadece çalışan koda değil, **production kalitesinde düşünmeye** bakılıyor: uç durumlar, hata yönetimi ve platform farkları. `DEPLOYMENT.md` dosyası, adayın gerçekten iki mağazaya uygulama yayınlayıp yayınlamadığının doğrudan göstergesi olarak değerlendiriliyor. Kısa liste eşiği 70/100, güçlü aday sinyali 85+.

## 💡 Çözüm

### Özellikler

- Sonsuz kaydırma, pull-to-refresh ve skeleton loader içeren makale akışı
- Her kartta AsyncStorage'a kaydedilen "çevrimdışı kaydet" düğmesi
- Geri / paylaş / tarayıcıda aç araç çubuğu olan WebView
- Face ID / Touch ID / parmak izi ile korunan, yedek olarak Keychain/Keystore'da saklanan 4 haneli PIN'e düşen "Kaydedilenler" sekmesi
- Lint, typecheck, Jest ve imzalı APK + IPA üreten GitHub Actions workflow'u. Mağaza gönderim notları [`DEPLOYMENT.md`](./DEPLOYMENT.md) dosyasında.

### Klasör yapısı

```
src/
├─ components/    ArticleCard, SkeletonCard, BiometricGate, PinPad
├─ navigation/    RootNavigator + tipli parametre listeleri
├─ screens/       Feed, SavedTab, ArticleWebView
├─ services/      rssParser, rssService, storage, secureStorage, biometric
├─ store/         feedSlice, savedSlice, authSlice içeren RTK store
├─ types/         Article
└─ utils/         readTime / stripHtml
```

### Teknik kararlar

- **Neden Redux Toolkit?** Üç asenkron akış var (ilk yükleme, yenileme, sayfalı çekme) ve hepsi pending/fulfilled/rejected durumlarına ve id bazlı tekrar engellemeye ihtiyaç duyuyor. `createAsyncThunk` bunları hazır veriyor; Zustand'da bu durumları elle yazmak gerekirdi.
- **Navigasyon:** Kök stack'te iki rota var (`Tabs`, `ArticleWebView`). WebView iki sekmenin de üstünü kaplıyor. `CompositeScreenProps` ile sekme içindeki ekranlar da kök navigasyona tipli erişebiliyor.
- **RSS parse:** Kaynak site `/feed/` adresinde artık XML yerine bir Next.js sayfası döndürüyor. Parser iki durumu da destekliyor: yanıt XML gibi görünüyorsa RSS item'larını, değilse sayfadaki `__NEXT_DATA__` JSON'unu okuyor. Ek bağımlılık yok, yaklaşık 50 satır.
- **Çevrimdışı kaydetme:** `savedSlice.toggleSaved` aynı dispatch içinde hem state'i güncelliyor hem AsyncStorage'a yazıyor. Uygulama açılışında veri bir kez `App.tsx`'ten yükleniyor.

### Biyometrik kilit akışı

1. PIN yoksa → önce PIN oluşturma ve onaylama. PIN olmazsa biyometri başarısız olduğunda kurtarma yolu kalmaz.
2. Biyometri varsa → biyometrik doğrulama istenir; iptal veya hata durumunda PIN ekranına düşülür.
3. Biyometri yoksa → doğrudan PIN.
4. 5 hatalı PIN denemesi, uygulama yeniden başlatılana kadar kilidi kapatır.
5. Kilit durumu saklanmaz; uygulama arka plana geçince `AppState` dinleyicisi tekrar kilitler.
6. PIN, Keychain'e yazılmadan önce FNV-1a ile hash'lenir. 4 haneli bir PIN'i düz metin olarak saklamamak için ek bir önlem.

### Ele alınan uç durumlar

- **Sayfalar arası tekrar eden id'ler:** `feedSlice.seenIds` aynı makalenin iki kez listelenmesini engelliyor.
- **Akışın sonu:** Sayfalı istek sadece daha önce görülmüş makaleler döndürürse yeni sayfa istenmiyor.
- **Pull-to-refresh:** Liste değiştirilmiyor, yeni makaleler başa ekleniyor; kaydırma konumu korunuyor.
- **Bozuk AsyncStorage verisi:** Uygulamayı çökertmek yerine yok sayılıyor.
- **WebView geçmişi:** Geri butonu önce web geçmişinde geri gidiyor, sonra navigasyon stack'ine dönüyor.
- **Android'de paylaşım:** `Share.share({ url })` Android'de çalışmadığı için URL mesaj metnine ekleniyor.
- **Uygulama değiştirici önizlemesi:** Uygulama ön plandan çıktığı anda kilitleniyor.
- **Tekrar doğrulama toleransı:** Sadece 60 saniyeden uzun arka planda kalınırsa tekrar doğrulama isteniyor.

### Kapsam dışı

- Splash / onboarding ekranı yok.
- Analytics veya Sentry yok (`DEPLOYMENT.md` nereye ekleneceğini anlatıyor).
- E2E test yok. Brief en az 3 unit test istiyordu; feed reducer, çevrimdışı kayıt, RSS parser ve güvenli depolama için toplam **21 test** var.

## 🚀 Çalıştırma

Gereksinimler:

- Node 22.x
- Ruby 3.2+ (rbenv ile; sistem Ruby'si `pod install`'u bozar)
- iOS için Xcode 16.1+, Android için Android Studio + JDK 17

```bash
npm install
cd ios && bundle install && bundle exec pod install && cd ..
npm run ios       # veya: npm run android
```

Metro, `run-ios` / `run-android` ile otomatik başlar. Ayrıca çalıştırmak için `npm start` kullanabilirsiniz.

Sadece kodun derlendiğini kontrol etmek için (CI'daki kontrollerin aynısı):

```bash
npm run lint
npm run typecheck
npm test
```

**Hazır APK:** CI, `main` branch'ine yapılan her push'ta imzalı bir release APK üretir. Son çalışmanın Artifacts bölümünden `app-release-apk` dosyasını indirip `adb install` ile kurabilirsiniz.
