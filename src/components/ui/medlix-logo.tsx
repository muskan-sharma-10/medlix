import React from 'react';

interface MedlixLogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  showSubtitle?: boolean;
}

export default function MedlixLogo({
  variant = 'light',
  className = '',
  showSubtitle = true
}: MedlixLogoProps) {
  const isDark = variant === 'dark';

  return (
    <div className={`inline-flex items-center gap-3 select-none cursor-pointer group ${className}`}>
      {/* Precision Medical Shield & Vitality Cross Emblem */}
      <svg
        className="w-10 h-10 sm:w-11 sm:h-11 shrink-0 drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={`medShield-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={isDark ? '#0A2540' : '#0A2540'} />
            <stop offset="100%" stopColor={isDark ? '#0D5B66' : '#0A5F6B'} />
          </linearGradient>
          <linearGradient id={`medPulse-${variant}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0D9488" />
            <stop offset="50%" stopColor="#14B8A6" />
            <stop offset="100%" stopColor="#2DD4BF" />
          </linearGradient>
          <linearGradient id={`medBorder-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={isDark ? '#2DD4BF' : '#2DD4BF'} stopOpacity="0.8" />
            <stop offset="100%" stopColor={isDark ? '#0A5F6B' : '#0A5F6B'} stopOpacity="0.3" />
          </linearGradient>
          <filter id={`medShadow-${variant}`} x="-15%" y="-15%" width="130%" height="130%">
            <feDropShadow dx="0" dy="2" stdDeviation="2.5" floodColor={isDark ? '#000000' : '#0A2540'} floodOpacity={isDark ? '0.4' : '0.15'} />
          </filter>
        </defs>

        {/* Outer Shield Crest */}
        <rect
          x="2"
          y="2"
          width="44"
          height="44"
          rx="13"
          fill={`url(#medShield-${variant})`}
          filter={`url(#medShadow-${variant})`}
        />
        <rect
          x="2"
          y="2"
          width="44"
          height="44"
          rx="13"
          stroke={`url(#medBorder-${variant})`}
          strokeWidth="1.2"
        />

        {/* Sculpted Medical Cross (Pure White) */}
        {/* Vertical Beam */}
        <rect x="20.5" y="10" width="7" height="28" rx="3.5" fill="#FFFFFF" />
        {/* Horizontal Beam */}
        <rect x="10" y="20.5" width="28" height="7" rx="3.5" fill="#FFFFFF" />

        {/* Dynamic Life-Saving ECG Pulse Line */}
        <path
          d="M12 24 H17 L19.5 17 L23.5 31 L26.5 21 L28.5 24 H36"
          stroke={`url(#medPulse-${variant})`}
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Radiant Heart Node */}
        <circle cx="23.5" cy="24" r="2" fill="#0A5F6B" />
        <circle cx="23.5" cy="24" r="1" fill="#2DD4BF" />
      </svg>

      {/* Brand Typography Lockup */}
      <div className="flex flex-col justify-center leading-none">
        <div className="flex items-center">
          <span
            className={`font-black tracking-tight text-2xl sm:text-[25px] font-sans transition-colors ${
              isDark ? 'text-white' : 'text-[#0A2540]'
            }`}
            style={{ letterSpacing: '-0.02em' }}
          >
            MEDLIX
          </span>
        </div>

        {showSubtitle && (
          <span
            className={`text-[8.5px] sm:text-[9.5px] font-extrabold uppercase tracking-[0.24em] font-sans mt-1 transition-colors ${
              isDark ? 'text-[#2DD4BF]' : 'text-[#0A5F6B]'
            }`}
          >
            SUPER SPECIALTY HOSPITALS
          </span>
        )}
      </div>
    </div>
  );
}
