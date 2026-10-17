'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, EffectFade } from 'swiper/modules';
import { ChevronLeft, ChevronRight, Sparkles, ShieldCheck, Heart, Calendar, Phone, ArrowRight, Stethoscope, MapPin } from 'lucide-react';

interface HeroSliderProps {
  onOpenAppointment?: () => void;
}

export default function HeroSlider({ onOpenAppointment }: HeroSliderProps = {}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      id: 1,
      badgeIcon: Sparkles,
      badgeText: 'World-Class Super-Specialty Care',
      titlePrefix: "Your Health Deserves ",
      highlight: "World-Class Care",
      titleSuffix: " — Anytime, Every Time.",
      subtitle: '⚡ #EveryMomentCounts — 24/7 Super-Specialty Emergency, Trauma & ICU Care across NCR.',
      image: '/images/hero-cutout-1.png',
      badge1Title: 'Top Specialists',
      badge1Sub: '500+ Expert Doctors',
      badge2Title: 'NABH Accredited',
      badge2Sub: 'Zero Wait OPDs'
    },
    {
      id: 2,
      badgeIcon: ShieldCheck,
      badgeText: 'Advanced Clinical Excellence',
      titlePrefix: "Advanced Robotic Tech & ",
      highlight: "Compassionate Healing",
      titleSuffix: " for Every Family.",
      subtitle: 'Shielding your health with state-of-the-art diagnostics, modular OTs, and transparent patient care.',
      image: '/images/hero-cutout-2.png',
      badge1Title: '24x7 Emergency',
      badge1Sub: 'Super Specialty ICU',
      badge2Title: 'Advanced Tech',
      badge2Sub: 'Robotic & Modular OTs'
    },
    {
      id: 3,
      badgeIcon: Heart,
      badgeText: 'Trusted Healthcare Leader',
      titlePrefix: "Empowering Lives with ",
      highlight: "Expert Medicine",
      titleSuffix: " & Rapid Response.",
      subtitle: 'Region’s premier healthcare network — 8+ Super-Specialty Hospitals and 289+ ICU beds near you.',
      image: '/images/hero-cutout-3.png',
      badge1Title: '8+ Hospitals',
      badge1Sub: 'Across NCR Region',
      badge2Title: '100k+ Patients',
      badge2Sub: 'Trusted Care'
    }
  ];

  return (
    <section className="relative w-full bg-[#C9F5F3] overflow-hidden select-none font-['Outfit',sans-serif]">
      <Swiper
        modules={[Autoplay, Navigation, EffectFade]}
        effect="fade"
        speed={1000}
        autoplay={{
          delay: 6500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        loop={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        navigation={{
          nextEl: '.hero-btn-next',
          prevEl: '.hero-btn-prev'
        }}
        className="w-full h-[520px] sm:h-[580px] md:h-[630px] lg:h-[670px] relative z-10"
      >
        {slides.map((slide, index) => {
          const isActive = activeIndex === index;
          const BadgeIcon = slide.badgeIcon;

          return (
            <SwiperSlide key={slide.id} className="relative w-full h-full overflow-hidden">
              {/* Video Background Layer with Rich Depth Overlay */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  key={`video-${slide.id}`}
                  className="absolute inset-0 w-full h-full object-cover opacity-70 filter brightness-105 contrast-110 transform scale-105 transition-transform duration-1000"
                >
                  <source src="/videos/hero-medical-bg.mp4" type="video/mp4" />
                </video>

                {/* Rich Overlay Gradient (#C9F5F3 -> #DFF8F8) */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#C9F5F3]/95 via-[#DFF8F8]/80 to-[#DFF8F8]/30" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#C9F5F3]/90 via-transparent to-[#DFF8F8]/40" />

                {/* Ambient Glows */}
                <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#C9F5F3] rounded-full blur-[120px] opacity-70 animate-float pointer-events-none" />
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#DFF8F8] rounded-full blur-[140px] opacity-60 animate-float-reverse pointer-events-none" />
              </div>

              {/* Dynamic Animated Heartbeat Pulse Overlay */}
              <div className="absolute bottom-2 left-0 right-0 h-14 pointer-events-none opacity-40 z-10 flex items-center justify-center">
                <svg className="w-full h-10 text-[#0A5F6B]" viewBox="0 0 1200 120" preserveAspectRatio="none">
                  <path
                    d="M0,60 L300,60 L320,40 L340,90 L360,10 L380,110 L400,60 L700,60 L720,30 L740,85 L760,15 L780,105 L800,60 L1200,60"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeDasharray="1200"
                    strokeDashoffset="1200"
                    style={{
                      animation: 'ecgPulse 3.5s cubic-bezier(0.4, 0, 0.6, 1) infinite'
                    }}
                  />
                </svg>
              </div>

              {/* Slide Content Container */}
              <div className="relative z-10 max-w-[1440px] mx-auto h-full pl-16 sm:pl-24 md:pl-28 lg:pl-32 xl:pl-36 pr-8 sm:pr-14 md:pr-20 flex items-center justify-between">
                
                {/* Left Column: Text Content */}
                <div className="max-w-xl sm:max-w-2xl lg:max-w-2xl xl:max-w-3xl text-left py-8">
                  
                  {/* Category Badge Pill */}
                  <div className={`mb-4 transition-all duration-700 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'}`}>
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/95 backdrop-blur-md border border-teal-200/80 text-[#0A5F6B] text-xs sm:text-sm font-bold uppercase tracking-wider shadow-sm font-sans">
                      <BadgeIcon className="w-4 h-4 text-[#0A5F6B] shrink-0" />
                      <span>{slide.badgeText}</span>
                    </div>
                  </div>

                  {/* Main Heading */}
                  <div className={`transition-all duration-700 delay-100 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <h1 className="text-slate-900 font-extrabold text-[38px] sm:text-[48px] md:text-[54px] lg:text-[62px] leading-[1.1] font-sans tracking-tight">
                      {slide.titlePrefix}
                      <span className="relative inline-block text-[#0A5F6B] underline decoration-[#0A5F6B]/30 decoration-wavy decoration-2">
                        {slide.highlight}
                      </span>
                      {slide.titleSuffix}
                    </h1>
                  </div>

                  {/* Subtitle */}
                  <div className={`mt-4 sm:mt-5 transition-all duration-700 delay-200 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <p className="text-slate-700 font-medium text-base sm:text-lg lg:text-[20px] font-sans max-w-2xl leading-relaxed">
                      {slide.subtitle}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className={`mt-8 flex flex-wrap items-center gap-4 transition-all duration-700 delay-300 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    {/* Primary Button */}
                    <button
                      onClick={onOpenAppointment}
                      className="px-7 sm:px-8 py-4 bg-[#0A5F6B] hover:bg-[#07515C] text-white font-bold text-base sm:text-[17px] tracking-wide rounded-2xl shadow-lg shadow-[#0A5F6B]/25 hover:shadow-[#0A5F6B]/40 hover:-translate-y-1 active:translate-y-0 transition-all duration-200 font-sans flex items-center gap-2.5 cursor-pointer shine-sweep btn-pulse"
                    >
                      <Calendar className="w-5 h-5 text-white" />
                      <span>Book Appointment</span>
                    </button>

                    {/* Secondary Button: Find Doctor */}
                    <Link
                      href="/doctors"
                      className="px-7 sm:px-8 py-4 bg-white hover:bg-[#0A5F6B] text-[#0A5F6B] hover:text-white border-2 border-[#0A5F6B] font-bold text-base sm:text-[17px] tracking-wide rounded-2xl transition-all duration-200 font-sans flex items-center gap-2.5 group shadow-sm hover:shadow-md hover:-translate-y-1"
                    >
                      <Stethoscope className="w-5 h-5 text-[#0A5F6B] group-hover:text-white transition-colors" />
                      <span>Find Doctor</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    {/* Tertiary Button: Locations */}
                    <Link
                      href="/locations"
                      className="hidden sm:flex items-center gap-2.5 px-6 py-4 bg-white/80 hover:bg-white text-slate-800 hover:text-[#0A5F6B] border border-slate-300 hover:border-[#0A5F6B] font-bold text-base tracking-wide rounded-2xl transition-all duration-200 font-sans shadow-xs group hover:-translate-y-1"
                    >
                      <MapPin className="w-4 h-4 text-[#0A5F6B]" />
                      <span>Locations</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  {/* Trust Metrics */}
                  <div className={`mt-8 sm:mt-9 hidden sm:flex items-center gap-6 sm:gap-8 pt-5 border-t border-teal-300/60 transition-all duration-700 delay-500 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <div className="flex items-center gap-2">
                      <span className="text-3xl sm:text-[34px] font-black font-sans text-[#0A5F6B]">8+</span>
                      <span className="text-xs sm:text-sm font-bold font-sans tracking-normal text-slate-700 leading-tight">Hospitals<br className="hidden sm:inline" /> in NCR</span>
                    </div>
                    <div className="w-1.5 h-6 rounded-full bg-teal-300/70" />
                    <div className="flex items-center gap-2">
                      <span className="text-3xl sm:text-[34px] font-black font-sans text-[#0A5F6B]">289+</span>
                      <span className="text-xs sm:text-sm font-bold font-sans tracking-normal text-slate-700 leading-tight">Hospital<br className="hidden sm:inline" /> Beds</span>
                    </div>
                    <div className="w-1.5 h-6 rounded-full bg-teal-300/70" />
                    <div className="flex items-center gap-2">
                      <span className="text-3xl sm:text-[34px] font-black font-sans text-[#0A5F6B]">24/7</span>
                      <span className="text-xs sm:text-sm font-bold font-sans tracking-normal text-slate-700 leading-tight">Emergency<br className="hidden sm:inline" /> &amp; ICU</span>
                    </div>
                  </div>
                </div>

                {/* Right Column: Hero Doctor Graphic cutout + Floating Glass Badges */}
                <div className={`hidden lg:flex items-end justify-center h-full relative z-10 w-[440px] xl:w-[500px] shrink-0 transition-all duration-1000 delay-200 ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                  {/* Doctor Cutout Image */}
                  <div className="relative w-full h-[92%] max-h-[560px]">
                    <Image
                      src={slide.image}
                      alt="Medlix Doctor Specialist"
                      fill
                      priority={index === 0}
                      className="object-contain object-bottom drop-shadow-2xl hover:scale-[1.02] transition-transform duration-700"
                    />
                  </div>

                  {/* Top Left Floating Glassmorphism Badge */}
                  <div className="absolute top-12 left-0 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-white/80 shadow-2xl flex items-center gap-3.5 animate-float z-20">
                    <div className="w-12 h-12 rounded-xl bg-[#DFF8F8] text-[#0A5F6B] flex items-center justify-center font-bold shrink-0">
                      <Sparkles className="w-6 h-6 text-[#0A5F6B]" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 font-sans">{slide.badge1Title}</div>
                      <div className="text-xs font-semibold text-slate-500 font-sans">{slide.badge1Sub}</div>
                    </div>
                  </div>

                  {/* Bottom Right Floating Glassmorphism Badge */}
                  <div className="absolute bottom-16 -right-2 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-white/80 shadow-2xl flex items-center gap-3.5 animate-float-reverse z-20">
                    <div className="w-12 h-12 rounded-xl bg-[#0A5F6B] text-white flex items-center justify-center font-bold shrink-0 shadow-md">
                      <ShieldCheck className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 font-sans">{slide.badge2Title}</div>
                      <div className="text-xs font-semibold text-slate-500 font-sans">{slide.badge2Sub}</div>
                    </div>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          );
        })}

        {/* Navigation Arrow Controls */}
        <button 
          aria-label="Previous Slide"
          className="hero-btn-prev absolute left-14 sm:left-18 md:left-22 top-1/2 -translate-y-1/2 z-30 w-9 sm:w-11 h-9 sm:h-11 rounded-full bg-[#0A5F6B]/40 hover:bg-[#0A5F6B] backdrop-blur-md border border-white/30 text-white flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-110 shadow-xl group"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-0.5 transition-transform" />
        </button>

        <button 
          aria-label="Next Slide"
          className="hero-btn-next absolute right-4 sm:right-6 md:right-8 top-1/2 -translate-y-1/2 z-30 w-9 sm:w-11 h-9 sm:h-11 rounded-full bg-[#0A5F6B]/40 hover:bg-[#0A5F6B] backdrop-blur-md border border-white/30 text-white flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-110 shadow-xl group"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-0.5 transition-transform" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
          {slides.map((_, idx) => (
            <div
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                activeIndex === idx 
                  ? 'w-7 bg-[#0A5F6B] shadow-[0_0_8px_rgba(10,95,107,0.8)]' 
                  : 'w-2 bg-[#0A5F6B]/30'
              }`}
            />
          ))}
        </div>
      </Swiper>
    </section>
  );
}
