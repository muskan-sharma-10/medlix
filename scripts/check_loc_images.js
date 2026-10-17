const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('scripts/medlix_full.html', 'utf8');
const $ = cheerio.load(html);

console.log('=== LOCATIONS SECTION 0746fc7 ===');
const locSection = $('[data-id="0746fc7"]');
locSection.find('.elementor-widget-image, .elementor-image, img').each((_, el) => {
  const src = $(el).attr('src') || $(el).attr('data-src');
  const parentText = $(el).closest('.elementor-widget-wrap, .elementor-column').text().replace(/\s+/g, ' ').trim().slice(0, 80);
  console.log('Img:', src, 'Context:', parentText);
});
