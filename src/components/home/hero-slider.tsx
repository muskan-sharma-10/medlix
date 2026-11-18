'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, EffectFade } from 'swiper/modules';
import { 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  ShieldCheck, 
  Heart, 
  Calendar, 
  Phone, 
  ArrowRight, 
  Stethoscope, 
  MapPin,
  Clock,
  Activity,
  Award,
  CheckCircle2,
  Building2
} from 'lucide-react';

interface HeroSliderProps {
  onOpenAppointment?: () => void;
}

export default function HeroSlider({ onOpenAppointment }: HeroSliderProps = {}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      id: 1,
      badgeText: '24/7 Super-Specialty Emergency & ICU',
      badgeIcon: Activity,
      headlineMain: 'Advanced Medical Care,',
      headlineAccent: 'Empathetic Healing.',
      subtitle: 'Experience world-class treatment from 500+ super specialists with zero-wait OPDs, cutting-edge surgical robotics, and transparent clinical care across NCR.',
      image: '/images/hero-cutout-1.png',
      badge1Title: 'NABH Accredited',
      badge1Sub: 'Zero-Wait OPD Consultations',
      badge2Title: '24x7 Trauma & ICU',
      badge2Sub: 'Advanced Life Support Systems',
      ctaPrimary: 'Book Appointment',
      ctaSecondary: 'Find a Doctor',
      linkSecondary: '/doctors'
    },
    {
      id: 2,
      badgeText: 'Centers of Clinical Excellence',
      badgeIcon: Award,
      headlineMain: 'Robotic Precision &',
      headlineAccent: 'Comprehensive Care.',
      subtitle: 'From complex cardiac interventions and neurosurgery to robotic joint replacements—delivering unmatched clinical outcomes for your family.',
      image: '/images/hero-cutout-2.png',
      badge1Title: 'Modern Modular OTs',
      badge1Sub: 'Minimally Invasive Surgery',
      badge2Title: '500+ Expert Doctors',
      badge2Sub: 'Senior Super Specialists',
      ctaPrimary: 'Consult Specialist',
      ctaSecondary: 'Explore Specialties',
      linkSecondary: '/department'
    },
    {
      id: 3,
      badgeText: 'Trusted Multi-Center Healthcare Network',
      badgeIcon: ShieldCheck,
      headlineMain: '8 Multispecialty Hospitals,',
      headlineAccent: 'One Trusted Standard.',
      subtitle: 'Accessible healthcare spanning Gurugram, Manesar, Rewari, Palwal, and Greater Noida with 100% cashless TPA and government panel approvals.',
      image: '/images/hero-cutout-3.png',
      badge1Title: '8+ NCR Hospitals',
      badge1Sub: 'Gurugram • Palwal • Rewari',
      badge2Title: '100% Cashless Panels',
      badge2Sub: 'CGHS, ECHS & 30+ TPAs',
      ctaPrimary: 'Book Appointment',
      ctaSecondary: 'Find Nearest Branch',
      linkSecondary: '/locations'
    }
  ];

  return (
    <section className="relative w-full overflow-hidden select-none font-sans bg-[#0A192F]">
      
      {/* Video Background Layer with Cinematic Navy/Teal Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-35 filter brightness-90 contrast-110"
        >
          <source src="/videos/hero-medical-bg.mp4" type="video/mp4" />
        </video>
        {/* Modern Medical Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F] via-[#0A2540]/90 to-[#0A5F6B]/60" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-[#0A192F]/80" />
      </div>

      {/* Decorative luminous orbs */}
      <div className="absolute -top-32 right-1/4 w-96 h-96 bg-teal-400/15 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute -bottom-24 left-10 w-96 h-96 bg-[#0A5F6B]/30 rounded-full blur-3xl pointer-events-none z-0" />

      {/* Swiper Hero Slider */}
      <div className="relative z-10 max-w-[1440px] mx-auto">
        <Swiper
          modules={[Autoplay, Navigation, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={850}
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
          className="w-full relative"
        >
          {slides.map((slide, index) => {
            const isActive = activeIndex === index;
            const BadgeIcon = slide.badgeIcon;

            return (
              <SwiperSlide key={slide.id} className="relative w-full">
                <div className="px-4 sm:px-8 lg:px-14 pt-6 sm:pt-12 lg:pt-22 pb-12 sm:pb-20 lg:pb-28 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-10 lg:gap-14 min-h-0 lg:min-h-[660px]">
                  
                  {/* Left Column: Headline, Copy & CTAs */}
                  <div className="w-full lg:max-w-2xl xl:max-w-[720px] text-left z-10">
                    
                    {/* Badge Pill */}
                    <div className="mb-4 sm:mb-6">
                      <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-teal-500/15 border border-teal-400/30 text-teal-300 text-[11px] sm:text-sm font-bold uppercase tracking-wider backdrop-blur-md shadow-sm">
                        <BadgeIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-teal-300 shrink-0" />
                        <span>{slide.badgeText}</span>
                      </span>
                    </div>

                    {/* Main Headline */}
                    <div>
                      <h1 className="text-2xl sm:text-4xl lg:text-[56px] xl:text-[60px] font-black text-white tracking-tight leading-[1.2] lg:leading-[1.15]">
                        {slide.headlineMain}{' '}
                        <span className="bg-gradient-to-r from-teal-300 via-teal-200 to-emerald-300 bg-clip-text text-transparent">
                          {slide.headlineAccent}
                        </span>
                      </h1>
                    </div>

                    {/* Supporting Description */}
                    <div className="mt-3.5 sm:mt-6">
                      <p className="text-slate-200 text-sm sm:text-lg lg:text-[19px] leading-relaxed font-normal max-w-2xl">
                        {slide.subtitle}
                      </p>
                    </div>

                    {/* CTA Actions */}
                    <div className="mt-6 sm:mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-5">
                      {/* Primary Button */}
                      <button
                        onClick={onOpenAppointment}
                        className="w-full sm:w-auto justify-center px-6 sm:px-8 py-3.5 sm:py-4 bg-[#14B8A6] hover:bg-[#0D9488] text-[#0A192F] font-extrabold text-sm sm:text-base rounded-2xl shadow-lg shadow-teal-500/30 hover:shadow-xl hover:shadow-teal-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center gap-2.5 cursor-pointer shine-sweep"
                      >
                        <Calendar className="w-5 h-5 text-[#0A192F]" />
                        <span>{slide.ctaPrimary}</span>
                      </button>

                      {/* Secondary Action */}
                      <Link
                        href={slide.linkSecondary}
                        className="w-full sm:w-auto justify-center px-6 sm:px-7 py-3.5 sm:py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40 font-bold text-sm sm:text-base rounded-2xl backdrop-blur-md shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2 group"
                      >
                        <Stethoscope className="w-5 h-5 text-teal-300" />
                        <span>{slide.ctaSecondary}</span>
                        <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-white group-hover:translate-x-1 transition-transform" />
                      </Link>

                      {/* Emergency Callout */}
                      <a
                        href="tel:+919220143473"
                        className="hidden sm:inline-flex items-center gap-2 px-5 py-4 rounded-2xl text-rose-200 hover:text-white bg-rose-600/30 hover:bg-rose-600/50 border border-rose-500/40 text-xs sm:text-sm font-bold transition-all backdrop-blur-md"
                      >
                        <Phone className="w-4 h-4 text-rose-300" />
                        <span>24/7 Helpline: +91-9220143473</span>
                      </a>
                    </div>

                    {/* Compact Trust Indicators Strip */}
                    <div className="mt-6 sm:mt-9 pt-5 sm:pt-7 border-t border-white/15 flex flex-wrap items-center gap-2.5 sm:gap-6 text-xs sm:text-[13px] font-semibold text-slate-300">
                      <span className="flex items-center gap-1.5 text-teal-300">
                        <CheckCircle2 className="w-4 h-4 text-teal-400" />
                        <span>Guaranteed Zero-Wait OPD</span>
                      </span>
                      <span className="text-white/20 hidden sm:inline">•</span>
                      <span className="flex items-center gap-1.5 text-slate-200">
                        <ShieldCheck className="w-4 h-4 text-teal-400" />
                        <span>100% Cashless TPA Network</span>
                      </span>
                      <span className="text-white/20 hidden sm:inline">•</span>
                      <span className="flex items-center gap-1.5 text-slate-200">
                        <Activity className="w-4 h-4 text-teal-400" />
                        <span>24/7 ICU &amp; Level-1 Trauma</span>
                      </span>
                    </div>

                  </div>

                  {/* Right Column: Doctor Specialist Imagery with Badges */}
                  <div className="w-full lg:w-[460px] xl:w-[520px] flex items-center justify-center relative shrink-0 mt-2 lg:mt-0">
                    
                    {/* Glowing Backing Frame */}
                    <div className="relative w-full max-w-[340px] sm:max-w-none h-[280px] sm:h-[400px] lg:h-[460px] rounded-3xl overflow-hidden border border-teal-500/30 bg-gradient-to-b from-white/10 to-teal-950/40 backdrop-blur-md shadow-2xl flex items-end justify-center mx-auto">
                      <Image
                        src={slide.image}
                        alt="Medlix Hospital Doctor Specialist"
                        fill
                        priority={index === 0}
                        className="object-contain object-bottom drop-shadow-2xl"
                      />
                    </div>

                    {/* Top Floating Glass Badge */}
                    <div className="absolute top-3 left-2 sm:-left-6 bg-[#0A192F]/90 backdrop-blur-md p-2.5 sm:p-3.5 rounded-2xl border border-teal-500/30 shadow-2xl flex items-center gap-2.5 sm:gap-3 animate-float z-20">
                      <div className="w-8 sm:w-11 h-8 sm:h-11 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center shrink-0">
                        <Sparkles className="w-4 sm:w-5 h-4 sm:h-5 text-teal-300" />
                      </div>
                      <div>
                        <div className="text-[11px] sm:text-sm font-bold text-white leading-tight">{slide.badge1Title}</div>
                        <div className="text-[10px] sm:text-[11px] font-semibold text-teal-200/80 mt-0.5">{slide.badge1Sub}</div>
                      </div>
                    </div>

                    {/* Bottom Floating Glass Badge */}
                    <div className="absolute bottom-3 right-2 sm:-right-4 bg-[#0A192F]/90 backdrop-blur-md p-2.5 sm:p-3.5 rounded-2xl border border-teal-500/30 shadow-2xl flex items-center gap-2.5 sm:gap-3 animate-float-reverse z-20">
                      <div className="w-8 sm:w-11 h-8 sm:h-11 rounded-xl bg-teal-500 text-[#0A192F] flex items-center justify-center shrink-0 shadow-md">
                        <ShieldCheck className="w-4 sm:w-5 h-4 sm:h-5 text-[#0A192F]" />
                      </div>
                      <div>
                        <div className="text-[11px] sm:text-sm font-bold text-white leading-tight">{slide.badge2Title}</div>
                        <div className="text-[10px] sm:text-[11px] font-semibold text-teal-200/80 mt-0.5">{slide.badge2Sub}</div>
                      </div>
                    </div>

                  </div>

                </div>
              </SwiperSlide>
            );
          })}

          {/* Navigation Controls (Arrows) */}
          <div className="hidden sm:flex absolute bottom-5 right-6 sm:right-10 z-30 items-center gap-2.5">
            <button 
              aria-label="Previous Slide"
              className="hero-btn-prev w-11 h-11 rounded-full bg-white/10 hover:bg-[#14B8A6] text-white hover:text-[#0A192F] border border-white/20 flex items-center justify-center transition-all duration-200 backdrop-blur-md shadow-lg cursor-pointer hover:scale-105"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button 
              aria-label="Next Slide"
              className="hero-btn-next w-11 h-11 rounded-full bg-white/10 hover:bg-[#14B8A6] text-white hover:text-[#0A192F] border border-white/20 flex items-center justify-center transition-all duration-200 backdrop-blur-md shadow-lg cursor-pointer hover:scale-105"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Pagination Indicators */}
          <div className="absolute bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
            {slides.map((_, idx) => (
              <span
                key={idx}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === idx 
                    ? 'w-8 bg-teal-400 shadow-sm' 
                    : 'w-2 bg-white/30'
                }`}
              />
            ))}
          </div>

        </Swiper>
      </div>

    </section>
  );
}
