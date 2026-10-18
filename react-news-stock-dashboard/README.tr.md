# Finans Haberleri & Hisse Takip Paneli

[🇬🇧 English](./README.md) | 🇹🇷 Türkçe

> **Seviye:** Başlangıç–Orta · **Tahmini süre:** 2–3 gün · **Teknolojiler:** React 18, Vite, React Router, Bootstrap, Axios, json-server, React Paginate

![Ekran görüntüsü](./screenshot.webp)

> ℹ️ Bu case'in orijinal görev metni kaydedilmediği için aşağıdaki görev tanımı, çözüm kodu incelenerek yeniden yazılmıştır.

## 📋 Görev

Finans haberlerini ve hisse/kripto arama sonuçlarını gösteren bir haber sitesi arayüzü geliştirin. Veriler [Alpha Vantage](https://www.alphavantage.co/) API'sinin formatındadır (`NEWS_SENTIMENT` ve `SYMBOL_SEARCH`).

### Gereksinimler

- **Header:** Site adı ve kategori menüsü (Home, Economy, Technology, Blockchain). Aktif kategori vurgulanmalı.
- **Haber listesi:** Görsel, başlık, özet, yazar ve yayın tarihi içeren kartlar. **Sayfalama** (pagination) olmalı.
- **Haber detayı (`/newsDetail/:id`):** Haberin tamamı ve kaynağa giden link.
- **Hisse paneli:** Sembol listesi ve sembole göre **arama** yapılabilen bir yan panel.
- Responsive tasarım (Bootstrap grid).

## 💡 Çözüm

- Ücretsiz API'nin istek limiti düşük olduğu için örnek API yanıtları `db.json` dosyasına kaydedildi ve **json-server** ile lokal bir REST API olarak sunuldu (`/feed`, `/feed/:id`, `/matches`). API adresi `src/utils/api.js` içinde; `VITE_API_URL` ile değiştirilebilir.
- **Kategoriler:** Seçili kategori URL'de tutuluyor (`?category=Technology`); sayfa yenilense de kalıyor ve paylaşılabiliyor. Her haberin bir `topics` listesi var; `matchesCategory` bunu menüdeki her öğeye karşılık gelen konularla karşılaştırıyor.
- **Sayfalama:** `react-paginate` sayfa başına 3 haber gösteriyor ve kategori değişince ilk sayfaya dönüyor.
- **Hisse araması:** Yazdıkça listeyi sembol veya şirket adına göre filtreliyor.
- **Haber detayı:** Görsel, tarih, yazarlar, kaynak, özet, konular, duygu analizi ve orijinal habere giden link gösteriliyor.
- Tüm listelerde yükleniyor, hata ve boş durumları ele alınıyor.

## 🚀 Çalıştırma

İki ayrı terminalde:

```bash
npm install
npm run server   # json-server → http://localhost:3050
npm run dev      # http://localhost:5173
```
