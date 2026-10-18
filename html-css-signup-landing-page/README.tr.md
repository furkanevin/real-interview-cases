# HTML & CSS Kayıt (Sign-up) Sayfası

[🇬🇧 English](./README.md) | 🇹🇷 Türkçe

> **Seviye:** Başlangıç · **Tahmini süre:** 1 gün · **Teknolojiler:** HTML5, CSS3 (Flexbox, Grid)

![Ekran görüntüsü](./screenshot.webp)

## 📋 Görev

Verilen Figma tasarımına göre tek sayfalık, statik bir **kayıt sayfası** geliştirin. Sayfa; üstte bir erişilebilirlik çubuğu, logo ve menü içeren bir header, solda tanıtım metni, sağda kayıt formu bulunan bir hero alanından oluşuyor.

### Gereksinimler

- Sayfa **responsive** olmalı ve farklı ekran boyutlarına uyum sağlamalı.
- **Temiz ve semantik HTML** yazılmalı (`header`, `nav`, `section`, `label` + `input` eşleşmeleri vb.).
- Tasarıma **olabildiğince sadık** kalınmalı: renkler, boşluklar ve yerleşim.
- Font olarak **Gibson** (Book, Regular, Medium, SemiBold) kullanılmalı; yoksa **Arial** kabul ediliyor.
- Form sadece görsel amaçlı: gönderme veya validasyon **gerekmiyor**.
- Repoda yaklaşımınızı, varsayımlarınızı ve teknoloji seçimlerinizi anlatan kısa bir README olmalı.

### Değerlendirme

Ağırlıklı olarak HTML/CSS kalitesi, responsive davranış ve detaylara gösterilen özen değerlendiriliyor.

> ℹ️ Orijinal tasarım dosyası şirkete ait olduğu için repoya eklenmemiştir. Çözüm kodu tasarımın birebir uygulamasıdır; referans olarak kullanılabilir.

## 💡 Çözüm

- **Semantik yapı:** Üst alan için `header` ve `nav`, içerik için `main` ve `section`, ve `label` + `input` eşleşmeleri olan gerçek bir `<form>` (her input'un `id` ve `name` değeri var).
- Yerleşim için **CSS Grid** ve **Flexbox** kullanıldı.
- Mobil, tablet ve masaüstü kırılımlarında boşluk ve yerleşim ayarlandı. Mobilde menü ikonları gizleniyor, form tam genişliğe geçiyor.
- Gibson bulunmadığında Arial'a düşen bir font tanımı yapıldı.
- Görevde istendiği gibi form sadece görsel amaçlı; gönderildiğinde hiçbir şey yapmıyor.

## 🚀 Çalıştırma

Herhangi bir kurulum gerekmez. `index.html` dosyasını tarayıcıda açmanız yeterli.

VS Code kullanıyorsanız **Live Server** eklentisiyle de açabilirsiniz.

## 📁 Klasör yapısı

```
├── index.html
├── style.css
└── images/     # ikonlar ve logo
```
