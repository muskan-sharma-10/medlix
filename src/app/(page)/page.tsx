'use client';

import React, { useState } from 'react';
import HeroSlider from '@/components/home/hero-slider';
import QuickServicesBar from '@/components/home/quick-services-bar';
import SpecialtiesCarousel from '@/components/home/specialties-carousel';
import AboutSection from '@/components/home/about-section';
import WhyChooseSection from '@/components/home/why-choose-section';
import StatisticsSection from '@/components/home/statistics-section';
import LocationsSection from '@/components/home/locations-section';
import InsuranceSection from '@/components/home/insurance-section';
import CircleOfCareSection from '@/components/home/circle-of-care-section';
import TransplantSection from '@/components/home/transplant-section';
import TestimonialsSection from '@/components/home/testimonials-section';
import AppointmentModal from '@/components/home/appointment-modal';

export default function HomePage() {
  const [appointmentOpen, setAppointmentOpen] = useState(false);

  const openModal = () => setAppointmentOpen(true);
  const closeModal = () => setAppointmentOpen(false);

  return (
    <div className="w-full flex flex-col">
      {/* 1. Compelling Hero Slider with Verified Trust Metrics */}
      <HeroSlider onOpenAppointment={openModal} />

      {/* 2. Quick Action Patient Services: Find Doctor, Find Hospital, Find Medicine, Book Lab Test */}
      <QuickServicesBar />

      {/* 3. 8 Popular Clinical Specialties with 'View All Specialties' Link */}
      <SpecialtiesCarousel onOpenAppointment={openModal} />

      {/* 4. About Medlix Hospitals & Clinical Care Pillars */}
      <AboutSection onOpenAppointment={openModal} />

      {/* 5. Why Choose Medlix Hospital (3x2 Pillar Grid) */}
      <WhyChooseSection />

      {/* 6. Verified Statistics Counters with Ambient Medical Parallax */}
      <StatisticsSection />

      {/* 7. Focused Hospital Locations (4 Flagship NCR Units + View All 8 Link) */}
      <LocationsSection onOpenAppointment={openModal} />

      {/* 8. 100% Cashless Insurance & TPA Partners */}
      <InsuranceSection />

      {/* 9. The CIRCLE of Care: Guiding Principles */}
      <CircleOfCareSection />

      {/* 10. Advanced Organ Transplant Institutes */}
      <TransplantSection onOpenAppointment={openModal} />

      {/* 11. Patient Healing Experiences & Reviews */}
      <TestimonialsSection />

      {/* Global Medical Appointment Modal */}
      <AppointmentModal isOpen={appointmentOpen} onClose={closeModal} />
    </div>
  );
}
