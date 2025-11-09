# 🚀 Migration: JSON → HTML + Meta-JSON

## Was wurde gemacht?

Das Section-System wurde von **einem JSON-File pro Section** auf **HTML + Meta-JSON** umgestellt.

### Vorher (❌ Probleme):
```
sections/hero/hero-fullscreen.json
```
```json
{
  "id": "hero-fullscreen",
  "name": "Hero - Fullscreen",
  "template": "<section class=\"min-h-screen\">...GANZES HTML MIT ESCAPING...</section>"
}
```

**Probleme:**
- ❌ Escaping-Hölle: Alle `"` müssen `\"` sein
- ❌ Unleserlich: HTML als String, kein Syntax-Highlighting
- ❌ Fehleranfällig: Ein fehlendes `\"` bricht alles
- ❌ Schwer zu bearbeiten: Keine Code-Formatierung
- ❌ Große Dateien: Navbar = 8.7KB wegen Escaping

### Nachher (✅ Besser):
```
sections/hero/hero-fullscreen.html       ← Reines HTML
sections/hero/hero-fullscreen.meta.json  ← Nur Metadaten
```

**hero-fullscreen.html:**
```html
<section class="min-h-screen flex items-center justify-center">
  <div class="{{containerWidth}} mx-auto">
    <h1 contenteditable="true">Dein Oldschool Gym</h1>
  </div>
</section>
```

**hero-fullscreen.meta.json:**
```json
{
  "id": "hero-fullscreen",
  "name": "Hero - Fullscreen",
  "category": "hero",
  "icon": "fa-solid fa-rocket",
  "description": "Fullscreen Hero mit Gradient"
}
```

**Vorteile:**
- ✅ **Lesbar**: Echtes HTML mit Syntax-Highlighting
- ✅ **Kein Escaping**: Keine `\"` Probleme mehr
- ✅ **Editor-Support**: VSCode formatiert HTML automatisch
- ✅ **Git-Diffs**: Änderungen klar sichtbar
- ✅ **Kleiner**: hero-fullscreen.html = 1.7KB (vorher 1.9KB mit Escaping)
- ✅ **Wartbar**: Einfach neue Sections hinzufügen

## Migration-Statistik

- ✅ **31 Sections** erfolgreich migriert
- ✅ **0 Fehler**
- 📦 Alte .json Dateien als Backup behalten

## Builder-Anpassungen

**builder.js - loadSectionLibrary():**
```javascript
// Vorher:
'sections/hero/hero-fullscreen.json'

// Nachher:
'sections/hero/hero-fullscreen'  // Lädt .meta.json + .html automatisch
```

## Neue Sections hinzufügen

### 1. HTML-Datei erstellen:
```html
<!-- sections/hero/hero-new.html -->
<section class="{{spacing}} bg-[{{primaryColor}}]">
  <div class="{{containerWidth}} mx-auto">
    <h1 contenteditable="true">Neue Hero Section</h1>
  </div>
</section>
```

### 2. Meta-JSON erstellen:
```json
{
  "id": "hero-new",
  "name": "Hero - New Style",
  "category": "hero",
  "icon": "fa-solid fa-star",
  "description": "Neue Hero Section mit...",
  "editable": {
    "backgroundColor": true
  }
}
```

### 3. In builder.js registrieren:
```javascript
const sections = [
  // Hero
  'sections/hero/hero-fullscreen',
  'sections/hero/hero-new',  // ← Neue Section hinzufügen
];
```

## Testing

✅ **Funktioniert alles wie vorher:**
- Section Library laden
- Sections hinzufügen
- Global Styles ändern
- Section bearbeiten
- Vorschau
- Export

✅ **Zusätzliche Vorteile:**
- Schnelleres Laden (separates Caching für HTML/Meta)
- Einfacher zu debuggen
- Besser wartbar

## Alte JSON-Dateien

Die alten `.json` Dateien wurden **als Backup behalten**.

**Löschen (optional):**
```bash
cd /workspaces/Sportstudio-Thielen/builder
find sections -name "*.json" ! -name "_TEMPLATE.json" ! -name "*.meta.json" -delete
```

## Fazit

🎉 **System ist jetzt viel besser!**
- Skalierbar
- Wartbar
- Fehlerresistent
- Entwicklerfreundlich

---

*Migration durchgeführt am: 2025-11-09*
*Script: migrate-to-html.js*
