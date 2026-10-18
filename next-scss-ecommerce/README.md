# Next.js + SCSS E-Ticaret

> **Seviye:** Başlangıç–Orta · **Tahmini süre:** 2–3 gün · **Teknolojiler:** Next.js 14 (App Router), SCSS, Context API, Embla Carousel, React Toastify, Fake Store API

> ℹ️ Bu case'in orijinal görev metni kaydedilmediği için aşağıdaki görev tanımı, çözüm kodu incelenerek yeniden yazılmıştır.

## 📋 Görev

[Fake Store API](https://fakestoreapi.com/) verileriyle, stil için **SCSS** kullanan bir e-ticaret sitesi geliştirin. Tailwind veya hazır UI kütüphanesi kullanılmayacak.

### Gereksinimler

- **Ana sayfa:** Üstte bir slider (otomatik geçişli), altında kategorilere göre gruplanmış ürün listeleri / ürün slider'ları.
- **Kategori sayfası (`/category/[id]`):** Seçilen kategorideki tüm ürünler.
- **Ürün detay sayfası (`/product/[id]`):** Ürün görseli, açıklaması, fiyatı ve "Sepete ekle" butonu.
- **Sepet sayfası (`/cart`):** Sepetteki ürünler, adet değiştirme, silme ve toplam tutar.
- Header'da sepetteki ürün sayısını gösteren bir buton olmalı.
- Sepet sayfa yenilense de **kalıcı** olmalı.
- Yükleme ve "sayfa bulunamadı" ekranları olmalı.
- Responsive tasarım.

## 💡 Çözüm

- Veri çekme işlemleri `src/app/utils/api.js` içinde. Sayfalar **Server Component** olduğu için veriler sunucuda çekiliyor.
- Sepet `context/basketContext.jsx` içinde **Context API** ile yönetiliyor. `@uidotdev/usehooks`'un `useLocalStorage` hook'u sayesinde sepet `localStorage`'da kalıcı.
- Sepet işlemlerinde `react-toastify` ile bildirim gösteriliyor.
- Slider'lar `embla-carousel-react` ve autoplay eklentisiyle yapıldı.
- Stiller `src/app/assets/css` altında `main`, `responsive`, `slide`, `loader` gibi parçalara bölündü.
- `loading.jsx` ve `not-found.jsx` ile App Router'ın özel dosyaları kullanıldı.

## 🚀 Çalıştırma

```bash
npm install
npm run dev   # http://localhost:3000
```
