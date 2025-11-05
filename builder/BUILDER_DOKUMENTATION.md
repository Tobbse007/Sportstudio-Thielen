# 🏗️ Website Builder - Komplette Dokumentation

## 📋 Inhaltsverzeichnis

1. [Überblick](#überblick)
2. [Section-System](#section-system)
3. [Neue Sections erstellen](#neue-sections-erstellen)
4. [Builder verwenden](#builder-verwenden)
5. [Website exportieren](#website-exportieren)
6. [Best Practices](#best-practices)

---

## 🎯 Überblick

Der Website Builder ist ein visuelles Tool zum Erstellen von Websites durch das Zusammensetzen von wiederverwendbaren **Sections** (Abschnitte).

### Workflow

```
1. Sections erstellen (JSON) → 2. Im Builder zusammenstellen → 3. Website exportieren
```

### Ordnerstruktur

```
builder/
├── index.html              # Builder-Interface
├── builder.js              # Builder-Logik
├── sections/               # Section Library
│   ├── hero/              # Hero-Sections
│   │   ├── hero-fullscreen.json
│   │   └── hero-split.json
│   ├── features/          # Feature-Sections
│   │   └── features-grid.json
│   ├── cta/               # Call-to-Action
│   │   └── cta-center.json
│   ├── pricing/           # Preistabellen
│   │   └── pricing-table.json
│   ├── contact/           # Kontaktformulare
│   │   └── contact-form.json
│   ├── footer/            # Footer
│   │   └── footer-full.json
│   ├── navigation/        # Navigationsleisten
│   ├── gallery/           # Bildergalerien
│   ├── team/              # Team-Bereiche
│   └── testimonials/      # Kundenbewertungen
└── export/                # Exportierte Websites
    └── [projektname]/
```

---

## 🧩 Section-System

### Was ist eine Section?

Eine **Section** ist ein wiederverwendbarer Website-Baustein (z.B. Hero, Preistabelle, Kontaktformular).

### Section-Anatomie

Jede Section besteht aus:

```json
{
  "id": "eindeutige-id",
  "name": "Anzeigename im Builder",
  "category": "kategorie",
  "icon": "🎯",
  "template": "<section>...</section>"
}
```

### Globale Style-Platzhalter

Der Builder unterstützt globale Styles, die in allen Sections verwendet werden können:

| Platzhalter | Beschreibung | Standard |
|-------------|--------------|----------|
| `{{primaryColor}}` | Hauptfarbe | #dc2626 (rot) |
| `{{secondaryColor}}` | Sekundärfarbe | #1f2937 (dunkelgrau) |
| `{{accentColor}}` | Akzentfarbe | #f59e0b (orange) |
| `{{borderRadius}}` | Ecken-Rundung | 8px |
| `{{spacing}}` | Section-Abstand | py-16 |
| `{{fontFamily}}` | Schriftart | font-sans |

**Verwendung im Template:**

```html
<section class="{{spacing}} bg-[{{primaryColor}}]">
  <button class="rounded-[{{borderRadius}}]">Click</button>
</section>
```

---

## ✨ Neue Sections erstellen

### Schritt-für-Schritt Anleitung

#### 1. Kategorie wählen oder erstellen

Wähle eine passende Kategorie oder erstelle einen neuen Ordner:

```bash
# Beispiel: Neue Kategorie für Testimonials
mkdir -p builder/sections/testimonials
```

#### 2. JSON-Datei erstellen

Erstelle eine neue `.json` Datei in der Kategorie:

```bash
builder/sections/testimonials/testimonials-slider.json
```

#### 3. Section-JSON befüllen

```json
{
  "id": "testimonials-slider",
  "name": "Testimonials - Slider",
  "category": "testimonials",
  "icon": "💬",
  "template": "<section class=\"{{spacing}} bg-gray-50\">\n  <div class=\"container mx-auto px-4\">\n    <h2 class=\"text-4xl {{fontFamily}} font-bold text-center mb-12 text-[{{secondaryColor}}]\" contenteditable=\"true\">\n      Das sagen unsere Mitglieder\n    </h2>\n    <div class=\"grid md:grid-cols-3 gap-8\">\n      <div class=\"bg-white p-6 rounded-[{{borderRadius}}] shadow-lg\">\n        <p class=\"text-gray-600 mb-4\" contenteditable=\"true\">\n          \"Bestes Gym der Stadt! Super Atmosphäre.\"\n        </p>\n        <div class=\"flex items-center gap-3\">\n          <div class=\"w-12 h-12 bg-gray-300 rounded-full\"></div>\n          <div>\n            <p class=\"font-bold\" contenteditable=\"true\">Max Müller</p>\n            <p class=\"text-sm text-gray-500\" contenteditable=\"true\">Mitglied seit 2020</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"
}
```

#### 4. Template-Best-Practices

**Wichtige Regeln:**

✅ **DO:**
- Nutze Tailwind CSS Klassen
- Verwende globale Platzhalter `{{variable}}`
- Füge `contenteditable="true"` zu editierbaren Elementen hinzu
- Nutze responsive Klassen (`md:`, `lg:`)
- Verwende semantisches HTML (`<section>`, `<article>`, etc.)
- Escape Newlines: `\n` in JSON

❌ **DON'T:**
- Inline Styles vermeiden (außer unbedingt nötig)
- Keine festen Pixel-Werte (nutze Tailwind)
- Keine IDs im Template (können doppelt vorkommen)

**Template-Struktur:**

```html
<section class="{{spacing}} bg-[FARBE]">
  <div class="container mx-auto px-4">
    <!-- Content hier -->
  </div>
</section>
```

#### 5. Section in builder.js registrieren

Die Section wird automatisch geladen, wenn sie im `sections/` Ordner liegt!

Der Builder lädt alle Sections aus:

```javascript
// In builder.js - loadSectionLibrary()
const sections = [
  'sections/hero/hero-fullscreen.json',
  'sections/hero/hero-split.json',
  // ... automatisch alle Dateien scannen
];
```

---

## 🎨 Builder verwenden

### 1. Builder starten

```bash
# Im builder/ Ordner
cd builder/
# Mit Live Server oder einfach öffnen
open index.html
```

### 2. Interface

**Oben:**
- **Globale Styles**: Farben, Abstände, Schriftart
- **Sections**: Neue Sections hinzufügen
- **Vorschau**: Website live ansehen
- **Website erstellen**: Finales HTML exportieren

**Links:**
- **Section Library**: Verfügbare Sections nach Kategorie

**Mitte (Canvas):**
- Deine Website wird hier zusammengebaut
- Sections per Drag & Drop sortieren
- Direkt im Browser bearbeiten (contenteditable)

### 3. Globale Styles anpassen

1. Klick auf **"Globale Styles"**
2. Passe Farben, Abstände, Schriftart an
3. Alle Sections werden automatisch aktualisiert

### 4. Sections hinzufügen

1. Klick auf **"Sections"**
2. Wähle eine Section aus der Library
3. Section wird auf der Canvas hinzugefügt
4. Per Drag & Drop verschieben
5. Texte direkt bearbeiten

### 5. Sections bearbeiten

**Direkte Bearbeitung:**
- Klicke auf editierbare Texte (haben `contenteditable`)
- Einfach lostippen!

**Section-Controls:**
- **Bearbeiten**: Individuelle Styles
- **Duplizieren**: Section kopieren
- **Löschen**: Section entfernen

---

## 📦 Website exportieren

### Export-Workflow

```
Builder → Export Button → index.html → Auf Server hochladen
```

### 1. Im Builder exportieren

1. Klick auf **"Website erstellen"**
2. `index.html` wird heruntergeladen
3. Enthält komplette Website mit allen Sections

### 2. Export-Struktur

Die exportierte Website enthält:

```html
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <title>Sportstudio Thielen</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>
  <!-- Alle deine Sections -->
</body>
</html>
```

### 3. Finalen Ordner erstellen

**Empfohlene Struktur:**

```
website-export/
├── index.html          # Hauptseite
├── assets/
│   ├── css/
│   │   └── custom.css  # Eigene Styles
│   ├── images/         # Bilder
│   └── js/
│       └── scripts.js  # Eigene Scripts
├── kontakt.html        # Weitere Seiten
├── preise.html
└── README.md
```

**So gehst du vor:**

```bash
# 1. Export-Ordner erstellen
mkdir -p builder/export/sportstudio-thielen
cd builder/export/sportstudio-thielen

# 2. Exportierte index.html hierhin verschieben

# 3. Assets-Ordner erstellen
mkdir -p assets/{css,images,js}

# 4. Bilder hinzufügen
cp /pfad/zu/bildern/* assets/images/

# 5. Fertig zum Upload!
```

### 4. Auf Server hochladen

**Via FTP:**
```bash
ftp your-server.com
cd /public_html
put -r website-export/*
```

**Via Git:**
```bash
git add .
git commit -m "Website update"
git push
```

**Via Hosting-Provider:**
- cPanel File Manager
- Drag & Drop alle Dateien

---

## 💡 Best Practices

### Section-Design

1. **Modular**: Jede Section sollte unabhängig funktionieren
2. **Wiederverwendbar**: Generisch halten, keine hardcodierten Inhalte
3. **Responsive**: Nutze `md:`, `lg:` für mobile/desktop
4. **Konsistent**: Nutze globale Platzhalter für Farben
5. **Semantisch**: Korrekte HTML-Tags verwenden

### Namenskonventionen

**Section IDs:**
```
kategorie-beschreibung
```

Beispiele:
- `hero-fullscreen`
- `features-grid-4col`
- `pricing-comparison`
- `contact-form-simple`

**Dateinamen:**
```
sections/[kategorie]/[section-id].json
```

### Performance

- Nutze CDN für Libraries (Tailwind, Font Awesome)
- Bilder optimieren vor Upload
- Lazy Loading für Bilder: `loading="lazy"`

### Wartbarkeit

1. **Dokumentiere neue Sections**:
   ```json
   {
     "id": "my-section",
     "name": "My Section",
     "description": "Was macht diese Section?",
     ...
   }
   ```

2. **Versionierung**: Nutze Git für Sections
   ```bash
   git add sections/
   git commit -m "Added testimonials section"
   ```

3. **Testing**: Teste jede neue Section im Builder

---

## 🚀 Erweiterte Workflows

### Mehrere Seiten erstellen

1. **Hauptseite** im Builder bauen → `index.html`
2. **Unterseite** im Builder bauen → `kontakt.html`
3. Navigation verlinken:
   ```html
   <a href="kontakt.html">Kontakt</a>
   ```

### Custom CSS hinzufügen

Erstelle `assets/css/custom.css`:

```css
/* Eigene Styles */
.my-custom-class {
  /* ... */
}
```

Füge in `index.html` ein:
```html
<link rel="stylesheet" href="assets/css/custom.css">
```

### JavaScript hinzufügen

Erstelle `assets/js/scripts.js`:

```javascript
// Eigene Scripts
document.addEventListener('DOMContentLoaded', () => {
  // ...
});
```

Füge in `index.html` ein:
```html
<script src="assets/js/scripts.js"></script>
```

---

## 🔧 Troubleshooting

### Section wird nicht geladen

- ✅ Prüfe JSON-Syntax (mit JSONLint)
- ✅ Prüfe Dateiname und Pfad
- ✅ Prüfe `builder.js` → `loadSectionLibrary()`

### Globale Styles wirken nicht

- ✅ Nutze richtige Platzhalter: `{{primaryColor}}`
- ✅ Tailwind-Syntax korrekt: `bg-[{{primaryColor}}]`
- ✅ Klammern nicht vergessen: `[{{variable}}]`

### Export funktioniert nicht

- ✅ Browser-Konsole checken (F12)
- ✅ Mindestens eine Section hinzugefügt?
- ✅ Download-Ordner voll?

---

## 📚 Beispiel: Komplette neue Section

**Aufgabe:** Gallery-Section mit 6 Bildern erstellen

**1. Ordner erstellen:**
```bash
mkdir -p builder/sections/gallery
```

**2. JSON erstellen:**
`builder/sections/gallery/gallery-grid-6.json`

```json
{
  "id": "gallery-grid-6",
  "name": "Gallery - 6 Bilder Grid",
  "category": "gallery",
  "icon": "🖼️",
  "template": "<section class=\"{{spacing}} bg-white\">\n  <div class=\"container mx-auto px-4\">\n    <h2 class=\"text-4xl {{fontFamily}} font-bold text-center mb-12 text-[{{secondaryColor}}]\" contenteditable=\"true\">\n      Unsere Gallery\n    </h2>\n    <div class=\"grid grid-cols-2 md:grid-cols-3 gap-4\">\n      <div class=\"aspect-square bg-gray-200 rounded-[{{borderRadius}}] overflow-hidden hover:scale-105 transition\">\n        <img src=\"https://via.placeholder.com/400\" alt=\"Bild 1\" class=\"w-full h-full object-cover\" loading=\"lazy\">\n      </div>\n      <div class=\"aspect-square bg-gray-200 rounded-[{{borderRadius}}] overflow-hidden hover:scale-105 transition\">\n        <img src=\"https://via.placeholder.com/400\" alt=\"Bild 2\" class=\"w-full h-full object-cover\" loading=\"lazy\">\n      </div>\n      <div class=\"aspect-square bg-gray-200 rounded-[{{borderRadius}}] overflow-hidden hover:scale-105 transition\">\n        <img src=\"https://via.placeholder.com/400\" alt=\"Bild 3\" class=\"w-full h-full object-cover\" loading=\"lazy\">\n      </div>\n      <div class=\"aspect-square bg-gray-200 rounded-[{{borderRadius}}] overflow-hidden hover:scale-105 transition\">\n        <img src=\"https://via.placeholder.com/400\" alt=\"Bild 4\" class=\"w-full h-full object-cover\" loading=\"lazy\">\n      </div>\n      <div class=\"aspect-square bg-gray-200 rounded-[{{borderRadius}}] overflow-hidden hover:scale-105 transition\">\n        <img src=\"https://via.placeholder.com/400\" alt=\"Bild 5\" class=\"w-full h-full object-cover\" loading=\"lazy\">\n      </div>\n      <div class=\"aspect-square bg-gray-200 rounded-[{{borderRadius}}] overflow-hidden hover:scale-105 transition\">\n        <img src=\"https://via.placeholder.com/400\" alt=\"Bild 6\" class=\"w-full h-full object-cover\" loading=\"lazy\">\n      </div>\n    </div>\n  </div>\n</section>"
}
```

**3. In builder.js registrieren:**
```javascript
// In loadSectionLibrary()
const sections = [
  // ... andere
  'sections/gallery/gallery-grid-6.json'
];
```

**4. Builder neu laden und testen!**

---

## 🎓 Zusammenfassung

1. **Sections sind modular** → Einfach wiederverwenden
2. **Globale Styles** → Konsistentes Design
3. **JSON-basiert** → Leicht zu erweitern
4. **Visueller Builder** → Keine Code-Kenntnisse nötig
5. **Ein-Klick-Export** → Schnell auf Server

**Happy Building! 🚀**
