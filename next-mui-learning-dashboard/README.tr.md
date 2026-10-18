# Eğitim Platformu Dashboard'u (Next.js + MUI)

[🇬🇧 English](./README.md) | 🇹🇷 Türkçe

> **Seviye:** Orta · **Tahmini süre:** 3–5 gün · **Teknolojiler:** Next.js (Pages Router), React, TypeScript, Material UI (MUI), Jest, React Testing Library, Cypress

![Ekran görüntüsü](./screenshot.webp)

## 📋 Görev

Bir sınav hazırlık / eğitim platformu için verilen **Figma tasarımına benzer** bir web uygulaması geliştirin. Şirket, başlangıç noktası olarak içinde Next.js, MUI, ESLint, Prettier, Jest ve Cypress kurulu hazır bir **template repo** veriyor. Tasarım referans niteliğinde; küçük değişiklikler ve ek özellikler serbest, ama temel özellikler aynı olmalı.

### Gereksinimler

- Verilen template repoyu fork'layarak başlayın.
- UI kütüphanesi olarak **MUI (Material UI)** kullanın.
- Sadece **fonksiyonel bileşenler ve hook'lar** (class component yok).
- Tekrar kullanılabilir bileşenler için **React Composition Pattern** uygulayın.
- İkonlar için Material Design Icons kullanılabilir.
- **Ekstra:** Jest + React Testing Library ile unit test, Cypress ile E2E test (E2E önerilir ama zorunlu değil).
- Bitince repo linkini e-posta ile gönderin.

### Sayfalar

- **Ana sayfa:** Proje listesi tablosu (ilerleme çubuklarıyla), ders kartları (Matematik, Kimya, Fizik, Biyoloji) ve konu bazlı başarı tablosu.
- **Paketler (`/packages`):** Abonelik paketlerinin kartlar hâlinde listelendiği sayfa.

## 💡 Çözüm

- Sayfa bölümleri ayrı bileşenlere bölündü: `ProjectList`, `LessonCards`, `SecondTable`, `PackageCard`, `ProgressWithLabel`.
- Statik veriler `src/constants` altında tutuluyor; bileşenler `map` ile render ediliyor.
- Responsive davranış MUI breakpoint'leri (`theme.breakpoints`) ve `styled` API ile sağlandı.
- Tema ve layout ayarları `src/configs/themeConfig.ts` ve `src/layouts` altında.

## 🚀 Çalıştırma

```bash
npm install --global yarn@1.22.10   # yoksa
yarn
yarn dev        # http://localhost:3030
```

### Testler

```bash
yarn test:watch   # Jest unit testleri
yarn e2e          # Cypress E2E testleri
```

Unit test dosyaları test edilen dosyanın yanına `.test.tsx` uzantısıyla, E2E testleri ise `cypress/e2e/` altına aynı klasör yapısıyla yazılır.
