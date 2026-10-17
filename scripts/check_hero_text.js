const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('scripts/medlix_full.html', 'utf8');
const $ = cheerio.load(html);

console.log('=== HERO SLIDER DETAILED CONTENT ===');
$('[data-id="151ff71"] .swiper-slide, [data-id="151ff71"] .slick-slide, [data-id="151ff71"] .elementor-repeater-item-7372d65, [data-id="151ff71"] .elementor-repeater-item-993d052, [data-id="151ff71"] .elementor-repeater-item-2a2ec96').each((i, el) => {
  console.log(`--- SLIDE ${i + 1} ---`);
  console.log($(el).text().replace(/\s+/g, ' ').trim());
});

console.log('\n--- Full section text ---');
console.log($('[data-id="151ff71"]').text().replace(/\s+/g, ' ').trim());
