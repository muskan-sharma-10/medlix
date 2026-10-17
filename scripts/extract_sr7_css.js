const fs = require('fs');
const html = fs.readFileSync('scripts/medlix_home_full.html', 'utf8');

const regex = /#SR7_2_1[^{]*\{[^}]*\}/g;
let m;
const rules = [];
while ((m = regex.exec(html)) !== null) {
  rules.push(m[0]);
}
console.log('Total SR7 rules:', rules.length);
fs.writeFileSync('scripts/sr7_rules.css', rules.join('\n'));
console.log('Saved sr7_rules.css');

// Also check font families used in SR7
const fontMatches = html.match(/font-family:[^;]*(?:Outfit|Exo|Roboto|Montserrat)[^;]*/gi);
console.log('Fonts in page:', [...new Set(fontMatches)].slice(0, 10));
