const fs = require('fs');

const html = fs.readFileSync('d:/medlix/scripts/medlix_full.html', 'utf8');

// Function to clean text
function cleanText(str) {
  return str.replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/&nbsp;/g, ' ').replace(/&#038;/g, '&').replace(/&#8211;/g, '-').replace(/\s+/g, ' ').trim();
}

// 1. Top bar & Contact info
console.log('--- EXTRACTING TOP BAR & CONTACT ---');
const contactIdx = html.indexOf('+91 92895 00375');
console.log('Contact snippet:', html.substring(contactIdx - 200, contactIdx + 300));

// 2. Statistics Section
console.log('\n--- EXTRACTING STATS ---');
const bedsIdx = html.indexOf('Beds');
console.log('Stats snippet around Beds:', cleanText(html.substring(bedsIdx - 500, bedsIdx + 800)));

// 3. Circle of Care
console.log('\n--- EXTRACTING CIRCLE OF CARE ---');
const circleIdx = html.indexOf('CIRCLE of Care');
console.log('Circle snippet:', cleanText(html.substring(circleIdx - 200, circleIdx + 4000)));

// 4. Hero Slides
console.log('\n--- EXTRACTING HERO BANNER ---');
const heroIdx = html.indexOf('MEDLIX NEVER WAVERS');
console.log('Hero snippet:', cleanText(html.substring(heroIdx - 500, heroIdx + 2000)));

// 5. Why Choose Us
console.log('\n--- EXTRACTING WHY CHOOSE US ---');
const whyIdx = html.indexOf('Why Choose Medlix Hospital');
console.log('Why Choose snippet:', cleanText(html.substring(whyIdx, whyIdx + 3000)));

// 6. Insurance Tie-ups
console.log('\n--- EXTRACTING INSURANCE ---');
const insIdx = html.indexOf('Insurance Tie');
console.log('Insurance snippet:', html.substring(insIdx, insIdx + 3000));

// 7. Transplant services
console.log('\n--- EXTRACTING TRANSPLANT ---');
const transIdx = html.indexOf('Transplant Services');
console.log('Transplant snippet:', cleanText(html.substring(transIdx, transIdx + 2000)));

// 8. Testimonials
console.log('\n--- EXTRACTING TESTIMONIALS ---');
const testIdx = html.indexOf('What Our Patient Says');
console.log('Testimonials snippet:', cleanText(html.substring(testIdx, testIdx + 3000)));

// 9. Doctors
console.log('\n--- EXTRACTING DOCTORS ---');
const docIdx = html.indexOf('Meet Our Specialist');
console.log('Doctors snippet:', cleanText(html.substring(docIdx, docIdx + 3500)));

// 10. Footer
console.log('\n--- EXTRACTING FOOTER ---');
const footerIdx = html.indexOf('<footer');
if (footerIdx !== -1) {
  console.log('Footer snippet:', cleanText(html.substring(footerIdx, footerIdx + 3000)));
} else {
  const lastPart = html.substring(html.length - 10000);
  console.log('Last part of HTML:', cleanText(lastPart));
}
