import React from 'react';
import { Cpu, Check, ShieldCheck, Zap, Award, CheckCircle } from 'lucide-react';
import { SPARE_PARTS_HIGHLIGHTS } from '../data/content';

export const SparePartsSection: React.FC = () => {
  return (
    <section id="spare-parts" className="py-20 md:py-28 relative bg-black border-y border-white/10">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-amber-500/50 rounded-full text-xs text-amber-500 font-bold uppercase tracking-widest bg-amber-500/5">
            <Cpu className="w-3.5 h-3.5 text-amber-500" />
            <span>قطع الغيار الأصلية المعتمدة • CERTIFIED SPARE PARTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white">
            قطع غيار أصلية لأجهزة iPhone و Android
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            لأن هاتفك يستحق الأفضل، نلتزم في <strong className="text-white">ORIGINAL</strong> بتوفير قطع الغيار الأصلية فقط، مع عناية هندسية فائقة تضمن عودة جهازك لكامل كفاءته وسرعته الطبيعية.
          </p>
        </div>

        {/* Dual Platforms Supported Display (iPhone & Android) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          
          {/* iPhone Original Parts */}
          <div className="bg-zinc-900 rounded-3xl p-8 border border-white/10 hover:border-amber-500/40 transition-all duration-300 relative overflow-hidden group shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-black flex items-center justify-center text-amber-500 border border-white/10 group-hover:scale-105 transition-transform">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold text-white">قطع غيار أجهزة iPhone</h3>
                  <p className="text-xs text-amber-500 font-semibold">معايير أصلية 100%</p>
                </div>
              </div>
              <span className="px-3.5 py-1 rounded-full text-xs font-bold border border-amber-500/40 text-amber-500 bg-black">
                ORIGINAL
              </span>
            </div>

            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              توفير القطع الأصلية الخاصة بكافة هواتف iPhone مع الالتزام التام بالتوافق الكامل مع النظام والشاشة وحساسية اللمس والأداء الأمني.
            </p>

            <ul className="space-y-3 pt-4 border-t border-white/10 text-sm text-zinc-300">
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
          <div className="bg-zinc-900 rounded-3xl p-8 border border-white/10 hover:border-amber-500/40 transition-all duration-300 relative overflow-hidden group shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-black flex items-center justify-center text-amber-500 border border-white/10 group-hover:scale-105 transition-transform">
                  <Cpu className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold text-white">قطع غيار أجهزة Android</h3>
                  <p className="text-xs text-amber-500 font-semibold">جودة عالية واعتمادية</p>
                </div>
              </div>
              <span className="px-3.5 py-1 rounded-full text-xs font-bold border border-amber-500/40 text-amber-500 bg-black">
                ORIGINAL
              </span>
            </div>

            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              قطع غيار أصلية ومعتمدة لمختلف أجهزة Android مع فحص متقدم وتطبيق بروتوكولات التركيب السليمة لضمان استمرارية الأداء العالي.
            </p>

            <ul className="space-y-3 pt-4 border-t border-white/10 text-sm text-zinc-300">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SPARE_PARTS_HIGHLIGHTS.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-zinc-900 border border-white/10 hover:border-amber-500/40 transition-all duration-200 group"
            >
              <div className="text-amber-500 text-xl font-bold font-mono opacity-40 group-hover:opacity-100 transition-opacity mb-3">
                0{idx + 1}
              </div>
              <h4 className="text-lg font-heading font-bold text-white mb-2 group-hover:text-amber-500 transition-colors">
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
