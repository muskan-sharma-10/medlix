'use client';

import React from 'react';
import { Star, Quote, MessageSquareQuote } from 'lucide-react';
import medlixData from '@/lib/medlixData.json';
import { SectionHeadingReveal, ScrollReveal } from '@/components/ui/scroll-reveal';

export default function TestimonialsSection() {
  const testimonials = medlixData.testimonials;

  return (
    <section className="py-20 bg-[#FDFEFE] border-b border-[#C4DFDF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeadingReveal
          badge={
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0A5F6B] bg-[#DFF8F8] px-3.5 py-1 rounded-full border border-[#C4DFDF] font-exo">
              <MessageSquareQuote className="w-3.5 h-3.5 text-[#0A5F6B]" />
              <span>Patient Experiences</span>
            </div>
          }
          title="What Our Patient Says"
          subtitle="Real stories of healing, recovery, and compassionate support from patients across Medlix Hospitals."
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <ScrollReveal
              key={idx}
              direction="up"
              duration={0.6}
              delay={0.15 * idx}
            >
              <div
                className="p-8 rounded-2xl bg-[#DFF8F8]/30 border border-[#C4DFDF] hover:border-[#0A5F6B]/40 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-2 flex flex-col justify-between relative group h-full"
              >
                <div>
                  <Quote className="w-8 h-8 text-[#0A5F6B]/20 group-hover:text-[#0A5F6B]/60 transition-colors mb-4" />
                  
                  {/* 5 Stars */}
                  <div className="flex items-center gap-1 mb-4 text-[#0A5F6B]">
                    {[...Array(t.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <p className="text-sm text-[#719497] leading-relaxed italic font-roboto">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-6 border-t border-[#C4DFDF] mt-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#0A5F6B] text-white font-bold flex items-center justify-center text-sm shadow-sm group-hover:bg-[#07515C] transition-colors">
                    {t.name[0]}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#29363A] font-exo">{t.name}</h4>
                    <p className="text-xs text-[#719497] font-roboto">{t.role}</p>
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
