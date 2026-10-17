const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('scripts/medlix_home_full.html', 'utf8');
const $ = cheerio.load(html);

$('section, [data-elementor-type="wp-page"] > div > section, div.elementor-section').each((i, el) => {
  const headings = $(el).find('h1, h2, h3, h4, .ekit-heading--title').map((j, h) => $(h).text().trim()).get();
  if (headings.length > 0) {
    console.log(`Section ${i}:`, headings.slice(0, 3).join(' | '));
  }
});
