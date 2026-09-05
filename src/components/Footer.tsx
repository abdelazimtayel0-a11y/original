import React from 'react';
import { ShieldCheck, Phone, Mail, MapPin, Clock, ArrowUp, MessageSquare } from 'lucide-react';
import { LOGO_URL } from '../types';
import { NAV_ITEMS } from '../data/content';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
    <footer className="bg-black border-t border-white/10 pt-16 pb-12 relative overflow-hidden text-zinc-400">
      {/* Top subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Brand & Brief (Col span 4) */}
          <div className="lg:col-span-4 space-y-4 text-right">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full p-[1.5px] bg-amber-500/40 border border-amber-500/60 shadow-lg shadow-amber-500/10">
                <img
                  src={LOGO_URL}
                  alt="Original"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-full bg-black"
                />
              </div>
              <div>
                <span className="font-heading font-black text-2xl text-white tracking-wider flex items-center gap-1.5">
                  ORIGINAL
                  <ShieldCheck className="w-4 h-4 text-amber-500" />
                </span>
                <span className="text-[11px] text-amber-500 font-bold uppercase tracking-widest block">الأصلي دايمًا أفضل • PRESTIGE QUALITY</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-sm">
              العلامة الرائدة والمتخصصة في إكسسوارات الهواتف المحمولة وقطع الغيار الأصلية وصيانة أجهزة iPhone و Android، وتوفير أجود السماعات والشواحن والساعات الذكية بأعلى معايير الجودة والأمان.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-amber-500/30 text-amber-500 text-xs font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-500" />
                <span>منتجات وقطع أصلية 100% معتمدة</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links (Col span 2) */}
          <div className="lg:col-span-2 space-y-3 text-right">
            <h4 className="text-base font-heading font-bold text-white mb-4">
              روابط سريعة
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="hover:text-amber-500 transition-colors cursor-pointer text-right"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories & Services (Col span 3) */}
          <div className="lg:col-span-3 space-y-3 text-right">
            <h4 className="text-base font-heading font-bold text-white mb-4">
              التخصصات والخدمات
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li>
                <button onClick={() => scrollTo('maintenance')} className="hover:text-amber-500 transition-colors text-right cursor-pointer">
                  صيانة أجهزة iPhone و Android
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('spare-parts')} className="hover:text-amber-500 transition-colors text-right cursor-pointer">
                  قطع الغيار الأصلية المعتمدة
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('accessories')} className="hover:text-amber-500 transition-colors text-right cursor-pointer">
                  كفرات وحمايات الشاشة والإكسسوارات
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('headphones')} className="hover:text-amber-500 transition-colors text-right cursor-pointer">
                  أجود السماعات اللاسلكية والسلكية
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('chargers')} className="hover:text-amber-500 transition-colors text-right cursor-pointer">
                  شواحن أصلية آمنة وعالية الكفاءة
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('smartwatches')} className="hover:text-amber-500 transition-colors text-right cursor-pointer">
                  الساعات الذكية الأصلية 100%
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details (Col span 3) */}
          <div className="lg:col-span-3 space-y-4 text-right">
            <h4 className="text-base font-heading font-bold text-white mb-4">
               معلومات التواصل
            </h4>
            <div className="space-y-3 text-xs text-zinc-400">
              <a
                href="tel:01033332012"
                className="flex items-center gap-2.5 hover:text-amber-500 transition-colors group cursor-pointer"
              >
                <Phone className="w-4 h-4 text-amber-500 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>الاتصال الهاتفي المباشر</span>
              </a>
              <a
                href="https://wa.me/201033332012"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-emerald-400 transition-colors group cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>محادثة واتساب فورية</span>
              </a>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>طوال الأسبوع: 2:00 ظهراً – 12:00 صباحاً</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>ضمان الجودة وفحص دقيق لجميع الأجهزة</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => scrollTo('contact')}
                className="w-full py-2.5 px-4 rounded-lg bg-black hover:bg-zinc-850 border border-white/10 hover:border-amber-500/40 text-amber-500 text-xs font-bold transition-all text-center cursor-pointer shadow-md"
              >
                تواصل معنا الآن
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p className="text-center sm:text-right">
            جميع الحقوق محفوظة &copy; {new Date().getFullYear()} لـ <strong className="text-zinc-300 font-bold">ORIGINAL</strong> — الأصلي دايمًا أفضل.
          </p>
          
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900 border border-white/5 hover:border-amber-500/30 text-zinc-400 hover:text-amber-500 transition-colors cursor-pointer"
            aria-label="العودة لأعلى الصفحة"
          >
            <span>العودة للأعلى</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
