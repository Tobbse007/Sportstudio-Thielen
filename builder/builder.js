// ============================================
// WEBSITE BUILDER - JAVASCRIPT
// ============================================

// Globale Variablen
let globalStyles = {
  primaryColor: '#2563eb',      // Kräftiges Blau (Sportstudio Thielen)
  secondaryColor: '#1e293b',    // Dunkelgrau/Schwarz
  accentColor: '#3b82f6',       // Helleres Blau
  textColor: '#1a1a1a',         // Schwarz/Dunkelgrau
  backgroundColor: '#ffffff',   // Weiß
  borderRadius: '4px',          // Eckige Elemente
  spacing: 'py-20',             // Viel Weißraum
  fontFamily: 'font-sans',      // Montserrat via Tailwind
  fontSize: 'text-base',
  fontWeight: 'font-semibold',  // Modern mit Kanten
  containerWidth: 'max-w-7xl'   // Breite Container wie FitX
};

let currentSectionId = null;
let sectionCounter = 0;
let sectionLibrary = [];
let confirmCallback = null;
let categories = {};
let currentCategory = null;

// ============================================
// PRESETS SYSTEM
// ============================================

const stylePresets = {
  fitx: {
    name: 'FitX Style',
    icon: 'fa-dumbbell',
    styles: {
      primaryColor: '#ff6900',
      secondaryColor: '#1a1a1a',
      accentColor: '#ff8533',
      textColor: '#1a1a1a',
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      spacing: 'py-20',
      fontFamily: 'font-sans',
      fontSize: 'text-base',
      fontWeight: 'font-bold',
      containerWidth: 'max-w-7xl'
    }
  },
  default: {
    name: 'Standard Blau',
    icon: 'fa-circle',
    styles: {
      primaryColor: '#3b82f6',
      secondaryColor: '#1f2937',
      accentColor: '#f59e0b',
      textColor: '#1f2937',
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      spacing: 'py-16',
      fontFamily: 'font-sans',
      fontSize: 'text-base',
      fontWeight: 'font-normal',
      containerWidth: 'max-w-7xl'
    }
  },
  dark: {
    name: 'Dark Mode',
    icon: 'fa-moon',
    styles: {
      primaryColor: '#3b82f6',      // Blau statt Lila
      secondaryColor: '#0f172a',
      accentColor: '#60a5fa',       // Helles Blau statt Orange
      textColor: '#f8fafc',
      backgroundColor: '#1e293b',
      borderRadius: '12px',
      spacing: 'py-20',
      fontFamily: 'font-sans',
      fontSize: 'text-base',
      fontWeight: 'font-medium',
      containerWidth: 'max-w-7xl'
    }
  },
  minimal: {
    name: 'Minimal',
    icon: 'fa-minimize',
    styles: {
      primaryColor: '#000000',
      secondaryColor: '#ffffff',
      accentColor: '#6b7280',
      textColor: '#111827',
      backgroundColor: '#ffffff',
      borderRadius: '0px',
      spacing: 'py-24',
      fontFamily: 'font-mono',
      fontSize: 'text-sm',
      fontWeight: 'font-light',
      containerWidth: 'max-w-6xl'
    }
  },
  vibrant: {
    name: 'Vibrant',
    icon: 'fa-wand-magic-sparkles',
    styles: {
      primaryColor: '#ec4899',
      secondaryColor: '#8b5cf6',
      accentColor: '#06b6d4',
      textColor: '#1f2937',
      backgroundColor: '#fef3c7',
      borderRadius: '24px',
      spacing: 'py-16',
      fontFamily: 'font-sans',
      fontSize: 'text-lg',
      fontWeight: 'font-bold',
      containerWidth: 'max-w-7xl'
    }
  },
  thielen: {
    name: 'Sportstudio Thielen',
    icon: 'fa-dumbbell',
    styles: {
      primaryColor: '#2563eb',      // Kräftiges Blau (wie FitX Orange)
      secondaryColor: '#1e293b',    // Dunkelgrau/Schwarz
      accentColor: '#3b82f6',       // Helleres Blau für Hover
      textColor: '#1a1a1a',         // Schwarz/Dunkelgrau
      backgroundColor: '#ffffff',   // Weiß
      borderRadius: '4px',          // Eckige Elemente (nicht rund!)
      spacing: 'py-20',             // Viel Weißraum
      fontFamily: 'font-sans',      // Montserrat via Tailwind
      fontSize: 'text-base',        
      fontWeight: 'font-semibold',  // Modern mit Kanten
      containerWidth: 'max-w-7xl'   // Wie FitX - breite Container
    }
  }
};

function loadPreset(presetName) {
  const preset = stylePresets[presetName];
  if (preset) {
    globalStyles = {...preset.styles};
    loadGlobalStyles();
    refreshAllSections();
    showAlert('Preset geladen', `"${preset.name}" wurde erfolgreich geladen.`);
  }
}

function saveCustomPreset() {
  showInput('Custom Preset speichern', 'Gib deinem Preset einen Namen:', (name) => {
    const customPresets = JSON.parse(localStorage.getItem('customPresets') || '{}');
    customPresets[name] = {
      name: name,
      icon: 'fa-star',
      styles: {...globalStyles}
    };
    localStorage.setItem('customPresets', JSON.stringify(customPresets));
    showAlert('✅ Preset gespeichert', `"${name}" wurde erfolgreich gespeichert.`);
    loadCustomPresets();
  });
}

function loadCustomPresets() {
  const customPresets = JSON.parse(localStorage.getItem('customPresets') || '{}');
  return customPresets;
}

// ============================================
// CUSTOM MODALS
// ============================================

function showConfirm(title, message, onConfirm) {
  const modal = document.getElementById('confirm-modal');
  document.getElementById('confirm-title').textContent = title;
  document.getElementById('confirm-message').textContent = message;
  confirmCallback = onConfirm;
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function confirmModalConfirm() {
  const modal = document.getElementById('confirm-modal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  if (confirmCallback) {
    confirmCallback();
    confirmCallback = null;
  }
}

function confirmModalCancel() {
  const modal = document.getElementById('confirm-modal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  confirmCallback = null;
}

function showAlert(title, message) {
  const modal = document.getElementById('alert-modal');
  document.getElementById('alert-title').textContent = title;
  document.getElementById('alert-message').textContent = message;
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeAlert() {
  const modal = document.getElementById('alert-modal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

// Input Modal Functions
let inputModalCallback = null;

function showInput(title, message, onConfirm) {
  const modal = document.getElementById('input-modal');
  const inputField = document.getElementById('input-field');
  document.getElementById('input-title').textContent = title;
  document.getElementById('input-message').textContent = message;
  inputField.value = '';
  inputModalCallback = onConfirm;
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  
  // Focus auf Input-Feld
  setTimeout(() => inputField.focus(), 100);
  
  // Enter-Taste zum Bestätigen
  inputField.onkeypress = (e) => {
    if (e.key === 'Enter') {
      inputModalConfirm();
    }
  };
}

function inputModalConfirm() {
  const inputField = document.getElementById('input-field');
  const value = inputField.value.trim();
  const modal = document.getElementById('input-modal');
  
  if (value && inputModalCallback) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    inputModalCallback(value);
    inputModalCallback = null;
  }
}

function inputModalCancel() {
  const modal = document.getElementById('input-modal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  inputModalCallback = null;
}

// Section Library aus JSON-Dateien laden (MIT PARALLELEM LADEN)
async function loadSectionLibrary() {
  // Alle verfügbaren Sections (ohne Extension - lädt .meta.json + .html)
  const sections = [
    // Navigation
    'sections/navigation/navbar-fixed',
    'sections/navigation/navbar-transparent',
    'sections/navigation/navbar-fitx-style',
    'sections/navigation/navbar-thielen-autohide',
    // Hero
    'sections/hero/hero-fullscreen',
    'sections/hero/hero-split',
    'sections/hero/hero-gym-background',
    // Features
    'sections/features/features-grid',
    'sections/features/features-steps-3',
    'sections/features/features-benefits-list',
    'sections/features/about-gym-story',
    'sections/features/services-gym-cards',
    // Stats
    'sections/stats/stats-4-grid',
    // Gallery
    'sections/gallery/gallery-grid-6',
    'sections/gallery/gallery-masonry',
    // Blog
    'sections/blog/blog-preview-cards',
    // Team
    'sections/team/team-grid-3',
    'sections/team/team-trainers-popup',
    // Partners
    'sections/partners/partners-logo-grid',
    // Testimonials
    'sections/testimonials/testimonials-cards',
    'sections/testimonials/testimonials-slider',
    'sections/testimonials/testimonials-gym-members',
    // CTA
    'sections/cta/cta-center',
    // Pricing
    'sections/pricing/pricing-table',
    'sections/pricing/pricing-gym-cards',
    // FAQ
    'sections/faq/faq-accordion',
    // Newsletter
    'sections/newsletter/newsletter-signup-form',
    // Contact
    'sections/contact/contact-form',
    'sections/contact/contact-form-maps',
    // Footer
    'sections/footer/footer-full',
    'sections/footer/footer-gym-complete'
  ];
  
  console.log('%c📦 Loading Section Library (PARALLEL MODE)...', 'color: #3b82f6; font-weight: bold; font-size: 14px;');
  console.log(`   Total: ${sections.length} sections to load\n`);
  
  const startTime = performance.now();
  
  // PARALLELES LADEN - alle Sections gleichzeitig laden!
  const loadPromises = sections.map(async (basePath) => {
    const sectionName = basePath.split('/').pop();
    const cacheBuster = `?v=${Date.now()}`;
    
    try {
      // Lade Meta und HTML PARALLEL mit Promise.all
      const [metaResponse, htmlResponse] = await Promise.all([
        fetch(`${basePath}.meta.json${cacheBuster}`),
        fetch(`${basePath}.html${cacheBuster}`)
      ]);
      
      const [meta, template] = await Promise.all([
        metaResponse.json(),
        htmlResponse.text()
      ]);
      
      console.log(`%c✅ ${sectionName}`, 'color: #10b981; font-weight: bold;');
      
      return {
        ...meta,
        template: template,
        _loadedFrom: 'HTML+META'
      };
    } catch (error) {
      // Fallback: Versuche alte JSON zu laden
      try {
        const jsonResponse = await fetch(`${basePath}.json${cacheBuster}`);
        const section = await jsonResponse.json();
        console.log(`%c⚠️ ${sectionName} (OLD JSON)`, 'color: #f59e0b; font-weight: bold;');
        return {
          ...section,
          _loadedFrom: 'JSON-OLD'
        };
      } catch (jsonError) {
        console.error(`%c❌ ${sectionName} FAILED`, 'color: #ef4444; font-weight: bold;', error);
        return null;
      }
    }
  });
  
  // Warte auf ALLE Sections gleichzeitig
  const loadedSections = await Promise.all(loadPromises);
  
  // Filtere null-Werte (fehlgeschlagene Loads) und füge zu Library hinzu
  sectionLibrary = loadedSections.filter(section => section !== null);
  
  const endTime = performance.now();
  const loadTime = ((endTime - startTime) / 1000).toFixed(2);
  
  console.log(`\n%c✅ Section Library Loaded in ${loadTime}s!`, 'color: #10b981; font-weight: bold; font-size: 14px;');
  console.log(`   Total loaded: ${sectionLibrary.length} sections`);
  
  // Statistik: Wie viele von HTML vs JSON?
  const htmlCount = sectionLibrary.filter(s => s._loadedFrom === 'HTML+META').length;
  const jsonCount = sectionLibrary.filter(s => s._loadedFrom === 'JSON-OLD').length;
  console.log(`\n%c📊 STATISTICS:`, 'color: #3b82f6; font-weight: bold;');
  console.log(`   🆕 HTML+Meta: ${htmlCount} sections (${Math.round(htmlCount/sectionLibrary.length*100)}%)`);
  console.log(`   🗂️ Old JSON:  ${jsonCount} sections (${Math.round(jsonCount/sectionLibrary.length*100)}%)`);
  console.log(`   ⚡ Load Time: ${loadTime}s (parallel loading)`);
  
  if (jsonCount > 0) {
    console.log(`\n%c⚠️ WARNING: ${jsonCount} sections still using old JSON format!`, 'color: #ef4444; font-weight: bold;');
    console.log('   Run migration script to convert them.');
  } else {
    console.log(`\n%c🎉 PERFECT! All sections using new HTML+Meta format!`, 'color: #10b981; font-weight: bold;');
  }
  console.log('\n' + '='.repeat(60) + '\n');
  
  // Sortiere nach Kategorie
  sectionLibrary.sort((a, b) => {
    const categoryOrder = ['navigation', 'hero', 'features', 'stats', 'gallery', 'team', 'testimonials', 'cta', 'pricing', 'faq', 'contact', 'footer'];
    return categoryOrder.indexOf(a.category) - categoryOrder.indexOf(b.category);
  });
  
  initSectionLibrary();
}

// Alte Section Library (Fallback)
const sectionLibraryBackup = [
  {
    id: 'hero-1',
    name: 'Hero - Fullscreen',
    category: 'hero',
    icon: '🎯',
    template: `
      <section class="{{spacing}} bg-gradient-to-r from-[{{primaryColor}}] to-[{{secondaryColor}}] text-white">
        <div class="container mx-auto px-4 text-center">
          <h1 class="text-6xl {{fontFamily}} font-bold mb-6" contenteditable="true">
            Dein Oldschool Gym
          </h1>
          <p class="text-xl mb-8" contenteditable="true">
            Authentisch. Familiär. Seit den 90ern.
          </p>
          <button class="bg-white text-[{{primaryColor}}] px-8 py-3 rounded-[{{borderRadius}}] font-bold hover:scale-105 transition" contenteditable="true">
            Probetraining buchen
          </button>
        </div>
      </section>
    `,
    editableFields: [
      { name: 'Überschrift', type: 'text', selector: 'h1' },
      { name: 'Untertitel', type: 'text', selector: 'p' },
      { name: 'Button Text', type: 'text', selector: 'button' }
    ]
  },
  {
    id: 'hero-2',
    name: 'Hero - Split',
    category: 'hero',
    icon: '📱',
    template: `
      <section class="{{spacing}} bg-white">
        <div class="container mx-auto px-4">
          <div class="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 class="text-5xl {{fontFamily}} font-bold mb-6 text-[{{secondaryColor}}]" contenteditable="true">
                Sportstudio Thielen
              </h1>
              <p class="text-lg text-gray-600 mb-8" contenteditable="true">
                Dein authentisches Oldschool Gym in Würchwitz. Keine kommerzielle Kette, sondern echte Atmosphäre.
              </p>
              <button class="bg-[{{primaryColor}}] text-white px-6 py-3 rounded-[{{borderRadius}}] font-bold hover:bg-[{{accentColor}}] transition" contenteditable="true">
                Mehr erfahren
              </button>
            </div>
            <div class="bg-gray-200 h-96 rounded-[{{borderRadius}}] flex items-center justify-center">
              <span class="text-gray-400">📸 Bild hier</span>
            </div>
          </div>
        </div>
      </section>
    `
  },
  {
    id: 'features-grid',
    name: 'Features Grid',
    category: 'features',
    icon: '✨',
    template: `
      <section class="{{spacing}} bg-gray-50">
        <div class="container mx-auto px-4">
          <h2 class="text-4xl {{fontFamily}} font-bold text-center mb-12 text-[{{secondaryColor}}]" contenteditable="true">
            Warum Sportstudio Thielen?
          </h2>
          <div class="grid md:grid-cols-4 gap-8">
            <div class="text-center p-6 bg-white rounded-[{{borderRadius}}] shadow-lg hover:shadow-xl transition">
              <div class="text-5xl mb-4">💪</div>
              <h3 class="text-xl font-bold mb-3 text-[{{secondaryColor}}]" contenteditable="true">Oldschool</h3>
              <p class="text-gray-600" contenteditable="true">Authentisches Gym-Feeling</p>
            </div>
            <div class="text-center p-6 bg-white rounded-[{{borderRadius}}] shadow-lg hover:shadow-xl transition">
              <div class="text-5xl mb-4">🤝</div>
              <h3 class="text-xl font-bold mb-3 text-[{{secondaryColor}}]" contenteditable="true">Familiär</h3>
              <p class="text-gray-600" contenteditable="true">Man kennt sich</p>
            </div>
            <div class="text-center p-6 bg-white rounded-[{{borderRadius}}] shadow-lg hover:shadow-xl transition">
              <div class="text-5xl mb-4">🏋️</div>
              <h3 class="text-xl font-bold mb-3 text-[{{secondaryColor}}]" contenteditable="true">Frei</h3>
              <p class="text-gray-600" contenteditable="true">Selbstständiges Training</p>
            </div>
            <div class="text-center p-6 bg-white rounded-[{{borderRadius}}] shadow-lg hover:shadow-xl transition">
              <div class="text-5xl mb-4">🔓</div>
              <h3 class="text-xl font-bold mb-3 text-[{{secondaryColor}}]" contenteditable="true">Flexibel</h3>
              <p class="text-gray-600" contenteditable="true">06:00 - 22:00 Uhr</p>
            </div>
          </div>
        </div>
      </section>
    `
  },
  {
    id: 'cta-1',
    name: 'Call-to-Action',
    category: 'cta',
    icon: '🎯',
    template: `
      <section class="{{spacing}} bg-[{{primaryColor}}] text-white">
        <div class="container mx-auto px-4 text-center">
          <h2 class="text-4xl {{fontFamily}} font-bold mb-4" contenteditable="true">
            Bereit für dein Training?
          </h2>
          <p class="text-xl mb-8" contenteditable="true">
            Komm vorbei und überzeug dich selbst!
          </p>
          <button class="bg-white text-[{{primaryColor}}] px-8 py-3 rounded-[{{borderRadius}}] font-bold hover:scale-105 transition" contenteditable="true">
            Probetraining vereinbaren
          </button>
        </div>
      </section>
    `
  },
  {
    id: 'pricing-table',
    name: 'Preistabelle',
    category: 'pricing',
    icon: '💰',
    template: `
      <section class="{{spacing}} bg-white">
        <div class="container mx-auto px-4">
          <h2 class="text-4xl {{fontFamily}} font-bold text-center mb-12 text-[{{secondaryColor}}]" contenteditable="true">
            Unsere Preise
          </h2>
          <div class="grid md:grid-cols-3 gap-8">
            <div class="border-2 border-gray-200 rounded-[{{borderRadius}}] p-8 hover:border-[{{primaryColor}}] transition">
              <h3 class="text-2xl font-bold mb-4 text-[{{secondaryColor}}]" contenteditable="true">Basic</h3>
              <div class="text-4xl font-bold mb-6 text-[{{primaryColor}}]" contenteditable="true">29€<span class="text-lg">/Monat</span></div>
              <ul class="space-y-3 mb-8">
                <li class="flex items-center gap-2"><i class="fas fa-check text-green-500"></i> <span contenteditable="true">Gerätetraining</span></li>
                <li class="flex items-center gap-2"><i class="fas fa-check text-green-500"></i> <span contenteditable="true">Chip-Zugang</span></li>
              </ul>
              <button class="w-full bg-[{{primaryColor}}] text-white py-3 rounded-[{{borderRadius}}] font-bold hover:bg-[{{accentColor}}] transition">Wählen</button>
            </div>
            <div class="border-2 border-[{{primaryColor}}] rounded-[{{borderRadius}}] p-8 relative transform scale-105">
              <div class="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[{{accentColor}}] text-white px-4 py-1 rounded-full text-sm font-bold">BELIEBT</div>
              <h3 class="text-2xl font-bold mb-4 text-[{{secondaryColor}}]" contenteditable="true">Premium</h3>
              <div class="text-4xl font-bold mb-6 text-[{{primaryColor}}]" contenteditable="true">49€<span class="text-lg">/Monat</span></div>
              <ul class="space-y-3 mb-8">
                <li class="flex items-center gap-2"><i class="fas fa-check text-green-500"></i> <span contenteditable="true">Alles aus Basic</span></li>
                <li class="flex items-center gap-2"><i class="fas fa-check text-green-500"></i> <span contenteditable="true">Personal Training</span></li>
                <li class="flex items-center gap-2"><i class="fas fa-check text-green-500"></i> <span contenteditable="true">Ernährungsberatung</span></li>
              </ul>
              <button class="w-full bg-[{{primaryColor}}] text-white py-3 rounded-[{{borderRadius}}] font-bold hover:bg-[{{accentColor}}] transition">Wählen</button>
            </div>
            <div class="border-2 border-gray-200 rounded-[{{borderRadius}}] p-8 hover:border-[{{primaryColor}}] transition">
              <h3 class="text-2xl font-bold mb-4 text-[{{secondaryColor}}]" contenteditable="true">Jahres-Abo</h3>
              <div class="text-4xl font-bold mb-6 text-[{{primaryColor}}]" contenteditable="true">299€<span class="text-lg">/Jahr</span></div>
              <ul class="space-y-3 mb-8">
                <li class="flex items-center gap-2"><i class="fas fa-check text-green-500"></i> <span contenteditable="true">2 Monate gratis</span></li>
                <li class="flex items-center gap-2"><i class="fas fa-check text-green-500"></i> <span contenteditable="true">Alle Features</span></li>
              </ul>
              <button class="w-full bg-[{{primaryColor}}] text-white py-3 rounded-[{{borderRadius}}] font-bold hover:bg-[{{accentColor}}] transition">Wählen</button>
            </div>
          </div>
        </div>
      </section>
    `
  },
  {
    id: 'contact-form',
    name: 'Kontaktformular',
    category: 'contact',
    icon: '📧',
    template: `
      <section class="{{spacing}} bg-gray-50">
        <div class="container mx-auto px-4">
          <div class="max-w-2xl mx-auto">
            <h2 class="text-4xl {{fontFamily}} font-bold text-center mb-4 text-[{{secondaryColor}}]" contenteditable="true">
              Kontaktiere uns
            </h2>
            <p class="text-center text-gray-600 mb-8" contenteditable="true">
              Hast du Fragen? Schreib uns eine Nachricht!
            </p>
            <form class="bg-white p-8 rounded-[{{borderRadius}}] shadow-lg">
              <div class="mb-4">
                <label class="block text-gray-700 mb-2" contenteditable="true">Name</label>
                <input type="text" class="w-full px-4 py-2 border border-gray-300 rounded-[{{borderRadius}}] focus:border-[{{primaryColor}}] focus:outline-none">
              </div>
              <div class="mb-4">
                <label class="block text-gray-700 mb-2" contenteditable="true">E-Mail</label>
                <input type="email" class="w-full px-4 py-2 border border-gray-300 rounded-[{{borderRadius}}] focus:border-[{{primaryColor}}] focus:outline-none">
              </div>
              <div class="mb-4">
                <label class="block text-gray-700 mb-2" contenteditable="true">Nachricht</label>
                <textarea rows="5" class="w-full px-4 py-2 border border-gray-300 rounded-[{{borderRadius}}] focus:border-[{{primaryColor}}] focus:outline-none"></textarea>
              </div>
              <button type="submit" class="w-full bg-[{{primaryColor}}] text-white py-3 rounded-[{{borderRadius}}] font-bold hover:bg-[{{accentColor}}] transition" contenteditable="true">
                Absenden
              </button>
            </form>
          </div>
        </div>
      </section>
    `
  },
  {
    id: 'footer-1',
    name: 'Footer',
    category: 'footer',
    icon: '⬇️',
    template: `
      <footer class="bg-[{{secondaryColor}}] text-white py-12">
        <div class="container mx-auto px-4">
          <div class="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 class="text-xl font-bold mb-4" contenteditable="true">Sportstudio Thielen</h3>
              <p class="text-gray-400" contenteditable="true">Oldschool Gym</p>
            </div>
            <div>
              <h4 class="font-bold mb-4" contenteditable="true">Kontakt</h4>
              <p class="text-gray-400" contenteditable="true">📞 +49 123 456789</p>
              <p class="text-gray-400" contenteditable="true">✉️ info@sportstudio-thielen.de</p>
            </div>
            <div>
              <h4 class="font-bold mb-4" contenteditable="true">Öffnungszeiten</h4>
              <p class="text-gray-400" contenteditable="true">Mo-So: 06:00 - 22:00 Uhr</p>
            </div>
            <div>
              <h4 class="font-bold mb-4" contenteditable="true">Links</h4>
              <ul class="space-y-2 text-gray-400">
                <li><a href="#" class="hover:text-[{{primaryColor}}]" contenteditable="true">Impressum</a></li>
                <li><a href="#" class="hover:text-[{{primaryColor}}]" contenteditable="true">Datenschutz</a></li>
              </ul>
            </div>
          </div>
          <div class="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p contenteditable="true">&copy; 2025 Sportstudio Thielen. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    `
  }
];

// ============================================
// INITIALISIERUNG
// ============================================

document.addEventListener('DOMContentLoaded', async () => {
  await loadSectionLibrary();
  initSectionLibrary();  // Section Library UI initialisieren
  initDragAndDrop();
  loadGlobalStyles();
});

// Section Library initialisieren
function initSectionLibrary() {
  const categoriesView = document.getElementById('categories-view');
  const loadingSpinner = document.getElementById('sections-loading');
  
  // Verstecke Spinner, zeige Kategorien
  if (loadingSpinner) {
    loadingSpinner.classList.add('hidden');
  }
  if (categoriesView) {
    categoriesView.classList.remove('hidden');
  }
  
  // Gruppiere nach Kategorien
  categories = {};
  sectionLibrary.forEach(section => {
    if (!categories[section.category]) {
      categories[section.category] = [];
    }
    categories[section.category].push(section);
  });
  
  // Kategorie-Namen mit Font Awesome Icons
  const categoryInfo = {
    'navigation': { icon: 'fa-compass', name: 'Navigation', bgColor: '#dbeafe', iconColor: '#2563eb', hoverBg: '#bfdbfe', hoverColor: '#1d4ed8' },
    'hero': { icon: 'fa-rocket', name: 'Hero', bgColor: '#e9d5ff', iconColor: '#9333ea', hoverBg: '#d8b4fe', hoverColor: '#7e22ce' },
    'about': { icon: 'fa-heart', name: 'Über Uns', bgColor: '#fce7f3', iconColor: '#ec4899', hoverBg: '#fbcfe8', hoverColor: '#db2777' },
    'features': { icon: 'fa-star', name: 'Features', bgColor: '#fef3c7', iconColor: '#f59e0b', hoverBg: '#fde68a', hoverColor: '#d97706' },
    'stats': { icon: 'fa-chart-line', name: 'Statistiken', bgColor: '#d1fae5', iconColor: '#10b981', hoverBg: '#a7f3d0', hoverColor: '#059669' },
    'gallery': { icon: 'fa-images', name: 'Galerie', bgColor: '#d1fae5', iconColor: '#10b981', hoverBg: '#a7f3d0', hoverColor: '#059669' },
    'blog': { icon: 'fa-newspaper', name: 'Blog', bgColor: '#ddd6fe', iconColor: '#8b5cf6', hoverBg: '#c4b5fd', hoverColor: '#7c3aed' },
    'team': { icon: 'fa-users', name: 'Team', bgColor: '#fce7f3', iconColor: '#ec4899', hoverBg: '#fbcfe8', hoverColor: '#db2777' },
    'partners': { icon: 'fa-handshake', name: 'Partner', bgColor: '#fef9c3', iconColor: '#eab308', hoverBg: '#fef08a', hoverColor: '#ca8a04' },
    'testimonials': { icon: 'fa-quote-left', name: 'Testimonials', bgColor: '#e0e7ff', iconColor: '#6366f1', hoverBg: '#c7d2fe', hoverColor: '#4f46e5' },
    'cta': { icon: 'fa-bullhorn', name: 'Call-to-Action', bgColor: '#fee2e2', iconColor: '#ef4444', hoverBg: '#fecaca', hoverColor: '#dc2626' },
    'pricing': { icon: 'fa-tag', name: 'Preise', bgColor: '#fed7aa', iconColor: '#f97316', hoverBg: '#fdba74', hoverColor: '#ea580c' },
    'faq': { icon: 'fa-circle-question', name: 'FAQ', bgColor: '#cffafe', iconColor: '#06b6d4', hoverBg: '#a5f3fc', hoverColor: '#0891b2' },
    'newsletter': { icon: 'fa-envelope-open-text', name: 'Newsletter', bgColor: '#fce7f3', iconColor: '#f472b6', hoverBg: '#fbcfe8', hoverColor: '#ec4899' },
    'contact': { icon: 'fa-envelope', name: 'Kontakt', bgColor: '#ccfbf1', iconColor: '#14b8a6', hoverBg: '#99f6e4', hoverColor: '#0d9488' },
    'footer': { icon: 'fa-arrow-down', name: 'Footer', bgColor: '#e5e7eb', iconColor: '#6b7280', hoverBg: '#d1d5db', hoverColor: '#4b5563' }
  };
  
  // Sortiere Kategorien
  const sortedCategories = ['navigation', 'hero', 'about', 'features', 'stats', 'gallery', 'blog', 'team', 'partners', 'testimonials', 'cta', 'pricing', 'faq', 'newsletter', 'contact', 'footer'];
  
  categoriesView.innerHTML = '';
  
  sortedCategories.forEach(categoryKey => {
    if (categories[categoryKey]) {
      const catInfo = categoryInfo[categoryKey] || { icon: 'fa-cube', name: categoryKey, bgColor: '#e5e7eb', iconColor: '#6b7280', hoverBg: '#d1d5db', hoverColor: '#4b5563' };
      const count = categories[categoryKey].length;
      
      const categoryCard = document.createElement('div');
      categoryCard.className = 'category-card bg-white border-2 border-gray-200 rounded-xl p-4 cursor-pointer hover:shadow-lg transition-all duration-200 group';
      categoryCard.style.transition = 'all 0.2s';
      
      // Hover-Effekte mit JavaScript
      categoryCard.addEventListener('mouseenter', function() {
        this.style.borderColor = catInfo.hoverColor;
        const iconBox = this.querySelector('.icon-box');
        const chevron = this.querySelector('.category-chevron');
        if (iconBox) iconBox.style.backgroundColor = catInfo.hoverBg;
        if (chevron) chevron.style.color = catInfo.hoverColor;
      });
      
      categoryCard.addEventListener('mouseleave', function() {
        this.style.borderColor = '#e5e7eb';
        const iconBox = this.querySelector('.icon-box');
        const chevron = this.querySelector('.category-chevron');
        if (iconBox) iconBox.style.backgroundColor = catInfo.bgColor;
        if (chevron) chevron.style.color = '#9ca3af';
      });
      
      categoryCard.onclick = () => showCategorySections(categoryKey, catInfo.name);
      
      categoryCard.innerHTML = `
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="icon-box w-12 h-12 rounded-lg flex items-center justify-center transition-colors" style="background-color: ${catInfo.bgColor}">
              <i class="fas ${catInfo.icon} text-xl" style="color: ${catInfo.iconColor}"></i>
            </div>
            <div>
              <h3 class="font-semibold text-gray-900 text-sm">${catInfo.name}</h3>
              <p class="text-xs text-gray-500">${count} Section${count !== 1 ? 's' : ''}</p>
            </div>
          </div>
          <i class="fas fa-chevron-right category-chevron text-gray-400 transition-colors"></i>
        </div>
      `;
      
      categoriesView.appendChild(categoryCard);
    }
  });
}

// Zeige Sections einer Kategorie
function showCategorySections(categoryKey, categoryName) {
  currentCategory = categoryKey;
  const categoriesView = document.getElementById('categories-view');
  const sectionsView = document.getElementById('sections-view');
  const categoryTitle = document.getElementById('category-title');
  const categorySections = document.getElementById('category-sections');
  
  categoriesView.classList.add('hidden');
  sectionsView.classList.remove('hidden');
  categoryTitle.textContent = categoryName;
  categorySections.innerHTML = '';
  
  categories[categoryKey].forEach(section => {
    const item = document.createElement('div');
    item.className = 'section-library-item bg-white border border-gray-200 rounded-lg p-3 cursor-pointer hover:border-blue-500 hover:shadow-md transition-all';
    item.onclick = () => addSection(section.id);
    
    let iconClass = section.icon || 'fa-solid fa-cube';
    // Wenn Icon bereits Prefix hat (fa-solid, fa-regular, etc.), nicht nochmal hinzufügen
    let iconHTML = iconClass.includes('fa-solid') || iconClass.includes('fa-regular') || iconClass.includes('fa-brands') 
      ? `<i class="${iconClass} text-blue-600"></i>`
      : `<i class="fas ${iconClass} text-blue-600"></i>`;
    
    item.innerHTML = `
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
          ${iconHTML}
        </div>
        <div class="flex-1 min-w-0">
          <h4 class="font-medium text-sm text-gray-900 truncate">${section.name}</h4>
          <p class="text-xs text-gray-500 truncate">${section.description || ''}</p>
        </div>
      </div>
    `;
    
    categorySections.appendChild(item);
  });
}

// Zurück zu Kategorien
function backToCategories() {
  const categoriesView = document.getElementById('categories-view');
  const sectionsView = document.getElementById('sections-view');
  
  sectionsView.classList.add('hidden');
  categoriesView.classList.remove('hidden');
  currentCategory = null;
}

// Drag & Drop initialisieren
function initDragAndDrop() {
  const canvas = document.getElementById('canvas-container');
  
  new Sortable(canvas, {
    animation: 200,
    ghostClass: 'dragging',
    handle: '.section-item',
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
    onEnd: () => {
      console.log('Section neu sortiert');
    }
  });
}

// ============================================
// SECTION MANAGEMENT
// ============================================

function addSection(sectionId) {
  DEBUG.log(`➕ Adding section: ${sectionId}`, 'info');
  
  const section = sectionLibrary.find(s => s.id === sectionId);
  if (!section) {
    DEBUG.log(`  ❌ Section '${sectionId}' nicht gefunden!`, 'error');
    return;
  }
  
  // Zeige Source an
  const source = section._loadedFrom || 'UNKNOWN';
  const sourceColor = source === 'HTML+META' ? 'color: #10b981; font-weight: bold;' : 'color: #ef4444; font-weight: bold;';
  console.log(`%c🔧 Adding: ${section.name}`, 'font-weight: bold;');
  console.log(`   Source: %c${source}`, sourceColor);
  console.log(`   Template size: ${section.template.length} chars`);
  
  DEBUG.log(`  ✓ Section gefunden: ${section.name}`, 'success');
  
  const canvas = document.getElementById('canvas-container');
  const placeholder = canvas.querySelector('.section-placeholder');
  if (placeholder) placeholder.remove();
  
  sectionCounter++;
  const uniqueId = `section-${sectionCounter}`;
  
  const sectionEl = document.createElement('div');
  sectionEl.className = 'section-item';
  sectionEl.id = uniqueId;
  sectionEl.setAttribute('data-section-type', sectionId);
  sectionEl.setAttribute('data-flippable', section.flippable || 'false');
  
  DEBUG.log(`  🔄 Wende globale Styles an...`);
  const html = applyGlobalStyles(section.template);
  
  DEBUG.log(`  🔨 Erstelle Section HTML...`);
  
  sectionEl.innerHTML = `
    <div class="section-controls">
      <div class="control-btn move-up" onclick="moveSection('${uniqueId}', 'up')" title="Nach oben">
        <i class="fas fa-arrow-up"></i>
      </div>
      <div class="control-btn move-down" onclick="moveSection('${uniqueId}', 'down')" title="Nach unten">
        <i class="fas fa-arrow-down"></i>
      </div>
      ${section.flippable ? `
      <div class="control-btn flip" onclick="flipSection('${uniqueId}')" title="Layout umkehren">
        <i class="fas fa-exchange-alt"></i>
      </div>
      ` : ''}
      <div class="control-btn edit" onclick="editSection('${uniqueId}')" title="Bearbeiten">
        <i class="fas fa-edit"></i>
      </div>
      <div class="control-btn duplicate" onclick="duplicateSection('${uniqueId}')" title="Duplizieren">
        <i class="fas fa-copy"></i>
      </div>
      <div class="control-btn delete" onclick="deleteSection('${uniqueId}')" title="Löschen">
        <i class="fas fa-trash"></i>
      </div>
    </div>
    ${html}
  `;
  
  canvas.appendChild(sectionEl);
  
  // Prüfe Icons
  const icons = sectionEl.querySelectorAll('i[class*="fa-"]');
  DEBUG.log(`  🎨 ${icons.length} Icons gefunden`, icons.length > 0 ? 'success' : 'warning');
  
  // Prüfe ob borderRadius angewendet wurde
  const elementsWithRadius = sectionEl.querySelectorAll('[class*="rounded"]');
  DEBUG.log(`  📐 ${elementsWithRadius.length} Elemente mit Abrundung`, 'info');
  
  // ⚡ FIX: Aktiviere Animationen im Builder sofort (weißer Bildschirm Fix)
  activateSectionAnimations(sectionEl);
  
  DEBUG.log(`  ✅ Section '${uniqueId}' erfolgreich hinzugefügt!`, 'success');
}

// ============================================
// ANIMATION ACTIVATION (Builder Fix)
// ============================================

/**
 * Aktiviert alle Animationen in einer Section sofort im Builder
 * Verhindert weißen Bildschirm durch opacity: 0
 */
function activateSectionAnimations(sectionEl) {
  // Finde alle .animated-section Elemente
  const animatedSections = sectionEl.querySelectorAll('.animated-section');
  
  if (animatedSections.length > 0) {
    DEBUG.log(`  🎬 ${animatedSections.length} animierte Section(s) gefunden - aktiviere sofort`, 'info');
    
    // Aktiviere alle sofort (kein Warten auf Scroll im Builder)
    animatedSections.forEach((section, idx) => {
      section.classList.add('anim-active');
      DEBUG.log(`    ✓ Animation #${idx+1} aktiviert`, 'success');
    });
  }
  
  // Finde auch einzelne .anim-item Elemente (falls direkt verwendet)
  const animItems = sectionEl.querySelectorAll('.anim-item');
  if (animItems.length > 0) {
    DEBUG.log(`  🎬 ${animItems.length} animierte Item(s) gefunden - aktiviere sofort`, 'info');
    animItems.forEach(item => item.classList.add('anim-active'));
  }
}

function deleteSection(id) {
  showConfirm(
    'Section löschen?',
    'Möchtest du diese Section wirklich entfernen? Diese Aktion kann nicht rückgängig gemacht werden.',
    () => {
      document.getElementById(id).remove();
      
      const canvas = document.getElementById('canvas-container');
      if (canvas.children.length === 0) {
        canvas.innerHTML = `
          <div class="section-placeholder">
            <div class="text-center">
              <i class="fas fa-mouse-pointer text-4xl mb-3"></i>
              <p class="font-medium">Füge deine erste Section hinzu</p>
              <p class="text-sm mt-1">Klicke auf "Sections" um zu starten</p>
            </div>
          </div>
        `;
      }
    }
  );
}

function moveSection(id, direction) {
  const section = document.getElementById(id);
  const container = section.parentElement;
  
  if (direction === 'up') {
    const prev = section.previousElementSibling;
    if (prev) {
      container.insertBefore(section, prev);
    }
  } else if (direction === 'down') {
    const next = section.nextElementSibling;
    if (next) {
      container.insertBefore(next, section);
    }
  }
}

function flipSection(id) {
  const section = document.getElementById(id);
  const content = section.querySelector('.grid.md\\:grid-cols-2, .grid.grid-cols-2');
  
  if (content) {
    // Animation
    section.classList.add('flipping');
    setTimeout(() => section.classList.remove('flipping'), 500);
    
    // Tausche die Kinder
    const children = Array.from(content.children);
    if (children.length === 2) {
      content.insertBefore(children[1], children[0]);
    }
  }
}

function duplicateSection(id) {
  const section = document.getElementById(id);
  const clone = section.cloneNode(true);
  sectionCounter++;
  clone.id = `section-${sectionCounter}`;
  section.after(clone);
}

function editSection(id) {
  currentSectionId = id;
  const modal = document.getElementById('section-editor-modal');
  const content = document.getElementById('section-editor-content');
  const section = document.getElementById(id);
  
  // Check if section is a navbar
  const sectionType = section.getAttribute('data-section-type') || '';
  const isNavbar = sectionType.includes('navbar');
  
  // Get current section data attributes
  const bgColor = section.getAttribute('data-bg-color') || globalStyles.backgroundColor;
  const textColor = section.getAttribute('data-text-color') || globalStyles.textColor;
  const accentColor = section.getAttribute('data-accent-color') || globalStyles.primaryColor;
  const spacing = section.getAttribute('data-spacing') || globalStyles.spacing;
  const fontFamily = section.getAttribute('data-font-family') || '';
  const fontSize = section.getAttribute('data-font-size') || '';
  const fontWeight = section.getAttribute('data-font-weight') || '';
  
  let navbarMenuEditor = '';
  if (isNavbar) {
    navbarMenuEditor = `
      <div class="bg-blue-50 border-2 border-blue-200 p-4 rounded-lg mb-6">
        <h4 class="font-bold text-blue-900 mb-3 flex items-center gap-2">
          <i class="fas fa-bars"></i>
          Navigation Menü bearbeiten
        </h4>
        <p class="text-sm text-blue-800 mb-4">
          <i class="fas fa-info-circle mr-2"></i>
          Klicke direkt auf die Menüpunkte im Canvas um Text zu ändern. Zum Hinzufügen/Löschen nutze die Buttons unten.
        </p>
        <div class="flex gap-2">
          <button onclick="addNavMenuItem('${id}')" class="flex-1 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors text-sm font-medium">
            <i class="fas fa-plus mr-2"></i>Menüpunkt hinzufügen
          </button>
          <button onclick="removeLastNavMenuItem('${id}')" class="flex-1 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors text-sm font-medium">
            <i class="fas fa-minus mr-2"></i>Letzten entfernen
          </button>
        </div>
      </div>
    `;
  }
  
  content.innerHTML = `
    <div class="space-y-6">
      ${navbarMenuEditor}
      
      <div class="bg-blue-50 border-2 border-blue-200 p-4 rounded-lg">
        <p class="text-sm text-blue-900">
          <i class="fas fa-info-circle mr-2"></i>
          <strong>Tipp:</strong> Diese Einstellungen überschreiben die globalen Styles nur für diese Section.
        </p>
      </div>
      
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">
            <i class="fas fa-fill-drip mr-2 text-purple-600"></i>
            Hintergrundfarbe
          </label>
          <input type="color" id="section-bg" value="${bgColor}" 
                 class="w-full h-12 rounded-lg cursor-pointer border-2 border-gray-300">
        </div>
        
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">
            <i class="fas fa-font mr-2 text-blue-600"></i>
            Textfarbe
          </label>
          <input type="color" id="section-text" value="${textColor}" 
                 class="w-full h-12 rounded-lg cursor-pointer border-2 border-gray-300">
        </div>
        
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">
            <i class="fas fa-palette mr-2 text-pink-600"></i>
            Akzentfarbe
          </label>
          <input type="color" id="section-accent" value="${accentColor}" 
                 class="w-full h-12 rounded-lg cursor-pointer border-2 border-gray-300">
        </div>
        
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">
            <i class="fas fa-arrows-up-down mr-2 text-green-600"></i>
            Abstand (Padding)
          </label>
          <select id="section-spacing" class="w-full px-4 py-3 rounded-lg border-2 border-gray-300">
            <option value="py-8" ${spacing === 'py-8' ? 'selected' : ''}>Klein (32px)</option>
            <option value="py-12" ${spacing === 'py-12' ? 'selected' : ''}>Normal (48px)</option>
            <option value="py-16" ${spacing === 'py-16' ? 'selected' : ''}>Mittel (64px)</option>
            <option value="py-20" ${spacing === 'py-20' ? 'selected' : ''}>Groß (80px)</option>
            <option value="py-24" ${spacing === 'py-24' ? 'selected' : ''}>Extra Groß (96px)</option>
          </select>
        </div>
        
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">
            <i class="fas fa-text-height mr-2 text-indigo-600"></i>
            Schriftart
          </label>
          <select id="section-font-family" class="w-full px-4 py-3 rounded-lg border-2 border-gray-300">
            <option value="">Global (${globalStyles.fontFamily})</option>
            <option value="font-sans" ${fontFamily === 'font-sans' ? 'selected' : ''}>Sans Serif</option>
            <option value="font-serif" ${fontFamily === 'font-serif' ? 'selected' : ''}>Serif</option>
            <option value="font-mono" ${fontFamily === 'font-mono' ? 'selected' : ''}>Monospace</option>
          </select>
        </div>
        
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">
            <i class="fas fa-text-width mr-2 text-teal-600"></i>
            Textgröße
          </label>
          <select id="section-font-size" class="w-full px-4 py-3 rounded-lg border-2 border-gray-300">
            <option value="">Global (${globalStyles.fontSize})</option>
            <option value="text-xs" ${fontSize === 'text-xs' ? 'selected' : ''}>Extra Klein</option>
            <option value="text-sm" ${fontSize === 'text-sm' ? 'selected' : ''}>Klein</option>
            <option value="text-base" ${fontSize === 'text-base' ? 'selected' : ''}>Normal</option>
            <option value="text-lg" ${fontSize === 'text-lg' ? 'selected' : ''}>Groß</option>
            <option value="text-xl" ${fontSize === 'text-xl' ? 'selected' : ''}>Extra Groß</option>
          </select>
        </div>
        
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">
            <i class="fas fa-bold mr-2 text-orange-600"></i>
            Schriftstärke
          </label>
          <select id="section-font-weight" class="w-full px-4 py-3 rounded-lg border-2 border-gray-300">
            <option value="">Global (${globalStyles.fontWeight})</option>
            <option value="font-light" ${fontWeight === 'font-light' ? 'selected' : ''}>Leicht (300)</option>
            <option value="font-normal" ${fontWeight === 'font-normal' ? 'selected' : ''}>Normal (400)</option>
            <option value="font-medium" ${fontWeight === 'font-medium' ? 'selected' : ''}>Medium (500)</option>
            <option value="font-semibold" ${fontWeight === 'font-semibold' ? 'selected' : ''}>Semibold (600)</option>
            <option value="font-bold" ${fontWeight === 'font-bold' ? 'selected' : ''}>Bold (700)</option>
            <option value="font-extrabold" ${fontWeight === 'font-extrabold' ? 'selected' : ''}>Extrabold (800)</option>
          </select>
        </div>
      </div>
      
      <div class="border-t-2 border-gray-200 pt-4">
        <h4 class="font-semibold text-gray-800 mb-3">
          <i class="fas fa-wand-magic-sparkles mr-2 text-purple-600"></i>
          Quick Actions
        </h4>
        <div class="grid grid-cols-3 gap-2">
          <button onclick="applySectionPreset('light')" 
                  class="px-4 py-2 bg-white border-2 border-gray-300 rounded-lg hover:border-blue-500 transition-colors text-sm">
            <i class="fas fa-sun mr-1 text-yellow-500"></i> Hell
          </button>
          <button onclick="applySectionPreset('dark')" 
                  class="px-4 py-2 bg-gray-900 text-white border-2 border-gray-700 rounded-lg hover:border-purple-500 transition-colors text-sm">
            <i class="fas fa-moon mr-1 text-purple-400"></i> Dunkel
          </button>
          <button onclick="resetSectionStyles()" 
                  class="px-4 py-2 bg-red-50 text-red-600 border-2 border-red-200 rounded-lg hover:border-red-500 transition-colors text-sm">
            <i class="fas fa-undo mr-1"></i> Reset
          </button>
        </div>
      </div>
      
      <div class="bg-gray-50 p-4 rounded-lg">
        <p class="text-xs text-gray-600">
          <i class="fas fa-pencil mr-2"></i>
          <strong>Direkt bearbeiten:</strong> Klicke auf Texte im Canvas um sie direkt zu ändern (contenteditable)
        </p>
      </div>
    </div>
  `;
  
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeEditor() {
  const modal = document.getElementById('section-editor-modal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  currentSectionId = null;
}

function saveSection() {
  if (!currentSectionId) return;
  
  const section = document.getElementById(currentSectionId);
  const bgColor = document.getElementById('section-bg').value;
  const textColor = document.getElementById('section-text').value;
  const accentColor = document.getElementById('section-accent').value;
  const spacing = document.getElementById('section-spacing').value;
  const fontFamily = document.getElementById('section-font-family').value;
  const fontSize = document.getElementById('section-font-size').value;
  const fontWeight = document.getElementById('section-font-weight').value;
  
  // Save to data attributes
  if (bgColor) {
    section.setAttribute('data-bg-color', bgColor);
  } else {
    section.removeAttribute('data-bg-color');
  }
  
  if (textColor) {
    section.setAttribute('data-text-color', textColor);
  } else {
    section.removeAttribute('data-text-color');
  }
  
  if (accentColor) {
    section.setAttribute('data-accent-color', accentColor);
  } else {
    section.removeAttribute('data-accent-color');
  }
  
  if (spacing) {
    section.setAttribute('data-spacing', spacing);
  } else {
    section.removeAttribute('data-spacing');
  }
  
  if (fontFamily) {
    section.setAttribute('data-font-family', fontFamily);
  } else {
    section.removeAttribute('data-font-family');
  }
  
  if (fontSize) {
    section.setAttribute('data-font-size', fontSize);
  } else {
    section.removeAttribute('data-font-size');
  }
  
  if (fontWeight) {
    section.setAttribute('data-font-weight', fontWeight);
  } else {
    section.removeAttribute('data-font-weight');
  }
  
  // Apply styles with !important to override global styles
  const sectionContent = section.querySelector('section') || section.querySelector('nav') || section.querySelector('footer');
  if (sectionContent) {
    // Apply background color
    if (bgColor) {
      let styleAttr = sectionContent.getAttribute('style') || '';
      styleAttr = styleAttr.replace(/background-color:[^;]+;?/g, '');
      styleAttr += `background-color: ${bgColor} !important; `;
      sectionContent.setAttribute('style', styleAttr.trim());
      
      // Update data-bg-color attribute for navbar
      if (sectionContent.hasAttribute('data-bg-color')) {
        sectionContent.setAttribute('data-bg-color', bgColor);
      }
    }
    
    // Apply text color to all text elements (aber NICHT zu Links/Buttons die hover haben)
    if (textColor) {
      // Logo text
      sectionContent.querySelectorAll('div[contenteditable="true"]:not(a):not(button)').forEach(el => {
        if (!el.closest('a') && !el.closest('button')) {
          el.style.setProperty('color', textColor, 'important');
        }
      });
      
      // Paragraphs, headings
      sectionContent.querySelectorAll('h1, h2, h3, h4, h5, h6, p').forEach(el => {
        if (!el.closest('a') && !el.closest('button')) {
          el.style.setProperty('color', textColor, 'important');
        }
      });
      
      // Navbar Logo text (spezielle Behandlung)
      sectionContent.querySelectorAll('.text-xl, .text-xs').forEach(el => {
        if (el.closest('.flex.items-center.gap-3') && !el.closest('a')) {
          el.style.setProperty('color', textColor, 'important');
        }
      });
    }
    
    // Apply accent/primary color to interactive elements (mit CSS-Variablen für Hover)
    if (accentColor) {
      // Erstelle ein <style> Tag für diese Section mit Hover-Support
      let styleTag = section.querySelector('style.section-custom-styles');
      if (!styleTag) {
        styleTag = document.createElement('style');
        styleTag.className = 'section-custom-styles';
        section.appendChild(styleTag);
      }
      
      const sectionId = section.id;
      styleTag.textContent = `
        /* Custom colors for section ${sectionId} with hover support */
        #${sectionId} nav a.nav-link {
          color: ${textColor || globalStyles.textColor} !important;
        }
        #${sectionId} nav a.nav-link:hover {
          color: ${accentColor} !important;
          background-color: ${accentColor}15 !important;
        }
        #${sectionId} button:not([onclick*="close"]):not([onclick*="toggle"]) {
          background-color: ${accentColor} !important;
          border-color: ${accentColor} !important;
        }
        #${sectionId} button:not([onclick*="close"]):not([onclick*="toggle"]):hover {
          background-color: ${accentColor}dd !important;
          transform: scale(1.05);
        }
        #${sectionId} i.fa-dumbbell {
          color: ${accentColor} !important;
        }
        #${sectionId} a[href*="#mitglied"] {
          background-color: ${accentColor} !important;
        }
        #${sectionId} a[href*="#mitglied"]:hover {
          background-color: ${accentColor}dd !important;
        }
      `;
    }
    
    if (spacing) {
      sectionContent.className = sectionContent.className.replace(/py-\d+/g, spacing);
    }
    
    // Apply font styles
    if (fontFamily) {
      sectionContent.className = sectionContent.className.replace(/font-(sans|serif|mono)/g, '');
      sectionContent.classList.add(fontFamily);
    }
    
    if (fontSize) {
      sectionContent.className = sectionContent.className.replace(/text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl)/g, '');
      sectionContent.classList.add(fontSize);
    }
    
    if (fontWeight) {
      sectionContent.className = sectionContent.className.replace(/font-(light|normal|medium|semibold|bold|extrabold)/g, '');
      sectionContent.classList.add(fontWeight);
    }
  }
  
  showAlert('✅ Gespeichert', 'Section-Styles wurden erfolgreich angewendet.');
  closeEditor();
  // NICHT refreshAllSections() aufrufen - würde unsere Inline-Styles überschreiben!
}

function resetSectionStyles() {
  if (!currentSectionId) return;
  
  const section = document.getElementById(currentSectionId);
  
  // Remove all data attributes
  section.removeAttribute('data-bg-color');
  section.removeAttribute('data-text-color');
  section.removeAttribute('data-accent-color');
  section.removeAttribute('data-spacing');
  section.removeAttribute('data-font-family');
  section.removeAttribute('data-font-size');
  section.removeAttribute('data-font-weight');
  
  // Remove inline styles
  const sectionContent = section.querySelector('section') || section.querySelector('nav') || section.querySelector('footer');
  if (sectionContent) {
    sectionContent.removeAttribute('style');
  }
  
  showAlert('🔄 Zurückgesetzt', 'Section verwendet jetzt wieder die globalen Styles.');
  closeEditor();
  refreshAllSections();
}

function applySectionPreset(preset) {
  if (preset === 'light') {
    document.getElementById('section-bg').value = '#ffffff';
    document.getElementById('section-text').value = '#1f2937';
    document.getElementById('section-accent').value = '#3b82f6';
  } else if (preset === 'dark') {
    document.getElementById('section-bg').value = '#1f2937';
    document.getElementById('section-text').value = '#f8fafc';
    document.getElementById('section-accent').value = '#a855f7';
  }
}

// ============================================
// GLOBAL STYLES
// ============================================

function updateGlobalStyle(property, value) {
  DEBUG.log(`🎨 Updating global style: ${property} = ${value}`, 'info');
  DEBUG.log(`  📋 Alter Wert: ${globalStyles[property]}`, 'info');
  DEBUG.log(`  📋 Neuer Wert: ${value}`, 'info');
  
  globalStyles[property] = value;
  
  // Update UI
  if (property === 'borderRadius') {
    document.getElementById('borderRadiusValue').textContent = value;
    DEBUG.log(`  📐 BorderRadius UI aktualisiert: ${value}`, 'success');
  }
  
  DEBUG.log(`  🔄 Refreshing all sections...`, 'info');
  
  // Spezielle Behandlung für borderRadius - direkt im DOM ändern
  if (property === 'borderRadius') {
    const canvas = document.getElementById('canvas-container');
    const elementsWithRadius = canvas.querySelectorAll('[class*="rounded"]');
    DEBUG.log(`  🔍 Gefunden: ${elementsWithRadius.length} Elemente mit Abrundung`, 'info');
    
    elementsWithRadius.forEach((el, idx) => {
      // Extrahiere aktuelle rounded-Klassen
      const roundedClasses = Array.from(el.classList).filter(cls => 
        cls.startsWith('rounded-[') || cls.startsWith('rounded-')
      );
      
      if (roundedClasses.length > 0) {
        DEBUG.log(`  🎯 Element #${idx+1}: ${roundedClasses.join(', ')} → border-radius: ${value}`, 'info');
        
        // WICHTIG: Verwende inline style statt Tailwind-Klasse
        // weil Tailwind CDN keine neuen arbitrary values on-the-fly kompiliert
        const currentStyle = el.getAttribute('style') || '';
        
        // Entferne alte border-radius aus style
        const styleWithoutRadius = currentStyle.replace(/border-radius:\s*[^;]+;?/g, '').trim();
        
        // Füge neuen border-radius hinzu
        const newStyle = styleWithoutRadius ? `${styleWithoutRadius}; border-radius: ${value} !important;` : `border-radius: ${value} !important;`;
        el.setAttribute('style', newStyle);
      }
    });
    
    DEBUG.log(`  ✅ BorderRadius als inline-style angewendet (Tailwind CDN unterstützt keine dynamischen arbitrary values)!`, 'success');
    
    // WICHTIG: KEIN refreshAllSections() aufrufen, weil das die inline-styles überschreibt!
    DEBUG.log(`  ⚠️ refreshAllSections() übersprungen um inline-styles zu erhalten`, 'warning');
    DEBUG.log(`  ✅ Global style 'borderRadius' erfolgreich aktualisiert!`, 'success');
    return; // Früher return, refresh überspringen
  }
  
  // Alle Sections neu rendern
  refreshAllSections();
  
  DEBUG.log(`  ✅ Global style '${property}' erfolgreich aktualisiert!`, 'success');
}

function applyGlobalStyles(template) {
  let html = template;
  
  DEBUG.log(`📝 Applying global styles to template...`);
  
  // Ersetze alle Platzhalter mit ihren Werten
  Object.keys(globalStyles).forEach(key => {
    const placeholder = `{{${key}}}`;
    const value = globalStyles[key];
    const count = (html.match(new RegExp(placeholder.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length;
    
    if (count > 0) {
      html = html.replaceAll(placeholder, value);
      DEBUG.log(`  ✓ ${key}: ${value} (${count}x ersetzt)`, 'success');
    }
  });
  
  // Debug: Prüfe ob noch Platzhalter übrig sind
  const remainingPlaceholders = html.match(/\{\{[^}]+\}\}/g);
  if (remainingPlaceholders) {
    DEBUG.log(`  ⚠️ Noch ${remainingPlaceholders.length} Platzhalter übrig: ${remainingPlaceholders.join(', ')}`, 'warning');
  }
  
  return html;
}

function refreshAllSections() {
  DEBUG.log(`🔄 Refreshing all sections...`, 'info');
  DEBUG.log(`  📊 Aktuelle globalStyles:`, 'info');
  DEBUG.log(`    - borderRadius: ${globalStyles.borderRadius}`, 'info');
  DEBUG.log(`    - primaryColor: ${globalStyles.primaryColor}`, 'info');
  DEBUG.log(`    - fontSize: ${globalStyles.fontSize}`, 'info');
  
  const canvas = document.getElementById('canvas-container');
  const sections = canvas.querySelectorAll('.section-item');
  
  DEBUG.log(`  📦 Gefunden: ${sections.length} Sections`, 'info');
  
  sections.forEach((sectionEl, index) => {
    const sectionType = sectionEl.getAttribute('data-section-type');
    const section = sectionLibrary.find(s => s.id === sectionType);
    
    if (!section) {
      DEBUG.log(`  ⚠️ Section #${index+1}: Template nicht gefunden (${sectionType})`, 'warning');
      return;
    }
    
    DEBUG.log(`  🔧 Section #${index+1}: ${section.name}`, 'info');
    
    // Speichere per-section data attributes
    const bgColor = sectionEl.getAttribute('data-bg-color');
    const textColor = sectionEl.getAttribute('data-text-color');
    const accentColor = sectionEl.getAttribute('data-accent-color');
    const spacing = sectionEl.getAttribute('data-spacing');
    const fontFamily = sectionEl.getAttribute('data-font-family');
    const fontSize = sectionEl.getAttribute('data-font-size');
    const fontWeight = sectionEl.getAttribute('data-font-weight');
    
    // Speichere Controls
    const controls = sectionEl.querySelector('.section-controls');
    const controlsHTML = controls ? controls.outerHTML : '';
    
    // Wende globale Styles an
    const newHtml = applyGlobalStyles(section.template);
    
    // Ersetze Inhalt
    sectionEl.innerHTML = controlsHTML + newHtml;
    
    // Wende per-section Styles wieder an (überschreibt globale Styles)
    const sectionContent = sectionEl.querySelector('section') || sectionEl.querySelector('nav') || sectionEl.querySelector('footer');
    if (sectionContent) {
      let styleAttr = '';
      
      if (bgColor) {
        sectionEl.setAttribute('data-bg-color', bgColor);
        styleAttr += `background-color: ${bgColor} !important; `;
        sectionContent.className = sectionContent.className.replace(/bg-\[#[0-9a-fA-F]{6}\]/g, '');
      }
      
      if (textColor) {
        sectionEl.setAttribute('data-text-color', textColor);
        styleAttr += `color: ${textColor} !important; `;
      }
      
      if (accentColor) {
        sectionEl.setAttribute('data-accent-color', accentColor);
        // Apply accent color to template
        const elementsWithAccent = sectionContent.querySelectorAll('[class*="{{accentColor}}"]');
        elementsWithAccent.forEach(el => {
          const classes = el.className.split(' ');
          classes.forEach(cls => {
            if (cls.includes('{{accentColor}}')) {
              const newClass = cls.replace('{{accentColor}}', accentColor);
              el.classList.remove(cls);
              el.classList.add(newClass);
            }
          });
        });
      }
      
      if (styleAttr) {
        sectionContent.setAttribute('style', styleAttr);
      }
      
      if (spacing) {
        sectionEl.setAttribute('data-spacing', spacing);
        sectionContent.className = sectionContent.className.replace(/py-\d+/g, spacing);
      }
      
      // Apply font styles
      if (fontFamily) {
        sectionEl.setAttribute('data-font-family', fontFamily);
        sectionContent.className = sectionContent.className.replace(/font-(sans|serif|mono)/g, '');
        sectionContent.classList.add(fontFamily);
      }
      
      if (fontSize) {
        sectionEl.setAttribute('data-font-size', fontSize);
        sectionContent.className = sectionContent.className.replace(/text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl)/g, '');
        sectionContent.classList.add(fontSize);
      }
      
      if (fontWeight) {
        sectionEl.setAttribute('data-font-weight', fontWeight);
        sectionContent.className = sectionContent.className.replace(/font-(light|normal|medium|semibold|bold|extrabold)/g, '');
        sectionContent.classList.add(fontWeight);
      }
      
      // Debug: Prüfe Icons
      const icons = sectionContent.querySelectorAll('i[class*="fa-"]');
      if (icons.length === 0) {
        DEBUG.log(`    ⚠️ Keine Icons in Section gefunden!`, 'warning');
      }
    }
    
    // ⚡ FIX: Aktiviere Animationen nach Refresh
    activateSectionAnimations(sectionEl);
  });
  
  DEBUG.log(`  ✅ Alle Sections aktualisiert!`, 'success');
}

function resetGlobalStyles() {
  showConfirm(
    'Styles zurücksetzen?',
    'Alle globalen Styles werden auf die Standardwerte zurückgesetzt. Alle Sections werden aktualisiert.',
    () => {
      globalStyles = {
        primaryColor: '#3b82f6',
        secondaryColor: '#1f2937',
        accentColor: '#f59e0b',
        textColor: '#1f2937',
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        spacing: 'py-16',
        fontFamily: 'font-sans',
        fontSize: 'text-base',
        fontWeight: 'font-normal',
        containerWidth: 'max-w-7xl'
      };
      
      loadGlobalStyles();
      refreshAllSections();
      
      showAlert('Styles zurückgesetzt', 'Alle globalen Styles wurden erfolgreich zurückgesetzt.');
    }
  );
}

function loadGlobalStyles() {
  document.getElementById('primaryColor').value = globalStyles.primaryColor;
  document.getElementById('secondaryColor').value = globalStyles.secondaryColor;
  document.getElementById('accentColor').value = globalStyles.accentColor;
  document.getElementById('textColor').value = globalStyles.textColor;
  document.getElementById('backgroundColor').value = globalStyles.backgroundColor;
  document.getElementById('borderRadius').value = parseInt(globalStyles.borderRadius);
  document.getElementById('borderRadiusValue').textContent = globalStyles.borderRadius;
  document.getElementById('spacing').value = globalStyles.spacing;
  document.getElementById('fontFamily').value = globalStyles.fontFamily;
  document.getElementById('fontSize').value = globalStyles.fontSize;
  document.getElementById('fontWeight').value = globalStyles.fontWeight;
  document.getElementById('containerWidth').value = globalStyles.containerWidth;
}

// ============================================
// PANEL TOGGLE
// ============================================

function togglePanel(panel) {
  const sectionsPanel = document.getElementById('sections-panel');
  const stylesPanel = document.getElementById('styles-panel');
  
  if (panel === 'sections') {
    sectionsPanel.classList.toggle('hidden');
    stylesPanel.classList.add('hidden');
  } else if (panel === 'styles') {
    stylesPanel.classList.toggle('hidden');
    sectionsPanel.classList.add('hidden');
  }
}

// ============================================
// EXPORT & PREVIEW
// ============================================

function previewWebsite() {
  const canvas = document.getElementById('canvas-container');
  const sections = canvas.querySelectorAll('.section-item');
  
  let html = `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vorschau - Sportstudio Thielen</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.1/css/all.min.css">
  <style>
    * { font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }
    html { scroll-behavior: smooth; }
    i[class*="fa-"] { 
      font-family: "Font Awesome 6 Free", "Font Awesome 6 Pro", "Font Awesome 6 Brands" !important;
      font-style: normal !important;
      font-weight: 900 !important;
    }
  </style>
</head>
<body>`;
  
  sections.forEach(section => {
    const content = section.cloneNode(true);
    content.querySelector('.section-controls')?.remove();
    // Remove contenteditable for preview
    content.querySelectorAll('[contenteditable]').forEach(el => {
      el.removeAttribute('contenteditable');
    });
    // ⚡ FIX: Entferne .anim-active für Vorschau (damit Scroll-Animationen funktionieren)
    content.querySelectorAll('.anim-active').forEach(el => {
      el.classList.remove('anim-active');
    });
    html += content.innerHTML;
  });
  
  html += '</body></html>';
  
  const preview = window.open('', '_blank');
  preview.document.write(html);
  preview.document.close();
}

async function exportHTML() {
  const canvas = document.getElementById('canvas-container');
  const sections = canvas.querySelectorAll('.section-item');
  
  if (sections.length === 0) {
    alert('⚠️ Keine Sections vorhanden! Füge zuerst Sections hinzu.');
    return;
  }
  
  // Zeige Export-Dialog
  showExportDialog(sections);
}

function showExportDialog(sections) {
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
  modal.innerHTML = `
    <div class="bg-white rounded-lg p-8 max-w-lg w-full m-4">
      <h3 class="text-2xl font-bold mb-4">
        <i class="fas fa-download mr-2 text-blue-600"></i>
        Website exportieren
      </h3>
      
      <div class="space-y-4 mb-6">
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">
            Ordnername (in /export/)
          </label>
          <input type="text" id="export-folder" value="meine-website" 
                 class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                 placeholder="z.B. sportstudio-thielen">
        </div>
        
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-2">
            Dateiname
          </label>
          <input type="text" id="export-filename" value="index" 
                 class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                 placeholder="z.B. index oder home">
          <p class="text-xs text-gray-500 mt-1">Wird zu: [dateiname].html</p>
        </div>
      </div>
      
      <div class="bg-blue-50 border border-blue-200 p-4 rounded-lg mb-6 text-sm text-blue-800">
        <p class="font-semibold mb-2">📁 Wird exportiert nach:</p>
        <code class="block bg-white px-3 py-2 rounded mt-2">
          /builder/export/<span id="preview-folder">meine-website</span>/<span id="preview-filename">index</span>.html
        </code>
      </div>
      
      <div class="flex gap-3">
        <button onclick="this.closest('.fixed').remove()" 
                class="flex-1 px-6 py-3 bg-gray-200 text-gray-800 rounded-lg font-semibold hover:bg-gray-300 transition">
          Abbrechen
        </button>
        <button onclick="executeExport()" 
                class="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
          <i class="fas fa-download mr-2"></i>
          Exportieren
        </button>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  
  // Live preview update
  const folderInput = modal.querySelector('#export-folder');
  const filenameInput = modal.querySelector('#export-filename');
  const previewFolder = modal.querySelector('#preview-folder');
  const previewFilename = modal.querySelector('#preview-filename');
  
  folderInput.addEventListener('input', () => {
    previewFolder.textContent = folderInput.value || 'meine-website';
  });
  
  filenameInput.addEventListener('input', () => {
    previewFilename.textContent = filenameInput.value || 'index';
  });
}

function executeExport() {
  const folderName = document.getElementById('export-folder').value || 'meine-website';
  const fileName = document.getElementById('export-filename').value || 'index';
  
  const canvas = document.getElementById('canvas-container');
  const sections = canvas.querySelectorAll('.section-item');
  
  // HTML generieren mit Animationen
  let html = `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sportstudio Thielen - Dein Oldschool Gym</title>
  <meta name="description" content="Familiäres Fitnessstudio mit Oldschool-Atmosphäre">
  
  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>
  
  <!-- Google Fonts - Montserrat -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  
  <!-- Font Awesome -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.1/css/all.min.css">
  
  <style>
    * {
      font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    }
    
    /* Global Styles */
    :root {
      --primary-color: ${globalStyles.primaryColor};
      --secondary-color: ${globalStyles.secondaryColor};
      --accent-color: ${globalStyles.accentColor};
      --text-color: ${globalStyles.textColor};
      --background-color: ${globalStyles.backgroundColor};
    }
    
    /* Smooth Scroll */
    html {
      scroll-behavior: smooth;
    }
    
    /* Font Awesome Icons Schutz */
    i[class*="fa-"] {
      font-family: "Font Awesome 6 Free", "Font Awesome 6 Pro", "Font Awesome 6 Brands", "FontAwesome" !important;
      font-style: normal !important;
      font-weight: 900 !important;
    }
    
    /* Animation Classes */
    .animate-on-scroll {
      opacity: 0;
      transition: all 0.6s ease-out;
    }
    
    .animate-on-scroll.animated {
      opacity: 1;
    }
    
    /* Fade In */
    .fade-in {
      opacity: 0;
      transform: translateY(20px);
    }
    
    .fade-in.animated {
      opacity: 1;
      transform: translateY(0);
    }
    
    /* Slide Up */
    .slide-up {
      opacity: 0;
      transform: translateY(50px);
    }
    
    .slide-up.animated {
      opacity: 1;
      transform: translateY(0);
    }
    
    /* Slide Left */
    .slide-left {
      opacity: 0;
      transform: translateX(50px);
    }
    
    .slide-left.animated {
      opacity: 1;
      transform: translateX(0);
    }
    
    /* Slide Right */
    .slide-right {
      opacity: 0;
      transform: translateX(-50px);
    }
    
    .slide-right.animated {
      opacity: 1;
      transform: translateX(0);
    }
    
    /* Scale */
    .scale-in {
      opacity: 0;
      transform: scale(0.8);
    }
    
    .scale-in.animated {
      opacity: 1;
      transform: scale(1);
    }
    
    /* Bounce */
    @keyframes bounce-in {
      0% { opacity: 0; transform: scale(0.3); }
      50% { opacity: 1; transform: scale(1.05); }
      70% { transform: scale(0.9); }
      100% { transform: scale(1); }
    }
    
    .bounce-in.animated {
      animation: bounce-in 0.6s ease-out;
    }
  </style>
</head>
<body>
`;
  
  sections.forEach((section, index) => {
    const content = section.cloneNode(true);
    content.querySelector('.section-controls')?.remove();
    
    // Remove contenteditable
    content.querySelectorAll('[contenteditable]').forEach(el => {
      el.removeAttribute('contenteditable');
    });
    
    // ⚡ FIX: Entferne .anim-active Klasse für Export (damit Animationen beim Scrollen triggern)
    content.querySelectorAll('.anim-active').forEach(el => {
      el.classList.remove('anim-active');
    });
    
    html += content.innerHTML + '\n';
  });
  
  html += `
  <!-- Animation Script -->
  <script>
    // Intersection Observer für Scroll-Animationen
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        }
      });
    }, observerOptions);
    
    // Beobachte alle Elemente mit animate-on-scroll
    document.addEventListener('DOMContentLoaded', () => {
      const animatedElements = document.querySelectorAll('.animate-on-scroll');
      animatedElements.forEach(el => observer.observe(el));
    });
  </script>
</body>
</html>`;
  
  // 1. Download HTML (Backup)
  downloadFile(`${fileName}.html`, html);
  
  // 2. Speichere auf Server
  saveToServer(html, folderName, fileName);
  
  // Schließe Dialog
  document.querySelector('.fixed.inset-0')?.remove();
}

async function saveToServer(html, folderName, fileName) {
  try {
    const response = await fetch('/builder/save-export.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ html, folderName, fileName })
    });
    
    const result = await response.json();
    
    if (result.success) {
      showSuccessModal(folderName, fileName, result.path);
    } else {
      console.error('Server-Fehler:', result.error);
      showSuccessModal(folderName, fileName, null);
    }
  } catch (error) {
    console.error('Fehler beim Speichern:', error);
    showSuccessModal(folderName, fileName, null);
  }
}

function downloadFile(filename, content) {
  const blob = new Blob([content], { type: 'text/html; charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

function showSuccessModal(folderName, fileName, serverPath) {
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
  
  const serverSaved = serverPath ? `
    <div class="text-left bg-green-50 border border-green-200 p-4 rounded-lg mb-4">
      <p class="font-bold mb-2 text-green-900">✅ Auf Server gespeichert:</p>
      <code class="block bg-white px-3 py-2 rounded text-sm font-mono">${serverPath}</code>
    </div>
  ` : '';
  
  modal.innerHTML = `
    <div class="bg-white rounded-lg p-8 max-w-2xl text-center m-4">
      <div class="text-6xl mb-4">✅</div>
      <h3 class="text-2xl font-bold mb-4">Website erfolgreich exportiert!</h3>
      
      ${serverSaved}
      
      <div class="text-left bg-gray-50 p-4 rounded-lg mb-6">
        <p class="font-bold mb-2">📦 Heruntergeladen:</p>
        <ul class="text-sm space-y-1 text-gray-700">
          <li>✓ <strong>${fileName}.html</strong> - Komplette Website mit Animationen</li>
        </ul>
      </div>
      
      <div class="text-left bg-blue-50 border border-blue-200 p-4 rounded-lg mb-6">
        <p class="font-bold mb-2 text-blue-900">🎬 Enthaltene Features:</p>
        <ul class="text-sm space-y-1 text-blue-800">
          <li>✓ Scroll-Animationen (Fade-in, Slide-up, etc.)</li>
          <li>✓ Hover-Effekte</li>
          <li>✓ Responsive Design</li>
          <li>✓ Font Awesome Icons</li>
          <li>✓ Montserrat Font</li>
        </ul>
      </div>
      
      <button onclick="this.parentElement.parentElement.remove()" 
              class="px-6 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition">
        <i class="fas fa-check mr-2"></i>
        Verstanden!
      </button>
    </div>
  `;
  document.body.appendChild(modal);
  
  setTimeout(() => {
    modal.remove();
  }, 20000);
}

// ============================================
// NAVBAR MENU EDITOR FUNCTIONS
// ============================================

function addNavMenuItem(sectionId) {
  const section = document.getElementById(sectionId);
  if (!section) return;
  
  const nav = section.querySelector('nav');
  if (!nav) return;
  
  // Find desktop menu container
  const desktopMenu = nav.querySelector('.hidden.lg\\:flex.items-center');
  if (desktopMenu) {
    const newLink = document.createElement('a');
    newLink.href = '#neue-seite';
    newLink.className = 'nav-link px-4 py-2 text-[' + globalStyles.textColor + '] hover:text-[' + globalStyles.primaryColor + '] hover:bg-[' + globalStyles.primaryColor + ']/5 rounded-lg transition-all duration-200 ' + globalStyles.fontSize + ' font-medium';
    newLink.contentEditable = 'true';
    newLink.textContent = 'Neue Seite';
    
    // Insert before CTA button container
    const ctaContainer = desktopMenu.nextElementSibling;
    if (ctaContainer) {
      desktopMenu.appendChild(newLink);
    } else {
      desktopMenu.appendChild(newLink);
    }
  }
  
  // Find mobile menu container
  const mobileMenu = nav.querySelector('[id$="mobile-menu"]');
  if (mobileMenu) {
    const mobileMenuPanel = mobileMenu.querySelector('[id$="mobile-menu-panel"]');
    if (mobileMenuPanel) {
      const menuLinks = mobileMenuPanel.querySelector('.p-6.space-y-2');
      if (menuLinks) {
        const newMobileLink = document.createElement('a');
        newMobileLink.href = '#neue-seite';
        newMobileLink.className = 'flex items-center gap-3 py-3 px-4 text-gray-800 hover:text-[' + globalStyles.primaryColor + '] hover:bg-[' + globalStyles.primaryColor + ']/5 rounded-lg transition-all font-medium';
        newMobileLink.contentEditable = 'true';
        newMobileLink.onclick = function() { toggleThielenMobileMenu(); };
        newMobileLink.innerHTML = '<i class="fa-solid fa-circle w-5"></i><span>Neue Seite</span>';
        
        // Insert before CTA button
        const ctaButton = menuLinks.querySelector('a[href="#mitglied-werden"]');
        if (ctaButton) {
          menuLinks.insertBefore(newMobileLink, ctaButton);
        } else {
          menuLinks.appendChild(newMobileLink);
        }
      }
    }
  }
  
  showAlert('✅ Menüpunkt hinzugefügt', 'Klicke auf "Neue Seite" um den Text zu ändern.');
}

function removeLastNavMenuItem(sectionId) {
  const section = document.getElementById(sectionId);
  if (!section) return;
  
  const nav = section.querySelector('nav');
  if (!nav) return;
  
  // Remove from desktop menu
  const desktopMenu = nav.querySelector('.hidden.lg\\:flex.items-center');
  if (desktopMenu) {
    const links = desktopMenu.querySelectorAll('.nav-link');
    if (links.length > 1) {
      links[links.length - 1].remove();
    } else {
      showAlert('⚠️ Mindestens ein Menüpunkt', 'Du musst mindestens einen Menüpunkt behalten.');
      return;
    }
  }
  
  // Remove from mobile menu
  const mobileMenu = nav.querySelector('[id$="mobile-menu"]');
  if (mobileMenu) {
    const mobileMenuPanel = mobileMenu.querySelector('[id$="mobile-menu-panel"]');
    if (mobileMenuPanel) {
      const menuLinks = mobileMenuPanel.querySelector('.p-6.space-y-2');
      if (menuLinks) {
        const links = menuLinks.querySelectorAll('a:not([href="#mitglied-werden"])');
        if (links.length > 1) {
          links[links.length - 1].remove();
        }
      }
    }
  }
  
  showAlert('✅ Menüpunkt entfernt', 'Der letzte Menüpunkt wurde gelöscht.');
}
