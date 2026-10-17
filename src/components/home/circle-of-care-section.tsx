'use client';

import React, { useState } from 'react';
import { Heart, ShieldCheck, UserCheck, Sparkles, BookOpen, Award, CheckCircle2 } from 'lucide-react';
import medlixData from '@/lib/medlixData.json';
import { SectionHeadingReveal, ScrollReveal } from '@/components/ui/scroll-reveal';

export default function CircleOfCareSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);
  const values = medlixData.circleOfCare;

  const valueMeta = [
    { letter: 'C', word: 'Care', icon: <Heart className="w-6 h-6" /> },
    { letter: 'I', word: 'Integrity', icon: <ShieldCheck className="w-6 h-6" /> },
    { letter: 'R', word: 'Respect', icon: <UserCheck className="w-6 h-6" /> },
    { letter: 'C', word: 'Compassion', icon: <Sparkles className="w-6 h-6" /> },
    { letter: 'L', word: 'Learning', icon: <BookOpen className="w-6 h-6" /> },
    { letter: 'E', word: 'Excellence', icon: <Award className="w-6 h-6" /> }
  ];

  return (
    <section id="circle-of-care" className="py-24 sm:py-32 bg-white border-b border-slate-200/80 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated Section Header */}
        <SectionHeadingReveal
          badge={
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0A5F6B] bg-[#E6F7F7] px-4 py-1.5 rounded-full border border-teal-200/80 shadow-2xs font-sans">
              <Sparkles className="w-4 h-4 text-[#0A5F6B]" />
              <span>Guiding Principles</span>
            </div>
          }
          title="The CIRCLE of Care: Our Core Values"
          subtitle="Our commitment to treating every patient with compassion, clinical excellence, and absolute integrity."
          className="mb-16 sm:mb-20"
        />

        {/* 6 Value Cards with Healthcare Teal Theme */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
          {values.map((val, idx) => {
            const meta = valueMeta[idx];
            const isHovered = hoveredIndex === idx;

            return (
              <ScrollReveal
                key={idx}
                direction="up"
                duration={0.6}
                delay={0.1 + (idx % 3) * 0.15 + Math.floor(idx / 3) * 0.1}
              >
                <div
                  onMouseEnter={() => setHoveredIndex(idx)}
                  className={`relative rounded-3xl p-8 sm:p-10 border transition-all duration-400 flex flex-col justify-between group overflow-hidden cursor-pointer h-full ${
                    isHovered
                      ? 'bg-[#0A5F6B] text-white border-transparent shadow-[0_24px_50px_rgba(10,95,107,0.28)] -translate-y-2'
                      : 'bg-[#F8FAFC] text-slate-900 border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-xl hover:-translate-y-1'
                  }`}
                >
                  <div>
                    {/* Top Letter Badge & Icon */}
                    <div className="flex items-center justify-between mb-7">
                      <span 
                        className={`w-16 h-16 rounded-2xl font-black text-2xl font-sans flex items-center justify-center transition-all duration-300 ${
                          isHovered 
                            ? 'bg-white text-[#0A5F6B] shadow-xl scale-105' 
                            : 'bg-white text-[#0A5F6B] border border-teal-200/80 shadow-sm'
                        }`}
                      >
                        {meta.letter}
                      </span>

                      <div className={`p-3.5 rounded-2xl transition-all duration-300 ${
                        isHovered 
                          ? 'bg-white/15 text-white scale-110' 
                          : 'bg-[#E6F7F7] text-[#0A5F6B]'
                      }`}>
                        {meta.icon}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className={`text-2xl sm:text-3xl font-bold font-sans mb-3 transition-colors ${
                      isHovered ? 'text-white' : 'text-slate-900'
                    }`}>
                      {val.title}
                    </h3>

                    {/* Description */}
                    <p className={`text-base sm:text-[17.5px] font-normal font-sans leading-relaxed transition-colors ${
                      isHovered ? 'text-white/95' : 'text-slate-600'
                    }`}>
                      {val.desc}
                    </p>
                  </div>

                  {/* Bottom Verification Accent */}
                  <div className={`mt-8 pt-5 border-t flex items-center justify-between text-xs sm:text-sm font-semibold ${
                    isHovered ? 'border-white/20 text-white' : 'border-slate-200 text-[#0A5F6B]'
                  }`}>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span className="font-sans tracking-wider uppercase text-xs font-bold">
                        Core Medlix Value
                      </span>
                    </div>
                    <span className={`text-xs font-bold font-sans ${isHovered ? 'text-white' : 'text-[#0A5F6B]'}`}>
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
