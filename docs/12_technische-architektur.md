# Technische Architektur & Build-System

## Anforderung

**Modulares, wiederverwendbares Component-System**
- Sections als einzelne Dateien
- Änderung an einer Section = Änderung auf allen Seiten
- Zentrale Style-Verwaltung (Farben, Schriften, Abstände, etc.)
- Section-Bibliothek zum einfachen Austauschen
- Einfache Inhaltsverwaltung
- Skalierbar für zukünftige Projekte

---

## Architektur-Konzept

### 1. Component-Based Structure

```
/project
├── /components          # Wiederverwendbare Sections
│   ├── hero.html
│   ├── footer.html
│   ├── navigation.html
│   ├── pricing-table.html
│   ├── team-section.html
│   ├── contact-form.html
│   └── ...
│
├── /styles
│   ├── variables.css    # ZENTRALE Style-Variablen
│   ├── base.css
│   └── components.css
│
├── /content             # Inhalte separat
│   ├── content.json     # oder .yaml
│   └── ...
│
├── /pages               # Fertige Seiten
│   ├── index.html
│   ├── angebote.html
│   ├── kontakt.html
│   └── ...
│
└── /section-library     # Section-Bibliothek
    ├── hero-01.html
    ├── hero-02.html
    ├── hero-03.html
    ├── cta-01.html
    ├── cta-02.html
    └── ...
```

---

## Zentrale Style-Verwaltung

### variables.css (Beispiel)

```css
:root {
  /* Farben */
  --color-primary: #FF5722;
  --color-secondary: #212121;
  --color-accent: #FFC107;
  --color-text: #333333;
  --color-background: #FFFFFF;
  
  /* Schriften */
  --font-primary: 'Roboto', sans-serif;
  --font-heading: 'Oswald', sans-serif;
  --font-size-base: 16px;
  --font-size-h1: 3rem;
  --font-size-h2: 2.5rem;
  --font-size-h3: 2rem;
  
  /* Abstände */
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 2rem;
  --spacing-lg: 4rem;
  --spacing-xl: 6rem;
  
  /* Abrundungen */
  --border-radius-sm: 4px;
  --border-radius-md: 8px;
  --border-radius-lg: 16px;
  --border-radius-full: 50%;
  
  /* Schatten */
  --shadow-sm: 0 2px 4px rgba(0,0,0,0.1);
  --shadow-md: 0 4px 8px rgba(0,0,0,0.15);
  --shadow-lg: 0 8px 16px rgba(0,0,0,0.2);
  
  /* Transitions */
  --transition-fast: 0.2s ease;
  --transition-normal: 0.3s ease;
  --transition-slow: 0.5s ease;
}
```

**Vorteil:** Eine Farbe ändern → Ändert sich überall!

---

## Technologie-Optionen

### Option 1: Static Site Generator (Empfohlung)

**Technologie:** 11ty (Eleventy) oder Hugo

**Vorteile:**
- ✅ Components/Partials wiederverwendbar
- ✅ Zentrale Daten-Verwaltung (JSON/YAML)
- ✅ Super schnell
- ✅ Kein Server nötig
- ✅ Einfach zu hosten
- ✅ Git-basiert

**Beispiel 11ty:**
```html
<!-- Seite: index.html -->
{% include "components/navigation.html" %}
{% include "components/hero.html" %}
{% include "components/angebote.html" %}
{% include "components/footer.html" %}
```

---

### Option 2: React/Next.js (Modern)

**Technologie:** React + Next.js

**Vorteile:**
- ✅ Maximale Flexibilität
- ✅ Component-System perfekt
- ✅ Wiederverwendbarkeit top
- ✅ Große Community
- ✅ Viele fertige Components

**Beispiel:**
```jsx
// pages/index.js
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Hero />
      <Angebote />
      <Footer />
    </>
  )
}
```

---

### Option 3: WordPress mit Custom Theme

**Technologie:** WordPress + ACF (Advanced Custom Fields)

**Vorteile:**
- ✅ Einfaches Backend
- ✅ Inhalte ändern ohne Code
- ✅ Wiederverwendbare Blocks
- ✅ Gutenberg Block Editor

**Nachteil:**
- ⚠️ Benötigt PHP-Hosting
- ⚠️ Schwerer als statische Lösung

---

### Option 4: Custom Build System

**Technologie:** Eigenes System mit Templates

**Vorteile:**
- ✅ Volle Kontrolle
- ✅ Genau nach Ihren Bedürfnissen
- ✅ Kein Framework-Overhead

**Komponenten:**
- PHP oder Node.js Template-Engine
- JSON für Content
- CSS Variables für Styles

---

## Section-Bibliothek Konzept

### Struktur

```
/section-library
├── /heroes
│   ├── hero-fullscreen-video.html
│   ├── hero-image-slider.html
│   ├── hero-simple.html
│   └── hero-split.html
│
├── /ctas (Call-to-Action)
│   ├── cta-button-center.html
│   ├── cta-form.html
│   └── cta-split.html
│
├── /features
│   ├── features-grid-3col.html
│   ├── features-grid-4col.html
│   └── features-cards.html
│
├── /pricing
│   ├── pricing-table-3col.html
│   └── pricing-cards.html
│
├── /testimonials
│   ├── testimonials-slider.html
│   └── testimonials-grid.html
│
└── /footers
    ├── footer-simple.html
    ├── footer-full.html
    └── footer-minimal.html
```

### Verwendung

**Seite erstellen:**
```html
<!-- index.html -->
<include src="section-library/heroes/hero-fullscreen-video.html"></include>
<include src="section-library/features/features-grid-3col.html"></include>
<include src="section-library/ctas/cta-button-center.html"></include>
<include src="section-library/footers/footer-full.html"></include>
```

**Section austauschen:**
- Einfach `hero-fullscreen-video.html` durch `hero-simple.html` ersetzen
- Fertig!

---

## Content Management

### Zentrale Content-Datei

```json
// content/data.json
{
  "site": {
    "title": "Sportstudio Thielen",
    "tagline": "Oldschool Gym",
    "phone": "+49 123 456789",
    "email": "info@sportstudio-thielen.de"
  },
  "hero": {
    "headline": "Dein Oldschool Gym in Würchwitz",
    "subheadline": "Seit den 90ern",
    "cta_button": "Probetraining buchen"
  },
  "angebote": {
    "title": "Unsere Angebote",
    "items": [
      {
        "name": "Gerätetraining",
        "description": "Freies Training an Oldschool-Geräten"
      },
      {
        "name": "Personal Training",
        "description": "Individuelles Training auf Anfrage"
      }
    ]
  }
}
```

**Verwendung im Template:**
```html
<h1>{{ hero.headline }}</h1>
<p>{{ hero.subheadline }}</p>
<button>{{ hero.cta_button }}</button>
```

---

## Empfehlung für Sportstudio Thielen

### Beste Lösung: **11ty (Eleventy)**

**Warum?**
1. ✅ Perfekt für Ihre Anforderungen
2. ✅ Einfach zu lernen
3. ✅ Components wiederverwendbar
4. ✅ Zentrale Styles mit CSS Variables
5. ✅ Schnell & kostenlos zu hosten
6. ✅ Keine Datenbank nötig
7. ✅ Zukunftssicher & skalierbar

**Setup:**
```bash
npm install -g @11ty/eleventy
```

**Ordnerstruktur:**
```
/sportstudio-thielen
├── /_includes
│   ├── /components
│   │   ├── hero.njk
│   │   ├── footer.njk
│   │   └── navigation.njk
│   └── /layouts
│       └── base.njk
│
├── /styles
│   ├── variables.css
│   └── main.css
│
├── /_data
│   └── site.json
│
├── /pages
│   ├── index.njk
│   └── angebote.njk
│
└── .eleventy.js
```

---

## Nächste Schritte

1. **Technologie festlegen** (Empfehlung: 11ty)
2. **Design-System erstellen** (Farben, Fonts, etc.)
3. **Section-Bibliothek aufbauen** (10-15 Standard-Sections)
4. **Erste Seite als Proof-of-Concept**
5. **Content befüllen**
6. **Weitere Seiten mit bestehenden Sections bauen**

---

## Zukunft: Skalierbarkeit

**Mit diesem System können Sie:**
- Neue Websites in Stunden erstellen
- Sections zwischen Projekten kopieren
- Designs zentral ändern
- Leicht neue Seiten hinzufügen
- Für Kunden wiederverwendbare Lösungen anbieten

**Section-Bibliothek wächst mit:**
- Pro Projekt neue Sections
- Nach 5 Projekten: 50+ fertige Sections
- Sections für verschiedene Branchen
- Templates verkaufen/weiterverwenden

---

*Aktualisiert: 31.10.2025*
