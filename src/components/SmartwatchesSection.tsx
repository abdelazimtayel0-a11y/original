import React from 'react';
import { Watch, Sparkles, HeartPulse, Activity, BellRing, BatteryMedium, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { SMARTWATCH_HIGHLIGHTS } from '../data/content';

export const SmartwatchesSection: React.FC = () => {
  return (
    <section id="smartwatches" className="py-20 md:py-28 relative bg-black border-b border-white/10 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-r from-amber-500/10 via-amber-400/5 to-transparent rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-amber-500/50 rounded-full text-xs text-amber-500 font-bold uppercase tracking-widest bg-amber-500/5">
            <Watch className="w-3.5 h-3.5 text-amber-500" />
            <span>الساعات الذكية الفاخرة • LUXURY SMARTWATCHES</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white">
            ساعات Smart بأجود جودة وأصلية 100%
          </h2>
          
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            تألق بأرقى الساعات الذكية الأصلية التي تجمع بين الأناقة الفخمة وأحدث التقنيات اليومية لمتابعة نشاطك وصحتك بكل دقة وسلاسة.
          </p>
        </div>

        {/* Luxury Center Showcase Card */}
        <div className="bg-zinc-900 rounded-3xl p-8 sm:p-12 border border-white/10 shadow-2xl relative mb-14 hover:border-amber-500/30 transition-all duration-300">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Smart Capabilities */}
            <div className="lg:col-span-7 space-y-6 text-right">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black border border-white/10 text-xs text-amber-500 font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>فخامة التصميم + دقة الأداء</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-heading font-black text-white leading-snug">
                تصاميم عصرية راقية تلبي تطلعاتك اليومية والرياضية
              </h3>

              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                في <strong className="text-white">ORIGINAL</strong>، نختار لك ساعات ذكية أصلية 100% تتميز بخامات فاخرة، زجاج مقاوم للصدمات، وسوار مريح يلائم مختلف الأوقات، مع حساسات دقيقة لمراقبة العلامات الحيوية وشاشات فائقة الوضوح.
              </p>

              {/* Functional Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-black border border-white/10 flex items-center gap-2.5">
                  <HeartPulse className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span className="text-xs text-zinc-300 font-medium">متابعة الصحة</span>
                </div>
                <div className="p-3 rounded-xl bg-black border border-white/10 flex items-center gap-2.5">
                  <Activity className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span className="text-xs text-zinc-300 font-medium">الأنشطة الرياضية</span>
                </div>
                <div className="p-3 rounded-xl bg-black border border-white/10 flex items-center gap-2.5">
                  <BellRing className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span className="text-xs text-zinc-300 font-medium">الإشعارات الفورية</span>
                </div>
                <div className="p-3 rounded-xl bg-black border border-white/10 flex items-center gap-2.5">
                  <BatteryMedium className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span className="text-xs text-zinc-300 font-medium">بطارية ممتازة</span>
                </div>
                <div className="p-3 rounded-xl bg-black border border-white/10 flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span className="text-xs text-zinc-300 font-medium">مقاومة للماء</span>
                </div>
                <div className="p-3 rounded-xl bg-black border border-white/10 flex items-center gap-2.5">
                  <Watch className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span className="text-xs text-zinc-300 font-medium">شاشة فائقة الدقة</span>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Stamp of Authenticity */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative p-8 rounded-3xl bg-black border border-white/10 text-center w-full max-w-sm shadow-xl">
                <div className="w-20 h-20 rounded-2xl bg-zinc-900 border border-amber-500/30 flex items-center justify-center text-amber-500 mx-auto mb-4 shadow-lg shadow-amber-500/10">
                  <Watch className="w-10 h-10" />
                </div>
                
                <h4 className="text-xl font-heading font-black text-white mb-2">
                  ساعات Smart أصلية
                </h4>
                <p className="text-xs text-zinc-400 mb-6 leading-relaxed">
                  معايير الجودة الصارمة تضمن لك ساعة ذكية حقيقية بأداء مستقر وتوافق تام مع هاتفك الذكي.
                </p>

                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs font-bold text-amber-500 tracking-wide">
                  ضمان الأصالة 100% مع ORIGINAL
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SMARTWATCH_HIGHLIGHTS.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-zinc-900 border border-white/10 hover:border-amber-500/40 transition-all duration-200 group"
            >
              <div className="w-8 h-8 rounded-lg bg-black border border-white/10 flex items-center justify-center text-amber-500 mb-4 font-bold text-xs group-hover:border-amber-500/40">
                0{idx + 1}
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
