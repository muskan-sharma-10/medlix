'use client';

import React from 'react';
import { Phone, Mail, Clock, ArrowRight, Siren } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

interface EmergencyBannerProps {
  onOpenAppointment?: () => void;
}

export default function EmergencyBanner({ onOpenAppointment }: EmergencyBannerProps) {
  return (
    <section className="bg-slate-100 py-0 relative overflow-hidden border-y border-slate-200">
      <div className="w-full">
        <ScrollReveal direction="up" duration={0.65}>
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left: Reach Out to Us */}
            <div 
              className="relative bg-cover bg-center py-10 px-8 sm:px-14 flex items-center gap-6 overflow-hidden group"
              style={{ backgroundImage: "url('/images/emergency_num_bg.jpg')" }}
            >
              <div className="absolute inset-0 bg-[#0A5F6B]/90 backdrop-blur-[1px] group-hover:bg-[#0A5F6B]/85 transition-colors" />

              <div className="relative z-10 w-16 h-16 rounded-2xl bg-[#07515C] flex items-center justify-center shrink-0 shadow-lg text-white group-hover:scale-105 transition-transform">
                <Mail className="w-8 h-8 text-white" />
              </div>

              <div className="relative z-10 text-white">
                <div className="text-xs font-bold uppercase tracking-wider text-[#C9F5F3] font-exo">
                  Reach Out to Us
                </div>
                <a 
                  href="mailto:care@medlix.in" 
                  className="text-2xl sm:text-3xl font-extrabold font-exo hover:text-[#C9F5F3] transition-colors block text-white mt-0.5"
                >
                  care@medlix.in
                </a>
                <div className="text-xs text-[#DFF8F8] font-roboto mt-0.5">24/7 Patient Coordination &amp; Queries</div>
              </div>
            </div>

            {/* Right: Emergency Medical Care */}
            <div 
              className="relative bg-cover bg-center py-10 px-8 sm:px-14 flex items-center gap-6 overflow-hidden group"
              style={{ backgroundImage: "url('/images/subscribe-bg-2.jpg')" }}
            >
              <div className="absolute inset-0 bg-[#07515C]/95 backdrop-blur-[1px] group-hover:bg-[#07515C]/90 transition-colors" />

              <div className="relative z-10 w-16 h-16 rounded-2xl bg-[#FDFEFE] flex items-center justify-center shrink-0 shadow-lg text-[#0A5F6B] group-hover:scale-105 transition-transform">
                <Phone className="w-8 h-8 text-[#0A5F6B]" />
              </div>

              <div className="relative z-10 text-white">
                <div className="text-xs font-bold uppercase tracking-wider text-[#C9F5F3] font-exo">
                  Emergency Medical Care
                </div>
                <a 
                  href="tel:+919220143473" 
                  className="text-2xl sm:text-3xl font-extrabold font-exo hover:text-[#C9F5F3] transition-colors block text-white mt-0.5"
                >
                  +91-9220143473
                </a>
                <div className="text-xs text-[#DFF8F8] font-roboto mt-0.5">Trauma Response, CCU &amp; Ambulance 24x7</div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
