# React + Flexbox ile Sıralı Veri Gösterimi

[🇬🇧 English](./README.md) | 🇹🇷 Türkçe

> **Seviye:** Başlangıç · **Tahmini süre:** 3–4 saat · **Teknolojiler:** React 18 (Create React App), CSS Flexbox, Axios

![Ekran görüntüsü](./screenshot.webp)

## 📋 Görev

Bir JSON dosyasındaki veriyi dönüştürüp sıralayan ve **Flexbox** ile hazırlanmış bir sayfada gösteren tek sayfalık bir React uygulaması geliştirin.

Verilen dosyalar [`case/`](./case) klasöründe:

| Dosya | Açıklama |
|---|---|
| [`testData.json`](./case/testData.json) | Spor dalı ve market bilgilerini içeren veri |
| [`mockup.png`](./case/mockup.png) | Sayfa yerleşimi: 1 = header, 2 = sol menü, 3 = veri kutuları |
| [`melon.svg`](./case/melon.svg) | Header'a eklenecek SVG görsel |

### Gereksinimler

1. `npx create-react-app` ile bir proje oluşturun.
2. `testData.json` verisini dönüştürün:
   - `sportName` değerlerini **küçük harfe** çevirin.
   - Diziyi `marketId` değerine göre **büyükten küçüğe** sıralayın.
3. `mockup.png`'deki yerleşimi arka plan renkleriyle birlikte **Flexbox** kullanarak kodlayın.
4. Sıralanmış veriyi "3" numaralı kutularda, tasarımı size kalmış şekilde gösterin.
5. **375px** genişlikten başlayan bir mobil görünüm hazırlayın:
   - Mobilde "3" numaralı kutuların sırası **sadece CSS ile** tersine dönmeli (`marketId` küçükten büyüğe).
   - Soldaki (2 numaralı) bölüm mobilde gizlenmeli.
6. Sayfanın herhangi bir yerinde en az bir **pseudo-element** (`::before` / `::after`) ve bir **pseudo-class** (`:hover` vb.) kullanın.
7. SVG görseli header'a ekleyin ve tüm **çekirdeklerin rengini maviye** çevirin.

## 💡 Çözüm

- Veri `public/testData.json`'dan `axios` ile çekiliyor, `map` ile düzleştirilip `sportName` küçük harfe çevriliyor ve `sort` ile `marketId`'ye göre azalan sıralanıyor.
- Mobilde ters sıralama için JavaScript kullanılmadı; `main` alanında `flex-direction: column-reverse` uygulandı.
- Pseudo-element olarak `::selection`, pseudo-class olarak `:nth-child(odd/even)` kullanıldı (kutuların sırayla renklenmesi için).
- SVG, CRA'nın `ReactComponent` import'u ile bileşen olarak eklendi; böylece çekirdeklerin rengi CSS'teki `fill: blue` ile değiştirilebiliyor.
- Veri yüklenirken bir loading animasyonu gösteriliyor.

## 🚀 Çalıştırma

```bash
npm install
npm start   # http://localhost:3000
```
