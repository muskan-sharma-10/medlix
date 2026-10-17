const cheerio = require('cheerio');
const fs = require('fs');

const html = fs.readFileSync('scripts/about_us_full.html', 'utf8');
const $ = cheerio.load(html);

const footer = $('.ekit-template-content-footer');
console.log('Footer found, length:', footer.length);
fs.writeFileSync('scripts/live_footer_dump.html', footer.html() || 'empty');

// Find all CSS rules related to the footer classes inside footer
const classes = new Set();
footer.find('*').each((i, el) => {
  const cls = $(el).attr('class');
  if (cls) {
    cls.split(/\s+/).forEach(c => {
      if (c.startsWith('elementor-element-')) classes.add(c);
    });
  }
});

console.log('Unique elementor element classes in footer:', Array.from(classes));

// Check styles for background, colors, fonts
const styles = $('style').map((_, s) => $(s).html()).get().join('\n');
const matchedRules = [];
classes.forEach(cls => {
  const reg = new RegExp(`\\.${cls}[^{]*\\{[^}]*\\}`, 'g');
  let match;
  while ((match = reg.exec(styles)) !== null) {
    matchedRules.push(match[0]);
  }
});

fs.writeFileSync('scripts/footer_css_dump.css', matchedRules.join('\n\n'));
console.log('Matched CSS rules count:', matchedRules.length);
