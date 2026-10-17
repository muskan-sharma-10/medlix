'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import PageBanner from '@/components/ui/page-banner';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  User, 
  Phone, 
  Mail, 
  Stethoscope, 
  CheckCircle2, 
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import medlixData from '@/lib/medlixData.json';

export default function BookAppointmentPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    specialty: 'Cardiology',
    hospital: 'Medlix Aarvy Hospital, Gurugram',
    doctor: 'Any Available Senior Consultant',
    date: '',
    timeSlot: 'Morning (09:00 AM - 12:00 PM)',
    symptoms: ''
  });

  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingId, setBookingId] = useState('');

  const specialties = medlixData.specialties;
  const hospitals = medlixData.locations;
  const doctors = medlixData.doctors || [];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = 'MDX-' + Math.floor(100000 + Math.random() * 900000);
    setBookingId(id);
    setBookingConfirmed(true);
  };

  return (
    <div className="w-full flex flex-col">
      {/* 1. Page Banner */}
      <PageBanner
        title="Book Doctor Appointment"
        subtitle="Schedule a consultation with top specialists across 8 Medlix Hospitals. Verified same-day OPD slots and minimal wait times."
        badge="Instant Confirmation"
        breadcrumbs={[{ label: 'Book Appointment' }]}
        imageSrc="/images/page-banner.jpg"
      />

      {/* 2. Main Booking Section */}
      <section className="py-20 bg-slate-50/70 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {bookingConfirmed ? (
            /* Confirmation Card */
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#C4DFDF] shadow-2xl text-center space-y-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#0A5F6B]" />

              <div className="w-20 h-20 rounded-full bg-[#DFF8F8] text-[#0A5F6B] flex items-center justify-center mx-auto border-4 border-[#C4DFDF] shadow-sm">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0A5F6B] bg-[#DFF8F8] px-3.5 py-1.5 rounded-full border border-[#C4DFDF] font-exo inline-block shadow-2xs">
                  Booking Confirmed
                </span>
                <h2 className="text-3xl font-extrabold font-exo text-[#29363A]">
                  Appointment Scheduled!
                </h2>
                <p className="text-xs sm:text-sm text-[#719497] font-roboto">
                  Your Appointment Reference ID is <strong className="text-[#0A5F6B] font-exo text-base">{bookingId}</strong>
                </p>
              </div>

              {/* Receipt Box */}
              <div className="p-6 rounded-2xl bg-slate-50/80 border border-[#C4DFDF] text-left space-y-3 max-w-lg mx-auto text-xs sm:text-sm shadow-xs">
                <div className="flex justify-between py-1.5 border-b border-[#C4DFDF]">
                  <span className="text-[#719497]">Patient Name:</span>
                  <span className="font-bold text-[#29363A]">{formData.name}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#C4DFDF]">
                  <span className="text-[#719497]">Hospital Branch:</span>
                  <span className="font-bold text-[#29363A]">{formData.hospital}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#C4DFDF]">
                  <span className="text-[#719497]">Specialty:</span>
                  <span className="font-bold text-[#0A5F6B]">{formData.specialty}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#C4DFDF]">
                  <span className="text-[#719497]">Doctor:</span>
                  <span className="font-bold text-[#29363A]">{formData.doctor}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#C4DFDF]">
                  <span className="text-[#719497]">Preferred Slot:</span>
                  <span className="font-bold text-[#29363A]">{formData.timeSlot}</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-[#719497]">Emergency Desk:</span>
                  <span className="font-bold text-[#0A5F6B]">+91 92895 00375</span>
                </div>
              </div>

              <p className="text-xs text-[#719497] font-roboto max-w-md mx-auto leading-relaxed">
                An SMS confirmation has been sent to {formData.phone}. Please arrive 15 minutes prior to your consultation slot with any previous medical records.
              </p>

              <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={() => setBookingConfirmed(false)}
                  className="px-7 py-3 bg-[#0A5F6B] hover:bg-[#07515C] text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md hover:-translate-y-0.5"
                >
                  Book Another Appointment
                </button>

                <Link
                  href="/"
                  className="px-7 py-3 bg-slate-100 hover:bg-slate-200 text-[#29363A] font-semibold text-xs sm:text-sm rounded-xl transition-all hover:-translate-y-0.5"
                >
                  Return to Home
                </Link>
              </div>
            </div>
          ) : (
            /* Booking Form */
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#C4DFDF] shadow-2xl space-y-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#0A5F6B]" />

              <div className="space-y-2 pb-4 border-b border-[#C4DFDF]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#0A5F6B] animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0A5F6B] font-exo">
                    Quick OPD Scheduling
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-exo text-[#29363A]">
                  Patient Consultation Request
                </h3>
                <p className="text-xs sm:text-sm text-[#719497] font-roboto">
                  Please provide patient details and preferences to schedule an appointment with guaranteed priority desk service.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* 1. Patient Details */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#0A5F6B] uppercase tracking-wider font-exo">
                    <span className="w-6 h-6 rounded-full bg-[#DFF8F8] text-[#0A5F6B] flex items-center justify-center font-bold text-xs">
                      1
                    </span>
                    <span>Patient Information</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#29363A] mb-1.5 font-exo">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Patient's Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-50 border border-[#C4DFDF] rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#0A5F6B] focus:ring-2 focus:ring-[#C9F5F3] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#29363A] mb-1.5 font-exo font-exo">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-50 border border-[#C4DFDF] rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#0A5F6B] focus:ring-2 focus:ring-[#C9F5F3] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#29363A] mb-1.5 font-exo">Email Address</label>
                      <input
                        type="email"
                        placeholder="patient@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-50 border border-[#C4DFDF] rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#0A5F6B] focus:ring-2 focus:ring-[#C9F5F3] transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* 2. Department & Location */}
                <div className="space-y-4 pt-5 border-t border-[#C4DFDF]">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#0A5F6B] uppercase tracking-wider font-exo">
                    <span className="w-6 h-6 rounded-full bg-[#DFF8F8] text-[#0A5F6B] flex items-center justify-center font-bold text-xs">
                      2
                    </span>
                    <span>Specialty &amp; Hospital Branch</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#29363A] mb-1.5 font-exo">Select Specialty *</label>
                      <select
                        value={formData.specialty}
                        onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-50 border border-[#C4DFDF] rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#0A5F6B] focus:ring-2 focus:ring-[#C9F5F3] transition-all font-medium text-[#29363A]"
                      >
                        {specialties.map((s, idx) => (
                          <option key={idx} value={s.title}>{s.title}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#29363A] mb-1.5 font-exo">Select Hospital Branch *</label>
                      <select
                        value={formData.hospital}
                        onChange={(e) => setFormData({ ...formData, hospital: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-50 border border-[#C4DFDF] rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#0A5F6B] focus:ring-2 focus:ring-[#C9F5F3] transition-all font-medium text-[#29363A]"
                      >
                        {hospitals.map((h, idx) => (
                          <option key={idx} value={`${h.name}, ${h.city}`}>{h.name} ({h.city})</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* 3. Slot Preferences */}
                <div className="space-y-4 pt-5 border-t border-[#C4DFDF]">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#0A5F6B] uppercase tracking-wider font-exo">
                    <span className="w-6 h-6 rounded-full bg-[#DFF8F8] text-[#0A5F6B] flex items-center justify-center font-bold text-xs">
                      3
                    </span>
                    <span>Slot &amp; Doctor Preferences</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#29363A] mb-1.5 font-exo">Preferred Doctor</label>
                      <select
                        value={formData.doctor}
                        onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-50 border border-[#C4DFDF] rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#0A5F6B] focus:ring-2 focus:ring-[#C9F5F3] transition-all font-medium text-[#29363A]"
                      >
                        <option value="Any Available Senior Consultant">Any Available Senior Consultant</option>
                        {doctors.map((d, idx) => (
                          <option key={idx} value={d.name}>{d.name} ({d.specialty})</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#29363A] mb-1.5 font-exo">Preferred Date *</label>
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-50 border border-[#C4DFDF] rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#0A5F6B] focus:ring-2 focus:ring-[#C9F5F3] transition-all font-medium text-[#29363A]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#29363A] mb-1.5 font-exo">Time Window *</label>
                      <select
                        value={formData.timeSlot}
                        onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-50 border border-[#C4DFDF] rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#0A5F6B] focus:ring-2 focus:ring-[#C9F5F3] transition-all font-medium text-[#29363A]"
                      >
                        <option value="Morning (09:00 AM - 12:00 PM)">Morning (09:00 AM - 12:00 PM)</option>
                        <option value="Afternoon (12:00 PM - 04:00 PM)">Afternoon (12:00 PM - 04:00 PM)</option>
                        <option value="Evening (04:00 PM - 08:30 PM)">Evening (04:00 PM - 08:30 PM)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* 4. Symptoms / Notes */}
                <div className="pt-5 border-t border-[#C4DFDF]">
                  <label className="block text-xs font-bold text-[#29363A] mb-1.5 font-exo">
                    Describe Symptoms / Clinical Concerns
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe health condition or previous diagnosis..."
                    value={formData.symptoms}
                    onChange={(e) => setFormData({ ...formData, symptoms: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-[#C4DFDF] rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#0A5F6B] focus:ring-2 focus:ring-[#C9F5F3] transition-all"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-4 bg-[#0A5F6B] hover:bg-[#07515C] text-white font-bold text-sm rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Confirm Appointment Booking</span>
                </button>
              </form>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
