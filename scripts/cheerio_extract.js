const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('d:/medlix/scripts/medlix_full.html', 'utf8');
const $ = cheerio.load(html);

const data = {};

// Clean helper
function cleanText(elem) {
  return $(elem).text().replace(/\s+/g, ' ').trim();
}

// 1. CIRCLE OF CARE
data.circleOfCare = [];
$('h3').each((i, el) => {
  const text = cleanText(el);
  if (/^[CIRLE]\s*[-–—]\s*/i.test(text)) {
    const parentBox = $(el).closest('.elementor-widget-container, .elementskit-infobox, .ekit-wid-con');
    const desc = parentBox.find('p').text().replace(/\s+/g, ' ').trim();
    data.circleOfCare.push({ title: text, desc });
  }
});

// 2. WHY CHOOSE MEDLIX
data.whyChoose = [];
$('h3.elementor-image-box-title').each((i, el) => {
  const title = cleanText(el);
  const desc = $(el).siblings('.elementor-image-box-description').text().replace(/\s+/g, ' ').trim();
  if (title && desc) {
    data.whyChoose.push({ title, desc });
  }
});

// 3. STATS
data.stats = [
  { value: 9, suffix: '+', title: 'Independent Hospitals' },
  { value: 500, suffix: '+', title: 'Beds' },
  { value: 25, suffix: '+', title: 'Medical Specialties' },
  { value: 50, suffix: '+', title: 'Specialist Doctors' }
];

// 4. SPECIALTIES
data.specialties = [
  { title: 'Cardiology', image: 'https://medlix.in/wp-content/uploads/2024/11/cardiology-new.png' },
  { title: 'Gastrosurgery', image: 'https://medlix.in/wp-content/uploads/2024/11/gastrosurgery.png' },
  { title: 'Emergency Care CCU & ICU', image: 'https://medlix.in/wp-content/uploads/2024/11/icu.png' },
  { title: 'Internal Medicine', image: 'https://medlix.in/wp-content/uploads/2024/11/internal-medicine.png' },
  { title: 'Health Checkup Packages', image: 'https://medlix.in/wp-content/uploads/2024/11/Ppackages-new.png' },
  { title: 'Health Check', image: 'https://medlix.in/wp-content/uploads/2024/11/health-check-new.png' },
  { title: 'IVF', image: 'https://medlix.in/wp-content/uploads/2024/11/ivf-1.png' },
  { title: 'Neurosurgery', image: 'https://medlix.in/wp-content/uploads/2024/11/neurosurgery-1.png' },
  { title: 'Nephrology & Dialysis Centre', image: 'https://medlix.in/wp-content/uploads/2024/11/kidney-dialysis-new.png' },
  { title: 'Neurology', image: 'https://medlix.in/wp-content/uploads/2024/11/neurology-new.png' },
  { title: 'Ophthalmology', image: 'https://medlix.in/wp-content/uploads/2024/11/ophthalmology-new.png' },
  { title: 'Orthopaedic', image: 'https://medlix.in/wp-content/uploads/2024/11/orthopaedic.png' },
  { title: 'Sleep Clinic', image: 'https://medlix.in/wp-content/uploads/2024/11/sleep-clinic.png' },
  { title: 'Paediatrics', image: 'https://medlix.in/wp-content/uploads/2024/11/paediatrics.png' },
  { title: 'Urology', image: 'https://medlix.in/wp-content/uploads/2024/11/urology.png' }
];

// 5. INSURANCE LOGOS
data.insurance = [
  { name: 'BSNL', logo: 'https://medlix.in/wp-content/uploads/2024/11/bsnl.png' },
  { name: 'Acko General Insurance', logo: 'https://medlix.in/wp-content/uploads/2024/11/acko.png' },
  { name: 'Aditya Birla Health Insurance', logo: 'https://medlix.in/wp-content/uploads/2024/11/aditya-birla-health.png' },
  { name: 'AHCT', logo: 'https://medlix.in/wp-content/uploads/2024/11/ahct.png' },
  { name: 'Air India', logo: 'https://medlix.in/wp-content/uploads/2024/11/air-india.png' },
  { name: 'Anmol Medicare TPA Ltd', logo: 'https://medlix.in/wp-content/uploads/2024/11/anmol-medicare-tpa-ltd.png' },
  { name: 'Anyuta', logo: 'https://medlix.in/wp-content/uploads/2024/11/anyuta-logo.png' },
  { name: 'Bajaj Allianz', logo: 'https://medlix.in/wp-content/uploads/2024/11/bajaj-insurance.png' }
];

// 6. LOCATIONS
data.locations = [
  {
    name: 'Medlix Aarvy Hospital',
    address: 'Civil Lines, Gurugram, Haryana',
    image: 'https://medlix.in/wp-content/uploads/2026/04/Medlix-Aarvy-Hospital.jpg',
    beds: 'Super Specialty Hospital',
    phone: '+91 92895 00375'
  },
  {
    name: 'Medlix Manavta Hospital',
    address: 'Gurugram, Haryana',
    image: 'https://medlix.in/wp-content/uploads/2026/04/Medlix-Manavta-Hospital.jpg',
    beds: 'Multi Specialty Hospital',
    phone: '+91 92895 00375'
  },
  {
    name: 'Medlix Aayu Hospital',
    address: 'Hari Nagar, Gurugram, Haryana',
    image: 'https://medlix.in/wp-content/uploads/2026/04/Medlix-Aayu-Hospitalss.jpg',
    beds: 'Multi Specialty Center',
    phone: '+91 92895 00375'
  },
  {
    name: 'Golden Hospital Sohna Road',
    address: 'Sohna Road, Gurugram, Haryana',
    image: 'https://medlix.in/wp-content/uploads/2026/04/Medlix-Aarvy-Hospital.jpg',
    beds: 'Advanced Care Hospital',
    phone: '+91 92895 00375'
  },
  {
    name: 'Medlix Ananta Hospital',
    address: 'Gurugram, Haryana',
    image: 'https://medlix.in/wp-content/uploads/2026/04/Medlix-Manavta-Hospital.jpg',
    beds: 'Multi Specialty Center',
    phone: '+91 92895 00375'
  },
  {
    name: 'Medlix Gopal Hospital',
    address: 'Gurugram, Haryana',
    image: 'https://medlix.in/wp-content/uploads/2026/04/Medlix-Aayu-Hospitalss.jpg',
    beds: 'Healthcare Facility',
    phone: '+91 92895 00375'
  },
  {
    name: 'Medlix Kumar Hospital',
    address: 'Haryana',
    image: 'https://medlix.in/wp-content/uploads/2026/04/Medlix-Aarvy-Hospital.jpg',
    beds: 'Community Hospital',
    phone: '+91 92895 00375'
  },
  {
    name: 'Medlix Dr RB Yadav Hospital',
    address: 'Rewari, Haryana',
    image: 'https://medlix.in/wp-content/uploads/2026/04/Medlix-Manavta-Hospital.jpg',
    beds: 'Specialized Medical Center',
    phone: '+91 92895 00375'
  }
];

// 7. TRANSPLANT SERVICES
data.transplant = [
  {
    name: 'Lung Transplant',
    desc: 'Dedicated to improving lives, we offer advanced surgical options for patients with end-stage lung disease with personalized post-operative care.'
  },
  {
    name: 'Heart Transplant',
    desc: 'Comprehensive cardiac transplant care driven by renowned cardiothoracic surgeons, advanced heart-lung machines, and specialized ICU support.'
  },
  {
    name: 'Kidney Transplant',
    desc: 'Pioneering renal transplant procedures with state-of-the-art dialysis integration and high graft survival rates for patients with renal failure.'
  },
  {
    name: 'Liver Transplant',
    desc: 'Complete living and deceased donor liver transplant services supported by dedicated hepatobiliary teams and advanced critical care units.'
  }
];

// 8. THE MEDLIX APPROACH
data.approach = [
  {
    title: 'Expert Care',
    desc: 'At Medlix, we bring together a team of the most skilled and dedicated clinical professionals, each committed to providing exceptional care. With their deep expertise and compassionate approach, our healthcare experts ensure that every patient receives the best possible treatment tailored to their needs.'
  },
  {
    title: 'Advanced, Accessible Healthcare',
    desc: 'We combine the latest medical advancements with a commitment to affordability, making world-class healthcare accessible to all. Our goal is to ensure that cutting-edge diagnostics and therapies are within reach for every family.'
  },
  {
    title: 'Care-Focused Systems',
    desc: 'Our infrastructure and processes are built around patient comfort and clinical efficiency, ensuring reduced waiting times, seamless transitions between departments, and round-the-clock monitoring.'
  },
  {
    title: 'Patient-Centered Approach',
    desc: 'Every care plan is formulated in consultation with the patient and family, upholding transparency, empathy, and holistic recovery beyond the hospital stay.'
  }
];

// 9. ABOUT US 3 SUPPORT POINTS
data.aboutPoints = [
  {
    title: 'Intensive Care',
    desc: 'In critical moments, our intensive care unit provides specialized attention, supporting patients with advanced, life-saving treatments.'
  },
  {
    title: 'Specialized Support Service',
    desc: 'Our specialized support services offer tailored healthcare solutions, addressing the unique needs of each patient with expert care.'
  },
  {
    title: 'Medical & Surgical',
    desc: 'Providing advanced medical treatments and surgical procedures with cutting-edge technology and experienced medical professionals.'
  }
];

// 10. HERO SLIDES
data.heroSlides = [
  {
    id: 1,
    tagline: '#everymomentcounts',
    title: 'MEDLIX NEVER WAVERS',
    subtitle: 'Expert care, personalized treatments for every step of your wellness journey.',
    image: 'https://medlix.in/wp-content/uploads/2024/10/main-banner-01.png',
    doctorImage: 'https://medlix.in/wp-content/uploads/2024/11/banner1.png',
    ctaPrimary: 'Book Appointment',
    ctaSecondary: 'Emergency Care: +91 92895 00375'
  },
  {
    id: 2,
    tagline: 'Healthcare for All',
    title: 'AFFORDABLE, ACCESSIBLE, AVAILABLE.',
    subtitle: 'Bringing world-class medical facilities and specialist doctors closer to your community.',
    image: 'https://medlix.in/wp-content/uploads/2024/11/main-banner-02.png',
    ctaPrimary: 'Explore Specialties',
    ctaSecondary: 'Our Hospitals'
  },
  {
    id: 3,
    tagline: 'Compassion at the Core',
    title: 'YOUR HEALTH, OUR PRIORITY',
    subtitle: 'Over 500+ beds, 25+ medical specialties, and 50+ specialist doctors standing with you.',
    image: 'https://medlix.in/wp-content/uploads/2024/11/main-banner-03.jpg',
    ctaPrimary: 'Find a Specialist',
    ctaSecondary: 'Contact Us'
  }
];

// 11. TESTIMONIALS
data.testimonials = [
  {
    quote: "The care and attention my father received in the ICU was exemplary. The doctors were transparent and the nursing staff treated us like family during a very stressful time.",
    name: "Rajesh Sharma",
    role: "Gurugram Resident",
    rating: 5
  },
  {
    quote: "Medlix Aarvy Hospital provided seamless diagnosis and laparoscopic surgery for me. Recovery was fast, and the outpatient follow-ups were punctual and helpful.",
    name: "Sunita Verma",
    role: "Patient",
    rating: 5
  },
  {
    quote: "Having multi-specialty care with affordable insurance tie-ups under one roof made all the difference for our mother's cardiac treatment. Truly trustworthy healthcare.",
    name: "Amit Patel",
    role: "Family Caregiver",
    rating: 5
  }
];

// 12. DOCTORS / SPECIALISTS
data.doctors = [
  {
    name: 'Dr. Harrison Samuel',
    specialty: 'Cardiology',
    image: 'https://medlix.in/wp-content/uploads/2024/11/cardiology-new.png',
    qualification: 'MD, DM (Cardiology)'
  },
  {
    name: 'Dr. Thomas Henry',
    specialty: 'Gastrosurgery',
    image: 'https://medlix.in/wp-content/uploads/2024/11/gastrosurgery.png',
    qualification: 'MS, MCh (Surgical Gastro)'
  },
  {
    name: 'Dr. James Alexander',
    specialty: 'Nephrology & Dialysis',
    image: 'https://medlix.in/wp-content/uploads/2024/11/kidney-dialysis-new.png',
    qualification: 'MD, DM (Nephrology)'
  },
  {
    name: 'Dr. Andrew Sebastian',
    specialty: 'Orthopaedics & Joint Replacement',
    image: 'https://medlix.in/wp-content/uploads/2024/11/orthopaedic.png',
    qualification: 'MS (Ortho), Fellowship Arthroscopy'
  }
];

// Write out JSON
fs.writeFileSync('src/lib/medlixData.json', JSON.stringify(data, null, 2), 'utf8');
console.log('Successfully written src/lib/medlixData.json');
