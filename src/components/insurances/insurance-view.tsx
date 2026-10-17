'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PageBanner from '@/components/ui/page-banner';
import { 
  ShieldCheck, 
  CheckCircle2, 
  HelpCircle, 
  FileText, 
  Phone, 
  ArrowRight,
  Building2,
  Calendar,
  Sparkles
} from 'lucide-react';
import medlixData from '@/lib/medlixData.json';

interface InsuranceViewProps {
  initialTab?: 'all' | 'govt' | 'private';
}

export function InsuranceView({ initialTab = 'all' }: InsuranceViewProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'govt' | 'private'>(initialTab);

  const govt = medlixData.insuranceGovt || [];
  const priv = medlixData.insurancePrivate || [];

  return (
    <div className="w-full flex flex-col">
      {/* 1. Page Banner */}
      <PageBanner
        title="Insurance &amp; Cashless Tie-Ups"
        subtitle="Hassle-free, transparent cashless hospitalization empaneled with premier Government organizations and major Private Insurance TPAs."
        badge="Empanelled Partners"
        breadcrumbs={[{ label: 'Insurances' }]}
        imageSrc="/images/banner2.png"
      />

      {/* 2. Interactive Tab Selection */}
      <section className="py-8 bg-[#DFF8F8]/40 backdrop-blur-md border-b border-[#C4DFDF] sticky top-[72px] lg:top-[88px] z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold font-exo transition-all ${
                activeTab === 'all'
                  ? 'bg-gradient-to-r from-[#0A5F6B] to-[#07515C] text-white shadow-md'
                  : 'bg-white text-[#29363A] border border-[#C4DFDF] hover:bg-[#DFF8F8]/60 hover:border-[#0A5F6B]/30'
              }`}
            >
              All Empanelled Providers ({govt.length + priv.length})
            </button>

            <button
              onClick={() => setActiveTab('govt')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold font-exo transition-all ${
                activeTab === 'govt'
                  ? 'bg-gradient-to-r from-[#0A5F6B] to-[#07515C] text-white shadow-md'
                  : 'bg-white text-[#29363A] border border-[#C4DFDF] hover:bg-[#DFF8F8]/60 hover:border-[#0A5F6B]/30'
              }`}
            >
              Government Panels ({govt.length})
            </button>

            <button
              onClick={() => setActiveTab('private')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold font-exo transition-all ${
                activeTab === 'private'
                  ? 'bg-gradient-to-r from-[#0A5F6B] to-[#07515C] text-white shadow-md'
                  : 'bg-white text-[#29363A] border border-[#C4DFDF] hover:bg-[#DFF8F8]/60 hover:border-[#0A5F6B]/30'
              }`}
            >
              Private Insurance &amp; TPAs ({priv.length})
            </button>
          </div>
        </div>
      </section>

      {/* 3. Logos & Details Display */}
      <section className="py-16 bg-[#FDFEFE] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Government Panels Section */}
          {(activeTab === 'all' || activeTab === 'govt') && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-3 border-b border-[#C4DFDF]">
                <div className="w-12 h-12 rounded-2xl bg-[#DFF8F8] text-[#0A5F6B] flex items-center justify-center shadow-xs">
                  <ShieldCheck className="w-6 h-6 text-[#0A5F6B]" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold font-exo text-[#29363A]">
                    Government Health Schemes &amp; PSU Panels
                  </h2>
                  <p className="text-xs sm:text-sm text-[#719497] font-roboto">
                    Direct cashless hospitalization for beneficiaries, pensioners, and defense personnel.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {govt.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-7 rounded-3xl bg-white border border-[#C4DFDF] shadow-sm hover:shadow-2xl hover:border-[#0A5F6B]/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 relative overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 right-0 h-1 bg-[#0A5F6B] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div>
                      <div className="relative h-16 w-full mb-4 flex items-center justify-start">
                        <Image
                          src={item.logo}
                          alt={item.name}
                          width={140}
                          height={60}
                          className="object-contain object-left max-h-14"
                        />
                      </div>
                      <h3 className="text-base font-bold text-[#29363A] font-exo group-hover:text-[#0A5F6B] transition-colors mb-2">
                        {item.name}
                      </h3>
                      <p className="text-xs text-[#719497] font-roboto leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="mt-5 pt-3 border-t border-[#C4DFDF] flex items-center gap-1.5 text-xs text-[#0A5F6B] font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0A5F6B]" />
                      <span className="font-exo">Empanelled Network</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Private Insurances Section */}
          {(activeTab === 'all' || activeTab === 'private') && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-3 border-b border-[#C4DFDF]">
                <div className="w-12 h-12 rounded-2xl bg-[#DFF8F8] text-[#0A5F6B] flex items-center justify-center shadow-xs">
                  <ShieldCheck className="w-6 h-6 text-[#0A5F6B]" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold font-exo text-[#29363A]">
                    Private Health Insurance &amp; Third-Party Administrators (TPAs)
                  </h2>
                  <p className="text-xs sm:text-sm text-[#719497] font-roboto">
                    Fast-track approvals, on-site TPA coordinators, and zero advance deposit for insured procedures.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {priv.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white border border-[#C4DFDF] shadow-sm hover:shadow-xl hover:border-[#0A5F6B]/40 transition-all duration-300 flex flex-col items-center justify-center text-center group h-36 hover:-translate-y-1"
                  >
                    <div className="relative h-14 w-full flex items-center justify-center mb-2">
                      <Image
                        src={item.logo}
                        alt={item.name}
                        width={120}
                        height={50}
                        className="object-contain max-h-12 group-hover:scale-108 transition-transform duration-300"
                      />
                    </div>
                    <span className="text-xs font-bold text-[#29363A] font-exo group-hover:text-[#0A5F6B] line-clamp-1 transition-colors">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 4. Cashless Admission Process Steps */}
      <section className="py-20 bg-[#DFF8F8]/30 border-y border-[#C4DFDF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0A5F6B] bg-[#DFF8F8] px-3.5 py-1.5 rounded-full border border-[#C4DFDF] font-exo inline-block shadow-2xs">
              Hassle-Free Settlement
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#29363A] font-exo tracking-tight">
              4 Steps for Cashless Hospitalization
            </h2>
            <p className="text-xs sm:text-sm text-[#719497] font-roboto">
              Dedicated insurance helpdesk stationed 24x7 across all 8 Medlix Hospitals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Show Health Card',
                desc: 'Present your health insurance card, TPA card, or Govt scheme ID at the admission/TPA desk upon arrival.'
              },
              {
                step: '02',
                title: 'Pre-Authorization',
                desc: 'Our dedicated TPA staff files the e-preauthorization request with your insurer within 30-45 minutes.'
              },
              {
                step: '03',
                title: 'Treatment & Care',
                desc: 'Receive super-specialty treatment and clinical procedures with zero advance deposit required.'
              },
              {
                step: '04',
                title: 'Cashless Discharge',
                desc: 'Upon recovery, final billing is settled directly between the hospital and your insurance company.'
              }
            ].map((st, i) => (
              <div 
                key={i}
                className="p-7 rounded-3xl bg-white border border-[#C4DFDF] shadow-sm hover:shadow-xl hover:border-[#0A5F6B]/40 hover:-translate-y-1.5 transition-all group relative space-y-3 overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#0A5F6B] opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="text-4xl font-black text-[#0A5F6B] font-outfit block">
                  {st.step}
                </span>
                <h4 className="text-base font-bold text-[#29363A] font-exo group-hover:text-[#0A5F6B] transition-colors">
                  {st.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#719497] font-roboto leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TPA Helpdesk Direct Contact */}
      <section className="py-12 bg-[#FDFEFE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-[#DFF8F8] to-[#C9F5F3] p-8 sm:p-10 border border-[#C4DFDF] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-xl sm:text-2xl font-bold font-exo text-[#29363A]">
                Need Help Checking Your Insurance Eligibility?
              </h3>
              <p className="text-xs sm:text-sm text-[#719497] font-roboto">
                Call our 24x7 Central TPA Helpdesk for immediate verification and cashless approval support.
              </p>
            </div>

            <a
              href="tel:+919289500375"
              className="px-6 py-3 bg-[#0A5F6B] hover:bg-[#07515C] text-white font-bold text-xs sm:text-sm rounded-xl transition-all shrink-0 flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#C9F5F3]" />
              <span>Contact TPA Desk: +91 92895 00375</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
