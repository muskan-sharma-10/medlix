'use client';

import React from 'react';
import Link from 'next/link';
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
  Calendar,
  CheckCircle2
} from 'lucide-react';
import MedlixLogo from '@/components/ui/medlix-logo';

interface FooterProps {
  onOpenAppointment?: () => void;
}

export default function Footer({ onOpenAppointment }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'About Us', href: '/about-us' },
    { name: 'Corporate Overview', href: '/about-us#overview' },
    { name: 'Our Specialties', href: '/department' },
    { name: 'Transplant Services', href: '/department' },
    { name: 'Our Doctors', href: '/doctors' },
    { name: 'Insurance Tie-Ups & TPAs', href: '/insurances' },
    { name: 'Pharmacy & Medicines', href: '/medicines' },
    { name: 'Contact Us', href: '/contact-us' }
  ];

  const hospitals = [
    { name: 'Medlix Aarvy Hospital, Gurugram', href: '/medlix-aarvy-hospital' },
    { name: 'Medlix Aayu Hospital, Hari Nagar', href: '/medlix-aayu-hospital' },
    { name: 'Medlix Ananta Hospital, Manesar', href: '/medlix-ananta-hospital' },
    { name: 'Golden Hospital, Sohna Road', href: '/golden-hospital-sohna-road' },
    { name: 'Medlix Dr RB Yadav Hospital, Rewari', href: '/medlix-dr-rb-yadav-hospital' },
    { name: 'Medlix Gopal Hospital, Mathura', href: '/medlix-gopal-hospital' },
    { name: 'Medlix Manavta Hospital, Faridabad', href: '/medlix-manavta-hospital' },
    { name: 'Medlix Kumar Hospital, Greater Noida', href: '/medlix-kumar-hospital' }
  ];

  const timings = [
    { day: 'Monday - Thursday', time: '08:00 AM - 10:00 PM' },
    { day: 'Friday', time: '09:00 AM - 07:00 PM', highlight: true },
    { day: 'Saturday & Sunday', time: '10:00 AM - 05:00 PM' }
  ];

  return (
    <footer className="w-full flex flex-col overflow-hidden font-sans">
      {/* 1. Top Emergency & Helpline Reach-Out Banner */}
      <div className="w-full border-t border-slate-200">
        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Left: Reach Out via Email */}
          <div 
            className="relative bg-cover bg-center py-8 sm:py-12 lg:py-14 px-5 sm:px-12 lg:px-16 flex items-center gap-4 sm:gap-6 overflow-hidden group bg-[#0A5F6B]"
            style={{ backgroundImage: "url('/images/emergency_num_bg.jpg')" }}
          >
            <div className="absolute inset-0 bg-[#0A2540]/90 backdrop-blur-[1px] group-hover:bg-[#0A2540]/85 transition-colors" />

            <div className="relative z-10 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0 shadow-lg text-white group-hover:scale-105 transition-transform">
              <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-teal-300" />
            </div>

            <div className="relative z-10 text-white">
              <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-teal-300">
                Reach Out to Us
              </div>
              <a 
                href="mailto:care@medlix.in" 
                className="text-xl sm:text-3xl lg:text-4xl font-extrabold hover:text-teal-200 transition-colors block text-white mt-0.5 sm:mt-1 tracking-tight"
              >
                care@medlix.in
              </a>
              <div className="text-xs sm:text-sm text-slate-300 mt-0.5 sm:mt-1">24/7 Patient Coordination &amp; Query Desk</div>
            </div>
          </div>

          {/* Right: 24/7 Emergency Medical Response */}
          <div 
            className="relative bg-cover bg-center py-8 sm:py-12 lg:py-14 px-5 sm:px-12 lg:px-16 flex items-center gap-4 sm:gap-6 overflow-hidden group bg-[#0A2540]"
            style={{ backgroundImage: "url('/images/subscribe-bg-2.jpg')" }}
          >
            <div className="absolute inset-0 bg-rose-950/90 backdrop-blur-[1px] group-hover:bg-rose-950/85 transition-colors" />

            <div className="relative z-10 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-rose-600 flex items-center justify-center shrink-0 shadow-lg text-white group-hover:scale-105 transition-transform">
              <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>

            <div className="relative z-10 text-white">
              <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-rose-200">
                Emergency Medical Response
              </div>
              <a 
                href="tel:+919220143473" 
                className="text-xl sm:text-3xl lg:text-4xl font-extrabold hover:text-rose-200 transition-colors block text-white mt-0.5 sm:mt-1 tracking-tight"
              >
                +91-9220143473
              </a>
              <div className="text-xs sm:text-sm text-rose-200/80 mt-0.5 sm:mt-1">Trauma Care, Cardiac CCU &amp; Ambulance 24x7</div>
            </div>
          </div>

        </div>
      </div>

      {/* 2. Main Deep Navy Footer Body */}
      <div className="relative bg-[#0A192F] text-slate-300 overflow-hidden py-12 sm:py-16 lg:py-24 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10">
            
            {/* Column 1: Brand & Contact Info (4 cols) */}
            <div className="md:col-span-1 lg:col-span-4 space-y-6">
              <Link href="/" className="inline-block group focus:outline-none">
                <MedlixLogo variant="dark" className="transition-transform duration-200 group-hover:scale-[1.02]" />
              </Link>

              <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
                Next-gen multispecialty hospital chain founded by Dr. Yogesh Sharma. Delivering patient-centered clinical excellence, modern robotic surgery, and compassionate healing across NCR.
              </p>

              {/* Verified Contact Details */}
              <div className="space-y-3 pt-1 text-sm text-slate-200">
                <div className="flex items-start gap-3 group">
                  <div className="w-8 h-8 rounded-lg bg-white/10 text-teal-300 flex items-center justify-center shrink-0 mt-0.5 border border-white/15">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="leading-snug text-xs sm:text-sm">
                    <strong className="text-white block font-bold">Medlix Hospital Headquarters</strong>
                    530/18 Civil Lines, Opp Nehru Stadium, Near Mor Chowk, Gurugram, Haryana
                  </span>
                </div>

                <div className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-lg bg-white/10 text-teal-300 flex items-center justify-center shrink-0 border border-white/15">
                    <Phone className="w-4 h-4" />
                  </div>
                  <a 
                    href="tel:+919220143473" 
                    className="font-bold text-white hover:text-teal-300 transition-colors text-sm"
                  >
                    +91-9220143473
                  </a>
                </div>

                <div className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-lg bg-white/10 text-teal-300 flex items-center justify-center shrink-0 border border-white/15">
                    <Mail className="w-4 h-4" />
                  </div>
                  <a 
                    href="mailto:care@medlix.in" 
                    className="font-medium text-white hover:text-teal-300 transition-colors text-sm"
                  >
                    care@medlix.in
                  </a>
                </div>
              </div>

              {/* Accreditations Badges */}
              <div className="pt-3 border-t border-slate-800">
                <span className="text-[11px] font-bold text-teal-300 uppercase tracking-wider block mb-2">Quality &amp; Clinical Accreditations</span>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-bold px-3 py-1 rounded-lg bg-white/10 text-white border border-white/15">NABH Accredited</span>
                  <span className="text-[11px] font-bold px-3 py-1 rounded-lg bg-white/10 text-white border border-white/15">NABL Certified Labs</span>
                  <span className="text-[11px] font-bold px-3 py-1 rounded-lg bg-white/10 text-white border border-white/15">JCI Quality Standards</span>
                </div>
              </div>

              {/* Book Appointment CTA */}
              <div className="pt-1">
                <button
                  type="button"
                  onClick={onOpenAppointment}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0A5F6B] hover:bg-[#07515C] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all border border-teal-400/30 cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-white" />
                  <span>Book Appointment Online</span>
                </button>
              </div>
            </div>

            {/* Column 2: Quick Links (2 cols) */}
            <div className="md:col-span-1 lg:col-span-2 space-y-4">
              <div className="space-y-1">
                <h4 className="text-lg font-bold text-white tracking-tight">
                  Quick Links
                </h4>
                <div className="w-10 h-1 rounded-full bg-teal-400" />
              </div>

              <div className="space-y-2 pt-1 text-sm">
                {quickLinks.map((item, i) => (
                  <Link
                    key={i}
                    href={item.href}
                    className="flex items-center gap-1.5 py-1 text-slate-300 hover:text-teal-300 hover:translate-x-1 transition-all group text-xs sm:text-[13.5px]"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-teal-400 group-hover:text-white shrink-0 transition-colors" />
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Column 3: Our Hospitals (3 cols) */}
            <div className="md:col-span-1 lg:col-span-3 space-y-4">
              <div className="space-y-1">
                <h4 className="text-lg font-bold text-white tracking-tight">
                  Our Hospitals
                </h4>
                <div className="w-10 h-1 rounded-full bg-teal-400" />
              </div>

              <div className="space-y-2 pt-1 text-sm">
                {hospitals.map((h, i) => (
                  <Link
                    key={i}
                    href={h.href}
                    className="flex items-center gap-1.5 py-1 text-slate-300 hover:text-teal-300 hover:translate-x-1 transition-all group text-xs sm:text-[13.5px]"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-teal-400 group-hover:text-white shrink-0 transition-colors" />
                    <span className="leading-tight">{h.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Column 4: Outpatient Timings & Emergency CCU (3 cols) */}
            <div className="md:col-span-1 lg:col-span-3 space-y-4">
              <div className="space-y-1">
                <h4 className="text-lg font-bold text-white tracking-tight">
                  Outpatient OPD Timings
                </h4>
                <div className="w-10 h-1 rounded-full bg-teal-400" />
              </div>

              <div className="bg-white/5 rounded-2xl p-4 border border-white/10 space-y-2.5 pt-3">
                {timings.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between text-xs pb-2 border-b border-white/10 last:border-b-0 last:pb-0"
                  >
                    <span className="font-semibold text-slate-300">{item.day}</span>
                    <span className={`font-bold ${
                      item.highlight ? 'text-teal-300' : 'text-slate-200'
                    }`}>
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>

              <div className="p-3.5 rounded-xl bg-teal-950/60 border border-teal-500/30 flex items-center justify-between text-xs">
                <span className="flex items-center gap-2 font-bold text-white">
                  <ShieldCheck className="w-4 h-4 text-teal-400" />
                  <span>24x7 Emergency ICU &amp; Trauma</span>
                </span>
                <span className="bg-teal-400 text-[#0A192F] px-2 py-0.5 rounded-full font-bold text-[10px] uppercase">
                  Always Open
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 3. Bottom Copyright & Social Bar */}
      <div className="w-full text-slate-400 py-4 bg-[#071120] border-t border-slate-800 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-medium">
          <div>
            © 2026 <strong className="font-semibold text-white">Medlix Health Solutions Pvt. Ltd.</strong> All Rights Reserved.
          </div>

          <div className="flex items-center gap-2.5">
            <a 
              href="https://www.facebook.com/profile.php?id=61566764657722" 
              target="_blank" 
              rel="noreferrer" 
              aria-label="Facebook"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-teal-500 hover:text-white flex items-center justify-center transition-colors text-slate-300"
            >
              <Facebook className="w-4 h-4" />
            </a>

            <a 
              href="https://www.instagram.com/medlix.hospitals?igsh=c3J1anBieDA0ZWhr" 
              target="_blank" 
              rel="noreferrer" 
              aria-label="Instagram"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-teal-500 hover:text-white flex items-center justify-center transition-colors text-slate-300"
            >
              <Instagram className="w-4 h-4" />
            </a>

            <a 
              href="https://youtube.com/@medlixhospital?si=oveelObY2RyR1UXy" 
              target="_blank" 
              rel="noreferrer" 
              aria-label="YouTube"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-teal-500 hover:text-white flex items-center justify-center transition-colors text-slate-300"
            >
              <Youtube className="w-4 h-4" />
            </a>

            <a 
              href="https://www.linkedin.com/company/medlix-health-solution-pvt-ltd/" 
              target="_blank" 
              rel="noreferrer" 
              aria-label="LinkedIn"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-teal-500 hover:text-white flex items-center justify-center transition-colors text-slate-300"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            {/* Scroll to Top */}
            <button
              onClick={scrollToTop}
              className="ml-2 w-8 h-8 rounded-full bg-white/15 hover:bg-teal-500 hover:text-white flex items-center justify-center transition-colors text-slate-300 cursor-pointer shadow-sm"
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
