'use client';

import React, { useState } from 'react';
import { Heart, ShieldCheck, UserCheck, Sparkles, BookOpen, Award, CheckCircle2 } from 'lucide-react';
import medlixData from '@/lib/medlixData.json';
import { SectionHeadingReveal, ScrollReveal } from '@/components/ui/scroll-reveal';

export default function CircleOfCareSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);
  const values = medlixData.circleOfCare || [];

  const valueMeta = [
    { letter: 'C', word: 'Care', icon: <Heart className="w-5 h-5 sm:w-6 sm:h-6" /> },
    { letter: 'I', word: 'Integrity', icon: <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" /> },
    { letter: 'R', word: 'Respect', icon: <UserCheck className="w-5 h-5 sm:w-6 sm:h-6" /> },
    { letter: 'C', word: 'Compassion', icon: <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" /> },
    { letter: 'L', word: 'Learning', icon: <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" /> },
    { letter: 'E', word: 'Excellence', icon: <Award className="w-5 h-5 sm:w-6 sm:h-6" /> }
  ];

  return (
    <section id="circle-of-care" className="py-20 sm:py-28 bg-white border-b border-slate-200/80 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Animated Section Header */}
        <SectionHeadingReveal
          badge={
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0A5F6B] bg-[#E6F7F7] px-4 py-1.5 rounded-full border border-teal-200/80 shadow-2xs">
              <Sparkles className="w-4 h-4 text-[#0A5F6B]" />
              <span>Guiding Principles</span>
            </div>
          }
          title="The CIRCLE of Care: Our Core Values"
          subtitle="Our sacred commitment to treating every patient with compassion, clinical excellence, and absolute integrity."
          className="mb-14 sm:mb-18"
        />

        {/* 6 Value Cards with Healthcare Teal Theme */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {values.map((val, idx) => {
            const meta = valueMeta[idx];
            const isHovered = hoveredIndex === idx;

            return (
              <ScrollReveal
                key={idx}
                direction="up"
                duration={0.55}
                delay={0.08 * idx}
              >
                <div
                  onMouseEnter={() => setHoveredIndex(idx)}
                  className={`relative rounded-3xl p-7 sm:p-8 border transition-all duration-300 flex flex-col justify-between group overflow-hidden cursor-pointer h-full ${
                    isHovered
                      ? 'bg-[#0A5F6B] text-white border-transparent shadow-[0_20px_45px_rgba(10,95,107,0.26)] -translate-y-1.5'
                      : 'bg-[#F8FAFC] text-slate-900 border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-lg hover:-translate-y-1'
                  }`}
                >
                  <div>
                    {/* Top Letter Badge & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <span 
                        className={`w-14 h-14 rounded-2xl font-black text-2xl flex items-center justify-center transition-all duration-300 ${
                          isHovered 
                            ? 'bg-white text-[#0A5F6B] shadow-lg scale-105' 
                            : 'bg-white text-[#0A5F6B] border border-teal-200/80 shadow-2xs'
                        }`}
                      >
                        {meta.letter}
                      </span>

                      <div className={`p-3 rounded-2xl transition-all duration-300 ${
                        isHovered 
                          ? 'bg-white/15 text-white scale-110' 
                          : 'bg-[#E6F7F7] text-[#0A5F6B]'
                      }`}>
                        {meta.icon}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className={`text-xl sm:text-2xl font-bold mb-2.5 transition-colors ${
                      isHovered ? 'text-white' : 'text-[#0A2540]'
                    }`}>
                      {val.title}
                    </h3>

                    {/* Description */}
                    <p className={`text-sm sm:text-[15px] font-normal leading-relaxed transition-colors ${
                      isHovered ? 'text-white/95' : 'text-slate-600'
                    }`}>
                      {val.desc}
                    </p>
                  </div>

                  {/* Bottom Verification Accent */}
                  <div className={`mt-7 pt-4 border-t flex items-center justify-between text-xs font-semibold ${
                    isHovered ? 'border-white/20 text-white' : 'border-slate-200 text-[#0A5F6B]'
                  }`}>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                      <span className="tracking-wider uppercase text-[11px] font-bold">
                        Core Principle
                      </span>
                    </div>
                    <span className={`text-xs font-bold ${isHovered ? 'text-white' : 'text-[#0A5F6B]'}`}>
                      0{idx + 1}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
