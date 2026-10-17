'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PageBanner from '@/components/ui/page-banner';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Search,
  ExternalLink,
  ShieldCheck,
  Calendar
} from 'lucide-react';
import medlixData from '@/lib/medlixData.json';

export default function LocationsPage() {
  const [cityFilter, setCityFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const locations = medlixData.locations;

  const cities = ['All', 'Gurugram', 'Palwal', 'Rewari', 'Greater Noida', 'Chhata / Mathura'];

  const filtered = locations.filter(loc => {
    const matchesCity = cityFilter === 'All' || loc.city.toLowerCase().includes(cityFilter.toLowerCase());
    const matchesQuery = loc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         loc.address.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCity && matchesQuery;
  });

  return (
    <div className="w-full flex flex-col">
      {/* 1. Page Banner */}
      <PageBanner
        title="Our Hospital Network"
        subtitle="8 multi-specialty and super-specialty hospitals delivering world-class healthcare, 24x7 emergency response, and intensive care across Haryana and Delhi NCR."
        badge="Multi-Center Healthcare Hub"
        breadcrumbs={[{ label: 'Our Hospitals' }]}
        imageSrc="/images/aarvy.jpg"
      />

      {/* 2. Premium Apollo-Style Search Section */}
      <section className="relative -mt-10 z-20 px-4 sm:px-6 lg:px-8 mb-8">
        <div className="max-w-5xl mx-auto bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-slate-100 p-4 sm:p-6 lg:p-8">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <h2 className="text-xl font-bold font-exo text-[#0A5F6B] flex items-center gap-2">
                <Search className="w-5 h-5 text-[#0A5F6B]" />
                Find a Hospital
              </h2>
              
              {/* Premium Search Input */}
              <div className="w-full sm:w-96 relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-slate-400 group-focus-within:text-[#0A5F6B] transition-colors" />
                </div>
                <input
                  type="text"
                  placeholder="Search by hospital name or area..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-[#C4DFDF] rounded-xl text-sm focus:outline-none focus:border-[#0A5F6B] focus:ring-2 focus:ring-[#C9F5F3] transition-all shadow-sm font-medium text-[#29363A]"
                />
              </div>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-4 border-t border-slate-100">
              <span className="text-sm font-bold text-[#719497] mr-2">Filter by City:</span>
              {cities.map((city) => (
                <button
                  key={city}
                  onClick={() => setCityFilter(city)}
                  className={`px-5 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all duration-300 font-exo ${
                    cityFilter === city
                      ? 'bg-gradient-to-r from-[#0A5F6B] to-[#07515C] text-white shadow-md scale-105'
                      : 'bg-white text-[#29363A] border border-[#C4DFDF] hover:bg-[#DFF8F8] hover:border-[#C9F5F3] hover:text-[#0A5F6B]'
                  }`}
                >
                  {city}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Hospital Cards Grid */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((loc, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl overflow-hidden border border-[#C4DFDF] shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:border-[#0A5F6B] hover:-translate-y-2 relative"
              >
                {/* Top Subtle Gradient Accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#0A5F6B] opacity-0 group-hover:opacity-100 transition-opacity z-10" />

                <div>
                  {/* Hospital Image Preview */}
                  <div className="relative h-56 w-full bg-slate-100 overflow-hidden">
                    <Image
                      src={loc.image}
                      alt={loc.name}
                      fill
                      className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                    
                    <div className="absolute top-3 left-3 bg-[#0A5F6B]/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full font-exo border border-white/20 shadow-sm">
                      {loc.beds}
                    </div>
                    <div className="absolute top-3 right-3 bg-[#0A5F6B] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider font-exo shadow-sm">
                      {loc.city}
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-medium font-exo">
                      <span className="bg-white/20 backdrop-blur-md px-2.5 py-0.5 rounded-md border border-white/20">
                        24x7 ICU &amp; Emergency
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <div className="text-xs font-bold text-[#0A5F6B] uppercase tracking-wider font-exo">
                        {loc.type}
                      </div>
                      <h3 className="text-xl font-bold font-exo text-[#29363A] group-hover:text-[#0A5F6B] transition-colors mt-1">
                        <Link href={`/${loc.slug}`}>
                          {loc.name}
                        </Link>
                      </h3>
                    </div>

                    <div className="flex items-start gap-2 text-xs sm:text-sm text-[#719497] font-roboto">
                      <MapPin className="w-4 h-4 text-[#0A5F6B] shrink-0 mt-0.5" />
                      <span>{loc.address}</span>
                    </div>

                    {/* Features list */}
                    {loc.features && (
                      <div className="pt-3 border-t border-[#C4DFDF] space-y-1.5">
                        <div className="text-[11px] font-bold text-[#719497] uppercase tracking-wider font-exo">Key Facilities:</div>
                        <div className="flex flex-wrap gap-1.5">
                          {loc.features.slice(0, 3).map((f, fIdx) => (
                            <span key={fIdx} className="text-[11px] px-2.5 py-0.5 rounded-md bg-[#DFF8F8] border border-[#C4DFDF] text-[#29363A] font-medium">
                              {f}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="p-6 pt-0 space-y-3">
                  <div className="pt-4 border-t border-[#C4DFDF] flex items-center justify-between text-xs">
                    <a
                      href={`tel:${loc.phone.replace(/\s+/g, '')}`}
                      className="font-bold text-[#29363A] hover:text-[#0A5F6B] flex items-center gap-1.5 transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#0A5F6B]" />
                      <span>{loc.phone}</span>
                    </a>

                    <Link
                      href={`/${loc.slug}`}
                      className="font-bold text-[#0A5F6B] hover:text-[#07515C] flex items-center gap-1 group/link"
                    >
                      <span>Branch Details</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  <Link
                    href={`/book-appointment`}
                    className="w-full py-3 bg-[#0A5F6B] hover:bg-[#07515C] text-white text-xs font-bold rounded-xl transition-all text-center flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book Appointment at this Hospital</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
