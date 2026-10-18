# Covid-19 Dünya Haritası

> **Seviye:** Orta · **Tahmini süre:** 2–3 gün · **Teknolojiler:** React 18, Vite, Redux, Redux-Saga, React Router, Tailwind CSS, Vitest, React Testing Library

> ℹ️ Bu case'in orijinal görev metni kaydedilmediği için aşağıdaki görev tanımı, çözüm kodu incelenerek yeniden yazılmıştır.

## 📋 Görev

Ülkelerin Covid-19 istatistiklerini interaktif bir **dünya haritası** üzerinden gösteren bir uygulama geliştirin. State yönetimi için **Redux + Redux-Saga** kullanılmalı ve uygulama **test** edilmeli.

### Gereksinimler

- **Ana sayfa:** Tıklanabilir bir dünya haritası. Bir ülkeye tıklanınca o ülkenin detay sayfasına gidilmeli.
- **Arama:** Navbar'daki arama kutusuna ülke adı yazılarak da detay sayfasına gidilebilmeli.
- **Detay sayfası (`/detail?country=`):** Ülkenin bayrağı ve onaylanmış vaka, ölüm, iyileşen, aktif vaka gibi istatistikler.
- Veri çekme işlemleri **Redux-Saga** ile yönetilmeli.
- Yükleme ve hata durumları kullanıcıya gösterilmeli.
- Büyük sayılar okunabilir şekilde kısaltılmalı (ör. `1.2M`).
- Detay sayfası için **Vitest + React Testing Library** ile testler yazılmalı (yükleniyor, hata ve veri durumları).

### API'ler

- İstatistikler: [Covid-19 Statistics (RapidAPI)](https://rapidapi.com/axisbits-axisbits-default/api/covid-19-statistics), `GET /reports?q={ülke}`
- Bayraklar: [REST Countries](https://restcountries.com/), `GET /v3.1/name/{ülke}`

## 💡 Çözüm

- Harita için `@react-map/world` kullanıldı; `onSelect` ile seçilen ülke URL parametresi olarak detay sayfasına taşınıyor.
- `redux/sagas/statisticsSaga.js`, istatistik ve bayrak isteklerini tek bir akışta yapıp sonucu reducer'a gönderiyor.
- API istekleri `src/service` ve `src/utils/api.js` içinde. RapidAPI anahtarı ortam değişkeninden okunuyor.
- `DetailPage.test.jsx` içinde `redux-mock-store` ile store taklit edilerek yükleniyor, hata ve başarılı veri durumları test ediliyor.

## 🚀 Çalıştırma

Gereksinim: ücretsiz bir [RapidAPI](https://rapidapi.com/) hesabı ve Covid-19 Statistics API aboneliği

```bash
npm install
cp .env.example .env   # VITE_RAPIDAPI_KEY değerini girin
npm run dev            # http://localhost:5173
npm test               # Vitest
```
