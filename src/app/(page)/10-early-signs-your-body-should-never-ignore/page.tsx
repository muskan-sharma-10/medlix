'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PageBanner from '@/components/ui/page-banner';
import { 
  Calendar, 
  User, 
  Clock, 
  ArrowLeft, 
  Share2, 
  ShieldCheck, 
  Phone, 
  Stethoscope,
  HeartPulse
} from 'lucide-react';
import medlixData from '@/lib/medlixData.json';

export default function SingleBlogPage() {
  const post = medlixData.blogPosts[0];

  return (
    <div className="w-full flex flex-col">
      {/* 1. Page Banner */}
      <PageBanner
        title={post.title}
        subtitle="Your body has its own way of sending signals when something isn’t right. Paying attention to early warning signs helps in timely diagnosis and treatment."
        badge={post.category}
        breadcrumbs={[
          { label: 'Blogs', href: '/blogs' },
          { label: post.title }
        ]}
        imageSrc="/images/page-banner.jpg"
      />

      {/* 2. Article Body */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Metadata bar */}
          <div className="flex flex-wrap items-center justify-between pb-6 border-b border-slate-200 text-xs sm:text-sm text-[#719497] gap-4">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 font-semibold text-[#29363A]">
                <User className="w-4 h-4 text-[#0A5F6B]" />
                {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#0A5F6B]" />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#0A5F6B]" />
                {post.readTime}
              </span>
            </div>

            <Link
              href="/blogs"
              className="text-xs font-bold text-[#0A5F6B] hover:underline flex items-center gap-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to all blogs</span>
            </Link>
          </div>

          {/* Lead Paragraph */}
          <p className="text-base sm:text-lg text-[#29363A] leading-relaxed font-roboto font-normal bg-[#DFF8F8] p-6 rounded-2xl border-l-4 border-[#0A5F6B]">
            {post.excerpt}
          </p>

          {/* Content Paragraphs */}
          <div className="space-y-6 text-[#719497] font-roboto text-sm sm:text-base leading-relaxed">
            {post.content.map((paragraph, idx) => (
              <p key={idx} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Call to action box */}
          <div className="p-8 rounded-2xl bg-[#07515C] text-white space-y-4 mt-12 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#0A5F6B] flex items-center justify-center text-white border border-[#C9F5F3]/30">
                <Stethoscope className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold font-exo">Don't Ignore Warning Signs</h4>
                <p className="text-xs text-teal-200">Consult with senior specialists across 8 Medlix Hospitals</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 font-roboto leading-relaxed">
              If you or a loved one is experiencing any persistent, unexplained symptoms, early clinical evaluation is essential to prevent complications.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/book-appointment"
                className="px-6 py-3 bg-[#0A5F6B] hover:bg-[#07515C] text-white font-bold text-xs sm:text-sm rounded-xl shadow transition-all border border-[#C9F5F3]/30"
              >
                Book Preventive Checkup
              </Link>

              <a
                href="tel:+919289500375"
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm rounded-xl border border-white/25 transition-all"
              >
                Call OPD Desk: +91 92895 00375
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
