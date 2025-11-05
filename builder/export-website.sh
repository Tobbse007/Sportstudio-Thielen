#!/bin/bash

# ============================================
# WEBSITE EXPORT SCRIPT
# ============================================
# Erstellt einen kompletten Export-Ordner mit der
# im Builder erstellten Website
# ============================================

echo "🏗️  Website Builder - Export Script"
echo "===================================="
echo ""

# Parameter
PROJECT_NAME=${1:-"sportstudio-website"}
EXPORT_DIR="builder/export/$PROJECT_NAME"
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")

echo "📁 Projekt: $PROJECT_NAME"
echo "📂 Export-Verzeichnis: $EXPORT_DIR"
echo ""

# Erstelle Export-Struktur
echo "✨ Erstelle Ordnerstruktur..."
mkdir -p "$EXPORT_DIR"/{assets/{css,js,images,fonts},pages}

# Erstelle basis index.html wenn nicht vorhanden
if [ ! -f "$EXPORT_DIR/index.html" ]; then
  echo "📄 Erstelle index.html Template..."
  cat > "$EXPORT_DIR/index.html" << 'EOF'
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sportstudio Thielen - Oldschool Gym</title>
  <meta name="description" content="Dein authentisches Oldschool Gym in Würchwitz. Seit den 90ern.">
  
  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>
  
  <!-- Font Awesome -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  
  <!-- Custom CSS -->
  <link rel="stylesheet" href="assets/css/custom.css">
</head>
<body>
  
  <!-- HIER SECTIONS AUS DEM BUILDER EINFÜGEN -->
  
  <!-- Custom JavaScript -->
  <script src="assets/js/scripts.js"></script>
</body>
</html>
EOF
fi

# Erstelle custom.css
echo "🎨 Erstelle custom.css..."
cat > "$EXPORT_DIR/assets/css/custom.css" << 'EOF'
/* ============================================
   CUSTOM STYLES - Sportstudio Thielen
   ============================================ */

:root {
  --primary-color: #dc2626;
  --secondary-color: #1f2937;
  --accent-color: #f59e0b;
}

/* Smooth Scrolling */
html {
  scroll-behavior: smooth;
}

/* Custom Animations */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.fade-in {
  animation: fadeIn 0.6s ease-out;
}

/* Mobile Menu Toggle */
.mobile-menu {
  display: none;
}

.mobile-menu.active {
  display: block;
}

/* Hover Effects */
.hover-lift {
  transition: transform 0.3s ease;
}

.hover-lift:hover {
  transform: translateY(-5px);
}

/* Loading Overlay */
.loading {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.loading.hidden {
  display: none;
}

/* Responsive Images */
img {
  max-width: 100%;
  height: auto;
}
EOF

# Erstelle scripts.js
echo "⚡ Erstelle scripts.js..."
cat > "$EXPORT_DIR/assets/js/scripts.js" << 'EOF'
// ============================================
// WEBSITE SCRIPTS - Sportstudio Thielen
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  
  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
    });
  }
  
  // Smooth Scroll für interne Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Scroll-to-Top Button
  const scrollTopBtn = document.getElementById('scroll-top');
  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        scrollTopBtn.classList.remove('hidden');
      } else {
        scrollTopBtn.classList.add('hidden');
      }
    });
    
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
  
  // Lazy Loading für Bilder
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src || img.src;
          img.classList.add('fade-in');
          observer.unobserve(img);
        }
      });
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
  }
  
  // Form Validation (Kontaktformular)
  const contactForm = document.querySelector('form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Hier kannst du Form-Daten verarbeiten
      const formData = new FormData(contactForm);
      
      console.log('Form submitted:', Object.fromEntries(formData));
      
      // Zeige Erfolgs-Nachricht
      alert('Vielen Dank! Wir melden uns bald bei dir.');
      contactForm.reset();
    });
  }
  
  // Loading Animation entfernen
  const loading = document.querySelector('.loading');
  if (loading) {
    setTimeout(() => {
      loading.classList.add('hidden');
    }, 500);
  }
  
});

// Google Analytics (optional)
// window.dataLayer = window.dataLayer || [];
// function gtag(){dataLayer.push(arguments);}
// gtag('js', new Date());
// gtag('config', 'GA_MEASUREMENT_ID');
EOF

# Erstelle README
echo "📝 Erstelle README..."
cat > "$EXPORT_DIR/README.md" << EOF
# $PROJECT_NAME

Website erstellt mit dem Website Builder am $(date +"%d.%m.%Y")

## 📁 Struktur

\`\`\`
$PROJECT_NAME/
├── index.html              # Hauptseite
├── assets/
│   ├── css/
│   │   └── custom.css     # Eigene Styles
│   ├── js/
│   │   └── scripts.js     # Eigene Scripts
│   ├── images/            # Bilder hier ablegen
│   └── fonts/             # Custom Fonts (optional)
├── pages/                 # Weitere Seiten
└── README.md
\`\`\`

## 🚀 Deployment

### Lokal testen

Öffne einfach \`index.html\` im Browser!

### Auf Server hochladen

**Via FTP:**
1. FTP-Client öffnen (z.B. FileZilla)
2. Mit Server verbinden
3. Alle Dateien nach \`/public_html/\` hochladen

**Via Git:**
\`\`\`bash
git add .
git commit -m "Website update"
git push
\`\`\`

## 🛠️ Anpassungen

### Farben ändern

In \`assets/css/custom.css\`:
\`\`\`css
:root {
  --primary-color: #dc2626;
  --secondary-color: #1f2937;
  --accent-color: #f59e0b;
}
\`\`\`

### Bilder hinzufügen

1. Bilder in \`assets/images/\` ablegen
2. In HTML referenzieren: \`<img src="assets/images/bild.jpg">\`

### Weitere Seiten erstellen

1. Neue HTML-Datei in \`pages/\` erstellen
2. Von \`index.html\` kopieren und anpassen
3. Navigation verlinken: \`<a href="pages/kontakt.html">Kontakt</a>\`

## 📦 Technologie

- **Tailwind CSS** (CDN) - Utility-First CSS Framework
- **Font Awesome** (CDN) - Icons
- **Vanilla JavaScript** - Interaktionen
- **Responsive Design** - Mobile-First

## 📞 Support

Bei Fragen zum Builder: Siehe \`builder/BUILDER_DOKUMENTATION.md\`

---

Erstellt am: $(date +"%d.%m.%Y um %H:%M Uhr")
EOF

# Erstelle .htaccess für Apache (optional)
echo "⚙️  Erstelle .htaccess..."
cat > "$EXPORT_DIR/.htaccess" << 'EOF'
# ============================================
# HTACCESS - Sportstudio Website
# ============================================

# Error Pages
ErrorDocument 404 /404.html

# Compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>

# Browser Caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>

# Force HTTPS (optional - auskommentieren wenn benötigt)
# RewriteEngine On
# RewriteCond %{HTTPS} off
# RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
EOF

# Erstelle robots.txt
echo "🤖 Erstelle robots.txt..."
cat > "$EXPORT_DIR/robots.txt" << 'EOF'
User-agent: *
Allow: /

Sitemap: https://www.sportstudio-thielen.de/sitemap.xml
EOF

# Erstelle Platzhalter für Bilder
echo "🖼️  Erstelle Bildplatzhalter..."
echo "# Bilder hier ablegen" > "$EXPORT_DIR/assets/images/.gitkeep"

# Erstelle Deployment Script
echo "🚀 Erstelle deploy.sh..."
cat > "$EXPORT_DIR/deploy.sh" << 'EOF'
#!/bin/bash

# ============================================
# DEPLOYMENT SCRIPT
# ============================================

echo "🚀 Deploying website..."

# FTP Upload (anpassen!)
# lftp -u username,password ftp.your-server.com << END
# mirror -R --delete --verbose ./ /public_html/
# bye
# END

# Oder rsync für SSH
# rsync -avz --delete ./ user@server:/var/www/html/

echo "✅ Deployment complete!"
EOF
chmod +x "$EXPORT_DIR/deploy.sh"

# Zusammenfassung
echo ""
echo "✅ Export erfolgreich!"
echo ""
echo "📂 Website-Ordner: $EXPORT_DIR"
echo ""
echo "📝 Nächste Schritte:"
echo "   1. Builder öffnen: builder/index.html"
echo "   2. Website zusammenstellen"
echo "   3. 'Website erstellen' klicken"
echo "   4. Exportierte index.html nach $EXPORT_DIR/ verschieben"
echo "   5. Bilder in assets/images/ ablegen"
echo "   6. Auf Server hochladen!"
echo ""
echo "📖 Dokumentation: builder/BUILDER_DOKUMENTATION.md"
echo ""
