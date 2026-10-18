# JavaScript Stok & Müşteri Yönetimi (CRUD)

[🇬🇧 English](./README.md) | 🇹🇷 Türkçe

> **Seviye:** Başlangıç–Orta · **Tahmini süre:** 2–3 gün · **Teknolojiler:** Vanilla JavaScript (ES Modules), Axios, SCSS, Toastify

> ℹ️ Bu case'in orijinal görev metni kaydedilmediği için aşağıdaki görev tanımı, çözüm kodu incelenerek yeniden yazılmıştır.

## 📋 Görev

Bir ön muhasebe / e-fatura firmasının test API'sini kullanarak **stok** ve **müşteri** kayıtlarını yöneten bir arayüz geliştirin. Framework kullanılmayacak; sadece HTML, CSS ve JavaScript.

### Gereksinimler

- Üstte iki sekme olmalı: **Stoklar** ve **Müşteriler**.
- **Stoklar** tablosu: stok adı, satıcı kodu, birim adı, fiyat, KDV oranı ve aktiflik durumu.
- **Müşteriler** tablosu: ünvan/ad soyad, VKN/TCKN, vergi dairesi, iletişim bilgileri ve il/ilçe.
- Her iki modül için tam **CRUD**:
  - Kayıtları API'den çekip listeleme (`GET`)
  - Modal içindeki form ile yeni kayıt ekleme (`POST`)
  - Aynı modalı kullanarak kayıt düzenleme (`PUT`)
  - Kayıt silme (`DELETE`)
- API'nin döndürdüğü validasyon hataları kullanıcıya bildirim (toast) olarak gösterilmeli.
- İstekler `Bearer` token ile yetkilendirilmeli.

### API

| İşlem | Endpoint |
|---|---|
| Stok listesi / ekleme / güncelleme | `/general/Stocks` |
| Stok silme | `/general/Stocks/{id}` |
| Müşteri listesi / ekleme / güncelleme | `/general/Customers` |
| Müşteri silme | `/general/Customers/{id}` |

## 💡 Çözüm

Kod üç modüle ayrıldı:

| Dosya | Sorumluluk |
|---|---|
| `js-code/api.js` | Axios ayarları ve tüm API istekleri, hata bildirimleri |
| `js-code/ui.js` | Tablo satırlarını oluşturma, güncelleme, silme (DOM işlemleri) |
| `js-code/app.js` | Olay dinleyicileri, sekme geçişleri, modal açma/kapama |

- Ekleme ve düzenleme için **tek bir modal** kullanılıyor. Hangi işlemin yapılacağı `data-mode` ve `data-editId` attribute'larıyla belirleniyor.
- Form verisi `FormData` ile okunup nesneye çevriliyor.
- API hataları `Toastify` ile kırmızı bildirim olarak gösteriliyor.

## 🚀 Çalıştırma

1. API bilgilerini girin:

   ```bash
   cp js-code/config.example.js js-code/config.js
   ```

   `config.js` içine API adresini ve token'ı yazın. Bu dosya git'e eklenmez.

2. ES Modules kullanıldığı için dosyayı doğrudan açmak yerine bir yerel sunucuyla çalıştırın. Örneğin VS Code **Live Server** eklentisi veya:

   ```bash
   npx serve .
   ```

SCSS değişikliklerini derlemek için:

```bash
npx sass style.scss style.css --watch
```
