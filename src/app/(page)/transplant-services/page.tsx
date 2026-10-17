'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PageBanner from '@/components/ui/page-banner';
import { 
  Heart, 
  Activity, 
  ShieldCheck, 
  CheckCircle2, 
  Phone, 
  Calendar, 
  Users, 
  Clock, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import medlixData from '@/lib/medlixData.json';

export default function TransplantServicesPage() {
  const transplants = medlixData.transplant;

  return (
    <div className="w-full flex flex-col">
      {/* 1. Page Hero Banner */}
      <PageBanner
        title="Transplant Services"
        subtitle="Pioneering organ transplant programs with dedicated sterile ICUs, renowned surgical teams, and comprehensive post-transplant care."
        badge="Centers for Organ Transplantation"
        breadcrumbs={[{ label: 'Transplant Services' }]}
        imageSrc="/images/banner3.jpg"
      />

      {/* 2. Overview Introduction */}
      <section className="py-20 bg-[#FDFEFE] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0A5F6B] bg-[#DFF8F8] px-3.5 py-1.5 rounded-full border border-[#C4DFDF] font-exo inline-flex items-center gap-1.5 shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-[#0A5F6B] animate-pulse" />
                  Giving Second Chances at Life
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#29363A] font-exo tracking-tight leading-tight">
                  Advanced Organ Transplantation With Compassionate Support
                </h2>
                <div className="w-20 h-1.5 rounded-full bg-[#0A5F6B]" />
              </div>

              <p className="text-[#719497] text-sm sm:text-base leading-relaxed font-roboto">
                Medlix Hospital's Transplant Institutes offer world-class comprehensive care for patients with end-stage organ failure. Guided by state-of-the-art sterile protocols, laminar airflow modular operating suites, and round-the-clock intensivist coverage, we provide life-saving kidney, liver, heart, and lung transplant solutions.
              </p>

              <p className="text-[#719497] text-sm sm:text-base leading-relaxed font-roboto">
                Every transplant recipient is backed by a cohesive team comprising transplant surgeons, organ-specific specialists (nephrologists, hepatologists, cardiologists, pulmonologists), transplant coordinators, infectious disease experts, and psychiatric counselors to ensure holistic pre- and post-transplant recovery.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-2xl bg-[#DFF8F8]/40 border border-[#C4DFDF] flex items-start gap-3.5 shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-[#DFF8F8] text-[#0A5F6B] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 text-[#0A5F6B]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#29363A] font-exo">Ultra-Sterile Transplant ICUs</h4>
                    <p className="text-xs text-[#719497] font-roboto mt-0.5">HEPA filtered positive pressure rooms</p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#DFF8F8]/40 border border-[#C4DFDF] flex items-start gap-3.5 shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-[#DFF8F8] text-[#0A5F6B] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 text-[#0A5F6B]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#29363A] font-exo">High Graft Survival Rates</h4>
                    <p className="text-xs text-[#719497] font-roboto mt-0.5">Rigorous HLA matching &amp; immunosuppression protocols</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-[#C4DFDF] group">
                <Image
                  src="/images/aarvy.jpg"
                  alt="Transplant Operations at Medlix Hospital"
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

      {/* 3. Four Dedicated Programs Grid */}
      <section className="py-20 bg-[#DFF8F8]/30 border-y border-[#C4DFDF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0A5F6B] bg-[#DFF8F8] px-3.5 py-1.5 rounded-full border border-[#C4DFDF] font-exo inline-block shadow-2xs">
              Clinical Programs
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#29363A] font-exo tracking-tight">
              Specialized Transplant Verticals
            </h2>
            <p className="text-[#719497] text-sm sm:text-base font-roboto">
              Each organ transplant program is backed by dedicated surgical faculties and internationally aligned treatment pathways.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {transplants.map((t, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-3xl p-8 border border-[#C4DFDF] shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between space-y-6 group hover:border-[#0A5F6B]/50 hover:-translate-y-2 relative overflow-hidden"
              >
                {/* Top Subtle Accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#0A5F6B]" />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-[#DFF8F8] border border-[#C4DFDF] text-[#0A5F6B] flex items-center justify-center group-hover:bg-[#0A5F6B] group-hover:text-white transition-all duration-300 shadow-xs">
                      <Heart className="w-7 h-7 text-[#0A5F6B] group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-xs font-bold text-[#0A5F6B] bg-[#DFF8F8] px-3 py-1 rounded-full border border-[#C4DFDF] font-exo shadow-2xs">
                      Center of Excellence
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold font-exo text-[#29363A] group-hover:text-[#0A5F6B] transition-colors">
                    {t.name}
                  </h3>

                  <p className="text-sm text-[#719497] font-roboto leading-relaxed">
                    {t.desc}
                  </p>

                  {t.points && t.points.length > 0 && (
                    <div className="space-y-2 pt-2">
                      <div className="text-xs font-bold text-[#719497] uppercase tracking-wider font-exo">
                        Program Highlights:
                      </div>
                      <ul className="space-y-2">
                        {t.points.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#29363A] bg-[#FDFEFE] p-2 rounded-xl border border-[#C4DFDF]">
                            <CheckCircle2 className="w-4 h-4 text-[#0A5F6B] shrink-0" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="pt-6 border-t border-[#C4DFDF] flex items-center justify-between">
                  <Link
                    href="/book-appointment"
                    className="text-xs font-bold text-[#0A5F6B] hover:text-[#07515C] flex items-center gap-1.5 transition-colors font-exo group/link"
                  >
                    <span>Transplant Evaluation Appointment</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>

                  <a
                    href="tel:+919289500375"
                    className="text-xs font-bold text-[#0A5F6B] hover:text-[#07515C] transition-colors font-exo"
                  >
                    Direct Helpline
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Multi-Disciplinary Care Journey */}
      <section className="py-20 bg-[#FDFEFE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0A5F6B] bg-[#DFF8F8] px-3.5 py-1.5 rounded-full border border-[#C4DFDF] font-exo inline-block shadow-2xs">
              Pathway
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#29363A] font-exo tracking-tight">
              The Transplant Evaluation Journey
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Comprehensive Evaluation', desc: 'Detailed diagnostic assessment, tissue typing, cardiac clearance, and psychological fitness checks.' },
              { step: '02', title: 'Authorization & Panel', desc: 'Transparent legal documentation in compliance with the Transplantation of Human Organs Act (THOA).' },
              { step: '03', title: 'Surgical Precision', desc: 'Synchronized donor-recipient surgeries within HEPA-filtered laminar flow modular operating suites.' },
              { step: '04', title: 'Lifelong Care & Follow-up', desc: 'Personalized immunosuppressive drug monitoring, infection vigilance, and rehabilitation.' }
            ].map((st, i) => (
              <div key={i} className="p-7 rounded-3xl bg-[#FDFEFE] border border-[#C4DFDF] space-y-3 relative hover:shadow-xl hover:border-[#0A5F6B]/40 hover:-translate-y-1.5 transition-all group overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#0A5F6B] opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="text-4xl font-black text-[#0A5F6B] font-outfit">{st.step}</div>
                <h4 className="text-lg font-bold text-[#29363A] font-exo group-hover:text-[#0A5F6B] transition-colors">{st.title}</h4>
                <p className="text-xs sm:text-sm text-[#719497] font-roboto leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA Emergency Banner */}
      <section className="py-16 bg-gradient-to-r from-[#07515C] to-[#0A5F6B] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C9F5F3] bg-white/10 px-3 py-1 rounded-full font-exo inline-block">
              24/7 Transplant Helpline
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-exo">
              Connect With The Medlix Transplant Coordinator
            </h3>
            <p className="text-xs sm:text-sm text-[#DFF8F8] font-roboto max-w-xl">
              Available 24x7 to assist patients and donor families with urgent queries and appointment bookings.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="tel:+919289500375"
              className="px-7 py-3.5 bg-[#0A5F6B] hover:bg-[#07515C] border border-[#C4DFDF]/40 text-white font-bold text-sm rounded-xl shadow-lg transition-all flex items-center gap-2 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer font-exo"
            >
              <Phone className="w-4 h-4" />
              <span>Helpline: +91 92895 00375</span>
            </a>

            <Link
              href="/book-appointment"
              className="px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm rounded-xl border border-white/25 transition-all hover:-translate-y-0.5"
            >
              Book Evaluation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
