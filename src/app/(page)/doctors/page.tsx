'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PageBanner from '@/components/ui/page-banner';
import { 
  Stethoscope, 
  MapPin, 
  Calendar, 
  Clock, 
  Award, 
  Search, 
  ChevronRight, 
  Phone,
  ShieldCheck
} from 'lucide-react';
import medlixData from '@/lib/medlixData.json';

export default function DoctorsPage() {
  const [selectedSpecialty, setSelectedSpecialty] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const doctors = medlixData.doctors || [];

  const specialtyFilters = [
    'All',
    'Cardiology',
    'Gastrosurgery',
    'Nephrology',
    'Orthopaedics',
    'Neurology',
    'Critical Care',
    'Paediatrics',
    'Urology'
  ];

  const filteredDoctors = doctors.filter(doc => {
    const matchesSpec = selectedSpecialty === 'All' || doc.specialty.toLowerCase().includes(selectedSpecialty.toLowerCase());
    const matchesQuery = doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doc.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doc.hospital.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSpec && matchesQuery;
  });

  return (
    <div className="w-full flex flex-col">
      {/* 1. Page Hero Banner */}
      <PageBanner
        title="Meet Our Specialists"
        subtitle="Highly trained senior consultants, surgeons, and clinicians dedicated to providing empathetic, evidence-based healthcare."
        badge="Specialist Doctor Directory"
        breadcrumbs={[{ label: 'Doctors' }]}
        imageSrc="/images/page-banner.jpg"
      />

      {/* 2. Filter & Search Controls */}
      <section className="py-8 bg-slate-50/80 backdrop-blur-md border-b border-slate-200 sticky top-[72px] lg:top-[88px] z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Specialty Filter Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              {specialtyFilters.map((spec) => (
                <button
                  key={spec}
                  onClick={() => setSelectedSpecialty(spec)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all font-exo ${
                    selectedSpecialty === spec
                      ? 'bg-gradient-to-r from-[#0A5F6B] to-[#07515C] text-white shadow-md'
                      : 'bg-white text-[#29363A] border border-[#C4DFDF] hover:bg-[#DFF8F8] hover:border-[#C9F5F3]'
                  }`}
                >
                  {spec}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="w-full md:w-80 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search doctor, hospital, or specialty..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#C4DFDF] rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#0A5F6B] focus:ring-2 focus:ring-[#C9F5F3] shadow-xs"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Doctors List */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredDoctors.map((doc, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl overflow-hidden border border-[#C4DFDF] shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:border-[#0A5F6B] hover:-translate-y-2 relative"
              >
                {/* Top Subtle Gradient Accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#0A5F6B] opacity-0 group-hover:opacity-100 transition-opacity z-10" />

                <div>
                  {/* Doctor Portrait */}
                  <div className="relative h-64 w-full bg-slate-100 overflow-hidden">
                    <Image
                      src={doc.image || '/images/doctors/doctor-02.jpg'}
                      alt={doc.name}
                      fill
                      className="object-cover object-top group-hover:scale-108 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                    
                    {/* Experience Badge */}
                    <div className="absolute top-3 left-3 bg-[#0A5F6B]/90 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full font-exo border border-white/20 shadow-sm">
                      {doc.experience}
                    </div>

                    {/* Specialty Pill on image bottom */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-white bg-[#0A5F6B] px-2.5 py-0.5 rounded-full font-exo shadow-sm">
                        {doc.specialty}
                      </span>
                    </div>
                  </div>

                  {/* Doctor Info */}
                  <div className="p-5 space-y-3">
                    <div>
                      <h3 className="text-lg font-bold font-exo text-[#29363A] group-hover:text-[#0A5F6B] transition-colors leading-snug">
                        {doc.name}
                      </h3>
                      <div className="text-xs text-[#719497] font-roboto mt-0.5 flex items-center gap-1">
                        <Award className="w-3.5 h-3.5 text-[#0A5F6B] shrink-0" />
                        <span className="truncate">{doc.qualification}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-1.5 text-xs text-[#29363A] font-roboto bg-[#DFF8F8] p-2.5 rounded-xl border border-[#C4DFDF]">
                      <MapPin className="w-3.5 h-3.5 text-[#0A5F6B] shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{doc.hospital}</span>
                    </div>

                    {doc.bio && (
                      <p className="text-xs text-[#719497] font-roboto line-clamp-2 leading-relaxed pt-1 border-t border-[#C4DFDF]">
                        {doc.bio}
                      </p>
                    )}
                  </div>
                </div>

                {/* Card Action */}
                <div className="p-5 pt-0">
                  <Link
                    href={`/book-appointment`}
                    className="w-full py-3 bg-[#0A5F6B] hover:bg-[#07515C] text-white text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-sm hover:shadow-md active:scale-[0.98]"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book Consultation</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredDoctors.length === 0 && (
            <div className="text-center py-20 bg-slate-50 rounded-3xl border border-dashed border-slate-300">
              <Stethoscope className="w-12 h-12 text-slate-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-slate-700 font-exo">No specialists match your criteria</h3>
              <p className="text-xs text-slate-500 mt-1">Try resetting the specialty or search filter.</p>
              <button
                onClick={() => { setSelectedSpecialty('All'); setSearchQuery(''); }}
                className="mt-4 px-5 py-2.5 text-xs font-bold text-white bg-[#0A5F6B] hover:bg-[#07515C] rounded-xl transition-all shadow-sm"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 4. Second Opinion & Emergency OPD Hotline */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#07515C] to-[#0A5F6B] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden">
            <div className="space-y-2 text-center md:text-left relative z-10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C9F5F3] bg-white/10 px-3 py-1 rounded-full font-exo inline-block">
                Clinical Second Opinion
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-exo">
                Need a Second Opinion or Urgent Clinical Evaluation?
              </h3>
              <p className="text-xs sm:text-sm text-teal-100 font-roboto max-w-xl">
                Share your previous diagnostic reports with our senior specialists for a verified clinical review.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 relative z-10">
              <a
                href="tel:+919289500375"
                className="px-6 py-3.5 bg-[#0A5F6B] hover:bg-[#07515C] border border-[#C9F5F3]/30 text-white font-bold text-xs sm:text-sm rounded-xl transition-all flex items-center gap-2 shadow-lg hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4" />
                <span>Call: +91 92895 00375</span>
              </a>

              <Link
                href="/book-appointment"
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm rounded-xl border border-white/25 transition-all hover:-translate-y-0.5"
              >
                Upload Records
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
