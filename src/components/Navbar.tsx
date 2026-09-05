import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall, ShieldCheck } from 'lucide-react';
import { LOGO_URL } from '../types';
import { NAV_ITEMS } from '../data/content';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = NAV_ITEMS.map(item => item.id);
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl'
          : 'bg-transparent py-5 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, 'hero')}
            className="flex items-center gap-3.5 group focus:outline-none"
            id="brand-logo-link"
          >
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white/20 p-0.5 overflow-hidden transition-transform duration-300 group-hover:scale-105 group-hover:border-amber-500/60 shadow-lg">
              <img
                src={LOGO_URL}
                alt="Original"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-full bg-black"
                id="header-brand-logo-img"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-black text-xl sm:text-2xl tracking-widest text-white flex items-center gap-1.5 uppercase">
                Original
                <ShieldCheck className="w-4 h-4 text-amber-500" />
              </span>
              <span className="text-[11px] text-zinc-400 font-medium tracking-wide">
                الأصلي دايمًا أفضل
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1 lg:gap-2">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  id={`nav-link-${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors relative ${
                    isActive
                      ? 'text-amber-500 font-bold bg-white/[0.04]'
                      : 'text-zinc-300 hover:text-amber-500 hover:bg-white/[0.02]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-amber-500 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Contact Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              id="header-cta-contact-btn"
              className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold bg-white text-black hover:bg-amber-500 hover:text-white transition-all shadow-lg shadow-white/5 active:scale-[0.98]"
            >
              <PhoneCall className="w-4 h-4" />
              <span>تواصل معنا</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-neutral-200 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
              aria-label="القائمة الرئيسية"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-amber-500" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="xl:hidden bg-black/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 shadow-2xl transition-all animate-fadeIn"
        >
          <div className="flex flex-col gap-2">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  id={`mobile-nav-link-${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className={`px-4 py-3 rounded-xl text-base font-medium flex items-center justify-between transition-colors ${
                    isActive
                      ? 'bg-white/5 text-amber-500 border border-amber-500/20'
                      : 'text-zinc-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <div className="w-2 h-2 rounded-full bg-amber-500" />}
                </a>
              );
            })}
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              id="mobile-nav-cta-contact-btn"
              className="mt-4 flex items-center justify-center gap-2 py-3 rounded-xl text-base font-bold bg-white text-black hover:bg-amber-500 hover:text-white transition-all shadow-lg"
            >
              <PhoneCall className="w-5 h-5" />
              <span>تواصل معنا الآن</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
