'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Building2, ArrowRight, Sparkles } from 'lucide-react';
import medlixData from '@/lib/medlixData.json';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

interface LocationsSectionProps {
  onOpenAppointment?: () => void;
}

export default function LocationsSection({ onOpenAppointment }: LocationsSectionProps) {
  const locations = medlixData.locations;

  return (
    <section id="locations" className="py-20 sm:py-24 bg-white border-b border-slate-100 font-['Outfit',sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" duration={0.65}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0A5F6B] bg-[#DFF8F8] px-3.5 py-1.5 rounded-full border border-[#C4DFDF] font-exo shadow-2xs">
                <Building2 className="w-3.5 h-3.5 text-[#0A5F6B]" />
                <span>Multi-Center Network</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#29363A] font-exo tracking-tight">
                Our Hospital Locations
              </h2>
              <div className="w-16 h-1 rounded-full bg-gradient-to-r from-[#0A5F6B] via-[#C9F5F3] to-transparent" />
              <p className="text-[#719497] text-xs sm:text-sm font-roboto max-w-2xl font-normal leading-relaxed pt-1">
                Find a Medlix Hospital nearest to you equipped with 24x7 emergency response, advanced diagnostics, and outpatient consultations across 8 locations in NCR.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/locations"
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#0A5F6B] hover:bg-[#07515C] text-white text-xs font-bold rounded-xl transition-all shadow-md font-exo"
              >
                <span>View All 8 Hospitals</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <a
                href="tel:+919220143473"
                className="hidden sm:inline-flex items-center gap-2 px-5 py-3 bg-[#FDFEFE] border border-[#C4DFDF] text-[#29363A] text-xs font-bold rounded-xl hover:bg-[#DFF8F8] hover:text-[#0A5F6B] transition-colors shadow-xs font-exo"
              >
                <Phone className="w-3.5 h-3.5 text-[#0A5F6B]" />
                <span>24x7: +91-9220143473</span>
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((loc, idx) => (
            <ScrollReveal
              key={idx}
              direction="up"
              duration={0.55}
              delay={0.08 * (idx % 4) + Math.floor(idx / 4) * 0.1}
            >
              <div
                className="bg-[#FDFEFE] rounded-3xl overflow-hidden border border-[#C4DFDF] shadow-xs hover:shadow-md hover:border-[#0A5F6B] transition-all duration-300 flex flex-col group hover:-translate-y-2 h-full relative"
              >
                {/* Top border shine on hover */}
                <div className="absolute top-0 inset-x-0 h-1.5 z-20 bg-gradient-to-r from-[#0A5F6B] via-[#C9F5F3] to-[#0A5F6B] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Image Preview */}
                <Link href={`/${loc.slug}`} className="relative h-52 w-full bg-slate-100 overflow-hidden block">
                  <Image
                    src={loc.image}
                    alt={loc.name}
                    fill
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#29363A]/70 via-transparent to-transparent opacity-70" />
                  
                  {/* Bed capacity badge */}
                  <div className="absolute top-3 left-3 bg-[#0A5F6B]/90 backdrop-blur-md text-white text-[10.5px] font-bold px-3 py-1 rounded-xl font-exo shadow-sm border border-white/20">
                    {loc.beds}
                  </div>

                  {/* 24/7 status badge */}
                  <div className="absolute top-3 right-3 bg-[#0A5F6B] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full font-exo uppercase tracking-wider shadow-sm flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    <span>24x7 ICU</span>
                  </div>
                </Link>

                {/* Card Body */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-base font-bold text-[#29363A] font-exo group-hover:text-[#0A5F6B] transition-colors leading-snug">
                      <Link href={`/${loc.slug}`}>
                        {loc.name}
                      </Link>
                    </h3>
                    <div className="flex items-start gap-1.5 text-xs text-[#719497] font-roboto">
                      <MapPin className="w-3.5 h-3.5 text-[#0A5F6B] shrink-0 mt-0.5" />
                      <span className="line-clamp-2 leading-relaxed">{loc.address}</span>
                    </div>
                  </div>

                  <div className="pt-3.5 border-t border-[#C4DFDF]/60 flex items-center justify-between">
                    <Link
                      href={`/${loc.slug}`}
                      className="text-xs font-bold text-[#0A5F6B] hover:text-[#07515C] flex items-center gap-1 font-exo group/btn"
                    >
                      <span>Branch Details</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>

                    <button
                      onClick={onOpenAppointment}
                      className="text-xs font-bold bg-[#DFF8F8] hover:bg-[#0A5F6B] text-[#0A5F6B] hover:text-white px-3 py-1.5 rounded-xl transition-all font-exo flex items-center gap-1 group/btn border border-[#C4DFDF]"
                    >
                      <span>Book Slot</span>
                      <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>
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
