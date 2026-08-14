# Xen Labs

Advanced Frontiers & Multidisciplinary Research — statik tanıtım sayfası.

## Dosya yapısı

```
.
├── index.html          # Tek sayfa site
├── style.css           # Tüm stiller (design token'lar :root içinde)
├── script.js           # Header'daki canlı saat (opsiyonel, non-blocking)
├── logo-mark.png        # Navbar kalkan ikonu (şeffaf zemin)
├── favicon-16.png
├── favicon-32.png
├── favicon-180.png      # apple-touch-icon
├── og-image.png          # Sosyal paylaşım görseli (1200×630)
├── robots.txt
└── sitemap.xml
```

## Yerel önizleme

Ek bağımlılık yok. Klasörü bir statik sunucuyla aç:

```bash
npx serve .
# veya
python3 -m http.server 8000
```

`index.html`'i doğrudan çift tıklayarak da açabilirsin; tek risk `file://`
üzerinden bazı tarayıcıların Google Fonts isteğini engellemesi (CORS) —
bu durumda mono/display fontlar sistem fallback'ine düşer, site kırılmaz.

## Domain / meta notları

`index.html`, `robots.txt` ve `sitemap.xml` içinde `xenlabshq.xyz`
placeholder olarak geçiyor. Gerçek domain farklıysa üç dosyada da
bul-değiştir yap:

- `index.html`: `og:image`, `twitter:image`, `canonical`
- `robots.txt`: `Sitemap:` satırı
- `sitemap.xml`: `<loc>`

## Tasarım token'ları

Renk / tipografi / boşluk değişkenleri `style.css` en üstünde `:root`
içinde tanımlı — marka rengi veya font değiştirmek için tek yer orası.

## Erişilebilirlik / performans notları

- `prefers-reduced-motion` destekleniyor (boot animasyonu ve glitch
  efekti otomatik kapanır).
- Tüm interaktif elemanlarda `:focus-visible` outline var.
- Boot sekansı ve glitch başlık animasyonu saf CSS; JS'siz de çalışır.
- Canlı saat (`script.js`) dekoratif — yüklenmezse `00:00:00` placeholder
  kalır, sayfa işlevini etkilemez.
