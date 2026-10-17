'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight } from 'lucide-react';
import medlixData from '@/lib/medlixData.json';
import ParallaxPattern from '@/components/ui/parallax-pattern';
import { SectionHeadingReveal, ScrollReveal } from '@/components/ui/scroll-reveal';

interface SpecialtiesCarouselProps {
  onOpenAppointment?: () => void;
}

export default function SpecialtiesCarousel({ onOpenAppointment }: SpecialtiesCarouselProps) {
  const specialties = medlixData.specialties;

  return (
    <section id="specialties" className="relative py-24 sm:py-32 bg-[#F8FAFC] border-b border-slate-200/80 overflow-hidden font-sans">
      {/* Floating parallax pattern */}
      <ParallaxPattern image="/images/pattern-1.png" position="left" className="-top-12 -left-4 opacity-40 animate-float-reverse" />
      
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* Animated Center-Aligned Header */}
        <SectionHeadingReveal
          badge={
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0A5F6B] bg-[#E6F7F7] px-4 py-1.5 rounded-full border border-teal-200/80 font-sans shadow-2xs">
              <Sparkles className="w-4 h-4 text-[#0A5F6B]" />
              <span>Centers of Clinical Excellence</span>
            </div>
          }
          title="Clinical Institutes & Specialities"
          subtitle="World-class medical institutes driven by renowned super specialists, cutting-edge surgical technology, and compassionate patient care."
          className="mb-16 sm:mb-20"
        />

        {/* Carousel Container with Arrows */}
        <ScrollReveal direction="up" duration={0.7} delay={0.2}>
          <div className="relative group/carousel">
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation={{
                nextEl: '.spec-next-btn',
                prevEl: '.spec-prev-btn'
              }}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
              }}
              loop={true}
              spaceBetween={28}
              slidesPerView={1.2}
              breakpoints={{
                480: { slidesPerView: 2, spaceBetween: 24 },
                640: { slidesPerView: 2.5, spaceBetween: 24 },
                768: { slidesPerView: 3, spaceBetween: 28 },
                1024: { slidesPerView: 4, spaceBetween: 28 },
                1280: { slidesPerView: 4.5, spaceBetween: 30 }
              }}
              className="pb-8 pt-3"
            >
              {specialties.map((spec, index) => (
                <SwiperSlide key={index} className="h-auto">
                  <div 
                    onClick={onOpenAppointment}
                    className="group h-full bg-white rounded-3xl border border-slate-200/90 shadow-[0_4px_20px_rgba(10,95,107,0.04)] hover:shadow-[0_22px_45px_rgba(10,95,107,0.14)] hover:-translate-y-2 hover:border-[#0A5F6B] transition-all duration-300 p-7 sm:p-8 flex flex-col items-center text-center cursor-pointer relative overflow-hidden"
                  >
                    {/* Top brand accent line on hover */}
                    <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#0A5F6B] via-[#2DD4BF] to-[#0A5F6B] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Ambient Glow */}
                    <div className="absolute -right-8 -bottom-8 w-28 h-28 bg-[#C9F5F3]/30 rounded-full blur-xl group-hover:bg-[#0A5F6B]/10 transition-colors pointer-events-none" />

                    {/* Specialty Image Container */}
                    <div className="relative w-40 h-40 mb-5 p-4 rounded-2xl bg-gradient-to-b from-[#F8FAFC] to-[#E6F7F7] group-hover:from-[#E6F7F7] group-hover:to-[#D5F4F4] group-hover:scale-105 transition-all duration-300 flex items-center justify-center border border-slate-200 group-hover:border-teal-300 shadow-sm">
                      <Image
                        src={(spec as any).icon || (spec as any).image || '/images/specialties/cardiology.png'}
                        alt={spec.title}
                        width={130}
                        height={130}
                        className="object-contain group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-sans group-hover:text-[#0A5F6B] transition-colors mt-2 min-h-[56px] flex items-center justify-center leading-snug">
                      {spec.title}
                    </h3>

                    {/* Consult Specialist Button */}
                    <div className="mt-5 pt-4 border-t border-slate-100 w-full flex items-center justify-center">
                      <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#E6F7F7] text-[#0A5F6B] group-hover:bg-[#0A5F6B] group-hover:text-white text-xs sm:text-sm font-bold font-sans uppercase tracking-wider transition-all duration-300 shadow-2xs border border-teal-200/80">
                        <span>Consult Specialist</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Controls */}
            <button
              className="spec-prev-btn absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 z-20 w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 text-slate-800 hover:bg-[#0A5F6B] hover:text-white hover:border-[#0A5F6B] flex items-center justify-center transition-all shadow-xl cursor-pointer hover:scale-110"
              aria-label="Previous specialty"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              className="spec-next-btn absolute -right-4 sm:-right-6 top-1/2 -translate-y-1/2 z-20 w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 text-slate-800 hover:bg-[#0A5F6B] hover:text-white hover:border-[#0A5F6B] flex items-center justify-center transition-all shadow-xl cursor-pointer hover:scale-110"
              aria-label="Next specialty"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
