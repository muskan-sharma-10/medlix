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
  Globe,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

interface HeaderProps {
  onOpenAppointment?: () => void;
}

export default function Header({ onOpenAppointment }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [findDoctorOpen, setFindDoctorOpen] = useState(false);
  const [findHospitalOpen, setFindHospitalOpen] = useState(false);
  const [specialtiesOpen, setSpecialtiesOpen] = useState(false);
  const [corporateOpen, setCorporateOpen] = useState(false);
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
    { title: 'Quality & Accreditation', href: '/about-us#approach' },
    { title: 'Insurance Tie-Ups', href: '/insurances' }
  ];

  const hospitalLocations = [
    { name: 'All Medlix Hospital Locations', href: '/locations', detail: '8 Multi-specialty Hospitals across NCR', primary: true },
    { name: 'Medlix Aarvy Hospital', href: '/medlix-aarvy-hospital', detail: 'Sector 90, Gurugram' },
    { name: 'Medlix Aayu Hospital', href: '/medlix-aayu-hospital', detail: 'Sector 57, Gurugram' },
    { name: 'Medlix Ananta Hospital', href: '/medlix-ananta-hospital', detail: 'Manesar, Gurugram' },
    { name: 'Medlix Dr. RB Yadav Hospital', href: '/medlix-dr-rb-yadav-hospital', detail: 'Rewari, Haryana' },
    { name: 'Medlix Gopal Hospital', href: '/medlix-gopal-hospital', detail: 'Gurugram' },
    { name: 'Medlix Kumar Hospital', href: '/medlix-kumar-hospital', detail: 'Gurugram' },
    { name: 'Medlix Manavta Hospital', href: '/medlix-manavta-hospital', detail: 'Gurugram' },
    { name: 'Golden Hospital', href: '/golden-hospital-sohna-road', detail: 'Sohna Road, Gurugram' },
  ];

  const doctorQuickActions = [
    {
      title: 'Find Specialist Doctor',
      desc: 'Browse 500+ top expert medical consultants across 25+ departments',
      href: '/doctors',
      icon: Search,
      tag: 'Search All'
    },
    {
      title: 'Book OPD Visit',
      desc: 'Instant appointment booking with guaranteed zero waiting time',
      href: '/book-appointment',
      icon: Calendar,
      tag: 'In-Hospital'
    },
    {
      title: 'Online Video Consultation',
      desc: 'Connect with senior super-specialist doctors live from your home',
      href: '/book-appointment',
      icon: Video,
      tag: '24/7 Available'
    },
    {
      title: 'Centers of Excellence',
      desc: 'Heart, Neuro, Ortho, Cancer, Gastro & Kidney Departments',
      href: '/department',
      icon: UserCheck,
      tag: '25+ Centers'
    }
  ];

  const doctorSpecialtiesQuick = [
    { name: 'Cardiologists (Heart Care)', href: '/department#cardiac-sciences' },
    { name: 'Neurologists & Brain Surgeons', href: '/department#neuro-sciences' },
    { name: 'Orthopedics & Joint Replacement', href: '/department#orthopaedics-trauma' },
    { name: 'Gastroenterologists (Liver Care)', href: '/department#gastro-sciences' },
    { name: 'Gynecologists & Obstetrics', href: '/department#gynecology-obstetrics' },
    { name: 'Pediatric Care Center', href: '/department#paediatrics' },
    { name: 'Urologists & Kidney Care', href: '/department#urology' },
    { name: 'Dermatologists & Plastic Surgery', href: '/department#dermatology' },
  ];

  const specialtyColumns = [
    [
      { name: 'Cardiac Sciences', href: '/department#cardiac-sciences' },
      { name: 'Clinical Diagnostics', href: '/department#clinical-diagnostics' },
      { name: 'Cosmetic Surgery', href: '/department#cosmetic-surgery' },
      { name: 'Critical & Intensive Care', href: '/department#critical-intensive-care' },
      { name: 'Dental Sciences', href: '/department#dental-sciences' },
      { name: 'Dermatology', href: '/department#dermatology' },
      { name: 'ENT Surgery', href: '/department#ent-surgery' },
      { name: 'Emergency Medicine', href: '/department#emergency-medicine' }
    ],
    [
      { name: 'Gastro & Liver Sciences', href: '/department#gastro-sciences' },
      { name: 'Genetic Sciences', href: '/department#genetic-sciences' },
      { name: 'Gynecology & Obstetrics', href: '/department#gynecology-obstetrics' },
      { name: 'Health Checkup', href: '/department#health-checkup' },
      { name: 'Intervention', href: '/department#intervention' },
      { name: 'Joint Replacement', href: '/department#joint-replacement' },
      { name: 'Kidney Transplant', href: '/department#kidney-transplant' },
      { name: 'Liver Care', href: '/department#liver-care' }
    ],
    [
      { name: 'Nephrology', href: '/department#nephrology' },
      { name: 'Neuro Sciences', href: '/department#neuro-sciences' },
      { name: 'Ophthalmology', href: '/department#ophthalmology' },
      { name: 'Orthopaedics & Trauma', href: '/department#orthopaedics-trauma' },
      { name: 'Paediatrics', href: '/department#paediatrics' },
      { name: 'Pain Clinic', href: '/department#pain-clinic' },
      { name: 'Physiotherapy & Rehabilitation', href: '/department#physiotherapy-rehabilitation' },
      { name: 'Pulmonology', href: '/department#pulmonology' }
    ],
    [
      { name: 'Kidney & Urology', href: '/department#urology' },
      { name: 'Arthroscopy & Sports', href: '/department#arthroscopy' },
      { name: 'IVF & Fertility', href: '/department#ivf' },
      { name: 'Heart Brain Liver Center', href: '/department#heart-brain-liver' },
      { name: 'Sleep Disorder Center', href: '/department#sleep-disorder' }
    ]
  ];

  return (
    <header className="w-full sticky top-0 z-50 font-['Outfit',sans-serif]">
      {/* 1. Light Aqua Top Utility Bar (#DFF8F8) */}
      <div className="bg-[#DFF8F8] text-[#29363A] text-[12px] xl:text-[12.5px] py-1.5 px-4 sm:px-6 lg:px-8 border-b border-[#C4DFDF] relative z-20">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          {/* Left: Location Links */}
          <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto invisible-scrollbar text-[#719497]">
            <span className="font-bold text-[#29363A] shrink-0">Locations:</span>
            <Link href="/locations" className="hover:text-[#0A5F6B] transition-colors shrink-0">Gurugram</Link>
            <span className="text-[#C4DFDF]">|</span>
            <Link href="/locations" className="hover:text-[#0A5F6B] transition-colors shrink-0">Manesar</Link>
            <span className="text-[#C4DFDF]">|</span>
            <Link href="/locations" className="hover:text-[#0A5F6B] transition-colors shrink-0">Rewari</Link>
            <span className="text-[#C4DFDF]">|</span>
            <Link href="/locations" className="hover:text-[#0A5F6B] transition-colors shrink-0">Palwal</Link>
            <span className="text-[#C4DFDF] hidden sm:inline">|</span>
            <Link href="/locations" className="hover:text-[#0A5F6B] transition-colors hidden sm:inline shrink-0">Faridabad</Link>
          </div>

          {/* Right: Emergency Hotline & Utility Links */}
          <div className="flex items-center gap-3 sm:gap-5 font-medium text-[#719497] shrink-0">
            <a 
              href="tel:+919220143473" 
              className="flex items-center gap-1.5 text-[#0A5F6B] hover:text-[#07515C] transition-colors font-bold font-exo whitespace-nowrap"
            >
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
              <span>24x7 Emergency: +91-9220143473</span>
            </a>

            <span className="hidden md:block w-px h-3.5 bg-[#C4DFDF]" />

            <Link 
              href="/insurances" 
              className="hidden md:flex items-center gap-1 hover:text-[#0A5F6B] transition-colors text-[#719497]"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#0A5F6B]" />
              <span>Insurance TPA</span>
            </Link>

            <span className="hidden sm:block w-px h-3.5 bg-[#C4DFDF]" />

            <a 
              href="mailto:care@medlix.in" 
              className="hidden sm:flex items-center gap-1 hover:text-[#0A5F6B] transition-colors text-[#719497]"
            >
              <Mail className="w-3.5 h-3.5 text-[#0A5F6B]" />
              <span>care@medlix.in</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Light Aqua / White Navbar Header (#FDFEFE) */}
      <div 
        className={`w-full bg-[#FDFEFE] text-[#29363A] border-b border-[#C4DFDF] transition-all duration-300 ${
          isScrolled ? 'shadow-md py-1 bg-[#FDFEFE]' : 'py-2'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-3 sm:px-5 lg:px-6 flex items-center justify-between h-[72px] lg:h-[78px]">
          
          {/* Brand Logo Container */}
          <div className="flex items-center shrink-0">
            <Link href="/" className="block relative h-12 w-44 sm:h-14 sm:w-52 lg:h-[60px] lg:w-[210px] shrink-0 group py-1">
              <Image
                src="/images/medlix-hospital-transparent.svg"
                alt="Medlix Hospital"
                fill
                priority
                className="object-contain object-left group-hover:scale-[1.03] transition-transform duration-200"
              />
            </Link>
          </div>

          {/* Desktop Navigation Menu Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 text-[14px] font-semibold text-[#29363A]">
            
            {/* Home */}
            <Link 
              href="/" 
              className="px-2.5 xl:px-3 py-2 rounded-lg text-[#29363A] hover:text-[#0A5F6B] hover:bg-[#DFF8F8] transition-all whitespace-nowrap"
            >
              Home
            </Link>

            {/* Dropdown 1: FIND A DOCTOR */}
            <div className="relative group py-3">
              <Link
                href="/doctors"
                className="px-2.5 xl:px-3 py-2 rounded-lg text-[#29363A] hover:text-[#0A5F6B] hover:bg-[#DFF8F8] transition-all flex items-center gap-1 font-semibold whitespace-nowrap"
              >
                <span>Find a Doctor</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#719497] group-hover:text-[#0A5F6B] transition-transform duration-200 group-hover:rotate-180" />
              </Link>

              {/* Mega Dropdown */}
              <div className="absolute top-full left-0 pt-1.5 hidden group-hover:block w-[720px] max-w-[calc(100vw-40px)] z-50 transition-all text-[#29363A]">
                <div className="bg-white border border-[#C4DFDF] shadow-lg rounded-xl p-5 relative overflow-hidden">
                  
                  <div className="flex items-center justify-between pb-3 border-b border-[#C4DFDF]/60 mb-3.5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-[#DFF8F8] text-[#0A5F6B] flex items-center justify-center font-bold shrink-0">
                        <Stethoscope className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#29363A] text-sm font-exo">Find a Doctor &amp; Consultation</h4>
                        <p className="text-xs text-[#719497] font-roboto">Book OPD visits or 24/7 video consultations</p>
                      </div>
                    </div>
                    <Link 
                      href="/doctors" 
                      className="text-xs font-bold text-[#0A5F6B] hover:text-[#07515C] flex items-center gap-1 font-exo"
                    >
                      <span>View All Doctors</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  <div className="grid grid-cols-12 gap-4">
                    {/* Left 7 cols */}
                    <div className="col-span-7 space-y-1.5">
                      {doctorQuickActions.map((action, idx) => {
                        const ActionIcon = action.icon;
                        return (
                          <Link
                            key={idx}
                            href={action.href}
                            className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#DFF8F8]/60 transition-colors group/card"
                          >
                            <div className="w-8 h-8 rounded-lg bg-[#DFF8F8] group-hover/card:bg-[#0A5F6B] group-hover/card:text-white text-[#0A5F6B] flex items-center justify-center shrink-0 transition-colors">
                              <ActionIcon className="w-4 h-4" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h5 className="font-bold text-[#29363A] text-xs sm:text-sm group-hover/card:text-[#0A5F6B] transition-colors font-exo">{action.title}</h5>
                              <p className="text-[11px] text-[#719497] line-clamp-1 font-roboto">{action.desc}</p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>

                    {/* Right 5 cols */}
                    <div className="col-span-5 bg-[#DFF8F8]/30 rounded-lg p-3 border border-[#C4DFDF]/40">
                      <h5 className="text-[11px] font-bold uppercase tracking-wider text-[#0A5F6B] mb-2 font-exo">Top Specialties</h5>
                      <div className="space-y-0.5">
                        {doctorSpecialtiesQuick.map((spec, idx) => (
                          <Link
                            key={idx}
                            href={spec.href}
                            className="block px-2 py-1 rounded-md text-xs font-medium text-[#29363A] hover:bg-white hover:text-[#0A5F6B] transition-colors flex items-center justify-between group/spec"
                          >
                            <span className="truncate">{spec.name}</span>
                            <ChevronRight className="w-3 h-3 text-[#719497] group-hover/spec:text-[#0A5F6B]" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dropdown 2: FIND HOSPITAL */}
            <div className="relative group py-3">
              <Link
                href="/locations"
                className="px-2.5 xl:px-3 py-2 rounded-lg text-[#29363A] hover:text-[#0A5F6B] hover:bg-[#DFF8F8] transition-all flex items-center gap-1 whitespace-nowrap"
              >
                <span>Find Hospital</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#719497] group-hover:text-[#0A5F6B] transition-transform duration-200 group-hover:rotate-180" />
              </Link>

              <div className="absolute top-full left-0 pt-1.5 hidden group-hover:block w-[340px] z-50 transition-all text-[#29363A]">
                <div className="bg-white border border-[#C4DFDF] shadow-lg rounded-xl py-3 overflow-hidden">
                  
                  <div className="px-4 py-1.5 border-b border-[#C4DFDF]/60 mb-1 flex items-center justify-between">
                    <span className="text-xs font-bold text-[#0A5F6B] uppercase tracking-wider font-exo">Hospital Network</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#DFF8F8] text-[#0A5F6B] font-exo">8 Units</span>
                  </div>

                  <div className="max-h-[320px] overflow-y-auto py-1">
                    {hospitalLocations.map((hosp, idx) => (
                      <Link
                        key={idx}
                        href={hosp.href}
                        className={`block px-4 py-2 hover:bg-[#DFF8F8]/50 transition-colors group/hosp ${
                          hosp.primary ? 'bg-[#DFF8F8]/70 font-bold border-b border-[#C4DFDF]/60' : ''
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className={`text-[13px] ${hosp.primary ? 'text-[#0A5F6B]' : 'text-[#29363A] group-hover/hosp:text-[#0A5F6B] font-semibold'}`}>
                            {hosp.name}
                          </span>
                          <MapPin className="w-3.5 h-3.5 text-[#719497] group-hover/hosp:text-[#0A5F6B]" />
                        </div>
                        <p className="text-[11px] text-[#719497] mt-0.5">{hosp.detail}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Dropdown 3: SPECIALTIES */}
            <div className="relative group py-3">
              <Link
                href="/department"
                className="px-2.5 xl:px-3 py-2 rounded-lg text-[#29363A] hover:text-[#0A5F6B] hover:bg-[#DFF8F8] transition-all flex items-center gap-1 whitespace-nowrap"
              >
                <span>Specialties</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#719497] group-hover:text-[#0A5F6B] transition-transform duration-200 group-hover:rotate-180" />
              </Link>

              <div className="absolute top-full -left-[160px] xl:-left-[100px] pt-1.5 hidden group-hover:block w-[800px] max-w-[calc(100vw-40px)] z-50 transition-all text-[#29363A]">
                <div className="bg-white border border-[#C4DFDF] shadow-lg rounded-xl p-5 relative overflow-hidden">
                  <div className="flex items-center justify-between pb-3 border-b border-[#C4DFDF]/60 mb-3.5">
                    <span className="text-xs font-bold text-[#0A5F6B] uppercase tracking-wider font-exo">Clinical Departments &amp; Institutes</span>
                    <Link href="/department" className="text-xs font-bold text-[#0A5F6B] hover:text-[#07515C] flex items-center gap-1 font-exo">
                      <span>View All Specialties</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                  
                  <div className="grid grid-cols-4 gap-4 text-[13px]">
                    {specialtyColumns.map((col, colIdx) => (
                      <div key={colIdx} className="space-y-1">
                        {col.map((s, idx) => (
                          <Link
                            key={idx}
                            href={s.href}
                            className="block py-1 text-[#29363A] hover:text-[#0A5F6B] hover:translate-x-1 font-medium transition-all flex items-center gap-1.5 group/item"
                          >
                            <span className="w-1 h-1 rounded-full bg-[#C4DFDF] group-hover/item:bg-[#0A5F6B] transition-colors" />
                            <span className="truncate">{s.name}</span>
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Find Medicine */}
            <Link 
              href="/medicines" 
              className="px-2.5 xl:px-3 py-2 rounded-lg text-[#29363A] hover:text-[#0A5F6B] hover:bg-[#DFF8F8] transition-all whitespace-nowrap"
            >
              Find Medicine
            </Link>

            {/* Book Lab Test */}
            <Link 
              href="/lab-tests" 
              className="px-2.5 xl:px-3 py-2 rounded-lg text-[#29363A] hover:text-[#0A5F6B] hover:bg-[#DFF8F8] transition-all whitespace-nowrap"
            >
              Book Lab Test
            </Link>

            {/* Corporate */}
            <div className="relative group py-3">
              <Link
                href="/about-us"
                className="px-2.5 xl:px-3 py-2 rounded-lg text-[#29363A] hover:text-[#0A5F6B] hover:bg-[#DFF8F8] transition-all flex items-center gap-1 whitespace-nowrap"
              >
                <span>Corporate</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#719497] group-hover:text-[#0A5F6B] transition-transform duration-200 group-hover:rotate-180" />
              </Link>

              <div className="absolute top-full left-0 pt-1.5 hidden group-hover:block w-52 z-50 transition-all text-[#29363A]">
                <div className="bg-white border border-[#C4DFDF] shadow-lg rounded-xl py-2 overflow-hidden">
                  {corporateItems.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      className="block px-4 py-2 text-[13px] text-[#29363A] hover:bg-[#DFF8F8] hover:text-[#0A5F6B] hover:pl-5 transition-all font-medium"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Blogs */}
            <Link 
              href="/blogs" 
              className="px-2.5 xl:px-3 py-2 rounded-lg text-[#29363A] hover:text-[#0A5F6B] hover:bg-[#DFF8F8] transition-all whitespace-nowrap"
            >
              Blogs
            </Link>

            {/* Contact */}
            <Link 
              href="/contact-us" 
              className="px-2.5 xl:px-3 py-2 rounded-lg text-[#29363A] hover:text-[#0A5F6B] hover:bg-[#DFF8F8] transition-all whitespace-nowrap"
            >
              Contact
            </Link>
          </nav>

          {/* Right Action Button (#0A5F6B Primary Healthcare Teal Button) */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenAppointment}
              className="px-5 py-2.5 rounded-full bg-[#0A5F6B] hover:bg-[#07515C] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2 font-exo cursor-pointer whitespace-nowrap shine-sweep btn-pulse"
            >
              <Calendar className="w-4 h-4 text-white" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenAppointment}
              className="px-3.5 py-1.5 bg-[#0A5F6B] hover:bg-[#07515C] text-white text-[11px] font-bold uppercase rounded-full font-exo shadow-xs"
            >
              Book
            </button>

            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 text-[#29363A] hover:text-[#0A5F6B] hover:bg-[#DFF8F8] rounded-lg transition-colors focus:outline-none"
              aria-label="Open Mobile Menu"
            >
              <Menu className="w-6.5 h-6.5" />
            </button>
          </div>

        </div>
      </div>

      {/* 3. Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div 
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity" 
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-2xl z-50 flex flex-col justify-between overflow-y-auto font-['Outfit',sans-serif]">
            <div className="p-5">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <Image
                  src="/images/medlix-hospital.svg"
                  alt="Medlix Hospital"
                  width={130}
                  height={40}
                  className="object-contain"
                />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-slate-500 hover:text-slate-800 rounded-lg hover:bg-slate-100"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="py-4 space-y-1 text-[14.5px] font-semibold text-slate-800">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2.5 rounded-lg hover:bg-slate-50 hover:text-[#164d92]"
                >
                  Home
                </Link>

                {/* Mobile Accordion: FIND A DOCTOR */}
                <div>
                  <button
                    onClick={() => setFindDoctorOpen(!findDoctorOpen)}
                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg bg-[#DFF8F8] text-[#0A5F6B] font-bold font-exo"
                  >
                    <div className="flex items-center gap-2">
                      <Stethoscope className="w-4 h-4 text-[#0A5F6B]" />
                      <span>Find a Doctor</span>
                    </div>
                    {findDoctorOpen ? <Minus className="w-4 h-4 text-[#0A5F6B]" /> : <Plus className="w-4 h-4 text-[#0A5F6B]" />}
                  </button>
                  {findDoctorOpen && (
                    <div className="pl-4 pr-2 py-2 space-y-1 text-[13.5px] bg-[#FDFEFE] rounded-lg my-1 border border-[#C4DFDF]">
                      <Link
                        href="/doctors"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-1.5 font-bold text-[#0A5F6B]"
                      >
                        🔍 Search All Specialist Doctors
                      </Link>
                      <Link
                        href="/book-appointment"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-1.5 text-[#719497] hover:text-[#0A5F6B]"
                      >
                        📅 Book OPD Visit
                      </Link>
                    </div>
                  )}
                </div>

                {/* Mobile Accordion: FIND HOSPITAL */}
                <div>
                  <button
                    onClick={() => setFindHospitalOpen(!findHospitalOpen)}
                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-[#DFF8F8] hover:text-[#0A5F6B]"
                  >
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-[#719497]" />
                      <span>Find Hospital</span>
                    </div>
                    {findHospitalOpen ? <Minus className="w-4 h-4 text-[#0A5F6B]" /> : <Plus className="w-4 h-4 text-[#0A5F6B]" />}
                  </button>
                  {findHospitalOpen && (
                    <div className="pl-4 pr-2 py-2 space-y-1 text-[13px] bg-[#FDFEFE] rounded-lg my-1 border border-[#C4DFDF] max-h-48 overflow-y-auto">
                      {hospitalLocations.map((hosp, idx) => (
                        <Link
                          key={idx}
                          href={hosp.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`block py-1.5 ${hosp.primary ? 'font-bold text-[#0A5F6B]' : 'text-[#719497] hover:text-[#0A5F6B]'}`}
                        >
                          {hosp.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  href="/medicines"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2.5 rounded-lg hover:bg-[#DFF8F8] hover:text-[#0A5F6B]"
                >
                  Find Medicine
                </Link>

                <Link
                  href="/lab-tests"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2.5 rounded-lg hover:bg-[#DFF8F8] hover:text-[#0A5F6B]"
                >
                  Book Lab Test
                </Link>

                <Link
                  href="/department"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2.5 rounded-lg hover:bg-[#DFF8F8] hover:text-[#0A5F6B]"
                >
                  Specialties
                </Link>

                <Link
                  href="/about-us"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2.5 rounded-lg hover:bg-[#DFF8F8] hover:text-[#0A5F6B]"
                >
                  Corporate
                </Link>

                <Link
                  href="/blogs"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2.5 rounded-lg hover:bg-[#DFF8F8] hover:text-[#0A5F6B]"
                >
                  Blogs
                </Link>

                <Link
                  href="/contact-us"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2.5 rounded-lg hover:bg-[#DFF8F8] hover:text-[#0A5F6B]"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Bottom Drawer CTA */}
            <div className="p-5 border-t border-[#C4DFDF] bg-[#FDFEFE] space-y-2 text-xs">
              <a
                href="tel:+919220143473"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[#0A5F6B] hover:bg-[#07515C] text-white font-bold font-exo"
              >
                <Phone className="w-4 h-4" />
                <span>24x7 Emergency: +91-9220143473</span>
              </a>
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenAppointment?.(); }}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[#0A5F6B] hover:bg-[#07515C] text-white font-bold font-exo cursor-pointer"
              >
                <span>Book Appointment</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}