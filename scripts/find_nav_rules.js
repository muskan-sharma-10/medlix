const fs = require('fs');
const html = fs.readFileSync('scripts/medlix_home_full.html', 'utf8');

const regex = /\.elementor-5402[^{]*\{[^}]*\}/g;
let m;
const navRules = [];
while ((m = regex.exec(html)) !== null) {
  if (m[0].includes('ekit-menu') || m[0].includes('nav') || m[0].includes('menu')) {
    navRules.push(m[0]);
  }
}

console.log('Nav rules count:', navRules.length);
console.log(navRules.slice(0, 15).join('\n'));
