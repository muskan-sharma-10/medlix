'use client';

import React, { useState } from 'react';
import HeroSlider from '@/components/home/hero-slider';
import QuickServicesBar from '@/components/home/quick-services-bar';
import SpecialtiesCarousel from '@/components/home/specialties-carousel';
import AboutSection from '@/components/home/about-section';
import WhyChooseSection from '@/components/home/why-choose-section';
import CircleOfCareSection from '@/components/home/circle-of-care-section';
import StatisticsSection from '@/components/home/statistics-section';
import InsuranceSection from '@/components/home/insurance-section';
import LocationsSection from '@/components/home/locations-section';
import ApproachSection from '@/components/home/approach-section';
import TransplantSection from '@/components/home/transplant-section';
import TestimonialsSection from '@/components/home/testimonials-section';
import AppointmentModal from '@/components/home/appointment-modal';

export default function HomePage() {
  const [appointmentOpen, setAppointmentOpen] = useState(false);

  const openModal = () => setAppointmentOpen(true);
  const closeModal = () => setAppointmentOpen(false);

  return (
    <div className="w-full flex flex-col">
      {/* 1. Full-Width Hero Slider */}
      <HeroSlider onOpenAppointment={openModal} />

      {/* 1b. Interactive Quick Health Services Bar (Find Doctor, Find Medicine, Book Lab Test, 24/7 Ambulance) */}
      <QuickServicesBar />

      {/* 2. Medical Specialities Carousel */}
      <SpecialtiesCarousel onOpenAppointment={openModal} />

      {/* 3. About Us Section with Doctor Image & 3 Support Pillars */}
      <AboutSection onOpenAppointment={openModal} />

      {/* 4. Why Choose Medlix Hospital (3x2 Grid) */}
      <WhyChooseSection />

      {/* 5. The CIRCLE of Care: Our Core Values */}
      <CircleOfCareSection />

      {/* 6. Key Statistics Counters (5+ Hospitals, 289+ Beds, 14+ Specialties, 28+ Doctors) */}
      <StatisticsSection />

      {/* 7. Insurance Tie-Ups Carousel */}
      <InsuranceSection />

      {/* 8. Our Locations (8 Hospital Branches across Haryana & NCR) */}
      <LocationsSection onOpenAppointment={openModal} />

      {/* 9. The Medlix Approach */}
      <ApproachSection />

      {/* 10. Transplant Services */}
      <TransplantSection onOpenAppointment={openModal} />

      {/* 11. What Our Patient Says (Testimonials) */}
      <TestimonialsSection />

      {/* Global Appointment Modal */}
      <AppointmentModal isOpen={appointmentOpen} onClose={closeModal} />
    </div>
  );
}