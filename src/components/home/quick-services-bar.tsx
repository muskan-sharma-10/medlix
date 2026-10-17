'use client';

import React from 'react';
import Link from 'next/link';
import { Stethoscope, Pill, TestTube, Ambulance, ArrowRight } from 'lucide-react';

export default function QuickServicesBar() {
  const services = [
    {
      title: 'Find a Provider',
      desc: 'Browse 500+ top expert medical specialists & book zero-wait appointments.',
      href: '/doctors',
      icon: Stethoscope,
      actionText: 'Find Doctor'
    },
    {
      title: 'Locations & Directions',
      desc: 'Find a Medlix Hospital location near you across 8 branches in NCR.',
      href: '/locations',
      icon: Ambulance,
      actionText: 'Find Location'
    },
    {
      title: 'Services & Medicine',
      desc: '100% genuine pharmacy medicines & 24/7 prescription delivery.',
      href: '/medicines',
      icon: Pill,
      actionText: 'Order Medicine'
    },
    {
      title: 'Book a Lab Test',
      desc: 'Full body health packages & diagnostic blood tests with free sample pickup.',
      href: '/lab-tests',
      icon: TestTube,
      actionText: 'Book Test'
    }
  ];

  return (
    <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16 sm:my-24 font-sans">
      {/* Featured Services Header */}
      <div className="mb-10 sm:mb-12">
        <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider bg-[#E6F7F7] text-[#0A5F6B] border border-teal-200/80 mb-3 shadow-2xs">
          Featured Patient Services
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 font-sans tracking-tight leading-[1.2]">
          How Can We Help You Today?
        </h2>
        <p className="text-base sm:text-lg text-slate-600 mt-2 max-w-2xl font-normal leading-relaxed">
          Quickly connect with medical experts, find 24/7 emergency branches, order medicines, or book diagnostic lab checkups.
        </p>
        <div className="w-16 h-1.5 bg-gradient-to-r from-[#0A5F6B] to-[#14B8A6] mt-4 rounded-full" />
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 lg:gap-8">
        {services.map((item, idx) => {
          const IconComponent = item.icon;

          return (
            <Link 
              key={idx} 
              href={item.href}
              className="p-8 sm:p-9 rounded-3xl bg-white text-slate-900 border border-slate-200/90 shadow-[0_6px_25px_rgba(10,95,107,0.05)] hover:shadow-[0_22px_50px_rgba(10,95,107,0.15)] hover:border-[#0A5F6B] hover:-translate-y-2 transition-all duration-300 group flex flex-col justify-between h-full cursor-pointer relative overflow-hidden"
            >
              {/* Top border shine on hover */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#0A5F6B] via-[#2DD4BF] to-[#0A5F6B] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-[#E6F7F7] text-[#0A5F6B] group-hover:bg-[#0A5F6B] group-hover:text-white flex items-center justify-center transition-all duration-300 mb-6 border border-teal-200/70 shadow-sm group-hover:scale-105">
                  <IconComponent className="w-7 h-7" />
                </div>

                {/* Title & Desc */}
                <h3 className="text-2xl font-bold font-sans text-slate-900 group-hover:text-[#0A5F6B] transition-colors mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-base sm:text-[17px] font-normal text-slate-600 font-sans leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Action Link */}
              <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between text-sm sm:text-base font-bold font-sans text-[#0A5F6B]">
                <span className="group-hover:underline">{item.actionText}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
