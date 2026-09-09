import React, { useState } from 'react';
import { 
  ShieldAlert, 
  AlertTriangle, 
  Lock, 
  Copy, 
  Check, 
  ArrowUpRight, 
  MessageSquare, 
  PhoneCall, 
  CreditCard, 
  CheckCircle2, 
  Sparkles,
  ShieldCheck,
  Zap,
  Info
} from 'lucide-react';
import { PAYMENT_METHODS } from '../data/content';
import { PaymentMethodItem } from '../types';

export const PaymentSection: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [showNotification, setShowNotification] = useState<string | null>(null);

  const handleCopyAccount = (method: PaymentMethodItem) => {
    navigator.clipboard.writeText(method.accountNumber);
    setCopiedId(method.id);
    setShowNotification(
      `تم نسخ رقم ${method.name}! تذكير إلزامي: يرجى الرجوع لممثل البيع أولاً لتأكيد المبلغ، وتتحمل كامل المسؤولية في حال التحويل دون تأكيد.`
    );

    setTimeout(() => {
      setCopiedId(null);
    }, 3000);

    setTimeout(() => {
      setShowNotification(null);
    }, 6000);
  };

  return (
    <section id="payment" className="py-14 sm:py-20 md:py-28 relative bg-[#060606] border-b border-white/10 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 -right-24 w-80 sm:w-[500px] h-80 sm:h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-24 w-80 sm:w-[500px] h-80 sm:h-[500px] bg-red-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Floating Copy Notification Toast */}
      {showNotification && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 max-w-lg w-[92%] sm:w-auto bg-zinc-900/95 backdrop-blur-xl border border-amber-500/60 p-4 rounded-2xl shadow-2xl shadow-black text-white flex items-start gap-3 animate-slideUp">
          <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm leading-relaxed text-zinc-200">
            {showNotification}
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs sm:text-sm text-amber-400 font-bold">
            <CreditCard className="w-4 h-4 text-amber-400" />
            <span>معلومات وطرق الدفع المعتمدة • OFFICIAL PAYMENT INFO</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-black text-white">
            معلومات الدفع والحسابات الرسمية
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base md:text-lg leading-relaxed">
            نوفر لكم وسائل دفع إلكترونية سريعة وآمنة عبر إنستا باي ومحافظ كاش وفوري، مع التزامنا بأعلى معايير الحماية والشفافية.
          </p>
        </div>

        {/* MANDATORY WARNING & DISCLAIMER BOX */}
        <div className="mb-12 sm:mb-16 bg-gradient-to-r from-red-950/40 via-amber-950/30 to-zinc-900 border-2 border-amber-500/40 rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-8 relative overflow-hidden shadow-2xl backdrop-blur-md">
          <div className="absolute -top-12 -left-12 w-40 h-40 bg-red-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            
            <div className="flex items-start gap-3.5 sm:gap-4 flex-1">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-black/80 border border-amber-500/50 flex items-center justify-center text-amber-400 flex-shrink-0 shadow-lg shadow-amber-500/10">
                <ShieldAlert className="w-6 h-6 sm:w-7 sm:h-7 text-amber-400 animate-pulse" />
              </div>

              <div className="space-y-2.5 text-right">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-red-500/20 border border-red-500/40 text-red-300 font-bold text-xs">
                    تنبيه أمني إلزامي
                  </span>
                  <h3 className="text-base sm:text-lg md:text-xl font-heading font-black text-white">
                    تنويه هام جداً قبل تنفيذ أي عملية دفع أو تحويل
                  </h3>
                </div>

                {/* Primary Notice */}
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-medium">
                  <strong className="text-amber-400">1. الرجوع لممثل البيع:</strong> يرجى الرجوع إلى ممثل البيع أولاً والتواصل المباشر معه لتأكيد قيمة المعاملة ومواصفات الطلب وتوافرها قبل الشروع في إتمام أي تحويل مالي.
                </p>

                {/* Second Disclaimer: Full Customer Responsibility */}
                <p className="text-xs sm:text-sm text-red-200/90 leading-relaxed font-medium bg-black/40 p-2.5 rounded-xl border border-red-500/30">
                  <strong className="text-red-400 font-bold">2. إخلاء المسؤولية:</strong> يتحمل العميل كامل المسؤولية في حالة تنفيذ أي عملية دفع أو تحويل مالي دون الرجوع المسبق والتأكيد الصريح مع ممثل البيع.
                </p>
              </div>
            </div>

            {/* Quick Contact Sales Representative Button */}
            <div className="w-full md:w-auto flex-shrink-0 flex flex-col sm:flex-row md:flex-col gap-2.5">
              <a
                href="https://wa.me/201033332012?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20Original%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%AA%D8%A3%D9%83%D9%8A%D8%AF%20%D8%A7%D9%84%D8%B7%D9%84%D8%A8%20%D9%88%D8%A7%D9%84%D9%82%D9%8A%D9%85%D8%A9%20%D9%82%D8%A8%D9%84%20%D8%A5%D8%AA%D9%85%D8%A7%D9%85%20%D8%B9%D9%85%D9%84%D9%8A%D8%A9%20%D8%A7%D9%84%D8%AF%D9%81%D8%B9"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-95"
              >
                <MessageSquare className="w-4 h-4" />
                <span>تأكيد الطلب مع ممثل البيع (واتساب)</span>
              </a>

              <a
                href="tel:01033332012"
                className="px-5 py-3 rounded-xl bg-black/60 hover:bg-black border border-white/20 text-zinc-200 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-300"
              >
                <PhoneCall className="w-4 h-4 text-amber-400" />
                <span>اتصال بممثل البيع (01033332012)</span>
              </a>
            </div>

          </div>
        </div>

        {/* 3 PAYMENT CARDS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-14 sm:mb-20">
          {PAYMENT_METHODS.map((method) => {
            const isCopied = copiedId === method.id;

            return (
              <div
                key={method.id}
                className="relative group rounded-3xl transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between"
              >
                {/* Fantasy Ambient Halo Glow behind card on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500/25 via-yellow-500/15 to-amber-600/25 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10" />

                {/* Card Container */}
                <div className="h-full flex flex-col justify-between rounded-3xl bg-gradient-to-b from-zinc-900/95 via-zinc-900/85 to-black p-5 sm:p-6 border border-white/10 group-hover:border-amber-500/50 shadow-2xl backdrop-blur-xl transition-all duration-300">
                  
                  <div>
                    {/* Top Image Banner - 100% Uncropped & Visible */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-zinc-950 border border-white/10 group-hover:border-amber-500/40 transition-colors shadow-inner p-3 flex items-center justify-center">
                      <img
                        src={method.image}
                        alt={method.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-contain object-center transition-transform duration-500 ease-out group-hover:scale-105 filter drop-shadow-lg"
                      />

                      {/* Fantasy Light Sheen Diagonal Sweep */}
                      <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-transparent via-amber-400/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-2xl" />

                      {/* Badge (Top-Right) */}
                      <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full bg-black/85 backdrop-blur-md border border-amber-500/50 text-[10px] sm:text-xs font-bold text-amber-400 flex items-center gap-1 shadow-lg pointer-events-none">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
                        <span>{method.badge}</span>
                      </div>

                      {/* Provider pill (Top-Left) */}
                      <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-md bg-black/80 backdrop-blur-md border border-white/15 text-[10px] font-semibold text-zinc-300 pointer-events-none">
                        {method.provider}
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="mt-5 space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg sm:text-xl font-heading font-black text-white group-hover:text-amber-400 transition-colors">
                          {method.name}
                        </h3>
                        <span className="text-amber-500">
                          <ShieldCheck className="w-5 h-5" />
                        </span>
                      </div>

                      <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed min-h-[40px]">
                        {method.instructions}
                      </p>

                      {/* Masked Account Number Section (Security Protection) */}
                      <div className="p-3.5 rounded-2xl bg-black/70 border border-white/10 space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-zinc-400 flex items-center gap-1.5 font-medium">
                            <Lock className="w-3.5 h-3.5 text-amber-400" />
                            <span>رقم الحساب / المحفظة:</span>
                          </span>
                          <span className="text-[11px] text-amber-400/90 font-mono bg-amber-500/10 px-2 py-0.5 rounded-md border border-amber-500/30">
                            مشفر ومحمي تلقائياً
                          </span>
                        </div>

                        <div className="flex items-center justify-between pt-1">
                          <div className="font-mono text-sm sm:text-base font-bold tracking-widest text-zinc-300">
                            {method.maskedNumber}
                          </div>

                          <button
                            type="button"
                            onClick={() => handleCopyAccount(method)}
                            className="px-3 py-1.5 rounded-xl bg-zinc-800 hover:bg-amber-500 hover:text-black text-zinc-200 text-xs font-bold transition-all duration-200 flex items-center gap-1.5 cursor-pointer border border-white/15 hover:border-amber-400 shadow-md"
                            title="نسخ رقم الحساب المحمي"
                          >
                            {isCopied ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-emerald-400" />
                                <span className="text-emerald-400">تم النسخ</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5" />
                                <span>نسخ الحساب</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>

                      {/* Card Specific Warning Note */}
                      <div className="p-3 rounded-xl bg-red-950/30 border border-red-500/30 flex items-start gap-2 text-[11px] sm:text-xs text-red-200/90 leading-relaxed">
                        <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                        <span>
                          <strong>تنبيه:</strong> يلزم الرجوع لممثل البيع أولاً قبل تنفيذ التحويل، ويتحمل العميل كامل المسؤولية في حال عدم الرجوع.
                        </span>
                      </div>

                      {/* Features */}
                      <div className="space-y-1.5 pt-2">
                        {method.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-2 text-xs text-zinc-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>

                  {/* Actions Section */}
                  <div className="mt-6 pt-4 border-t border-white/10 space-y-2.5">
                    
                    {/* Direct Transfer Button */}
                    <a
                      href={method.actionHref}
                      target={method.actionHref.startsWith('http') ? '_blank' : undefined}
                      rel={method.actionHref.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold bg-amber-500 hover:bg-amber-400 text-black transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 group/btn cursor-pointer font-heading"
                    >
                      <Zap className="w-4 h-4 text-black" />
                      <span>{method.actionLabel}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-black group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>

                    {/* Contact Sales Rep For Confirmation */}
                    <a
                      href={`https://wa.me/201033332012?text=${encodeURIComponent(method.whatsappMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-black/60 hover:bg-emerald-950/40 text-emerald-400 hover:text-emerald-300 border border-emerald-500/30 hover:border-emerald-500/60 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>تأكيد التحويل مع الممثل وإرسال الإشعار</span>
                    </a>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Security & Transaction Steps Guidance */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 sm:p-6 rounded-2xl bg-zinc-900/60 border border-white/10 text-right">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 flex-shrink-0 font-bold text-xs">
              01
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-white mb-1">الاتفاق المسبق والتأكيد</h4>
              <p className="text-[11px] sm:text-xs text-zinc-400 leading-relaxed">
                تواصل مع ممثل البيع وتأكد من توفر القطعة أو المنتج والسعر النهائي الدقيق.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 flex-shrink-0 font-bold text-xs">
              02
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-white mb-1">التحويل الآمن المعتمد</h4>
              <p className="text-[11px] sm:text-xs text-zinc-400 leading-relaxed">
                استخدم وسيلة الدفع المناسبة لك من الحسابات المعتمدة أعلاه بدقة واحترافية.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 flex-shrink-0 font-bold text-xs">
              03
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-white mb-1">إرسال إيصال المعاملة</h4>
              <p className="text-[11px] sm:text-xs text-zinc-400 leading-relaxed">
                قم بالتقاط لقطة شاشة للإيصال أو رقم العملية وأرسلها مباشرة لممثل البيع لتجهيز الطلب.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
