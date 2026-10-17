const fs = require('fs');
const css = fs.readFileSync('scripts/footer_css_dump.css', 'utf8');

const bgColors = css.match(/background-color:[^;]+;/g) || [];
const bgImages = css.match(/background-image:[^;]+;/g) || [];
const colors = css.match(/color:[^;]+;/g) || [];

console.log('--- Background Colors in Footer ---');
console.log(Array.from(new Set(bgColors)));

console.log('\n--- Background Images in Footer ---');
console.log(Array.from(new Set(bgImages)));

console.log('\n--- Text Colors in Footer ---');
console.log(Array.from(new Set(colors)));

// Check sections in live_footer_dump.html
const cheerio = require('cheerio');
const $ = cheerio.load(fs.readFileSync('scripts/live_footer_dump.html', 'utf8'));

$('section, .elementor-top-section').each((i, s) => {
  console.log(`\nSection ${i}:`, $(s).attr('class'));
  console.log('Background style:', $(s).attr('style'));
  console.log('Text preview:', $(s).text().replace(/\s+/g, ' ').substring(0, 150));
});
