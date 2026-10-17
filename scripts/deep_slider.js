const fs = require('fs');
const html = fs.readFileSync('scripts/medlix_home_full.html', 'utf8');

// Find all occurrences of MEDLIX NEVER WAVERS or Healthcare for All or YOUR HEALTH
const s1 = html.indexOf('MEDLIX NEVER WAVERS');
const s2 = html.indexOf('Healthcare for All:');
const s3 = html.indexOf('YOUR HEALTH, OUR PRIORITY');
console.log('Indices:', { s1, s2, s3 });

// Let's dump the section around s1
const bannerSection = html.substring(Math.max(0, s1 - 1000), Math.min(html.length, s1 + 10000));
fs.writeFileSync('scripts/slider_deep_inspect.html', bannerSection);
console.log('Saved slider_deep_inspect.html');

// Let's also check for rs-slide or revolution slider elements
const rsMatches = html.match(/<rs-slide[^>]*>[\s\S]*?<\/rs-slide>/gi);
console.log('rs-slides found:', rsMatches ? rsMatches.length : 0);
if (rsMatches) {
  rsMatches.forEach((s, i) => {
    fs.writeFileSync(`scripts/live_slide_${i}.html`, s);
  });
}
