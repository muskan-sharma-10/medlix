const fs = require('fs');
const html = fs.readFileSync('scripts/medlix_home_full.html', 'utf8');

// Find menu structure
const menuIdx = html.indexOf('Doctors / Medical Specialists');
console.log('menuIdx:', menuIdx);
if (menuIdx !== -1) {
  const menuArea = html.substring(menuIdx - 1500, menuIdx + 4000);
  fs.writeFileSync('scripts/menu_markup.html', menuArea);
  console.log('Saved menu_markup.html');
}
