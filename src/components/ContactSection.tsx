import React, { useState } from 'react';
import { Phone, MessageSquare, MapPin, Clock, Send, ShieldCheck, Check, Mail } from 'lucide-react';
import { LOGO_URL } from '../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    interest: 'صيانة واستفسار عن قطع الغيار',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct formatted WhatsApp message
    const formattedText = `مرحباً ORIGINAL،
لدي استفسار عبر الموقع الإلكتروني:
• الاسم: ${formData.name.trim()}
• رقم الهاتف: ${formData.phone.trim()}
• القسم: ${formData.interest}
• تفاصيل الاستفسار:
${formData.message.trim()}`;

    const whatsappUrl = `https://wa.me/201033332012?text=${encodeURIComponent(formattedText)}`;
    
    // Open WhatsApp directly with message prefilled
    window.open(whatsappUrl, '_blank');

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        interest: 'صيانة واستفسار عن قطع الغيار',
        message: '',
      });
    }, 4000);
  };

  return (
    <section id="contact" className="py-14 sm:py-20 md:py-28 relative bg-[#050505]">
      {/* Background glow */}
      <div className="absolute -bottom-10 right-1/4 w-72 sm:w-[500px] lg:w-[600px] h-72 sm:h-[500px] lg:h-[600px] bg-amber-500/10 rounded-full blur-[100px] sm:blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 border border-amber-500/50 rounded-full text-[11px] sm:text-xs text-amber-500 font-bold uppercase tracking-wider sm:tracking-widest bg-amber-500/5">
            <Phone className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
            <span>خدمة العملاء والدعم المباشر • CONCIERGE SUPPORT</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-black text-white">
            تواصل مع فريق ORIGINAL
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base md:text-lg leading-relaxed">
            نحن هنا للإجابة على استفساراتكم بخصوص خدمات الصيانة المتخصصة، قطع الغيار الأصلية، الإكسسوارات، السماعات، الشواحن، والساعات الذكية.
          </p>
        </div>

        {/* Contact Cards + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Contact Details & Channels (Right in RTL) */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            
            {/* Quick WhatsApp Card */}
            <div className="bg-zinc-900 rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-white/10 hover:border-emerald-500/40 transition-all shadow-xl group">
              <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-black border border-white/10 flex items-center justify-center text-emerald-400 group-hover:scale-105 group-hover:border-emerald-500/40 transition-transform flex-shrink-0">
                  <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-heading font-bold text-white">واتساب مباشر</h3>
                  <p className="text-xs text-emerald-400 font-semibold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>متاح الآن للمحادثة الفورية</span>
                  </p>
                </div>
              </div>
              <p className="text-xs text-zinc-400 mb-4 leading-relaxed">
                تواصل معنا فوراً على الواتساب لمناقشة حالة هاتفك أو الاستفسار عن توفر قطع الغيار الأصلية والإكسسوارات.
              </p>
              <a
                href="https://wa.me/201033332012"
                target="_blank"
                rel="noopener noreferrer"
                id="contact-whatsapp-link"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-all shadow-lg shadow-emerald-950/40 cursor-pointer min-h-[44px]"
              >
                <MessageSquare className="w-4 h-4 flex-shrink-0" />
                <span>بدء محادثة واتساب فورية</span>
              </a>
            </div>

            {/* Direct Phone Call */}
            <div className="bg-zinc-900 rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-white/10 hover:border-amber-500/40 transition-all shadow-xl group">
              <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-black border border-white/10 flex items-center justify-center text-amber-500 group-hover:scale-105 group-hover:border-amber-500/40 transition-transform flex-shrink-0">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-heading font-bold text-white">الاتصال الهاتفي المباشر</h3>
                  <p className="text-xs text-amber-400 font-semibold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    <span>خدمة العملاء والصيانة المباشرة</span>
                  </p>
                </div>
              </div>
              <p className="text-xs text-zinc-400 mb-4 leading-relaxed">
                يسعدنا تلقي مكالماتكم خلال أوقات العمل الرسمية لخدمتكم بأفضل صورة وتنسيق استلام وتسليم الصيانة.
              </p>
              <a
                href="tel:01033332012"
                id="contact-phone-link"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-black hover:bg-zinc-850 border border-white/10 hover:border-amber-500/40 text-white font-bold text-xs transition-all cursor-pointer min-h-[44px]"
              >
                <Phone className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>اتصال هاتفي مباشر الآن</span>
              </a>
            </div>

            {/* Working Hours & Assurance */}
            <div className="bg-zinc-900 rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-white/10 space-y-4 shadow-xl">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">أوقات العمل الرسمية</h4>
                  <p className="text-xs text-zinc-300 font-medium">على مدار الأسبوع: من الساعة 2:00 ظهراً إلى الساعة 12:00 صباحاً</p>
                  <p className="text-[11px] text-amber-500 font-medium mt-1">يومياً طوال أيام الأسبوع لخدمتكم</p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-white/10">
                <ShieldCheck className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">ضمان الأصالة والمصداقية</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    نلتزم بالشفافية الكاملة وتوفير القطع الأصلية فقط لراحة بالك وسلامة جهازك.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Interactive Contact Form (Left in RTL) */}
          <div className="lg:col-span-7">
            <div className="bg-zinc-900 rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-8 border border-white/10 relative shadow-2xl">
              <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                <h3 className="text-lg sm:text-2xl font-heading font-black text-white">
                  أرسل استفسارك مباشرة عبر واتساب
                </h3>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                  <MessageSquare className="w-3.5 h-3.5 flex-shrink-0" />
                  تحويل مباشر
                </span>
              </div>
              <p className="text-xs text-zinc-400 mb-6 sm:mb-8 leading-relaxed">
                املأ النموذج أدناه وسيقوم النظام بتحويل بيانات استفسارك فوراً إلى محادثة واتساب رسمية ومباشرة مع فريق ORIGINAL لسرعة الرد والمتابعة.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5" id="direct-contact-form">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-2">
                      الاسم الكامل:
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="مثال: عبد العزيز محمد"
                      className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-base sm:text-xs text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-amber-500 transition-colors min-h-[44px]"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-2">
                      رقم الهاتف / الواتساب:
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="مثال: 010XXXXXXXX"
                      className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-base sm:text-xs text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-amber-500 transition-colors min-h-[44px]"
                    />
                  </div>
                </div>

                {/* Subject / Service */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-2">
                    القسم المعني بالاستفسار:
                  </label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-base sm:text-xs text-zinc-200 focus:outline-none focus:border-amber-500 transition-colors min-h-[44px]"
                  >
                    <option value="صيانة واستفسار عن قطع الغيار">صيانة أجهزة iPhone و Android وقطع الغيار</option>
                    <option value="إكسسوارات وحماية الهواتف">إكسسوارات وحافظات وحمايات الشاشة</option>
                    <option value="السماعات السلكية واللاسلكية">السماعات الأصلية (سلكية ولاسلكية)</option>
                    <option value="الشواحن الأصلية">شواحن أصلية لأجهزة iPhone و Android</option>
                    <option value="الساعات الذكية الأصلية">الساعات الذكية Smart 100%</option>
                    <option value="استفسار عام">استفسار عام</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-2">
                    تفاصيل الرسالة أو الاستفسار:
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="اكتب استفسارك هنا بكل وضوح..."
                    className="w-full bg-black border border-white/10 rounded-xl p-4 text-base sm:text-xs text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-amber-500 transition-colors resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  id="contact-form-submit-btn"
                  className="w-full py-3.5 px-6 rounded-xl text-sm font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-950/40 transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer active:scale-[0.99] min-h-[48px]"
                >
                  <MessageSquare className="w-4 h-4 flex-shrink-0" />
                  <span>إرسال الرسالة عبر واتساب</span>
                </button>

                <p className="text-[11px] text-zinc-400 text-center flex items-center justify-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>سيتم تحويلك مباشرة لمحادثة واتساب الرسمية متضمنة بيانات رسالتك.</span>
                </p>

                {submitted && (
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2.5 animate-fadeIn">
                    <Check className="w-5 h-5 text-emerald-400 flex-shrink-0" />
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
