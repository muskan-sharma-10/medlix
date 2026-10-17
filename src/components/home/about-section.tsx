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
  const points = medlixData.aboutPoints;

  const pointIcons = [
    <HeartPulse key="0" className="w-7 h-7 text-white" />,
    <Activity key="1" className="w-7 h-7 text-white" />,
    <Stethoscope key="2" className="w-7 h-7 text-white" />
  ];

  return (
    <section id="about-us" className="relative py-24 sm:py-32 bg-white overflow-hidden font-sans">
      {/* Floating parallax pattern from live medlix.in */}
      <ParallaxPattern image="/images/pattern-2.jpg" position="right" className="-top-8 -right-4 opacity-40" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Column: Hospital Image with Modern Double Ring */}
          <div className="lg:col-span-6 relative">
            <ScrollReveal direction="left" duration={0.7}>
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                {/* Clean aqua border wrapper */}
                <div className="p-3 sm:p-4 rounded-3xl bg-gradient-to-tr from-[#E6F7F7] to-[#D5F4F4] border-[8px] border-[#E6F7F7] shadow-2xl">
                  <div className="relative rounded-[22px] overflow-hidden border border-slate-200 bg-white shadow-inner">
                    <Image
                      src="/images/about-doctor.png"
                      alt="Medlix Hospital Doctors & Medical Specialists"
                      width={680}
                      height={520}
                      className="w-full h-auto object-cover hover:scale-[1.03] transition-transform duration-700"
                    />
                  </div>
                </div>

                {/* Top-Left Floating Badge */}
                <div className="absolute -top-4 -left-3 sm:-top-5 sm:-left-4 bg-white/95 backdrop-blur-md py-3 px-5 rounded-2xl shadow-xl border border-slate-200/90 flex items-center gap-3 animate-float-reverse">
                  <div className="w-10 h-10 rounded-xl bg-[#E6F7F7] text-[#0A5F6B] flex items-center justify-center font-bold">
                    <Sparkles className="w-5 h-5 text-[#0A5F6B]" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900 leading-tight">Patient-First Care</div>
                    <div className="text-xs font-semibold text-slate-500 mt-0.5">24/7 Specialized Support</div>
                  </div>
                </div>

                {/* Bottom-Right Floating Reassurance Badge */}
                <div className="absolute -bottom-6 -right-3 sm:-bottom-5 sm:right-4 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-[0_15px_35px_rgba(10,95,107,0.18)] border border-slate-200/90 flex items-center gap-3.5 max-w-[310px] animate-float">
                  <div className="w-14 h-14 rounded-2xl bg-[#0A5F6B] text-white flex items-center justify-center shrink-0 shadow-md">
                    <ShieldCheck className="w-7 h-7 text-[#C9F5F3]" />
                  </div>
                  <div>
                    <div className="text-base font-bold text-slate-900 leading-tight">Super Specialty Network</div>
                    <div className="text-xs font-medium text-slate-500 mt-1">Accredited &amp; Comprehensive Care</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Exact Content */}
          <div className="lg:col-span-6 space-y-7">
            <ScrollReveal direction="up" duration={0.65} delay={0.1}>
              <div className="space-y-4">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0A5F6B] bg-[#E6F7F7] px-5 py-2 rounded-full border border-teal-200/80 font-sans inline-flex items-center gap-2 shadow-2xs">
                  <Sparkles className="w-4 h-4 text-[#0A5F6B]" />
                  <span>About Medlix Hospitals</span>
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-slate-900 font-sans tracking-tight leading-[1.2]">
                  Our hospital doctors examine patients ensuring accurate diagnoses &amp; personalized care.
                </h2>
                <div className="w-20 h-1.5 rounded-full bg-gradient-to-r from-[#0A5F6B] to-[#14B8A6]" />
              </div>
            </ScrollReveal>

            {/* 3 Existing Services Points with Enhanced Card Aesthetics */}
            <div className="space-y-5 pt-2">
              {points.map((pt, i) => (
                <ScrollReveal key={i} direction="up" duration={0.6} delay={0.25 + i * 0.15}>
                  <div 
                    className="flex items-start gap-5 group p-5 rounded-3xl bg-slate-50/70 border border-slate-200/80 hover:border-[#0A5F6B] hover:bg-white hover:shadow-[0_12px_35px_rgba(10,95,107,0.08)] transition-all duration-300"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-[#0A5F6B] flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-all duration-300">
                      {pointIcons[i]}
                    </div>
                    <div className="space-y-1.5">
                      <h3 className="text-2xl font-bold text-slate-900 font-sans group-hover:text-[#0A5F6B] transition-colors leading-snug">
                        {pt.title}
                      </h3>
                      <p className="text-base sm:text-[17.5px] font-normal leading-relaxed text-slate-600 font-sans">
                        {pt.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenAppointment}
                className="px-8 py-4 bg-[#0A5F6B] hover:bg-[#07515C] text-white font-bold text-base rounded-2xl shadow-lg shadow-[#0A5F6B]/20 hover:shadow-[#0A5F6B]/35 hover:-translate-y-1 active:translate-y-0 transition-all flex items-center gap-2.5 font-sans cursor-pointer shine-sweep"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href="#locations"
                className="px-8 py-4 bg-white border-2 border-slate-200 hover:border-[#0A5F6B] hover:text-[#0A5F6B] hover:bg-[#E6F7F7] text-slate-800 font-bold text-base rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all font-sans"
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
