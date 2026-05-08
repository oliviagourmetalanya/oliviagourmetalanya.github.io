// One-shot script: copy 6-language translations (sv/no/da/fi/ru/de) from
// /tmp/menu_with_translations.js into the current js/menu.js, matching items
// by name. Preserves current prices, image paths, and other fields.
const fs = require('fs');

function loadMenu(path) {
  const raw = fs.readFileSync(path, 'utf8');
  const m = raw.match(/window\.MENU\s*=\s*(\{[\s\S]*?\})\s*;\s*$/);
  if (!m) throw new Error('Could not parse ' + path);
  return new Function('return ' + m[1])();
}

const oldMenu = loadMenu('old_menu_translations.tmp');
const currentMenu = loadMenu('js/menu.js');

// Build lookup of OLD items + their translations (by item name)
const oldTranslations = new Map();
const oldSections = new Map();
['food', 'drinks', 'wines'].forEach(kind => {
  if (!oldMenu[kind]) return;
  oldMenu[kind].forEach(cat => {
    if (!cat.items) return;
    cat.items.forEach(item => {
      if (item.name) {
        if (item.translations) oldTranslations.set(item.name, item.translations);
        if (item.section) oldSections.set(item.name, item.section);
      }
    });
  });
});

console.log(`Old menu had translations for ${oldTranslations.size} items`);

let copied = 0;
let alreadyHad = 0;
let noMatch = [];

['food', 'drinks', 'wines'].forEach(kind => {
  if (!currentMenu[kind]) return;
  currentMenu[kind].forEach(cat => {
    if (!cat.items) return;
    cat.items.forEach(item => {
      if (!item.name) return;
      const oldT = oldTranslations.get(item.name);
      if (!oldT) {
        noMatch.push(`${kind}/${cat.id}/${item.name}`);
        return;
      }
      if (!item.translations) item.translations = {};
      ['sv', 'no', 'da', 'fi', 'ru', 'de'].forEach(lang => {
        if (!item.translations[lang] && oldT[lang]) {
          item.translations[lang] = oldT[lang];
          copied++;
        } else if (item.translations[lang]) {
          alreadyHad++;
        }
      });
      // Also restore section translations (Romlar/Rums etc) if missing
      if (item.section && oldSections.has(item.name)) {
        const oldS = oldSections.get(item.name);
        ['sv', 'no', 'da', 'fi', 'ru', 'de'].forEach(lang => {
          if (!item.section[lang] && oldS[lang]) {
            item.section[lang] = oldS[lang];
          }
        });
      }
    });
  });
});

console.log(`Copied ${copied} translations`);
console.log(`Already had ${alreadyHad} translations`);
console.log(`No match in old menu (${noMatch.length} items):`);
noMatch.forEach(n => console.log('  - ' + n));

const header = `/* ============================================
   MENÜ — Olivia Gourmet Restaurant
   ============================================
   Tüm öğeler 8 dile çevrildi: TR (kaynak) · EN · SV · NO · DA · FI · RU · DE
   Görseller ayrı dosyalarda (images/menu/).
   ============================================ */

`;

fs.writeFileSync('js/menu.js', header + 'window.MENU = ' + JSON.stringify(currentMenu, null, 2) + ';\n');
console.log(`menu.js updated, new size: ${(fs.statSync('js/menu.js').size / 1024).toFixed(1)} KB`);
