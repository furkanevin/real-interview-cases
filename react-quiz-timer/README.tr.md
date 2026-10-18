# Süreli Quiz Uygulaması

[🇬🇧 English](./README.md) | 🇹🇷 Türkçe

> **Seviye:** Başlangıç · **Tahmini süre:** 1 gün · **Teknolojiler:** React 18, Vite, Tailwind CSS, Axios

> ℹ️ Bu case'in orijinal görev metni kaydedilmediği için aşağıdaki görev tanımı, çözüm kodu incelenerek yeniden yazılmıştır.

## 📋 Görev

Soruların sırayla ve **süreli** olarak gösterildiği bir quiz uygulaması geliştirin.

### Gereksinimler

- Sorular bir JSON kaynağından çekilmeli. Her soruda metin, 4 şık (A–D) ve doğru cevap bulunuyor.
- Ekranda aynı anda **tek bir soru** gösterilmeli.
- Her soru için bir **geri sayım sayacı** olmalı (ör. 30 saniye):
  - Sorunun ilk saniyelerinde şıklar **kilitli** olmalı; kullanıcı önce soruyu okumalı.
  - Süre bitince cevap verilmese bile otomatik olarak sonraki soruya geçilmeli.
- Kullanıcının seçtiği cevaplar kaydedilmeli.
- Quiz bitince her soru için **verilen cevap**, **doğru cevap** ve **doğru/yanlış** durumunu gösteren bir sonuç tablosu gösterilmeli.

## 💡 Çözüm

- Sorular `public/db.json` dosyasından `axios` ile çekiliyor.
- Sayaç `useEffect` içinde `setInterval` ile çalışıyor. Her soru değiştiğinde interval temizlenip yeniden kuruluyor (cleanup fonksiyonu sayesinde birden fazla sayaç çalışmıyor).
- Şıkların kilitli olup olmadığı kalan süreye göre hesaplanıyor (`disabled={timeLeft > ...}`).
- Süre bitince ya da cevap seçilince `handleNextQuestion` ile sonraki soruya geçiliyor; seçilen cevap `answers` dizisine ekleniyor.
- Son sorudan sonra `AnswerTable` bileşeni sonuçları tablo hâlinde gösteriyor.

## 🚀 Çalıştırma

```bash
npm install
npm run dev   # http://localhost:5173
```
