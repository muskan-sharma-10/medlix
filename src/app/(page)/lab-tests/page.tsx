'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import PageBanner from '@/components/ui/page-banner';
import { 
  TestTube, 
  Search, 
  Clock, 
  Home, 
  FileText, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  Phone,
  Microscope,
  Award,
  Calendar,
  Zap,
  Filter
} from 'lucide-react';

export default function LabTestsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPackage, setSelectedPackage] = useState<any>(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  // Lab test packages data
  const packages = [
    {
      id: 'full-body-gold',
      title: 'Medlix Full Body Health Checkup - Gold',
      category: 'Full Body Checkup',
      testsCount: 84,
      originalPrice: 3999,
      discountedPrice: 1499,
      discountPercent: '62% OFF',
      tat: 'Reports in 12 Hours',
      sampleType: 'Blood & Urine',
      fasting: '10-12 Hours Fasting Required',
      testsIncluded: [
        'Complete Blood Count (CBC - 24 parameters)',
        'Lipid Profile for Heart Health (8 parameters)',
        'Liver Function Test (LFT - 11 parameters)',
        'Kidney Function Test (KFT - 10 parameters)',
        'Thyroid Profile (T3, T4, TSH)',
        'HbA1c & Fasting Blood Sugar',
        'Vitamin D3 & Vitamin B12',
        'Urine Routine Examination'
      ],
      popular: true
    },
    {
      id: 'cardiac-risk-profile',
      title: 'Advanced Heart & Cardiac Risk Profile',
      category: 'Cardiac Care',
      testsCount: 42,
      originalPrice: 4500,
      discountedPrice: 1999,
      discountPercent: '55% OFF',
      tat: 'Reports in 8 Hours',
      sampleType: 'Blood Sample',
      fasting: '12 Hours Fasting Required',
      testsIncluded: [
        'High-Sensitivity CRP (hs-CRP)',
        'Lipid Profile Extended',
        'Homocysteine Test',
        'Troponin-I Test',
        'Electrocardiogram (ECG) Report',
        'Fasting Blood Glucose',
        'Kidney Creatinine & Electrolytes'
      ],
      popular: false
    },
    {
      id: 'diabetes-care-plan',
      title: 'Comprehensive Diabetes Monitoring Package',
      category: 'Diabetes',
      testsCount: 28,
      originalPrice: 2200,
      discountedPrice: 899,
      discountPercent: '59% OFF',
      tat: 'Reports in 6 Hours',
      sampleType: 'Blood & Urine',
      fasting: '8 Hours Fasting Required',
      testsIncluded: [
        'HbA1c (Glycosylated Hemoglobin)',
        'Fasting Blood Glucose',
        'Post Prandial (PP) Blood Sugar',
        'Urine Microalbumin Ratio',
        'Lipid Profile Basic',
        'Kidney Serum Creatinine'
      ],
      popular: true
    },
    {
      id: 'vitamin-deficiency-check',
      title: 'Vitamin & Bone Health Special Package',
      category: 'Vitamin Profile',
      testsCount: 15,
      originalPrice: 3200,
      discountedPrice: 1299,
      discountPercent: '60% OFF',
      tat: 'Reports in 24 Hours',
      sampleType: 'Blood Sample',
      fasting: 'No Fasting Required',
      testsIncluded: [
        'Vitamin D3 (25-Hydroxy)',
        'Vitamin B12 (Cyanocobalamin)',
        'Serum Calcium Total',
        'Phosphorus & Alkaline Phosphatase',
        'Uric Acid Level',
        'Complete Hemogram'
      ],
      popular: false
    },
    {
      id: 'senior-citizen-health',
      title: 'Senior Citizen Wellness Package (Male/Female)',
      category: 'Full Body Checkup',
      testsCount: 96,
      originalPrice: 5999,
      discountedPrice: 2499,
      discountPercent: '58% OFF',
      tat: 'Reports in 12 Hours',
      sampleType: 'Blood & Urine',
      fasting: '10 Hours Fasting Required',
      testsIncluded: [
        'Complete Hemogram & ESR',
        'Lipid Profile & Atherogenic Index',
        'Comprehensive Liver & Kidney Panels',
        'Thyroid T3 T4 TSH',
        'Bone Density Markers (Calcium & Vit D)',
        'PSA (for Men) / Pap Smear Screen',
        'Diabetes Screen (HbA1c & Fasting)'
      ],
      popular: true
    },
    {
      id: 'thyroid-essential',
      title: 'Super Ultra Thyroid Screening Panel',
      category: 'Thyroid',
      testsCount: 8,
      originalPrice: 1200,
      discountedPrice: 499,
      discountPercent: '58% OFF',
      tat: 'Reports in 6 Hours',
      sampleType: 'Blood Sample',
      fasting: 'No Fasting Required',
      testsIncluded: [
        'Total Triiodothyronine (T3)',
        'Total Thyroxine (T4)',
        'Thyroid Stimulating Hormone (TSH)',
        'Anti-TPO Antibodies Screen',
        'Free T3 & Free T4'
      ],
      popular: false
    }
  ];

  const categories = ['All', 'Full Body Checkup', 'Cardiac Care', 'Diabetes', 'Vitamin Profile', 'Thyroid'];

  const filteredPackages = packages.filter(pkg => {
    const matchesCategory = selectedCategory === 'All' || pkg.category === selectedCategory;
    const matchesSearch = pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          pkg.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          pkg.testsIncluded.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleBookPackage = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
      setSelectedPackage(null);
    }, 4000);
  };

  return (
    <div className="w-full flex flex-col bg-[#F8FAFC]">
      {/* 1. Hero Page Banner */}
      <PageBanner
        title="Book Diagnostic Lab Tests & Health Checkups"
        subtitle="NABL Accredited Medlix Labs. Free Home Sample Collection within 30 minutes across NCR with 100% accurate digital reports."
        badge="🔬 Free Home Sample Collection"
        breadcrumbs={[{ label: 'Book Lab Test' }]}
        imageSrc="/images/page-banner.jpg"
      />

      {/* 2. Key Highlights Bar */}
      <section className="bg-gradient-to-r from-[#07515C] to-[#0A5F6B] text-white py-6 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Home className="w-7 h-7 mb-2 text-[#C9F5F3]" />
              <h4 className="font-bold font-exo text-sm sm:text-base">Free Home Collection</h4>
              <p className="text-xs text-teal-100">Trained phlebotomists at your doorstep</p>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="w-7 h-7 mb-2 text-[#C9F5F3]" />
              <h4 className="font-bold font-exo text-sm sm:text-base">Express 6-12 Hr Reports</h4>
              <p className="text-xs text-teal-100">Digital PDF reports via WhatsApp & Email</p>
            </div>
            <div className="flex flex-col items-center">
              <ShieldCheck className="w-7 h-7 mb-2 text-[#C9F5F3]" />
              <h4 className="font-bold font-exo text-sm sm:text-base">NABL & ISO Certified</h4>
              <p className="text-xs text-teal-100">100% verified clinical accuracy</p>
            </div>
            <div className="flex flex-col items-center">
              <Zap className="w-7 h-7 mb-2 text-[#C9F5F3]" />
              <h4 className="font-bold font-exo text-sm sm:text-base">Up to 70% Off</h4>
              <p className="text-xs text-teal-100">Affordable preventive healthcare</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Search & Filter Bar */}
      <section className="py-8 bg-white border-b border-[#C4DFDF] sticky top-[72px] lg:top-[88px] z-20 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search test (e.g. CBC, Lipid, Thyroid, Full Body)..."
                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-[#C4DFDF] rounded-2xl text-sm focus:outline-none focus:border-[#0A5F6B] focus:ring-2 focus:ring-[#C9F5F3] font-medium text-[#29363A]"
              />
            </div>

            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
              <Filter className="w-4 h-4 text-slate-400 shrink-0 hidden sm:block" />
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all font-exo ${
                    selectedCategory === cat
                      ? 'bg-[#0A5F6B] text-white shadow-md'
                      : 'bg-slate-100 text-[#29363A] hover:bg-[#DFF8F8] hover:text-[#0A5F6B]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Packages Grid */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-exo text-[#29363A]">
              Popular Health Packages & Diagnostic Tests
            </h2>
            <p className="text-xs sm:text-sm text-[#719497] font-roboto">
              Choose from verified preventative health checkup packages with free home sample collection
            </p>
          </div>
          <a href="tel:+919220143473" className="hidden sm:flex items-center gap-2 text-xs font-bold text-[#0A5F6B] bg-[#DFF8F8] px-4 py-2 rounded-xl border border-[#C4DFDF] hover:bg-[#C9F5F3]">
            <Phone className="w-4 h-4" />
            <span>Call Lab Helpline: +91-9220143473</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-3xl overflow-hidden border border-[#C4DFDF] shadow-[0_6px_25px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_45px_rgba(10,95,107,0.15)] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-2 relative"
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-[#0A5F6B] text-white text-[11px] font-bold px-4 py-1 rounded-bl-2xl font-exo uppercase tracking-wider shadow-sm z-10">
                  🔥 Most Popular
                </div>
              )}

              <div className="p-7 space-y-5">
                <div className="space-y-1.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0A5F6B] bg-[#DFF8F8] px-3 py-1 rounded-full border border-[#C4DFDF] inline-block font-exo">
                    {pkg.category}
                  </span>
                  <h3 className="text-xl font-bold font-exo text-[#29363A] leading-snug group-hover:text-[#0A5F6B] transition-colors">
                    {pkg.title}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-[#719497] font-roboto pt-1">
                    <span className="flex items-center gap-1 font-semibold text-[#29363A]">
                      <Microscope className="w-3.5 h-3.5 text-[#0A5F6B]" />
                      {pkg.testsCount} Tests Included
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {pkg.tat}
                    </span>
                  </div>
                </div>

                {/* Price Section */}
                <div className="bg-slate-50 p-4 rounded-2xl border border-[#C4DFDF] flex items-center justify-between">
                  <div>
                    <div className="text-xs text-slate-400 line-through">₹{pkg.originalPrice}</div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-extrabold font-exo text-[#29363A]">₹{pkg.discountedPrice}</span>
                      <span className="text-xs font-bold text-[#0A5F6B] bg-[#DFF8F8] px-2 py-0.5 rounded-full">{pkg.discountPercent}</span>
                    </div>
                  </div>
                  <div className="text-right text-[11px] text-[#719497] font-medium">
                    <span className="block text-[#0A5F6B] font-bold">Free Home Pickup</span>
                    <span>No extra charges</span>
                  </div>
                </div>

                {/* Key Tests Included */}
                <div className="space-y-2 pt-1">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-exo">Top Tests Included:</h4>
                  <ul className="space-y-1.5 text-xs text-[#719497] font-roboto">
                    {pkg.testsIncluded.slice(0, 4).map((test, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0A5F6B] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{test}</span>
                      </li>
                    ))}
                  </ul>
                  {pkg.testsIncluded.length > 4 && (
                    <p className="text-[11px] font-bold text-[#0A5F6B] font-exo hover:underline cursor-pointer">
                      + {pkg.testsIncluded.length - 4} More Diagnostic Parameters Included
                    </p>
                  )}
                </div>
              </div>

              {/* Card Action */}
              <div className="p-7 pt-0">
                <button
                  onClick={() => setSelectedPackage(pkg)}
                  className="w-full py-3.5 bg-[#0A5F6B] hover:bg-[#07515C] text-white font-bold text-xs uppercase tracking-wider rounded-2xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 font-exo"
                >
                  <TestTube className="w-4 h-4" />
                  <span>Book Free Home Collection</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Modal */}
      {selectedPackage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedPackage(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 text-lg font-bold w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center"
            >
              ✕
            </button>

            {bookingSuccess ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#DFF8F8] text-[#0A5F6B] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-[#29363A] font-exo">Booking Confirmed!</h3>
                <p className="text-xs text-[#719497] font-roboto max-w-xs mx-auto">
                  Our phlebotomist will contact you shortly to confirm your home sample collection slot for <strong className="text-[#29363A]">{selectedPackage.title}</strong>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleBookPackage} className="space-y-4">
                <div className="border-b border-[#C4DFDF] pb-3">
                  <span className="text-xs font-bold uppercase text-[#0A5F6B] font-exo">Free Home Sample Collection</span>
                  <h3 className="text-lg font-bold text-[#29363A] font-exo leading-snug">{selectedPackage.title}</h3>
                  <div className="text-sm font-bold text-[#0A5F6B] mt-1">Special Price: ₹{selectedPackage.discountedPrice} <span className="text-xs text-slate-400 line-through">₹{selectedPackage.originalPrice}</span></div>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <label className="block font-bold text-[#29363A] mb-1 font-exo">Patient Full Name *</label>
                    <input type="text" required placeholder="Enter patient name" className="w-full p-3 bg-slate-50 border border-[#C4DFDF] rounded-xl outline-none focus:border-[#0A5F6B]" />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-[#29363A] mb-1 font-exo">Mobile Number *</label>
                      <input type="tel" required placeholder="+91 9876543210" className="w-full p-3 bg-slate-50 border border-[#C4DFDF] rounded-xl outline-none focus:border-[#0A5F6B]" />
                    </div>
                    <div>
                      <label className="block font-bold text-[#29363A] mb-1 font-exo">Preferred Date</label>
                      <input type="date" required className="w-full p-3 bg-slate-50 border border-[#C4DFDF] rounded-xl outline-none focus:border-[#0A5F6B]" />
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-[#29363A] mb-1 font-exo">Complete Address for Home Collection *</label>
                    <textarea rows={2} required placeholder="House No, Street, Landmark, City & Pincode" className="w-full p-3 bg-slate-50 border border-[#C4DFDF] rounded-xl outline-none focus:border-[#0A5F6B]" />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#0A5F6B] hover:bg-[#07515C] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md hover:shadow-lg transition-all font-exo"
                >
                  Confirm Slot &amp; Book Free Home Pickup
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
