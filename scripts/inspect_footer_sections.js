const cheerio = require('cheerio');
const fs = require('fs');

const $ = cheerio.load(fs.readFileSync('scripts/live_footer_dump.html', 'utf8'));

console.log('--- elementor-element-1675e85 (Emergency/Contact Bar) ---');
const s0 = $('.elementor-element-1675e85');
console.log('HTML:\n', s0.html());

console.log('\n--- elementor-element-16a2 (Main Footer Columns) ---');
const s1 = $('.elementor-element-16a2');
s1.find('.elementor-top-column').each((i, col) => {
  console.log(`\nCol ${i}:`, $(col).find('h2, h3, h4').map((_, h) => $(h).text().trim()).get().join(' | '));
  console.log('Text preview:', $(col).text().replace(/\s+/g, ' ').substring(0, 200));
});

console.log('\n--- elementor-element-b8f (Bottom Copyright Bar) ---');
const s2 = $('.elementor-element-b8f');
console.log('Text:', s2.text().replace(/\s+/g, ' '));
console.log('Links:', s2.find('a').map((_, a) => `${$(a).text().trim()} (${$(a).attr('href')})`).get().join(' | '));
