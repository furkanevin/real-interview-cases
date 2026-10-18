# Next.js + Auth0 Kimlik Doğrulama ve Yetkilendirme

[🇬🇧 English](./README.md) | 🇹🇷 Türkçe

> **Seviye:** Orta · **Tahmini süre:** 3–5 gün · **Teknolojiler:** Next.js 14+ (App Router), NextAuth.js, Auth0, JWT, TypeScript, Tailwind CSS, Jest

![Ekran görüntüsü](./screenshot.webp)

## 📋 Görev

Kullanıcıların **Auth0** üzerinden giriş yaptığı, oturumun **JWT** ile kontrol edildiği ve sayfa erişiminin **Next.js Middleware** ile kısıtlandığı bir kimlik doğrulama sistemi geliştirin. Proje **SOLID** prensiplerine ve **12 Factor App** ilkelerine uygun olmalı.

### Teknolojiler

- Next.js 14+ (App Router), TypeScript
- Auth0 (OAuth sağlayıcı) + NextAuth.js
- JWT tabanlı oturum
- Tailwind CSS (login sayfası)
- Yapılandırma `.env` ile yapılmalı (12 Factor)

### Adımlar

1. **GitHub reposu:** Public bir repo açın ve `dev/v1.0.0` branch'inde düzenli (saatlik/günlük) commit'lerle geliştirin.
2. **Auth0 kurulumu:** Auth0'da bir uygulama oluşturup callback URL'lerini ayarlayın.
3. **NextAuth entegrasyonu:** Auth0'ı NextAuth provider'ı olarak bağlayın.
4. **Middleware ile koruma:** Giriş yapmamış kullanıcıların korumalı sayfalara erişimini engelleyin.
5. **Kod kalitesi ve SOLID:** Sorumlulukları ayrılmış, okunabilir bir yapı kurun.
6. **12 Factor uyumu:** Tüm gizli bilgileri ortam değişkenlerinden okuyun.
7. **Test ve validasyon:** Temel bileşen ve sayfalar için test yazın.

### Bonus

- Rol bazlı yetkilendirme (`admin`, `user`)
- Docker yapılandırması
- İş bitince `prod/v1.0.0` branch'ine pull request açıp merge edin.
- Açıklayıcı commit mesajları kullanın.

## 💡 Çözüm

- NextAuth, `src/lib/auth.ts` içinde Auth0 provider'ı ve **JWT** oturum stratejisiyle yapılandırıldı. Route dosyası (`src/app/api/auth/[...nextauth]/route.ts`) sadece `GET` ve `POST` export ediyor; ayarları route dosyasından export etmek Next.js 15'te `next build`'i bozuyor.
- **Rol bazlı yetkilendirme (bonus):** `jwt` callback'i, virgülle ayrılmış `ADMIN_EMAILS` ortam değişkenine göre token'a bir `role` (`admin` veya `user`) ekliyor. `session` callback'i bunu `session.user.role` olarak sunuyor; tipi `src/types/next-auth.d.ts` içinde.
- `middleware.ts`, `withAuth` ile giriş yapmamış kullanıcıları tüm `/admin` rotalarında giriş sayfasına yönlendiriyor. Admin sayfası rolü sunucuda tekrar kontrol ediyor ve normal kullanıcılara "yetkiniz yok" mesajı gösteriyor.
- `SessionProvider` ve `AuthButton` bileşenleri ayrı tutuldu; giriş/çıkış mantığı tek yerde.
- Jest + React Testing Library ile sayfa ve bileşen testleri yazıldı.

### Sayfalar

| Rota | Açıklama |
|---|---|
| `/` | Ana sayfa, giriş yapan kullanıcıyı karşılar |
| `/admin` | Sadece `admin` rolündeki kullanıcılar |
| `/api/auth/signin` | NextAuth giriş sayfası |

## 🚀 Çalıştırma

Gereksinimler: Node.js 18+ ve ücretsiz bir [Auth0](https://auth0.com/) hesabı

```bash
npm install
cp .env.example .env.local   # Auth0 bilgilerinizi girin
npm run dev                  # http://localhost:3000
npm test
```

Auth0 panelinde **Allowed Callback URLs** alanına `http://localhost:3000/api/auth/callback/auth0` eklemeyi unutmayın.
