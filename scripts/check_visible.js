const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('scripts/medlix_full.html', 'utf8');
const $ = cheerio.load(html);

console.log('=== VISIBLE SECTIONS ON LIVE MEDLIX.IN ===\n');

$('.elementor-section-wrap > .elementor-element, .elementor-section.elementor-top-section').each((i, el) => {
  const cls = $(el).attr('class') || '';
  if (cls.includes('elementor-hidden-desktop') && cls.includes('elementor-hidden-tablet') && cls.includes('elementor-hidden-mobile')) {
    // This is hidden on the live website!
    return;
  }
  const id = $(el).attr('data-id');
  const title = $(el).find('h1, h2, h3').map((_, h) => $(h).text().replace(/\s+/g, ' ').trim()).get();
  console.log(`[VISIBLE SECTION ${id}]`);
  console.log('Headings:', title);
  console.log('Snippet:', $(el).text().replace(/\s+/g, ' ').trim().slice(0, 200));
  console.log('----------------------------------------------------');
});
