const fs = require('fs');

const html = fs.readFileSync('d:/medlix/scripts/medlix_full.html', 'utf8');

function clean(str) {
  if (!str) return '';
  return str
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&nbsp;/g, ' ')
    .replace(/&#038;/g, '&')
    .replace(/&#8211;/g, '-')
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, ' ')
    .trim();
}

// 1. Stats extraction
const statsIdx = html.indexOf('Beds');
const statsChunk = html.substring(statsIdx - 1500, statsIdx + 2500);
fs.writeFileSync('d:/medlix/scripts/chunk_stats.html', statsChunk, 'utf8');

// 2. Circle of Care
const circleIdx = html.indexOf('CIRCLE of Care');
const circleChunk = html.substring(circleIdx - 300, circleIdx + 8000);
fs.writeFileSync('d:/medlix/scripts/chunk_circle.html', circleChunk, 'utf8');

// 3. Why Choose
const whyIdx = html.indexOf('Why Choose Medlix Hospital');
const whyChunk = html.substring(whyIdx - 200, whyIdx + 6000);
fs.writeFileSync('d:/medlix/scripts/chunk_why.html', whyChunk, 'utf8');

// 4. Specialties
// Find Medical Specialities heading in body (not SEO meta)
const bodySpecialtiesIdx = html.indexOf('class="elementskit-section-title">Medical Specialities');
const specChunk = html.substring(bodySpecialtiesIdx - 200, bodySpecialtiesIdx + 15000);
fs.writeFileSync('d:/medlix/scripts/chunk_specialties.html', specChunk, 'utf8');

// 5. Insurance Tie-ups
const insIdx = html.indexOf('Insurance Tie');
const insChunk = html.substring(insIdx - 200, insIdx + 10000);
fs.writeFileSync('d:/medlix/scripts/chunk_insurance.html', insChunk, 'utf8');

// 6. Locations
const locIdx = html.indexOf('class="elementskit-section-title">Our Locations');
const locChunk = html.substring(locIdx - 200, locIdx + 15000);
fs.writeFileSync('d:/medlix/scripts/chunk_locations.html', locChunk, 'utf8');

// 7. About Us
const aboutMatch = html.match(/<h2[^>]*class="elementskit-section-title"[^>]*>About Us<\/h2>/i);
if (aboutMatch) {
  const aIdx = html.indexOf(aboutMatch[0]);
  const aboutChunk = html.substring(aIdx - 500, aIdx + 8000);
  fs.writeFileSync('d:/medlix/scripts/chunk_about.html', aboutChunk, 'utf8');
}

// 8. Transplant
const transMatch = html.match(/Transplant Services/i);
if (transMatch) {
  const tIdx = html.indexOf(transMatch[0]);
  const transChunk = html.substring(tIdx - 200, tIdx + 8000);
  fs.writeFileSync('d:/medlix/scripts/chunk_transplant.html', transChunk, 'utf8');
}

// 9. Approach
const appMatch = html.match(/The Medlix Approach/i);
if (appMatch) {
  const apIdx = html.indexOf(appMatch[0]);
  const appChunk = html.substring(apIdx - 200, apIdx + 8000);
  fs.writeFileSync('d:/medlix/scripts/chunk_approach.html', appChunk, 'utf8');
}

// 10. Footer
const footIdx = html.lastIndexOf('<footer');
if (footIdx !== -1) {
  const footChunk = html.substring(footIdx);
  fs.writeFileSync('d:/medlix/scripts/chunk_footer.html', footChunk, 'utf8');
} else {
  // search Reach Out to Us
  const roIdx = html.indexOf('Reach Out to Us');
  if (roIdx !== -1) {
    fs.writeFileSync('d:/medlix/scripts/chunk_footer.html', html.substring(roIdx - 500), 'utf8');
  }
}

console.log('All chunks written to scripts/');
