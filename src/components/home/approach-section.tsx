'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import medlixData from '@/lib/medlixData.json';
import { SectionHeadingReveal, ScrollReveal } from '@/components/ui/scroll-reveal';

export default function ApproachSection() {
  const approaches = medlixData.approach;
  const sectionRef = useRef<HTMLElement>(null);
  const [offsetY, setOffsetY] = useState(0);

  const images = [
    '/images/approach/expert-care.jpg',
    '/images/approach/advanced-accessible.jpg',
    '/images/approach/care-focused.jpg',
    '/images/approach/patient-centered.jpg'
  ];

  // Parallax scroll effect for medical-bg.jpg
  useEffect(() => {
    let animId: number;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight && rect.bottom > 0) {
        const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
        const movement = (progress - 0.5) * 100;
        setOffsetY(movement);
      }
    };

    const onScroll = () => {
      animId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <section 
      id="approach" 
      ref={sectionRef}
      className="relative overflow-hidden py-12 sm:py-20 lg:py-36 bg-white border-b border-slate-200/80 font-sans"
    >
      {/* 
        Exact Medlix Background Image (medical-bg.jpg) with Parallax Scroll Animation 
        Original URL: https://medlix.in/wp-content/uploads/2024/11/medical-bg.jpg
      */}
      <div 
        className="absolute inset-x-0 -top-[20%] h-[140%] w-full bg-center bg-cover bg-no-repeat pointer-events-none will-change-transform opacity-30"
        style={{
          backgroundImage: "url('/images/medical-bg.jpg')",
          transform: `translate3d(0, ${offsetY}px, 0)`
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeadingReveal
          badge={
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0A5F6B] bg-[#E6F7F7] px-4 py-1.5 rounded-full border border-teal-200/80 inline-block shadow-2xs">
              Clinical Methodology
            </span>
          }
          title="The Medlix Approach"
          subtitle="How our hospital systems ensure safety, clinical superiority, and seamless healing."
          className="mb-8 sm:mb-14 lg:mb-20"
        />


        {/* 2x2 Grid with generous spacing and improved readability */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-10 lg:gap-12">
          {approaches.map((app, idx) => (
            <ScrollReveal
              key={idx}
              direction="up"
              duration={0.65}
              delay={0.15 * idx}
            >
              <div
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-[0_8px_25px_rgba(0,0,0,0.04)] hover:shadow-[0_22px_45px_rgba(10,95,107,0.16)] hover:border-[#0A5F6B]/60 transition-all duration-300 flex flex-col group hover:-translate-y-2 h-full"
              >
                <div className="relative h-52 sm:h-72 lg:h-80 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={images[idx]}
                    alt={app.title}
                    fill
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity" />
                  
                  {/* Step Pill */}
                  <div className="absolute top-4 left-4 sm:top-5 sm:left-5 bg-white/95 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-bold text-[#0A5F6B] shadow-md border border-teal-200/60 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#0A5F6B]" />
                    <span>Protocol 0{idx + 1}</span>
                  </div>
                </div>

                <div className="p-5 sm:p-8 lg:p-10 space-y-4 sm:space-y-5 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#0A2540] group-hover:text-[#0A5F6B] transition-colors leading-snug">
                      {app.title}
                    </h3>
                    <p className="text-base sm:text-[17px] text-slate-600 leading-relaxed font-normal">
                      {app.desc}
                    </p>
                  </div>

                  <div className="pt-5 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm font-bold text-[#0A5F6B]">
                    <span>Evidence-Based Healthcare</span>
                    <span className="text-[#0A5F6B] group-hover:translate-x-1 transition-transform">✓ Standardized</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
