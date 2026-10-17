'use client';

import React from 'react';
import { 
  Stethoscope, 
  Users, 
  HeartHandshake, 
  Cpu, 
  Clock, 
  Building2,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import medlixData from '@/lib/medlixData.json';
import { SectionHeadingReveal, ScrollReveal } from '@/components/ui/scroll-reveal';

export default function WhyChooseSection() {
  const items = medlixData.whyChoose;

  const icons = [
    <Stethoscope key="0" className="w-6 h-6" />,
    <Users key="1" className="w-6 h-6" />,
    <HeartHandshake key="2" className="w-6 h-6" />,
    <Cpu key="3" className="w-6 h-6" />,
    <Clock key="4" className="w-6 h-6" />,
    <Building2 key="5" className="w-6 h-6" />
  ];

  return (
    <section id="why-choose" className="py-24 sm:py-32 bg-[#F8FAFC] border-b border-slate-200/80 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeadingReveal
          badge={
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0A5F6B] bg-[#E6F7F7] px-4 py-1.5 rounded-full border border-teal-200/80 font-sans shadow-2xs">
              <Sparkles className="w-4 h-4 text-[#0A5F6B]" />
              <span>Healthcare Excellence</span>
            </div>
          }
          title="Why Choose Medlix Hospital"
          subtitle="Delivering comprehensive, patient-centered care with state-of-the-art medical technology, renowned super specialists, and zero-wait OPDs."
          className="mb-16 sm:mb-20"
        />

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {items.map((item, index) => (
            <ScrollReveal 
              key={index}
              direction="up" 
              duration={0.6} 
              delay={0.1 + (index % 3) * 0.12 + Math.floor(index / 3) * 0.1}
            >
              <div
                className="bg-white rounded-3xl p-8 sm:p-9 shadow-[0_4px_20px_rgba(10,95,107,0.04)] border border-slate-200/90 hover:shadow-[0_22px_45px_rgba(10,95,107,0.14)] hover:border-[#0A5F6B] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-2 relative h-full cursor-default overflow-hidden"
              >
                {/* Top border shine on hover */}
                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#0A5F6B] via-[#2DD4BF] to-[#0A5F6B] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Background number watermark */}
                <div className="absolute top-6 right-7 font-black font-sans text-5xl text-slate-100 group-hover:text-teal-100/60 transition-colors pointer-events-none select-none">
                  0{index + 1}
                </div>

                <div>
                  {/* Icon header */}
                  <div className="w-16 h-16 rounded-2xl bg-[#E6F7F7] text-[#0A5F6B] group-hover:bg-[#0A5F6B] group-hover:text-white transition-all duration-300 flex items-center justify-center mb-6 group-hover:scale-105 shadow-xs border border-teal-200/80 shrink-0">
                    {icons[index]}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-slate-900 font-sans group-hover:text-[#0A5F6B] transition-colors mb-3 leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base sm:text-[17px] text-slate-600 font-sans leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Footer Accent */}
                <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-1 rounded-full bg-[#0A5F6B]" />
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider font-sans">
                      Medlix Pillar 0{index + 1}
                    </span>
                  </div>
                  <span className="text-[#0A5F6B] group-hover:text-[#07515C] text-sm font-bold font-sans flex items-center gap-1.5 group-hover:translate-x-1 transition-all">
                    <span>Explore</span>
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
