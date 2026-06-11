# Kontribusi Islam terhadap Ilmu Pengetahuan Modern

Website edukasi tentang kontribusi Islam dalam ilmu pengetahuan modern.
Dibuat untuk Universitas Sebelas Maret (UNS), Surakarta.

## Demo
Buka `index.html` di browser, atau hosting lewat GitHub Pages.

## Struktur Project

```
kontribusi-islam/
├── index.html
├── css/
│   ├── style.css       ← global tokens & reset
│   ├── navbar.css      ← navbar (Flexbox)
│   ├── hero.css        ← hero + icon bar (Flexbox + Grid)
│   ├── sections.css    ← section lain (coming soon)
│   └── responsive.css  ← breakpoints
├── js/
│   ├── navbar.js       ← hamburger, active link, scroll shadow
│   └── main.js         ← smooth scroll, scroll reveal
└── assets/
    ├── images/
    └── icons/
```

## Status Implementasi

- [x] Navbar (desktop + mobile hamburger)
- [x] Hero Section
- [x] Icon Bar (4 navigasi cepat)
- [ ] Masa Keemasan
- [ ] Tokoh Ilmuan
- [ ] Bidang Ilmu
- [ ] Dampak Modern

## Deploy ke GitHub Pages

1. Push folder ini ke repository GitHub
2. Buka Settings → Pages
3. Set source: **Deploy from a branch** → `main` → `/ (root)`
4. Akses di `https://<username>.github.io/<repo-name>/`

## Teknologi

- HTML5 Semantic
- CSS3 (Flexbox + Grid, Custom Properties)
- Vanilla JavaScript (ES6+, IntersectionObserver)
- Google Fonts: Poppins
