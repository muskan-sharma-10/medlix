const fs = require('fs');

const rawHtml = fs.readFileSync('d:/medlix/scripts/medlix_full.html', 'utf8');
const bodyStart = rawHtml.indexOf('<body');
const html = rawHtml.substring(bodyStart);

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

console.log('Body length:', html.length);

// 1. STATS
console.log('\n--- 1. STATS ---');
const statRe = /class="number-percentage"[^>]*data-value="([^"]+)"[\s\S]*?<h[345][^>]*>([\s\S]*?)<\/h[345]>/gi;
let m;
while ((m = statRe.exec(html)) !== null) {
  console.log(`Stat: ${m[1]} -> ${clean(m[2])}`);
}
// Also search for counter widget
const statRe2 = /<div class="elementor-counter-number-wrapper">[\s\S]*?data-to-value="([^"]+)"[\s\S]*?<div class="elementor-counter-title">([\s\S]*?)<\/div>/gi;
while ((m = statRe2.exec(html)) !== null) {
  console.log(`Counter: ${m[1]} -> ${clean(m[2])}`);
}

// 2. CIRCLE OF CARE (all 6)
console.log('\n--- 2. CIRCLE OF CARE ---');
const circleRe = /<h3[^>]*class="elementskit-info-box-title">([C|I|R|L|E]\s*[-–—]\s*[^<]+)<\/h3>[\s\S]*?<div class="box-body">\s*<p>([\s\S]*?)<\/p>/gi;
while ((m = circleRe.exec(html)) !== null) {
  console.log(`Value: ${clean(m[1])} ===> ${clean(m[2])}`);
}

// 3. WHY CHOOSE (all 6)
console.log('\n--- 3. WHY CHOOSE MEDLIX ---');
const whyRe = /<h3[^>]*class="elementor-image-box-title">([\s\S]*?)<\/h3>[\s\S]*?<p[^>]*class="elementor-image-box-description">([\s\S]*?)<\/p>/gi;
while ((m = whyRe.exec(html)) !== null) {
  console.log(`Why Item: ${clean(m[1])} ===> ${clean(m[2])}`);
}

// 4. MEDICAL SPECIALTIES IN BODY
console.log('\n--- 4. MEDICAL SPECIALTIES ---');
const specIdx = html.indexOf('class="elementskit-section-title">Medical Specialities');
if (specIdx !== -1) {
  const specBlock = html.substring(specIdx, specIdx + 15000);
  // look for slides or images with captions
  const slideRe = /<div class="swiper-slide[\s\S]*?<\/div>\s*<\/div>/gi;
  // Let's find all images and captions in this block
  const capRe = /<img[^>]+src=["']([^"']+)["'][^>]*>[\s\S]*?<div class="elementor-image-carousel-caption">([\s\S]*?)<\/div>/gi;
  let cm;
  while ((cm = capRe.exec(specBlock)) !== null) {
    console.log(`Specialty: ${clean(cm[2])} (Img: ${cm[1]})`);
  }
}

// 5. INSURANCE TIE-UPS IN BODY
console.log('\n--- 5. INSURANCE TIE-UPS ---');
const insIdx = html.indexOf('Insurance Tie');
if (insIdx !== -1) {
  const insBlock = html.substring(insIdx, insIdx + 15000);
  const insImgRe = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
  let im;
  const imgs = [];
  while ((im = insImgRe.exec(insBlock)) !== null) {
    if (im[1].includes('uploads')) imgs.push(im[1]);
  }
  console.log('Insurance images:', imgs);
}

// 6. LOCATIONS IN BODY
console.log('\n--- 6. LOCATIONS ---');
const locIdx = html.indexOf('Our Locations');
if (locIdx !== -1) {
  const locBlock = html.substring(locIdx, locIdx + 15000);
  // Let's find images, titles, descriptions
  const locRe = /<div class="[^"]*hospitalImages[^"]*"[\s\S]*?<img[^>]+src=["']([^"']+)["'][\s\S]*?<h3[^>]*>([\s\S]*?)<\/h3>[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/gi;
  while ((m = locRe.exec(locBlock)) !== null) {
    console.log(`Location: ${clean(m[2])} | ${clean(m[3])} | Img: ${m[1]}`);
  }
}

// 7. TRANSPLANT SERVICES IN BODY
console.log('\n--- 7. TRANSPLANT SERVICES ---');
const trIdx = html.indexOf('Transplant Services');
if (trIdx !== -1) {
  const trBlock = html.substring(trIdx, trIdx + 8000);
  const trRe = /<h3[^>]*class="elementskit-info-box-title">([\s\S]*?)<\/h3>[\s\S]*?<div class="box-body">\s*<p>([\s\S]*?)<\/p>/gi;
  while ((m = trRe.exec(trBlock)) !== null) {
    console.log(`Transplant: ${clean(m[1])} ===> ${clean(m[2])}`);
  }
}

// 8. TESTIMONIALS
console.log('\n--- 8. TESTIMONIALS ---');
const testIdx = html.indexOf('What Our Patient Says');
if (testIdx !== -1) {
  const testBlock = html.substring(testIdx, testIdx + 8000);
  const tRe = /<div class="elementor-testimonial-content">([\s\S]*?)<\/div>[\s\S]*?<div class="elementor-testimonial-name">([\s\S]*?)<\/div>[\s\S]*?<div class="elementor-testimonial-job">([\s\S]*?)<\/div>/gi;
  while ((m = tRe.exec(testBlock)) !== null) {
    console.log(`Testimonial: ${clean(m[2])} (${clean(m[3])}) -> "${clean(m[1])}"`);
  }
}

// 9. DOCTORS / SPECIALISTS
console.log('\n--- 9. DOCTORS ---');
const docIdx = html.indexOf('Meet Our Specialist');
if (docIdx !== -1) {
  const docBlock = html.substring(docIdx, docIdx + 12000);
  // Find doctor images, names, specialties
  const dRe = /<div class="single-team-member[\s\S]*?<img[^>]+src=["']([^"']+)["'][\s\S]*?<h3[^>]*>([\s\S]*?)<\/h3>[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/gi;
  while ((m = dRe.exec(docBlock)) !== null) {
    console.log(`Doctor: ${clean(m[2])} | ${clean(m[3])} | Img: ${m[1]}`);
  }
}
