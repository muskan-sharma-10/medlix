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
      className="relative overflow-hidden py-24 bg-white border-b border-slate-100"
    >
      {/* 
        Exact Medlix Background Image (medical-bg.jpg) with Parallax Scroll Animation 
        Original URL: https://medlix.in/wp-content/uploads/2024/11/medical-bg.jpg
      */}
      <div 
        className="absolute inset-x-0 -top-[20%] h-[140%] w-full bg-center bg-cover bg-no-repeat pointer-events-none will-change-transform opacity-40"
        style={{
          backgroundImage: "url('/images/medical-bg.jpg')",
          transform: `translate3d(0, ${offsetY}px, 0)`
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeadingReveal
          badge={
            <span className="text-xs font-bold uppercase tracking-wider text-[#0A5F6B] bg-[#DFF8F8] px-3.5 py-1 rounded-full border border-[#C4DFDF] font-exo inline-block shadow-2xs">
              Clinical Methodology
            </span>
          }
          title="The Medlix Approach"
          subtitle="How our hospital systems ensure safety, clinical superiority, and seamless healing."
          className="mb-16"
        />


        {/* 2x2 Grid with real photos matching medlix.in */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {approaches.map((app, idx) => (
            <ScrollReveal
              key={idx}
              direction="up"
              duration={0.65}
              delay={0.15 * idx}
            >
              <div
                className="bg-white rounded-3xl overflow-hidden border border-[#C4DFDF] shadow-[0_8px_25px_rgba(0,0,0,0.04)] hover:shadow-[0_22px_45px_rgba(10,95,107,0.16)] hover:border-[#0A5F6B]/40 transition-all duration-300 flex flex-col group hover:-translate-y-2 h-full"
              >
                <div className="relative h-64 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={images[idx]}
                    alt={app.title}
                    fill
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity" />
                  
                  {/* Step Pill */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-xl text-xs font-bold text-[#0A5F6B] font-exo shadow-md border border-[#C4DFDF] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0A5F6B]" />
                    <span>Protocol 0{idx + 1}</span>
                  </div>
                </div>

                <div className="p-8 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2.5">
                    <h3 className="text-2xl font-bold text-[#29363A] group-hover:text-[#0A5F6B] transition-colors font-exo leading-snug">
                      {app.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#719497] leading-relaxed font-roboto">
                      {app.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#C4DFDF] flex items-center justify-between text-xs font-bold font-exo text-[#0A5F6B]">
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
