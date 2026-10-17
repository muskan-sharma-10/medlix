const cheerio = require('cheerio');
const fs = require('fs');

const html = fs.readFileSync('scripts/about_us_full.html', 'utf8');
const $ = cheerio.load(html);

console.log('--- Finding Footer in HTML ---');
$('footer, .elementor-location-footer, [class*="footer"]').each((i, el) => {
  console.log('Tag:', el.tagName, 'Classes:', $(el).attr('class'), 'ID:', $(el).attr('id'));
});

// Let's find sections around footer
// Look for 16a2 or b8f which were detected in about_sections.json earlier
console.log('\n--- Section 16a2 ---');
const s16a2 = $('.elementor-element-16a2');
console.log('16a2 classes:', s16a2.attr('class'));
console.log('16a2 html preview:', s16a2.html()?.substring(0, 400));

console.log('\n--- Section b8f ---');
const sb8f = $('.elementor-element-b8f');
console.log('b8f classes:', sb8f.attr('class'));
console.log('b8f html preview:', sb8f.html()?.substring(0, 400));

// Find CSS rules matching elementor-element-16a2, elementor-element-b8f, or footer
const styleTags = $('style').map((_, s) => $(s).html()).get().join('\n');
const lines = styleTags.split('\n');
console.log('\n--- Matching CSS in styles ---');
lines.forEach(line => {
  if (line.includes('16a2') || line.includes('b8f') || line.includes('footer-bg') || line.includes('elementor-element-1675e85')) {
    console.log(line.substring(0, 200));
  }
});
