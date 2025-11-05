# 🏗️ Website Builder - Sportstudio Thielen

Ein visueller, modularer Website-Builder mit skalierbarem Section-System.

## 📁 Struktur

```
builder/
├── index.html                    # Builder-Interface
├── builder.js                    # Builder-Logik
├── sections/                     # Section Library
│   ├── _TEMPLATE.json           # Template für neue Sections
│   ├── hero/                    # Hero-Sections
│   ├── navigation/              # Navigationen
│   ├── features/                # Feature-Bereiche
│   ├── gallery/                 # Bildergalerien
│   ├── team/                    # Team-Bereiche
│   ├── testimonials/            # Kundenbewertungen
│   ├── cta/                     # Call-to-Action
│   ├── pricing/                 # Preistabellen
│   ├── contact/                 # Kontaktformulare
│   └── footer/                  # Footer
├── export/                      # Exportierte Websites
├── export-website.sh            # Export-Script
├── QUICK_START.md              # Quick Start Guide (START HIER!)
├── BUILDER_DOKUMENTATION.md    # Komplette Dokumentation
└── README.md                   # Diese Datei
```

## 🚀 Quick Start

**Server starten:**

### Linux/Mac:
```bash
./start-server.sh
```

### Windows:
Doppelklick auf `start-server.bat`

### Manuell:
```bash
cd builder
python3 -m http.server 8080
```

Dann öffne im Browser: **http://localhost:8080**

---

### In 3 Schritten zur Website:

```bash
# 1. Export-Ordner erstellen
./export-website.sh meine-website

# 2. Builder öffnen
open index.html

# 3. Website bauen, exportieren, fertig!
```

## 🎯 Features

### ✅ Section-System
- **Modular**: Wiederverwendbare Bausteine
- **JSON-basiert**: Einfach zu erweitern
- **Kategorisiert**: Hero, Features, Gallery, etc.
- **Template-System**: Globale Styles automatisch angewendet

### ✅ Visueller Builder
- **Drag & Drop**: Sections sortieren
- **Live-Editing**: Texte direkt bearbeiten
- **Globale Styles**: Farben, Abstände, Schriftart
- **Vorschau**: Website live ansehen
- **Export**: Ein-Klick zu fertigem HTML

### ✅ Export-System
- **Kompletter Ordner**: Website + Assets
- **Ready-to-Deploy**: Direkt auf Server hochladbar
- **Vorkonfiguriert**: CSS, JS, README inkludiert
- **Deployment-Scripts**: FTP, Git, etc.

## 📖 Dokumentation

| Datei | Beschreibung |
|-------|--------------|
| **[QUICK_START.md](QUICK_START.md)** | 🚀 5-Minuten Guide |
| **[BUILDER_DOKUMENTATION.md](BUILDER_DOKUMENTATION.md)** | 📚 Komplette Docs |
| **[sections/_TEMPLATE.json](sections/_TEMPLATE.json)** | 📝 Section-Template |

## 🧩 Verfügbare Sections

### 🧭 Navigation (2)
- Fixed Top Navigation
- Transparent Navigation

### 🎯 Hero (2)
- Fullscreen Hero
- Split Hero (Text + Bild)

### ✨ Features (1)
- 4-Column Feature Grid

### 🖼️ Gallery (2)
- 6-Bilder Grid
- Masonry Layout

### 👥 Team (1)
- 3-Personen Grid

### 💬 Testimonials (2)
- Karten-Layout
- Slider-Format

### 🎯 CTA (1)
- Centered Call-to-Action

### 💰 Pricing (1)
- 3-Spalten Preistabelle

### 📧 Contact (1)
- Kontaktformular

### ⬇️ Footer (1)
- Full Footer mit Links

**Gesamt: 15+ Sections** (leicht erweiterbar!)

## 🔨 Neue Section erstellen

```bash
# 1. Template kopieren
cp sections/_TEMPLATE.json sections/kategorie/meine-section.json

# 2. JSON anpassen (siehe BUILDER_DOKUMENTATION.md)

# 3. In builder.js registrieren:
# sections/kategorie/meine-section.json

# 4. Builder neu laden - Fertig!
```

## 🌐 Website exportieren

### Option 1: Über Builder
1. Builder öffnen (`index.html`)
2. Website zusammenstellen
3. "Website erstellen" klicken
4. `index.html` herunterladen

### Option 2: Über Script
```bash
# Kompletten Export-Ordner erstellen
./export-website.sh projektname

# Dann exportierte HTML dorthin verschieben
mv ~/Downloads/index.html export/projektname/
```

## 📦 Deployment

### Via Netlify (empfohlen)
1. Gehe zu https://netlify.com
2. Drag & Drop den Export-Ordner
3. Fertig! 🎉

### Via FTP
```bash
# Mit FileZilla oder ähnlich
# Upload: export/projektname/* → /public_html/
```

### Via Git
```bash
cd export/projektname
git init
git add .
git commit -m "Website"
git push
```

## 🎨 Globale Styles

Werden automatisch auf alle Sections angewendet:

```javascript
{
  primaryColor: '#dc2626',     // Rot
  secondaryColor: '#1f2937',   // Dunkelgrau
  accentColor: '#f59e0b',      // Orange
  borderRadius: '8px',         // Ecken
  spacing: 'py-16',            // Abstände
  fontFamily: 'font-sans'      // Schriftart
}
```

Im Builder anpassbar über "Globale Styles".

## 🔧 Technologie-Stack

- **Tailwind CSS** (CDN) - Styling
- **Font Awesome** (CDN) - Icons
- **Sortable.js** - Drag & Drop
- **Vanilla JavaScript** - Builder-Logik
- **JSON** - Section-Definitionen

## 💡 Pro-Tipps

### Mehrere Seiten
Erstelle im Builder mehrere Seiten und exportiere sie einzeln:
- `index.html` (Startseite)
- `kontakt.html` (Kontakt)
- `preise.html` (Preise)

### Custom CSS
Erweitere `export/projektname/assets/css/custom.css`

### Custom JavaScript
Erweitere `export/projektname/assets/js/scripts.js`

### SEO optimieren
- Meta-Tags in `<head>` anpassen
- Alt-Texte für Bilder hinzufügen
- Schema.org Markup einbauen

## 🆘 Support & Troubleshooting

**Builder lädt keine Sections?**
- Browser-Konsole öffnen (F12)
- JSON-Syntax prüfen (JSONLint.com)
- Pfade in `builder.js` prüfen

**Export funktioniert nicht?**
- Mindestens 1 Section hinzugefügt?
- Download-Ordner voll?
- Browser-Berechtigungen prüfen

**Mehr Hilfe:** Siehe [BUILDER_DOKUMENTATION.md](BUILDER_DOKUMENTATION.md)

## 📝 Changelog

### v1.0 (Aktuell)
- ✅ Modulares Section-System
- ✅ 15+ vorgefertigte Sections
- ✅ Visueller Builder mit Drag & Drop
- ✅ Globale Styles
- ✅ Export-System
- ✅ Komplette Dokumentation

## 🎓 Lernen & Erweitern

1. **Verstehe Sections**: Siehe `sections/hero/hero-fullscreen.json`
2. **Template nutzen**: Kopiere `sections/_TEMPLATE.json`
3. **Tailwind lernen**: https://tailwindcss.com/docs
4. **Eigene Sections**: Siehe BUILDER_DOKUMENTATION.md

## 📄 Lizenz

Für Sportstudio Thielen Projekt.

## 🙋‍♂️ Credits

Erstellt mit ❤️ für authentische Oldschool Gyms.

---

**Los geht's! 🚀** Starte mit [QUICK_START.md](QUICK_START.md)
