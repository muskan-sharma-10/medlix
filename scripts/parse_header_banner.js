const fs = require('fs');
const html = fs.readFileSync('scripts/medlix_home_full.html', 'utf8');

// Search for header classes or tags
const headerRegex = /<div[^>]*class="[^"]*(?:site-header|header|nav|top-bar)[^"]*"[\s\S]*?(?=<div[^>]*class="[^"]*(?:slider|banner|rev_slider|elementor-section-wrap))/i;
const headerMatch = html.match(headerRegex);

// Let's find rev slider / banner specifically
const revSliderMatch = html.match(/<rs-module-wrap[\s\S]*?<\/rs-module-wrap>/i) || html.match(/<rs-module[\s\S]*?<\/rs-module>/i);
if (revSliderMatch) {
  fs.writeFileSync('scripts/extracted_banner.html', revSliderMatch[0]);
  console.log('Saved extracted_banner.html, length:', revSliderMatch[0].length);
} else {
  console.log('No rs-module found, looking for rev_slider or slider');
  const sliderMatch = html.match(/class="[^"]*rev_slider[^"]*"[\s\S]*?<\/div>/);
  console.log('sliderMatch:', sliderMatch ? sliderMatch[0].substring(0, 200) : 'none');
}

// Let's find the top-bar and nav markup
const topBarIndex = html.indexOf('9220143473');
console.log('9220143473 index:', topBarIndex);
if (topBarIndex !== -1) {
  const snippet = html.substring(Math.max(0, topBarIndex - 500), Math.min(html.length, topBarIndex + 2500));
  fs.writeFileSync('scripts/extracted_header_snippet.html', snippet);
  console.log('Saved extracted_header_snippet.html');
}

// Let's find the banner texts: "MEDLIX NEVER WAVERS"
const bannerIndex = html.indexOf('MEDLIX');
console.log('MEDLIX index:', bannerIndex);
if (bannerIndex !== -1) {
  const snippet = html.substring(Math.max(0, bannerIndex - 500), Math.min(html.length, bannerIndex + 4000));
  fs.writeFileSync('scripts/extracted_banner_snippet.html', snippet);
  console.log('Saved extracted_banner_snippet.html');
}
