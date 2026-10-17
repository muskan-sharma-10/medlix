'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PageBanner from '@/components/ui/page-banner';
import { Calendar, User, Clock, ArrowRight, HeartPulse, BookOpen, ShieldCheck } from 'lucide-react';
import medlixData from '@/lib/medlixData.json';

export default function BlogsPage() {
  const posts = medlixData.blogPosts || [];

  return (
    <div className="w-full flex flex-col">
      {/* 1. Page Banner */}
      <PageBanner
        title="Health Insights &amp; Clinical Blogs"
        subtitle="Medical advice, preventive health tips, and wellness guidance curated by Medlix Hospital's specialist doctors."
        badge="Medlix Health Journal"
        breadcrumbs={[{ label: 'Blogs' }]}
        imageSrc="/images/page-banner.jpg"
      />

      {/* 2. Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, idx) => (
              <article
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-[#C4DFDF] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:border-[#0A5F6B] hover:-translate-y-1"
              >
                <div>
                  <div className="relative h-56 w-full bg-slate-100 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#0A5F6B] text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider font-exo">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-4 text-xs text-[#719497]">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#0A5F6B]" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#0A5F6B]" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold font-exo text-[#29363A] group-hover:text-[#0A5F6B] transition-colors leading-snug">
                      <Link href={`/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>

                    <p className="text-xs sm:text-sm text-[#719497] font-roboto leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href={`/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A5F6B] hover:text-[#07515C] group/btn transition-colors"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
