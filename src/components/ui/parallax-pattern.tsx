'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface ParallaxPatternProps {
  image?: string;
  position?: 'left' | 'right';
  speed?: number; // factor e.g. 0.3
  className?: string;
  width?: number;
  height?: number;
  opacity?: number;
}

export default function ParallaxPattern({
  image = '/images/pattern-1.png',
  position = 'left',
  speed = 0.25,
  className = '',
  width = 240,
  height = 480,
  opacity = 0.45
}: ParallaxPatternProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    let animId: number;

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.parentElement?.getBoundingClientRect();
      if (!rect) return;
      const winH = window.innerHeight;

      if (rect.top < winH && rect.bottom > 0) {
        // Progress through the parent section
        const progress = (winH - rect.top) / (winH + rect.height);
        // Translate smoothly vertically
        const movement = (progress - 0.5) * 180 * speed * 4;
        setTranslateY(movement);
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
  }, [speed]);

  return (
    <div
      ref={containerRef}
      className={`absolute pointer-events-none select-none z-0 transition-transform duration-75 ease-out ${
        position === 'left' ? 'left-0' : 'right-0'
      } ${className}`}
      style={{
        transform: `translate3d(0, ${translateY}px, 0)`,
        opacity
      }}
      aria-hidden="true"
    >
      <Image
        src={image}
        alt=""
        width={width}
        height={height}
        className="object-contain"
        priority={false}
      />
    </div>
  );
}
