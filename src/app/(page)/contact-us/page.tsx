'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import PageBanner from '@/components/ui/page-banner';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  Building2, 
  ShieldCheck,
  Calendar,
  AlertCircle
} from 'lucide-react';
import medlixData from '@/lib/medlixData.json';

export default function ContactUsPage() {
  const [selectedHospital, setSelectedHospital] = useState(medlixData.locations[0].slug);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });

  const activeHospital = medlixData.locations.find(l => l.slug === selectedHospital) || medlixData.locations[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full flex flex-col">
      {/* 1. Page Banner */}
      <PageBanner
        title="Contact Medlix Hospital"
        subtitle="We are here to assist you 24x7. Reach out for OPD bookings, emergency admissions, insurance queries, or feedback."
        badge="24x7 Patient Support"
        breadcrumbs={[{ label: 'Contact Us' }]}
        imageSrc="/images/page-banner.jpg"
      />

      {/* 2. Direct Contact Cards */}
      <section className="py-16 bg-[#FDFEFE] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phone */}
            <div className="p-8 rounded-3xl bg-[#DFF8F8]/40 border border-[#C4DFDF] space-y-4 hover:shadow-xl hover:border-[#0A5F6B]/40 transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden">
              <div className="w-14 h-14 rounded-2xl bg-[#0A5F6B] text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <Phone className="w-7 h-7 text-[#C9F5F3]" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-exo text-[#29363A]">Emergency &amp; Helpline</h3>
                <p className="text-xs text-[#719497] font-roboto mt-0.5">24 Hours / 7 Days Immediate Assistance</p>
              </div>
              <div className="pt-2 space-y-1 border-t border-[#C4DFDF]">
                <a href="tel:+919289500375" className="block text-xl font-black text-[#0A5F6B] hover:text-[#07515C] font-outfit transition-colors">
                  +91 92895 00375
                </a>
                <a href="tel:+919220143473" className="block text-xs font-semibold text-[#719497] hover:text-[#29363A] transition-colors">
                  Alternate: +91-9220143473
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="p-8 rounded-3xl bg-[#DFF8F8]/40 border border-[#C4DFDF] space-y-4 hover:shadow-xl hover:border-[#0A5F6B]/40 transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden">
              <div className="w-14 h-14 rounded-2xl bg-[#0A5F6B] text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <Mail className="w-7 h-7 text-[#C9F5F3]" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-exo text-[#29363A]">Email Inquiries</h3>
                <p className="text-xs text-[#719497] font-roboto mt-0.5">For clinical reports &amp; corporate partnerships</p>
              </div>
              <div className="pt-2 space-y-1 border-t border-[#C4DFDF]">
                <a href="mailto:info@medlix.in" className="block text-xl font-bold text-[#29363A] hover:text-[#0A5F6B] font-exo transition-colors">
                  info@medlix.in
                </a>
                <a href="mailto:care@medlix.in" className="block text-xs font-semibold text-[#719497] hover:text-[#0A5F6B] transition-colors">
                  care@medlix.in
                </a>
              </div>
            </div>

            {/* Corporate Address */}
            <div className="p-8 rounded-3xl bg-[#FDFEFE] border border-[#C4DFDF] space-y-4 hover:shadow-xl hover:border-[#0A5F6B]/40 transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden">
              <div className="w-14 h-14 rounded-2xl bg-[#07515C] text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <MapPin className="w-7 h-7 text-[#C9F5F3]" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-exo text-[#29363A]">Corporate Office</h3>
                <p className="text-xs text-[#719497] font-roboto mt-0.5">Gurugram Central Headquarters</p>
              </div>
              <p className="text-xs sm:text-sm text-[#719497] font-roboto leading-relaxed pt-2 border-t border-[#C4DFDF]">
                530/18 Civil Lines, Opp Nehru Stadium, Near Mor Chowk Gurugram, Haryana - 122001
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Hospital Selector & Contact Form */}
      <section className="py-20 bg-[#DFF8F8]/30 border-t border-[#C4DFDF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Branch Directory Details (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0A5F6B] bg-[#DFF8F8] px-3.5 py-1.5 rounded-full border border-[#C4DFDF] font-exo inline-block shadow-2xs">
                  Branch Directory
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#29363A] font-exo tracking-tight">
                  Locate Your Nearest Hospital
                </h2>
                <p className="text-xs sm:text-sm text-[#719497] font-roboto leading-relaxed">
                  Select a branch from our network to view specific emergency desk and outpatient coordinates.
                </p>
              </div>

              {/* Selector */}
              <div>
                <label className="block text-xs font-bold text-[#29363A] mb-2 font-exo">
                  Select Medlix Hospital Branch:
                </label>
                <select
                  value={selectedHospital}
                  onChange={(e) => setSelectedHospital(e.target.value)}
                  className="w-full px-4 py-3.5 bg-white border border-[#C4DFDF] rounded-2xl text-sm font-semibold text-[#29363A] focus:outline-none focus:border-[#0A5F6B] focus:ring-2 focus:ring-[#C9F5F3] shadow-xs"
                >
                  {medlixData.locations.map((loc) => (
                    <option key={loc.slug} value={loc.slug}>
                      {loc.name} ({loc.city})
                    </option>
                  ))}
                </select>
              </div>

              {/* Selected Branch Card */}
              <div className="bg-white rounded-3xl p-7 border border-[#C4DFDF] shadow-lg space-y-5 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#0A5F6B]" />
                
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-bold font-exo text-[#0A5F6B]">
                    {activeHospital.name}
                  </h4>
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#DFF8F8] text-[#0A5F6B] border border-[#C4DFDF] font-exo">
                    {activeHospital.beds}
                  </span>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-[#719497] font-roboto">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#0A5F6B] shrink-0 mt-0.5" />
                    <span>{activeHospital.address}</span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-[#0A5F6B] shrink-0" />
                    <a href={`tel:${activeHospital.phone.replace(/\s+/g, '')}`} className="font-bold text-[#29363A] hover:text-[#0A5F6B] transition-colors">
                      {activeHospital.phone}
                    </a>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-[#0A5F6B] shrink-0" />
                    <a href={`mailto:${activeHospital.email}`} className="text-[#719497] hover:text-[#0A5F6B] transition-colors">
                      {activeHospital.email}
                    </a>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-[#0A5F6B] shrink-0" />
                    <span>OPD: Mon - Sat (8:00 AM - 10:00 PM)</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#C4DFDF] flex items-center justify-between">
                  <Link
                    href={`/${activeHospital.slug}`}
                    className="text-xs font-bold text-[#0A5F6B] hover:text-[#07515C] transition-colors font-exo flex items-center gap-1"
                  >
                    View Branch Services →
                  </Link>

                  <Link
                    href="/book-appointment"
                    className="px-4 py-2 bg-[#0A5F6B] hover:bg-[#07515C] text-white text-xs font-bold rounded-xl shadow-xs transition-all cursor-pointer font-exo"
                  >
                    Book Slot
                  </Link>
                </div>
              </div>
            </div>

            {/* Right: Message / Inquiry Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#C4DFDF] shadow-xl space-y-6">
                <div className="space-y-1 pb-2 border-b border-[#C4DFDF]">
                  <h3 className="text-2xl sm:text-3xl font-bold font-exo text-[#29363A]">
                    Reach Out to Us
                  </h3>
                  <p className="text-xs sm:text-sm text-[#719497] font-roboto">
                    Fill out the form below and our medical coordinator will get back to you within 30 minutes.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-8 sm:p-10 rounded-3xl bg-[#DFF8F8] border border-[#C4DFDF] text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-[#C9F5F3] text-[#0A5F6B] flex items-center justify-center mx-auto shadow-xs">
                      <CheckCircle2 className="w-9 h-9" />
                    </div>
                    <h4 className="text-2xl font-bold font-exo text-[#0A5F6B]">Thank You!</h4>
                    <p className="text-xs sm:text-sm text-[#719497] font-roboto leading-relaxed max-w-md mx-auto">
                      Your message has been received. A Medlix care executive will contact you shortly on your provided phone number.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-3 bg-[#0A5F6B] hover:bg-[#07515C] text-white text-xs sm:text-sm font-bold rounded-xl transition-all shadow-md cursor-pointer font-exo"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#29363A] mb-1.5 font-exo">Your Full Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Ramesh Kumar"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 bg-[#FDFEFE] border border-[#C4DFDF] rounded-xl text-xs sm:text-sm text-[#29363A] focus:outline-none focus:border-[#0A5F6B] focus:ring-2 focus:ring-[#C9F5F3] transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#29363A] mb-1.5 font-exo">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 bg-[#FDFEFE] border border-[#C4DFDF] rounded-xl text-xs sm:text-sm text-[#29363A] focus:outline-none focus:border-[#0A5F6B] focus:ring-2 focus:ring-[#C9F5F3] transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#29363A] mb-1.5 font-exo">Email Address</label>
                        <input
                          type="email"
                          placeholder="name@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 bg-[#FDFEFE] border border-[#C4DFDF] rounded-xl text-xs sm:text-sm text-[#29363A] focus:outline-none focus:border-[#0A5F6B] focus:ring-2 focus:ring-[#C9F5F3] transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#29363A] mb-1.5 font-exo">Subject</label>
                        <select
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full px-4 py-3 bg-[#FDFEFE] border border-[#C4DFDF] rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#0A5F6B] focus:ring-2 focus:ring-[#C9F5F3] transition-all font-medium text-[#29363A]"
                        >
                          <option value="General Inquiry">General Inquiry</option>
                          <option value="OPD Appointment">OPD Appointment</option>
                          <option value="Cashless Insurance">Cashless Insurance / TPA</option>
                          <option value="Transplant Query">Transplant Query</option>
                          <option value="Health Checkup Package">Health Checkup Package</option>
                          <option value="Patient Feedback">Patient Feedback / Support</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#29363A] mb-1.5 font-exo">Your Message or Health Query *</label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Please write details of symptoms or query..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 bg-[#FDFEFE] border border-[#C4DFDF] rounded-xl text-xs sm:text-sm text-[#29363A] focus:outline-none focus:border-[#0A5F6B] focus:ring-2 focus:ring-[#C9F5F3] transition-all"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-[#0A5F6B] hover:bg-[#07515C] text-white font-bold text-sm rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer font-exo"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
