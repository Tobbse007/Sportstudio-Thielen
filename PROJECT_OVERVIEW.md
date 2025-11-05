# 🏋️ Sportstudio Thielen - Website Projekt

Komplettes Website-Projekt mit modularem Builder-System.

## 📁 Projektstruktur

```
Sportstudio-Thielen/
├── builder/                      # 🏗️ Website Builder
│   ├── index.html               # Builder-Interface
│   ├── builder.js               # Builder-Logik
│   ├── sections/                # 15+ Section-Templates
│   ├── export/                  # Exportierte Websites
│   ├── export-website.sh        # Export-Script
│   ├── QUICK_START.md          # ⭐ START HIER!
│   ├── BUILDER_DOKUMENTATION.md # Komplette Docs
│   └── README.md                # Builder-Übersicht
├── docs/                        # 📚 Projektdokumentation
│   ├── 01_grundinfos.md        # Projekt-Infos
│   ├── 02_zielgruppe.md        # Zielgruppe
│   ├── 03_angebote.md          # Angebote
│   ├── 04_farben-logo.md       # Design
│   ├── 05_bilder.md            # Bilder
│   ├── 06_seiten.md            # Seiten-Struktur
│   ├── 07_buchung.md           # Buchungssystem
│   ├── 08_kontakt.md           # Kontakt
│   ├── 09_technik.md           # Technik
│   ├── 10_preise.md            # Preise
│   ├── 11_kontaktdaten.md      # Kontaktdaten
│   └── 12_technische-architektur.md
├── website/                     # 🌐 Website-Entwicklung
│   ├── src/                    # Source-Dateien
│   ├── _site/                  # Build-Output
│   └── assets/                 # Assets
└── README.md                    # Diese Datei
```

## 🚀 Quick Start - Website erstellen

### Option 1: Mit Builder (Empfohlen für schnelles Ergebnis)

```bash
# 1. Export-Ordner vorbereiten
cd builder
./export-website.sh sportstudio-website

# 2. Builder öffnen
open index.html

# 3. Im Builder:
# - Sections zusammenstellen
# - Texte bearbeiten
# - Farben anpassen
# - "Website erstellen" klicken

# 4. Exportierte Datei verschieben
mv ~/Downloads/index.html export/sportstudio-website/

# 5. Bilder hinzufügen
cp /pfad/zu/bildern/* export/sportstudio-website/assets/images/

# 6. Fertig! Website ist in:
# builder/export/sportstudio-website/
```

**Detaillierte Anleitung:** [builder/QUICK_START.md](builder/QUICK_START.md)

### Option 2: Bestehende Website entwickeln

```bash
cd website
npm install
npm run dev
# Website läuft auf http://localhost:8080
```

## 📖 Dokumentation

### Builder-System
| Dokument | Beschreibung |
|----------|--------------|
| [builder/QUICK_START.md](builder/QUICK_START.md) | 🚀 5-Minuten Quick Start |
| [builder/BUILDER_DOKUMENTATION.md](builder/BUILDER_DOKUMENTATION.md) | 📚 Komplette Builder-Docs |
| [builder/README.md](builder/README.md) | 📝 Builder-Übersicht |

### Projekt-Dokumentation
| Dokument | Beschreibung |
|----------|--------------|
| [docs/README.md](docs/README.md) | Dokumentations-Übersicht |
| [docs/WEBSITE_PLANUNG.md](docs/WEBSITE_PLANUNG.md) | Komplett-Planung |
| [docs/12_technische-architektur.md](docs/12_technische-architektur.md) | Technische Architektur |

## 🎯 Was ist was?

### Builder (`builder/`)
**Für wen:** Jeder - auch ohne Coding-Kenntnisse  
**Zweck:** Schnell und visuell eine Website zusammenbauen  
**Output:** Fertige HTML-Website

- ✅ Visuelles Interface
- ✅ Drag & Drop
- ✅ 15+ vorgefertigte Sections
- ✅ Export in fertigen Ordner
- ✅ Sofort deploybar

**Nutze den Builder wenn:**
- Du schnell eine Website brauchst
- Du Sections wiederverwenden willst
- Du keine komplexe Entwicklung brauchst

### Website (`website/`)
**Für wen:** Entwickler  
**Zweck:** Professionelle Website-Entwicklung  
**Output:** Gebuildete Website mit Build-Pipeline

- ✅ 11ty Static Site Generator
- ✅ Tailwind CSS Build
- ✅ Komponenten-System
- ✅ Live-Reload Development

**Nutze Website-Ordner wenn:**
- Du professionelle Entwicklung brauchst
- Du Build-Pipeline nutzen willst
- Du komplexe Features brauchst

### Docs (`docs/`)
**Für wen:** Alle  
**Zweck:** Projekt-Dokumentation und Planung  
**Output:** Dokumentation

- ✅ Projekt-Informationen
- ✅ Design-Entscheidungen
- ✅ Content-Planung
- ✅ Technische Specs

## 🏗️ Builder Features

### Verfügbare Sections (15+)

- 🧭 **Navigation** (2): Fixed, Transparent
- 🎯 **Hero** (2): Fullscreen, Split
- ✨ **Features** (1): Grid
- 🖼️ **Gallery** (2): Grid, Masonry
- 👥 **Team** (1): 3-Personen
- 💬 **Testimonials** (2): Cards, Slider
- 🎯 **CTA** (1): Center
- 💰 **Pricing** (1): Tabelle
- 📧 **Contact** (1): Form
- ⬇️ **Footer** (1): Full

### Globale Styles

Einmal ändern, überall wirkt:
- 🎨 Primärfarbe: `#dc2626` (Rot)
- 🎨 Sekundärfarbe: `#1f2937` (Dunkelgrau)
- 🎨 Akzentfarbe: `#f59e0b` (Orange)
- 📐 Border Radius: `8px`
- 📏 Spacing: `py-16`
- 🔤 Schriftart: `font-sans`

## 🔨 Eigene Sections erstellen

### Schritt-für-Schritt

```bash
# 1. Template kopieren
cp builder/sections/_TEMPLATE.json builder/sections/meine-kategorie/meine-section.json

# 2. JSON bearbeiten
# - id, name, category, icon anpassen
# - template HTML erstellen
# - Globale Platzhalter nutzen: {{primaryColor}}

# 3. In builder.js registrieren
# sections/meine-kategorie/meine-section.json

# 4. Builder neu laden - Fertig!
```

**Details:** [builder/BUILDER_DOKUMENTATION.md](builder/BUILDER_DOKUMENTATION.md)

## 📦 Website exportieren & deployen

### Export
```bash
# Option 1: Via Builder UI
# "Website erstellen" Button → index.html Download

# Option 2: Via Script (empfohlen)
cd builder
./export-website.sh mein-projekt
# Erstellt: builder/export/mein-projekt/
```

### Deploy

**Netlify (einfachste Methode):**
```bash
# 1. Gehe zu netlify.com
# 2. Drag & Drop den export/ Ordner
# 3. Fertig!
```

**FTP:**
```bash
# Mit FileZilla:
# Upload builder/export/mein-projekt/* → /public_html/
```

**Git/GitHub Pages:**
```bash
cd builder/export/mein-projekt
git init
git add .
git commit -m "Initial website"
git remote add origin https://github.com/username/repo.git
git push -u origin main
# GitHub Pages in Settings aktivieren
```

## 💡 Workflows

### Workflow 1: Schnelle Landing Page

```bash
# 1. Export-Ordner erstellen
cd builder && ./export-website.sh landing-page

# 2. Builder öffnen, zusammenstellen:
# - Navigation
# - Hero
# - Features
# - CTA
# - Footer

# 3. Exportieren und deployen
# Zeit: ~10 Minuten ⚡
```

### Workflow 2: Komplette Multi-Page Website

```bash
# 1. Export-Ordner erstellen
./export-website.sh sportstudio-site

# 2. Mehrere Seiten im Builder erstellen:
# - index.html (Startseite)
# - angebote.html
# - preise.html
# - kontakt.html

# 3. Jede Seite einzeln exportieren

# 4. Navigation zwischen Seiten verlinken

# 5. Assets hinzufügen, deployen
# Zeit: ~1 Stunde 🎯
```

### Workflow 3: Custom Development

```bash
# 1. Builder für Prototyp nutzen
cd builder && open index.html

# 2. Exportierte HTML als Basis nehmen

# 3. In website/ weiterentwickeln
cd ../website
npm run dev

# 4. Professional build & deploy
npm run build
# Zeit: ~mehrere Stunden/Tage 🚀
```

## 🎓 Learning Path

### Anfänger
1. Starte mit [builder/QUICK_START.md](builder/QUICK_START.md)
2. Baue erste Website im Builder
3. Experimentiere mit Sections

### Fortgeschritten
1. Erstelle eigene Sections ([builder/BUILDER_DOKUMENTATION.md](builder/BUILDER_DOKUMENTATION.md))
2. Passe CSS an (`export/*/assets/css/custom.css`)
3. Füge JavaScript hinzu (`export/*/assets/js/scripts.js`)

### Profi
1. Nutze `website/` für professionelle Entwicklung
2. Build-Pipeline mit 11ty
3. Custom Components entwickeln

## 🛠️ Technologie-Stack

### Builder
- Tailwind CSS (CDN)
- Font Awesome (CDN)
- Sortable.js (Drag & Drop)
- Vanilla JavaScript

### Website
- 11ty (Static Site Generator)
- Tailwind CSS (Build)
- Nunjucks (Templates)
- Node.js

## 🔍 Wichtige Dateien

| Datei | Zweck |
|-------|-------|
| `builder/index.html` | Builder-Interface |
| `builder/builder.js` | Builder-Logik |
| `builder/sections/_TEMPLATE.json` | Template für neue Sections |
| `builder/export-website.sh` | Export-Script |
| `website/package.json` | Website Dependencies |
| `docs/WEBSITE_PLANUNG.md` | Projekt-Planung |

## 🆘 Troubleshooting

### Builder lädt nicht
```bash
# 1. Browser-Konsole öffnen (F12)
# 2. Fehler prüfen
# 3. JSON-Dateien validieren
```

### Sections werden nicht geladen
```bash
# 1. Prüfe builder.js → loadSectionLibrary()
# 2. Prüfe JSON-Syntax mit JSONLint
# 3. Prüfe Dateipfade
```

### Export funktioniert nicht
```bash
# 1. Mindestens 1 Section hinzugefügt?
# 2. Browser-Download-Berechtigungen prüfen
# 3. Anderer Browser versuchen
```

**Mehr Hilfe:** [builder/BUILDER_DOKUMENTATION.md](builder/BUILDER_DOKUMENTATION.md)

## 📞 Support

- **Builder-Fragen**: Siehe [builder/BUILDER_DOKUMENTATION.md](builder/BUILDER_DOKUMENTATION.md)
- **Projekt-Fragen**: Siehe [docs/README.md](docs/README.md)
- **Technical Issues**: Console Logs prüfen (F12)

## 🎉 Zusammenfassung

Du hast jetzt:

✅ **Builder-System** - Visuell Websites bauen  
✅ **15+ Sections** - Sofort nutzbar  
✅ **Export-System** - Komplette Website-Ordner  
✅ **Dokumentation** - Quick Start + Komplette Docs  
✅ **Deployment-Ready** - Netlify, FTP, Git  
✅ **Erweiterbar** - Eigene Sections hinzufügen  
✅ **Professional** - Optional: Website/ für Profis  

---

## 🚀 Los geht's!

```bash
# Starte hier:
cd builder
cat QUICK_START.md

# Oder direkt Builder öffnen:
open builder/index.html
```

**Happy Building! 💪**
