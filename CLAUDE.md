# Olivia Gourmet Restaurant — QR Menu

## URL'ler
- **Müşteri menüsü:** https://oliviagourmetalanya.github.io/
- **Yönetim paneli:** https://oliviagourmetalanya.github.io/admin.html
- **QR oluşturucu:** https://oliviagourmetalanya.github.io/qr.html
- **GitHub repo:** https://github.com/oliviagourmetalanya/oliviagourmetalanya.github.io

## Mimari özet
- Static site, GitHub Pages
- Vanilla HTML/CSS/JS (framework yok)
- 8 dil: tr / en / sv / no / da / fi / ru / de — `js/i18n.js` (UI strings) + her item'ın `translations` alanı
- 3 menü: food / drinks / wines — `js/menu.js` içinde `window.MENU` olarak
- Restoran ayarları: `js/config.js` → ad, wifi, sosyal medya, currency, logo
- Admin: localStorage'a draft kaydeder, Dışa Aktar `menu.js` + `config.js` indirir
- Cache-busting: tüm JS/CSS `?t=Date.now()` ile yüklenir
- Lazy image: IntersectionObserver, scroll'a göre yükler
- Categories pill: custom inset scrollbar (native gizli, JS thumb)

## Görsel stratejisi
- Yemek görselleri **ayrı dosyalar** olarak `images/menu/` içinde (base64 GÖMÜLÜ DEĞİL — menu.js şişmez)
- Logo: önce `CONFIG.logo`, yoksa `images/logo.png`, o da yoksa varsayılan SVG
- `extract-images.js` script'i: admin export'tan gömülü kalmış görselleri ayıklar (gerekirse `node extract-images.js`)

## Düzenleme iş akışı
Kullanıcı **menü/fiyat/içerik** değişikliklerini web admin'den yapar:
1. admin.html aç → **⟳ Yeniden Yükle** (canlıdan en güncel veriyi çek)
2. Düzenle
3. **⬇ Dışa Aktar** → `menu.js` ve `config.js` iner
4. GitHub'a yükle (drag-drop, `js/` klasörüne)
5. 1-2 dk → canlı güncel

**Tasarım/özellik** değişiklikleri Claude'a yazar (ben).

## Yapılacaklar listesi
- [ ] **Tatlı / Dondurma menüsü** ekle (4. ana kategori)
- [ ] **Çocuk menüsü** ekle (5. ana kategori)
- [ ] Her iki yeni menü için **8 dile çeviri** (TR kaynak, EN+SV+NO+DA+FI+RU+DE)
- [ ] Kullanıcı yarın yemek görsellerini yükleyecek — sorun olursa yazacak
- [ ] (İsteğe bağlı) Admin export'unu güncelle: base64 görselleri otomatik dosyaya çıkarsın (menu.js şişmesin)

## Tasarım kararları
- Renk: koyu zemin + altın aksanlar (`#c9a96e` ailesi) + body'de yeşil gradient
- Tipografi: Cormorant Garamond (başlık/dekoratif) + Inter (gövde)
- Logo + tagline yapısı: büyük logo, altta "Olivia Gourmet Restaurant" + italik "Menu"
- Dil dropdown sağ üstte (8 dil)
- Mobile-first
- Wines: kırmızı/beyaz/roze/köpüklü/yarı tatlı ayrımı korunur
- Import drinks: tek kategori altında alt-bölümler (Rums / Vodka & Gin / Vermouth & Bitter / Liqueurs / Shots / Cognac & Brandy)
- Drinks: alkollü/alkolsüz toggle filtresi
- Item names orijinal (özel isim); descriptions çevriliyor

## Geliştirici bilgisi
- Git config (sadece bu repo): `Olivia Gourmet Alanya` / `oliviagourmetalanya@gmail.com`
- Push yapan: `srhtkizilkaya` (collaborator olarak eklenmiş)
- Sahibi: `oliviagourmetalanya` GitHub hesabı
- Node.js kurulu (scriptler için)

## Önemli buglar/dikkat
- Admin'de "Yeniden Yükle" sadece BAŞTA bir kere — iş ortasında basarsa taslak silinir
- Logo'nun küçük PNG'si admin canvas'ında re-encode olmasın diye `resizeLogoImage` boyut karşılaştırması yapar (canvas çıktısı orijinalden büyükse orijinali tutar)
- Cache-bust HTML'de değil, JS/CSS link'lerinde — HTML değişikliği için ~10 dk GitHub Pages cache'i bekler
