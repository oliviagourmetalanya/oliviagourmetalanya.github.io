// One-shot script: extract base64 images from menu.js → save as files in images/menu/,
// then rewrite menu.js with file paths instead of embedded data.
// Run with: node extract-images.js
const fs = require('fs');
const path = require('path');

const menuPath = 'js/menu.js';
const imagesDir = 'images/menu';

const raw = fs.readFileSync(menuPath, 'utf8');

// Find the object literal after `window.MENU = `
const match = raw.match(/window\.MENU\s*=\s*(\{[\s\S]*?\})\s*;\s*$/);
if (!match) {
  console.error('Could not find window.MENU object literal');
  process.exit(1);
}

// Parse safely via Function
const menu = new Function('return ' + match[1])();

if (!fs.existsSync(imagesDir)) fs.mkdirSync(imagesDir, { recursive: true });

let extracted = 0;
let skipped = 0;

function slug(s) {
  return String(s || '')
    .toLowerCase()
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 40) || 'item';
}

function processItems(items, prefix) {
  items.forEach((item, idx) => {
    if (typeof item.image === 'string' && item.image.startsWith('data:image/')) {
      const m = item.image.match(/^data:image\/(\w+);base64,([\s\S]+)$/);
      if (m) {
        const ext = m[1] === 'jpeg' ? 'jpg' : m[1];
        const base = `${prefix}-${idx + 1}-${slug(item.name)}`;
        const filename = `${base}.${ext}`;
        const fullPath = path.join(imagesDir, filename);
        fs.writeFileSync(fullPath, Buffer.from(m[2], 'base64'));
        item.image = `images/menu/${filename}`;
        extracted++;
      } else {
        skipped++;
      }
    }
  });
}

['food', 'drinks', 'wines'].forEach(kind => {
  const cats = menu[kind];
  if (!Array.isArray(cats)) return;
  cats.forEach(cat => {
    if (Array.isArray(cat.items)) {
      processItems(cat.items, `${kind}-${cat.id || 'cat'}`);
    }
  });
});

const header = `/* ============================================
   MENÜ — Olivia Gourmet Restaurant
   ============================================
   Görseller ayrı dosyalarda (images/menu/) — daha hızlı yüklenir.
   Bu dosya admin panelinden tekrar dışa aktarılabilir.
   ============================================ */

`;

fs.writeFileSync(menuPath, header + 'window.MENU = ' + JSON.stringify(menu, null, 2) + ';\n');

console.log(`Extracted: ${extracted} images`);
console.log(`Skipped: ${skipped}`);
const newSize = fs.statSync(menuPath).size;
console.log(`menu.js new size: ${(newSize / 1024).toFixed(1)} KB`);
