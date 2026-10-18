# Kampanya & Puanlı Alışveriş Arayüzü

[🇬🇧 English](./README.md) | 🇹🇷 Türkçe

> **Seviye:** Başlangıç · **Tahmini süre:** 1–2 gün · **Teknolojiler:** React 18, Vite, React Router, Tailwind CSS, React Icons

![Ekran görüntüsü](./screenshot.webp)

> ℹ️ Orijinal tasarım görseli şirket logoları içerdiği için repoya eklenmemiştir. Görev tanımı tasarım ve çözüm kodu incelenerek yeniden yazılmıştır.

## 📋 Görev

Bir satış kampanyası sitesinin **3 sayfalık arayüzünü** verilen wireframe'e göre kodlayın. Görsellerin yerinde placeholder'lar kullanılabilir. Backend gerekmiyor, ancak 3. sayfa çalışır olmalı: arama, adet seçimi ve puanlı sepet.

### Sayfa 1: Ana sayfa (`/`)

- En üstte yatayda dizilmiş, Instagram tarzı yuvarlak **story** ikonları
- Ortada farklı boyutlarda **placeholder kutularından** oluşan bir grid
- Sağda başlığı ve butonları olan bir **menü** kartı (Ayarlar, Gizlilik, Güvenlik, Profil, Kampanyalar, Siparişler) ve altında bir placeholder

### Sayfa 2: Kampanya ürünleri (`/page-two`)

- Kampanya başlığı (logo) ve **"Ana Ekrana Dön"** butonu
- Kampanyaya dahil ürünlerin **kart** listesi: görsel, ürün adı, model ve kampanyada verilecek ürün adedi
- En altta kampanya koşullarını anlatan küçük puntolu bir yasal metin kutusu

### Sayfa 3: Puanla alışveriş (`/page-three`)

- "Ana Ekrana Dön" butonu ve **arama** kutusu
- Ürün kartları: görsel, ad, paket içeriği, **puan** değeri ve `−` / `+` adet butonları
- Sağ kolonda kullanıcının **puan bakiyesi**, **sepet özeti** (toplam puan) ve **"Siparişi Tamamla"** butonu
- Mobilde sağ kolon ürünlerin üstüne geçmeli.

## 💡 Çözüm

- Üç sayfa `src/pages` altında, ortak parçalar `src/components` altında: `Header`, `Stories`, `Menu`, `Card`, `BackButton`.
- Ürün verileri `src/constants` içinde sabit bir dizi olarak tutuluyor ve `Card` bileşeniyle render ediliyor. `Card`, `isPointMode` prop'u ile hem 2. sayfadaki kampanya kartı hem de 3. sayfadaki puanlı kart olarak kullanılıyor.
- **3. sayfanın mantığı:**
  - Arama kutusu, yazdıkça ürünleri isme göre filtreliyor.
  - Sepet, state'te `{ ürünAdı: adet }` şeklinde bir nesne. Toplam ve kalan puan ayrı state olarak tutulmuyor, her render'da sepetten hesaplanıyor.
  - Kalan puan ürüne yetmiyorsa `+` butonu, adet 0 ise `−` butonu pasif oluyor; böylece bakiye asla eksiye düşmüyor.
  - Sepet boşken "Siparişi Tamamla" butonu pasif.
- Responsive grid için Tailwind breakpoint'leri kullanıldı. Mobilde sepet kolonu `flex-col-reverse` ile üste alınıyor.

## 🚀 Çalıştırma

```bash
npm install
npm run dev   # http://localhost:5173
```
