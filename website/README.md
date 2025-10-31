# 🏋️ Sportstudio Thielen Website

## 📁 Projektstruktur

```
website/
├── index.php                 # Startseite (Hero, Über uns, Services, etc.)
├── ueber-uns.php            # Über uns Seite
├── preise.php               # Preise & Tarife
├── blog.php                 # Blog-Übersicht
├── kontakt.php              # Kontaktformular & Anfahrt
├── mitglied-werden.php      # Mitgliedschaft & Probetraining
├── impressum.php            # Impressum
├── datenschutz.php          # Datenschutzerklärung
│
├── includes/
│   ├── navbar.php           # Globale Navigation (einmal ändern = überall geändert)
│   └── footer.php           # Globaler Footer (einmal ändern = überall geändert)
│
└── assets/
    ├── css/
    │   └── custom.css       # Custom Styles (Ergänzung zu Tailwind)
    ├── js/
    │   └── modals.js        # JavaScript für Modals & Interaktionen
    └── images/
        └── (Bilder hier ablegen)
```

---

## 🎨 Tech Stack

- **HTML5** - Seitenstruktur
- **Tailwind CSS** - Responsive Design (über CDN)
- **JavaScript (Vanilla)** - Interaktionen & Modals
- **PHP** - Includes für Navbar/Footer (keine Datenbank nötig)

---

## ✨ Features

### ✅ Globale Components
- **Navbar** (`includes/navbar.php`) wird auf jeder Seite eingebunden
- **Footer** (`includes/footer.php`) wird auf jeder Seite eingebunden
- **Einmal ändern = überall geändert!**

### ✅ Responsive Design
- Mobile-First mit Tailwind CSS
- Eckige Buttons & Cards (modernes Design wie FitX)
- Blau als Hauptfarbe (statt Orange)

### ✅ Interaktionen
- Pop-ups/Modals für Service-Details
- Smooth Scrolling
- Hover-Effekte
- Mobile Menu

---

## 🚀 So verwendest du das System

### Neue Seite erstellen:

1. Neue PHP-Datei erstellen (z.B. `neue-seite.php`)
2. Diesen Code einfügen:

```php
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Titel der Seite</title>
  
  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="assets/css/custom.css">
</head>
<body>

  <!-- Navbar automatisch laden -->
  <?php include 'includes/navbar.php'; ?>

  <!-- DEIN CONTENT HIER -->
  <section class="py-20">
    <div class="max-w-7xl mx-auto px-4">
      <h1 class="text-4xl font-bold">Deine Überschrift</h1>
      <p>Dein Text...</p>
    </div>
  </section>

  <!-- Footer automatisch laden -->
  <?php include 'includes/footer.php'; ?>

  <script src="assets/js/modals.js"></script>
</body>
</html>
```

3. Fertig! Navbar & Footer werden automatisch geladen.

---

## 🔧 Navbar/Footer ändern

### Navbar ändern:
Öffne `includes/navbar.php` und ändere dort den Code.
→ Änderung wirkt sich **automatisch auf alle Seiten** aus!

### Footer ändern:
Öffne `includes/footer.php` und ändere dort den Code.
→ Änderung wirkt sich **automatisch auf alle Seiten** aus!

### Beispiel: Neuen Menüpunkt hinzufügen

1. Öffne `includes/navbar.php`
2. Füge in der Navigation hinzu:

```html
<a href="neue-seite.php" class="text-gray-700 hover:text-blue-600 font-medium">
  Neuer Menüpunkt
</a>
```

3. Speichern → Fertig! Erscheint auf allen Seiten.

---

## 🎨 Farben anpassen

### Blau-Töne (Tailwind):
- `bg-blue-600` → Hauptfarbe für Buttons
- `text-blue-600` → Textfarbe
- `border-blue-600` → Rahmen

### Custom Colors in Tailwind Config (in jeder PHP-Datei im `<script>`):
```javascript
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: {
          600: '#2563eb',  // Ändere diesen Wert für andere Blau-Töne
        }
      }
    }
  }
}
```

---

## 📱 Responsive Breakpoints

Tailwind CSS Breakpoints:
- `sm:` → ab 640px (Tablet)
- `md:` → ab 768px
- `lg:` → ab 1024px (Desktop)
- `xl:` → ab 1280px

### Beispiel:
```html
<div class="text-sm md:text-base lg:text-lg">
  <!-- Kleine Schrift auf Mobile, größer auf Desktop -->
</div>
```

---

## 🛠️ Wartung & Updates

### ✅ Vorteile dieses Systems:

1. **Einfach:** Nur HTML, CSS, JS, PHP - keine Frameworks
2. **Skalierbar:** Neue Seiten schnell hinzufügen
3. **Wartbar:** Navbar/Footer einmal ändern = überall geändert
4. **Schnell:** Keine Datenbank, keine Ladezeiten
5. **Tailwind:** Responsive & modern ohne viel Custom CSS

### ❌ Was du NICHT tun solltest:

- Navbar/Footer direkt in jede Seite kopieren → Nutze `include`!
- Inline-Styles verwenden → Nutze Tailwind-Klassen!
- Zu viele Custom CSS Dateien → Bleib bei `custom.css`

---

## 🚀 Deployment

### Webspace-Anforderungen:
- PHP 7.4+ (oder höher)
- Kein MySQL nötig
- Einfacher Shared Hosting reicht

### Upload:
1. Alle Dateien per FTP hochladen
2. Domain auf `index.php` zeigen lassen
3. Fertig!

---

## 📞 Support

Bei Fragen oder Problemen:
- Schau in die Tailwind Docs: https://tailwindcss.com/docs
- Prüfe `includes/navbar.php` und `includes/footer.php`
- Prüfe `assets/js/modals.js` für JavaScript-Fehler

---

**Viel Erfolg mit der Website! 💪**
