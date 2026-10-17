'use client';

import React from 'react';
import { Calendar, Phone, MessageCircle } from 'lucide-react';

interface FloatingSidebarProps {
  onOpenAppointment?: () => void;
}

export default function FloatingSidebar({ onOpenAppointment }: FloatingSidebarProps) {
  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col bg-[#0A5F6B] rounded-r-2xl shadow-2xl overflow-hidden border-y border-r border-[#07515C]">
      {/* 1. Book Appointment */}
      <button
        onClick={onOpenAppointment}
        title="Book Appointment"
        className="p-3.5 text-white hover:bg-[#07515C] transition-colors flex items-center justify-center group relative border-b border-white/20"
        aria-label="Book Appointment"
      >
        <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
        <span className="absolute left-full ml-2 px-3 py-1.5 bg-[#07515C] text-white text-xs font-bold rounded-lg shadow-xl opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity whitespace-nowrap z-50 font-exo">
          Book Appointment
        </span>
      </button>

      {/* 2. Phone Call */}
      <a
        href="tel:+919220143473"
        title="Call Helpline"
        className="p-3.5 text-white hover:bg-[#07515C] transition-colors flex items-center justify-center group relative border-b border-white/20"
        aria-label="Call Helpline"
      >
        <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
        <span className="absolute left-full ml-2 px-3 py-1.5 bg-[#07515C] text-white text-xs font-bold rounded-lg shadow-xl opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity whitespace-nowrap z-50 font-exo">
          Call: +91-9220143473
        </span>
      </a>

      {/* 3. WhatsApp Chat */}
      <a
        href="https://wa.me/919289500375?text=Hello%20Medlix%20Hospital,%20I%20would%20like%20to%20inquire%20about%20medical%20services."
        target="_blank"
        rel="noopener noreferrer"
        title="Chat on WhatsApp"
        className="p-3.5 text-white hover:bg-[#07515C] transition-colors flex items-center justify-center group relative"
        aria-label="WhatsApp Chat"
      >
        <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
        <span className="absolute left-full ml-2 px-3 py-1.5 bg-[#07515C] text-white text-xs font-bold rounded-lg shadow-xl opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity whitespace-nowrap z-50 font-exo">
          WhatsApp Chat
        </span>
      </a>
    </div>
  );
}
