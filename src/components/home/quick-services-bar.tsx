'use client';

import React from 'react';
import Link from 'next/link';
import { Stethoscope, Pill, TestTube, Building2, ArrowRight, Sparkles } from 'lucide-react';

export default function QuickServicesBar() {
  const services = [
    {
      title: 'Find a Doctor',
      desc: 'Connect with 500+ top expert medical specialists and book zero-wait OPD consultations.',
      href: '/doctors',
      icon: Stethoscope,
      actionText: 'Find Specialists',
      badge: 'Zero-Wait OPD',
      badgeBg: 'bg-teal-50 text-[#0A5F6B] border-teal-200/80',
      iconBg: 'bg-[#E6F7F7] text-[#0A5F6B]'
    },
    {
      title: 'Find a Hospital',
      desc: 'Locate a Medlix Hospital branch nearest to you with 24x7 emergency and trauma care across NCR.',
      href: '/locations',
      icon: Building2,
      actionText: 'Explore 8 Branches',
      badge: '24/7 ICU & Trauma',
      badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200/80',
      iconBg: 'bg-emerald-50 text-emerald-600'
    },
    {
      title: 'Find Medicine',
      desc: '100% genuine hospital pharmacy medicines, surgical supplies, and rapid prescription delivery.',
      href: '/medicines',
      icon: Pill,
      actionText: 'Order Medicines',
      badge: 'Genuine Pharmacy',
      badgeBg: 'bg-sky-50 text-sky-700 border-sky-200/80',
      iconBg: 'bg-sky-50 text-sky-600'
    },
    {
      title: 'Book a Lab Test',
      desc: 'Preventive full-body health packages and diagnostic blood pathology with free home sample pickup.',
      href: '/lab-tests',
      icon: TestTube,
      actionText: 'Schedule Lab Test',
      badge: 'Home Sample Pickup',
      badgeBg: 'bg-amber-50 text-amber-700 border-amber-200/80',
      iconBg: 'bg-amber-50 text-amber-600'
    }
  ];

  return (
    <section className="relative py-14 sm:py-20 bg-white border-b border-slate-200/80 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-10 sm:mb-14 text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider bg-[#E6F7F7] text-[#0A5F6B] border border-teal-200/80 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#0A5F6B]" />
            <span>Featured Patient Services</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight">
            How Can We Help You Today?
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#0A5F6B] to-[#14B8A6] mx-auto rounded-full" />
          <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
            Quickly connect with medical experts, find 24/7 emergency branches, order pharmacy medicines, or book diagnostic checkups.
          </p>
        </div>

        {/* 4 Cards Grid - Clean, spacious, no overlap */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, idx) => {
            const IconComponent = item.icon;

            return (
              <Link
                key={idx}
                href={item.href}
                className="group bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-[0_4px_20px_rgba(10,37,64,0.04)] hover:shadow-[0_20px_45px_rgba(10,95,107,0.14)] hover:border-[#0A5F6B] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
              >
                {/* Top border shine on hover */}
                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#0A5F6B] via-[#2DD4BF] to-[#0A5F6B] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Card Header: Icon & Micro Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-14 h-14 rounded-2xl ${item.iconBg} flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-110 group-hover:bg-[#0A5F6B] group-hover:text-white transition-all duration-300`}>
                      <IconComponent className="w-7 h-7 transition-colors" />
                    </div>

                    <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${item.badgeBg}`}>
                      {item.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#0A2540] group-hover:text-[#0A5F6B] transition-colors mb-2 leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed line-clamp-3">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Action Link */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-bold text-[#0A5F6B] group-hover:underline">
                    {item.actionText}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#E6F7F7] text-[#0A5F6B] group-hover:bg-[#0A5F6B] group-hover:text-white flex items-center justify-center transition-colors">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>

              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
