# Katkıda Bulunma

[🇬🇧 English](./CONTRIBUTING.md) | 🇹🇷 Türkçe

Katkıda bulunmak istediğiniz için teşekkürler! Bu repo, sizin gibi geliştiricilerin paylaştığı gerçek case'lerle büyüyor. Eklenen her case, birinin bir sonraki mülakata hazırlanmasına yardım ediyor.

## Neler eklenebilir?

- **Yeni bir case:** Bir iş başvurusunda size gönderilen görev ve sizin çözümünüz.
- **Çözümsüz bir case'in çözümü:** Örneğin [fullstack-school-management](./fullstack-school-management/README.tr.md).
- **Düzeltmeler:** Çalışmayan kurulum adımları, eskimiş bağımlılıklar, yazım hataları veya anlaşılmayan görev açıklamaları.

Emin değilseniz önce bir [issue açıp](../../issues/new/choose) sorun.

## Yeni case kuralları

### 1. Şirketi tanıtan her şeyi kaldırın

En önemli kural bu. Pull request açmadan önce `package.json`, `index.html`, görseller ve kod yorumları dahil hiçbir dosyada aşağıdakilerin **kalmadığından** emin olun:

- Şirket veya ürün isimleri, logolar
- E-posta adresleri, İK çalışanlarının veya şirket çalışanlarının isimleri, GitHub kullanıcı adları
- Şirketin web sitesine, Notion'ına, Figma'sına veya iç API'lerine giden linkler
- Şifreler, API key'leri veya token'lar (test amaçlı olanlar dahil)
- Orijinal görev dokümanı (PDF, DOCX, ODT, e-posta ekran görüntüleri)

Orijinal metni kopyalamak yerine görevi README'de **kendi cümlelerinizle yazın.**

Çözüm şirketin özel API'sine bağlıysa adresi ve key'i bir `.env` dosyasına taşıyın, örnek değerlerle bir `.env.example` ekleyin.

### 2. Kodu zararlı yazılıma karşı kontrol edin

Bazı sahte iş ilanları, içinde zararlı yazılım olan "case'ler" gönderiyor (bkz. [fullstack-school-management](./fullstack-school-management/README.tr.md#security-warning)). Göndermeden önce projede şunların **olmadığını** kontrol edin:

- Bilinmeyen kodu çalıştıran `eval`, `new Function`, `Function.constructor` veya `child_process`
- Uygulama açılırken projeyle alakasız, sabit yazılmış adreslere (ör. rastgele `*.vercel.app`) atılan istekler
- `package.json` içinde şüpheli `preinstall` / `postinstall` script'leri

Böyle bir şey bulursanız sessizce silmeyin; issue açın, uyarı olarak belgeleyelim.

### 3. Klasör ve README yapısına uyun

- **Klasör adı:** İngilizce, kebab-case ve ana teknolojiyle başlayan bir isim: `html-`, `javascript-`, `react-`, `next-`, `react-native-`, `backend-` veya `fullstack-`. Örnek: `react-weather-app`.
- **İki README:** `README.md` (İngilizce) ve `README.tr.md` (Türkçe). Sadece bir dilde yazabiliyorsanız yine de PR açıp belirtin; çeviride yardımcı oluruz.
- İki dosya için de [`.github/case-template/`](./.github/case-template) içindeki şablonları kullanın.
- Ekran görüntünüz varsa case klasörüne `screenshot.webp` adıyla kaydedin.
- `node_modules`, build çıktıları ve `.env` dosyalarını commit etmeyin.

### 4. Case'i ana README'ye ekleyin

Hem [`README.md`](./README.md) hem [`README.tr.md`](./README.tr.md) dosyasında uygun seviye tablosuna bir satır ekleyin.

| Seviye | Ne zaman? |
|---|---|
| 🟢 Başlangıç | Birkaç saat ile 1–2 gün arası, HTML/CSS veya temel React |
| 🟡 Başlangıç–Orta | API entegrasyonu, routing, basit state yönetimi |
| 🟠 Orta | TypeScript, global state, testler, kimlik doğrulama |
| 🔴 Orta–İleri / İleri | Mimari, backend, mobil, CI/CD, büyük kod tabanları |

## Pull request açma

1. Repoyu fork'layın ve bir branch açın: `git checkout -b add-react-weather-app`
2. Case'inizi yukarıdaki kurallara göre ekleyin.
3. Projenin README'deki adımlarla çalıştığından emin olun.
4. Pull request açıp kontrol listesini doldurun.

## Davranış kuralları

Nazik ve yapıcı olun. Buradaki herkes öğreniyor.
