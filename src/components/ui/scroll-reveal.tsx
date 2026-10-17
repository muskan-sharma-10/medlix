'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'zoom' | 'fade';
  delay?: number;
  duration?: number;
  className?: string;
  amount?: number | 'some' | 'all';
  once?: boolean;
}

export function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.65,
  className = '',
  amount = 0.15,
  once = true
}: ScrollRevealProps) {
  const getVariants = () => {
    switch (direction) {
      case 'up':
        return {
          hidden: { opacity: 0, y: 36 },
          visible: { opacity: 1, y: 0 }
        };
      case 'down':
        return {
          hidden: { opacity: 0, y: -36 },
          visible: { opacity: 1, y: 0 }
        };
      case 'left':
        return {
          hidden: { opacity: 0, x: -36 },
          visible: { opacity: 1, x: 0 }
        };
      case 'right':
        return {
          hidden: { opacity: 0, x: 36 },
          visible: { opacity: 1, x: 0 }
        };
      case 'zoom':
        return {
          hidden: { opacity: 0, scale: 0.92 },
          visible: { opacity: 1, scale: 1 }
        };
      case 'fade':
      default:
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 }
        };
    }
  };

  return (
    <motion.div
      variants={getVariants()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface SectionHeadingRevealProps {
  badge?: React.ReactNode;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: 'center' | 'left';
  maxWidth?: string;
  className?: string;
  showAccentBar?: boolean;
}

export function SectionHeadingReveal({
  badge,
  title,
  subtitle,
  align = 'center',
  maxWidth = 'max-w-3xl',
  className = '',
  showAccentBar = true
}: SectionHeadingRevealProps) {
  const isCenter = align === 'center';

  return (
    <div
      className={`space-y-4 ${
        isCenter ? `text-center mx-auto ${maxWidth}` : 'text-left'
      } ${className}`}
    >
      {/* 1. Badge Reveal */}
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 15, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className={`inline-flex items-center gap-2 ${
            isCenter ? 'mx-auto' : ''
          }`}
        >
          {badge}
        </motion.div>
      )}

      {/* 2. Main Title with smooth slide-up */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-slate-900 font-sans tracking-tight leading-[1.2]">
          {title}
        </h2>
      </motion.div>

      {/* 3. Expanding Decorative Accent Bar */}
      {showAccentBar && (
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: '70px', opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className={`h-1.5 rounded-full bg-gradient-to-r from-[#0A5F6B] to-[#14B8A6] ${
            isCenter ? 'mx-auto' : ''
          }`}
        />
      )}

      {/* 4. Subtitle Reveal */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className={`text-base sm:text-lg lg:text-[19px] font-normal leading-relaxed text-slate-600 font-sans ${
            isCenter ? 'max-w-3xl mx-auto' : ''
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

export function StaggerContainer({
  children,
  className = '',
  staggerChildren = 0.12,
  delayChildren = 0
}: {
  children: React.ReactNode;
  className?: string;
  staggerChildren?: number;
  delayChildren?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren,
            delayChildren
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = '',
  y = 30
}: {
  children: React.ReactNode;
  className?: string;
  y?: number;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1]
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
