# 📚 Section Library - Übersicht

Alle verfügbaren Sections im Builder (15+)

## 🧭 Navigation (2 Sections)

### navbar-fixed
**Datei:** `sections/navigation/navbar-fixed.json`  
**Icon:** 🧭  
**Beschreibung:** Fixierte Navigation oben mit Logo und Links  
**Features:**
- Sticky Top Position
- Desktop + Mobile Menu
- CTA Button
- Logo + Brand Name

**Verwendung:** Für Standard-Websites mit fixer Navigation

---

### navbar-transparent
**Datei:** `sections/navigation/navbar-transparent.json`  
**Icon:** 🌐  
**Beschreibung:** Transparente Navigation über Hero-Section  
**Features:**
- Absolute Position
- Transparent Background
- Hover Effects
- Desktop Navigation

**Verwendung:** Für Hero-Sections mit Hintergrundbild

---

## 🎯 Hero (2 Sections)

### hero-fullscreen
**Datei:** `sections/hero/hero-fullscreen.json`  
**Icon:** 🎯  
**Beschreibung:** Fullscreen Hero mit Gradient  
**Features:**
- Gradient Background
- Centered Content
- Large Heading
- CTA Button

**Verwendung:** Für impactvolle Startseiten

---

### hero-split
**Datei:** `sections/hero/hero-split.json`  
**Icon:** 📱  
**Beschreibung:** Split Hero (Text links, Bild rechts)  
**Features:**
- 2-Column Layout
- Text Left, Image Right
- Responsive Grid
- CTA Button

**Verwendung:** Für Business-Websites mit Produktbild

---

## ✨ Features (1 Section)

### features-grid
**Datei:** `sections/features/features-grid.json`  
**Icon:** ✨  
**Beschreibung:** 4-Column Feature Grid mit Icons  
**Features:**
- 4 Feature Cards
- Icons (Emojis)
- Hover Effects
- Shadow Animation

**Verwendung:** Für "Warum wir?" oder USPs

---

## 🖼️ Gallery (2 Sections)

### gallery-grid-6
**Datei:** `sections/gallery/gallery-grid-6.json`  
**Icon:** 🖼️  
**Beschreibung:** 6 Bilder in 2x3 Grid  
**Features:**
- 6 Image Slots
- 2x3 Grid (Mobile: 2x1)
- Hover Scale Effect
- Lazy Loading

**Verwendung:** Für Studio-Impressionen, Portfolio

---

### gallery-masonry
**Datei:** `sections/gallery/gallery-masonry.json`  
**Icon:** 🎨  
**Beschreibung:** Masonry Layout mit ungleichen Bildern  
**Features:**
- Asymmetrisches Layout
- Row-Span Variation
- Hover Opacity
- Modern Look

**Verwendung:** Für kreative Portfolios

---

## 👥 Team (1 Section)

### team-grid-3
**Datei:** `sections/team/team-grid-3.json`  
**Icon:** 👥  
**Beschreibung:** 3-Personen Team Grid  
**Features:**
- 3 Team Members
- Round Profile Images
- Name + Role + Description
- Centered Layout

**Verwendung:** Für "Unser Team" Bereiche

---

## 💬 Testimonials (2 Sections)

### testimonials-cards
**Datei:** `sections/testimonials/testimonials-cards.json`  
**Icon:** 💬  
**Beschreibung:** Kundenbewertungen als Karten  
**Features:**
- 3 Testimonial Cards
- Star Ratings
- Profile Info
- Shadow Hover

**Verwendung:** Für Social Proof, Bewertungen

---

### testimonials-slider
**Datei:** `sections/testimonials/testimonials-slider.json`  
**Icon:** 💭  
**Beschreibung:** Große Testimonials im Slider-Format  
**Features:**
- Large Quote Display
- Centered Layout
- Slider Dots
- Colored Background

**Verwendung:** Für Impact-Testimonials auf Startseite

---

## 🎯 Call-to-Action (1 Section)

### cta-center
**Datei:** `sections/cta/cta-center.json`  
**Icon:** 🎯  
**Beschreibung:** Zentrierter Call-to-Action  
**Features:**
- Colored Background
- Centered Content
- Large Heading
- CTA Button

**Verwendung:** Für Conversion-Bereiche ("Jetzt anmelden")

---

## 💰 Pricing (1 Section)

### pricing-table
**Datei:** `sections/pricing/pricing-table.json`  
**Icon:** 💰  
**Beschreibung:** 3-Spalten Preistabelle  
**Features:**
- 3 Pricing Tiers
- Feature Lists
- Highlighted Plan (Premium)
- CTA Buttons
- Responsive

**Verwendung:** Für Abo-Modelle, Preisvergleich

---

## 📧 Contact (1 Section)

### contact-form
**Datei:** `sections/contact/contact-form.json`  
**Icon:** 📧  
**Beschreibung:** Kontaktformular  
**Features:**
- Name + Email + Message Fields
- Centered Layout
- Form Styling
- Submit Button

**Verwendung:** Für Kontaktseiten

---

## ⬇️ Footer (1 Section)

### footer-full
**Datei:** `sections/footer/footer-full.json`  
**Icon:** ⬇️  
**Beschreibung:** Kompletter Footer mit Links  
**Features:**
- 4-Column Layout
- Brand Info
- Contact Info
- Opening Hours
- Links (Impressum, etc.)
- Copyright

**Verwendung:** Für alle Seiten als Abschluss

---

## 🎨 Design-Patterns

### Globale Platzhalter in allen Sections

```
{{primaryColor}}      # #dc2626 (Rot)
{{secondaryColor}}    # #1f2937 (Dunkelgrau)
{{accentColor}}       # #f59e0b (Orange)
{{borderRadius}}      # 8px
{{spacing}}           # py-16
{{fontFamily}}        # font-sans
```

### Editierbare Elemente

Alle Sections haben `contenteditable="true"` auf:
- Überschriften (h1, h2, h3)
- Paragraphen (p)
- Buttons
- Links

→ Im Builder direkt bearbeitbar!

### Responsive Design

Alle Sections nutzen Tailwind Breakpoints:
- **Mobile First**: Standard single column
- **md:**: Tablets (768px+)
- **lg:**: Desktop (1024px+)

---

## 🏗️ Section-Kombinationen

### Landing Page
```
navbar-fixed
→ hero-fullscreen
→ features-grid
→ cta-center
→ footer-full
```

### Business Website
```
navbar-fixed
→ hero-split
→ features-grid
→ gallery-grid-6
→ testimonials-cards
→ pricing-table
→ contact-form
→ footer-full
```

### Portfolio
```
navbar-transparent
→ hero-fullscreen
→ gallery-masonry
→ team-grid-3
→ testimonials-slider
→ contact-form
→ footer-full
```

### Gym Website (Sportstudio)
```
navbar-fixed
→ hero-split
→ features-grid
→ gallery-grid-6
→ pricing-table
→ testimonials-cards
→ cta-center
→ contact-form
→ footer-full
```

---

## 📝 Section erstellen

Template für neue Section:

```json
{
  "id": "meine-section",
  "name": "Meine Section Name",
  "category": "kategorie",
  "icon": "🎯",
  "description": "Was macht diese Section?",
  "template": "<section class=\"{{spacing}} bg-white\">...</section>"
}
```

**Kategorien:**
- `navigation` - Navigationsleisten
- `hero` - Hero-Bereiche
- `features` - Feature-Grids
- `gallery` - Bildergalerien
- `team` - Team-Bereiche
- `testimonials` - Kundenbewertungen
- `cta` - Call-to-Action
- `pricing` - Preistabellen
- `contact` - Kontaktformulare
- `footer` - Footer

---

## 🔍 Sections filtern

Im Builder werden Sections automatisch nach Kategorie gruppiert:

1. **Navigation** - Oben
2. **Hero** - Startbereich
3. **Features** - Inhalte
4. **Gallery** - Bilder
5. **Team** - Personen
6. **Testimonials** - Bewertungen
7. **CTA** - Aktionen
8. **Pricing** - Preise
9. **Contact** - Kontakt
10. **Footer** - Unten

---

## 💡 Best Practices

### Section-Reihenfolge

```
1. Navigation (navbar-fixed ODER navbar-transparent)
2. Hero (hero-fullscreen ODER hero-split)
3. Features/Content (features-grid, gallery, team, etc.)
4. Conversion (cta, pricing, testimonials)
5. Contact (contact-form)
6. Footer (footer-full)
```

### Farb-Harmonie

Wechsle zwischen hellen und dunklen Sections:
```
White Background → Colored Background → Gray Background → White Background
```

### Content-Länge

- **Hero**: Kurz & knackig
- **Features**: 4-6 Features
- **Testimonials**: 3-6 Bewertungen
- **Pricing**: 2-3 Pläne
- **Footer**: Alle wichtigen Links

---

## 📊 Statistiken

- **Gesamt:** 15 Sections
- **Navigation:** 2
- **Content:** 10
- **Conversion:** 2
- **Footer:** 1

**Durchschnittliche Seite:** 6-8 Sections  
**Minimale Seite:** 3 Sections (Nav + Hero + Footer)  
**Maximale Seite:** Unbegrenzt!

---

**Tipp:** Nutze [builder/BUILDER_DOKUMENTATION.md](BUILDER_DOKUMENTATION.md) für detaillierte Anleitungen zum Erstellen eigener Sections!
