'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PageBanner from '@/components/ui/page-banner';
import { 
  Building2, 
  Target, 
  Eye, 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  HeartHandshake, 
  Users,
  Phone,
  Calendar,
  Sparkles
} from 'lucide-react';
import medlixData from '@/lib/medlixData.json';

export default function CorporatePage() {
  const circle = medlixData.circleOfCare;
  const whyChoose = medlixData.whyChoose;
  const approach = medlixData.approach;

  return (
    <div className="w-full flex flex-col">
      {/* 1. Page Banner */}
      <PageBanner
        title="Corporate Overview"
        subtitle="Empowering communities across Haryana and Delhi NCR with modern medical infrastructure, compassionate clinical teams, and ethical healthcare."
        badge="Medlix Healthcare Network"
        breadcrumbs={[{ label: 'Corporate' }]}
        imageSrc="/images/banner2.png"
      />

      {/* 2. Company Overview */}
      <section id="company-overview" className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0A5F6B] bg-[#DFF8F8] px-3.5 py-1.5 rounded-full border border-[#C4DFDF] font-exo inline-flex items-center gap-1.5 shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-[#0A5F6B] animate-pulse" />
                  Company Overview
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#29363A] font-exo tracking-tight leading-tight">
                  A Healthcare Network Engineered Around Patient Dignity
                </h2>
                <div className="w-20 h-1.5 rounded-full bg-[#0A5F6B]" />
              </div>

              <p className="text-[#719497] text-sm sm:text-base leading-relaxed font-roboto">
                Medlix is a multi-specialty healthcare organization headquartered in Gurugram, India. Operating across 8 independent hospitals, 500+ beds, and 25+ medical specialties, we deliver tertiary and super-specialty medical treatments designed to bridge the gap between quality and affordability.
              </p>

              <p className="text-[#719497] text-sm sm:text-base leading-relaxed font-roboto">
                Our facilities span key regional hubs including Gurugram (Civil Lines, Khandsa Road, Sector 70A), Palwal, Rewari, and Greater Noida. Driven by over 50 specialist doctors, comprehensive intensive care units, advanced catheterization labs, and diagnostic facilities, Medlix stands at the forefront of Northern India's clinical infrastructure.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                <div className="p-5 rounded-2xl bg-[#DFF8F8] border border-[#C4DFDF] text-center shadow-xs hover:shadow-md hover:-translate-y-1 transition-all">
                  <div className="text-2xl sm:text-3xl font-black text-[#0A5F6B] font-outfit">8+</div>
                  <div className="text-xs font-bold text-[#29363A] mt-1 font-exo uppercase tracking-wider">Hospitals</div>
                </div>
                <div className="p-5 rounded-2xl bg-[#DFF8F8] border border-[#C4DFDF] text-center shadow-xs hover:shadow-md hover:-translate-y-1 transition-all">
                  <div className="text-2xl sm:text-3xl font-black text-[#0A5F6B] font-outfit">500+</div>
                  <div className="text-xs font-bold text-[#29363A] mt-1 font-exo uppercase tracking-wider">Beds</div>
                </div>
                <div className="p-5 rounded-2xl bg-[#DFF8F8] border border-[#C4DFDF] text-center shadow-xs hover:shadow-md hover:-translate-y-1 transition-all">
                  <div className="text-2xl sm:text-3xl font-black text-[#0A5F6B] font-outfit">25+</div>
                  <div className="text-xs font-bold text-[#29363A] mt-1 font-exo uppercase tracking-wider">Specialties</div>
                </div>
                <div className="p-5 rounded-2xl bg-[#DFF8F8] border border-[#C4DFDF] text-center shadow-xs hover:shadow-md hover:-translate-y-1 transition-all">
                  <div className="text-2xl sm:text-3xl font-black text-[#0A5F6B] font-outfit">50+</div>
                  <div className="text-xs font-bold text-[#29363A] mt-1 font-exo uppercase tracking-wider">Specialists</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-slate-200/80 group">
                <Image
                  src="/images/aarvy.jpg"
                  alt="Medlix Hospital Network"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Vision & Mission */}
      <section id="vision-mission" className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0A5F6B] bg-[#DFF8F8] px-3.5 py-1.5 rounded-full border border-[#C4DFDF] font-exo inline-block shadow-2xs">
              Guiding North Star
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#29363A] font-exo tracking-tight">
              Vision &amp; Mission
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision Card */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#C4DFDF] shadow-md hover:shadow-2xl transition-all duration-300 space-y-5 hover:-translate-y-1 relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#0A5F6B]" />
              <div className="w-14 h-14 rounded-2xl bg-[#DFF8F8] border border-[#C4DFDF] text-[#0A5F6B] flex items-center justify-center shadow-xs group-hover:bg-[#0A5F6B] group-hover:text-white transition-colors">
                <Eye className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-[#29363A] font-exo">
                Our Vision
              </h3>
              <p className="text-[#719497] text-sm sm:text-base leading-relaxed font-roboto">
                To be the most respected, compassionate, and accessible healthcare system in Northern India — recognized for clinical brilliance, transparent ethics, and relentless dedication to saving and enriching human lives.
              </p>
              <ul className="space-y-2.5 pt-2 text-xs sm:text-sm text-[#719497]">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0A5F6B] shrink-0" />
                  <span>Benchmark patient satisfaction across every facility</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0A5F6B] shrink-0" />
                  <span>Accessible healthcare without financial opacity</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0A5F6B] shrink-0" />
                  <span>State-of-the-art technological adoption</span>
                </li>
              </ul>
            </div>

            {/* Mission Card */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#C4DFDF] shadow-md hover:shadow-2xl transition-all duration-300 space-y-5 hover:-translate-y-1 relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#0A5F6B]" />
              <div className="w-14 h-14 rounded-2xl bg-[#DFF8F8] border border-[#C4DFDF] text-[#0A5F6B] flex items-center justify-center shadow-xs group-hover:bg-[#0A5F6B] group-hover:text-white transition-colors">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-[#29363A] font-exo">
                Our Mission
              </h3>
              <p className="text-[#719497] text-sm sm:text-base leading-relaxed font-roboto">
                To deliver comprehensive, patient-first super-specialty medical services through exceptional doctors, modern diagnostic infrastructure, and empathetic nursing, ensuring equitable care for every community we serve.
              </p>
              <ul className="space-y-2.5 pt-2 text-xs sm:text-sm text-[#719497]">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0A5F6B] shrink-0" />
                  <span>24x7 emergency and trauma care readiness</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0A5F6B] shrink-0" />
                  <span>Continuous professional medical development</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0A5F6B] shrink-0" />
                  <span>Empanelled with leading insurance and govt schemes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. The CIRCLE of Care */}
      <section id="circle-of-care" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0A5F6B] bg-[#DFF8F8] px-3.5 py-1.5 rounded-full border border-[#C4DFDF] font-exo inline-block shadow-2xs">
              Core Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#29363A] font-exo tracking-tight">
              The CIRCLE of Care
            </h2>
            <p className="text-[#719497] text-sm sm:text-base font-roboto">
              The ethical framework guiding every decision across Medlix Hospital.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {circle.map((c, i) => (
              <div 
                key={i}
                className="p-7 rounded-3xl bg-slate-50 border border-[#C4DFDF] hover:bg-white hover:shadow-2xl hover:border-[#0A5F6B] hover:-translate-y-1.5 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#0A5F6B] opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-center gap-3.5 mb-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-[#0A5F6B] text-white font-extrabold font-exo flex items-center justify-center text-xl group-hover:bg-[#07515C] group-hover:scale-105 transition-all duration-300 shadow-xs">
                    {c.title.charAt(0)}
                  </div>
                  <h3 className="text-lg font-bold text-[#29363A] font-exo group-hover:text-[#0A5F6B] transition-colors">
                    {c.title}
                  </h3>
                </div>
                <p className="text-sm text-[#719497] font-roboto leading-relaxed">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us */}
      <section id="why-choose" className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0A5F6B] bg-[#DFF8F8] px-3.5 py-1.5 rounded-full border border-[#C4DFDF] font-exo inline-block shadow-2xs">
              Institutional Strengths
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#29363A] font-exo tracking-tight">
              Why Choose Medlix Hospital
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map((w, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-3xl p-8 border border-[#C4DFDF] shadow-sm hover:shadow-xl hover:border-[#0A5F6B] hover:-translate-y-1.5 transition-all duration-300 space-y-3 relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#0A5F6B] opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-12 h-12 rounded-2xl bg-[#DFF8F8] text-[#0A5F6B] flex items-center justify-center font-bold text-sm font-exo group-hover:bg-[#0A5F6B] group-hover:text-white transition-colors shadow-xs">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-bold text-[#29363A] font-exo group-hover:text-[#0A5F6B] transition-colors">
                  {w.title}
                </h3>
                <p className="text-sm text-[#719497] font-roboto leading-relaxed">
                  {w.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. The Medlix Approach */}
      <section id="approach" className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0A5F6B] bg-[#DFF8F8] px-3.5 py-1.5 rounded-full border border-[#C4DFDF] font-exo inline-block shadow-2xs">
              Care Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#29363A] font-exo tracking-tight">
              The Medlix Approach
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {approach.map((app, idx) => (
              <div 
                key={idx}
                className="p-8 sm:p-9 rounded-3xl bg-slate-50 border border-[#C4DFDF] hover:bg-white hover:shadow-2xl hover:border-[#0A5F6B] hover:-translate-y-1.5 transition-all duration-300 space-y-3 relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#0A5F6B] opacity-0 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-xl font-bold text-[#0A5F6B] font-exo group-hover:text-[#07515C] transition-colors">
                  {app.title}
                </h3>
                <p className="text-sm sm:text-base text-[#719497] font-roboto leading-relaxed">
                  {app.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
