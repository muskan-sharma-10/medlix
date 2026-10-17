const fs = require('fs');
const html = fs.readFileSync('scripts/medlix_home_full.html', 'utf8');

// Find all CSS rules relating to menu-item, elementskit-menu-nav-link, or ekit-menu
const menuMatches = html.match(/(\.[^{]*(?:elementskit|menu-item|ekit-menu)[^{]*\{[^}]*\})/gi) || [];
console.log('Total menu CSS matches:', menuMatches.length);
fs.writeFileSync('scripts/menu_styles.css', menuMatches.join('\n'));

// Let's filter for font-size and padding
const relevant = menuMatches.filter(m => m.includes('font-size') || m.includes('padding') || m.includes('letter-spacing'));
console.log('Relevant CSS rules:');
console.log(relevant.slice(0, 15).join('\n'));
