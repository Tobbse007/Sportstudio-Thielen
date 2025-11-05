# 🚀 Quick Start Guide - Website Builder

## In 5 Minuten zur fertigen Website!

### Schritt 1: Export-Ordner erstellen ⚡

```bash
cd /workspaces/Sportstudio-Thielen
./builder/export-website.sh sportstudio-website
```

Das erstellt automatisch:
```
builder/export/sportstudio-website/
├── index.html (wird später vom Builder gefüllt)
├── assets/
│   ├── css/custom.css       ✅ Fertig!
│   ├── js/scripts.js        ✅ Fertig!
│   └── images/              📁 Hier Bilder ablegen
├── README.md                ✅ Fertig!
└── deploy.sh                ✅ Fertig!
```

### Schritt 2: Builder öffnen 🎨

```bash
# Option A: VS Code Live Server
# Rechtsklick auf builder/index.html → "Open with Live Server"

# Option B: Direkt im Browser
open builder/index.html
```

### Schritt 3: Website zusammenstellen 🏗️

1. **Sections hinzufügen**
   - Klick auf "Sections"
   - Wähle Sections aus (z.B. Navigation → Hero → Features → Footer)
   - Per Drag & Drop sortieren

2. **Texte bearbeiten**
   - Einfach auf Texte klicken und lostippen!

3. **Farben anpassen**
   - Klick auf "Globale Styles"
   - Farben, Abstände, Schriftart ändern
   - Alle Sections passen sich automatisch an

### Schritt 4: Website exportieren 📦

1. Klick auf **"Website erstellen"**
2. `index.html` wird heruntergeladen
3. Verschiebe sie nach `builder/export/sportstudio-website/`

```bash
mv ~/Downloads/index.html builder/export/sportstudio-website/
```

### Schritt 5: Bilder hinzufügen 🖼️

```bash
# Bilder in den Export-Ordner kopieren
cp /pfad/zu/deinen/bildern/* builder/export/sportstudio-website/assets/images/
```

**Dann in `index.html` die Platzhalter-URLs ersetzen:**
```html
<!-- Vorher -->
<img src="https://images.unsplash.com/...">

<!-- Nachher -->
<img src="assets/images/gym-bild-1.jpg">
```

### Schritt 6: Testen 🧪

```bash
# Öffne die fertige Website
open builder/export/sportstudio-website/index.html
```

### Schritt 7: Online stellen 🌐

**Option A: Via FTP**
```bash
# Mit FileZilla oder ähnlichem
# Alle Dateien aus builder/export/sportstudio-website/
# nach /public_html/ auf deinem Server hochladen
```

**Option B: Via Git/GitHub Pages**
```bash
cd builder/export/sportstudio-website
git init
git add .
git commit -m "Initial website"
git remote add origin https://github.com/username/repo.git
git push -u origin main

# GitHub Pages aktivieren in Repo Settings
```

**Option C: Via Netlify (einfachste Methode!)**
1. Gehe zu https://www.netlify.com/
2. Drag & Drop den `sportstudio-website` Ordner
3. Fertig! 🎉

---

## 🎯 Beispiel-Workflow

```bash
# 1. Export-Ordner erstellen
./builder/export-website.sh meine-gym-website

# 2. Builder öffnen und Website bauen
# (im Browser)

# 3. Exportierte HTML verschieben
mv ~/Downloads/index.html builder/export/meine-gym-website/

# 4. Bilder hinzufügen
cp ~/Bilder/gym-*.jpg builder/export/meine-gym-website/assets/images/

# 5. Lokal testen
open builder/export/meine-gym-website/index.html

# 6. Upload auf Server
# (via FTP, Git, oder Netlify)
```

---

## 💡 Pro-Tipps

### Mehrere Seiten erstellen

```bash
# Hauptseite
index.html

# Weitere Seiten im Builder erstellen:
# - kontakt.html
# - preise.html
# - angebote.html

# Navigation verlinken:
<a href="kontakt.html">Kontakt</a>
```

### Eigene Sections erstellen

1. Kopiere Template: `builder/sections/_TEMPLATE.json`
2. Anpassen und in passenden Ordner speichern
3. In `builder.js` → `loadSectionLibrary()` hinzufügen
4. Builder neu laden

### Custom CSS hinzufügen

```css
/* builder/export/meine-website/assets/css/custom.css */

.meine-klasse {
  background: linear-gradient(to right, #dc2626, #f59e0b);
}
```

### Analytics einbinden

```html
<!-- In index.html vor </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

---

## 🆘 Troubleshooting

**Builder zeigt keine Sections?**
- Browser-Konsole öffnen (F12)
- Nach Fehlern suchen
- Prüfe ob JSON-Dateien valide sind

**Bilder werden nicht angezeigt?**
- Prüfe Dateipfade: `assets/images/bild.jpg`
- Prüfe Dateinamen (case-sensitive!)
- Prüfe Bildformate (jpg, png, webp)

**Website sieht auf Mobile komisch aus?**
- Öffne Browser DevTools
- Toggle "Responsive Design Mode"
- Teste verschiedene Auflösungen

**Farben ändern sich nicht?**
- Prüfe ob Platzhalter richtig sind: `{{primaryColor}}`
- Prüfe Tailwind-Syntax: `bg-[{{primaryColor}}]`
- Klammern nicht vergessen!

---

## 📚 Weiterführende Dokumentation

- **Komplette Docs**: `builder/BUILDER_DOKUMENTATION.md`
- **Section-Template**: `builder/sections/_TEMPLATE.json`
- **Alle Sections**: `builder/sections/`

---

## 🎉 Fertig!

Du hast jetzt:
- ✅ Skalierbares Section-System
- ✅ Visuellen Website-Builder
- ✅ Export-Script für komplette Website
- ✅ Fertige Assets (CSS, JS)
- ✅ Deployment-Ready Ordner

**Viel Erfolg beim Website-Bauen! 💪**
