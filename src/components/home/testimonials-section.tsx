'use client';

import React from 'react';
import { Star, Quote, MessageSquareQuote } from 'lucide-react';
import medlixData from '@/lib/medlixData.json';
import { SectionHeadingReveal, ScrollReveal } from '@/components/ui/scroll-reveal';

export default function TestimonialsSection() {
  const testimonials = medlixData.testimonials || [];

  return (
    <section className="py-24 sm:py-32 lg:py-36 bg-[#F8FAFC] border-b border-slate-200/80 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeadingReveal
          badge={
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0A5F6B] bg-[#E6F7F7] px-4 py-1.5 rounded-full border border-teal-200/80 shadow-2xs">
              <MessageSquareQuote className="w-4 h-4 text-[#0A5F6B]" />
              <span>Patient Experiences</span>
            </div>
          }
          title="What Our Patients Say"
          subtitle="Real stories of compassionate care, successful clinical treatments, and smooth recovery across Medlix Hospitals."
          className="mb-16 sm:mb-20"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-9 lg:gap-10">
          {testimonials.map((t, idx) => (
            <ScrollReveal
              key={idx}
              direction="up"
              duration={0.55}
              delay={0.1 * idx}
            >
              <div
                className="p-9 sm:p-10 lg:p-11 rounded-3xl bg-white border border-slate-200/90 hover:border-[#0A5F6B] hover:shadow-[0_22px_45px_rgba(10,95,107,0.12)] transition-all duration-300 shadow-[0_4px_20px_rgba(10,37,64,0.04)] flex flex-col justify-between relative group hover:-translate-y-2 h-full overflow-hidden"
              >
                {/* Top border shine on hover */}
                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#0A5F6B] via-[#2DD4BF] to-[#0A5F6B] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  <Quote className="w-9 h-9 text-[#0A5F6B]/30 group-hover:text-[#0A5F6B] transition-colors mb-5" />
                  
                  {/* 5 Stars */}
                  <div className="flex items-center gap-1.5 mb-5 text-amber-400">
                    {[...Array(t.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <p className="text-base sm:text-[17px] text-slate-700 leading-relaxed italic font-normal">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-7 border-t border-slate-100 mt-8 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0A5F6B] to-[#14B8A6] text-white font-bold flex items-center justify-center text-base shadow-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#0A2540]">{t.name}</h4>
                    <p className="text-xs sm:text-sm text-slate-500">{t.role}</p>
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
