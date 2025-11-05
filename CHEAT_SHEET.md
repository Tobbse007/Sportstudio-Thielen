# 📋 Builder Cheat Sheet

## 🚀 Quick Commands

### Export-Ordner erstellen
```bash
./builder/export-website.sh [projektname]
```

### Builder öffnen
```bash
# Option 1: VS Code Live Server
# Rechtsklick auf builder/index.html → "Open with Live Server"

# Option 2: Browser
open builder/index.html
```

### Exportierte Website verschieben
```bash
mv ~/Downloads/index.html builder/export/[projektname]/
```

### Bilder hinzufügen
```bash
cp /pfad/zu/bildern/* builder/export/[projektname]/assets/images/
```

## 🧩 Neue Section erstellen

```bash
# 1. Template kopieren
cp builder/sections/_TEMPLATE.json builder/sections/[kategorie]/[name].json

# 2. JSON bearbeiten

# 3. In builder.js registrieren (Zeile ~17)
# 'sections/[kategorie]/[name].json'

# 4. Builder neu laden
```

## 🎨 Section Template

```json
{
  "id": "meine-section",
  "name": "Meine Section",
  "category": "hero|features|gallery|...",
  "icon": "🎯",
  "template": "<section class=\"{{spacing}} bg-white\">...</section>"
}
```

## 🔧 Globale Platzhalter

```
{{primaryColor}}      # Hauptfarbe
{{secondaryColor}}    # Sekundärfarbe
{{accentColor}}       # Akzentfarbe
{{borderRadius}}      # Ecken-Rundung
{{spacing}}           # Abstände
{{fontFamily}}        # Schriftart
```

## 📦 Export & Deploy

### Netlify
```
1. netlify.com öffnen
2. Drag & Drop Export-Ordner
3. Fertig!
```

### FTP
```bash
# Mit FileZilla:
# Upload builder/export/[projekt]/* → /public_html/
```

### Git
```bash
cd builder/export/[projekt]
git init
git add .
git commit -m "Website"
git push
```

## 🎯 Section-Kategorien

```
navigation     # Navigationsleisten
hero          # Hero-Bereiche
features      # Feature-Grids
gallery       # Bildergalerien
team          # Team-Bereiche
testimonials  # Kundenbewertungen
cta           # Call-to-Action
pricing       # Preistabellen
contact       # Kontaktformulare
footer        # Footer
```

## 💡 Nützliche Snippets

### Eigenes CSS
```css
/* builder/export/[projekt]/assets/css/custom.css */
.meine-klasse {
  background: linear-gradient(to right, #dc2626, #f59e0b);
}
```

### Eigenes JavaScript
```javascript
// builder/export/[projekt]/assets/js/scripts.js
document.addEventListener('DOMContentLoaded', () => {
  // Dein Code
});
```

### Bild mit Lazy Loading
```html
<img src="assets/images/bild.jpg" 
     alt="Beschreibung" 
     loading="lazy"
     class="w-full h-auto">
```

### Tailwind Responsive
```html
<!-- Mobile: 1 Spalte, Desktop: 3 Spalten -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
```

### Link zu anderer Seite
```html
<a href="kontakt.html">Kontakt</a>
```

## 🆘 Troubleshooting

### Builder lädt nicht
```bash
# 1. Browser-Konsole öffnen (F12)
# 2. Fehler prüfen
# 3. Cache leeren (Ctrl/Cmd + Shift + R)
```

### Section wird nicht geladen
```bash
# 1. JSON-Syntax prüfen (jsonlint.com)
# 2. Pfad in builder.js prüfen
# 3. Browser-Konsole checken
```

### Farben ändern sich nicht
```
# 1. Richtige Syntax: bg-[{{primaryColor}}]
# 2. Klammern nicht vergessen: [{{variable}}]
# 3. Builder neu laden
```

## 📚 Wichtige Dateien

```
builder/index.html              # Builder-Interface
builder/builder.js              # Builder-Logik (Sections registrieren)
builder/sections/_TEMPLATE.json # Template für neue Sections
builder/export-website.sh       # Export-Script

builder/QUICK_START.md          # Quick Start Guide
builder/BUILDER_DOKUMENTATION.md # Komplette Docs
PROJECT_OVERVIEW.md             # Projekt-Übersicht
SYSTEM_COMPLETE.md              # Was wurde erstellt
```

## 🔗 Links

- **Tailwind CSS Docs**: https://tailwindcss.com/docs
- **Font Awesome Icons**: https://fontawesome.com/icons
- **JSON Validator**: https://jsonlint.com
- **Unsplash Images**: https://unsplash.com

## ⌨️ Keyboard Shortcuts

```
F12                 # Browser DevTools
Ctrl/Cmd + S        # Speichern
Ctrl/Cmd + Shift + R # Hard Reload (Cache leeren)
Ctrl/Cmd + F        # Suchen
```

## 📊 Workflow

```
1. Export-Ordner erstellen      # ./export-website.sh [name]
2. Builder öffnen                # open builder/index.html
3. Sections hinzufügen           # Drag & Drop
4. Texte bearbeiten              # Klicken & tippen
5. Styles anpassen               # Globale Styles
6. Website exportieren           # "Website erstellen"
7. HTML verschieben              # mv Downloads/index.html export/[name]/
8. Bilder hinzufügen            # cp bilder/* export/[name]/assets/images/
9. Deployen                      # Netlify/FTP/Git
```

---

**Tipp:** Bookmark diese Datei für schnellen Zugriff! 📌
