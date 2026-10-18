# Seyahat & Tur Filtreleme Arayüzü

[🇬🇧 English](./README.md) | 🇹🇷 Türkçe

> **Seviye:** Orta · **Tahmini süre:** 3–4 gün · **Teknolojiler:** Next.js 15 (App Router), TypeScript, Tailwind CSS, Context API

## 📋 Görev

Turlar, biletler, araç kiralama ve transfer hizmetlerinin listelendiği bir seyahat sitesi için **kategori bazlı filtreleme** arayüzü geliştirin. Verilen Figma tasarımı referans niteliğinde; birebir aynı olması gerekmiyor, görsel olarak geliştirebilirsiniz. Sayfa **responsive** olmalı.

### Navbar

- Sitenin genel tasarımına uygun bir navbar olmalı.
- Sağ üstte **Favorites**, **Cart** ve **Login** (veya kullanıcı profili) bulunmalı.
- Sol üstteki **burger menüye** tıklanınca filtrelerin bulunduğu bir **popup** açılmalı.

### Filtre popup'ı

- Popup'ın sol üst köşesinde kategoriler olmalı: **Tours, Tickets, Rent, Transfer**.
- Kullanıcı önce kategori seçmeli; seçilen kategoriye özel filtre seçenekleri altında görünmeli.
- Farklı bir kategori seçilince o kategorinin filtreleri görünmeli. **Aynı anda iki kategoride arama yapılamaz.**
- Tüm kategoriler için aynı veya benzer filtre alanları kullanılabilir.

### Liste

- Sayfa açıldığında **tur kartları** listelenmeli.
- Popup'ta seçilen filtrelere göre uygun kartlar listelenmeli.
- Veriler için sahte (mock) veri oluşturulabilir.

### Renkler

| Token | Değer |
|---|---|
| `primary-400` | `#F2A945` |
| `primary-500` | `#F78410` |
| `primary-600` | `#E07516` |

### Teslim

Proje **Vercel**'e deploy edilmeli.

## 💡 Çözüm

- Mock veriler ve tipler ayrı dosyalarda: `src/data/mock-data.ts`, `src/types/index.ts`.
- Seçili kategori ve filtre değerleri `src/context/filter-context.tsx` içinde **Context API** ile tutuluyor. Popup ve kart listesi aynı state'i paylaşıyor.
- Kategori değişince önceki kategorinin filtreleri sıfırlanıyor; böylece iki kategoride aynı anda arama yapılamıyor.
- Bileşenler `layout` (navbar vb.), `filters` (popup ve filtre alanları) ve `cards` olarak gruplandı.
- Marka renkleri Tailwind config'e `primary` paleti olarak eklendi.

## 🚀 Çalıştırma

```bash
npm install
npm run dev   # http://localhost:3000
```
