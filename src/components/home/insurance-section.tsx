'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ShieldCheck, 
  ArrowRight, 
  Sparkles, 
  Clock, 
  CreditCard, 
  HeartHandshake, 
  PhoneCall,
  CheckCircle2,
  SlidersHorizontal
} from 'lucide-react';
import medlixData from '@/lib/medlixData.json';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

interface InsuranceItem {
  name: string;
  logo: string;
  type?: 'govt' | 'private';
  desc?: string;
}

export default function InsuranceSection() {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'govt' | 'private'>('all');

  const govtList: InsuranceItem[] = (medlixData.insuranceGovt || []).map(item => ({
    ...item,
    type: 'govt'
  }));

  const privList: InsuranceItem[] = (medlixData.insurancePrivate || []).map(item => ({
    ...item,
    type: 'private'
  }));

  const allList: InsuranceItem[] = [...govtList, ...privList];

  // Distribute items for dual-stream continuous marquee
  const row1Items = [
    govtList[0], // CGHS
    privList[0], // TATA AIG
    govtList[1], // BSNL
    privList[1], // Bajaj Allianz
    govtList[2], // ECHS
    privList[2], // Acko
    govtList[3], // MHA
    privList[3], // Aditya Birla
    govtList[4], // NHAI
    privList[4], // Raksha TPA
    govtList[5], // Delhi Police
  ].filter(Boolean);

  const row2Items = [
    privList[5],  // United India
    privList[6],  // Vision TPA
    privList[7],  // Universal Sompo
    privList[8],  // Vipul Medcorp
    privList[9],  // Vidal Health
    privList[10], // United Health Care
    privList[11], // AHCT
    privList[12], // Air India
    privList[13], // Anmol Medicare
    privList[14], // Anyuta TPA
    govtList[0],  // CGHS
    privList[1],  // Bajaj Allianz
  ].filter(Boolean);

  const activeItems = selectedFilter === 'govt' 
    ? govtList 
    : selectedFilter === 'private' 
    ? privList 
    : allList;

  // Render a single logo card
  const renderCard = (item: InsuranceItem, keyIdx: number | string) => {
    const isGovt = item.type === 'govt';

    return (
      <div
        key={keyIdx}
        className="shrink-0 w-64 sm:w-72 mx-3 p-5 rounded-3xl bg-white border border-[#C4DFDF] shadow-xs hover:shadow-xl hover:border-[#0A5F6B] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden select-none cursor-pointer"
      >
        {/* Top hover gradient line accent */}
        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#0A5F6B] via-[#C9F5F3] to-[#0A5F6B] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Top Header Row */}
        <div className="flex items-center justify-between mb-3">
          <span 
            className="text-[10.5px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full font-exo bg-[#DFF8F8] text-[#0A5F6B] border border-[#C4DFDF] flex items-center gap-1 shadow-2xs"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-[#0A5F6B]" />
            <span>{isGovt ? 'Govt Panel' : 'Cashless TPA'}</span>
          </span>

          <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#0A5F6B] font-exo bg-[#DFF8F8]/70 px-2.5 py-0.5 rounded-full border border-[#C4DFDF]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0A5F6B] animate-pulse" />
            Empaneled
          </span>
        </div>

        {/* Center Framed Logo Badge Box with fixed h-20 (80px) */}
        <div className="w-full h-20 bg-[#FDFEFE] group-hover:bg-[#DFF8F8]/40 rounded-2xl p-2.5 flex items-center justify-center border border-[#C4DFDF] group-hover:border-[#0A5F6B]/40 transition-all duration-300 shadow-2xs overflow-hidden">
          <img
            src={item.logo}
            alt={item.name}
            className="max-h-12 max-w-[170px] w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Bottom Provider Name Caption */}
        <div className="mt-3 pt-2.5 border-t border-[#C4DFDF]/60 flex items-center justify-between">
          <p className="text-xs font-bold text-[#29363A] font-exo truncate max-w-[170px] group-hover:text-[#0A5F6B] transition-colors">
            {item.name}
          </p>
          <span className="text-[10.5px] font-extrabold text-[#0A5F6B] font-exo group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
            <span>Cashless</span>
            <CheckCircle2 className="w-3.5 h-3.5 text-[#0A5F6B]" />
          </span>
        </div>
      </div>
    );
  };

  return (
    <section id="insurance" className="py-20 lg:py-24 bg-gradient-to-b from-[#FDFEFE] via-[#DFF8F8]/30 to-[#FDFEFE] border-b border-[#C4DFDF] overflow-hidden relative font-['Outfit',sans-serif]">
      {/* Decorative Background Glow Orbs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C9F5F3]/30 rounded-full blur-3xl pointer-events-none animate-float" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#DFF8F8]/40 rounded-full blur-3xl pointer-events-none animate-float-reverse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up" duration={0.65}>
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3.5">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0A5F6B] bg-[#DFF8F8] px-4 py-1.5 rounded-full border border-[#C4DFDF] shadow-2xs font-exo">
              <ShieldCheck className="w-4 h-4 text-[#0A5F6B]" />
              <span>100% Cashless Hospitalization</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#29363A] font-exo tracking-tight">
              Insurance Tie –Ups &amp; TPAs
            </h2>

            <p className="text-[#719497] text-sm sm:text-base font-roboto leading-relaxed max-w-2xl mx-auto">
              Hassle-free, transparent cashless hospitalization empaneled with premier Government organizations and major Private Insurance TPAs across all 8 Medlix Hospitals.
            </p>

            {/* Interactive Filter Pills Segment */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => setSelectedFilter('all')}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold font-exo transition-all duration-200 flex items-center gap-2 border cursor-pointer ${
                  selectedFilter === 'all'
                    ? 'bg-[#0A5F6B] text-white border-[#0A5F6B] shadow-md'
                    : 'bg-white text-[#29363A] border-[#C4DFDF] hover:bg-[#DFF8F8] hover:text-[#0A5F6B]'
                }`}
              >
                <Sparkles className="w-4 h-4 text-[#C9F5F3]" />
                <span>All Partners ({allList.length})</span>
              </button>

              <button
                onClick={() => setSelectedFilter('govt')}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold font-exo transition-all duration-200 flex items-center gap-2 border cursor-pointer ${
                  selectedFilter === 'govt'
                    ? 'bg-[#0A5F6B] text-white border-[#0A5F6B] shadow-md'
                    : 'bg-white text-[#29363A] border-[#C4DFDF] hover:bg-[#DFF8F8] hover:text-[#0A5F6B]'
                }`}
              >
                <CheckCircle2 className="w-4 h-4 text-[#0A5F6B]" />
                <span>Government Panels ({govtList.length})</span>
              </button>

              <button
                onClick={() => setSelectedFilter('private')}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold font-exo transition-all duration-200 flex items-center gap-2 border cursor-pointer ${
                  selectedFilter === 'private'
                    ? 'bg-[#0A5F6B] text-white border-[#0A5F6B] shadow-md'
                    : 'bg-white text-[#29363A] border-[#C4DFDF] hover:bg-[#DFF8F8] hover:text-[#0A5F6B]'
                }`}
              >
                <CreditCard className="w-4 h-4 text-[#0A5F6B]" />
                <span>Private Insurance &amp; TPAs ({privList.length})</span>
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Marquee Display Container */}
      <div className="relative w-full py-4 marquee-container">
        {/* Left & Right Smooth Gradient Fade Masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-36 bg-gradient-to-r from-[#FDFEFE] via-[#FDFEFE]/80 to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-36 bg-gradient-to-l from-[#FDFEFE] via-[#FDFEFE]/80 to-transparent z-20" />

        {selectedFilter === 'all' ? (
          /* Dual-Row Oppositely Moving Infinite Smooth Tickers */
          <div className="space-y-6">
            {/* Stream 1: Leftward Infinite Marquee */}
            <div className="flex overflow-hidden">
              <div className="marquee-track-left">
                {/* 3x clone for uninterrupted seamless infinite loop */}
                {[...row1Items, ...row1Items, ...row1Items].map((item, idx) =>
                  renderCard(item, `r1-${idx}`)
                )}
              </div>
            </div>

            {/* Stream 2: Rightward Infinite Marquee */}
            <div className="flex overflow-hidden">
              <div className="marquee-track-right">
                {/* 3x clone for uninterrupted seamless infinite loop */}
                {[...row2Items, ...row2Items, ...row2Items].map((item, idx) =>
                  renderCard(item, `r2-${idx}`)
                )}
              </div>
            </div>
          </div>
        ) : (
          /* Filtered Single Row Infinite Marquee */
          <div className="flex overflow-hidden py-2">
            <div className="marquee-track-left">
              {[...activeItems, ...activeItems, ...activeItems, ...activeItems].map((item, idx) =>
                renderCard(item, `filtered-${idx}`)
              )}
            </div>
          </div>
        )}

        {/* Hover hint */}
        <div className="text-center mt-4">
          <span className="text-xs font-roboto text-[#719497] inline-flex items-center gap-1.5 bg-white px-4 py-1 rounded-full border border-[#C4DFDF] shadow-2xs">
            <span className="inline-block w-2 h-2 rounded-full bg-[#0A5F6B] animate-pulse" />
            Hover over any logo card to pause &amp; examine details
          </span>
        </div>
      </div>

      {/* Trust Pillars & TPA Callout Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <ScrollReveal direction="up" duration={0.65} delay={0.15}>
          <div className="bg-white rounded-3xl p-6 sm:p-9 border border-[#C4DFDF] shadow-lg relative overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#C4DFDF]">
              {/* Feature 1 */}
              <div className="pt-4 sm:pt-0 sm:px-4 space-y-2">
                <div className="w-12 h-12 rounded-2xl bg-[#DFF8F8] text-[#0A5F6B] flex items-center justify-center mb-3 border border-[#C4DFDF]">
                  <CreditCard className="w-6 h-6 text-[#0A5F6B]" />
                </div>
                <h4 className="text-base font-bold text-[#29363A] font-exo">100% Cashless Facility</h4>
                <p className="text-xs text-[#719497] font-roboto leading-relaxed">
                  Direct billing with all major empanelled TPAs across our 8 hospitals.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="pt-4 sm:pt-0 sm:px-4 space-y-2">
                <div className="w-12 h-12 rounded-2xl bg-[#DFF8F8] text-[#0A5F6B] flex items-center justify-center mb-3 border border-[#C4DFDF]">
                  <Clock className="w-6 h-6 text-[#0A5F6B]" />
                </div>
                <h4 className="text-base font-bold text-[#29363A] font-exo">30-Min Pre-Authorization</h4>
                <p className="text-xs text-[#719497] font-roboto leading-relaxed">
                  Dedicated on-site TPA coordinators to expedite approvals without delay.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="pt-4 sm:pt-0 sm:px-4 space-y-2">
                <div className="w-12 h-12 rounded-2xl bg-[#DFF8F8] text-[#0A5F6B] flex items-center justify-center mb-3 border border-[#C4DFDF]">
                  <ShieldCheck className="w-6 h-6 text-[#0A5F6B]" />
                </div>
                <h4 className="text-base font-bold text-[#29363A] font-exo">Zero Advance Deposit</h4>
                <p className="text-xs text-[#719497] font-roboto leading-relaxed">
                  Immediate patient admission in emergency cases with approved coverage.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="pt-4 sm:pt-0 sm:px-4 space-y-2">
                <div className="w-12 h-12 rounded-2xl bg-[#DFF8F8] text-[#0A5F6B] flex items-center justify-center mb-3 border border-[#C4DFDF]">
                  <PhoneCall className="w-6 h-6 text-[#0A5F6B]" />
                </div>
                <h4 className="text-base font-bold text-[#29363A] font-exo">24x7 TPA Help Desk</h4>
                <p className="text-xs text-[#719497] font-roboto leading-relaxed">
                  Direct phone support for queries, pre-auth, and discharge billing.
                </p>
              </div>
            </div>

            {/* Action Row */}
            <div className="mt-8 pt-6 border-t border-[#C4DFDF] flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs sm:text-sm text-[#719497] font-roboto text-center sm:text-left">
                Need assistance checking your policy coverage or empanelled status?
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="tel:+919220143473"
                  className="px-5 py-2.5 rounded-full bg-[#DFF8F8] hover:bg-[#C9F5F3] text-[#0A5F6B] font-bold text-xs sm:text-sm font-exo border border-[#C4DFDF] transition-colors flex items-center gap-2"
                >
                  <PhoneCall className="w-4 h-4 text-[#0A5F6B]" />
                  <span>Call TPA Desk: +91-9220143473</span>
                </a>

                <Link
                  href="/insurances"
                  className="px-6 py-2.5 rounded-full bg-[#0A5F6B] hover:bg-[#07515C] text-white font-bold text-xs sm:text-sm font-exo shadow-md transition-all flex items-center gap-1.5 group shine-sweep btn-pulse"
                >
                  <span>View Full Insurance Directory</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
