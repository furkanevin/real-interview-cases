# Okul Yönetim Sistemi (Full-Stack Skill Test)

> **Seviye:** Orta–İleri · **Teknolojiler:** React 18, TypeScript, MUI, Redux Toolkit, Node.js, Express, PostgreSQL

> [!CAUTION]
> **Bu case zararlı yazılım içeriyordu.** Lütfen önce [Güvenlik uyarısı](#️-güvenlik-uyarısı-sahte-mülakat-saldırısı) bölümünü okuyun.

## 📋 Görev

Öğrenci, personel, sınıf, duyuru ve izin işlemlerini yöneten hazır bir full-stack uygulama veriliyor. Adaydan pozisyonuna göre aşağıdaki problemlerden birini çözmesi isteniyor.

### Problem 1: Frontend
**"Yeni Duyuru Ekle" sayfasını düzeltin** (`/app/notices/add`)
- "Kaydet" butonuna basıldığında `description` alanı kaydedilmiyor.
- Alanın forma doğru bağlanıp API'ye gönderilmesi sağlanmalı.
- Ölçülen beceriler: React, form yönetimi, state, API entegrasyonu.

### Problem 2: Backend
**Öğrenci CRUD işlemlerini tamamlayın** (`backend/src/modules/students/students-controller.js`)
- Controller fonksiyonları boş. Listeleme, ekleme, detay, güncelleme ve durum değiştirme işlemleri yazılmalı.
- Servis katmanı (`students-service.js`) hazır; controller'dan doğru şekilde çağrılmalı.
- Ölçülen beceriler: Node.js, Express, PostgreSQL, API tasarımı, hata yönetimi.

### Problem 3: Blockchain
**Sertifika doğrulama sistemi**
- Öğrenci başarı sertifikaları için akıllı sözleşme yazılmalı.
- Frontend'e Web3 cüzdan bağlantısı eklenmeli.
- Sertifika metadata'sı IPFS'te tutulmalı.

## 🛡️ Güvenlik uyarısı: sahte mülakat saldırısı

Bu proje, son yıllarda yazılımcıları hedef alan **"sahte iş mülakatı"** saldırılarının tipik bir örneği. Orijinal kodda şu yapı vardı:

1. `backend/src/modules/departments/department-module.js` dosyası, sunucu **başlar başlamaz** (`require` edildiği anda) uzak bir adrese istek atıyordu.
2. Sunucu bilerek **hata** döndürüyor ve hata mesajının içine JavaScript kodu koyuyordu.
3. `backend/src/utils/apiErrorHandler.js` adlı, "hata yönetimi" gibi görünen dosya bu metni `new Function.constructor("require", kod)` ile **çalıştırıyordu**.

Sonuç: Sadece `npm start` yazmak, saldırgana bilgisayarınızda tam yetkiyle (`require` → dosya sistemi, ağ, `child_process`) kod çalıştırma imkânı veriyordu. Bu tür kodlar genellikle tarayıcıdaki kripto cüzdanlarını, kayıtlı şifreleri ve SSH anahtarlarını çalar.

**Bu repodaki versiyonda zararlı kod kaldırılmıştır.** Uygulamanın geri kalanı aynı şekilde çalışır.

### Kendinizi nasıl korursunuz?

- Size gönderilen projeyi **çalıştırmadan önce** okuyun. Özellikle `eval`, `new Function`, `Function.constructor`, `child_process` ve `require` anında çalışan kodlara bakın.
- `package.json` içindeki `preinstall`/`postinstall` script'lerini kontrol edin.
- Kodda sabit yazılmış (hard-coded) ve konusuyla alakasız URL'ler (ör. `*.vercel.app`) ve "secret" header'lar şüphelidir.
- Mümkünse case'leri bir **sanal makine veya container** içinde çalıştırın.
- "Kripto", "blockchain", "Web3" konulu ve aceleye getiren mülakat süreçlerinde ekstra dikkatli olun.

## 🚀 Çalıştırma

Gereksinimler: Node.js 16+, PostgreSQL 12+

```bash
# Veritabanı
createdb school_mgmt
psql -d school_mgmt -f seed_db/tables.sql
psql -d school_mgmt -f seed_db/seed-db.sql

# Backend (http://localhost:5007)
cd backend
npm install
cp .env.example .env
npm start

# Frontend (http://localhost:5173)
cd frontend
npm install
cp .env.example .env
npm run dev
```

Demo giriş bilgileri: `admin@school-admin.com` / `3OU4zn3q6Zh9`

## 📁 Klasör yapısı

```
├── frontend/   # React + TypeScript + MUI + Redux Toolkit (RTK Query)
├── backend/    # Node.js + Express + PostgreSQL (JWT, CSRF, Argon2)
└── seed_db/    # Veritabanı şeması ve örnek veriler
```

Detaylı dokümantasyon: [`frontend/README.md`](./frontend/README.md), [`backend/README.md`](./backend/README.md), [`seed_db/README.md`](./seed_db/README.md)

## 💡 Çözüm

Bu klasörde case'in **verilen hâli** bulunuyor. Problemler henüz çözülmedi, alıştırma olarak kullanılabilir.
