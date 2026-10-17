const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  { url: 'https://medlix.in/wp-content/uploads/2024/10/main-banner-01.png', file: 'main-banner-01.png' },
  { url: 'https://medlix.in/wp-content/uploads/2024/11/main-banner-02.png', file: 'main-banner-02.png' },
  { url: 'https://medlix.in/wp-content/uploads/2024/11/main-banner-03.jpg', file: 'main-banner-03.jpg' },
  { url: 'https://medlix.in/wp-content/uploads/2024/11/banner1.png', file: 'banner1.png' },
  { url: 'https://medlix.in/wp-content/uploads/2024/11/banner2.png', file: 'banner2.png' },
  { url: 'https://medlix.in/wp-content/uploads/2024/11/banner3.png', file: 'banner3.png' },
  { url: 'https://medlix.in/wp-content/uploads/2019/08/medlix-hospital.png', file: 'medlix-hospital.png' }
];

async function download(item) {
  const dest = path.join(__dirname, '..', 'public', 'images', item.file);
  return new Promise((resolve) => {
    const fileStream = fs.createWriteStream(dest);
    https.get(item.url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode === 200) {
        res.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          const stats = fs.statSync(dest);
          console.log(`Downloaded ${item.file} (${stats.size} bytes)`);
          resolve(true);
        });
      } else {
        console.log(`Failed to download ${item.url}: status ${res.statusCode}`);
        fileStream.close();
        resolve(false);
      }
    }).on('error', (err) => {
      console.log(`Error on ${item.url}:`, err.message);
      resolve(false);
    });
  });
}

(async () => {
  for (const item of images) {
    await download(item);
  }
})();
