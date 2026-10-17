const cheerio = require('cheerio');
const fs = require('fs');

const html = fs.readFileSync('scripts/about_us_full.html', 'utf8');
const $ = cheerio.load(html);

// Find the main content area (Elementor content)
const mainContent = $('.elementor-7055');

console.log('Main content length:', mainContent.length);

// Let's inspect sections inside the page
const sections = [];

$('article, .elementor-section-wrap > section, .elementor-top-section').each((i, sec) => {
  const text = $(sec).text().trim().replace(/\s+/g, ' ');
  const id = $(sec).attr('id') || '';
  const classes = $(sec).attr('class') || '';
  // Let's filter out header and footer
  if (classes.includes('elementor-top-section') && !classes.includes('header') && !classes.includes('footer')) {
    sections.push({
      index: i,
      id,
      classes,
      headings: $(sec).find('h1, h2, h3, h4, h5, h6').map((_, h) => `${h.tagName}: ${$(h).text().trim()}`).get(),
      textSnippet: text.substring(0, 200)
    });
  }
});

fs.writeFileSync('scripts/about_sections.json', JSON.stringify(sections, null, 2));

// Let's dump all text blocks inside the main article or content
const article = $('article');
if (article.length) {
  fs.writeFileSync('scripts/about_article_text.txt', article.text().replace(/\n\s*\n/g, '\n'));
}

// Let's extract specific sections in detail:
// 1. Hero / Banner
// 2. Medlix at a glance
// 3. Stats / Counters
// 4. Mission & Vision (Our Drive / Vision Forward)
// 5. CIRCLE of Care (#ourcore)
// 6. Why Choose Us (#whychoose)
// 7. Approach or other sections
// 8. Images used in the page

const images = [];
$('article img, .elementor-7055 img').each((_, img) => {
  images.push({
    src: $(img).attr('src') || $(img).attr('data-src'),
    alt: $(img).attr('alt')
  });
});
fs.writeFileSync('scripts/about_images.json', JSON.stringify(images, null, 2));

console.log('Sections dumped:', sections.length);
console.log('Images found:', images.length);
