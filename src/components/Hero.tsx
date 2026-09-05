import React from 'react';
import { ShieldCheck, Sparkles, Wrench, Headphones, BatteryCharging, Watch, ChevronDown, CheckCircle2 } from 'lucide-react';
import { LOGO_URL } from '../types';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-28 pb-14 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-br from-black via-zinc-900/60 to-black border-b border-white/10">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-amber-500/15 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-10 left-10 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-amber-600/10 rounded-full blur-[110px] sm:blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Main Content (Right side in RTL) */}
          <div className="lg:col-span-7 text-center lg:text-right space-y-5 sm:space-y-6">
            
            {/* Authenticity Badge */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 border border-amber-500/50 rounded-full text-[11px] sm:text-xs text-amber-500 font-bold uppercase tracking-wider sm:tracking-widest bg-amber-500/5">
              <Sparkles className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
              <span>الأصلي دايمًا أفضل • ORIGINAL PRESTIGE</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white leading-tight tracking-tight">
              <span>ORIGINAL</span>
              <br />
              <span className="text-amber-500">جودة تتخطى التوقعات</span>
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base lg:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              وجهتكم الاحترافية الأولى المتخصصة في تقديم{' '}
              <strong className="text-white font-semibold">الإكسسوارات الأصلية</strong>، و
              <strong className="text-white font-semibold">قطع الغيار المعتمدة</strong>، و
              <strong className="text-white font-semibold">صيانة أجهزة iPhone و Android</strong> بأعلى معايير الدقة والاحترافية، مع توفير{' '}
              <strong className="text-white font-semibold">أجود السماعات والشواحن</strong>، و
              <strong className="text-white font-semibold">الساعات الذكية الأصلية</strong> فائقة الاعتمادية.
            </p>

            {/* Quick Highlights Pills */}
            <div className="flex flex-wrap gap-2 sm:gap-2.5 justify-center lg:justify-start pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900 border border-white/10 text-[11px] sm:text-xs text-zinc-300 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                قطع غيار أصلية 100%
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900 border border-white/10 text-[11px] sm:text-xs text-zinc-300 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                صيانة معتمدة iPhone & Android
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900 border border-white/10 text-[11px] sm:text-xs text-zinc-300 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                إكسسوارات وساعات راقية
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-3 sm:pt-4">
              <button
                id="hero-explore-services-btn"
                onClick={() => scrollTo('accessories')}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl text-sm sm:text-base font-bold bg-amber-500 text-white hover:bg-amber-600 transition-all shadow-lg shadow-amber-500/20 active:scale-[0.98] cursor-pointer text-center"
              >
                استكشف خدماتنا
              </button>
              
              <button
                id="hero-contact-us-btn"
                onClick={() => scrollTo('contact')}
                className="w-full sm:w-auto border border-white/20 px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl text-sm sm:text-base font-bold hover:bg-white/10 text-white transition-all cursor-pointer text-center"
              >
                تواصل معنا
              </button>
            </div>

          </div>

          {/* Luxury Brand Visual (Left side in RTL) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group w-full max-w-sm sm:max-w-md flex justify-center">
              
              {/* Outer Amber Blur Glow */}
              <div className="absolute inset-0 bg-amber-500 blur-[60px] sm:blur-[80px] opacity-20 group-hover:opacity-30 transition-opacity pointer-events-none" />
              
              {/* Main Card */}
              <div className="relative w-full rounded-2xl sm:rounded-3xl bg-zinc-900 border border-white/10 p-4 sm:p-6 shadow-2xl backdrop-blur-xl transition-all duration-500">
                
                {/* Official Logo Showcase */}
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-black p-3 sm:p-4 border border-white/10 shadow-inner group">
                  <div className="aspect-square w-full max-w-[220px] sm:max-w-[280px] mx-auto rounded-xl overflow-hidden border border-white/10 flex items-center justify-center bg-black">
                    <img
                      src={LOGO_URL}
                      alt="Original Official Logo"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 rotate-2 hover:rotate-0"
                      id="hero-official-logo-img"
                    />
                  </div>
                  
                  {/* Badge on Logo */}
                  <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-black/90 border border-amber-500/50 text-amber-500 text-[10px] sm:text-xs font-bold tracking-wider sm:tracking-widest backdrop-blur-md shadow-lg flex items-center gap-1.5 uppercase whitespace-nowrap">
                    <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500" />
                    <span>ORIGINAL LUXURY</span>
                  </div>
                </div>

                {/* Services Bar */}
                <div className="mt-4 sm:mt-6 grid grid-cols-4 gap-1.5 sm:gap-2 pt-3 sm:pt-4 border-t border-white/10 text-center">
                  <div className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-black/50 border border-white/5 hover:border-amber-500/40 transition-colors">
                    <Wrench className="w-4 h-4 sm:w-5 sm:h-5 mx-auto text-amber-500 mb-1" />
                    <span className="text-[10px] sm:text-[11px] text-zinc-300 font-medium block">صيانة</span>
                  </div>
                  <div className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-black/50 border border-white/5 hover:border-amber-500/40 transition-colors">
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 mx-auto text-amber-500 mb-1" />
                    <span className="text-[10px] sm:text-[11px] text-zinc-300 font-medium block">قطع أصلية</span>
                  </div>
                  <div className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-black/50 border border-white/5 hover:border-amber-500/40 transition-colors">
                    <Headphones className="w-4 h-4 sm:w-5 sm:h-5 mx-auto text-amber-500 mb-1" />
                    <span className="text-[10px] sm:text-[11px] text-zinc-300 font-medium block">سماعات</span>
                  </div>
                  <div className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-black/50 border border-white/5 hover:border-amber-500/40 transition-colors">
                    <Watch className="w-4 h-4 sm:w-5 sm:h-5 mx-auto text-amber-500 mb-1" />
                    <span className="text-[10px] sm:text-[11px] text-zinc-300 font-medium block">ساعات</span>
                  </div>
                </div>

                {/* Trust Seal */}
                <div className="mt-3 sm:mt-4 flex items-center justify-between px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl bg-black/60 border border-white/10 text-[11px] sm:text-xs">
                  <span className="text-zinc-400 font-medium">الضمان والاعتمادية</span>
                  <span className="text-amber-500 font-bold">100% منتجات وقطع أصلية</span>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Scroll indicator */}
        <div className="mt-16 text-center">
          <button
            onClick={() => scrollTo('accessories')}
            className="inline-flex flex-col items-center text-xs text-zinc-400 hover:text-amber-500 transition-colors focus:outline-none cursor-pointer"
            aria-label="التمرير للأسفل"
          >
            <span>اكتشف أقسام الموقع</span>
            <ChevronDown className="w-5 h-5 mt-1 animate-bounce text-amber-500" />
          </button>
        </div>

      </div>
    </section>
  );
};
