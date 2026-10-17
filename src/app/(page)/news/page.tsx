'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PageBanner from '@/components/ui/page-banner';
import { Calendar, Tag, ArrowRight, Bell, Sparkles } from 'lucide-react';

export default function NewsPage() {
  const newsItems = [
    {
      title: 'Medlix Hospital Network Expands Multi-Specialty Facilities in Haryana',
      date: 'September 2026',
      tag: 'Hospital Expansion',
      image: '/images/aarvy.jpg',
      desc: 'With continuous investment in modern infrastructure, Medlix expands super-specialty bed capacity and catheterization facilities to serve over 100,000 patients annually.'
    },
    {
      title: 'Advanced Robotic & Laser Procedures Introduced for Urology and Joint Care',
      date: 'August 2026',
      tag: 'Clinical Innovation',
      image: '/images/about-doctor.png',
      desc: 'Minimally invasive laser surgery for kidney stones and precision computer-navigated knee replacements are now operational with zero wait times.'
    },
    {
      title: 'Comprehensive Free Community Health & Cardiac Risk Screening Camp Held',
      date: 'July 2026',
      tag: 'Community Health',
      image: '/images/manavta.jpg',
      desc: 'Over 800 local residents attended complimentary blood glucose, ECG, and blood pressure screenings organized by the Medlix outreach committee.'
    }
  ];

  return (
    <div className="w-full flex flex-col">
      {/* 1. Page Banner */}
      <PageBanner
        title="Hospital News &amp; Updates"
        subtitle="Stay updated with latest announcements, medical breakthroughs, and community health initiatives across Medlix Hospital network."
        badge="Press &amp; Media"
        breadcrumbs={[{ label: 'News' }]}
        imageSrc="/images/page-banner.jpg"
      />

      {/* 2. News Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-[#C4DFDF] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:border-[#0A5F6B] hover:-translate-y-1"
              >
                <div>
                  <div className="relative h-52 w-full bg-slate-100 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#0A5F6B] text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider font-exo">
                      {item.tag}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-1.5 text-xs text-[#719497]">
                      <Calendar className="w-3.5 h-3.5 text-[#0A5F6B]" />
                      <span>{item.date}</span>
                    </div>

                    <h3 className="text-lg font-bold font-exo text-[#29363A] group-hover:text-[#0A5F6B] transition-colors leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#719497] font-roboto leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A5F6B] hover:text-[#07515C]"
                  >
                    <span>Read Press Briefing</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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
