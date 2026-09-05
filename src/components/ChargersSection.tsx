import React from 'react';
import { BatteryCharging, Zap, ShieldAlert, ShieldCheck, CheckCircle2, Cpu } from 'lucide-react';
import { CHARGERS_FEATURES } from '../data/content';

export const ChargersSection: React.FC = () => {
  return (
    <section id="chargers" className="py-14 sm:py-20 md:py-28 relative bg-[#050505]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-72 sm:w-96 h-72 sm:h-96 bg-amber-500/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 border border-amber-500/50 rounded-full text-[11px] sm:text-xs text-amber-500 font-bold uppercase tracking-wider sm:tracking-widest bg-amber-500/5">
            <BatteryCharging className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
            <span>حلول الشحن الأصلية والآمنة • CERTIFIED CHARGERS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-black text-white">
            الشواحن — أداء فائق، أمان كامل، واعتمادية تامة
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base md:text-lg leading-relaxed">
            احمِ بطارية هاتفك مع شواحن <strong className="text-white">ORIGINAL</strong> الأصلية المعتمدة لأجهزة iPhone و Android. منتجات أصلية توفر أداء شحن مستقر وموثوق يحافظ على صحة جهازك.
          </p>
        </div>

        {/* 2 Core Devices Platform Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 mb-10 sm:mb-14">
          
          {/* iPhone Chargers */}
          <div className="bg-zinc-900 rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-8 border border-white/10 hover:border-amber-500/40 transition-all duration-300 group shadow-xl">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-black border border-white/10 flex items-center justify-center text-amber-500 group-hover:scale-105 group-hover:border-amber-500/50 transition-transform flex-shrink-0">
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-2xl font-heading font-bold text-white">شواحن أجهزة iPhone</h3>
                  <span className="text-xs text-amber-500 font-semibold">شواحن أصلية ومعتمدة</span>
                </div>
              </div>
              <span className="px-2.5 sm:px-3.5 py-1 rounded-full text-[11px] sm:text-xs font-bold border border-amber-500/40 text-amber-500 bg-black">
                ORIGINAL
              </span>
            </div>

            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
              شواحن مصممة خصيصاً لأجهزة iPhone لتوفير تيار كهربائي مستقر وآمن، مع حماية البطارية من الارتفاع المفاجئ للحرارة وضمان سرعة الشحن الأصلية.
            </p>

            <div className="space-y-2.5 sm:space-y-3 pt-4 border-t border-white/10 text-xs sm:text-sm text-zinc-300">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>تنظيم ذكي للجهد الكهربائي لحماية دورة حياة البطارية</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>كابلات متينة وموصلات أصلية تضمن سرعة وثبات نقل الطاقة</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>توافق تام ومعتمد مع بروتوكولات شحن أجهزة iPhone</span>
              </div>
            </div>
          </div>

          {/* Android Chargers */}
          <div className="bg-zinc-900 rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-8 border border-white/10 hover:border-amber-500/40 transition-all duration-300 group shadow-xl">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-black border border-white/10 flex items-center justify-center text-amber-500 group-hover:scale-105 group-hover:border-amber-500/50 transition-transform flex-shrink-0">
                  <BatteryCharging className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-2xl font-heading font-bold text-white">شواحن أجهزة Android</h3>
                  <span className="text-xs text-amber-500 font-semibold">شواحن أصلية عالية الكفاءة</span>
                </div>
              </div>
              <span className="px-2.5 sm:px-3.5 py-1 rounded-full text-[11px] sm:text-xs font-bold border border-amber-500/40 text-amber-500 bg-black">
                ORIGINAL
              </span>
            </div>

            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
              شواحن أصلية متطورة لمختلف أجهزة Android تدعم الشحن الفعال والآمن، مع توزيع ذكي للطاقة يمنع ارتفاع حرارة الجهاز ويحافظ على أدائه الدائم.
            </p>

            <div className="space-y-2.5 sm:space-y-3 pt-4 border-t border-white/10 text-xs sm:text-sm text-zinc-300">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>كفاءة طاقة عالية وتوافق واسع مع مختلف أجهزة Android</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>حماية متكاملة ضد التماس الكهربائي وفرط الشحن</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>خامات عازلة ومقاومة للاحتكاك والحرارة</span>
              </div>
            </div>
          </div>

        </div>

        {/* Charger Features Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {CHARGERS_FEATURES.map((item, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-zinc-900 border border-white/10 hover:border-amber-500/40 transition-all group"
            >
              <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center text-amber-500 mb-3 border border-white/10">
                <ShieldCheck className="w-4 h-4 text-amber-500" />
              </div>
              <h4 className="text-base font-heading font-bold text-white mb-1.5 sm:mb-2 group-hover:text-amber-500 transition-colors">
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
