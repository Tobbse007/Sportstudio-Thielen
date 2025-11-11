# 🧪 Animations-Test Checkliste

## ✅ Test 1: Builder - Sections sichtbar
1. Builder öffnen (`/builder/index.html`)
2. Section hinzufügen (z.B. Hero Fullscreen)
3. **Erwartung**: Section ist SOFORT sichtbar (nicht weiß)
4. **Technisch**: `.anim-active` Klasse wird im Builder hinzugefügt

---

## ✅ Test 2: Vorschau - Animationen beim Scrollen
1. Im Builder mehrere Sections hinzufügen
2. "Vorschau" Button klicken
3. Ganz nach oben scrollen
4. Langsam nach unten scrollen
5. **Erwartung**: Sections erscheinen mit Animation wenn du zu ihnen scrollst
6. **Technisch**: `.anim-active` wird vor Vorschau entfernt, Scripts übernehmen

---

## ✅ Test 3: Export - Animationen funktionieren
1. Website exportieren
2. Exportierte HTML-Datei im Browser öffnen
3. Nach unten scrollen
4. **Erwartung**: Animationen triggern beim Scrollen
5. **Technisch**: Intersection Observer Scripts aktiv

---

## 🔧 Falls Probleme auftreten:

### Problem: Builder zeigt weiße Bereiche
**Lösung**: Browser-Cache leeren und neu laden (Ctrl+Shift+R)

### Problem: Vorschau zeigt Animationen sofort
**Lösung**: 
- Console öffnen (F12)
- Prüfen ob `.anim-active` Klasse noch vorhanden ist
- Sollte NICHT vorhanden sein!

### Problem: Animationen funktionieren gar nicht
**Lösung**: 
- Console prüfen auf JavaScript-Fehler
- Intersection Observer Scripts vorhanden?
- Browser unterstützt Intersection Observer?

---

## 📊 Technische Details

### Builder-Logik:
```javascript
// Beim Hinzufügen einer Section:
function activateSectionAnimations(sectionEl) {
  const animatedSections = sectionEl.querySelectorAll('.animated-section');
  animatedSections.forEach(section => {
    section.classList.add('anim-active'); // ← Sofort sichtbar!
  });
}
```

### Export/Vorschau-Logik:
```javascript
// Vor Export/Vorschau:
content.querySelectorAll('.anim-active').forEach(el => {
  el.classList.remove('anim-active'); // ← Scripts übernehmen!
});
```

### Section-Template-Logik:
```html
<style>
  .animated-section { opacity: 0; /* Unsichtbar */ }
  .animated-section.anim-active { opacity: 1; /* Sichtbar */ }
</style>

<script>
  // Intersection Observer aktiviert .anim-active beim Scrollen
  const observer = new IntersectionObserver(...);
</script>
```

---

## ✅ Status: IMPLEMENTIERT
- ✅ activateSectionAnimations() Funktion erstellt
- ✅ addSection() aktiviert Animationen
- ✅ refreshAllSections() aktiviert Animationen  
- ✅ executeExport() entfernt .anim-active
- ✅ previewWebsite() entfernt .anim-active

**Datum**: 2025-11-11
**Tester**: Bitte alle Tests durchführen und Ergebnisse melden!
