# Havalimanı Park Yeri (Stand) Tahsis Servisi

[🇬🇧 English](./README.md) | 🇹🇷 Türkçe

> **Seviye:** İleri · **Tahmini süre:** 6–10 saat · **Teknolojiler:** Node.js, TypeScript, Bun, PostgreSQL, Drizzle ORM, Vitest, Docker

## 📋 Görev

Bir havalimanının yer operasyonları ekibi için yazılmış, yarım kalmış bir Node/TypeScript servisini devralıyorsunuz. Servisin amacı, uçakların park yerlerine (**stand**) çakışmadan yerleştirilmesini sağlamak. Görev üç parçadan oluşuyor:

1. **Hatayı düzeltin:** Test paketinde başarısız olan testleri geçirin.
2. **Eksik endpoint'i yazın:** `POST /flights/check-allocation`
3. **Kararlarınızı yazın:** `DECISIONS.md` dosyasındaki dört soruyu kısa ve savunulabilir şekilde cevaplayın.

> Havacılık terimlerine yabancıysanız önce [`given-case/GLOSSARY.md`](./given-case/GLOSSARY.md) dosyasını okuyun. Stand, MARS stand, block time gibi tüm kavramlar orada görsellerle anlatılıyor.

### Domain kuralları

1. Bir uçuş, atandığı standı `[blockStart, blockEnd)` yarı açık aralığında işgal eder. Arka arkaya gelen uçuşlar (biri `T`'de bitip diğeri `T`'de başlıyorsa) **çakışmaz**.
2. **MARS stand'ler:** Bazı stand'lerin bir ebeveyni (parent) ve iki alt stand'i vardır. Ebeveyn bir geniş gövdeli uçak, alt stand'lerin her biri bir dar gövdeli uçak alır. Ebeveyn ile alt stand'leri aynı anda kullanılamaz (`stands.parent_stand_id`).
3. **Çekme (towing) uçuşları** (`flightType = 'towing'`) da standı işgal eder ve çakışma kontrolüne dahil edilmelidir.
4. **Soft-delete edilmiş uçuşlar** (`deletedAt IS NOT NULL`) dikkate alınmamalıdır.
5. **Stand kapatmaları** (`stand_unavailability` tablosu, ör. bakım) standı `[start_at, end_at)` aralığında kullanılamaz yapar ve çakışma olarak döndürülmelidir.
6. API'deki tüm zamanlar `Asia/Singapore` (UTC+8) saat dilimindedir; veritabanı UTC tutar.

### Görev 1: Başarısız testler

`bun run test` çalıştırıldığında `findConflicts` fonksiyonunda iki test başarısız oluyor:

- Arka arkaya uçuşlar (`10:00–11:00` ve `11:00–12:00`) çakışma olarak görülüyor.
- Soft-delete edilmiş uçuşlar hâlâ sonuçlarda dönüyor.

### Görev 2: Endpoint

```
POST /flights/check-allocation
Body:   { "standId": string, "blockStart": ISO-8601, "blockEnd": ISO-8601, "excludeFlightId"?: string }
200 OK: { "flightConflicts": Flight[], "unavailabilities": StandUnavailability[] }
```

Endpoint, yukarıdaki altı kuralın hepsine uymalı. Davranışı kapsayan testler de yazılmalı.

### Değerlendirme kriterleri

1. Testlerin hepsi geçiyor mu?
2. Endpoint, gözden kaçması kolay olanlar dahil tüm kuralları karşılıyor mu?
3. Kodun dayandığı durumlar için test eklenmiş mi?
4. `DECISIONS.md` cevapları dürüst ve savunulabilir mi?
5. Kod kalitesi: okunabilirlik, isimlendirme, tip güvenliği. Gereksiz karmaşıklık ödüllendirilmiyor.

## 📁 Klasör yapısı

| Klasör | İçerik |
|---|---|
| [`given-case/`](./given-case) | Adaya verilen başlangıç projesi (hatalı ve eksik hâli) |
| [`solved-case/`](./solved-case) | Çözülmüş hâli: düzeltilen testler, yeni endpoint, doldurulmuş `DECISIONS.md` |
| [`solved-case/_INTERVIEW_NOTES.md`](./solved-case/_INTERVIEW_NOTES.md) | Mülakata hazırlık notları: bug'ın tam nedeni ve olası sorular |

## 💡 Çözüm

- **Bug 1:** Çakışma kontrolü kapalı aralık (`lte`) ile yapılıyordu. Yarı açık aralığa (`lt`) çevrilerek arka arkaya uçuşların çakışması engellendi.
- **Bug 2:** Soft-delete edilmiş kayıtlar dönüyordu. Her sorguya tek tek `isNull` eklemek yerine yalnızca aktif uçuşları gösteren bir **view** kullanıldı.
- **Endpoint:** `findConflicts`'i genişletmek yerine ayrı bir `findAllocationConflicts` yazıldı. MARS ebeveyn/alt stand ilişkisi, towing uçuşları ve stand kapatmaları birlikte kontrol ediliyor; sonuç uçuş çakışmaları ve kapatmalar olarak ayrı listelerde dönüyor.
- Tüm tasarım kararlarının gerekçesi [`solved-case/DECISIONS.md`](./solved-case/DECISIONS.md) dosyasında.

## 🚀 Çalıştırma

Gereksinimler: **Bun ≥ 1.0** ve **Docker**

```bash
cd solved-case            # veya given-case
docker compose up -d      # Postgres'i :55432 portunda başlatır
cp .env.example .env
bun install
bun run db:push           # şemayı uygular
bun run test
bun run db:seed           # demo verisi
bun run dev               # sunucu :8080 portunda
```
