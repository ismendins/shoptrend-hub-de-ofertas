
import React, { useState, useRef } from 'react';
import { StoreType } from '../types';

interface HeroProps {
  onViewChange: (view: 'home' | 'promotions', store?: string) => void;
}

const PlatformItem: React.FC<{ name: string; color: string; classes?: string; onClick: () => void }> = ({ name, color, classes = "", onClick }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isActivating, setIsActivating] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current || isActivating) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleClick = () => {
    if (isActivating) return;
    setIsActivating(true);
    setTimeout(() => {
      onClick();
      setIsActivating(false);
    }, 1500);
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      className={`relative px-10 py-6 cursor-pointer select-none group transition-all duration-700 ${isActivating ? 'scale-125 z-50' : 'hover:scale-105 active:scale-95'} ${classes}`}
    >
      <div 
        className="absolute pointer-events-none transition-opacity duration-500 rounded-full blur-[45px]"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          width: '140px',
          height: '140px',
          backgroundColor: color,
          opacity: (isHovered && !isActivating) ? 0.35 : 0,
          transform: 'translate(-50%, -50%)',
          zIndex: 0
        }}
      />

      {isActivating && (
        <>
          <div className="absolute inset-0 pointer-events-none animate-auraExpand bg-white rounded-full blur-2xl opacity-0" />
          <div 
            className="absolute inset-0 pointer-events-none animate-auraExpand opacity-0"
            style={{ 
              boxShadow: `0 0 80px 30px ${color}`,
              backgroundColor: color,
              borderRadius: '50%',
              filter: 'blur(50px)'
            }}
          />
          <div 
            className="absolute inset-0 pointer-events-none animate-auraPulse opacity-0"
            style={{ 
              boxShadow: `0 0 120px 50px ${color}`,
              filter: 'blur(70px)'
            }}
          />
        </>
      )}
      
      <span 
        className={`relative z-10 text-3xl md:text-4xl font-black tracking-tighter transition-all duration-700 block text-center`}
        style={{
          color: (isHovered || isActivating) ? 'white' : 'rgba(255,255,255,0.45)',
          textShadow: isActivating
            ? `0 0 20px white, 0 0 40px ${color}, 0 0 80px ${color}, 0 0 120px ${color}`
            : isHovered 
              ? `0 0 15px ${color}, 0 0 35px ${color}`
              : `0 0 8px ${color}33`,
          animation: isActivating 
            ? 'auraTextGlow 1.5s ease-in-out infinite' 
            : !isHovered ? `neonBreathing 4s ease-in-out infinite` : 'none',
        }}
      >
        {name}
      </span>
    </div>
  );
};

export const Hero: React.FC<HeroProps> = ({ onViewChange }) => {
  const [isNavigating, setIsNavigating] = useState<string | null>(null);
  const [navStep, setNavStep] = useState(0);

  const handleDelayedAction = (type: 'explore' | 'how') => {
    if (isNavigating) return;
    setIsNavigating(type);
    
    if (type === 'explore') {
      setNavStep(1); // Inicializando
      setTimeout(() => setNavStep(2), 500); // Sincronizando
      setTimeout(() => setNavStep(3), 1000); // Lançando!
    }

    setTimeout(() => {
      if (type === 'explore') {
        onViewChange('promotions');
      } else {
        const section = document.getElementById('how-it-works');
        if (section) section.scrollIntoView({ behavior: 'smooth' });
      }
      setIsNavigating(null);
      setNavStep(0);
    }, 1500);
  };

  const getExploreLabel = () => {
    if (isNavigating !== 'explore') return 'EXPLORAR ACHADINHOS';
    switch (navStep) {
      case 1: return 'INICIALIZANDO...';
      case 2: return 'SINCRONIZANDO...';
      case 3: return 'LANÇANDO!';
      default: return 'PROCESSANDO...';
    }
  };

  return (
    <section className="relative overflow-hidden pt-28 pb-20 md:pt-40 md:pb-32">
      <style>{`
        @keyframes heroAuraPulse {
          0%, 100% { box-shadow: 0 0 25px rgba(240, 61, 51, 0.2), inset 0 0 15px rgba(240, 61, 51, 0.1); }
          50% { box-shadow: 0 0 50px rgba(240, 61, 51, 0.4), inset 0 0 30px rgba(240, 61, 51, 0.2); }
        }
        @keyframes heroTextFlicker {
          0%, 100% { opacity: 1; filter: brightness(1.1) drop-shadow(0 0 2px rgba(240,61,51,0.5)); }
          92% { opacity: 1; }
          93% { opacity: 0.7; filter: brightness(1.5); }
          94% { opacity: 1; }
          95% { opacity: 0.9; }
          96% { opacity: 1; }
        }
        @keyframes heroShimmer {
          0% { transform: translateX(-150%) skewX(-25deg); }
          100% { transform: translateX(250%) skewX(-25deg); }
        }
        @keyframes heroIgnitionShake {
          0%, 100% { transform: translate(0,0) rotate(0deg); }
          20% { transform: translate(3px, -2px) rotate(0.15deg); }
          40% { transform: translate(-3px, 3px) rotate(-0.15deg); }
          60% { transform: translate(2px, 2px) rotate(0.15deg); }
          80% { transform: translate(-2px, -3px) rotate(-0.15deg); }
        }
        @keyframes heroPowerLoad {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        .hero-btn-standby {
          animation: heroAuraPulse 3s infinite ease-in-out, heroTextFlicker 5s infinite;
          border-color: rgba(240, 61, 51, 0.4) !important;
        }
        .hero-btn-standby::after {
          content: '';
          position: absolute;
          top: 0; left: 0; width: 45%; height: 100%;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.4), transparent);
          animation: heroShimmer 3s infinite ease-in-out;
          z-index: 4;
        }
        .hero-btn-active {
          animation: heroIgnitionShake 0.1s infinite;
          background: #000 !important;
          border-color: #f03d33 !important;
          color: #f03d33 !important;
          box-shadow: 0 0 60px rgba(240, 61, 51, 0.7);
        }
        .hero-power-bar {
          position: absolute;
          bottom: 0; left: 0; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(240, 61, 51, 0.5));
          animation: heroPowerLoad 1.5s cubic-bezier(0.15, 0.85, 1, 0.1) forwards;
          border-right: 4px solid #f03d33;
          z-index: 1;
        }
        @keyframes heroGlitchText {
          0% { transform: scale(1) skew(0deg); opacity: 1; }
          20% { transform: scale(1.05) skew(1deg); opacity: 0.8; }
          40% { transform: scale(0.95) skew(-1deg); opacity: 0.9; }
          100% { transform: scale(1) skew(0deg); opacity: 1; }
        }
        .hero-glitch-anim {
          animation: heroGlitchText 0.12s infinite;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand-400 text-xs font-bold mb-10 backdrop-blur-md">
          <span className="flex h-2 w-2 rounded-full bg-brand-800 animate-ping"></span>
          CURADORIA DE ELITE
        </div>
        
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9] bg-gradient-to-b from-white via-white to-zinc-600 bg-clip-text text-transparent">
          O Futuro das <br />Suas Compras.
        </h1>
        
        <p className="max-w-3xl mx-auto text-zinc-400 text-xl md:text-2xl mb-12 leading-relaxed font-medium">
          Sua curadoria de elite para os produtos virais da <span className="text-orange-400 font-bold">Shopee</span>, 
          <span className="text-pink-400 font-bold"> TikTok</span>, <span className="text-brand-500 font-bold"> Amazon</span> e 
          <span className="text-red-400 font-bold"> AliExpress</span>.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button 
            onClick={() => handleDelayedAction('explore')}
            className={`relative overflow-hidden group w-full sm:w-auto px-12 py-6 bg-white text-black font-black rounded-2xl transition-all shadow-2xl text-xl min-w-[340px] h-[80px] flex items-center justify-center border-2 border-transparent ${isNavigating === 'explore' ? 'hero-btn-active' : 'hero-btn-standby hover:scale-110 active:scale-95'}`}
          >
            {isNavigating === 'explore' && <div className="hero-power-bar" />}
            <span className={`relative z-10 transition-colors duration-300 ${isNavigating === 'explore' ? 'hero-glitch-anim' : 'group-hover:text-brand-500'}`}>
              {getExploreLabel()}
            </span>
          </button>
          
          <button 
            onClick={() => handleDelayedAction('how')}
            className={`w-full sm:w-auto px-10 py-6 bg-zinc-900/50 border border-zinc-800 hover:bg-zinc-800 text-zinc-100 font-bold rounded-2xl transition-all text-xl backdrop-blur-md ${isNavigating === 'how' ? 'opacity-50' : 'hover:scale-105'}`}
          >
            Como funciona?
          </button>
        </div>

        <div className="mt-40 flex flex-wrap items-center justify-center gap-x-6 md:gap-x-16 gap-y-12">
          <PlatformItem name="SHOPEE" color="#f03d33" onClick={() => onViewChange('promotions', StoreType.SHOPEE)} />
          <PlatformItem name="TIKTOK SHOP" color="#ff0050" onClick={() => onViewChange('promotions', StoreType.TIKTOK)} />
          <PlatformItem name="ALIEXPRESS" color="#ff4747" onClick={() => onViewChange('promotions', StoreType.ALIEXPRESS)} />
          <PlatformItem name="AMAZON" color="#ff6b00" onClick={() => onViewChange('promotions', StoreType.AMAZON)} />
        </div>
      </div>
    </section>
  );
};
