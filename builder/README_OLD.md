# 🏗️ Website Builder

Visueller Drag & Drop Website Builder mit Tailwind CSS

## Features

✅ **Drag & Drop** - Sections per Drag & Drop sortieren
✅ **Section Library** - 7+ vorgefertigte Sections
✅ **Globale Styles** - Zentrale Design-Variablen
✅ **Individuelle Styles** - Überschreiben pro Section möglich
✅ **Live-Bearbeitung** - Texte direkt auf Canvas bearbeiten
✅ **Export** - Als HTML exportieren
✅ **Preview** - Live-Vorschau in neuem Tab
✅ **Tailwind CSS** - Moderne, responsive Designs

## Verwendung

1. **Builder öffnen:**
   ```bash
   cd builder
   # Öffne index.html im Browser
   ```

2. **Section hinzufügen:**
   - Klicke auf "Sections" Button
   - Wähle Section aus Library
   - Section wird zur Canvas hinzugefügt

3. **Globale Styles ändern:**
   - Klicke auf "Globale Styles"
   - Ändere Farben, Abrundungen, Spacing etc.
   - Änderungen werden auf ALLE Sections angewendet

4. **Section bearbeiten:**
   - Hover über Section
   - Klicke auf Edit-Button
   - Oder: Texte direkt auf Canvas bearbeiten (contenteditable)

5. **Section sortieren:**
   - Sections per Drag & Drop verschieben

6. **Export:**
   - Klicke auf "Export"
   - HTML-Datei wird heruntergeladen
   - Fertige Website!

## Section Library

- **Hero** - Fullscreen, Split
- **Features** - Grid mit Icons
- **CTA** - Call-to-Action
- **Pricing** - Preistabelle
- **Contact** - Kontaktformular
- **Footer** - Footer mit mehreren Spalten

## Neue Section hinzufügen

In `builder.js`:

```javascript
{
  id: 'deine-section',
  name: 'Section Name',
  category: 'kategorie',
  icon: '🎨',
  template: `
    <section class="{{spacing}} bg-white">
      <div class="container mx-auto px-4">
        <h2 contenteditable="true">Titel</h2>
      </div>
    </section>
  `
}
```

## Platzhalter

- `{{primaryColor}}` - Primary Color
- `{{secondaryColor}}` - Secondary Color
- `{{accentColor}}` - Accent Color
- `{{borderRadius}}` - Border Radius
- `{{spacing}}` - Section Spacing
- `{{fontFamily}}` - Schriftart

## Individuell > Global

Individuelle Section-Styles überschreiben globale Styles automatisch durch höhere Spezifität.

---

**Viel Spaß beim Bauen! 🚀**
