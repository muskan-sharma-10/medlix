'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Building2, BedDouble, Pill, Stethoscope, Sparkles } from 'lucide-react';
import medlixData from '@/lib/medlixData.json';

function CounterNumber({ target, suffix, shouldStart }: { target: number; suffix: string; shouldStart: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let startTime: number | null = null;
    const duration = 2000;

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
  const stats = medlixData.stats || [];
  const sectionRef = useRef<HTMLElement>(null);
  const [offsetY, setOffsetY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Parallax scroll effect
  useEffect(() => {
    let animId: number;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight && rect.bottom > 0) {
        const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
        const movement = (progress - 0.5) * 80;
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

  const statIcons = [
    <Building2 key="0" className="w-9 h-9 text-[#0A5F6B] group-hover:scale-110 transition-transform duration-300" strokeWidth={1.75} />,
    <BedDouble key="1" className="w-9 h-9 text-[#0A5F6B] group-hover:scale-110 transition-transform duration-300" strokeWidth={1.75} />,
    <Pill key="2" className="w-9 h-9 text-[#0A5F6B] group-hover:scale-110 transition-transform duration-300" strokeWidth={1.75} />,
    <Stethoscope key="3" className="w-9 h-9 text-[#0A5F6B] group-hover:scale-110 transition-transform duration-300" strokeWidth={1.75} />
  ];

  return (
    <section 
      ref={sectionRef} 
      className="relative overflow-hidden py-12 sm:py-20 lg:py-36 bg-[#F8FAFC] border-y border-slate-200 font-sans"
    >
      {/* Background with gentle parallax movement */}
      <div 
        className="absolute inset-x-0 -top-[20%] h-[140%] w-full bg-center bg-cover bg-no-repeat pointer-events-none will-change-transform opacity-30"
        style={{
          backgroundImage: "url('/images/home-3-counter-bg.jpg')",
          transform: `translate3d(0, ${offsetY}px, 0)`
        }}
        aria-hidden="true"
      />

      {/* Light overlay for clean contrast */}
      <div 
        className="absolute inset-0 bg-white/80 pointer-events-none backdrop-blur-[2px]" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section title */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-14 lg:mb-20 space-y-2.5 sm:space-y-3">
          <span className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider bg-[#E6F7F7] text-[#0A5F6B] border border-teal-200/80 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0A5F6B]" />
            <span>Medlix Hospital At A Glance</span>
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-[46px] font-extrabold text-[#0A2540] tracking-tight leading-[1.2]">
            Our Regional Clinical Footprint
          </h2>
          <div className="w-16 h-1.5 bg-gradient-to-r from-[#0A5F6B] to-[#14B8A6] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-8 lg:gap-10">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className={`p-4 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-[0_8px_25px_rgba(10,37,64,0.05)] hover:shadow-[0_22px_45px_rgba(10,95,107,0.15)] hover:-translate-y-2 hover:bg-white hover:border-[#0A5F6B] flex flex-col items-center text-center group cursor-default transition-all duration-500 relative overflow-hidden ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {/* Top border shine on hover */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#0A5F6B] via-[#2DD4BF] to-[#0A5F6B] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Icon Container */}
              <div className="mb-3 sm:mb-6 flex items-center justify-center w-11 h-11 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-b from-white to-[#E6F7F7] shadow-xs border border-teal-200/80 transition-all duration-300 group-hover:scale-105 group-hover:shadow-md">
                <div className="scale-75 sm:scale-100">
                  {statIcons[idx]}
                </div>
              </div>

              {/* Counter Number */}
              <div className="text-2xl sm:text-4xl lg:text-[54px] font-black text-[#0A5F6B] group-hover:text-[#07515C] tracking-tight mb-1 sm:mb-2 transition-colors">
                <CounterNumber target={stat.value} suffix={stat.suffix} shouldStart={isVisible} />
              </div>

              {/* Decorative mini accent bar */}
              <div className="w-8 sm:w-10 h-1 rounded-full bg-gradient-to-r from-[#0A5F6B] to-[#14B8A6] mb-2 sm:mb-4 group-hover:w-16 transition-all duration-300" />

              {/* Title */}
              <p className="text-xs sm:text-base lg:text-lg font-bold text-[#0A2540] tracking-normal leading-snug">
                {stat.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
