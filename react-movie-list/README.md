# Film Rehberi (TMDB)

> **Seviye:** Orta · **Tahmini süre:** 7 gün · **Teknolojiler:** React 18, Vite, TypeScript, Redux Toolkit, RTK Query, Tailwind CSS, React Router, TMDB API

## 📋 Görev

[The Movie Database (TMDB)](https://developer.themoviedb.org/) API'sini kullanarak bir film rehberi uygulaması geliştirin.

### Gereksinimler

- **Ana sayfa:** **Top Rated**, **Popular** ve **Trending** film kategorileri listelenmeli.
- **Detay sayfası:** Her filmin kendine ait bir detay sayfası olmalı.
- **Favoriler sayfası:** Kullanıcı filmleri favorilere ekleyip çıkarabilmeli ve favorilerini görebilmeli.
- **TypeScript**, **Redux Toolkit Query** ve **Tailwind CSS** kullanılmalı.
- Kod yapısı düzenli olmalı ve best practice'lere uymalı.
- Teslim süresi: **1 hafta**

## 💡 Çözüm

- Tüm API istekleri `src/features/movieApi.ts` içinde **RTK Query** ile tanımlandı. Önbellekleme ve yükleme durumları RTK Query tarafından yönetiliyor.
- Favoriler `favoritesSlice` ile Redux'ta tutuluyor ve `localStorage`'a yazılıyor; sayfa yenilense de kaybolmuyor.
- Film listeleri `react-splide` ile slider olarak gösteriliyor.
- Fragmanlar `react-player` ile oynatılıyor; oy sayıları gibi büyük rakamlar `millify` ile kısaltılıyor.
- Yükleme durumları için `src/pages/loading` altında skeleton bileşenleri var.
- Görsel URL'leri ve boyutları `src/constant.ts` içinde merkezi olarak tutuluyor.

### Sayfalar

| Rota | Sayfa |
|---|---|
| `/` | Top Rated, Popular ve Trending listeleri |
| `/movie/:id` | Film detayı: oyuncular, yorumlar, fragman |
| `/favorites` | Favori filmler |

![Uygulama görseli](./public/gorsel.gif)

## 🚀 Çalıştırma

Gereksinim: ücretsiz bir [TMDB](https://www.themoviedb.org/) hesabı ve **API Read Access Token**

```bash
npm install
cp .env.example .env   # VITE_TMDB_API_KEY değerini girin
npm run dev            # http://localhost:5173
```
