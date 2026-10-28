import React from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ContactSection } from '@/components/ContactSection';
import { LocationAndHours } from '@/components/LocationAndHours';
import { Footer } from '@/components/Footer';

export default function Page() {
  return (
    <div className="relative min-h-screen bg-[#0b111e] text-slate-100 flex flex-col overflow-x-hidden selection:bg-[#6DA9D6]/30 selection:text-white">
      {/* Global subtle radial gradient backdrop */}
      <div
        className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#18283B]/40 via-[#0b111e] to-[#080d17]"
        aria-hidden="true"
      />

      <Header />

      <main className="relative z-10 flex-1">
        <Hero />
        <ContactSection />
        <LocationAndHours />
      </main>

      <Footer />
    </div>
  );
}
