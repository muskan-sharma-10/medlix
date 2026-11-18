'use client';

import React, { useState } from 'react';
import { X, Calendar, Clock, User, Phone, MapPin, Stethoscope, CheckCircle2 } from 'lucide-react';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const hospitals = [
  'Medlix Aarvy Hospital - Civil Lines, Gurugram',
  'Medlix Manavta Hospital - Gurugram',
  'Medlix Aayu Hospital - Hari Nagar, Gurugram',
  'Golden Hospital - Sohna Road, Gurugram',
  'Medlix Ananta Hospital - Gurugram',
  'Medlix Gopal Hospital - Gurugram',
  'Medlix Kumar Hospital - Haryana',
  'Medlix Dr RB Yadav Hospital - Rewari'
];

const specialties = [
  'Cardiology',
  'Emergency Care & ICU',
  'Gastrosurgery',
  'Internal Medicine',
  'Nephrology & Dialysis',
  'Neurology & Neurosurgery',
  'Orthopaedics & Joint Replacement',
  'Paediatrics',
  'Ophthalmology',
  'Health Checkup Packages',
  'IVF & Fertility Care',
  'Urology',
  'Sleep Clinic'
];

export default function AppointmentModal({ isOpen, onClose }: AppointmentModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    hospital: hospitals[0],
    specialty: specialties[0],
    date: '',
    time: '10:00 AM',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // simulated success
    }, 500);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#0A5F6B] px-5 sm:px-8 py-4 sm:py-6 text-white flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold tracking-wider uppercase text-[#0A5F6B] bg-[#DFF8F8] px-3 py-1 rounded-full inline-block mb-1.5 font-sans font-bold">
              Medlix Hospital
            </span>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#FDFEFE]">Book a Medical Appointment</h3>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-6 sm:p-10 text-center space-y-5 bg-[#FDFEFE]">
            <div className="w-16 h-16 bg-[#DFF8F8] text-[#0A5F6B] rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-xl sm:text-2xl font-bold text-[#29363A]">Appointment Requested!</h4>
            <p className="text-[#719497] text-sm sm:text-base max-w-md mx-auto leading-relaxed">
              Thank you, <span className="font-semibold text-[#29363A]">{formData.name}</span>. Our patient coordinator from <span className="font-semibold text-[#29363A]">{formData.hospital.split('-')[0]}</span> will call you shortly at <span className="font-semibold text-[#29363A]">{formData.phone}</span> to confirm your slot.
            </p>
            <div className="p-4 bg-[#DFF8F8]/40 rounded-xl text-xs sm:text-sm text-[#719497] border border-[#C4DFDF]">
              For immediate emergency assistance, call our 24x7 helpline: <a href="tel:+919289500375" className="font-bold text-[#0A5F6B]">+91 92895 00375</a>
            </div>
            <button
              onClick={handleReset}
              className="mt-4 px-8 py-3 bg-[#0A5F6B] text-white font-bold rounded-xl hover:bg-[#07515C] transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-5 sm:p-8 space-y-4 sm:space-y-5 max-h-[85vh] overflow-y-auto bg-[#FDFEFE]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-[#29363A] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <User className="w-4 h-4 text-[#0A5F6B]" /> Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Patient Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 text-sm rounded-xl border border-[#C4DFDF] bg-[#FDFEFE] text-[#29363A] focus:outline-none focus:ring-2 focus:ring-[#C9F5F3] focus:border-[#0A5F6B]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#29363A] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Phone className="w-4 h-4 text-[#0A5F6B]" /> Contact Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 text-sm rounded-xl border border-[#C4DFDF] bg-[#FDFEFE] text-[#29363A] focus:outline-none focus:ring-2 focus:ring-[#C9F5F3] focus:border-[#0A5F6B]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#29363A] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#0A5F6B]" /> Select Medlix Hospital Branch *
              </label>
              <select
                value={formData.hospital}
                onChange={(e) => setFormData({ ...formData, hospital: e.target.value })}
                className="w-full px-4 py-3 text-sm rounded-xl border border-[#C4DFDF] focus:outline-none focus:ring-2 focus:ring-[#C9F5F3] focus:border-[#0A5F6B] bg-[#FDFEFE] text-[#29363A]"
              >
                {hospitals.map((h, i) => (
                  <option key={i} value={h}>{h}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#29363A] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Stethoscope className="w-4 h-4 text-[#0A5F6B]" /> Medical Specialty *
              </label>
              <select
                value={formData.specialty}
                onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                className="w-full px-4 py-3 text-sm rounded-xl border border-[#C4DFDF] focus:outline-none focus:ring-2 focus:ring-[#C9F5F3] focus:border-[#0A5F6B] bg-[#FDFEFE] text-[#29363A]"
              >
                {specialties.map((s, i) => (
                  <option key={i} value={s}>{s}</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-[#29363A] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-[#0A5F6B]" /> Preferred Date *
                </label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-4 py-3 text-sm rounded-xl border border-[#C4DFDF] bg-[#FDFEFE] text-[#29363A] focus:outline-none focus:ring-2 focus:ring-[#C9F5F3] focus:border-[#0A5F6B]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#29363A] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#0A5F6B]" /> Preferred Time
                </label>
                <select
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full px-4 py-3 text-sm rounded-xl border border-[#C4DFDF] focus:outline-none focus:ring-2 focus:ring-[#C9F5F3] focus:border-[#0A5F6B] bg-[#FDFEFE] text-[#29363A]"
                >
                  <option>09:00 AM - 12:00 PM (Morning)</option>
                  <option>12:00 PM - 04:00 PM (Afternoon)</option>
                  <option>04:00 PM - 08:00 PM (Evening)</option>
                </select>
              </div>
            </div>

            <div className="pt-4 flex items-center justify-end gap-4 border-t border-[#C4DFDF]">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-3 text-sm font-semibold text-[#719497] hover:text-[#29363A] rounded-xl transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-7 py-3 text-sm font-bold text-white bg-[#0A5F6B] hover:bg-[#07515C] rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                Confirm Appointment
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
