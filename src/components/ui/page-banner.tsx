'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageBannerProps {
  title: string;
  subtitle?: string;
  badge?: string;
  breadcrumbs: Breadcrumb[];
  imageSrc?: string;
}

export default function PageBanner({
  title,
  subtitle,
  badge,
  breadcrumbs,
  imageSrc = '/images/page-banner.jpg'
}: PageBannerProps) {
  return (
    <div className="relative w-full bg-[#C9F5F3] text-[#29363A] py-8 sm:py-10 lg:py-12 overflow-hidden border-b border-[#C4DFDF] font-['Outfit',sans-serif]">
      {/* Background Graphic & Texture Overlay */}
      <motion.div 
        initial={{ scale: 1.04, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.15 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="absolute inset-0 pointer-events-none"
      >
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#C9F5F3] via-[#DFF8F8]/90 to-transparent" />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl space-y-2.5 sm:space-y-3"
        >
          {/* Breadcrumb Path */}
          <nav className="flex items-center gap-1.5 text-xs text-[#719497] font-medium">
            <Link href="/" className="hover:text-[#0A5F6B] transition-colors">Home</Link>
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                <ChevronRight className="w-3.5 h-3.5 text-[#0A5F6B]" />
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-[#0A5F6B] transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-[#29363A] font-semibold">{crumb.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>

          {badge && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="inline-block px-3 py-0.5 rounded-full bg-[#DFF8F8] text-[#0A5F6B] border border-[#C4DFDF] text-[11px] font-bold uppercase tracking-wider font-exo"
            >
              {badge}
            </motion.div>
          )}

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-exo text-[#29363A] tracking-tight leading-snug">
            {title}
          </h1>

          {subtitle && (
            <p className="text-[#719497] text-xs sm:text-sm font-roboto leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
}
