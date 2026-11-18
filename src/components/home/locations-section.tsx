'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Building2, ArrowRight, Sparkles, BedDouble, ShieldCheck } from 'lucide-react';
import medlixData from '@/lib/medlixData.json';
import { ScrollReveal, SectionHeadingReveal } from '@/components/ui/scroll-reveal';

interface LocationsSectionProps {
  onOpenAppointment?: () => void;
}

export default function LocationsSection({ onOpenAppointment }: LocationsSectionProps) {
  // Show a focused selection of 4 flagship hospitals on the homepage as requested, with links to full directory
  const allLocations = medlixData.locations || [];
  const focusedLocations = allLocations.slice(0, 4);

  return (
    <section id="locations" className="py-12 sm:py-20 lg:py-36 bg-white border-b border-slate-200/80 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with View All 8 Hospitals button */}
        <ScrollReveal direction="up" duration={0.65}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-14 lg:mb-20 gap-4 sm:gap-6">
            <div className="space-y-3 sm:space-y-4">
              <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0A5F6B] bg-[#E6F7F7] px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full border border-teal-200/80 shadow-2xs">
                <Building2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0A5F6B]" />
                <span>Multi-Center Hospital Network</span>
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-[46px] font-extrabold text-[#0A2540] tracking-tight leading-[1.2]">
                Our Hospital Locations
              </h2>
              <div className="w-16 h-1.5 rounded-full bg-gradient-to-r from-[#0A5F6B] to-[#14B8A6]" />
              <p className="text-slate-600 text-sm sm:text-lg max-w-2xl font-normal leading-relaxed">
                Find a Medlix Hospital branch nearest to you equipped with 24x7 emergency response, intensive care, and advanced diagnostics across Haryana &amp; Delhi NCR.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 sm:gap-3.5 shrink-0">
              <Link
                href="/locations"
                className="inline-flex items-center gap-2 px-5 sm:px-7 py-3 sm:py-4 bg-[#0A5F6B] hover:bg-[#07515C] text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-2xl transition-all shadow-md hover:shadow-lg group"
              >
                <span>View All 8 Hospitals</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="tel:+919220143473"
                className="hidden sm:inline-flex items-center gap-2 px-6 py-4 bg-slate-50 border border-slate-200 text-slate-800 text-xs sm:text-sm font-bold rounded-2xl hover:bg-[#E6F7F7] hover:text-[#0A5F6B] transition-colors shadow-2xs"
              >
                <Phone className="w-4 h-4 text-[#0A5F6B]" />
                <span>24x7: +91-9220143473</span>
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Focused 4 Locations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 lg:gap-9">
          {focusedLocations.map((loc, idx) => (
            <ScrollReveal
              key={idx}
              direction="up"
              duration={0.55}
              delay={0.1 * idx}
            >
              <div
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-[0_4px_20px_rgba(10,37,64,0.05)] hover:shadow-[0_22px_45px_rgba(10,95,107,0.14)] hover:border-[#0A5F6B] transition-all duration-300 flex flex-col group hover:-translate-y-2 h-full relative"
              >
                {/* Top border shine on hover */}
                <div className="absolute top-0 inset-x-0 h-1.5 z-20 bg-gradient-to-r from-[#0A5F6B] via-[#2DD4BF] to-[#0A5F6B] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Image Preview Container */}
                <Link href={`/${loc.slug}`} className="relative h-44 sm:h-56 lg:h-60 w-full bg-slate-100 overflow-hidden block">
                  <Image
                    src={loc.image || '/images/aarvy.jpg'}
                    alt={loc.name}
                    fill
                    className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/80 via-transparent to-transparent opacity-80" />
                  
                  {/* Bed capacity badge */}
                  <div className="absolute top-3 left-3 sm:top-3.5 sm:left-3.5 bg-[#0A2540]/85 backdrop-blur-md text-white text-[10.5px] sm:text-[11px] font-bold px-2.5 sm:px-3 py-1 rounded-xl shadow-sm border border-white/20 flex items-center gap-1.5">
                    <BedDouble className="w-3.5 h-3.5 text-teal-300" />
                    <span>{loc.beds}</span>
                  </div>

                  {/* 24/7 status badge */}
                  <div className="absolute top-3 right-3 sm:top-3.5 sm:right-3.5 bg-rose-600 text-white text-[10px] sm:text-[10.5px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                    <span>24x7 ICU</span>
                  </div>
                </Link>

                {/* Card Body */}
                <div className="p-5 sm:p-7 lg:p-8 flex-1 flex flex-col justify-between space-y-4 sm:space-y-5">
                  <div className="space-y-2.5">
                    <h3 className="text-xl font-bold text-[#0A2540] group-hover:text-[#0A5F6B] transition-colors leading-snug">
                      <Link href={`/${loc.slug}`}>
                        {loc.name}
                      </Link>
                    </h3>
                    <div className="flex items-start gap-1.5 text-sm text-slate-600 leading-relaxed font-normal">
                      <MapPin className="w-4 h-4 text-[#0A5F6B] shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{loc.address}</span>
                    </div>
                  </div>

                  {/* Actions Row */}
                  <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href={`/${loc.slug}`}
                      className="text-xs sm:text-sm font-bold text-[#0A5F6B] hover:text-[#07515C] flex items-center gap-1 group/btn"
                    >
                      <span>Branch Details</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>

                    <button
                      onClick={onOpenAppointment}
                      className="text-xs sm:text-sm font-bold bg-[#E6F7F7] hover:bg-[#0A5F6B] text-[#0A5F6B] hover:text-white px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 border border-teal-200/80 cursor-pointer"
                    >
                      <span>Book Slot</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom Hospital Network Banner */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-slate-500">
            Looking for other branches? We also operate locations in Rewari, Faridabad (Ballabgarh), Greater Noida, and Chhata (Mathura).{' '}
            <Link href="/locations" className="font-bold text-[#0A5F6B] hover:underline">
              Browse full network directory →
            </Link>
          </p>
        </div>

      </div>
    </section>
  );
}
