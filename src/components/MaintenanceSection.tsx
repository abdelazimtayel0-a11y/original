import React, { useState } from 'react';
import { Wrench, CheckCircle2, ShieldCheck, Smartphone, Send, Clock, UserCheck, Check, MessageSquare } from 'lucide-react';
import { MAINTENANCE_SERVICES } from '../data/content';

export const MaintenanceSection: React.FC = () => {
  const [deviceType, setDeviceType] = useState<'iPhone' | 'Android'>('iPhone');
  const [serviceType, setServiceType] = useState<string>('فحص وتشخيص الأعطال');
  const [customNotes, setCustomNotes] = useState<string>('');
  const [inquirySent, setInquirySent] = useState<boolean>(false);

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    
    const formattedText = `مرحباً ORIGINAL،
أرغب في الاستفسار عن صيانة جهازي:
• نظام الجهاز: ${deviceType}
• الخدمة المطلوبة: ${serviceType}
${customNotes ? `• تفاصيل العطل: ${customNotes}` : ''}`;

    const whatsappUrl = `https://wa.me/201033332012?text=${encodeURIComponent(formattedText)}`;
    window.open(whatsappUrl, '_blank');

    setInquirySent(true);
    setTimeout(() => setInquirySent(false), 6000);
  };

  return (
    <section id="maintenance" className="py-14 sm:py-20 md:py-28 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-amber-500/5 rounded-full blur-[100px] sm:blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 border border-amber-500/50 rounded-full text-[11px] sm:text-xs text-amber-500 font-bold uppercase tracking-wider sm:tracking-widest bg-amber-500/5">
            <Wrench className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
            <span>مركز الصيانة المعتمد • PRESTIGE SERVICE CENTER</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-black text-white">
            صيانة جميع أجهزة المحمول بأعلى جودة
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base md:text-lg leading-relaxed">
            خبرة متكاملة في صيانة أجهزة <strong className="text-white">iPhone</strong> و <strong className="text-white">Android</strong> باستخدام قطع الغيار الأصلية وتحت إشراف فنيين معتمدين لضمان أعلى معايير الجودة والأمان لبياناتك وجهازك.
          </p>
        </div>

        {/* 6 Key Pillars of Maintenance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-16">
          {MAINTENANCE_SERVICES.map((service, idx) => (
            <div
              key={idx}
              className="bg-zinc-900 hover:bg-zinc-850 rounded-2xl p-5 sm:p-6 border border-white/10 hover:border-amber-500/40 transition-all duration-300 group shadow-lg"
            >
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <div className="w-10 h-10 rounded-xl bg-black border border-white/10 flex items-center justify-center text-amber-500 group-hover:scale-105 group-hover:border-amber-500/50 transition-transform flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-base sm:text-lg font-heading font-bold text-white group-hover:text-amber-500 transition-colors">
                  {service.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Maintenance Workflow & Interactive Service Request Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Trust Guarantee & Workflow (Left in RTL -> Right in grid) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-zinc-900 rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-8 border border-white/10 shadow-xl">
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-6 flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-amber-500 flex-shrink-0" />
                <span>دورة الصيانة الاحترافية في ORIGINAL</span>
              </h3>

              <div className="space-y-5 sm:space-y-6">
                <div className="flex gap-3 sm:gap-4 items-start">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-black text-amber-500 flex items-center justify-center font-bold text-xs sm:text-sm flex-shrink-0 border border-amber-500/40 mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-white mb-1">استلام الجهاز وفحص دقيق للأعطال</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      فحص تشخيصي هندسي شامل لاكتشاف السبب الجذري للعطل بدقة، وإبلاغ العميل بتقرير الحالة مسبقاً.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 sm:gap-4 items-start">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-black text-amber-500 flex items-center justify-center font-bold text-xs sm:text-sm flex-shrink-0 border border-amber-500/40 mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-white mb-1">استخدام قطع الغيار الأصلية المعتمدة</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      تركيب القطع الأصلية فقط المخصصة لموديل جهازك لضمان توافق تام وكفاءة تشغيل تدوم طويلاً.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 sm:gap-4 items-start">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-black text-amber-500 flex items-center justify-center font-bold text-xs sm:text-sm flex-shrink-0 border border-amber-500/40 mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-white mb-1">اختبار الجودة والأداء قبل التسليم</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      اختبار وظيفي لكل مكون في الهاتف للتأكد من استعادة كامل طاقته قبل تسليمه للعميل مع تقديم ضمان الصيانة.
                    </p>
                  </div>
                </div>
              </div>

              {/* Maintenance Features strip */}
              <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-white/10 grid grid-cols-3 gap-2 sm:gap-3 text-center">
                <div className="p-2.5 sm:p-3 rounded-xl bg-black/40 border border-white/5">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 mx-auto text-amber-500 mb-1" />
                  <span className="text-[10px] sm:text-[11px] text-zinc-300 font-semibold block">صيانة سريعة</span>
                </div>
                <div className="p-2.5 sm:p-3 rounded-xl bg-black/40 border border-white/5">
                  <UserCheck className="w-4 h-4 sm:w-5 sm:h-5 mx-auto text-amber-500 mb-1" />
                  <span className="text-[10px] sm:text-[11px] text-zinc-300 font-semibold block">فنيون معتمدون</span>
                </div>
                <div className="p-2.5 sm:p-3 rounded-xl bg-black/40 border border-white/5">
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 mx-auto text-amber-500 mb-1" />
                  <span className="text-[10px] sm:text-[11px] text-zinc-300 font-semibold block">ضمان الجودة</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Maintenance Inquiry Box */}
          <div className="lg:col-span-5">
            <div className="bg-zinc-900 rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-white/10 shadow-2xl relative">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg sm:text-xl font-heading font-bold text-white">
                  طلب استفسار صيانة فوري
                </h3>
                <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black border border-white/10 text-[11px] text-zinc-400">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                  <span>متاح الآن</span>
                </div>
              </div>
              <p className="text-xs text-zinc-400 mb-5 sm:mb-6">
                حدد نوع جهازك وطبيعة العطل ليتواصل معك فريق الصيانة المتخصص.
              </p>

              <form onSubmit={handleSubmitInquiry} className="space-y-4">
                {/* Device Type Selector */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-2">
                    نوع الجهاز:
                  </label>
                  <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                    <button
                      type="button"
                      onClick={() => setDeviceType('iPhone')}
                      className={`py-3 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer border min-h-[44px] ${
                        deviceType === 'iPhone'
                          ? 'bg-amber-500 text-white border-amber-500 shadow-md shadow-amber-500/20'
                          : 'bg-black text-zinc-400 border-white/10 hover:border-white/20'
                      }`}
                    >
                      <Smartphone className="w-4 h-4 flex-shrink-0" />
                      <span>أجهزة iPhone</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setDeviceType('Android')}
                      className={`py-3 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer border min-h-[44px] ${
                        deviceType === 'Android'
                          ? 'bg-amber-500 text-white border-amber-500 shadow-md shadow-amber-500/20'
                          : 'bg-black text-zinc-400 border-white/10 hover:border-white/20'
                      }`}
                    >
                      <Smartphone className="w-4 h-4 flex-shrink-0" />
                      <span>أجهزة Android</span>
                    </button>
                  </div>
                </div>

                {/* Service Needed Selector */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-2">
                    نوع الخدمة المطلوبة:
                  </label>
                  <select
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                    className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-base sm:text-xs text-zinc-200 focus:outline-none focus:border-amber-500 transition-colors min-h-[44px]"
                  >
                    <option value="فحص وتشخيص الأعطال">فحص وتشخيص الأعطال</option>
                    <option value="استبدال شاشة أصلية">استبدال شاشة أصلية</option>
                    <option value="استبدال بطارية أصلية">استبدال بطارية أصلية</option>
                    <option value="صيانة دائرة الشحن">صيانة دائرة الشحن والمدخل</option>
                    <option value="صيانة عامة للجهاز">صيانة عامة للجهاز</option>
                  </select>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-2">
                    ملاحظات عن العطل (اختياري):
                  </label>
                  <textarea
                    rows={3}
                    value={customNotes}
                    onChange={(e) => setCustomNotes(e.target.value)}
                    placeholder="اكتب وصفاً مختصراً للمشكلة التي تواجهها في جهازك..."
                    className="w-full bg-black border border-white/10 rounded-xl p-3 text-base sm:text-xs text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-amber-500 transition-colors resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  id="submit-maintenance-inquiry-btn"
                  className="w-full py-3.5 px-4 rounded-xl text-sm font-bold bg-emerald-600 text-white hover:bg-emerald-500 shadow-lg shadow-emerald-950/40 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98] min-h-[48px]"
                >
                  <MessageSquare className="w-4 h-4 flex-shrink-0" />
                  <span>إرسال استفسار الصيانة عبر واتساب</span>
                </button>

                {inquirySent && (
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2 animate-fadeIn">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>تم فتح محادثة واتساب الرسمية بنجاح! يسعدنا خدمتكم.</span>
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
