const fs = require('fs');
const header = fs.readFileSync('scripts/live_full_header.html', 'utf8');

// Find all links and menu items in this header
const links = [];
const linkRegex = /<a[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi;
let match;
while ((match = linkRegex.exec(header)) !== null) {
  const text = match[2].replace(/<[^>]*>/g, '').trim();
  if (text) {
    links.push({ url: match[1], text });
  }
}

console.log('Total header links found:', links.length);
console.log(JSON.stringify(links, null, 2));

// Find images in header
const imgRegex = /<img[^>]*src="([^"]*)"[^>]*>/gi;
const imgs = [];
while ((match = imgRegex.exec(header)) !== null) {
  imgs.push(match[1]);
}
console.log('Header images:', imgs);
