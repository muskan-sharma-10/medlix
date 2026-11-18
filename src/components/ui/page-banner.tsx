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
    <div className="relative w-full bg-gradient-to-r from-[#0A192F] via-[#0A2540] to-[#0A5F6B] text-white py-16 sm:py-20 lg:py-24 overflow-hidden border-b border-teal-900/40">
      {/* Background Graphic & Texture Overlay */}
      <motion.div 
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.22 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="absolute inset-0 pointer-events-none"
      >
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover object-center mix-blend-overlay"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F]/95 via-[#0A2540]/85 to-transparent" />
      </motion.div>

      {/* Decorative luminous orb */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl space-y-4 sm:space-y-5"
        >
          {/* Breadcrumb Path */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 font-medium">
            <Link href="/" className="hover:text-teal-300 transition-colors">Home</Link>
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                <ChevronRight className="w-3.5 h-3.5 text-teal-400" />
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-teal-300 transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white font-semibold">{crumb.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>

          {badge && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="inline-block px-3.5 py-1 rounded-full bg-teal-400/15 text-teal-300 border border-teal-400/30 text-xs font-bold uppercase tracking-wider"
            >
              {badge}
            </motion.div>
          )}

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {title}
          </h1>

          {subtitle && (
            <p className="text-slate-200 text-sm sm:text-base lg:text-[17px] leading-relaxed max-w-3xl font-normal">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
}
