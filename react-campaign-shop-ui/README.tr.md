# Kampanya & Puanlı Alışveriş Arayüzü

[🇬🇧 English](./README.md) | 🇹🇷 Türkçe

> **Seviye:** Başlangıç · **Tahmini süre:** 1–2 gün · **Teknolojiler:** React 18, Vite, React Router, Tailwind CSS, React Icons

> ℹ️ Orijinal tasarım görseli şirket logoları içerdiği için repoya eklenmemiştir. Görev tanımı tasarım ve çözüm kodu incelenerek yeniden yazılmıştır.

## 📋 Görev

Bir satış kampanyası sitesinin **3 sayfalık arayüzünü** verilen wireframe'e göre kodlayın. Görsellerin yerinde placeholder'lar kullanılabilir. Sadece arayüz (UI) isteniyor; backend ya da gerçek sepet mantığı gerekmiyor.

### Sayfa 1: Ana sayfa (`/`)

- En üstte yatayda dizilmiş, Instagram tarzı yuvarlak **story** ikonları
- Ortada farklı boyutlarda **placeholder kutularından** oluşan bir grid
- Sağda başlığı ve butonları olan bir **menü** kartı (Formlar, Faydalı Linkler, Anketler vb.) ve altında bir placeholder

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
- Ürün verileri `src/constants` içinde sabit bir dizi olarak tutuluyor ve `Card` bileşeniyle render ediliyor.
- `Card` bileşeni `isPointMode` prop'u ile hem 2. sayfadaki kampanya kartı hem de 3. sayfadaki puanlı kart olarak kullanılıyor.
- Responsive grid için Tailwind breakpoint'leri (`sm`, `md`, `lg`, `xl`) kullanıldı. Mobilde sepet kolonu `flex-col-reverse` ile üste alınıyor.

## 🚀 Çalıştırma

```bash
npm install
npm run dev   # http://localhost:5173
```
