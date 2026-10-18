# Kripto Borsası Landing Page Klonu

[🇬🇧 English](./README.md) | 🇹🇷 Türkçe

> **Seviye:** Başlangıç–Orta · **Tahmini süre:** 2–3 gün · **Teknolojiler:** Next.js 14 (App Router), Tailwind CSS, Swiper, CoinGecko API

![Ekran görüntüsü](./screenshot.webp)

> ℹ️ Bu case'in orijinal görev metni kaydedilmediği için aşağıdaki görev tanımı, çözüm kodu incelenerek yeniden yazılmıştır.

## 📋 Görev

Popüler bir kripto para borsasının ana sayfasının **birebir klonunu** Next.js ve Tailwind CSS ile hazırlayın. Kripto fiyat tablosu gerçek bir API'den beslenmeli.

### Gereksinimler

- **Header:** Logo, menü linkleri ve giriş/kayıt butonları. Sayfa kaydırılırken sabit (sticky) kalmalı.
- **Hero:** Başlık, kayıt alanı ve duyuru listesi.
- **Piyasa tablosu:** En popüler kripto paraların adı, fiyatı, 24 saatlik değişimi ve hacmi. Veriler bir kripto API'sinden çekilmeli.
- **Etkinlikler:** Kaydırılabilir kartlardan oluşan bir slider.
- **Startup / airdrop bölümü:** Yeni projelerin listelendiği kartlar.
- **Footer:** Çok sütunlu link listesi.
- Sayfa tamamen **responsive** olmalı.

## 💡 Çözüm

- Her bölüm `app/components` altında ayrı bir bileşen olarak yazıldı (`Header`, `Hero`, `Table`, `Activities`, `Startup`, `GetStarted`, `Footer`).
- Piyasa tablosu bir **Server Component**. Veriler sunucu tarafında [CoinGecko API](https://docs.coingecko.com/)'den (API key gerekmez) çekiliyor ve `revalidate` ile 60 saniye önbellekte tutuluyor. API'ye ulaşılamazsa sayfa çökmek yerine tabloda bir mesaj gösteriliyor.
- Çözümde ilk olarak CoinCap v2 API'si kullanılmıştı; bu API kapatıldığı için proje çalışmaya devam etsin diye CoinGecko'ya geçildi.
- Büyük sayılar `millify` ile kısaltılıyor (ör. `1.2B`).
- Etkinlik slider'ı için `swiper` kullanıldı.
- Menü ve footer linkleri `app/constants` altında dizi olarak tutuluyor ve `map` ile render ediliyor.

> Marka adı ve logosu, telif hakları nedeniyle uydurma bir isimle ("CryptoX") değiştirilmiştir.

## 🚀 Çalıştırma

```bash
npm install
npm run dev   # http://localhost:3000
```
