import React from 'react';
import { Smartphone, Shield, Sparkles, Sliders, Layers, CheckCircle2 } from 'lucide-react';
import { ACCESSORIES_CATEGORIES } from '../data/content';

const iconMap = [
  Smartphone,
  Shield,
  Layers,
  Sliders,
  Sparkles,
];

export const AccessoriesSection: React.FC = () => {
  return (
    <section id="accessories" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-amber-500/50 rounded-full text-xs text-amber-500 font-bold uppercase tracking-widest bg-amber-500/5">
            <Smartphone className="w-3.5 h-3.5 text-amber-500" />
            <span>إكسسوارات الهواتف الأصلية • PRESTIGE ACCESSORIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white">
            إكسسوارات فاخرة لحماية وأناقة هاتفك
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            نوفر في <strong className="text-white">ORIGINAL</strong> أرقى تصنيفات إكسسوارات الهواتف الخارجية التي تجمع بين المتانة العالية، الأناقة المعاصرة، وحماية جهازك اليومية بأعلى مقاييس الجودة.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {ACCESSORIES_CATEGORIES.map((item, idx) => {
            const Icon = iconMap[idx % iconMap.length];
            const num = String(idx + 1).padStart(2, '0');
            return (
              <div
                key={idx}
                id={`accessory-card-${idx}`}
                className="bg-zinc-900 hover:bg-zinc-850 border border-white/10 hover:border-amber-500/40 rounded-2xl p-7 flex flex-col justify-between relative group overflow-hidden transition-all duration-300 shadow-xl"
              >
                {/* Prestige Corner Number */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-13 h-13 rounded-xl bg-black border border-white/10 flex items-center justify-center text-amber-500 group-hover:scale-105 group-hover:border-amber-500/50 transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-amber-500 text-2xl font-bold font-mono opacity-30 group-hover:opacity-100 transition-opacity">
                    {num}
                  </span>
                </div>
                
                <div>
                  {/* Title */}
                  <h3 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-amber-500 transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                {/* Features list */}
                <div className="pt-4 border-t border-white/10 space-y-2.5">
                  {item.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Brand statement box */}
        <div className="mt-12 rounded-2xl bg-zinc-900 border border-white/10 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-right">
            <h4 className="text-lg font-bold text-white font-heading">
              تبحث عن حماية مثالية أو إكسسوار متوافق مع جهازك؟
            </h4>
            <p className="text-zinc-400 text-sm">
              فريق ORIGINAL متواجد دائماً لمساعدتك في اختيار أفضل الإكسسوارات الأصلية المتوافقة تماماً مع هاتفك.
            </p>
          </div>
          <a
            href="#contact"
            className="whitespace-nowrap px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm transition-all shadow-lg shadow-amber-500/20 active:scale-[0.98]"
          >
            استفسر الآن
          </a>
        </div>

      </div>
    </section>
  );
};
