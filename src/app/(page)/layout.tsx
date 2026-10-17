'use client';

import React, { useState } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import AppointmentModal from '@/components/home/appointment-modal';
import FloatingSidebar from '@/components/ui/floating-sidebar';
import BackToTop from '@/components/ui/back-to-top';

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-white relative">
      <Header onOpenAppointment={() => setIsAppointmentOpen(true)} />
      <main className="flex-1">{children}</main>
      <Footer onOpenAppointment={() => setIsAppointmentOpen(true)} />
      
      {/* Medlix Left-Docked Quick Action Floating Sidebar */}
      <FloatingSidebar onOpenAppointment={() => setIsAppointmentOpen(true)} />

      {/* Floating Back To Top Button */}
      <BackToTop />

      {/* Global Appointment Modal */}
      <AppointmentModal 
        isOpen={isAppointmentOpen} 
        onClose={() => setIsAppointmentOpen(false)} 
      />
    </div>
  );
}
