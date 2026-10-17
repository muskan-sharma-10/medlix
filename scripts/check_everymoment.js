const fs = require('fs');
const html = fs.readFileSync('scripts/medlix_home_full.html', 'utf8');

const idx = html.indexOf('everymomentcounts');
console.log('everymomentcounts idx:', idx);
if (idx !== -1) {
  console.log(html.substring(idx - 600, idx + 600));
}
