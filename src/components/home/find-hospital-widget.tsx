'use client';

import React, { useState } from 'react';
import { Search, MapPin, Building2, Stethoscope, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function FindHospitalWidget() {
  const [activeTab, setActiveTab] = useState<'hospital' | 'doctor' | 'specialty'>('hospital');
  const [searchQuery, setSearchQuery] = useState('');

  const targetLink = activeTab === 'doctor'
    ? `/doctors?search=${encodeURIComponent(searchQuery)}`
    : activeTab === 'specialty'
    ? `/department?search=${encodeURIComponent(searchQuery)}`
    : `/locations?search=${encodeURIComponent(searchQuery)}`;

  return (
    <div className="hidden sm:block absolute bottom-6 lg:bottom-10 left-1/2 -translate-x-1/2 z-40 w-[95%] sm:w-[92%] max-w-4xl glass-panel shadow-[0_20px_50px_rgba(0,0,0,0.22)] rounded-3xl overflow-hidden p-4 sm:p-6 transition-all duration-300 hover:shadow-[0_25px_60px_rgba(25,96,98,0.3)] border border-white/60">
      
      {/* Tabs */}
      <div className="flex items-center gap-6 mb-4 border-b border-[#C4DFDF] pb-3">
        <button
          onClick={() => setActiveTab('hospital')}
          className={`flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 ${
            activeTab === 'hospital' 
              ? 'text-[#0A5F6B] border-b-2 border-[#0A5F6B] pb-3 -mb-[13px] font-black' 
              : 'text-[#719497] hover:text-[#29363A]'
          }`}
        >
          <Building2 className="w-4 h-4 text-[#0A5F6B]" />
          <span>Find Hospital</span>
        </button>
        <button
          onClick={() => setActiveTab('doctor')}
          className={`flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 ${
            activeTab === 'doctor' 
              ? 'text-[#0A5F6B] border-b-2 border-[#0A5F6B] pb-3 -mb-[13px] font-black' 
              : 'text-[#719497] hover:text-[#29363A]'
          }`}
        >
          <Stethoscope className="w-4 h-4 text-[#0A5F6B]" />
          <span>Find Doctor</span>
        </button>
        <button
          onClick={() => setActiveTab('specialty')}
          className={`flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 ${
            activeTab === 'specialty' 
              ? 'text-[#0A5F6B] border-b-2 border-[#0A5F6B] pb-3 -mb-[13px] font-black' 
              : 'text-[#719497] hover:text-[#29363A]'
          }`}
        >
          <Search className="w-4 h-4 text-[#0A5F6B]" />
          <span>Search Specialty</span>
        </button>
      </div>

      {/* Input Area */}
      <div className="flex flex-col sm:flex-row items-center gap-3">
        <div className="relative flex-1 w-full group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            {activeTab === 'hospital' ? (
              <MapPin className="h-5 w-5 text-[#719497] group-focus-within:text-[#0A5F6B] transition-colors" />
            ) : activeTab === 'doctor' ? (
              <Stethoscope className="h-5 w-5 text-[#719497] group-focus-within:text-[#0A5F6B] transition-colors" />
            ) : (
              <Search className="h-5 w-5 text-[#719497] group-focus-within:text-[#0A5F6B] transition-colors" />
            )}
          </div>
          <input
            type="text"
            className="block w-full pl-11 pr-4 py-3.5 bg-white/95 border border-[#C4DFDF] rounded-2xl text-[#29363A] focus:ring-2 focus:ring-[#C9F5F3] focus:border-[#0A5F6B] outline-none transition-all shadow-xs text-sm sm:text-base font-medium placeholder:text-[#719497]/70"
            placeholder={
              activeTab === 'hospital'
                ? "Search by City, Location, or Hospital Name..."
                : activeTab === 'doctor'
                ? "Search Doctor by Name or Specialty..."
                : "Search Cardiology, Neurology, Orthopedics..."
            }
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <Link 
          href={targetLink}
          className="w-full sm:w-auto px-8 py-3.5 bg-[#0A5F6B] hover:bg-[#07515C] text-white font-bold text-sm rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group shrink-0 active:scale-95 cursor-pointer font-exo"
        >
          <span>Search Now</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
