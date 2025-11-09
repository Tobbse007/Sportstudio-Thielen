#!/usr/bin/env node

/**
 * Migration Script: JSON → HTML + Meta-JSON
 * 
 * Konvertiert alle Section-Templates von:
 *   sections/hero/hero-fullscreen.json
 * 
 * Nach:
 *   sections/hero/hero-fullscreen.html (nur HTML)
 *   sections/hero/hero-fullscreen.meta.json (nur Metadaten)
 */

const fs = require('fs');
const path = require('path');

const sectionsDir = path.join(__dirname, 'sections');

function findAllJsonFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      findAllJsonFiles(filePath, fileList);
    } else if (file.endsWith('.json') && file !== '_TEMPLATE.json') {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

function migrateJsonToHtml(jsonPath) {
  console.log(`\n📄 Migriere: ${path.relative(__dirname, jsonPath)}`);
  
  try {
    // Lese JSON
    const jsonContent = fs.readFileSync(jsonPath, 'utf-8');
    const section = JSON.parse(jsonContent);
    
    // Extrahiere Template
    const htmlContent = section.template || '';
    delete section.template;
    
    // Erstelle neue Dateinamen
    const basePath = jsonPath.replace('.json', '');
    const htmlPath = basePath + '.html';
    const metaPath = basePath + '.meta.json';
    
    // Schreibe HTML-Datei
    fs.writeFileSync(htmlPath, htmlContent, 'utf-8');
    console.log(`  ✅ HTML erstellt: ${path.basename(htmlPath)} (${htmlContent.length} Zeichen)`);
    
    // Schreibe Meta-JSON
    fs.writeFileSync(metaPath, JSON.stringify(section, null, 2), 'utf-8');
    console.log(`  ✅ Meta erstellt: ${path.basename(metaPath)}`);
    
    // Lösche alte JSON (optional - erstmal behalten als Backup)
    // fs.unlinkSync(jsonPath);
    // console.log(`  🗑️  Alte JSON gelöscht`);
    
    return { success: true, htmlPath, metaPath };
  } catch (error) {
    console.error(`  ❌ Fehler: ${error.message}`);
    return { success: false, error: error.message };
  }
}

// Main
console.log('🚀 Starte Migration: JSON → HTML + Meta-JSON\n');
console.log('=' .repeat(60));

const jsonFiles = findAllJsonFiles(sectionsDir);
console.log(`\n📦 Gefunden: ${jsonFiles.length} Section-JSON-Dateien\n`);

let successCount = 0;
let errorCount = 0;

jsonFiles.forEach(jsonPath => {
  const result = migrateJsonToHtml(jsonPath);
  if (result.success) {
    successCount++;
  } else {
    errorCount++;
  }
});

console.log('\n' + '='.repeat(60));
console.log(`\n✅ Migration abgeschlossen!`);
console.log(`  Erfolgreich: ${successCount}`);
console.log(`  Fehler: ${errorCount}`);
console.log(`\n💡 Alte .json Dateien wurden als Backup behalten`);
console.log(`   Du kannst sie später manuell löschen.\n`);
