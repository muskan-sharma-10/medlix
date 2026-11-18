'use client';

import React from 'react';
import { Star, Quote, MessageSquareQuote } from 'lucide-react';
import medlixData from '@/lib/medlixData.json';
import { SectionHeadingReveal, ScrollReveal } from '@/components/ui/scroll-reveal';

export default function TestimonialsSection() {
  const testimonials = medlixData.testimonials || [];

  return (
    <section className="py-20 sm:py-28 bg-[#F8FAFC] border-b border-slate-200/80 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeadingReveal
          badge={
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0A5F6B] bg-[#E6F7F7] px-4 py-1 rounded-full border border-teal-200/80 shadow-2xs">
              <MessageSquareQuote className="w-3.5 h-3.5 text-[#0A5F6B]" />
              <span>Patient Experiences</span>
            </div>
          }
          title="What Our Patients Say"
          subtitle="Real stories of compassionate care, successful clinical treatments, and smooth recovery across Medlix Hospitals."
          className="mb-14 sm:mb-18"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t, idx) => (
            <ScrollReveal
              key={idx}
              direction="up"
              duration={0.55}
              delay={0.1 * idx}
            >
              <div
                className="p-8 sm:p-9 rounded-3xl bg-white border border-slate-200/90 hover:border-[#0A5F6B] hover:shadow-[0_22px_45px_rgba(10,95,107,0.12)] transition-all duration-300 shadow-[0_4px_20px_rgba(10,37,64,0.04)] flex flex-col justify-between relative group hover:-translate-y-1.5 h-full overflow-hidden"
              >
                {/* Top border shine on hover */}
                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#0A5F6B] via-[#2DD4BF] to-[#0A5F6B] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  <Quote className="w-8 h-8 text-[#0A5F6B]/30 group-hover:text-[#0A5F6B] transition-colors mb-4" />
                  
                  {/* 5 Stars */}
                  <div className="flex items-center gap-1 mb-4 text-amber-400">
                    {[...Array(t.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 mt-6 flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#0A5F6B] to-[#14B8A6] text-white font-bold flex items-center justify-center text-sm shadow-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0A2540]">{t.name}</h4>
                    <p className="text-xs text-slate-500">{t.role}</p>
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
