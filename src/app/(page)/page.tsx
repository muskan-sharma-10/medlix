'use client';

import React, { useState } from 'react';
import HeroSlider from '@/components/home/hero-slider';
import QuickServicesBar from '@/components/home/quick-services-bar';
import SpecialtiesCarousel from '@/components/home/specialties-carousel';
import AboutSection from '@/components/home/about-section';
import WhyChooseSection from '@/components/home/why-choose-section';
import StatisticsSection from '@/components/home/statistics-section';
import CircleOfCareSection from '@/components/home/circle-of-care-section';
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
      {/* 2. Hero Section */}
      <HeroSlider onOpenAppointment={openModal} />

      {/* 3. How Can We Help You Today? */}
      <QuickServicesBar />

      {/* 4. Clinical Institutes */}
      <SpecialtiesCarousel onOpenAppointment={openModal} />

      {/* 5. About Medlix */}
      <AboutSection onOpenAppointment={openModal} />

      {/* 6. Why Choose Medlix */}
      <WhyChooseSection />

      {/* Verified Statistics Counters */}
      <StatisticsSection />

      {/* 7. CIRCLE of Care */}
      <CircleOfCareSection />

      {/* 8. Insurance & TPA Partners */}
      <InsuranceSection />

      {/* 9. Hospital Locations */}
      <LocationsSection onOpenAppointment={openModal} />

      {/* 10. Medlix Approach */}
      <ApproachSection />

      {/* 11. Transplant Services */}
      <TransplantSection onOpenAppointment={openModal} />

      {/* 12. Patient Stories / Testimonials */}
      <TestimonialsSection />

      {/* Global Medical Appointment Modal */}
      <AppointmentModal isOpen={appointmentOpen} onClose={closeModal} />
    </div>
  );
}
