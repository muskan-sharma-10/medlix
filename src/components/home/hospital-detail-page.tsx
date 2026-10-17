'use client';

import React from 'react';
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
  Calendar, 
  ShieldCheck, 
  Ambulance, 
  Stethoscope, 
  Activity,
  ArrowRight
} from 'lucide-react';
import medlixData from '@/lib/medlixData.json';

interface HospitalDetailPageProps {
  slug: string;
}

export default function HospitalDetailPage({ slug }: HospitalDetailPageProps) {
  const hospital = medlixData.locations.find(l => l.slug === slug) || medlixData.locations[0];

  return (
    <div className="w-full flex flex-col">
      {/* 1. Page Hero Banner */}
      <PageBanner
        title={hospital.name}
        subtitle={`${hospital.address} • ${hospital.type} with 24x7 Emergency, Intensive Care & Outpatient Facilities.`}
        badge={hospital.type}
        breadcrumbs={[
          { label: 'Our Hospitals', href: '/locations' },
          { label: hospital.name }
        ]}
        imageSrc={hospital.image}
      />

      {/* 2. Main Hospital Showcase */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-slate-200/80 group">
                <Image
                  src={hospital.image}
                  alt={hospital.name}
                  width={640}
                  height={480}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Bed Count Tag */}
              <div className="absolute -bottom-6 left-6 bg-[#0A5F6B] text-white p-5 rounded-2xl shadow-xl border border-[#C4DFDF] flex items-center gap-4 transition-transform duration-300 hover:scale-105">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <Building2 className="w-6 h-6 text-[#C9F5F3]" />
                </div>
                <div>
                  <div className="text-base font-bold font-exo">{hospital.beds} Facility</div>
                  <div className="text-xs text-[#DFF8F8]">NABH Aligned Clinical Systems</div>
                </div>
              </div>
            </div>

            {/* Information Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0A5F6B] bg-[#DFF8F8] px-3.5 py-1.5 rounded-full border border-[#C4DFDF] font-exo inline-flex items-center gap-1.5 shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-[#0A5F6B] animate-pulse" />
                  Hospital Branch Profile
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#29363A] font-exo tracking-tight leading-tight">
                  {hospital.name}
                </h2>
                <div className="w-20 h-1.5 rounded-full bg-[#0A5F6B]" />
              </div>

              <div className="p-5 rounded-2xl bg-[#FDFEFE] border border-[#C4DFDF] space-y-3 text-sm shadow-xs">
                <div className="flex items-start gap-2.5 text-[#29363A]">
                  <MapPin className="w-4 h-4 text-[#0A5F6B] shrink-0 mt-0.5" />
                  <span className="font-medium">{hospital.address}</span>
                </div>
                <div className="flex items-center gap-2.5 text-[#29363A]">
                  <Phone className="w-4 h-4 text-[#0A5F6B] shrink-0" />
                  <a href={`tel:${hospital.phone.replace(/\s+/g, '')}`} className="font-bold text-[#0A5F6B] hover:text-[#07515C] transition-colors">
                    {hospital.phone}
                  </a>
                  <span className="text-xs text-[#719497]">| 24x7 Emergency Desk</span>
                </div>
                <div className="flex items-center gap-2.5 text-[#29363A]">
                  <Clock className="w-4 h-4 text-[#0A5F6B] shrink-0" />
                  <span className="text-xs text-[#719497] font-medium">OPD: Mon - Sat (8:00 AM - 10:00 PM)</span>
                </div>
              </div>

              <p className="text-[#719497] text-sm sm:text-base leading-relaxed font-roboto">
                Equipped with cutting-edge medical technologies, sterile modular operation suites, full-fledged intensive care units, and experienced clinical consultants, {hospital.name} provides end-to-end medical care to patients with empathy and complete transparency.
              </p>

              {/* Hospital Key Features */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold text-[#719497] uppercase tracking-wider font-exo">
                  Center Facilities &amp; Equipment:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {(hospital.features || []).map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs sm:text-sm text-[#29363A] bg-white p-2.5 rounded-xl border border-[#C4DFDF] shadow-2xs">
                      <CheckCircle2 className="w-4 h-4 text-[#0A5F6B] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/book-appointment"
                  className="px-7 py-3.5 bg-[#0A5F6B] hover:bg-[#07515C] text-white font-bold text-sm rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2 hover:-translate-y-0.5"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Consultation at {hospital.name}</span>
                </Link>

                <a
                  href={`tel:${hospital.phone.replace(/\s+/g, '')}`}
                  className="px-7 py-3.5 bg-[#DFF8F8] hover:bg-[#C9F5F3] text-[#0A5F6B] border border-[#C4DFDF] font-bold text-sm rounded-xl transition-all flex items-center gap-2 hover:-translate-y-0.5"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Hospital Reception</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Departments at this branch */}
      <section className="py-20 bg-[#DFF8F8]/30 border-y border-[#C4DFDF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0A5F6B] bg-[#DFF8F8] px-3.5 py-1.5 rounded-full border border-[#C4DFDF] font-exo inline-block shadow-2xs">
              Clinical Specializations
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#29363A] font-exo tracking-tight">
              Departments Active At This Center
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {(hospital.departments || []).map((dept, dIdx) => (
              <div 
                key={dIdx} 
                className="bg-white p-5 rounded-2xl border border-[#C4DFDF] shadow-sm text-center flex flex-col items-center justify-center space-y-3 hover:border-[#0A5F6B] hover:shadow-xl hover:-translate-y-1 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#DFF8F8] text-[#0A5F6B] flex items-center justify-center group-hover:bg-[#0A5F6B] group-hover:text-white transition-all duration-300 shadow-xs">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <div className="text-xs font-bold text-[#29363A] font-exo leading-tight group-hover:text-[#0A5F6B] transition-colors">
                  {dept}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Cashless TPA & Emergency Support */}
      <section className="py-20 bg-[#FDFEFE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#07515C] to-[#0A5F6B] text-white space-y-4 shadow-xl relative overflow-hidden">
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center shadow-xs">
                <Ambulance className="w-7 h-7 text-[#C9F5F3]" />
              </div>
              <h3 className="text-2xl font-bold font-exo">
                24x7 Emergency &amp; Ambulance
              </h3>
              <p className="text-sm text-[#DFF8F8] font-roboto leading-relaxed">
                Our trauma readiness protocol ensures dedicated resuscitation bays, immediate triage by certified intensivists, on-site imaging, and rapid emergency intervention.
              </p>
              <div className="pt-2">
                <a
                  href={`tel:${hospital.phone.replace(/\s+/g, '')}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#0A5F6B] hover:bg-[#DFF8F8] font-bold text-xs sm:text-sm rounded-xl shadow transition-all hover:-translate-y-0.5"
                >
                  <Phone className="w-4 h-4 text-[#0A5F6B]" />
                  <span>Call Emergency Ambulance</span>
                </a>
              </div>
            </div>

            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#C4DFDF] space-y-4 shadow-md hover:shadow-xl transition-all">
              <div className="w-14 h-14 rounded-2xl bg-[#DFF8F8] border border-[#C4DFDF] text-[#0A5F6B] flex items-center justify-center shadow-xs">
                <ShieldCheck className="w-7 h-7 text-[#0A5F6B]" />
              </div>
              <h3 className="text-2xl font-bold text-[#29363A] font-exo">
                Cashless Insurance Desk
              </h3>
              <p className="text-sm text-[#719497] font-roboto leading-relaxed">
                Empanelled with CGHS, ECHS, BSNL, and major private TPAs including Star Health, HDFC ERGO, Bajaj Allianz, and Tata AIG for hassle-free pre-authorization.
              </p>
              <div className="pt-2">
                <Link
                  href="/insurances"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A5F6B] hover:text-[#07515C] transition-colors font-exo group/link"
                >
                  <span>View All Empanelled Insurers &amp; TPAs</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
