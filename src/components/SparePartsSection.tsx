import React from 'react';
import { Cpu, Check, ShieldCheck, Zap, Award, CheckCircle } from 'lucide-react';
import { SPARE_PARTS_HIGHLIGHTS } from '../data/content';

export const SparePartsSection: React.FC = () => {
  return (
    <section id="spare-parts" className="py-14 sm:py-20 md:py-28 relative bg-black border-y border-white/10">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-amber-500/10 rounded-full blur-[100px] sm:blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 border border-amber-500/50 rounded-full text-[11px] sm:text-xs text-amber-500 font-bold uppercase tracking-wider sm:tracking-widest bg-amber-500/5">
            <Cpu className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
            <span>قطع الغيار الأصلية المعتمدة • CERTIFIED SPARE PARTS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-black text-white">
            قطع غيار أصلية لأجهزة iPhone و Android
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base md:text-lg leading-relaxed">
            لأن هاتفك يستحق الأفضل، نلتزم في <strong className="text-white">ORIGINAL</strong> بتوفير قطع الغيار الأصلية فقط، مع عناية هندسية فائقة تضمن عودة جهازك لكامل كفاءته وسرعته الطبيعية.
          </p>
        </div>

        {/* Dual Platforms Supported Display (iPhone & Android) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 mb-10 sm:mb-14">
          
          {/* iPhone Original Parts */}
          <div className="bg-zinc-900 rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-8 border border-white/10 hover:border-amber-500/40 transition-all duration-300 relative overflow-hidden group shadow-xl">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-black flex items-center justify-center text-amber-500 border border-white/10 group-hover:scale-105 transition-transform flex-shrink-0">
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
          <div className="bg-zinc-900 rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-8 border border-white/10 hover:border-amber-500/40 transition-all duration-300 relative overflow-hidden group shadow-xl">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-black flex items-center justify-center text-amber-500 border border-white/10 group-hover:scale-105 transition-transform flex-shrink-0">
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

        {/* 4 Pillars of Original Spare Parts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {SPARE_PARTS_HIGHLIGHTS.map((item, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-zinc-900 border border-white/10 hover:border-amber-500/40 transition-all duration-200 group"
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
    </section>
  );
};
