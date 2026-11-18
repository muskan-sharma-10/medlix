'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed right-4 bottom-4 sm:right-6 sm:bottom-6 z-50 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-[#0A5F6B] hover:bg-[#07515C] text-white shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center cursor-pointer group ${
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto scale-100'
          : 'opacity-0 translate-y-8 pointer-events-none scale-75'
      }`}
    >
      <ArrowUp className="w-4 h-4 sm:w-6 sm:h-6 group-hover:-translate-y-1 transition-transform" />
    </button>
  );
}
