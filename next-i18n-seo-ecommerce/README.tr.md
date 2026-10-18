# Çok Dilli, SEO Uyumlu E-Ticaret (Next.js)

[🇬🇧 English](./README.md) | 🇹🇷 Türkçe

> **Seviye:** Orta–İleri · **Tahmini süre:** 7 gün · **Teknolojiler:** Next.js 15 (App Router), TypeScript, Tailwind CSS, next-intl, Redux Toolkit, ISR/SSG, Fake Store API

## 📋 Görev

[Fake Store API](https://fakestoreapi.com/) üzerinden ürünleri listeleyen, kategoriye göre filtreleyebilen, **Türkçe/İngilizce** destekli ve **SEO dostu** bir e-ticaret frontend'i geliştirin. Yüksek performans, temiz bileşen yapısı ve profesyonel bir UI/UX bekleniyor.

### API

- Ürün listesi: `GET /products`
- Ürün detayı: `GET /products/:id`

### Fonksiyonel gereksinimler

1. **Ana sayfa:** Öne çıkan ürünler (ilk 4 ürün)
2. **Ürün listesi:** Grid yerleşim, fiyat aralığı ve kategori filtresi, fiyata göre artan/azalan sıralama
3. **Ürün detayı:** Büyük görsel, fiyat, açıklama, kategori ve "Sepete Ekle" butonu
4. **Sepet:** Ürünleri listeleme, adet değiştirme ve silme
5. **Çok dil:** Türkçe ve İngilizce (`next-intl` veya `next-i18next`)
6. **SEO:** SSR/ISR ile sayfa üretimi, ürün adına göre dinamik `title` ve `description`
7. **Performans:** `next/image` ile lazy loading, ISR ile önbellekleme, gereksiz render'ların önlenmesi
8. **UI/UX:** Tailwind ile responsive tasarım; `Card`, `Button`, `Layout`, `Header`, `Footer` gibi tekrar kullanılabilir bileşenler; toast/modal gibi görsel geri bildirimler

### Ekstra değerlendirme kriterleri

- Lighthouse skorları 90+ (Performance, SEO, Accessibility)
- Modüler ve okunabilir kod, bileşen ve layout ayrımı
- Günlük ve anlamlı commit'ler

### Teslim

GitHub reposu + canlı demo linki (Vercel, Netlify vb.)

## 💡 Çözüm

- **Çok dil:** `next-intl` ile `src/app/[locale]/` rota yapısı kuruldu. Çeviriler `messages/tr.json` ve `messages/en.json` dosyalarında, dil yönlendirmesi `src/middleware.ts` içinde.
- **SEO:** Ürün detay sayfasında `generateMetadata` ile ürüne özel başlık ve açıklama üretiliyor.
- **Performans:** API istekleri `revalidate` ile ISR önbelleğine alınıyor; görseller `next/image` ile yükleniyor.
- **State:** Sepet Redux Toolkit ile yönetiliyor (`src/store/slices`).
- **Bileşenler:** `src/components` altında `layout`, `product`, `cart`, `categories` ve `ui` olarak gruplandı.
- Geliştirme adımları ve kapsam [`PRD.md`](./PRD.md) dosyasında.

## 🚀 Çalıştırma

```bash
npm install
npm run dev   # http://localhost:3000  (/tr veya /en)
```
