'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PageBanner from '@/components/ui/page-banner';
import { 
  Stethoscope, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  Phone, 
  ArrowRight, 
  Search,
  Filter,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import medlixData from '@/lib/medlixData.json';

export default function DepartmentPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDept, setSelectedDept] = useState<string | null>(null);

  const specialties = medlixData.specialties;

  const filtered = specialties.filter(s => 
    s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full flex flex-col">
      {/* 1. Page Hero Banner */}
      <PageBanner
        title="Medical Specialties & Departments"
        subtitle="Expert clinical care across 25+ specialized departments, equipped with cutting-edge medical technologies and renowned specialists."
        badge="Centers of Clinical Excellence"
        breadcrumbs={[{ label: 'Departments' }]}
        imageSrc="/images/banner1.png"
      />

      {/* 2. Department Filter & Search Bar */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1">
              <h2 className="text-xl sm:text-2xl font-bold font-exo text-slate-900">
                Explore Clinical Departments
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-roboto">
                Showing {filtered.length} medical specialties with full diagnostic and therapeutic capabilities.
              </p>
            </div>

            {/* Search Input */}
            <div className="w-full md:w-80 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search specialty, illness, surgery..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#C4DFDF] rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#0A5F6B] focus:ring-1 focus:ring-[#C9F5F3] shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Specialties Grid with Detailed Cards */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((spec, idx) => (
              <div
                key={idx}
                id={spec.slug}
                className="bg-white rounded-3xl border border-[#C4DFDF] shadow-sm hover:shadow-2xl transition-all duration-300 p-7 flex flex-col justify-between group hover:border-[#0A5F6B] hover:-translate-y-2 relative overflow-hidden"
              >
                {/* Top Subtle Gradient Accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#0A5F6B] opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="space-y-4">
                  {/* Top Icon & Slug */}
                  <div className="flex items-center justify-between">
                    <div className="w-16 h-16 rounded-2xl bg-[#DFF8F8] p-3 shadow-xs border border-[#C4DFDF] flex items-center justify-center group-hover:bg-[#0A5F6B] group-hover:scale-110 transition-all duration-300">
                      <Image
                        src={(spec as any).icon || (spec as any).image || '/images/specialties/cardiology.png'}
                        alt={spec.title}
                        width={44}
                        height={44}
                        className="object-contain group-hover:brightness-0 group-hover:invert transition-all"
                      />
                    </div>
                    <span className="text-[11px] font-bold text-[#0A5F6B] bg-[#DFF8F8] px-3 py-1 rounded-full border border-[#C4DFDF] font-exo shadow-2xs">
                      Center of Excellence
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold font-exo text-[#29363A] group-hover:text-[#0A5F6B] transition-colors">
                      {spec.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#719497] font-roboto mt-2 leading-relaxed">
                      {spec.desc}
                    </p>
                  </div>

                  {/* Conditions Treated Chips */}
                  {spec.conditions && spec.conditions.length > 0 && (
                    <div className="space-y-2 pt-2">
                      <div className="text-[11px] font-bold text-[#719497] uppercase tracking-wider font-exo">
                        Key Conditions &amp; Procedures:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {spec.conditions.map((c, cIdx) => (
                          <span
                            key={cIdx}
                            className="text-[11px] px-2.5 py-1 rounded-lg bg-[#DFF8F8] border border-[#C4DFDF] text-[#29363A] font-medium hover:bg-[#C9F5F3] hover:text-[#0A5F6B] hover:border-[#0A5F6B] transition-colors"
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Actions */}
                <div className="pt-6 border-t border-[#C4DFDF] mt-6 flex items-center justify-between">
                  <Link
                    href={`/doctors`}
                    className="text-xs font-bold text-[#719497] hover:text-[#0A5F6B] flex items-center gap-1 group/btn"
                  >
                    <span>View Specialists</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    href={`/book-appointment`}
                    className="px-4 py-2 bg-[#0A5F6B] hover:bg-[#07515C] text-white text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 shadow-sm hover:shadow-md"
                  >
                    <Calendar className="w-3 h-3" />
                    <span>Book OPD</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 bg-slate-50 rounded-3xl border border-dashed border-slate-300">
              <Stethoscope className="w-12 h-12 text-slate-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-slate-700 font-exo">No departments match your search</h3>
              <p className="text-xs text-slate-500 mt-1">Try searching with a different specialty name or condition.</p>
              <button
                onClick={() => setSearchQuery('')}
                className="mt-4 px-5 py-2.5 text-xs font-bold text-white bg-[#0A5F6B] hover:bg-[#07515C] rounded-xl transition-all shadow-sm"
              >
                Reset Filter
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 4. Weekly Outpatient Schedule */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0A5F6B] bg-[#DFF8F8] px-3.5 py-1.5 rounded-full border border-[#C4DFDF] font-exo inline-block shadow-2xs">
              Consultation Schedule
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#29363A] font-exo tracking-tight">
              Department Timings
            </h2>
            <p className="text-[#719497] text-xs sm:text-sm font-roboto">
              All major clinics operate Monday through Saturday. Emergency &amp; ICU facilities are open 24x7.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-[#C4DFDF] overflow-hidden shadow-lg">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
              <div className="p-7 space-y-2 hover:bg-[#DFF8F8]/50 transition-colors">
                <div className="text-xs font-bold text-[#0A5F6B] uppercase tracking-wider font-exo">Morning OPD</div>
                <div className="text-2xl font-black text-[#29363A] font-outfit">08:00 AM – 02:00 PM</div>
                <p className="text-xs text-[#719497] leading-relaxed font-roboto">Cardiology, Internal Medicine, Orthopaedics, Paediatrics, Diagnostics</p>
              </div>

              <div className="p-7 space-y-2 hover:bg-[#DFF8F8]/50 transition-colors">
                <div className="text-xs font-bold text-[#0A5F6B] uppercase tracking-wider font-exo">Evening OPD</div>
                <div className="text-2xl font-black text-[#29363A] font-outfit">04:00 PM – 09:30 PM</div>
                <p className="text-xs text-[#719497] leading-relaxed font-roboto">General Surgery, Gynecology, Nephrology, Neurology, Urology</p>
              </div>

              <div className="p-7 space-y-2 hover:bg-[#DFF8F8]/50 transition-colors">
                <div className="text-xs font-bold text-[#0A5F6B] uppercase tracking-wider font-exo">Sunday Clinics</div>
                <div className="text-2xl font-black text-[#29363A] font-outfit">09:00 AM – 02:00 PM</div>
                <p className="text-xs text-[#719497] leading-relaxed font-roboto">Rotating senior consultant OPDs and scheduled elective procedures</p>
              </div>

              <div className="p-7 space-y-2 bg-gradient-to-br from-[#07515C] to-[#0A5F6B] text-white">
                <div className="text-xs font-bold text-teal-300 uppercase tracking-wider font-exo">Trauma &amp; Emergency</div>
                <div className="text-2xl font-black text-white font-outfit">24 Hours / 7 Days</div>
                <p className="text-xs text-teal-200 leading-relaxed font-roboto">ICU, CCU, Ambulance, Pharmacy, and Diagnostics operational non-stop</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
