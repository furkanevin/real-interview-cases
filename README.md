# Gerçek İş Başvurusu Case'leri

Bu repo, iş başvurularında şirketlerden gelen **gerçek teknik case'leri** ve çözümlerini içeriyor. Amaç, mülakat sürecinde karşınıza çıkabilecek görev türlerini önceden görmeniz ve pratik yapmanız.

> Şirket isimleri, logoları ve iletişim bilgileri gizlilik nedeniyle kaldırılmıştır. Görev metinleri orijinallerinden yola çıkılarak yeniden yazılmıştır.

## 📚 Case listesi

### 🟢 Başlangıç

| Case                                                           | Konu                                           | Teknolojiler    |
| -------------------------------------------------------------- | ---------------------------------------------- | --------------- |
| [html-css-signup-landing-page](./html-css-signup-landing-page) | Figma tasarımından kayıt sayfası               | HTML, CSS       |
| [react-flexbox-sorted-data](./react-flexbox-sorted-data)       | JSON veriyi sıralayıp Flexbox ile gösterme     | React, CSS      |
| [react-quiz-timer](./react-quiz-timer)                         | Süreli quiz ve sonuç tablosu                   | React, Tailwind |
| [react-campaign-shop-ui](./react-campaign-shop-ui)             | 3 sayfalık kampanya / puanlı alışveriş arayüzü | React, Tailwind |
| [react-weather-app](./react-weather-app)                       | Hava durumu paneli arayüzü                     | React, SCSS     |

### 🟡 Başlangıç–Orta

| Case                                                               | Konu                                      | Teknolojiler       |
| ------------------------------------------------------------------ | ----------------------------------------- | ------------------ |
| [javascript-stock-customer-crud](./javascript-stock-customer-crud) | Stok ve müşteri CRUD işlemleri            | Vanilla JS, Axios  |
| [react-real-estate-filter](./react-real-estate-filter)             | URL parametreleriyle emlak filtreleme     | React, Context API |
| [react-redux-query-ecommerce](./react-redux-query-ecommerce)       | Ürün listesi ve sepet                     | React, RTK Query   |
| [react-news-stock-dashboard](./react-news-stock-dashboard)         | Finans haberleri ve hisse arama           | React, json-server |
| [next-scss-ecommerce](./next-scss-ecommerce)                       | Kategori, ürün detay ve sepet             | Next.js, SCSS      |
| [next-crypto-exchange-landing](./next-crypto-exchange-landing)     | Kripto borsası ana sayfa klonu            | Next.js, Tailwind  |
| [next-recipe-finder](./next-recipe-finder)                         | SSR, önbellek ve Suspense ile tarif arama | Next.js, Tailwind  |

### 🟠 Orta

| Case                                                                       | Konu                                     | Teknolojiler                     |
| -------------------------------------------------------------------------- | ---------------------------------------- | -------------------------------- |
| [react-covid-map](./react-covid-map)                                       | Dünya haritası, Redux-Saga ve testler    | React, Redux-Saga, Vitest        |
| [react-movie-list](./react-movie-list)                                     | Film rehberi ve favoriler                | React, TypeScript, RTK Query     |
| [react-university-list-filter-login](./react-university-list-filter-login) | Filtreleme, sıralama, sayfalama ve giriş | React, json-server               |
| [react-saas-admin-dashboard](./react-saas-admin-dashboard)                 | Animasyonlu admin paneli                 | React, TypeScript, MUI, Recharts |
| [next-tailwind-travel-filter](./next-tailwind-travel-filter)               | Kategori bazlı filtre popup'ı            | Next.js, TypeScript, Tailwind    |
| [next-mui-learning-dashboard](./next-mui-learning-dashboard)               | Template repo üzerinden dashboard        | Next.js, MUI, Jest, Cypress      |
| [next-auth0-authentication](./next-auth0-authentication)                   | OAuth, JWT ve middleware ile koruma      | Next.js, NextAuth, Auth0         |

### 🔴 Orta–İleri / İleri

| Case                                                                   | Konu                                       | Teknolojiler                  |
| ---------------------------------------------------------------------- | ------------------------------------------ | ----------------------------- |
| [next-i18n-seo-ecommerce](./next-i18n-seo-ecommerce)                   | Çok dilli, SEO ve performans odaklı mağaza | Next.js, next-intl, RTK       |
| [react-ide-existing-project](./react-ide-existing-project)             | Büyük bir açık kaynak projede geliştirme   | React, MUI, Jest              |
| [fullstack-school-management](./fullstack-school-management)           | Hazır projede bug fix ve CRUD ⚠️           | React, Node.js, PostgreSQL    |
| [next-microfrontend-ecommerce](./next-microfrontend-ecommerce)         | İki ayrı uygulama, ortak sepet             | Next.js, Docker               |
| [backend-airport-stand-allocation](./backend-airport-stand-allocation) | Domain kuralları, bug fix ve yeni endpoint | Bun, TypeScript, PostgreSQL   |
| [react-native-article-feed](./react-native-article-feed)               | Biyometrik kilit, offline kayıt, CI/CD     | React Native, TypeScript, RTK |

## 🧭 Nasıl çalışmalı?

1. Case'in klasörüne girip **README.md**'deki **Görev** bölümünü okuyun.
2. Çözüme bakmadan önce kendiniz yapmayı deneyin. Süreyi tutun; README'deki tahmini süre fikir verir.
3. Takıldığınızda veya bitirdiğinizde **Çözüm** bölümüne ve koda bakarak kendi çözümünüzle karşılaştırın.
4. Her README'de projeyi çalıştırma adımları var. API key gereken projelerde `.env.example` dosyasını kopyalayıp kendi key'inizi girin.

## ⚠️ Güvenlik uyarısı

Size gönderilen hazır projeleri **çalıştırmadan önce mutlaka okuyun.** [fullstack-school-management](./fullstack-school-management) case'i, adayın bilgisayarında uzaktan kod çalıştıran bir zararlı yazılım içeriyordu (bu repoda temizlendi). Nasıl fark edileceği o klasörün README'sinde anlatılıyor.

## 📁 Her case'in yapısı

Tüm case'lerin README dosyası aynı şablonu takip ediyor:

- **Seviye / süre / teknolojiler** özeti
- **📋 Görev:** Şirketin istediği her şey
- **💡 Çözüm:** Nasıl yapıldığı ve önemli kararlar
- **🚀 Çalıştırma:** Kurulum komutları
