const https = require('https');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../public/images/about');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

const images = [
  { url: 'https://medlix.in/wp-content/uploads/2024/11/video-popup-bg.png', name: 'video-popup-bg.png' },
  { url: 'https://medlix.in/wp-content/uploads/2024/11/6-infograhic-bg.png', name: '6-infograhic-bg.png' },
  { url: 'https://medlix.in/wp-content/uploads/2024/11/mind-map.png', name: 'mind-map.png' },
  { url: 'https://medlix.in/wp-content/uploads/2024/11/medical-team.png', name: 'medical-team.png' },
  { url: 'https://medlix.in/wp-content/uploads/2024/11/patient.png', name: 'patient.png' },
  { url: 'https://medlix.in/wp-content/uploads/2024/11/cut.png', name: 'cut.png' },
  { url: 'https://medlix.in/wp-content/uploads/2024/11/omnichannel.png', name: 'omnichannel.png' },
  { url: 'https://medlix.in/wp-content/uploads/2024/11/handshake.png', name: 'handshake.png' },
  { url: 'https://medlix.in/wp-content/uploads/2024/11/expert-care.jpg', name: 'expert-care.jpg' },
  { url: 'https://medlix.in/wp-content/uploads/2024/11/advanced-accessible-healthcare.jpg', name: 'advanced-accessible-healthcare.jpg' },
  { url: 'https://medlix.in/wp-content/uploads/2024/11/care-focused-systems.jpg', name: 'care-focused-systems.jpg' },
  { url: 'https://medlix.in/wp-content/uploads/2024/11/patient-centered-approach.jpg', name: 'patient-centered-approach.jpg' }
];

function download(item) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(dir, item.name);
    const file = fs.createWriteStream(filePath);
    https.get(item.url, res => {
      if (res.statusCode === 200) {
        res.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log('Downloaded:', item.name);
          resolve();
        });
      } else {
        console.error('Failed to download:', item.name, res.statusCode);
        file.close();
        resolve();
      }
    }).on('error', err => {
      console.error('Error downloading:', item.name, err.message);
      resolve();
    });
  });
}

async function run() {
  for (const img of images) {
    await download(img);
  }
  console.log('All downloads completed!');
}

run();
