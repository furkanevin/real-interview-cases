# Emlak İlanı Filtreleme

[🇬🇧 English](./README.md) | 🇹🇷 Türkçe

> **Seviye:** Başlangıç–Orta · **Tahmini süre:** 1–2 gün · **Teknolojiler:** React 18, Vite, React Router, Context API, Tailwind CSS, Axios

> ℹ️ Bu case'in orijinal görev metni kaydedilmediği için aşağıdaki görev tanımı, çözüm kodu incelenerek yeniden yazılmıştır.

## 📋 Görev

Bir emlak firmasının API'sinden gelen ilanları listeleyen ve **ilan tipi** ile **konuma** göre filtreleyen bir arayüz geliştirin.

### Gereksinimler

- İlanlar ve konum bilgileri (il/ilçe) API'den çekilmeli.
- Filtre paneli iki sekmeden oluşmalı:
  - **Sekme 1:** İlan tipi (Satılık / Kiralık)
  - **Sekme 2:** İl ve ilçe seçimi. İlçe listesi seçilen ile göre değişmeli.
- Filtreler **URL parametrelerinde** tutulmalı (`?tip=&il=&ilçe=`). Böylece sayfa yenilense veya link paylaşılsa da filtreler korunmalı.
- İlan kartlarında başlık ve kısaltılmış açıklama gösterilmeli.
- Yükleme ve hata durumları gösterilmeli.
- Aynı bileşenleri kullanan iki farklı yerleşim olmalı:
  - `/` → filtre solda, ilanlar sağda
  - `/page-two` → ilanlar solda, filtre sağda

## 💡 Çözüm

- Veri çekme ve filtreleme `src/context/apiContext.jsx` içinde **Context API** ile yapılıyor. Filtre değerleri `useSearchParams` ile URL'den okunuyor; URL değiştikçe liste yeniden filtreleniyor.
- Filtre formu `FormData` ile okunup değerler `searchParams`'a yazılıyor.
- İl listesindeki tekrar eden kayıtlar `utils/getUnique.js` ile temizleniyor.
- `Filter` ve `Content` bileşenleri iki sayfada da yeniden kullanılıyor; sadece sıraları değişiyor.

## 🚀 Çalıştırma

```bash
npm install
cp .env.example .env   # API adresini ve key'i girin
npm run dev            # http://localhost:5173
```

### API

| Endpoint | Açıklama |
|---|---|
| `GET {VITE_API_BASE_URL}/list?key={VITE_API_KEY}` | İlan listesi |
| `GET {VITE_API_BASE_URL}/locationLookup?key={VITE_API_KEY}` | İl / ilçe listesi |
