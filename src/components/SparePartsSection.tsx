import React, { useState } from 'react';
import { Cpu, Check, ShieldCheck, Sparkles, CheckCircle2, MessageSquare, Maximize2, X, BadgeCheck } from 'lucide-react';
import { SPARE_PARTS_HIGHLIGHTS, ORIGINAL_SCREENS_SHOWCASE } from '../data/content';
import { SparePartScreen } from '../types';

export const SparePartsSection: React.FC = () => {
  const [selectedScreen, setSelectedScreen] = useState<SparePartScreen | null>(null);

  return (
    <section id="spare-parts" className="py-14 sm:py-20 md:py-28 relative bg-black border-y border-white/10 overflow-hidden">
      {/* Subtle ambient background fantasy glows */}
      <div className="absolute top-1/4 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-amber-500/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-80 sm:w-[450px] h-80 sm:h-[450px] bg-amber-600/10 rounded-full blur-[120px] sm:blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 border border-amber-500/50 rounded-full text-[11px] sm:text-xs text-amber-500 font-bold uppercase tracking-wider sm:tracking-widest bg-amber-500/5">
            <Cpu className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
            <span>قطع الغيار الأصلية المعتمدة • CERTIFIED SPARE PARTS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-black text-white">
            قطع غيار وشاشات أصلية توكيل
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base md:text-lg leading-relaxed">
            لأن هاتفك يستحق الأفضل، نلتزم في <strong className="text-white">ORIGINAL</strong> بتوفير شاشات وقطع غيار التوكيل الأصلية 100%، مع عناية هندسية فائقة تضمن عودة جهازك لكامل كفاءته وألوانه الطبيعية.
          </p>
        </div>

        {/* Dual Platforms Supported Display (iPhone & Android) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 mb-12 sm:mb-16">
          
          {/* iPhone Original Parts */}
          <div className="bg-zinc-900/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-8 border border-white/10 hover:border-amber-500/40 transition-all duration-300 relative overflow-hidden group shadow-xl">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-black flex items-center justify-center text-amber-500 border border-white/10 group-hover:scale-105 transition-transform flex-shrink-0 shadow-inner">
                  <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-2xl font-heading font-bold text-white">قطع غيار أجهزة iPhone</h3>
                  <p className="text-xs text-amber-500 font-semibold">معايير أصلية 100%</p>
                </div>
              </div>
              <span className="px-2.5 sm:px-3.5 py-1 rounded-full text-[11px] sm:text-xs font-bold border border-amber-500/40 text-amber-500 bg-black">
                ORIGINAL
              </span>
            </div>

            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
              توفير القطع الأصلية الخاصة بكافة هواتف iPhone مع الالتزام التام بالتوافق الكامل مع النظام والشاشة وحساسية اللمس والأداء الأمني.
            </p>

            <ul className="space-y-2.5 sm:space-y-3 pt-4 border-t border-white/10 text-xs sm:text-sm text-zinc-300">
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>شاشات أصلية تضمن دقة الألوان ومعدل التحديث الأصلي</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>بطاريات أصلية متوافقة مع مؤشرات صحة البطارية واستقرار الشحن</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>دقة التركيب والمحافظة على العزل الداخلي للجهاز</span>
              </li>
            </ul>
          </div>

          {/* Android Original Parts */}
          <div className="bg-zinc-900/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-8 border border-white/10 hover:border-amber-500/40 transition-all duration-300 relative overflow-hidden group shadow-xl">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-black flex items-center justify-center text-amber-500 border border-white/10 group-hover:scale-105 transition-transform flex-shrink-0 shadow-inner">
                  <Cpu className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-2xl font-heading font-bold text-white">قطع غيار أجهزة Android</h3>
                  <p className="text-xs text-amber-500 font-semibold">جودة عالية واعتمادية</p>
                </div>
              </div>
              <span className="px-2.5 sm:px-3.5 py-1 rounded-full text-[11px] sm:text-xs font-bold border border-amber-500/40 text-amber-500 bg-black">
                ORIGINAL
              </span>
            </div>

            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
              قطع غيار أصلية ومعتمدة لمختلف أجهزة Android مع فحص متقدم وتطبيق بروتوكولات التركيب السليمة لضمان استمرارية الأداء العالي.
            </p>

            <ul className="space-y-2.5 sm:space-y-3 pt-4 border-t border-white/10 text-xs sm:text-sm text-zinc-300">
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>قطع غيار أصلية تضمن سرعة الاستجابة واستقرار اللوحة الأم</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>مكونات طاقة وبطاريات آمنة ومعتمدة بأعلى سعاتها</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>فحص كفاءة وأداء شامل بعد التركيب لضمان سلاسة الهاتف</span>
              </li>
            </ul>
          </div>

        </div>

        {/* 8 FANTASY ORIGINAL AGENCY SCREENS CARDS */}
        <div className="mb-14 sm:mb-20">
          
          {/* Subheader */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10 pb-5 border-b border-white/10">
            <div className="space-y-2 text-right">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/40 text-[11px] sm:text-xs text-amber-400 font-bold">
                <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                <span>شاشات التوكيل المعتمدة • 100% GENUINE AGENCY SCREENS</span>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading font-black text-white">
                شاشات التوكيل الأصلية المتاحة
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm max-w-2xl leading-relaxed">
                معاينة مباشرة لشاشات التوكيل الأصلية بأعلى مقاييس الجودة العالمية، دقة الألوان الحقيقية، حساسيات اللمس الفائقة، وزجاج الحماية المعتمد.
              </p>
            </div>
            <div className="text-right sm:text-left flex-shrink-0">
              <span className="inline-flex items-center gap-1.5 text-xs text-amber-400 font-bold px-3.5 py-2 rounded-xl bg-black border border-amber-500/30 shadow-lg">
                <BadgeCheck className="w-4 h-4 text-amber-500" />
                8 شاشات أصلية متوفرة
              </span>
            </div>
          </div>

          {/* Grid of 8 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {ORIGINAL_SCREENS_SHOWCASE.map((screen) => (
              <div
                key={screen.id}
                className="relative group rounded-2xl sm:rounded-3xl transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between"
              >
                {/* Fantasy Ambient Halo Glow behind card on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500/30 via-yellow-500/15 to-amber-600/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10" />

                {/* Inner Card Container */}
                <div className="h-full flex flex-col justify-between rounded-2xl sm:rounded-3xl bg-gradient-to-b from-zinc-900/95 via-zinc-900/80 to-black p-4 sm:p-5 border border-white/10 group-hover:border-amber-500/50 shadow-xl group-hover:shadow-2xl group-hover:shadow-amber-500/10 backdrop-blur-xl transition-all duration-300">
                  
                  {/* Top Image Section (Strictly Uniform Aspect Ratio & Complete Uncropped Display) */}
                  <div>
                    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl sm:rounded-2xl bg-zinc-950/90 border border-white/10 group-hover:border-amber-500/40 transition-colors shadow-inner p-2 sm:p-2.5 flex items-center justify-center">
                      
                      {/* Unified Screen Image - 100% Visible & Complete */}
                      <img
                        src={screen.image}
                        alt={screen.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-contain object-center transition-transform duration-500 ease-out group-hover:scale-105 filter drop-shadow-md"
                      />

                      {/* Fantasy Light Sheen Diagonal Sweep */}
                      <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-transparent via-amber-400/[0.07] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-xl" />

                      {/* Agency Authentic Badge (Top-Right) */}
                      <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full bg-black/85 backdrop-blur-md border border-amber-500/50 text-[10px] sm:text-xs font-bold text-amber-400 flex items-center gap-1 shadow-lg shadow-black/80 pointer-events-none">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
                        <span>{screen.badge}</span>
                      </div>

                      {/* Brand Pill (Top-Left) */}
                      <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md border border-white/15 text-[10px] font-semibold text-zinc-300 pointer-events-none">
                        {screen.brand}
                      </div>

                      {/* Enlarge / Fullscreen preview button */}
                      <button
                        type="button"
                        onClick={() => setSelectedScreen(screen)}
                        className="absolute bottom-2.5 left-2.5 p-1.5 rounded-lg bg-black/80 hover:bg-amber-500 hover:text-black text-white backdrop-blur-md border border-white/20 transition-all opacity-0 group-hover:opacity-100 cursor-pointer shadow-md"
                        aria-label={`معاينة مكبرة لـ ${screen.title}`}
                        title="معاينة الصورة بالحجم الكامل"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Content Section */}
                    <div className="mt-3.5 sm:mt-4 space-y-2">
                      <h4 className="text-base sm:text-lg font-heading font-black text-white group-hover:text-amber-400 transition-colors line-clamp-1">
                        {screen.title}
                      </h4>

                      <p className="text-zinc-400 text-xs sm:text-[13px] leading-relaxed line-clamp-3 min-h-[54px]">
                        {screen.description}
                      </p>
                    </div>

                    {/* Features Badges */}
                    <div className="space-y-1.5 pt-3 mt-3 border-t border-white/10">
                      {screen.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs text-zinc-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Direct WhatsApp Action Button */}
                  <div className="mt-4 pt-3 border-t border-white/10">
                    <a
                      href={`https://wa.me/201033332012?text=${encodeURIComponent(
                        `مرحباً Original، أود الاستفسار وحجز ${screen.title} (أصلية توكيل)`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-3.5 rounded-xl text-xs sm:text-sm font-bold bg-amber-500/10 hover:bg-amber-500 text-amber-400 hover:text-black border border-amber-500/30 hover:border-amber-500 transition-all duration-300 flex items-center justify-center gap-2 shadow-md group/btn"
                    >
                      <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 group-hover/btn:text-black transition-colors" />
                      <span>طلب الشاشة الأصلية</span>
                    </a>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>

        {/* 4 Pillars of Original Spare Parts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {SPARE_PARTS_HIGHLIGHTS.map((item, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-zinc-900 border border-white/10 hover:border-amber-500/40 transition-all duration-200 group shadow-lg"
            >
              <div className="text-amber-500 text-lg sm:text-xl font-bold font-mono opacity-40 group-hover:opacity-100 transition-opacity mb-2 sm:mb-3">
                0{idx + 1}
              </div>
              <h4 className="text-base sm:text-lg font-heading font-bold text-white mb-2 group-hover:text-amber-500 transition-colors">
                {item.title}
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* Image Full-Res Preview Modal */}
      {selectedScreen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl animate-fadeIn"
          onClick={() => setSelectedScreen(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-zinc-900 border border-white/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 overflow-hidden shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <h4 className="text-base sm:text-lg font-bold text-white font-heading">
                  {selectedScreen.title}
                </h4>
                <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-400 text-xs font-semibold border border-amber-500/40">
                  {selectedScreen.badge}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedScreen(null)}
                className="p-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                aria-label="إغلاق المعاينة"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Display */}
            <div className="relative w-full h-72 sm:h-96 md:h-[480px] rounded-xl overflow-hidden bg-black border border-white/10 flex items-center justify-center p-3">
              <img
                src={selectedScreen.image}
                alt={selectedScreen.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Modal Description & Order Action */}
            <div className="space-y-3">
              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                {selectedScreen.description}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                <div className="flex flex-wrap gap-2">
                  {selectedScreen.features.map((f, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-black border border-white/10 text-xs text-amber-400 font-medium"
                    >
                      {f}
                    </span>
                  ))}
                </div>
                <a
                  href={`https://wa.me/201033332012?text=${encodeURIComponent(
                    `مرحباً Original، أود الاستفسار وحجز ${selectedScreen.title} أصلية توكيل`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-amber-500 text-black hover:bg-amber-400 transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>طلب وحجز الشاشة عبر واتساب</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
