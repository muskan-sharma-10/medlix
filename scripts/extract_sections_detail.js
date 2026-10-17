const cheerio = require('cheerio');
const fs = require('fs');

const html = fs.readFileSync('scripts/about_us_full.html', 'utf8');
const $ = cheerio.load(html);

// Let's inspect each relevant section:
const targetClasses = [
  'elementor-element-d5b672e', // Medlix at a Glance
  'elementor-element-51fffcc', // At Medlix we believe...
  'elementor-element-9667ea0', // Stats
  'elementor-element-3cf27a3', // vision-mission
  'elementor-element-99e6fff', // ourcore (CIRCLE of Care)
  'elementor-element-8d3c239', // whychoose
  'elementor-element-fa1ef09'  // approach
];

const results = {};

targetClasses.forEach(cls => {
  const el = $('.' + cls);
  if (el.length) {
    results[cls] = {
      id: el.attr('id') || '',
      html: el.html(),
      text: el.text().trim().replace(/\s+/g, ' ')
    };
  }
});

fs.writeFileSync('scripts/about_sections_detail.json', JSON.stringify(results, null, 2));
console.log('Saved detail for', Object.keys(results).length, 'sections');
