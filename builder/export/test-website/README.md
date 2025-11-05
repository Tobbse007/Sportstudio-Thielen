# test-website

Website erstellt mit dem Website Builder am 04.11.2025

## 📁 Struktur

```
test-website/
├── index.html              # Hauptseite
├── assets/
│   ├── css/
│   │   └── custom.css     # Eigene Styles
│   ├── js/
│   │   └── scripts.js     # Eigene Scripts
│   ├── images/            # Bilder hier ablegen
│   └── fonts/             # Custom Fonts (optional)
├── pages/                 # Weitere Seiten
└── README.md
```

## 🚀 Deployment

### Lokal testen

Öffne einfach `index.html` im Browser!

### Auf Server hochladen

**Via FTP:**
1. FTP-Client öffnen (z.B. FileZilla)
2. Mit Server verbinden
3. Alle Dateien nach `/public_html/` hochladen

**Via Git:**
```bash
git add .
git commit -m "Website update"
git push
```

## 🛠️ Anpassungen

### Farben ändern

In `assets/css/custom.css`:
```css
:root {
  --primary-color: #dc2626;
  --secondary-color: #1f2937;
  --accent-color: #f59e0b;
}
```

### Bilder hinzufügen

1. Bilder in `assets/images/` ablegen
2. In HTML referenzieren: `<img src="assets/images/bild.jpg">`

### Weitere Seiten erstellen

1. Neue HTML-Datei in `pages/` erstellen
2. Von `index.html` kopieren und anpassen
3. Navigation verlinken: `<a href="pages/kontakt.html">Kontakt</a>`

## 📦 Technologie

- **Tailwind CSS** (CDN) - Utility-First CSS Framework
- **Font Awesome** (CDN) - Icons
- **Vanilla JavaScript** - Interaktionen
- **Responsive Design** - Mobile-First

## 📞 Support

Bei Fragen zum Builder: Siehe `builder/BUILDER_DOKUMENTATION.md`

---

Erstellt am: 04.11.2025 um 08:55 Uhr
