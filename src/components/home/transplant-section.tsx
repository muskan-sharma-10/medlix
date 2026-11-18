'use client';

import React from 'react';
import { Heart, Activity, ShieldPlus, Stethoscope, ArrowRight, Sparkles } from 'lucide-react';
import medlixData from '@/lib/medlixData.json';
import { SectionHeadingReveal, ScrollReveal } from '@/components/ui/scroll-reveal';

interface TransplantSectionProps {
  onOpenAppointment?: () => void;
}

export default function TransplantSection({ onOpenAppointment }: TransplantSectionProps) {
  const transplants = medlixData.transplant || [];

  const icons = [
    <Activity key="0" className="w-6 h-6 text-[#0A5F6B]" />,
    <Heart key="1" className="w-6 h-6 text-[#0A5F6B]" />,
    <ShieldPlus key="2" className="w-6 h-6 text-[#0A5F6B]" />,
    <Stethoscope key="3" className="w-6 h-6 text-[#0A5F6B]" />
  ];

  return (
    <section id="transplant" className="py-20 sm:py-28 bg-white border-b border-slate-200/80 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeadingReveal
          badge={
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0A5F6B] bg-[#E6F7F7] px-3.5 py-1 rounded-full border border-teal-200/80 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#0A5F6B]" />
              <span>Advanced Organ Care</span>
            </div>
          }
          title="Organ Transplant Institutes"
          subtitle="Comprehensive, multidisciplinary transplant care prioritizing patient safety, long-term survival, and dedicated donor-recipient guidance."
          className="mb-14 sm:mb-18"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {transplants.map((item, idx) => (
            <ScrollReveal
              key={idx}
              direction="up"
              duration={0.55}
              delay={0.08 * idx}
            >
              <div
                className="p-7 sm:p-8 rounded-3xl border border-slate-200/90 bg-white hover:border-[#0A5F6B] hover:shadow-[0_20px_45px_rgba(10,95,107,0.14)] transition-all duration-300 shadow-[0_4px_20px_rgba(10,37,64,0.04)] flex flex-col justify-between group hover:-translate-y-1.5 h-full relative overflow-hidden"
              >
                {/* Top border shine on hover */}
                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#0A5F6B] via-[#2DD4BF] to-[#0A5F6B] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#E6F7F7] border border-teal-200/70 flex items-center justify-center mb-6 shadow-2xs group-hover:scale-110 group-hover:bg-[#0A5F6B] group-hover:[&>svg]:text-white transition-all duration-300">
                    {icons[idx]}
                  </div>
                  <h3 className="text-xl font-bold text-[#0A2540] group-hover:text-[#0A5F6B] transition-colors mb-2.5 leading-snug">
                    {item.name}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-7 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={onOpenAppointment}
                    className="text-xs font-bold text-[#0A5F6B] hover:text-[#07515C] flex items-center gap-1 group/btn cursor-pointer"
                  >
                    <span>Consult Transplant Team</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
