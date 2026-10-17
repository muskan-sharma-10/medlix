'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Building2, BedDouble, Pill, Stethoscope } from 'lucide-react';
import medlixData from '@/lib/medlixData.json';

function CounterNumber({ target, suffix, shouldStart }: { target: number; suffix: string; shouldStart: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let startTime: number | null = null;
    const duration = 2200; // 2.2s smooth count-up

    const easeOutQuad = (t: number) => t * (2 - t);

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = easeOutQuad(progress);
      
      setCount(Math.floor(easedProgress * target));

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    const animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [target, shouldStart]);

  return (
    <span>
      {count}{suffix}
    </span>
  );
}

export default function StatisticsSection() {
  const stats = medlixData.stats;
  const sectionRef = useRef<HTMLElement>(null);
  const [offsetY, setOffsetY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Parallax scroll effect matching Jarallax speed (0.6) on medlix.in
  useEffect(() => {
    let animId: number;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // When section is in view or approaching view
      if (rect.top < windowHeight && rect.bottom > 0) {
        // Calculate relative position within viewport
        const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
        // Parallax speed 0.6 => translate from -80px to +80px
        const movement = (progress - 0.5) * 140;
        setOffsetY(movement);
      }
    };

    const onScroll = () => {
      animId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(animId);
    };
  }, []);

  // Intersection observer to trigger count-up on scroll entry
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Uniform icon styling using Primary Teal #0A5F6B
  const statIcons = [
    <Building2 key="0" className="w-12 h-12 text-[#0A5F6B] transition-transform duration-300 group-hover:scale-110" strokeWidth={1.75} />,
    <BedDouble key="1" className="w-12 h-12 text-[#0A5F6B] transition-transform duration-300 group-hover:scale-110" strokeWidth={1.75} />,
    <Pill key="2" className="w-12 h-12 text-[#0A5F6B] transition-transform duration-300 group-hover:scale-110" strokeWidth={1.75} />,
    <Stethoscope key="3" className="w-12 h-12 text-[#0A5F6B] transition-transform duration-300 group-hover:scale-110" strokeWidth={1.75} />
  ];

  return (
    <section 
      ref={sectionRef} 
      className="relative overflow-hidden py-24 sm:py-32 bg-[#F8FAFC] border-y border-slate-200"
      style={{ minHeight: '420px' }}
    >
      {/* 
        Exact Medlix Background Image with Parallax Scroll Animation 
        Original URL: https://medlix.in/wp-content/uploads/2019/09/home-3-counter-bg.jpg
      */}
      <div 
        className="absolute inset-x-0 -top-[30%] h-[160%] w-full bg-center bg-cover bg-no-repeat pointer-events-none will-change-transform"
        style={{
          backgroundImage: "url('/images/home-3-counter-bg.jpg')",
          transform: `translate3d(0, ${offsetY}px, 0)`,
          opacity: 0.95
        }}
        aria-hidden="true"
      />

      {/* Subtle light overlay to ensure pristine contrast */}
      <div 
        className="absolute inset-0 bg-white/70 pointer-events-none backdrop-blur-[2px]" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 sm:gap-8">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className={`p-9 sm:p-10 rounded-3xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-[0_10px_35px_rgba(0,0,0,0.06)] hover:shadow-[0_24px_55px_rgba(10,95,107,0.16)] hover:-translate-y-2 hover:bg-white hover:border-[#0A5F6B] flex flex-col items-center text-center group cursor-default transition-all duration-500 relative overflow-hidden ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${idx * 120}ms` }}
            >
              {/* Top border shine on hover */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#0A5F6B] via-[#2DD4BF] to-[#0A5F6B] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Modern Icon Container */}
              <div className="mb-6 flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-b from-white to-[#E6F7F7] shadow-md border border-teal-200/80 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg">
                {statIcons[idx]}
              </div>

              {/* Counter Number in bold font */}
              <div className="text-4xl sm:text-5xl lg:text-[54px] font-black text-[#0A5F6B] group-hover:text-[#07515C] font-sans tracking-tight mb-2 transition-colors">
                <CounterNumber target={stat.value} suffix={stat.suffix} shouldStart={isVisible} />
              </div>

              {/* Decorative mini bar */}
              <div className="w-10 h-1.5 rounded-full bg-gradient-to-r from-[#0A5F6B] to-[#14B8A6] mb-4 group-hover:w-16 transition-all duration-300" />

              {/* Title */}
              <p className="text-base sm:text-lg font-bold text-slate-800 font-sans tracking-normal max-w-[210px] leading-snug">
                {stat.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
