#!/usr/bin/env python3
"""
Batch-Update: Fügt Scroll-Triggered Animations zu allen Sections hinzu
"""

import os
import re

# Die neuen Style + Script Blöcke
NEW_STYLE_SCRIPT = '''  <!-- Universal Animation System with Scroll Trigger -->
  <style>
    /* Base Section - STARTET UNSICHTBAR */
    .animated-section {
      opacity: 0;
      transform: translateY(20px);
    }
    
    /* AKTIV wenn im Viewport */
    .animated-section.anim-active {
      animation: sectionFadeIn 0.8s ease-out forwards;
    }
    
    /* Animated Items - STARTET UNSICHTBAR */
    .anim-item {
      opacity: 0;
      transform: translateY(30px);
    }
    
    /* AKTIV wenn Section im Viewport */
    .animated-section.anim-active .anim-item {
      animation: itemFadeIn 0.6s ease-out forwards;
    }
    
    .anim-delay-1 { animation-delay: 0.1s; }
    .anim-delay-2 { animation-delay: 0.2s; }
    .anim-delay-3 { animation-delay: 0.3s; }
    .anim-delay-4 { animation-delay: 0.4s; }
    .anim-delay-5 { animation-delay: 0.5s; }
    .anim-delay-6 { animation-delay: 0.6s; }
    .anim-delay-7 { animation-delay: 0.7s; }
    .anim-delay-8 { animation-delay: 0.8s; }
    .anim-delay-9 { animation-delay: 0.9s; }
    
    /* Keyframes */
    @keyframes sectionFadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes itemFadeIn {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    /* Hover Effects */
    .hover-lift {
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .hover-lift:hover {
      transform: translateY(-4px) scale(1.02);
    }
    
    .hover-scale {
      transition: transform 0.3s ease;
    }
    
    .hover-scale:hover {
      transform: scale(1.05);
    }
  </style>
  
  <!-- Scroll-Triggered Animation Script -->
  <script>
    (function() {
      // Nur einmal initialisieren
      if (window.animationObserverInitialized) return;
      window.animationObserverInitialized = true;
      
      // Funktion zum Initialisieren des Observers
      function initAnimationObserver() {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('anim-active');
            }
          });
        }, {
          threshold: 0.05,  // Noch früher triggern (5%)
          rootMargin: '50px' // Auch nach oben erweitern
        });
        
        // Alle animated-sections beobachten
        const animatedSections = document.querySelectorAll('.animated-section');
        animatedSections.forEach(section => {
          observer.observe(section);
          
          // SOFORT aktivieren wenn schon sichtbar (Above-the-fold)
          const rect = section.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            section.classList.add('anim-active');
          }
        });
      }
      
      // Sofort initialisieren UND bei DOMContentLoaded als Fallback
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAnimationObserver);
      } else {
        initAnimationObserver();
      }
      
      // Zusätzlich nach kurzer Verzögerung (für dynamisch geladene Sections)
      setTimeout(initAnimationObserver, 100);
    })();
  </script>'''

# Files die geändert werden sollen
FILES_TO_UPDATE = [
    'builder/sections/features/services-gym-cards.html',
    'builder/sections/features/about-gym-story.html',
    'builder/sections/hero/hero-gym-background.html',
    'builder/sections/pricing/pricing-table.html',
    'builder/sections/cta/cta-center.html',
]

def update_file(filepath):
    """Updated eine einzelne HTML-Datei"""
    if not os.path.exists(filepath):
        print(f"❌ Nicht gefunden: {filepath}")
        return False
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Pattern: Finde <!-- Universal Animation System --> bis </section>
    pattern = r'(  <!-- Universal Animation System -->.*?)(</section>)'
    
    def replace_func(match):
        return NEW_STYLE_SCRIPT + '\n' + match.group(2)
    
    new_content, count = re.subn(pattern, replace_func, content, flags=re.DOTALL)
    
    if count > 0:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"✅ Updated: {filepath} ({count} replacements)")
        return True
    else:
        print(f"⚠️  Kein Match gefunden in: {filepath}")
        return False

if __name__ == '__main__':
    print("🔄 Updating animation system in all sections...")
    print("-" * 60)
    
    success_count = 0
    for filepath in FILES_TO_UPDATE:
        if update_file(filepath):
            success_count += 1
    
    print("-" * 60)
    print(f"✅ {success_count}/{len(FILES_TO_UPDATE)} files updated!")
