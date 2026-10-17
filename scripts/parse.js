const fs = require('fs');
const path = require('path');

const filePath = 'C:/Users/sw/.gemini/antigravity-ide/brain/3d57269f-ba40-4f7c-8ebd-3cc03fe2d8a6/.system_generated/steps/45/content.md';
const content = fs.readFileSync(filePath, 'utf8');

// Find all headings
const headings = [];
const hRegex = /<h([1-6])[^>]*>([\s\S]*?)<\/h\1>/gi;
let match;
while ((match = hRegex.exec(content)) !== null) {
  headings.push({ tag: 'h' + match[1], text: match[2].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ') });
}
console.log('--- HEADINGS ---');
console.log(JSON.stringify(headings, null, 2));

// Find all images
const images = new Set();
const imgRegex = /<img[^>]+src=["']([^"']+)["']/gi;
while ((match = imgRegex.exec(content)) !== null) {
  images.add(match[1]);
}
console.log('--- IMAGES (' + images.size + ') ---');
console.log(Array.from(images));

// Find links
const links = new Set();
const aRegex = /<a[^>]+href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi;
const navItems = [];
while ((match = aRegex.exec(content)) !== null) {
  const text = match[2].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ');
  if (text) {
    navItems.push({ href: match[1], text });
  }
}
console.log('--- NAV / LINKS ---');
console.log(JSON.stringify(navItems.slice(0, 50), null, 2));
