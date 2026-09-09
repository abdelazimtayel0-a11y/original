import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AccessoriesSection } from './components/AccessoriesSection';
import { SparePartsSection } from './components/SparePartsSection';
import { MaintenanceSection } from './components/MaintenanceSection';
import { HeadphonesSection } from './components/HeadphonesSection';
import { ChargersSection } from './components/ChargersSection';
import { SmartwatchesSection } from './components/SmartwatchesSection';
import { PaymentSection } from './components/PaymentSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MessageSquare, PhoneCall } from 'lucide-react';

export default function App() {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col font-sans selection:bg-amber-500/25 selection:text-amber-200 overflow-x-hidden w-full">
      {/* Top Fixed Navbar */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-grow w-full overflow-x-hidden">
        {/* 1. الرئيسية */}
        <Hero />

        {/* 2. الإكسسوارات */}
        <AccessoriesSection />

        {/* 3. قطع الغيار */}
        <SparePartsSection />

        {/* 4. الصيانة */}
        <MaintenanceSection />

        {/* 5. السماعات */}
        <HeadphonesSection />

        {/* 6. الشواحن */}
        <ChargersSection />

        {/* 7. الساعات الذكية */}
        <SmartwatchesSection />

        {/* 8. معلومات وطرق الدفع */}
        <PaymentSection />

        {/* 9. تواصل معنا */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Button for Quick WhatsApp Contact */}
      <div className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-40 flex flex-col items-center gap-3">
        <a
          href="https://wa.me/201033332012"
          target="_blank"
          rel="noopener noreferrer"
          id="floating-quick-contact-btn"
          aria-label="محادثة واتساب فورية"
          className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl shadow-emerald-950/60 hover:scale-105 active:scale-95 transition-all duration-300 border border-emerald-400/40"
        >
          <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-white transition-transform group-hover:scale-110" />
          
          {/* Tooltip on desktop */}
          <span className="hidden sm:block absolute left-full ml-3 px-3 py-1 rounded-lg bg-black border border-white/15 text-emerald-400 text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-2xl">
            محادثة واتساب مباشرة
          </span>
        </a>
      </div>
    </div>
  );
}
