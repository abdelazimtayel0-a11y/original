import React from 'react';
import { BatteryCharging, Zap, ShieldAlert, ShieldCheck, CheckCircle2, Cpu } from 'lucide-react';
import { CHARGERS_FEATURES } from '../data/content';

export const ChargersSection: React.FC = () => {
  return (
    <section id="chargers" className="py-20 md:py-28 relative bg-[#050505]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-amber-500/50 rounded-full text-xs text-amber-500 font-bold uppercase tracking-widest bg-amber-500/5">
            <BatteryCharging className="w-3.5 h-3.5 text-amber-500" />
            <span>حلول الشحن الأصلية والآمنة • CERTIFIED CHARGERS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white">
            الشواحن — أداء فائق، أمان كامل، واعتمادية تامة
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            احمِ بطارية هاتفك مع شواحن <strong className="text-white">ORIGINAL</strong> الأصلية المعتمدة لأجهزة iPhone و Android. منتجات أصلية توفر أداء شحن مستقر وموثوق يحافظ على صحة جهازك.
          </p>
        </div>

        {/* 2 Core Devices Platform Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          
          {/* iPhone Chargers */}
          <div className="bg-zinc-900 rounded-3xl p-8 border border-white/10 hover:border-amber-500/40 transition-all duration-300 group shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-black border border-white/10 flex items-center justify-center text-amber-500 group-hover:scale-105 group-hover:border-amber-500/50 transition-transform">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold text-white">شواحن أجهزة iPhone</h3>
                  <span className="text-xs text-amber-500 font-semibold">شواحن أصلية ومعتمدة</span>
                </div>
              </div>
              <span className="px-3.5 py-1 rounded-full text-xs font-bold border border-amber-500/40 text-amber-500 bg-black">
                ORIGINAL
              </span>
            </div>

            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              شواحن مصممة خصيصاً لأجهزة iPhone لتوفير تيار كهربائي مستقر وآمن، مع حماية البطارية من الارتفاع المفاجئ للحرارة وضمان سرعة الشحن الأصلية.
            </p>

            <div className="space-y-3 pt-4 border-t border-white/10 text-xs sm:text-sm text-zinc-300">
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
          <div className="bg-zinc-900 rounded-3xl p-8 border border-white/10 hover:border-amber-500/40 transition-all duration-300 group shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-black border border-white/10 flex items-center justify-center text-amber-500 group-hover:scale-105 group-hover:border-amber-500/50 transition-transform">
                  <BatteryCharging className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold text-white">شواحن أجهزة Android</h3>
                  <span className="text-xs text-amber-500 font-semibold">شواحن أصلية عالية الكفاءة</span>
                </div>
              </div>
              <span className="px-3.5 py-1 rounded-full text-xs font-bold border border-amber-500/40 text-amber-500 bg-black">
                ORIGINAL
              </span>
            </div>

            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              شواحن أصلية متطورة لمختلف أجهزة Android تدعم الشحن الفعال والآمن، مع توزيع ذكي للطاقة يمنع ارتفاع حرارة الجهاز ويحافظ على أدائه الدائم.
            </p>

            <div className="space-y-3 pt-4 border-t border-white/10 text-xs sm:text-sm text-zinc-300">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CHARGERS_FEATURES.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-zinc-900 border border-white/10 hover:border-amber-500/40 transition-all group"
            >
              <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center text-amber-500 mb-3 border border-white/10">
                <ShieldCheck className="w-4 h-4 text-amber-500" />
              </div>
              <h4 className="text-base font-heading font-bold text-white mb-2 group-hover:text-amber-500 transition-colors">
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
