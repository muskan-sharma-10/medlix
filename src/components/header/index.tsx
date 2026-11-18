'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Phone, 
  Mail, 
  Clock, 
  Menu, 
  X, 
  Plus, 
  Minus,
  Building2,
  Stethoscope,
  Search,
  Calendar,
  Video,
  UserCheck,
  ChevronDown,
  MapPin,
  ArrowRight,
  Sparkles,
  Pill,
  TestTube,
  ShieldCheck,
  ChevronRight,
  HeartPulse
} from 'lucide-react';
import MedlixLogo from '@/components/ui/medlix-logo';

interface HeaderProps {
  onOpenAppointment?: () => void;
}

export default function Header({ onOpenAppointment }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDoctorOpen, setMobileDoctorOpen] = useState(false);
  const [mobileHospitalsOpen, setMobileHospitalsOpen] = useState(false);
  const [mobileSpecialtiesOpen, setMobileSpecialtiesOpen] = useState(false);
  const [mobileCorporateOpen, setMobileCorporateOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const corporateItems = [
    { title: 'Company Overview', href: '/about-us' },
    { title: 'Vision & Mission', href: '/about-us#vision-mission' },
    { title: 'Our Core Values', href: '/about-us#ourcore' },
    { title: 'Why Choose Us', href: '/about-us#whychoose' },
    { title: 'Medlix Approach', href: '/about-us#approach' },
    { title: 'Insurance Tie-Ups', href: '/insurances' }
  ];

  const hospitalLocations = [
    { name: 'All Hospital Branches', href: '/locations', detail: '8 Multispecialty Hospitals across NCR', primary: true },
    { name: 'Medlix Aarvy Hospital', href: '/medlix-aarvy-hospital', detail: 'Civil Lines, Sector 90, Gurugram' },
    { name: 'Medlix Aayu Hospital', href: '/medlix-aayu-hospital', detail: 'Hari Nagar, Sector 57, Gurugram' },
    { name: 'Medlix Ananta Hospital', href: '/medlix-ananta-hospital', detail: 'Manesar, Gurugram' },
    { name: 'Medlix Dr. RB Yadav Hospital', href: '/medlix-dr-rb-yadav-hospital', detail: 'Rewari, Haryana' },
    { name: 'Golden Hospital', href: '/golden-hospital-sohna-road', detail: 'Sohna Road, Gurugram' },
    { name: 'Medlix Gopal Hospital', href: '/medlix-gopal-hospital', detail: 'Chhata, Mathura' },
    { name: 'Medlix Manavta Hospital', href: '/medlix-manavta-hospital', detail: 'Ballabgarh, Faridabad' },
    { name: 'Medlix Kumar Hospital', href: '/medlix-kumar-hospital', detail: 'Greater Noida' }
  ];

  const doctorQuickActions = [
    {
      title: 'Find Specialist Doctor',
      desc: 'Browse 500+ top expert consultants across 25+ departments',
      href: '/doctors',
      icon: Search,
      tag: 'Search All'
    },
    {
      title: 'Book In-Hospital OPD',
      desc: 'Zero-wait consultation appointment with senior specialists',
      href: '/book-appointment',
      icon: Calendar,
      tag: 'OPD Slots'
    },
    {
      title: 'Online Video Consultation',
      desc: 'Connect live with super-specialists from home',
      href: '/book-appointment',
      icon: Video,
      tag: 'Tele-Health'
    },
    {
      title: 'Centers of Clinical Excellence',
      desc: 'Heart, Neuro, Ortho, GI, Cancer & Nephrology Institutes',
      href: '/department',
      icon: UserCheck,
      tag: 'Specialty Hubs'
    }
  ];

  const doctorSpecialtiesQuick = [
    { name: 'Cardiologists (Heart Care)', href: '/department#cardiac-sciences' },
    { name: 'Neurologists & Spine Surgeons', href: '/department#neuro-sciences' },
    { name: 'Orthopedics & Joint Replacement', href: '/department#orthopaedics-trauma' },
    { name: 'Gastroenterology & Liver Sciences', href: '/department#gastro-sciences' },
    { name: 'Nephrology & Dialysis Care', href: '/department#nephrology' },
    { name: 'Pediatric Care & NICU', href: '/department#paediatrics' },
    { name: 'Urology & Kidney Stone Care', href: '/department#urology' },
    { name: 'IVF & Reproductive Medicine', href: '/department#ivf' }
  ];

  const specialtyColumns = [
    [
      { name: 'Cardiac Sciences', href: '/department#cardiac-sciences' },
      { name: 'Critical Care & CCU', href: '/department#critical-intensive-care' },
      { name: 'Clinical Diagnostics', href: '/department#clinical-diagnostics' },
      { name: 'Emergency Medicine 24x7', href: '/department#emergency-medicine' }
    ],
    [
      { name: 'Gastro & Liver Sciences', href: '/department#gastro-sciences' },
      { name: 'Gynecology & Obstetrics', href: '/department#gynecology-obstetrics' },
      { name: 'Joint & Hip Replacement', href: '/department#joint-replacement' },
      { name: 'Kidney Transplant & Renal', href: '/department#kidney-transplant' }
    ],
    [
      { name: 'Nephrology & Dialysis', href: '/department#nephrology' },
      { name: 'Neuro Sciences & Brain', href: '/department#neuro-sciences' },
      { name: 'Orthopaedics & Trauma', href: '/department#orthopaedics-trauma' },
      { name: 'Paediatrics & Neonatology', href: '/department#paediatrics' }
    ],
    [
      { name: 'Urology & Andrology', href: '/department#urology' },
      { name: 'ENT Surgery', href: '/department#ent-surgery' },
      { name: 'IVF & Fertility Care', href: '/department#ivf' },
      { name: 'Pulmonology & Respiratory', href: '/department#pulmonology' }
    ]
  ];

  return (
    <header className="w-full sticky top-0 z-50 font-sans">
      {/* 1. Refined Top Utility Bar */}
      <div className="bg-[#0A2540] text-slate-200 text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-slate-800/80 relative z-20">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          
          {/* Left: Quick Location Badges */}
          <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar text-slate-300 text-[11.5px] sm:text-xs">
            <span className="font-semibold text-teal-300 flex items-center gap-1 shrink-0">
              <MapPin className="w-3.5 h-3.5 text-[#14B8A6]" />
              <span>Locations:</span>
            </span>
            <Link href="/locations" className="hover:text-white transition-colors shrink-0">Gurugram</Link>
            <span className="text-slate-600">•</span>
            <Link href="/locations" className="hover:text-white transition-colors shrink-0">Manesar</Link>
            <span className="text-slate-600">•</span>
            <Link href="/locations" className="hover:text-white transition-colors shrink-0">Rewari</Link>
            <span className="text-slate-600">•</span>
            <Link href="/locations" className="hover:text-white transition-colors shrink-0">Palwal</Link>
            <span className="text-slate-600 hidden md:inline">•</span>
            <Link href="/locations" className="hover:text-white transition-colors hidden md:inline shrink-0">Greater Noida</Link>
          </div>

          {/* Right: 24/7 Emergency Helpline & Insurance Quick Links */}
          <div className="flex items-center gap-3 sm:gap-5 font-medium shrink-0">
            <a 
              href="tel:+919220143473" 
              className="flex items-center gap-1.5 text-white hover:text-teal-300 transition-colors font-bold whitespace-nowrap bg-rose-600/90 hover:bg-rose-600 px-3 py-0.5 rounded-full text-[11px] sm:text-xs shadow-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
              <span>24x7 Emergency: +91-9220143473</span>
            </a>

            <span className="hidden lg:block w-px h-3.5 bg-slate-700" />

            <Link 
              href="/insurances" 
              className="hidden lg:flex items-center gap-1 hover:text-teal-300 transition-colors text-slate-300 text-xs"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#14B8A6]" />
              <span>100% Cashless TPA</span>
            </Link>

            <span className="hidden sm:block w-px h-3.5 bg-slate-700" />

            <a 
              href="mailto:care@medlix.in" 
              className="hidden sm:flex items-center gap-1 hover:text-teal-300 transition-colors text-slate-300 text-xs"
            >
              <Mail className="w-3.5 h-3.5 text-[#14B8A6]" />
              <span>care@medlix.in</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Premium Navbar */}
      <div 
        className={`w-full bg-white/95 backdrop-blur-md text-slate-900 border-b border-slate-200/90 transition-all duration-300 ${
          isScrolled ? 'shadow-[0_4px_20px_rgba(10,37,64,0.08)] py-1.5' : 'py-2.5 sm:py-3'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-[64px] lg:h-[72px]">
          
          {/* Brand Logo Container */}
          <Link 
            href="/" 
            className="flex items-center shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A5F6B] rounded-xl"
            aria-label="Medlix Hospital Home"
          >
            <MedlixLogo variant="light" className="transition-transform duration-200 group-hover:scale-[1.02]" />
          </Link>

          {/* Desktop Navigation Menu Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-[14px] font-semibold text-slate-700">
            
            {/* Home */}
            <Link 
              href="/" 
              className="px-3 py-2 rounded-xl text-slate-800 hover:text-[#0A5F6B] hover:bg-[#E6F7F7]/60 transition-all whitespace-nowrap"
            >
              Home
            </Link>

            {/* Dropdown 1: FIND A DOCTOR */}
            <div className="relative group py-2">
              <Link
                href="/doctors"
                className="px-3 py-2 rounded-xl text-slate-800 hover:text-[#0A5F6B] hover:bg-[#E6F7F7]/60 transition-all flex items-center gap-1 font-semibold whitespace-nowrap"
              >
                <span>Find Doctor</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0A5F6B] transition-transform duration-200 group-hover:rotate-180" />
              </Link>

              {/* Mega Dropdown */}
              <div className="absolute top-full left-0 pt-2 hidden group-hover:block w-[720px] max-w-[calc(100vw-40px)] z-50 transition-all text-slate-800 animate-in fade-in slide-in-from-top-1 duration-150">
                <div className="bg-white border border-slate-200/90 shadow-[0_20px_45px_rgba(10,37,64,0.12)] rounded-2xl p-5 relative overflow-hidden">
                  
                  {/* Top Bar inside mega menu */}
                  <div className="flex items-center justify-between pb-3.5 border-b border-slate-100 mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-[#E6F7F7] text-[#0A5F6B] flex items-center justify-center font-bold shrink-0">
                        <Stethoscope className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm leading-tight">Expert Specialist Directory</h4>
                        <p className="text-xs text-slate-500 font-normal">500+ super specialists across NCR hospitals</p>
                      </div>
                    </div>
                    <Link 
                      href="/doctors" 
                      className="text-xs font-bold text-[#0A5F6B] hover:text-[#07515C] flex items-center gap-1 group/all"
                    >
                      <span>View All 500+ Doctors</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/all:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  <div className="grid grid-cols-12 gap-5">
                    {/* Left 7 cols: Quick actions */}
                    <div className="col-span-7 space-y-2">
                      {doctorQuickActions.map((action, idx) => {
                        const ActionIcon = action.icon;
                        return (
                          <Link
                            key={idx}
                            href={action.href}
                            className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#E6F7F7]/60 transition-colors group/card border border-transparent hover:border-teal-200/50"
                          >
                            <div className="w-9 h-9 rounded-xl bg-slate-50 group-hover/card:bg-[#0A5F6B] group-hover/card:text-white text-[#0A5F6B] flex items-center justify-center shrink-0 transition-colors shadow-2xs mt-0.5">
                              <ActionIcon className="w-4 h-4" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2">
                                <h5 className="font-bold text-slate-900 text-xs sm:text-[13.5px] group-hover/card:text-[#0A5F6B] transition-colors">
                                  {action.title}
                                </h5>
                                <span className="text-[10px] font-bold text-teal-700 bg-teal-50 px-2 py-0.2 rounded-full border border-teal-200/60">
                                  {action.tag}
                                </span>
                              </div>
                              <p className="text-[11.5px] text-slate-500 line-clamp-1 mt-0.5">{action.desc}</p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>

                    {/* Right 5 cols: Popular specialties */}
                    <div className="col-span-5 bg-slate-50/80 rounded-xl p-3.5 border border-slate-200/80">
                      <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-slate-200/60">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#0A5F6B]">Top Specialities</span>
                        <Sparkles className="w-3.5 h-3.5 text-[#0A5F6B]" />
                      </div>
                      <div className="space-y-1">
                        {doctorSpecialtiesQuick.map((spec, idx) => (
                          <Link
                            key={idx}
                            href={spec.href}
                            className="px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-700 hover:bg-white hover:text-[#0A5F6B] transition-all flex items-center justify-between group/spec shadow-2xs"
                          >
                            <span className="truncate">{spec.name}</span>
                            <ChevronRight className="w-3 h-3 text-slate-400 group-hover/spec:text-[#0A5F6B] group-hover/spec:translate-x-0.5 transition-all" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dropdown 2: HOSPITALS & LOCATIONS */}
            <div className="relative group py-2">
              <Link
                href="/locations"
                className="px-3 py-2 rounded-xl text-slate-800 hover:text-[#0A5F6B] hover:bg-[#E6F7F7]/60 transition-all flex items-center gap-1 whitespace-nowrap"
              >
                <span>Hospitals</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0A5F6B] transition-transform duration-200 group-hover:rotate-180" />
              </Link>

              <div className="absolute top-full left-0 pt-2 hidden group-hover:block w-[350px] z-50 transition-all text-slate-800 animate-in fade-in slide-in-from-top-1 duration-150">
                <div className="bg-white border border-slate-200/90 shadow-[0_20px_45px_rgba(10,37,64,0.12)] rounded-2xl py-3 overflow-hidden">
                  
                  <div className="px-4 py-2 border-b border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-[#0A5F6B] uppercase tracking-wider">Medlix Network</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#E6F7F7] text-[#0A5F6B] border border-teal-200/60">
                      8 Hospital Units
                    </span>
                  </div>

                  <div className="max-h-[340px] overflow-y-auto py-1">
                    {hospitalLocations.map((hosp, idx) => (
                      <Link
                        key={idx}
                        href={hosp.href}
                        className={`block px-4 py-2.5 hover:bg-[#E6F7F7]/50 transition-colors group/hosp ${
                          hosp.primary ? 'bg-[#E6F7F7]/70 font-bold border-b border-teal-100' : ''
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className={`text-[13px] ${hosp.primary ? 'text-[#0A5F6B]' : 'text-slate-800 group-hover/hosp:text-[#0A5F6B] font-semibold'}`}>
                            {hosp.name}
                          </span>
                          <MapPin className="w-3.5 h-3.5 text-slate-400 group-hover/hosp:text-[#0A5F6B]" />
                        </div>
                        <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">{hosp.detail}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Dropdown 3: SPECIALTIES */}
            <div className="relative group py-2">
              <Link
                href="/department"
                className="px-3 py-2 rounded-xl text-slate-800 hover:text-[#0A5F6B] hover:bg-[#E6F7F7]/60 transition-all flex items-center gap-1 whitespace-nowrap"
              >
                <span>Specialties</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0A5F6B] transition-transform duration-200 group-hover:rotate-180" />
              </Link>

              <div className="absolute top-full -left-[140px] xl:-left-[80px] pt-2 hidden group-hover:block w-[780px] max-w-[calc(100vw-40px)] z-50 transition-all text-slate-800 animate-in fade-in slide-in-from-top-1 duration-150">
                <div className="bg-white border border-slate-200/90 shadow-[0_20px_45px_rgba(10,37,64,0.12)] rounded-2xl p-5 relative overflow-hidden">
                  <div className="flex items-center justify-between pb-3.5 border-b border-slate-100 mb-4">
                    <span className="text-xs font-bold text-[#0A5F6B] uppercase tracking-wider">Clinical Institutes &amp; Departments</span>
                    <Link href="/department" className="text-xs font-bold text-[#0A5F6B] hover:text-[#07515C] flex items-center gap-1">
                      <span>View All Specialties</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                  
                  <div className="grid grid-cols-4 gap-4 text-[13px]">
                    {specialtyColumns.map((col, colIdx) => (
                      <div key={colIdx} className="space-y-1.5">
                        {col.map((s, idx) => (
                          <Link
                            key={idx}
                            href={s.href}
                            className="block py-1 px-2 rounded-lg text-slate-700 hover:bg-[#E6F7F7]/60 hover:text-[#0A5F6B] font-medium transition-all truncate"
                          >
                            {s.name}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Cashless Insurance */}
            <Link 
              href="/insurances" 
              className="px-3 py-2 rounded-xl text-slate-800 hover:text-[#0A5F6B] hover:bg-[#E6F7F7]/60 transition-all whitespace-nowrap"
            >
              Insurances
            </Link>

            {/* Quick Patient Actions: Medicines & Lab Tests */}
            <Link 
              href="/medicines" 
              className="px-3 py-2 rounded-xl text-slate-800 hover:text-[#0A5F6B] hover:bg-[#E6F7F7]/60 transition-all whitespace-nowrap"
            >
              Pharmacy
            </Link>

            <Link 
              href="/lab-tests" 
              className="px-3 py-2 rounded-xl text-slate-800 hover:text-[#0A5F6B] hover:bg-[#E6F7F7]/60 transition-all whitespace-nowrap"
            >
              Lab Tests
            </Link>

            {/* Corporate / About Dropdown */}
            <div className="relative group py-2">
              <Link
                href="/about-us"
                className="px-3 py-2 rounded-xl text-slate-800 hover:text-[#0A5F6B] hover:bg-[#E6F7F7]/60 transition-all flex items-center gap-1 whitespace-nowrap"
              >
                <span>About</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0A5F6B] transition-transform duration-200 group-hover:rotate-180" />
              </Link>

              <div className="absolute top-full right-0 pt-2 hidden group-hover:block w-56 z-50 transition-all text-slate-800 animate-in fade-in slide-in-from-top-1 duration-150">
                <div className="bg-white border border-slate-200/90 shadow-[0_20px_45px_rgba(10,37,64,0.12)] rounded-2xl py-2 overflow-hidden">
                  {corporateItems.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      className="block px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-[#E6F7F7] hover:text-[#0A5F6B] transition-all"
                    >
                      {item.title}
                    </Link>
                  ))}
                  <div className="border-t border-slate-100 my-1 pt-1">
                    <Link
                      href="/contact-us"
                      className="block px-4 py-2 text-xs font-bold text-[#0A5F6B] hover:bg-[#E6F7F7]"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </nav>

          {/* Right Action CTA Button */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenAppointment}
              className="px-6 py-2.5 rounded-full bg-[#0A5F6B] hover:bg-[#07515C] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-[#0A5F6B]/20 hover:shadow-lg hover:shadow-[#0A5F6B]/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center gap-2 cursor-pointer whitespace-nowrap shine-sweep btn-pulse"
            >
              <Calendar className="w-4 h-4 text-white" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Header Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenAppointment}
              className="px-3.5 py-1.5 bg-[#0A5F6B] hover:bg-[#07515C] text-white text-xs font-bold uppercase rounded-full shadow-xs flex items-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 text-slate-800 hover:text-[#0A5F6B] hover:bg-slate-100 rounded-xl transition-colors focus:outline-none"
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

        </div>
      </div>

      {/* 3. Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden animate-in fade-in duration-200">
          <div 
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity" 
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="fixed inset-y-0 right-0 max-w-sm w-full bg-white shadow-2xl z-50 flex flex-col justify-between overflow-y-auto">
            {/* Drawer Header */}
            <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/80">
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                <MedlixLogo variant="light" className="h-10" />
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-slate-500 hover:text-slate-900 rounded-xl hover:bg-slate-200/80 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Accordion Links */}
            <div className="p-4 space-y-1 text-sm font-semibold text-slate-800 flex-1 overflow-y-auto">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-xl hover:bg-[#E6F7F7] hover:text-[#0A5F6B] transition-colors"
              >
                Home
              </Link>

              {/* Collapsible Doctor */}
              <div>
                <button
                  onClick={() => setMobileDoctorOpen(!mobileDoctorOpen)}
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-[#E6F7F7] hover:text-[#0A5F6B] transition-colors"
                >
                  <span>Find a Doctor</span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${mobileDoctorOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileDoctorOpen && (
                  <div className="pl-4 pr-2 py-1.5 space-y-1 text-xs text-slate-600 bg-slate-50 rounded-xl my-1">
                    <Link
                      href="/doctors"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 px-2 hover:text-[#0A5F6B] font-bold"
                    >
                      Browse All 500+ Specialists →
                    </Link>
                    {doctorSpecialtiesQuick.slice(0, 5).map((spec, idx) => (
                      <Link
                        key={idx}
                        href={spec.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-1.5 px-2 hover:text-[#0A5F6B]"
                      >
                        {spec.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Collapsible Hospitals */}
              <div>
                <button
                  onClick={() => setMobileHospitalsOpen(!mobileHospitalsOpen)}
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-[#E6F7F7] hover:text-[#0A5F6B] transition-colors"
                >
                  <span>Our 8 Hospitals</span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${mobileHospitalsOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileHospitalsOpen && (
                  <div className="pl-4 pr-2 py-1.5 space-y-1 text-xs text-slate-600 bg-slate-50 rounded-xl my-1">
                    {hospitalLocations.map((hosp, idx) => (
                      <Link
                        key={idx}
                        href={hosp.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-1.5 px-2 hover:text-[#0A5F6B]"
                      >
                        {hosp.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Specialties */}
              <Link
                href="/department"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-xl hover:bg-[#E6F7F7] hover:text-[#0A5F6B] transition-colors"
              >
                Specialties &amp; Clinical Institutes
              </Link>

              {/* Insurance */}
              <Link
                href="/insurances"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-xl hover:bg-[#E6F7F7] hover:text-[#0A5F6B] transition-colors"
              >
                100% Cashless Insurance &amp; TPAs
              </Link>

              {/* Pharmacy */}
              <Link
                href="/medicines"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-xl hover:bg-[#E6F7F7] hover:text-[#0A5F6B] transition-colors"
              >
                Pharmacy &amp; Medicines
              </Link>

              {/* Lab Tests */}
              <Link
                href="/lab-tests"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-xl hover:bg-[#E6F7F7] hover:text-[#0A5F6B] transition-colors"
              >
                Book a Lab Test
              </Link>

              {/* Corporate */}
              <div>
                <button
                  onClick={() => setMobileCorporateOpen(!mobileCorporateOpen)}
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-[#E6F7F7] hover:text-[#0A5F6B] transition-colors"
                >
                  <span>Corporate &amp; About</span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${mobileCorporateOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileCorporateOpen && (
                  <div className="pl-4 pr-2 py-1.5 space-y-1 text-xs text-slate-600 bg-slate-50 rounded-xl my-1">
                    {corporateItems.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-1.5 px-2 hover:text-[#0A5F6B]"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Contact Us */}
              <Link
                href="/contact-us"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-xl hover:bg-[#E6F7F7] hover:text-[#0A5F6B] transition-colors"
              >
                Contact Us
              </Link>
            </div>

            {/* Bottom Drawer CTA: Emergency Helpline & Book Slot */}
            <div className="p-4 border-t border-slate-200 bg-slate-50 space-y-2.5 text-xs">
              <a
                href="tel:+919220143473"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold transition-colors shadow-sm"
              >
                <Phone className="w-4 h-4" />
                <span>24x7 Emergency: +91-9220143473</span>
              </a>
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenAppointment?.(); }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#0A5F6B] hover:bg-[#07515C] text-white font-bold transition-all shadow-md cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Doctor Appointment</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
