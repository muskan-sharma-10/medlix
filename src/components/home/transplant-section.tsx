'use client';

import React from 'react';
import { Heart, Activity, ShieldPlus, Stethoscope, ArrowRight, Sparkles } from 'lucide-react';
import medlixData from '@/lib/medlixData.json';
import { SectionHeadingReveal, ScrollReveal } from '@/components/ui/scroll-reveal';

interface TransplantSectionProps {
  onOpenAppointment?: () => void;
}

export default function TransplantSection({ onOpenAppointment }: TransplantSectionProps) {
  const transplants = medlixData.transplant;

  const icons = [
    <Activity key="0" className="w-6 h-6 text-[#0A5F6B]" />,
    <Heart key="1" className="w-6 h-6 text-[#0A5F6B]" />,
    <ShieldPlus key="2" className="w-6 h-6 text-[#0A5F6B]" />,
    <Stethoscope key="3" className="w-6 h-6 text-[#0A5F6B]" />
  ];

  return (
    <section id="transplant" className="py-20 bg-[#FDFEFE] border-b border-[#C4DFDF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeadingReveal
          badge={
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0A5F6B] bg-[#DFF8F8] px-3.5 py-1 rounded-full border border-[#C4DFDF] font-exo">
              <Sparkles className="w-3.5 h-3.5 text-[#0A5F6B]" />
              <span>Advanced Organ Care</span>
            </div>
          }
          title="Transplant Services"
          subtitle="With our transplant services we provide compassionate & expert care focusing on the individual needs of each patient."
          className="mb-14"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {transplants.map((item, idx) => (
            <ScrollReveal
              key={idx}
              direction="up"
              duration={0.6}
              delay={0.12 * idx}
            >
              <div
                className="p-7 rounded-3xl border border-[#C4DFDF] bg-white hover:border-[#0A5F6B]/40 hover:shadow-[0_22px_45px_rgba(10,95,107,0.14)] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between group hover:-translate-y-2 h-full relative overflow-hidden"
              >
                {/* Top border shine on hover */}
                <div className="absolute top-0 inset-x-0 h-1 bg-[#0A5F6B] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#DFF8F8] border border-[#C4DFDF] flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:bg-[#0A5F6B] group-hover:[&>svg]:text-white transition-all duration-300">
                    {icons[idx]}
                  </div>
                  <h3 className="text-xl font-bold text-[#29363A] group-hover:text-[#0A5F6B] transition-colors mb-2.5 font-exo">
                    {item.name}
                  </h3>
                  <p className="text-[14.5px] text-[#719497] leading-relaxed font-roboto">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#C4DFDF] mt-6">
                  <button
                    onClick={onOpenAppointment}
                    className="text-xs font-bold text-[#0A5F6B] group-hover:text-[#07515C] flex items-center gap-1.5 transition-colors font-exo uppercase tracking-wider"
                  >
                    <span>Inquire for Transplant</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
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
