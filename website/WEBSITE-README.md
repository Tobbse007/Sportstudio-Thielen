# Sportstudio Thielen - Website

Modulares Component-System mit 11ty (Eleventy)

## Installation

```bash
cd website
npm install
```

## Development

```bash
npm start
```

Website läuft auf: http://localhost:8080

## Build

```bash
npm run build
```

Output in `_site/` Ordner

## Struktur

```
website/
├── src/
│   ├── _data/              # Zentrale Daten (JSON)
│   │   └── site.json       # Site-weite Daten
│   ├── _includes/
│   │   ├── layouts/        # Layout-Templates
│   │   │   └── base.html
│   │   └── components/     # Wiederverwendbare Components
│   │       ├── navigation.html
│   │       ├── footer.html
│   │       └── hero.html
│   ├── styles/
│   │   ├── variables.css   # ZENTRALE DESIGN-VARIABLEN
│   │   └── components.css
│   └── index.html          # Startseite
├── .eleventy.js            # 11ty Config
└── package.json
```

## Zentrale Design-Variablen

Alle Farben, Schriften, Abstände etc. in `src/styles/variables.css`

**Beispiel:** Farbe ändern
```css
:root {
  --color-primary: #d32f2f; /* Hier ändern → ändert sich überall! */
}
```

## Components verwenden

```html
{% include "components/hero.html" %}
{% include "components/navigation.html" %}
```

## Neue Seite erstellen

1. Neue Datei in `src/` erstellen (z.B. `angebote.html`)
2. Front Matter hinzufügen:
```yaml
---
layout: layouts/base.html
title: Angebote
---
```
3. Components einbinden & Content schreiben

## Daten ändern

Zentrale Daten in `src/_data/site.json` - verfügbar als `{{ site.* }}`
