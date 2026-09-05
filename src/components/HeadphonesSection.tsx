import React from 'react';
import { Headphones, Radio, Volume2, ShieldCheck, CheckCircle2, Sparkles } from 'lucide-react';
import { HEADPHONES_FEATURES } from '../data/content';

export const HeadphonesSection: React.FC = () => {
  return (
    <section id="headphones" className="py-14 sm:py-20 md:py-28 relative bg-black border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 border border-amber-500/50 rounded-full text-[11px] sm:text-xs text-amber-500 font-bold uppercase tracking-wider sm:tracking-widest bg-amber-500/5">
            <Headphones className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
            <span>الصوتيات الأصلية الفاخرة • PRESTIGE AUDIO</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-black text-white">
            السماعات — نقاء صوتي استثنائي وأصالة مؤكدة
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base md:text-lg leading-relaxed">
            استمتع بتجربة صوتية نقية مع أجود أنواع السماعات السلكية واللاسلكية الأصلية المختارة بعناية فائقة لتمنحك دقة صوتية عالية وراحة استخدام تدوم طوال اليوم.
          </p>
        </div>

        {/* Dual Cards: Wireless & Wired */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 mb-8 sm:mb-12">
          
          {/* Wireless Headphones */}
          <div className="bg-zinc-900 rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-8 border border-white/10 hover:border-amber-500/40 transition-all duration-300 group shadow-xl">
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-black border border-white/10 flex items-center justify-center text-amber-500 group-hover:scale-105 group-hover:border-amber-500/50 transition-transform flex-shrink-0">
                <Radio className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <div>
                <h3 className="text-lg sm:text-2xl font-heading font-bold text-white">السماعات اللاسلكية</h3>
                <span className="text-xs text-amber-500 font-semibold">أجود الأنواع وأصلية 100%</span>
              </div>
            </div>

            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
              حرية الحركة التامة بدون أسلاك مع تقنيات اتصال بلوتوث سريعة ومستقرة، وبطاريات طويلة الأمد مع كفاءة عزل صوتي متميزة.
            </p>

            <div className="space-y-2.5 sm:space-y-3 pt-4 border-t border-white/10 text-xs sm:text-sm text-zinc-300">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>اتصال لاسلكي سلس وفوري دون أي تقطيع</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>بطارية تدوم لساعات طويلة من الاستماع والمكالمات</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>تصميم مريح للأذن يضمن ثباتاً فائقاً</span>
              </div>
            </div>
          </div>

          {/* Wired Headphones */}
          <div className="bg-zinc-900 rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-8 border border-white/10 hover:border-amber-500/40 transition-all duration-300 group shadow-xl">
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-black border border-white/10 flex items-center justify-center text-amber-500 group-hover:scale-105 group-hover:border-amber-500/50 transition-transform flex-shrink-0">
                <Volume2 className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <div>
                <h3 className="text-lg sm:text-2xl font-heading font-bold text-white">السماعات السلكية</h3>
                <span className="text-xs text-amber-500 font-semibold">نقاء صوتي فوري وجودة عالية</span>
              </div>
            </div>

            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
              تجربة استماع نقية خالية من أي تأخير زمني، مع كابلات معزولة فائقة المتانة وميكروفونات مدمجة تنقل صوتك بأعلى درجات الوضوح.
            </p>

            <div className="space-y-2.5 sm:space-y-3 pt-4 border-t border-white/10 text-xs sm:text-sm text-zinc-300">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>نقاء صوت استثنائي مع استجابة ترددية متوازنة</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>كابلات متينة ومقاومة للانثناء والقطع</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>توافق تام وتوصيل صوتي نقي بدون تشويش</span>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Feature Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {HEADPHONES_FEATURES.map((feat, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-zinc-900 border border-white/10 hover:border-amber-500/40 transition-all duration-200 group"
            >
              <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center text-amber-500 mb-3 border border-white/10">
                <Sparkles className="w-4 h-4 text-amber-500" />
              </div>
              <h4 className="text-base font-heading font-bold text-white mb-1.5 sm:mb-2 group-hover:text-amber-500 transition-colors">
                {feat.title}
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
