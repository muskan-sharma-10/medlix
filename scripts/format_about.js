const cheerio = require('cheerio');
const fs = require('fs');

const html = fs.readFileSync('scripts/about_us_full.html', 'utf8');
const $ = cheerio.load(html);

const targetClasses = [
  { name: '1. Medlix at a Glance', cls: 'elementor-element-d5b672e' },
  { name: '2. Vision & Philosophy Narrative', cls: 'elementor-element-51fffcc' },
  { name: '3. Stats & Counters', cls: 'elementor-element-9667ea0' },
  { name: '4. Vision & Mission (#vision-mission)', cls: 'elementor-element-3cf27a3' },
  { name: '5. The CIRCLE of Care (#ourcore)', cls: 'elementor-element-99e6fff' },
  { name: '6. Why Choose Us (#whychoose)', cls: 'elementor-element-8d3c239' },
  { name: '7. The Medlix Approach (#approach)', cls: 'elementor-element-fa1ef09' }
];

let out = '';

targetClasses.forEach(item => {
  out += `\n========================================\n${item.name}\n========================================\n`;
  const el = $('.' + item.cls);
  if (!el.length) {
    out += 'NOT FOUND\n';
    return;
  }

  // Find images
  el.find('img').each((_, img) => {
    out += `[IMAGE] src: ${$(img).attr('src')} | alt: ${$(img).attr('alt')}\n`;
  });

  // Find background images
  const bgMatch = el.attr('style') || '';
  if (bgMatch.includes('background-image')) {
    out += `[BG-IMAGE style]: ${bgMatch}\n`;
  }

  // Iterate over headings, paragraphs, lists, funfacts
  el.find('h1, h2, h3, h4, h5, h6, p, li, .elementskit-funfact, .elementskit-infobox').each((_, child) => {
    const tagName = child.tagName ? child.tagName.toLowerCase() : '';
    const $c = $(child);
    
    // Funfact
    if ($c.hasClass('elementskit-funfact')) {
      const num = $c.find('.number-percentage-wraper').text().trim();
      const title = $c.find('.funfact-title').text().trim();
      const icon = $c.find('.elementskit-funfact-icon i, .funfact-icon svg').attr('class') || '';
      out += `[STAT] Number: ${num} | Title: ${title} | Icon: ${icon}\n`;
      return;
    }

    // Infobox
    if ($c.hasClass('elementskit-infobox')) {
      const title = $c.find('.elementskit-info-box-title').text().trim();
      const desc = $c.find('.box-body p').text().trim();
      const icon = $c.find('.elementskit-infobox-icon i').attr('class') || '';
      if (title || desc) {
        out += `[INFOBOX] Title: ${title} | Icon: ${icon} | Desc: ${desc}\n`;
      }
      return;
    }

    if (['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(tagName)) {
      out += `\n[${tagName.toUpperCase()}] ${$c.text().trim().replace(/\s+/g, ' ')}\n`;
    } else if (tagName === 'p' && !$c.parents('.elementskit-infobox').length) {
      const txt = $c.text().trim().replace(/\s+/g, ' ');
      if (txt) {
        out += `[P] ${txt}\n`;
      }
    } else if (tagName === 'li') {
      const txt = $c.text().trim().replace(/\s+/g, ' ');
      if (txt) {
        out += `  * [LI] ${txt}\n`;
      }
    }
  });
});

fs.writeFileSync('scripts/formatted_about_content.txt', out);
console.log('Written to scripts/formatted_about_content.txt, length:', out.length);
