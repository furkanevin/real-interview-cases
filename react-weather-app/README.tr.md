# Hava Durumu Dashboard Arayüzü

[🇬🇧 English](./README.md) | 🇹🇷 Türkçe

> **Seviye:** Başlangıç · **Tahmini süre:** 1–2 gün · **Teknolojiler:** React 18, Vite, SCSS

![Ekran görüntüsü](./screenshot.webp)

> ℹ️ Bu case'in orijinal görev metni kaydedilmediği için aşağıdaki görev tanımı, çözüm kodu incelenerek yeniden yazılmıştır.

## 📋 Görev

Verilen tasarıma göre bir **hava durumu paneli** arayüzü kodlayın. Veriler hazır bir JSON dosyasından okunacak; gerçek bir API'ye bağlanmak gerekmiyor. Odak noktası **bileşenlere ayırma** ve **SCSS ile birebir tasarım**.

### Gereksinimler

- **Menü:** Logo ve linklerin (Weather, Cities, Map, Settings) bulunduğu bir yan menü.
- **Güncel hava durumu:** Şehir adı, tarih, hava durumu ve güncel sıcaklık.
- **Aktiviteler:** "Bölgenizdeki aktiviteler" başlıklı görsel kartlar.
- **Haftalık tahmin:** Haftanın her günü için bir kart; geçen hafta, bu hafta ve gelecek hafta arasında geçiş yapan butonlar.
- **Saatlik tahmin:** Gün içindeki saatlere göre sıcaklıklar.
- **Hava koşulları:** Hissedilen sıcaklık, rüzgâr, yağış ihtimali ve UV indeksi.
- Yerleşim responsive olmalı.
- Tüm değerler yerel bir JSON dosyasından okunmalı.

## 💡 Çözüm

Çözüm, temiz bir referans olsun diye yeniden düzenlendi: ekrandaki her parça anlamlı isimli bir bileşen, tüm değerler veri dosyasından geliyor ve arayüz hem masaüstünde hem mobilde okunabilir.

| Bileşen | Sorumluluk |
|---|---|
| `Sidebar` | Logo ve menü (mobilde yatay çubuk) |
| `CurrentWeather` | Şehir, tarih, hava durumu ve sıcaklık |
| `Activities` | Aktivite kartları |
| `WeeklyForecast` | Önceki / sonraki hafta geçişli 7 günlük tahmin |
| `HourlyForecast` | Saatlik sıcaklıklar (çubuk grafik) |
| `AirConditions` | Hissedilen sıcaklık, rüzgâr, yağış ihtimali ve UV indeksi |

- **Veri:** Tüm veriler anlaşılır alan isimleriyle (`temperature`, `airConditions.wind`, `hourly[]`, `weekly[]`) `src/data/weather.json` dosyasında. Bileşenlerde sabit yazılmış değer yok; veriler `App`'ten prop olarak iletiliyor.
- **Yardımcı fonksiyonlar:** `src/utils/weather.js`, hava durumu tipini (ör. `thunder`) ikon ve etikete çeviriyor; tarihleri `Intl.DateTimeFormat` ile biçimlendiriyor.
- **Stil:** Her bileşenin BEM tarzı sınıf isimleri kullanan kendi SCSS dosyası var. Ortak renkler, cam panel mixin'i ve kırılım noktaları `src/styles/_variables.scss` dosyasında.
- **Okunabilirlik:** `backdrop-filter` kullanan yarı saydam koyu paneller, fırtınalı arka plan üzerinde yazıların okunmasını sağlıyor.
- **Responsive:** Masaüstünde üç kolon, tablet ve telefonda tek kolon.
- **Performans:** Arka plan görseli 4096 pikselden (3,4 MB) 1920 piksele (yaklaşık 100 KB) indirildi; hiç kullanılmayan dört slider kütüphanesi kaldırıldı.

## 🚀 Çalıştırma

```bash
npm install
npm run dev   # http://localhost:5173
```
