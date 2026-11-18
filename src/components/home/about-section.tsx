'use client';

import React from 'react';
import Image from 'next/image';
import { Activity, HeartPulse, Stethoscope, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import medlixData from '@/lib/medlixData.json';
import ParallaxPattern from '@/components/ui/parallax-pattern';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

interface AboutSectionProps {
  onOpenAppointment?: () => void;
}

export default function AboutSection({ onOpenAppointment }: AboutSectionProps) {
  const points = medlixData.aboutPoints || [];

  const pointIcons = [
    <HeartPulse key="0" className="w-6 h-6 text-white" />,
    <Activity key="1" className="w-6 h-6 text-white" />,
    <Stethoscope key="2" className="w-6 h-6 text-white" />
  ];

  return (
    <section id="about-us" className="relative py-20 sm:py-28 bg-white overflow-hidden font-sans border-b border-slate-200/80">
      {/* Floating parallax pattern */}
      <ParallaxPattern image="/images/pattern-2.jpg" position="right" className="-top-8 -right-4 opacity-30" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Hospital Doctors Image & Floating Badges */}
          <div className="lg:col-span-6 relative">
            <ScrollReveal direction="left" duration={0.7}>
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                
                {/* Clean refined frame wrapper */}
                <div className="p-3 sm:p-4 rounded-3xl bg-gradient-to-tr from-[#E6F7F7] to-[#D5F4F4]/70 border-[6px] border-[#E6F7F7] shadow-[0_20px_50px_rgba(10,37,64,0.12)]">
                  <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-inner">
                    <Image
                      src="/images/about-doctor.png"
                      alt="Medlix Hospital Doctors & Specialists"
                      width={680}
                      height={520}
                      className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-700 ease-out"
                    />
                  </div>
                </div>

                {/* Top-Left Floating Badge */}
                <div className="absolute -top-3 -left-2 sm:-top-5 sm:-left-4 bg-white/95 backdrop-blur-md py-3 px-4 sm:px-5 rounded-2xl shadow-xl border border-slate-200/90 flex items-center gap-3 animate-float-reverse">
                  <div className="w-10 h-10 rounded-xl bg-[#E6F7F7] text-[#0A5F6B] flex items-center justify-center font-bold shrink-0">
                    <Sparkles className="w-5 h-5 text-[#0A5F6B]" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-[#0A2540] leading-tight">Patient-First Care</div>
                    <div className="text-[11px] font-semibold text-slate-500 mt-0.5">24/7 Super-Specialty Coverage</div>
                  </div>
                </div>

                {/* Bottom-Right Floating Reassurance Badge */}
                <div className="absolute -bottom-5 -right-2 sm:-bottom-5 sm:right-4 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-[0_15px_35px_rgba(10,95,107,0.18)] border border-slate-200/90 flex items-center gap-3.5 max-w-[310px] animate-float">
                  <div className="w-12 h-12 rounded-2xl bg-[#0A5F6B] text-white flex items-center justify-center shrink-0 shadow-md">
                    <ShieldCheck className="w-6 h-6 text-[#C9F5F3]" />
                  </div>
                  <div>
                    <div className="text-sm sm:text-base font-bold text-[#0A2540] leading-tight">Super Specialty Network</div>
                    <div className="text-xs font-medium text-slate-500 mt-0.5">NABH Aligned Clinical Standards</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Mission and 3 Clinical Support Pillars */}
          <div className="lg:col-span-6 space-y-6">
            <ScrollReveal direction="up" duration={0.65} delay={0.1}>
              <div className="space-y-3.5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0A5F6B] bg-[#E6F7F7] px-4 py-1.5 rounded-full border border-teal-200/80 inline-flex items-center gap-2 shadow-2xs">
                  <Sparkles className="w-3.5 h-3.5 text-[#0A5F6B]" />
                  <span>About Medlix Hospitals</span>
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0A2540] tracking-tight leading-[1.2]">
                  Examining patients with precision, delivering personalized treatments.
                </h2>
                <div className="w-16 h-1 rounded-full bg-gradient-to-r from-[#0A5F6B] to-[#14B8A6]" />
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Founded in 2024 by Dr. Yogesh Sharma, Medlix Hospitals is built around a single vision: making world-class healthcare accessible, affordable, and deeply compassionate.
                </p>
              </div>
            </ScrollReveal>

            {/* 3 Clinical Points */}
            <div className="space-y-4 pt-1">
              {points.map((pt, i) => (
                <ScrollReveal key={i} direction="up" duration={0.6} delay={0.15 + i * 0.1}>
                  <div 
                    className="flex items-start gap-4 sm:gap-5 p-4 sm:p-5 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:border-[#0A5F6B] hover:bg-white hover:shadow-[0_12px_30px_rgba(10,95,107,0.08)] transition-all duration-300 group"
                  >
                    <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-2xl bg-[#0A5F6B] flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-all duration-300">
                      {pointIcons[i]}
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-lg sm:text-xl font-bold text-[#0A2540] group-hover:text-[#0A5F6B] transition-colors leading-snug">
                        {pt.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-normal leading-relaxed text-slate-600">
                        {pt.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-3.5">
              <button
                onClick={onOpenAppointment}
                className="px-7 py-3.5 bg-[#0A5F6B] hover:bg-[#07515C] text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-2xl shadow-lg shadow-[#0A5F6B]/20 hover:shadow-xl hover:shadow-[#0A5F6B]/30 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center gap-2 cursor-pointer shine-sweep"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#locations"
                className="px-7 py-3.5 bg-white border border-slate-200 hover:border-[#0A5F6B] hover:text-[#0A5F6B] hover:bg-[#E6F7F7]/60 text-slate-800 font-bold text-xs sm:text-sm uppercase tracking-wider rounded-2xl shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                Explore Hospitals
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
