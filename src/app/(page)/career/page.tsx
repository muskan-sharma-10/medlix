'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import PageBanner from '@/components/ui/page-banner';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Upload, 
  Send, 
  Users, 
  Award, 
  HeartHandshake,
  ShieldCheck
} from 'lucide-react';
import medlixData from '@/lib/medlixData.json';

export default function CareerPage() {
  const [selectedJob, setSelectedJob] = useState<string>('Consultant Cardiologist');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    location: 'Medlix Aarvy Hospital, Gurugram',
    notes: ''
  });

  const jobs = medlixData.careers || [];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="w-full flex flex-col">
      {/* 1. Page Banner */}
      <PageBanner
        title="Careers at Medlix Hospital"
        subtitle="Be part of a compassionate, clinically driven healthcare system shaping the future of medicine across Northern India."
        badge="Join Our Medical Team"
        breadcrumbs={[{ label: 'Career' }]}
        imageSrc="/images/page-banner.jpg"
      />

      {/* 2. Culture & Why Join Us */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0A5F6B] bg-[#DFF8F8] px-3.5 py-1.5 rounded-full border border-[#C4DFDF] font-exo inline-block shadow-2xs">
              Work With Purpose
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#29363A] font-exo tracking-tight">
              Why Build Your Career At Medlix?
            </h2>
            <p className="text-[#719497] text-sm sm:text-base font-roboto">
              We provide clinicians and healthcare professionals with cutting-edge medical infrastructure, clinical autonomy, and rewarding growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-slate-50 border border-[#C4DFDF] space-y-4 hover:shadow-2xl hover:border-[#0A5F6B] hover:-translate-y-1.5 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#0A5F6B] opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-14 h-14 rounded-2xl bg-[#DFF8F8] text-[#0A5F6B] flex items-center justify-center shadow-xs group-hover:bg-[#0A5F6B] group-hover:text-white transition-colors">
                <Award className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold font-exo text-[#29363A] group-hover:text-[#0A5F6B] transition-colors">Clinical Excellence &amp; Tech</h3>
              <p className="text-xs sm:text-sm text-[#719497] font-roboto leading-relaxed">
                Work alongside distinguished department heads and utilize modular OTs, advanced catheterization suites, and 24x7 critical care systems.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-[#C4DFDF] space-y-4 hover:shadow-2xl hover:border-[#0A5F6B] hover:-translate-y-1.5 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#0A5F6B] opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-14 h-14 rounded-2xl bg-[#DFF8F8] text-[#0A5F6B] flex items-center justify-center shadow-xs group-hover:bg-[#0A5F6B] group-hover:text-white transition-colors">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold font-exo text-[#29363A] group-hover:text-[#0A5F6B] transition-colors">Collaborative Peer Culture</h3>
              <p className="text-xs sm:text-sm text-[#719497] font-roboto leading-relaxed">
                Our multi-disciplinary tumor boards, clinical audits, and continuous medical education (CME) seminars foster ongoing learning.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-[#C4DFDF] space-y-4 hover:shadow-2xl hover:border-[#0A5F6B] hover:-translate-y-1.5 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#0A5F6B] opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-14 h-14 rounded-2xl bg-[#DFF8F8] text-[#0A5F6B] flex items-center justify-center shadow-xs group-hover:bg-[#0A5F6B] group-hover:text-white transition-colors">
                <HeartHandshake className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold font-exo text-[#29363A] group-hover:text-[#0A5F6B] transition-colors">Competitive Compensation</h3>
              <p className="text-xs sm:text-sm text-[#719497] font-roboto leading-relaxed">
                Attractive compensation benchmarks, family healthcare privileges across all 8 branches, and transparent performance appraisals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Current Openings & Application Form */}
      <section className="py-20 bg-slate-50/70 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Openings List (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0A5F6B] bg-[#DFF8F8] px-3.5 py-1.5 rounded-full border border-[#C4DFDF] font-exo inline-block shadow-2xs">
                  Vacancies
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#29363A] font-exo tracking-tight">
                  Current Career Openings
                </h2>
              </div>

              <div className="space-y-4">
                {jobs.map((job) => (
                  <div
                    key={job.id}
                    className={`p-7 rounded-3xl border transition-all duration-300 cursor-pointer ${
                      selectedJob === job.title
                        ? 'bg-white border-[#0A5F6B] shadow-xl ring-2 ring-[#C9F5F3] -translate-y-1'
                        : 'bg-white border-[#C4DFDF] hover:border-[#0A5F6B] hover:shadow-md'
                    }`}
                    onClick={() => setSelectedJob(job.title)}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <span className="text-[11px] font-bold text-[#0A5F6B] uppercase tracking-wider font-exo">
                          {job.department}
                        </span>
                        <h4 className="text-lg sm:text-xl font-bold font-exo text-[#29363A] mt-0.5">
                          {job.title}
                        </h4>
                      </div>

                      <span className="inline-block px-3 py-1 rounded-full bg-[#DFF8F8] text-[#0A5F6B] text-xs font-bold font-exo border border-[#C4DFDF] self-start sm:self-center">
                        {job.type}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-[#719497] pt-3 mt-3 border-t border-[#C4DFDF] font-roboto">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-[#0A5F6B]" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-[#0A5F6B]" />
                        <span>Experience: {job.experience}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Application Form (5 cols) */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#C4DFDF] shadow-2xl sticky top-28 space-y-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#0A5F6B]" />
                
                <div className="space-y-1 pb-3 border-b border-[#C4DFDF]">
                  <h3 className="text-2xl font-bold font-exo text-[#29363A]">
                    Apply For Position
                  </h3>
                  <p className="text-xs sm:text-sm text-[#719497] font-roboto">
                    Applying for: <strong className="text-[#0A5F6B]">{selectedJob}</strong>
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="p-8 rounded-2xl bg-[#DFF8F8] border border-[#C4DFDF] text-center space-y-3">
                    <CheckCircle2 className="w-12 h-12 text-[#0A5F6B] mx-auto" />
                    <h4 className="text-xl font-bold text-[#0A5F6B] font-exo">Application Submitted!</h4>
                    <p className="text-xs sm:text-sm text-[#719497] font-roboto leading-relaxed">
                      Thank you for applying to Medlix Hospital. Our Human Resources team will review your qualifications and reach out shortly.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="px-5 py-2.5 text-xs font-bold text-white bg-[#0A5F6B] hover:bg-[#07515C] rounded-xl mt-2 transition-all shadow-sm"
                    >
                      Submit Another Application
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-[#29363A] mb-1.5 font-exo">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Dr. / Mr. / Ms."
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-50 border border-[#C4DFDF] rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#0A5F6B] focus:ring-2 focus:ring-[#C9F5F3] transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-[#29363A] mb-1.5 font-exo">Email *</label>
                        <input
                          type="email"
                          required
                          placeholder="doctor@medlix.in"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 bg-slate-50 border border-[#C4DFDF] rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#0A5F6B] focus:ring-2 focus:ring-[#C9F5F3] transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#29363A] mb-1.5 font-exo">Phone *</label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 bg-slate-50 border border-[#C4DFDF] rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#0A5F6B] focus:ring-2 focus:ring-[#C9F5F3] transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#29363A] mb-1.5 font-exo">Years of Clinical Experience *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. 5 Years post MD/MS"
                        value={formData.experience}
                        onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-50 border border-[#C4DFDF] rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#0A5F6B] focus:ring-2 focus:ring-[#C9F5F3] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#29363A] mb-1.5 font-exo">Upload Resume (PDF, DOC, DOCX up to 5MB) *</label>
                      <div className="border-2 border-dashed border-[#C4DFDF] rounded-2xl p-5 text-center bg-slate-50 hover:bg-[#DFF8F8] hover:border-[#0A5F6B] transition-colors cursor-pointer group">
                        <Upload className="w-7 h-7 text-[#719497] group-hover:text-[#0A5F6B] mx-auto mb-1.5 transition-colors" />
                        <span className="text-xs text-[#29363A] block font-medium">Click to browse or drag file</span>
                        <input type="file" required className="hidden" id="resume-input" />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-[#0A5F6B] hover:bg-[#07515C] text-white font-bold text-sm rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-y-0"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Job Application</span>
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
