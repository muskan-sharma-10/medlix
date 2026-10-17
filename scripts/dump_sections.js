const fs = require('fs');

const html = fs.readFileSync('d:/medlix/scripts/medlix_full.html', 'utf8');

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
    .replace(/\s+/g, ' ')
    .trim();
}

// 1. Header info
const headerData = {
  phone: '+91 92895 00375',
  email: 'info@medlix.in',
  appointmentUrl: 'https://medlix.in/contact-us/',
  logo: 'https://medlix.in/wp-content/uploads/2024/11/logo.png', // let's verify logo URL
  navLinks: [
    { title: 'Home', href: '/' },
    {
      title: 'Corporate',
      href: '/corporate',
      children: [
        { title: 'Company Overview', href: '/corporate#company-overview' },
        { title: 'About Us', href: '#about-us' },
        { title: 'Vision & Mission', href: '#vision-mission' },
        { title: 'Our Core Values', href: '#circle-of-care' },
        { title: 'Why Choose Us', href: '#why-choose' },
        { title: 'Medlix Approach', href: '#approach' }
      ]
    },
    {
      title: 'Medical Specialties',
      href: '#specialties',
      children: [
        { title: 'Cardiac Sciences', href: '#specialties' },
        { title: 'Clinical Diagnostics', href: '#specialties' },
        { title: 'Cosmetic Surgery', href: '#specialties' },
        { title: 'Critical & Intensive Care', href: '#specialties' },
        { title: 'Dental Sciences', href: '#specialties' },
        { title: 'Dermatology', href: '#specialties' },
        { title: 'ENT Surgery', href: '#specialties' },
        { title: 'Emergency Medicine', href: '#specialties' },
        { title: 'Gastro Sciences', href: '#specialties' },
        { title: 'Genetic Sciences', href: '#specialties' },
        { title: 'Gynecology & Obstetrics', href: '#specialties' },
        { title: 'Health Checkup', href: '#specialties' },
        { title: 'Intervention', href: '#specialties' },
        { title: 'Joint Replacement', href: '#specialties' },
        { title: 'Kidney Transplant', href: '#specialties' },
        { title: 'Liver Care', href: '#specialties' },
        { title: 'Nephrology', href: '#specialties' },
        { title: 'Neuro Sciences', href: '#specialties' },
        { title: 'Ophthalmology', href: '#specialties' },
        { title: 'Orthopaedics & Trauma', href: '#specialties' },
        { title: 'Paediatrics', href: '#specialties' },
        { title: 'Pain Clinic', href: '#specialties' },
        { title: 'Physiotherapy & Rehabilitation', href: '#specialties' },
        { title: 'Pulmonology', href: '#specialties' },
        { title: 'Urology', href: '#specialties' },
        { title: 'Arthroscopy and Sportsmedicine', href: '#specialties' },
        { title: 'IVF', href: '#specialties' },
        { title: 'Heart Brain Liver', href: '#specialties' },
        { title: 'Sleep Disorder', href: '#specialties' }
      ]
    },
    { title: 'Transplant Services', href: '#transplant' },
    { title: 'Our Hospitals', href: '#locations' },
    { title: 'Doctors', href: '#doctors' },
    { title: 'Career', href: '#career' },
    { title: 'Blogs', href: '#blogs' },
    { title: 'News', href: '#news' },
    { title: 'Contact Us', href: '#contact' }
  ]
};

// Check actual logo in HTML
const logoMatch = html.match(/<img[^>]+src=["']([^"']*(?:logo|medlix)[^"']*)["'][^>]*>/i);
if (logoMatch) {
  headerData.logo = logoMatch[1];
}

console.log('Detected Logo:', headerData.logo);

// Extract all img tags with their context (parent classes, headings nearby)
const sectionsDump = [];

// Write a detailed regex parser for Elementor widgets
const widgetRegex = /<div class="elementor-widget-container">([\s\S]*?)<\/div>\s*<\/div>/g;

fs.writeFileSync('d:/medlix/scripts/extracted_header.json', JSON.stringify(headerData, null, 2));
console.log('Header data extracted.');
