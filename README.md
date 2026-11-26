# Jurnal web sitesi

Statik site (HTML + CSS + küçük bir JS), derleme yok, harici istek yok.

- `index.html`, `privacy.html` — Türkçe; `en/` — İngilizce
- Ekran görüntüleri: `assets/screens/` (Türkçe) ve `assets/screens/en/` (İngilizce); adlar `desktop-home`, `desktop-editor`, `desktop-board`, `desktop-library`, `desktop-lock` (16:10), `mobile-home` (9:19.5), hepsi `.png`. Elle değiştirme: uygulama deposunda `npm run web:screens -- --push` hepsini yeniden çekip yayınlar.
- Google Play bağlantısı hazır olunca `index.html` ve `en/index.html` içindeki devre dışı düğmenin `href`'ini güncelle ve `aria-disabled` özniteliğini kaldır.
- Yayın: GitHub Pages (Settings → Pages → main / root)
