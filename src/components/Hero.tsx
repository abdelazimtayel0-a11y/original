import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  Wrench, 
  Headphones, 
  BatteryCharging, 
  Watch, 
  ChevronDown, 
  CheckCircle2, 
  Zap, 
  Gem, 
  Flame, 
  Crown, 
  RefreshCw 
} from 'lucide-react';
import { LOGO_URL } from '../types';

interface FantasyTheme {
  id: string;
  name: string;
  icon: string;
  badge: string;
  emojis: string[];
  ringGlow: string;
  outerHalo: string;
  borderClass: string;
  filterClass: string;
  badgeColor: string;
  sheenColor: string;
}

const FANTASY_THEMES: FantasyTheme[] = [
  {
    id: 'gold',
    name: 'الذهب الملكي',
    icon: '👑',
    badge: 'ORIGINAL ROYAL GOLD',
    emojis: ['👑', '✨', '🌟', '⚜️', '🪙'],
    ringGlow: 'from-amber-400 via-yellow-500 to-amber-600',
    outerHalo: 'bg-amber-500/25',
    borderClass: 'border-amber-500/60 shadow-amber-500/30',
    filterClass: 'brightness-105 contrast-105 drop-shadow-[0_0_25px_rgba(245,158,11,0.6)]',
    badgeColor: 'border-amber-500/60 text-amber-400 bg-black/90',
    sheenColor: 'via-amber-400/20',
  },
  {
    id: 'cyber',
    name: 'السايبر الكوني',
    icon: '⚡',
    badge: 'CYBER NEON EDITION',
    emojis: ['⚡', '🔮', '💫', '🚀', '🌌'],
    ringGlow: 'from-cyan-400 via-blue-500 to-fuchsia-500',
    outerHalo: 'bg-cyan-500/25',
    borderClass: 'border-cyan-400/60 shadow-cyan-500/30',
    filterClass: 'brightness-110 contrast-110 hue-rotate-15 drop-shadow-[0_0_25px_rgba(6,182,212,0.65)]',
    badgeColor: 'border-cyan-400/60 text-cyan-300 bg-black/90',
    sheenColor: 'via-cyan-400/25',
  },
  {
    id: 'crystal',
    name: 'الألماس الكريستالي',
    icon: '💎',
    badge: 'CRYSTAL DIAMOND LUXURY',
    emojis: ['💎', '❄️', '✨', '💠', '💍'],
    ringGlow: 'from-sky-300 via-indigo-400 to-teal-300',
    outerHalo: 'bg-sky-500/25',
    borderClass: 'border-sky-400/60 shadow-sky-500/30',
    filterClass: 'brightness-115 contrast-105 saturate-110 drop-shadow-[0_0_25px_rgba(56,189,248,0.65)]',
    badgeColor: 'border-sky-400/60 text-sky-300 bg-black/90',
    sheenColor: 'via-sky-300/25',
  },
  {
    id: 'flame',
    name: 'الشعلة الأسطورية',
    icon: '🔥',
    badge: 'MYTHIC FLAME POWER',
    emojis: ['🔥', '💥', '⚡', '✨', '🧡'],
    ringGlow: 'from-orange-500 via-red-500 to-amber-400',
    outerHalo: 'bg-orange-500/30',
    borderClass: 'border-orange-500/60 shadow-orange-500/35',
    filterClass: 'brightness-105 contrast-115 saturate-125 drop-shadow-[0_0_28px_rgba(249,115,22,0.7)]',
    badgeColor: 'border-orange-500/60 text-orange-400 bg-black/90',
    sheenColor: 'via-orange-400/25',
  },
];

export const Hero: React.FC = () => {
  const [currentThemeIndex, setCurrentThemeIndex] = useState<number>(0);
  const [isAutoCycling, setIsAutoCycling] = useState<boolean>(true);
  const [burstParticles, setBurstParticles] = useState<{ id: number; emoji: string; x: number; y: number }[]>([]);

  const theme = FANTASY_THEMES[currentThemeIndex];

  // Auto cycle fantasy effects smoothly every 5 seconds if enabled
  useEffect(() => {
    if (!isAutoCycling) return;
    const interval = setInterval(() => {
      setCurrentThemeIndex((prev) => (prev + 1) % FANTASY_THEMES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoCycling]);

  // Click on logo image to trigger emoji fantasy explosion
  const handleLogoClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left - rect.width / 2;
    const clickY = e.clientY - rect.top - rect.height / 2;

    const newParticles = theme.emojis.map((emoji, idx) => {
      const angle = (idx / theme.emojis.length) * 2 * Math.PI + Math.random() * 0.5;
      const distance = 40 + Math.random() * 60;
      return {
        id: Date.now() + idx + Math.random(),
        emoji,
        x: clickX + Math.cos(angle) * distance,
        y: clickY + Math.sin(angle) * distance - 20,
      };
    });

    setBurstParticles((prev) => [...prev, ...newParticles]);

    // Clean up particles after animation
    setTimeout(() => {
      setBurstParticles((prev) => prev.slice(newParticles.length));
    }, 1200);
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
    <section id="hero" className="relative pt-28 pb-14 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-br from-black via-zinc-900/60 to-black border-b border-white/10">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-amber-500/15 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-10 left-10 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-amber-600/10 rounded-full blur-[110px] sm:blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Main Content (Right side in RTL) */}
          <div className="lg:col-span-7 text-center lg:text-right space-y-5 sm:space-y-6">
            
            {/* Authenticity Badge */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 border border-amber-500/50 rounded-full text-[11px] sm:text-xs text-amber-500 font-bold uppercase tracking-wider sm:tracking-widest bg-amber-500/5">
              <Sparkles className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
              <span>الأصلي دايمًا أفضل • ORIGINAL PRESTIGE</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white leading-tight tracking-tight">
              <span>ORIGINAL</span>
              <br />
              <span className="text-amber-500">جودة تتخطى التوقعات</span>
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base lg:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              وجهتكم الاحترافية الأولى المتخصصة في تقديم{' '}
              <strong className="text-white font-semibold">الإكسسوارات الأصلية</strong>، و
              <strong className="text-white font-semibold">قطع الغيار المعتمدة</strong>، و
              <strong className="text-white font-semibold">صيانة أجهزة iPhone و Android</strong> بأعلى معايير الدقة والاحترافية، مع توفير{' '}
              <strong className="text-white font-semibold">أجود السماعات والشواحن</strong>، و
              <strong className="text-white font-semibold">الساعات الذكية الأصلية</strong> فائقة الاعتمادية.
            </p>

            {/* Quick Highlights Pills */}
            <div className="flex flex-wrap gap-2 sm:gap-2.5 justify-center lg:justify-start pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900 border border-white/10 text-[11px] sm:text-xs text-zinc-300 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                قطع غيار أصلية 100%
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900 border border-white/10 text-[11px] sm:text-xs text-zinc-300 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                صيانة معتمدة iPhone & Android
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900 border border-white/10 text-[11px] sm:text-xs text-zinc-300 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                إكسسوارات وساعات راقية
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-3 sm:pt-4">
              <button
                id="hero-explore-services-btn"
                onClick={() => scrollTo('accessories')}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl text-sm sm:text-base font-bold bg-amber-500 text-white hover:bg-amber-600 transition-all shadow-lg shadow-amber-500/20 active:scale-[0.98] cursor-pointer text-center"
              >
                استكشف خدماتنا
              </button>
              
              <button
                id="hero-contact-us-btn"
                onClick={() => scrollTo('contact')}
                className="w-full sm:w-auto border border-white/20 px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl text-sm sm:text-base font-bold hover:bg-white/10 text-white transition-all cursor-pointer text-center"
              >
                تواصل معنا
              </button>
            </div>

          </div>

          {/* Luxury Brand Visual (Left side in RTL) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group w-full max-w-sm sm:max-w-md flex flex-col items-center">
              
              {/* Outer Fantasy Ambient Blur Glow (Dynamic color) */}
              <div 
                className={`absolute -inset-4 rounded-full blur-[70px] sm:blur-[90px] transition-all duration-700 pointer-events-none animate-pulse-halo ${theme.outerHalo}`} 
              />
              
              {/* Main Card */}
              <div className="relative w-full rounded-2xl sm:rounded-3xl bg-zinc-900/90 border border-white/10 p-4 sm:p-5 shadow-2xl backdrop-blur-xl transition-all duration-500">
                
                {/* Mode Switcher Header with Fantasy Badge & Auto Cycle Toggle */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-xs">
                  <div className="flex items-center gap-1.5 text-zinc-300 font-bold">
                    <span className="text-base">{theme.icon}</span>
                    <span className="text-[11px] sm:text-xs text-white">{theme.name}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
                  </div>

                  {/* Auto-cycling toggle button */}
                  <button
                    type="button"
                    onClick={() => setIsAutoCycling(!isAutoCycling)}
                    className={`px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-bold flex items-center gap-1 transition-all border ${
                      isAutoCycling 
                        ? 'bg-amber-500/20 border-amber-500/50 text-amber-400' 
                        : 'bg-zinc-800 border-white/10 text-zinc-400 hover:text-white'
                    }`}
                    title={isAutoCycling ? 'إيقاف التغيير التلقائي للمؤثرات' : 'تفعيل التغيير التلقائي للمؤثرات'}
                  >
                    <RefreshCw className={`w-3 h-3 ${isAutoCycling ? 'animate-spin' : ''}`} />
                    <span>{isAutoCycling ? 'تغيير تلقائي: نشط' : 'تغيير يدوي'}</span>
                  </button>
                </div>

                {/* Official Logo Showcase Stage with Magic Portals & Floating Emojis */}
                <div 
                  onClick={handleLogoClick}
                  className={`relative rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-black p-4 sm:p-6 border ${theme.borderClass} shadow-2xl transition-all duration-700 cursor-pointer select-none group/stage`}
                  title="انقر على الصورة لإطلاق سحر الفانتازيا والايموشنات ✨"
                >
                  
                  {/* Outer Rotating Energy Ring */}
                  <div 
                    className={`absolute inset-2 sm:inset-4 rounded-2xl border-2 border-dashed opacity-30 animate-spin-slow pointer-events-none bg-gradient-to-tr ${theme.ringGlow}`}
                    style={{ maskImage: 'radial-gradient(circle, transparent 65%, black 100%)' }}
                  />

                  {/* Inner Reverse-Rotating Portal Ring */}
                  <div 
                    className="absolute inset-4 sm:inset-6 rounded-2xl border border-white/20 opacity-25 animate-reverse-spin pointer-events-none"
                  />

                  {/* Floating Fantasy Emojis around the image */}
                  <div className="absolute top-2 right-2 text-base sm:text-xl animate-float-emoji-1 pointer-events-none z-20 filter drop-shadow-md">
                    {theme.emojis[0]}
                  </div>
                  <div className="absolute top-2 left-2 text-base sm:text-xl animate-float-emoji-2 pointer-events-none z-20 filter drop-shadow-md">
                    {theme.emojis[1]}
                  </div>
                  <div className="absolute bottom-10 right-2 text-base sm:text-xl animate-float-emoji-3 pointer-events-none z-20 filter drop-shadow-md">
                    {theme.emojis[2]}
                  </div>
                  <div className="absolute bottom-10 left-2 text-base sm:text-xl animate-float-emoji-1 pointer-events-none z-20 filter drop-shadow-md">
                    {theme.emojis[3]}
                  </div>

                  {/* Burst Click Emojis Particles */}
                  {burstParticles.map((particle) => (
                    <div
                      key={particle.id}
                      className="absolute text-xl sm:text-2xl pointer-events-none z-30 animate-burst-particle select-none"
                      style={{
                        left: '50%',
                        top: '50%',
                        // @ts-ignore
                        '--tx': `${particle.x}px`,
                        '--ty': `${particle.y}px`,
                        '--rot': `${(Math.random() - 0.5) * 60}deg`,
                      }}
                    >
                      {particle.emoji}
                    </div>
                  ))}

                  {/* The Image Container with Float Animation */}
                  <div className="relative aspect-square w-full max-w-[210px] sm:max-w-[260px] mx-auto rounded-2xl overflow-hidden border border-white/15 flex items-center justify-center bg-black/90 shadow-2xl animate-float-gentle">
                    
                    {/* The Logo Image with exact ID and Dynamic Fantasy Filters */}
                    <img
                      src={LOGO_URL}
                      alt="Original Official Logo"
                      referrerPolicy="no-referrer"
                      id="hero-official-logo-img"
                      className={`w-full h-full object-cover transition-all duration-700 group-hover/stage:scale-110 ${theme.filterClass}`}
                    />

                    {/* Dynamic Fantasy Light Sheen Diagonal Sweep */}
                    <div 
                      className={`absolute inset-0 w-full h-full bg-gradient-to-tr from-transparent ${theme.sheenColor} to-transparent opacity-80 group-hover/stage:opacity-100 transition-opacity duration-700 pointer-events-none`} 
                    />

                    {/* Sparkle corner overlays */}
                    <div className="absolute top-1.5 left-1.5 text-xs text-white/70 animate-pulse pointer-events-none">
                      ✨
                    </div>
                    <div className="absolute bottom-1.5 right-1.5 text-xs text-white/70 animate-pulse pointer-events-none">
                      ✨
                    </div>
                  </div>
                  
                  {/* Badge on Logo (Theme Responsive) */}
                  <div className={`absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 px-3 sm:px-4 py-1 rounded-full border text-[10px] sm:text-xs font-bold tracking-wider backdrop-blur-md shadow-xl flex items-center gap-1.5 uppercase whitespace-nowrap transition-all duration-500 z-20 ${theme.badgeColor}`}>
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{theme.badge}</span>
                  </div>

                  {/* Click hint overlay in small text */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 opacity-0 group-hover/stage:opacity-100 transition-opacity duration-300 pointer-events-none text-[9px] sm:text-[10px] bg-black/80 px-2 py-0.5 rounded-full text-zinc-300 border border-white/20 whitespace-nowrap z-20">
                    انقر لإطلاق سحر الفانتازيا ✨
                  </div>
                </div>

                {/* Fantasy Effects Selector Pills (تغيير المؤثرات بشكل مختلف) */}
                <div className="mt-3.5 pt-3 border-t border-white/10">
                  <div className="text-[11px] text-zinc-400 font-medium mb-2 flex items-center justify-between">
                    <span>اختر مؤثر الفانتازيا:</span>
                    <span className="text-[10px] text-amber-400/90 font-mono">4 ستايلات احترافية</span>
                  </div>
                  <div className="grid grid-cols-4 gap-1.5">
                    {FANTASY_THEMES.map((item, idx) => {
                      const isActive = currentThemeIndex === idx;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => {
                            setCurrentThemeIndex(idx);
                            setIsAutoCycling(false);
                          }}
                          className={`p-1.5 rounded-xl text-center transition-all duration-300 flex flex-col items-center justify-center gap-0.5 border cursor-pointer ${
                            isActive
                              ? 'bg-white/15 border-amber-500/80 text-white shadow-md shadow-amber-500/10 scale-105'
                              : 'bg-black/50 border-white/10 text-zinc-400 hover:text-white hover:border-white/30'
                          }`}
                        >
                          <span className="text-sm sm:text-base leading-none">{item.icon}</span>
                          <span className="text-[9px] sm:text-[10px] font-bold truncate max-w-full leading-tight">
                            {item.name}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Services Bar */}
                <div className="mt-3.5 grid grid-cols-4 gap-1.5 sm:gap-2 pt-3 border-t border-white/10 text-center">
                  <div className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-black/50 border border-white/5 hover:border-amber-500/40 transition-colors">
                    <Wrench className="w-4 h-4 sm:w-5 sm:h-5 mx-auto text-amber-500 mb-1" />
                    <span className="text-[10px] sm:text-[11px] text-zinc-300 font-medium block">صيانة</span>
                  </div>
                  <div className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-black/50 border border-white/5 hover:border-amber-500/40 transition-colors">
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 mx-auto text-amber-500 mb-1" />
                    <span className="text-[10px] sm:text-[11px] text-zinc-300 font-medium block">قطع أصلية</span>
                  </div>
                  <div className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-black/50 border border-white/5 hover:border-amber-500/40 transition-colors">
                    <Headphones className="w-4 h-4 sm:w-5 sm:h-5 mx-auto text-amber-500 mb-1" />
                    <span className="text-[10px] sm:text-[11px] text-zinc-300 font-medium block">سماعات</span>
                  </div>
                  <div className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-black/50 border border-white/5 hover:border-amber-500/40 transition-colors">
                    <Watch className="w-4 h-4 sm:w-5 sm:h-5 mx-auto text-amber-500 mb-1" />
                    <span className="text-[10px] sm:text-[11px] text-zinc-300 font-medium block">ساعات</span>
                  </div>
                </div>

                {/* Trust Seal */}
                <div className="mt-2.5 sm:mt-3 flex items-center justify-between px-3 sm:px-4 py-2 rounded-lg sm:rounded-xl bg-black/60 border border-white/10 text-[11px] sm:text-xs">
                  <span className="text-zinc-400 font-medium">الضمان والاعتمادية</span>
                  <span className="text-amber-500 font-bold">100% منتجات وقطع أصلية</span>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Scroll indicator */}
        <div className="mt-16 text-center">
          <button
            onClick={() => scrollTo('accessories')}
            className="inline-flex flex-col items-center text-xs text-zinc-400 hover:text-amber-500 transition-colors focus:outline-none cursor-pointer"
            aria-label="التمرير للأسفل"
          >
            <span>اكتشف أقسام الموقع</span>
            <ChevronDown className="w-5 h-5 mt-1 animate-bounce text-amber-500" />
          </button>
        </div>

      </div>
    </section>
  );
};
