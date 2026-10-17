const fs = require('fs');
const html = fs.readFileSync('scripts/medlix_home_full.html', 'utf8');

const srSlides = html.match(/<sr7-slide[\s\S]*?<\/sr7-slide>/gi);
console.log('sr7-slides found:', srSlides ? srSlides.length : 0);
if (srSlides) {
  srSlides.forEach((s, idx) => {
    console.log(`\n=== SLIDE ${idx} ===\n`);
    console.log(s);
  });
}

// Also check slider configuration or script around sr7
const srConfig = html.match(/<sr7-module[\s\S]*?<\/sr7-module>/i);
if (srConfig) {
  fs.writeFileSync('scripts/sr7_module.html', srConfig[0]);
  console.log('Saved sr7_module.html');
}
