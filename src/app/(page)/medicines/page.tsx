'use client';

import React, { useState } from 'react';
import PageBanner from '@/components/ui/page-banner';
import { 
  Pill, 
  Search, 
  Upload, 
  ShieldCheck, 
  Truck, 
  Clock, 
  CheckCircle2, 
  FileText, 
  Phone, 
  Sparkles,
  ShoppingBag,
  Percent,
  Plus,
  ArrowRight,
  Filter,
  Check,
  Stethoscope,
  Heart
} from 'lucide-react';

export default function MedicinesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  const [prescriptionSuccess, setPrescriptionSuccess] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const categories = [
    'All',
    'Fever & Pain Relief',
    'Immunity & Wellness',
    'Acidity & Stomach',
    'Cough & Cold',
    'Bone & Joints',
    'Health Monitors'
  ];

  // Featured medicines list
  const medicines = [
    {
      id: 1,
      name: 'Paracetamol 650mg Tablets',
      brand: 'Medlix Pharma',
      category: 'Fever & Pain Relief',
      packSize: '15 Tablets in 1 Strip',
      mrp: 32,
      price: 24,
      discount: '25% OFF',
      savings: '₹8',
      prescriptionRequired: false
    },
    {
      id: 2,
      name: 'Multivitamin & Zinc Mineral Capsules',
      brand: 'NutriCare Health',
      category: 'Immunity & Wellness',
      packSize: '30 Capsules Bottle',
      mrp: 450,
      price: 299,
      discount: '33% OFF',
      savings: '₹151',
      prescriptionRequired: false
    },
    {
      id: 3,
      name: 'Pantoprazole 40mg Gastro Tablets',
      brand: 'GastroCare',
      category: 'Acidity & Stomach',
      packSize: '10 Tablets Strip',
      mrp: 140,
      price: 98,
      discount: '30% OFF',
      savings: '₹42',
      prescriptionRequired: true
    },
    {
      id: 4,
      name: 'Cough & Cold Sore Throat Relief Syrup',
      brand: 'Medlix Care',
      category: 'Cough & Cold',
      packSize: '100 ml Bottle',
      mrp: 120,
      price: 89,
      discount: '25% OFF',
      savings: '₹31',
      prescriptionRequired: false
    },
    {
      id: 5,
      name: 'Calcium & Vitamin D3 Bone Supplements',
      brand: 'OrthoVital',
      category: 'Bone & Joints',
      packSize: '60 Tablets Pack',
      mrp: 590,
      price: 380,
      discount: '35% OFF',
      savings: '₹210',
      prescriptionRequired: false
    },
    {
      id: 6,
      name: 'Digital Blood Pressure Monitor',
      brand: 'Medlix Medical Devices',
      category: 'Health Monitors',
      packSize: '1 Unit Device',
      mrp: 2499,
      price: 1499,
      discount: '40% OFF',
      savings: '₹1,000',
      prescriptionRequired: false
    }
  ];

  const filteredMedicines = medicines.filter(m => {
    const matchesSearch = 
      m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.brand.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = selectedCategory === 'All' || m.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const handlePrescriptionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPrescriptionSuccess(true);
    setTimeout(() => {
      setPrescriptionSuccess(false);
      setUploadModalOpen(false);
    }, 3500);
  };

  return (
    <div className="w-full flex flex-col bg-[#FDFEFE] font-['Outfit',sans-serif]">
      {/* 1. Page Banner */}
      <PageBanner
        title="Find & Order Genuine Medicines Online"
        subtitle="100% Verified Pharmacy. Upload your doctor prescription or search medicines for express 2-hour doorstep delivery across Haryana & NCR."
        badge="💊 2-Hour Express Delivery"
        breadcrumbs={[{ label: 'Find Medicine' }]}
        imageSrc="/images/page-banner.jpg"
      />

      {/* 2. Prescription Order Callout Banner */}
      <section className="py-8 bg-[#FDFEFE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-r from-[#07515C] via-[#0A5F6B] to-[#07515C] rounded-3xl p-6 sm:p-9 shadow-xl border border-[#C4DFDF]/40 overflow-hidden group">
            {/* Background ambient shine */}
            <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-[#C9F5F3]/15 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center lg:text-left">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C9F5F3] bg-white/10 px-3.5 py-1 rounded-full border border-white/20 font-exo">
                  <Sparkles className="w-3.5 h-3.5 text-[#C9F5F3]" />
                  <span>Quick Prescription Ordering</span>
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-exo tracking-tight">
                  Have a Doctor Prescription? Upload Here!
                </h3>
                <p className="text-xs sm:text-sm text-[#DFF8F8] font-roboto max-w-2xl leading-relaxed">
                  Our licensed Medlix pharmacist will review your prescription, verify medicines, and dispatch them to your doorstep within 2 hours.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3.5 shrink-0">
                <button
                  onClick={() => setUploadModalOpen(true)}
                  className="px-6 py-3.5 bg-white hover:bg-[#DFF8F8] text-[#0A5F6B] font-bold text-xs sm:text-sm rounded-full shadow-lg transition-all flex items-center gap-2 font-exo uppercase tracking-wider hover:scale-105 active:scale-100 cursor-pointer"
                >
                  <Upload className="w-4 h-4 text-[#0A5F6B]" />
                  <span>Upload Prescription</span>
                </button>

                <a
                  href="tel:+919220143473"
                  className="px-5 py-3.5 bg-[#07515C]/80 hover:bg-[#07515C] text-white font-bold text-xs sm:text-sm rounded-full border border-white/30 transition-all flex items-center gap-2 font-exo"
                >
                  <Phone className="w-4 h-4 text-white" />
                  <span>Call Pharmacy Helpline</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Search & Interactive Filter Hub */}
      <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Search Box Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#C4DFDF] shadow-md mb-10 relative overflow-hidden">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#DFF8F8] text-[#0A5F6B] flex items-center justify-center font-bold">
                <Search className="w-4 h-4 text-[#0A5F6B]" />
              </div>
              <h3 className="font-bold text-[#29363A] text-lg font-exo">Search Medicine Catalog</h3>
            </div>

            {cartCount > 0 && (
              <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-[#0A5F6B] text-white font-exo flex items-center gap-1.5 shadow-sm animate-pulse">
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>{cartCount} Items in Order</span>
              </span>
            )}
          </div>

          <div className="relative flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-[#0A5F6B] absolute left-4.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search medicine name, salt formula, or health category..."
                className="w-full pl-14 pr-6 py-4 bg-[#FDFEFE] border border-[#C4DFDF] rounded-2xl text-base shadow-xs focus:outline-none focus:border-[#0A5F6B] focus:ring-2 focus:ring-[#C9F5F3] font-medium text-[#29363A]"
              />
            </div>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="px-4 py-4 text-xs font-bold text-[#719497] hover:text-[#29363A] bg-[#DFF8F8] rounded-2xl font-exo"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="mt-5 pt-4 border-t border-[#C4DFDF]/60 flex items-center gap-2 overflow-x-auto invisible-scrollbar pb-1">
            <span className="text-xs font-bold text-[#719497] uppercase tracking-wider font-exo shrink-0 mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5 text-[#0A5F6B]" />
              Category:
            </span>
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold font-exo transition-all shrink-0 border ${
                  selectedCategory === cat
                    ? 'bg-[#0A5F6B] text-white border-[#0A5F6B] shadow-xs'
                    : 'bg-[#FDFEFE] text-[#29363A] border-[#C4DFDF] hover:bg-[#DFF8F8]/60 hover:text-[#0A5F6B]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 3 Guarantee Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 bg-white rounded-3xl border border-[#C4DFDF] shadow-xs hover:shadow-md transition-all duration-300 flex items-center gap-4 group relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#0A5F6B] to-[#C9F5F3] opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-12 h-12 rounded-2xl bg-[#DFF8F8] text-[#0A5F6B] group-hover:bg-[#0A5F6B] group-hover:text-white transition-colors flex items-center justify-center shrink-0 border border-[#C4DFDF]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold font-exo text-[#29363A] text-sm group-hover:text-[#0A5F6B] transition-colors">100% Genuine Medicines</h4>
              <p className="text-xs text-[#719497] font-roboto mt-0.5">Sourced directly from certified pharmaceutical manufacturers</p>
            </div>
          </div>

          <div className="p-6 bg-white rounded-3xl border border-[#C4DFDF] shadow-xs hover:shadow-md transition-all duration-300 flex items-center gap-4 group relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#0A5F6B] to-[#C9F5F3] opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-12 h-12 rounded-2xl bg-[#DFF8F8] text-[#0A5F6B] group-hover:bg-[#0A5F6B] group-hover:text-white transition-colors flex items-center justify-center shrink-0 border border-[#C4DFDF]">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold font-exo text-[#29363A] text-sm group-hover:text-[#0A5F6B] transition-colors">2-Hour Express Delivery</h4>
              <p className="text-xs text-[#719497] font-roboto mt-0.5">Fastest doorstep medicine delivery across NCR</p>
            </div>
          </div>

          <div className="p-6 bg-white rounded-3xl border border-[#C4DFDF] shadow-xs hover:shadow-md transition-all duration-300 flex items-center gap-4 group relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#0A5F6B] to-[#C9F5F3] opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-12 h-12 rounded-2xl bg-[#DFF8F8] text-[#0A5F6B] group-hover:bg-[#0A5F6B] group-hover:text-white transition-colors flex items-center justify-center shrink-0 border border-[#C4DFDF]">
              <Percent className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold font-exo text-[#29363A] text-sm group-hover:text-[#0A5F6B] transition-colors">Flat 20-35% Savings</h4>
              <p className="text-xs text-[#719497] font-roboto mt-0.5">Maximum savings guaranteed on essential medications</p>
            </div>
          </div>
        </div>

        {/* Medicines Catalog Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-[#C4DFDF]">
            <div>
              <h3 className="text-2xl font-bold font-exo text-[#29363A]">Essential Medicines &amp; Healthcare Products</h3>
              <p className="text-xs text-[#719497] font-roboto mt-0.5">Showing medicines for {selectedCategory}</p>
            </div>
            <span className="text-xs font-bold text-[#0A5F6B] font-exo bg-[#DFF8F8] px-3.5 py-1.5 rounded-full border border-[#C4DFDF]">
              {filteredMedicines.length} Products Found
            </span>
          </div>

          {filteredMedicines.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center border border-[#C4DFDF] space-y-3">
              <Pill className="w-12 h-12 text-[#719497] mx-auto opacity-50" />
              <h4 className="text-lg font-bold font-exo text-[#29363A]">No Medicines Found</h4>
              <p className="text-xs text-[#719497] font-roboto max-w-sm mx-auto">
                No matching medicine found for "{searchQuery}". You can upload your prescription or call our pharmacy team.
              </p>
              <button
                onClick={() => setUploadModalOpen(true)}
                className="px-5 py-2.5 bg-[#0A5F6B] text-white font-bold text-xs uppercase tracking-wider rounded-full font-exo mt-2 inline-flex items-center gap-2"
              >
                <Upload className="w-3.5 h-3.5" />
                <span>Upload Prescription</span>
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMedicines.map((med) => (
                <div
                  key={med.id}
                  className="bg-white rounded-3xl p-6 border border-[#C4DFDF] shadow-xs hover:shadow-xl hover:border-[#0A5F6B] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 relative overflow-hidden"
                >
                  {/* Top hover accent */}
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#0A5F6B] via-[#C9F5F3] to-[#0A5F6B] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div>
                    {/* Category Pill & Discount Tag */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10.5px] font-bold text-[#719497] uppercase tracking-wider font-exo bg-[#FDFEFE] px-2.5 py-0.5 rounded-full border border-[#C4DFDF]">
                        {med.category}
                      </span>
                      <span className="text-[10px] font-extrabold text-[#0A5F6B] bg-[#DFF8F8] px-2.5 py-0.5 rounded-full border border-[#C4DFDF] font-exo">
                        {med.discount}
                      </span>
                    </div>

                    {/* Product Icon Box */}
                    <div className="w-full h-24 rounded-2xl bg-gradient-to-b from-[#FDFEFE] to-[#DFF8F8]/60 border border-[#C4DFDF]/60 flex items-center justify-center mb-4 group-hover:bg-[#DFF8F8] transition-colors">
                      <Pill className="w-10 h-10 text-[#0A5F6B] group-hover:scale-110 transition-transform duration-300" />
                    </div>

                    {/* Product Title */}
                    <h4 className="text-base font-bold font-exo text-[#29363A] group-hover:text-[#0A5F6B] transition-colors leading-snug">
                      {med.name}
                    </h4>
                    
                    <p className="text-xs text-[#719497] font-roboto mt-1">
                      {med.brand} • {med.packSize}
                    </p>

                    {/* Price & Savings */}
                    <div className="mt-4 pt-3 border-t border-[#C4DFDF]/60 flex items-center justify-between">
                      <div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-xl font-bold font-exo text-[#29363A]">₹{med.price}</span>
                          <span className="text-xs text-slate-400 line-through font-roboto">MRP ₹{med.mrp}</span>
                        </div>
                        <span className="text-[10px] font-bold text-[#0A5F6B] font-exo">
                          Save {med.savings}
                        </span>
                      </div>

                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200 font-exo flex items-center gap-1">
                        <Check className="w-3 h-3 text-emerald-600" />
                        In Stock
                      </span>
                    </div>
                  </div>

                  {/* Add to Order Button */}
                  <div className="mt-5">
                    <button
                      onClick={() => setCartCount(c => c + 1)}
                      className="w-full py-3 bg-[#DFF8F8] hover:bg-[#0A5F6B] text-[#0A5F6B] hover:text-white font-bold text-xs uppercase tracking-wider rounded-2xl transition-all duration-200 font-exo flex items-center justify-center gap-2 border border-[#C4DFDF] hover:border-[#0A5F6B] cursor-pointer shadow-2xs"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Add to Order</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Upload Prescription Modal */}
      {uploadModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200 border border-[#C4DFDF]">
            <button
              onClick={() => setUploadModalOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 text-base font-bold w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center cursor-pointer"
            >
              ✕
            </button>

            {prescriptionSuccess ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#DFF8F8] text-[#0A5F6B] flex items-center justify-center mx-auto border border-[#C4DFDF]">
                  <CheckCircle2 className="w-10 h-10 text-[#0A5F6B]" />
                </div>
                <h3 className="text-2xl font-bold text-[#29363A] font-exo">Prescription Uploaded!</h3>
                <p className="text-xs text-[#719497] font-roboto max-w-xs mx-auto leading-relaxed">
                  Our licensed Medlix pharmacist is verifying your prescription and will call you in 5 minutes to confirm delivery.
                </p>
              </div>
            ) : (
              <form onSubmit={handlePrescriptionSubmit} className="space-y-4">
                <div className="border-b border-[#C4DFDF] pb-3">
                  <span className="text-xs font-bold uppercase text-[#0A5F6B] font-exo">Express Pharmacy Order</span>
                  <h3 className="text-xl font-bold text-[#29363A] font-exo leading-snug">Upload Doctor Prescription</h3>
                </div>

                <div className="space-y-3.5 text-xs">
                  <div>
                    <label className="block font-bold text-[#29363A] mb-1 font-exo">Full Name *</label>
                    <input type="text" required placeholder="Enter your full name" className="w-full p-3 bg-[#FDFEFE] border border-[#C4DFDF] rounded-xl outline-none focus:border-[#0A5F6B] focus:ring-2 focus:ring-[#C9F5F3]" />
                  </div>

                  <div>
                    <label className="block font-bold text-[#29363A] mb-1 font-exo">Mobile Number for Confirmation *</label>
                    <input type="tel" required placeholder="+91 9876543210" className="w-full p-3 bg-[#FDFEFE] border border-[#C4DFDF] rounded-xl outline-none focus:border-[#0A5F6B] focus:ring-2 focus:ring-[#C9F5F3]" />
                  </div>

                  <div>
                    <label className="block font-bold text-[#29363A] mb-1 font-exo">Upload Photo / PDF of Prescription *</label>
                    <div className="border-2 border-dashed border-[#C4DFDF] rounded-2xl p-6 text-center bg-[#DFF8F8]/40 hover:bg-[#DFF8F8] cursor-pointer transition-colors">
                      <Upload className="w-8 h-8 text-[#0A5F6B] mx-auto mb-2" />
                      <p className="font-bold text-[#29363A] text-xs font-exo">Click or drag prescription photo here</p>
                      <p className="text-[10px] text-[#719497] mt-0.5 font-roboto">Supports JPG, PNG, PDF up to 10MB</p>
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-[#29363A] mb-1 font-exo">Delivery Address *</label>
                    <textarea rows={2} required placeholder="Enter delivery location & pincode" className="w-full p-3 bg-[#FDFEFE] border border-[#C4DFDF] rounded-xl outline-none focus:border-[#0A5F6B] focus:ring-2 focus:ring-[#C9F5F3]" />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#0A5F6B] hover:bg-[#07515C] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md hover:shadow-lg transition-all font-exo cursor-pointer mt-2"
                >
                  Submit Prescription &amp; Order
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
