const fs = require('fs');
const path = require('path');
const https = require('https');

const assets = [
  { url: 'https://medlix.in/wp-content/uploads/2019/08/medlix-hospital.png', dest: 'public/images/logo.png' },
  { url: 'https://medlix.in/wp-content/uploads/elementor/thumbs/logo-2-qve1yet41izqg573wmgwe0a1e0l2y8fdrx70n2bcuw.png', dest: 'public/images/logo-badge.png' },
  { url: 'https://medlix.in/wp-content/uploads/2024/10/main-banner-01.png', dest: 'public/images/banner1.png' },
  { url: 'https://medlix.in/wp-content/uploads/2024/11/main-banner-02.png', dest: 'public/images/banner2.png' },
  { url: 'https://medlix.in/wp-content/uploads/2024/11/main-banner-03.jpg', dest: 'public/images/banner3.jpg' },
  { url: 'https://medlix.in/wp-content/uploads/2019/08/image-3.png', dest: 'public/images/about-doctor.png' },
  { url: 'https://medlix.in/wp-content/uploads/2026/04/Medlix-Aarvy-Hospital.jpg', dest: 'public/images/aarvy.jpg' },
  { url: 'https://medlix.in/wp-content/uploads/2026/04/Medlix-Manavta-Hospital.jpg', dest: 'public/images/manavta.jpg' },
  { url: 'https://medlix.in/wp-content/uploads/2026/04/Medlix-Aayu-Hospitalss.jpg', dest: 'public/images/aayu.jpg' },
  { url: 'https://medlix.in/wp-content/uploads/2024/11/cardiology-new.png', dest: 'public/images/specialties/cardiology.png' },
  { url: 'https://medlix.in/wp-content/uploads/2024/11/gastrosurgery.png', dest: 'public/images/specialties/gastrosurgery.png' },
  { url: 'https://medlix.in/wp-content/uploads/2024/11/icu.png', dest: 'public/images/specialties/icu.png' },
  { url: 'https://medlix.in/wp-content/uploads/2024/11/internal-medicine.png', dest: 'public/images/specialties/internal-medicine.png' },
  { url: 'https://medlix.in/wp-content/uploads/2024/11/Ppackages-new.png', dest: 'public/images/specialties/packages.png' },
  { url: 'https://medlix.in/wp-content/uploads/2024/11/health-check-new.png', dest: 'public/images/specialties/health-check.png' },
  { url: 'https://medlix.in/wp-content/uploads/2024/11/ivf-1.png', dest: 'public/images/specialties/ivf.png' },
  { url: 'https://medlix.in/wp-content/uploads/2024/11/neurosurgery-1.png', dest: 'public/images/specialties/neurosurgery.png' },
  { url: 'https://medlix.in/wp-content/uploads/2024/11/kidney-dialysis-new.png', dest: 'public/images/specialties/dialysis.png' },
  { url: 'https://medlix.in/wp-content/uploads/2024/11/neurology-new.png', dest: 'public/images/specialties/neurology.png' },
  { url: 'https://medlix.in/wp-content/uploads/2024/11/ophthalmology-new.png', dest: 'public/images/specialties/ophthalmology.png' },
  { url: 'https://medlix.in/wp-content/uploads/2024/11/orthopaedic.png', dest: 'public/images/specialties/orthopaedic.png' },
  { url: 'https://medlix.in/wp-content/uploads/2024/11/sleep-clinic.png', dest: 'public/images/specialties/sleep-clinic.png' },
  { url: 'https://medlix.in/wp-content/uploads/2024/11/paediatrics.png', dest: 'public/images/specialties/paediatrics.png' },
  { url: 'https://medlix.in/wp-content/uploads/2024/11/urology.png', dest: 'public/images/specialties/urology.png' },
  { url: 'https://medlix.in/wp-content/uploads/2024/11/bsnl.png', dest: 'public/images/insurance/bsnl.png' },
  { url: 'https://medlix.in/wp-content/uploads/2024/11/acko.png', dest: 'public/images/insurance/acko.png' },
  { url: 'https://medlix.in/wp-content/uploads/2024/11/aditya-birla-health.png', dest: 'public/images/insurance/aditya-birla.png' },
  { url: 'https://medlix.in/wp-content/uploads/2024/11/ahct.png', dest: 'public/images/insurance/ahct.png' },
  { url: 'https://medlix.in/wp-content/uploads/2024/11/air-india.png', dest: 'public/images/insurance/air-india.png' },
  { url: 'https://medlix.in/wp-content/uploads/2024/11/anmol-medicare-tpa-ltd.png', dest: 'public/images/insurance/anmol.png' },
  { url: 'https://medlix.in/wp-content/uploads/2024/11/anyuta-logo.png', dest: 'public/images/insurance/anyuta.png' },
  { url: 'https://medlix.in/wp-content/uploads/2024/11/bajaj-insurance.png', dest: 'public/images/insurance/bajaj.png' },
  { url: 'https://medlix.in/wp-content/uploads/2024/11/central-government-health-scheme.png', dest: 'public/images/insurance/cghs.png' },
  { url: 'https://medlix.in/wp-content/uploads/2024/11/ministry-of-defence-india.png', dest: 'public/images/insurance/echs.png' },
  { url: 'https://medlix.in/wp-content/uploads/2024/11/ministry-of-home-affairs-india.png', dest: 'public/images/insurance/mha.png' },
  { url: 'https://medlix.in/wp-content/uploads/2024/11/nhai.png', dest: 'public/images/insurance/nhai.png' },
  { url: 'https://medlix.in/wp-content/uploads/2024/11/delhi-police.png', dest: 'public/images/insurance/delhi-police.png' },
  { url: 'https://medlix.in/wp-content/uploads/2024/11/rakshatpa.png', dest: 'public/images/insurance/raksha.png' },
  { url: 'https://medlix.in/wp-content/uploads/2024/11/united-india.png', dest: 'public/images/insurance/united-india.png' },
  { url: 'https://medlix.in/wp-content/uploads/2024/11/vision-tpa.png', dest: 'public/images/insurance/vision-tpa.png' },
  { url: 'https://medlix.in/wp-content/uploads/2024/11/universal-sompo.png', dest: 'public/images/insurance/universal-sompo.png' },
  { url: 'https://medlix.in/wp-content/uploads/2024/11/vipul-medcorp-tpa.png', dest: 'public/images/insurance/vipul.png' },
  { url: 'https://medlix.in/wp-content/uploads/2024/11/vidal-health.png', dest: 'public/images/insurance/vidal.png' },
  { url: 'https://medlix.in/wp-content/uploads/2024/11/united-health-care-parekh.png', dest: 'public/images/insurance/united-healthcare.png' },
  { url: 'https://medlix.in/wp-content/uploads/2024/11/TATA-AIG.png', dest: 'public/images/insurance/tata-aig.png' },
  { url: 'https://medlix.in/wp-content/uploads/2019/09/doctor-02.jpg', dest: 'public/images/doctors/doctor-02.jpg' },
  { url: 'https://medlix.in/wp-content/themes/medizco/assets/images/banner/page-banner-img.jpg', dest: 'public/images/page-banner.jpg' }
];

function download(url, dest) {
  return new Promise((resolve) => {
    const dir = path.dirname(dest);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, dest).then(resolve);
      }
      if (res.statusCode !== 200) {
        console.warn(`[WARN] HTTP ${res.statusCode} for ${url}`);
        return resolve(false);
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve(true);
      });
    }).on('error', (err) => {
      console.warn(`[ERROR] ${url}: ${err.message}`);
      resolve(false);
    });
  });
}

async function start() {
  console.log('Downloading all core website assets from medlix.in...');
  let count = 0;
  for (const item of assets) {
    const ok = await download(item.url, item.dest);
    if (ok) count++;
  }
  console.log(`Successfully downloaded ${count} of ${assets.length} assets.`);
}

start();
