# Universal Animation System

## So funktioniert das neue System:

### 1. Jede Section-HTML enthält:
```html
<section class="animated-section" data-animation="{{animationStyle}}" data-speed="{{animationSpeed}}">
  
  <!-- Section Content -->
  
  <!-- ANIMATIONS-BLOCK am Ende jeder Section -->
  <style>
    /* Animations System - Auto-injected */
    .animated-section { ... }
    .anim-item { ... }
    /* Hover Effekte */
    .hover-lift:hover { ... }
  </style>
</section>
```

### 2. Globale Variablen:
- `{{animationEnabled}}` - true/false
- `{{animationSpeed}}` - fast/normal/slow
- `{{animationStyle}}` - fade/fade-up/fade-down/slide-left/slide-right/zoom/none

### 3. Element-Klassen:
- `.animated-section` - Basis-Animation der Section
- `.anim-item` - Für einzelne animierte Elemente (mit delays)
- `.anim-delay-1`, `.anim-delay-2`, etc. - Gestaffelte Delays
- `.hover-lift` - Hover-Effekt: leicht anheben
- `.hover-scale` - Hover-Effekt: vergrößern
- `.hover-glow` - Hover-Effekt: Schatten-Glow

### 4. Vorteile:
✅ Alles in HTML definiert
✅ Funktioniert in Builder, Preview, Export
✅ Keine JavaScript-Dependencies
✅ Skalierbar für neue Sections
✅ Global steuerbar über Styles Panel
