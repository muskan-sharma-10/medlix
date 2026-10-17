'use client';

import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'header';
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ className = '', variant = 'header', size = 'md' }: LogoProps) {
  const dimensions = {
    sm: { width: 150, height: 42, iconSize: 32, fontSizeMain: '20px', fontSizeSub: '9px' },
    md: { width: 190, height: 50, iconSize: 38, fontSizeMain: '24px', fontSizeSub: '10.5px' },
    lg: { width: 230, height: 60, iconSize: 46, fontSizeMain: '28px', fontSizeSub: '12px' },
  }[size];

  const primaryColor = variant === 'dark' ? '#FDFEFE' : '#0A5F6B';
  const secondaryColor = '#07515C';
  const tagColor = variant === 'dark' ? '#C9F5F3' : '#719497';

  return (
    <div className={`inline-flex items-center gap-2.5 font-['Outfit',sans-serif] select-none ${className}`}>
      {/* Healthcare Teal Emblem Icon */}
      <svg
        width={dimensions.iconSize}
        height={dimensions.iconSize}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 drop-shadow-xs"
      >
        <rect width="48" height="48" rx="12" fill={variant === 'dark' ? 'rgba(201,245,243,0.15)' : '#DFF8F8'} />
        <path d="M24 8C26.5 8 28 10 28 13.5V20H20V13.5C20 10 21.5 8 24 8Z" fill="#0A5F6B" />
        <path d="M24 40C21.5 40 20 38 20 34.5V28H28V34.5C28 38 26.5 40 24 40Z" fill="#07515C" />
        <path d="M8 24C8 21.5 10 20 13.5 20H20V28H13.5C10 28 8 26.5 8 24Z" fill="#0A5F6B" />
        <path d="M40 24C40 26.5 38 28 34.5 28H28V20H34.5C38 20 40 21.5 40 24Z" fill="#0A5F6B" />
        <circle cx="24" cy="24" r="4.5" fill="#FDFEFE" />
        <path d="M24 21L25.2 22.8L27 24L25.2 25.2L24 27L22.8 25.2L21 24L22.8 22.8L24 21Z" fill="#0A5F6B" />
      </svg>

      {/* Typography: MEDLIX + HOSPITAL */}
      <div className="flex flex-col justify-center leading-none">
        <div className="flex items-baseline gap-0.5">
          <span 
            className="font-black font-exo tracking-tight"
            style={{ fontSize: dimensions.fontSizeMain, color: primaryColor }}
          >
            MEDLIX
          </span>
          <span 
            className="font-bold"
            style={{ fontSize: dimensions.fontSizeMain, color: secondaryColor }}
          >
            +
          </span>
        </div>
        <span 
          className="font-bold uppercase tracking-[0.25em] font-exo mt-0.5"
          style={{ fontSize: dimensions.fontSizeSub, color: tagColor }}
        >
          HOSPITAL
        </span>
      </div>
    </div>
  );
}
