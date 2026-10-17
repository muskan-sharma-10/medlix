'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ArrowUp,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  ChevronRight,
  ShieldCheck,
  Calendar
} from 'lucide-react';

interface FooterProps {
  onOpenAppointment?: () => void;
}

export default function Footer({ onOpenAppointment }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'About Us', href: '/about-us' },
    { name: 'Corporate', href: '/corporate' },
    { name: 'Our Specialties', href: '/department' },
    { name: 'Transplant Services', href: '/transplant-services' },
    { name: 'Our Doctors', href: '/doctors' },
    { name: 'Insurance Tie-Ups', href: '/insurances' },
    { name: 'Career', href: '/career' },
    { name: 'Contact Us', href: '/contact-us' }
  ];

  const hospitals = [
    { name: 'Medlix Aayu Hospital, Hari Nagar Gurugram', href: '/medlix-aayu-hospital' },
    { name: 'Medlix Aarvy Hospital, Civil Lines, Gurugram', href: '/medlix-aarvy-hospital' },
    { name: 'Medlix Ananta Hospital, Gurugram', href: '/medlix-ananta-hospital' },
    { name: 'Medlix Golden Hospital, Palwal', href: '/golden-hospital-sohna-road' },
    { name: 'Medlix Dr RB Yadav Hospital, Rewari', href: '/medlix-dr-rb-yadav-hospital' },
    { name: 'Medlix Gopal Hospital, Chhata , Uttar Pradesh', href: '/medlix-gopal-hospital' },
    { name: 'Medlix Manavta Hospital, Ballabgarh, Faridabad', href: '/medlix-manavta-hospital' },
    { name: 'Medlix Kumar Hospital, Greater Noida', href: '/medlix-kumar-hospital' }
  ];

  const timings = [
    { day: 'Monday :', time: '08.00 AM - 10.00 PM' },
    { day: 'Tuesday :', time: '08.00 AM - 10.00 PM' },
    { day: 'Wednesday :', time: '08.00 AM - 10.00 PM' },
    { day: 'Thursday :', time: '08.00 AM - 10.00 PM' },
    { day: 'Friday :', time: '09.00 AM - 07.00 PM', highlight: true },
    { day: 'Saturday :', time: '10.00 AM - 05.00 PM' },
    { day: 'Sunday :', time: '10.00 AM - 05.00 PM' }
  ];

  return (
    <footer className="w-full flex flex-col overflow-hidden">
      {/* 
        1. Top Emergency / Reach Out Bar 
        Matching exact live medlix.in section (elementor-element-1675e85) 
      */}
      <div className="w-full border-t border-slate-200">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left: Reach Out to Us */}
          <div 
            className="relative bg-cover bg-center py-10 px-8 sm:px-14 flex items-center gap-6 overflow-hidden group"
            style={{ backgroundImage: "url('/images/emergency_num_bg.jpg')" }}
          >
            <div className="absolute inset-0 bg-[#0A5F6B]/90 backdrop-blur-[1px] group-hover:bg-[#0A5F6B]/85 transition-colors" />

            <div className="relative z-10 w-16 h-16 rounded-2xl bg-[#07515C] flex items-center justify-center shrink-0 shadow-lg text-white group-hover:scale-105 transition-transform">
              <Mail className="w-8 h-8 text-white" />
            </div>

            <div className="relative z-10 text-white">
              <div className="text-xs font-bold uppercase tracking-wider text-[#C9F5F3] font-exo">
                Reach Out to Us
              </div>
              <a 
                href="mailto:care@medlix.in" 
                className="text-2xl sm:text-3xl font-extrabold font-exo hover:text-[#C9F5F3] transition-colors block text-white mt-0.5"
              >
                care@medlix.in
              </a>
              <div className="text-xs text-[#DFF8F8] font-roboto mt-0.5">24/7 Patient Coordination &amp; Queries</div>
            </div>
          </div>

          {/* Right: Emergency Medical Care */}
          <div 
            className="relative bg-cover bg-center py-10 px-8 sm:px-14 flex items-center gap-6 overflow-hidden group"
            style={{ backgroundImage: "url('/images/subscribe-bg-2.jpg')" }}
          >
            <div className="absolute inset-0 bg-[#07515C]/95 backdrop-blur-[1px] group-hover:bg-[#07515C]/90 transition-colors" />

            <div className="relative z-10 w-16 h-16 rounded-2xl bg-[#0A5F6B] flex items-center justify-center shrink-0 shadow-lg text-white group-hover:scale-105 transition-transform">
              <Phone className="w-8 h-8 text-white" />
            </div>

            <div className="relative z-10 text-white">
              <div className="text-xs font-bold uppercase tracking-wider text-[#C9F5F3] font-exo">
                Emergency Medical Care
              </div>
              <a 
                href="tel:+919220143473" 
                className="text-2xl sm:text-3xl font-extrabold font-exo hover:text-[#C9F5F3] transition-colors block text-white mt-0.5"
              >
                +91-9220143473
              </a>
              <div className="text-xs text-[#DFF8F8] font-roboto mt-0.5">Trauma Response, CCU &amp; Ambulance 24x7</div>
            </div>
          </div>
        </div>
      </div>

      {/* 
        2. Main Footer Body 
        Matching exact live medlix.in elementor-element-16a2:
        background-color: #f8fafc;
        background-image: url("/images/footer-bg.jpg");
        background-attachment: fixed;
        overlay: #f7f9fb at 0.90
        headings: #222222 font-exo 20px
        text: #313131 font-roboto
      */}
      <div className="relative bg-[#07515C] text-[#FDFEFE] overflow-hidden py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8">
            {/* Column 1: Brand & Contact Info (4 cols) */}
            <div className="md:col-span-1 lg:col-span-4 space-y-5">
              <Link href="/" className="inline-block">
                <div className="relative h-14 w-56">
                  <Image
                    src="/images/medlix-hospital-white.svg"
                    alt="Medlix Hospital"
                    fill
                    className="object-contain object-left"
                    priority
                  />
                </div>
              </Link>

              <p className="text-sm text-[#C9F5F3] leading-relaxed font-roboto max-w-sm">
                We strive to improve healthcare by focusing on compassion and innovation. Our commitment is to empower everyone with the knowledge and resources they need, nurturing a healthier future for our community.
              </p>

              {/* Contact list */}
              <div className="space-y-3 pt-1 text-sm text-[#FDFEFE] font-roboto">
                <div className="flex items-start gap-3 group">
                  <div className="w-8 h-8 rounded-lg bg-[#0A5F6B] text-[#C9F5F3] flex items-center justify-center shrink-0 mt-0.5 border border-[#C4DFDF]/30">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="leading-snug text-xs sm:text-sm">
                    <strong className="text-white block font-exo">Medlix Hospital</strong>
                    530/18 Civil Lines, Opp Nehru Stadium, Near Mor Chowk Gurugram, Haryana
                  </span>
                </div>

                <div className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-lg bg-[#0A5F6B] text-[#C9F5F3] flex items-center justify-center shrink-0 border border-[#C4DFDF]/30">
                    <Phone className="w-4 h-4" />
                  </div>
                  <a 
                    href="tel:+919220143473" 
                    className="font-bold text-white hover:text-[#C9F5F3] transition-colors font-exo text-sm"
                  >
                    +91-9220143473
                  </a>
                </div>

                <div className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-lg bg-[#0A5F6B] text-[#C9F5F3] flex items-center justify-center shrink-0 border border-[#C4DFDF]/30">
                    <Mail className="w-4 h-4" />
                  </div>
                  <a 
                    href="mailto:care@medlix.in" 
                    className="font-medium text-white hover:text-[#C9F5F3] transition-colors text-sm"
                  >
                    care@medlix.in
                  </a>
                </div>
              </div>

              {/* Accreditation Badges */}
              <div className="pt-2 border-t border-[#C4DFDF]/30">
                <span className="text-[11px] font-bold text-[#C9F5F3] uppercase tracking-wider font-exo block mb-2">Quality & Clinical Accreditations</span>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-[#0A5F6B] text-[#FDFEFE] border border-[#C4DFDF]/40 font-exo">NABH Accredited</span>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-[#0A5F6B] text-[#FDFEFE] border border-[#C4DFDF]/40 font-exo">NABL Certified Labs</span>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-[#0A5F6B] text-[#FDFEFE] border border-[#C4DFDF]/40 font-exo">JCI Quality Standard</span>
                </div>
              </div>

              {/* Book Appointment CTA */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={onOpenAppointment}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0A5F6B] hover:bg-[#07515C] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md hover:shadow-lg transition-all font-exo border border-[#C4DFDF]/30"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Appointment Online</span>
                </button>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="md:col-span-1 lg:col-span-2 space-y-4">
              <div className="space-y-1">
                <h4 className="text-xl font-bold text-white font-exo">
                  Quick Links
                </h4>
                <div className="w-12 h-1 rounded-full bg-[#C9F5F3]" />
              </div>

              <div className="space-y-2 pt-2 text-sm text-[#FDFEFE]">
                {quickLinks.map((item, i) => (
                  <Link
                    key={i}
                    href={item.href}
                    className="flex items-center gap-1.5 py-1 text-[#FDFEFE] hover:text-[#C9F5F3] hover:translate-x-1 transition-all group font-roboto text-[13px] sm:text-sm"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#C9F5F3] group-hover:text-white shrink-0 transition-colors" />
                    <span className="group-hover:font-medium">{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Column 3: Our Hospitals */}
            <div className="md:col-span-1 lg:col-span-3 space-y-4">
              <div className="space-y-1">
                <h4 className="text-xl font-bold text-white font-exo">
                  Our Hospitals
                </h4>
                <div className="w-12 h-1 rounded-full bg-[#C9F5F3]" />
              </div>

              <div className="space-y-2 pt-2 text-sm text-[#FDFEFE]">
                {hospitals.map((h, i) => (
                  <Link
                    key={i}
                    href={h.href}
                    className="flex items-center gap-1.5 py-1 text-[#FDFEFE] hover:text-[#C9F5F3] hover:translate-x-1 transition-all group font-roboto text-[13px] sm:text-sm"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#C9F5F3] group-hover:text-white shrink-0 transition-colors" />
                    <span className="group-hover:font-medium leading-tight">{h.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Column 4: Outpatient Timings */}
            <div className="md:col-span-1 lg:col-span-3 space-y-4">
              <div className="space-y-1">
                <h4 className="text-xl font-bold text-white font-exo">
                  Outpatient timings
                </h4>
                <div className="w-12 h-1 rounded-full bg-[#C9F5F3]" />
              </div>

              <div className="bg-[#0A5F6B]/60 rounded-2xl p-4 border border-[#C4DFDF]/30 shadow-xs space-y-2.5 pt-3">
                {timings.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between text-xs pb-1.5 border-b border-[#C4DFDF]/20 last:border-b-0 last:pb-0"
                  >
                    <span className="font-semibold text-[#C9F5F3] font-roboto">{item.day}</span>
                    <span className={`font-exo font-bold ${
                      item.highlight ? 'text-white' : 'text-[#C9F5F3]'
                    }`}>
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>

              <div className="p-3.5 rounded-xl bg-[#0A5F6B] border border-[#C4DFDF]/40 flex items-center justify-between text-xs">
                <span className="flex items-center gap-1.5 font-bold text-white font-exo">
                  <ShieldCheck className="w-4 h-4 text-[#C9F5F3]" />
                  Emergency &amp; Trauma
                </span>
                <span className="bg-[#C9F5F3] text-[#0A5F6B] px-2 py-0.5 rounded-full font-bold text-[10px] uppercase font-exo">
                  24/7 Active
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div 
        className="w-full text-[#FDFEFE] py-3.5 bg-[#0A5F6B] border-t border-[#C4DFDF]/30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm font-medium">
          <div className="text-[#C9F5F3]">
            © 2024, <strong className="font-semibold text-white">Medlix Health Solutions Pvt. Ltd.</strong> . All Rights Reserved.
          </div>

          <div className="flex items-center gap-3">
            <a 
              href="https://www.facebook.com/profile.php?id=61566764657722" 
              target="_blank" 
              rel="noreferrer" 
              aria-label="Facebook"
              className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/30 flex items-center justify-center transition-colors text-white"
            >
              <Facebook className="w-4 h-4" />
            </a>

            <a 
              href="https://www.instagram.com/medlix.hospitals?igsh=c3J1anBieDA0ZWhr" 
              target="_blank" 
              rel="noreferrer" 
              aria-label="Instagram"
              className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/30 flex items-center justify-center transition-colors text-white"
            >
              <Instagram className="w-4 h-4" />
            </a>

            <a 
              href="https://youtube.com/@medlixhospital?si=oveelObY2RyR1UXy" 
              target="_blank" 
              rel="noreferrer" 
              aria-label="YouTube"
              className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/30 flex items-center justify-center transition-colors text-white"
            >
              <Youtube className="w-4 h-4" />
            </a>

            <a 
              href="https://www.linkedin.com/company/medlix-health-solution-pvt-ltd/" 
              target="_blank" 
              rel="noreferrer" 
              aria-label="LinkedIn"
              className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/30 flex items-center justify-center transition-colors text-white"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            {/* Scroll to Top */}
            <button
              onClick={scrollToTop}
              className="ml-2 w-8 h-8 rounded-full bg-white/20 hover:bg-white/35 flex items-center justify-center transition-colors text-white shadow-sm"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}