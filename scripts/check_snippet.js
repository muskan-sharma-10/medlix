const fs = require('fs');
const html = fs.readFileSync('scripts/medlix_home_full.html', 'utf8');

const idx = html.indexOf('Healthcare for All:');
console.log('idx:', idx);
if (idx !== -1) {
  const snippet = html.substring(idx - 300, idx + 1500);
  console.log(snippet);
}
