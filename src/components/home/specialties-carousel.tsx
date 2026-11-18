'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight, Stethoscope } from 'lucide-react';
import medlixData from '@/lib/medlixData.json';
import ParallaxPattern from '@/components/ui/parallax-pattern';
import { SectionHeadingReveal, ScrollReveal } from '@/components/ui/scroll-reveal';

interface SpecialtiesCarouselProps {
  onOpenAppointment?: () => void;
}

export default function SpecialtiesCarousel({ onOpenAppointment }: SpecialtiesCarouselProps) {
  // Focus on 8 flagship popular clinical specialties for the homepage as required
  const allSpecialties = medlixData.specialties || [];
  const popularSpecialties = allSpecialties.slice(0, 8);

  return (
    <section id="specialties" className="relative py-12 sm:py-20 lg:py-36 bg-[#F8FAFC] border-b border-slate-200/80 overflow-hidden font-sans">
      {/* Floating parallax pattern */}
      <ParallaxPattern image="/images/pattern-1.png" position="left" className="-top-12 -left-4 opacity-35 animate-float-reverse" />
      
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Animated Header with 'View All Specialties' link */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-14 lg:mb-20 gap-4 sm:gap-6">
          <SectionHeadingReveal
            badge={
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0A5F6B] bg-[#E6F7F7] px-4 py-1.5 rounded-full border border-teal-200/80 shadow-2xs">
                <Sparkles className="w-4 h-4 text-[#0A5F6B]" />
                <span>Centers of Clinical Excellence</span>
              </div>
            }
            title="Popular Medical Specialties"
            subtitle="Renowned super specialists, cutting-edge surgical technology, and compassionate patient care across our flagship institutes."
            align="left"
            className="mb-0"
          />

          {/* View All Specialties CTA Button */}
          <div className="shrink-0">
            <Link
              href="/department"
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-2xl bg-white hover:bg-[#0A5F6B] text-[#0A5F6B] hover:text-white border border-teal-200 hover:border-[#0A5F6B] text-xs sm:text-sm font-bold uppercase tracking-wider shadow-sm hover:shadow-md transition-all duration-200 group"
            >
              <span>View All Specialties ({allSpecialties.length})</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Carousel Container with Controls */}
        <ScrollReveal direction="up" duration={0.7} delay={0.15}>
          <div className="relative group/carousel">
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation={{
                nextEl: '.spec-next-btn',
                prevEl: '.spec-prev-btn'
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
              }}
              loop={true}
              spaceBetween={16}
              slidesPerView={1.2}
              breakpoints={{
                480: { slidesPerView: 2, spaceBetween: 20 },
                640: { slidesPerView: 2.5, spaceBetween: 24 },
                768: { slidesPerView: 3, spaceBetween: 28 },
                1024: { slidesPerView: 4, spaceBetween: 28 },
                1280: { slidesPerView: 4, spaceBetween: 32 }
              }}
              className="pb-8 pt-2"
            >
              {popularSpecialties.map((spec, index) => (
                <SwiperSlide key={index} className="h-auto">
                  <div 
                    onClick={onOpenAppointment}
                    className="group h-full bg-white rounded-3xl border border-slate-200/90 shadow-[0_4px_20px_rgba(10,37,64,0.04)] hover:shadow-[0_22px_45px_rgba(10,95,107,0.14)] hover:-translate-y-2 hover:border-[#0A5F6B] transition-all duration-300 p-5 sm:p-7 lg:p-9 flex flex-col justify-between cursor-pointer relative overflow-hidden"
                  >
                    {/* Top brand accent line on hover */}
                    <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#0A5F6B] via-[#2DD4BF] to-[#0A5F6B] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Ambient Glow */}
                    <div className="absolute -right-8 -bottom-8 w-28 h-28 bg-[#C9F5F3]/30 rounded-full blur-xl group-hover:bg-[#0A5F6B]/10 transition-colors pointer-events-none" />

                    <div>
                      {/* Specialty Image Container */}
                      <div className="relative w-full h-32 sm:h-40 lg:h-44 mb-4 sm:mb-6 p-3 sm:p-4 rounded-2xl bg-gradient-to-b from-slate-50 to-[#E6F7F7]/60 group-hover:from-[#E6F7F7] group-hover:to-[#D5F4F4] transition-all duration-300 flex items-center justify-center border border-slate-100 group-hover:border-teal-200/80 shadow-2xs">
                        <Image
                          src={(spec as any).icon || (spec as any).image || '/images/specialties/cardiology.png'}
                          alt={spec.title}
                          width={120}
                          height={120}
                          className="object-contain group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>

                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl font-bold text-[#0A2540] group-hover:text-[#0A5F6B] transition-colors leading-snug mb-3">
                        {spec.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm sm:text-[14.5px] text-slate-600 line-clamp-3 leading-relaxed">
                        {spec.desc}
                      </p>
                    </div>

                    {/* Consult Specialist Button */}
                    <div className="mt-8 pt-5 border-t border-slate-100 w-full flex items-center justify-between">
                      <span className="text-sm font-bold text-[#0A5F6B] group-hover:underline">
                        Consult Specialist
                      </span>
                      <span className="w-9 h-9 rounded-full bg-[#E6F7F7] text-[#0A5F6B] group-hover:bg-[#0A5F6B] group-hover:text-white flex items-center justify-center transition-colors">
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Controls */}
            <button
              className="spec-prev-btn absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-11 sm:w-12 h-11 sm:h-12 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 text-slate-800 hover:bg-[#0A5F6B] hover:text-white hover:border-[#0A5F6B] flex items-center justify-center transition-all shadow-xl cursor-pointer hover:scale-105"
              aria-label="Previous specialty"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              className="spec-next-btn absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-11 sm:w-12 h-11 sm:h-12 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 text-slate-800 hover:bg-[#0A5F6B] hover:text-white hover:border-[#0A5F6B] flex items-center justify-center transition-all shadow-xl cursor-pointer hover:scale-105"
              aria-label="Next specialty"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
