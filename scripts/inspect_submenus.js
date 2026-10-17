const fs = require('fs');
const header = fs.readFileSync('scripts/live_full_header.html', 'utf8');

// Find ul with sub-menu
const submenus = header.match(/<ul[^>]*class="[^"]*sub-menu[^"]*"[\s\S]*?<\/ul>/gi);
console.log('Submenus count:', submenus ? submenus.length : 0);
if (submenus) {
  submenus.forEach((sm, i) => {
    console.log(`\n--- Submenu ${i} ---`);
    const items = [...sm.matchAll(/<a[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi)].map(m => ({
      href: m[1],
      title: m[2].replace(/<[^>]*>/g, '').trim()
    }));
    console.log(items);
  });
}
