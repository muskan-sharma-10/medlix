const https = require('https');
const fs = require('fs');
const cheerio = require('cheerio');

const pages = [
  { slug: 'about-us', url: 'https://medlix.in/about-us/' },
  { slug: 'corporate', url: 'https://medlix.in/corporate/' },
  { slug: 'contact-us', url: 'https://medlix.in/contact-us/' },
  { slug: 'career', url: 'https://medlix.in/career/' },
  { slug: 'doctors', url: 'https://medlix.in/doctors/' },
  { slug: 'insurances', url: 'https://medlix.in/insurances/' },
  { slug: 'insurances-private', url: 'https://medlix.in/insurances/private/' },
  { slug: 'insurances-govt', url: 'https://medlix.in/insurances/govt/' },
  { slug: 'medlix-aarvy-hospital', url: 'https://medlix.in/medlix-aarvy-hospital/' },
  { slug: 'medlix-manavta-hospital', url: 'https://medlix.in/medlix-manavta-hospital/' },
  { slug: 'medlix-aayu-hospital', url: 'https://medlix.in/medlix-aayu-hospital/' },
  { slug: 'golden-hospital-sohna-road', url: 'https://medlix.in/golden-hospital-sohna-road/' },
  { slug: 'medlix-ananta-hospital', url: 'https://medlix.in/medlix-ananta-hospital/' },
  { slug: 'medlix-gopal-hospital', url: 'https://medlix.in/medlix-gopal-hospital/' },
  { slug: 'medlix-kumar-hospital', url: 'https://medlix.in/medlix-kumar-hospital/' },
  { slug: 'medlix-dr-rb-yadav-hospital', url: 'https://medlix.in/medlix-dr-rb-yadav-hospital/' },
  { slug: 'blogs', url: 'https://medlix.in/blogs/' },
  { slug: 'department', url: 'https://medlix.in/department/' },
  { slug: 'book-appointment', url: 'https://medlix.in/book-appointment/' }
];

function fetchUrl(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', (err) => {
      resolve('');
    });
  });
}

async function run() {
  const results = {};
  for (const p of pages) {
    console.log('Fetching', p.url);
    const html = await fetchUrl(p.url);
    if (!html) {
      results[p.slug] = { error: 'Failed to fetch' };
      continue;
    }
    const $ = cheerio.load(html);
    const title = $('title').text().trim();
    const headings = [];
    $('h1, h2, h3, h4').each((_, el) => {
      const txt = $(el).text().replace(/\s+/g, ' ').trim();
      if (txt && txt.length > 2 && txt.length < 150) headings.push(txt);
    });

    const paragraphs = [];
    $('p').each((_, el) => {
      const txt = $(el).text().replace(/\s+/g, ' ').trim();
      if (txt && txt.length > 20) paragraphs.push(txt);
    });

    const images = [];
    $('img').each((_, el) => {
      const src = $(el).attr('src') || $(el).attr('data-src');
      const alt = $(el).attr('alt') || '';
      if (src && !src.includes('gravatar') && !images.includes(src)) {
        images.push({ src, alt });
      }
    });

    results[p.slug] = {
      title,
      headings: [...new Set(headings)].slice(0, 30),
      paragraphs: [...new Set(paragraphs)].slice(0, 30),
      images: images.slice(0, 20)
    };
  }

  fs.writeFileSync('scripts/scraped_site_pages.json', JSON.stringify(results, null, 2));
  console.log('Finished scraping pages! Saved to scripts/scraped_site_pages.json');
}

run();
