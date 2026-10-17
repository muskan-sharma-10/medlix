const https = require('https');
const fs = require('fs');

https.get('https://medlix.in/', {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
  }
}, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('Total length:', data.length);
    
    // Save full html for reference
    fs.writeFileSync('scripts/medlix_home_full.html', data);
    
    // Extract header
    const headerMatch = data.match(/<header[\s\S]*?<\/header>/i);
    if (headerMatch) {
      console.log('Header found! Length:', headerMatch[0].length);
      fs.writeFileSync('scripts/live_header.html', headerMatch[0]);
    } else {
      console.log('No <header> tag found, searching for medizco-header or similar');
      const navMatch = data.match(/<div[^>]*class="[^"]*header[^"]*"[\s\S]*?<\/div>/i);
      console.log('navMatch:', !!navMatch);
    }

    // Extract slider / rs-module / banner
    const rsMatch = data.match(/<rs-module-wrap[\s\S]*?<\/rs-module-wrap>/i) || data.match(/<rs-module[\s\S]*?<\/rs-module>/i);
    if (rsMatch) {
      console.log('Found rs-module! Length:', rsMatch[0].length);
      fs.writeFileSync('scripts/live_banner.html', rsMatch[0]);
    }

    // Find all images in the slider
    const imgMatches = [...data.matchAll(/https?:\/\/[^"'\s]+\.(?:png|jpg|jpeg|webp|svg)/gi)].map(m => m[0]);
    fs.writeFileSync('scripts/live_images.json', JSON.stringify([...new Set(imgMatches)], null, 2));
    console.log('Done extracting!');
  });
}).on('error', err => {
  console.error('Error fetching:', err);
});
