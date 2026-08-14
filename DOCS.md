# Site — development notes

Source for [xenlabshq.xyz](https://xenlabshq.xyz), deployed automatically via GitHub Actions on every push to `main`.

## File structure

```
.
├── index.html          # Single-page site
├── style.css           # All styles (design tokens in :root)
├── script.js           # Header live clock (optional, non-blocking)
├── logo-mark.png        # Navbar shield icon (transparent background)
├── favicon-16.png
├── favicon-32.png
├── favicon-180.png      # apple-touch-icon
├── og-image.png          # Social share image (1200×630)
├── robots.txt
└── sitemap.xml
```

## Local preview

No build step. Serve the folder statically:

```bash
npx serve .
# or
python3 -m http.server 8000
```

Opening `index.html` directly also works; the only risk is some browsers
blocking the Google Fonts request over `file://` (CORS) — mono/display
fonts fall back to system fonts in that case, the page itself still works.

## Domain / meta notes

`xenlabshq.xyz` appears in `index.html`, `robots.txt`, and `sitemap.xml`.
If the domain changes, update all three:

- `index.html`: `og:image`, `twitter:image`, `canonical`
- `robots.txt`: `Sitemap:` line
- `sitemap.xml`: `<loc>`

## Design tokens

Color / typography / spacing variables live at the top of `style.css`
inside `:root` — the single place to change brand color or fonts.

## Accessibility / performance notes

- `prefers-reduced-motion` is respected (boot animation and glitch
  effect are disabled automatically).
- All interactive elements have a `:focus-visible` outline.
- The boot sequence and glitch title animation are pure CSS; they work
  without JS.
- The live clock (`script.js`) is decorative — if it fails to load, the
  `00:00:00` placeholder stays and the page is unaffected.
