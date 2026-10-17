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

// 1. STATS
console.log('=== 1. STATS ===');
// Search for Beds, Hospitals, Specialties, Doctors
const statsMatches = html.match(/<div class="elementor-counter[\s\S]*?<\/div>\s*<\/div>/gi) || [];
console.log('Found counter elements:', statsMatches.length);
statsMatches.forEach(sm => console.log(clean(sm)));

// If no elementor-counter, search around 'Beds'
const bedIdx = html.indexOf('Beds');
if (bedIdx !== -1) {
  console.log('Raw around Beds:', clean(html.substring(bedIdx - 200, bedIdx + 400)));
}

// 2. MEDICAL SPECIALITIES
console.log('\n=== 2. MEDICAL SPECIALITIES ===');
const specIdx = html.indexOf('Medical Specialities');
if (specIdx !== -1) {
  const specBlock = html.substring(specIdx, specIdx + 12000);
  // find images and titles inside this block
  const specItems = [];
  const cardRegex = /<div class="swiper-slide[\s\S]*?<\/div>\s*<\/div>/gi;
  // Let's also look for all img with captions or titles
  const imgMatches = specBlock.match(/<img[^>]+src=["']([^"']+)["'][^>]*>[\s\S]*?<div class="elementor-image-carousel-caption">([^<]*)<\/div>/gi);
  if (imgMatches) {
    imgMatches.forEach(m => console.log('Carousel item:', clean(m)));
  } else {
    // Extract images and surrounding text
    const re = /<img[^>]+src=["']([^"']+)["'][^>]*>[\s\S]*?<h[34][^>]*>([\s\S]*?)<\/h[34]>/gi;
    let m;
    while ((m = re.exec(specBlock)) !== null) {
      console.log('Spec item:', m[1], clean(m[2]));
    }
  }
}

// 3. ABOUT US
console.log('\n=== 3. ABOUT US ===');
const aboutIdx = html.indexOf('About Us');
if (aboutIdx !== -1) {
  console.log('About us section:', clean(html.substring(aboutIdx, aboutIdx + 3000)));
}

// 4. WHY CHOOSE US
console.log('\n=== 4. WHY CHOOSE US (6 items) ===');
const whyIdx = html.indexOf('Why Choose Medlix Hospital');
if (whyIdx !== -1) {
  console.log('Why choose raw:', clean(html.substring(whyIdx, whyIdx + 4000)));
}

// 5. CIRCLE OF CARE
console.log('\n=== 5. CIRCLE OF CARE ===');
const circIdx = html.indexOf('The CIRCLE of Care');
if (circIdx !== -1) {
  console.log('Circle of Care:', clean(html.substring(circIdx, circIdx + 5000)));
}

// 6. INSURANCE TIE-UPS
console.log('\n=== 6. INSURANCE TIE-UPS ===');
const insIdx = html.indexOf('Insurance');
if (insIdx !== -1) {
  const insBlock = html.substring(insIdx, insIdx + 8000);
  const insImgs = [];
  const iRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
  let im;
  while ((im = iRegex.exec(insBlock)) !== null) {
    insImgs.push(im[1]);
  }
  console.log('Insurance images found:', insImgs);
}

// 7. OUR LOCATIONS
console.log('\n=== 7. OUR LOCATIONS ===');
const locIdx = html.indexOf('Our Locations');
if (locIdx !== -1) {
  console.log('Locations block:', clean(html.substring(locIdx, locIdx + 6000)));
}

// 8. THE MEDLIX APPROACH
console.log('\n=== 8. THE MEDLIX APPROACH ===');
const appIdx = html.indexOf('The Medlix Approach');
if (appIdx !== -1) {
  console.log('Approach block:', clean(html.substring(appIdx, appIdx + 4000)));
}

// 9. TESTIMONIALS
console.log('\n=== 9. TESTIMONIALS ===');
const testIdx = html.indexOf('What Our Patient Says');
if (testIdx !== -1) {
  console.log('Testimonials block:', clean(html.substring(testIdx, testIdx + 4000)));
}

// 10. TRANSPLANT SERVICES
console.log('\n=== 10. TRANSPLANT SERVICES ===');
const trIdx = html.indexOf('Transplant Services');
if (trIdx !== -1) {
  console.log('Transplant block:', clean(html.substring(trIdx, trIdx + 4000)));
}

// 11. MEET OUR SPECIALIST
console.log('\n=== 11. DOCTORS ===');
const docIdx = html.indexOf('Meet Our Specialist');
if (docIdx !== -1) {
  console.log('Doctor block:', clean(html.substring(docIdx, docIdx + 5000)));
}
