# Mevcut Bir Projede Geliştirme: Web Tabanlı IDE

> **Seviye:** Orta–İleri · **Tahmini süre:** 2–4 gün · **Teknolojiler:** React 18, Vite, Material UI, Monaco Editor, React Flow, Jest, Cypress

> ℹ️ Bu case'in orijinal görev metni kaydedilmediği için aşağıdaki görev tanımı, çözüm kodu incelenerek yeniden yazılmıştır.

## 📋 Görev

Bu case diğerlerinden farklı: sıfırdan proje yazmak yerine **büyük ve gerçek bir açık kaynak kod tabanına** dahil olup üzerinde geliştirme yapmanız isteniyor. Proje, low-code backend geliştirmek için kullanılan web tabanlı bir IDE ([Nucleoid IDE](https://github.com/NucleoidAI/IDE), Apache-2.0 lisanslı).

Gerçek işe girişte en sık karşılaşılan durum budur: başkasının yazdığı, yüzlerce dosyalı bir projeyi okuyup anlamak ve mevcut yapıyı bozmadan değişiklik yapmak.

### Beklenenler

- Projeyi yerelde ayağa kaldırın ve klasör yapısını, state yönetimini, bileşen mimarisini inceleyin.
- İstenen özelliği ya da düzeltmeyi **mevcut kod stiline ve mimariye uygun** şekilde ekleyin.
- Yardımcı fonksiyonlar (`src/utils`) için **Jest** ile birim testleri yazın.
- Mevcut lint, test ve CI kurallarını bozmayın.

### Neye dikkat edilir?

- Var olan bileşenleri ve yardımcı fonksiyonları yeniden kullanmak, aynısını tekrar yazmamak
- Küçük ve odaklı değişiklikler (gereksiz refactor yapmamak)
- Anlamlı commit mesajları

## 💡 Çözüm

- `src/utils/test/` altında `DeepCopy`, `Map` ve `Path` yardımcı fonksiyonları için Jest testleri bulunuyor. Örneğin `DeepCopy` testi, kopyalanan nesnenin orijinalden bağımsız olduğunu (iç içe alanlar değiştirildiğinde kopyanın etkilenmediğini) doğruluyor.
- Arayüz değişiklikleri MUI bileşenleri ve projenin kendi widget yapısı (`src/widgets`, `src/components`) kullanılarak yapıldı.

## 🚀 Çalıştırma

```bash
npm install
cp .env.example .env
npm run dev   # Vite geliştirme sunucusu
npm test      # Jest testleri
```

## 📄 Lisans

Bu klasördeki kod, orijinal projenin [Apache License 2.0](./LICENSE) lisansı altındadır.
