
import React, { useState } from 'react';

export const BackToTop: React.FC = () => {
  const [isActivating, setIsActivating] = useState(false);

  const easeInQuart = (t: number) => t * t * t * t;

  const scrollToTop = () => {
    if (isActivating) return;
    
    setIsActivating(true);

    // Delay de 1.5 segundos para apreciar a animação de "ignição"
    setTimeout(() => {
      const duration = 1200; // Duração da rolagem
      const start = window.pageYOffset;
      const startTime = performance.now();

      const animateScroll = (currentTime: number) => {
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        
        // Aplica aceleração (começa devagar, termina rápido)
        const run = easeInQuart(progress);
        const scrollTo = start * (1 - run);

        window.scrollTo(0, scrollTo);

        if (timeElapsed < duration) {
          requestAnimationFrame(animateScroll);
        } else {
          setIsActivating(false);
        }
      };

      requestAnimationFrame(animateScroll);
    }, 1500);
  };

  return (
    <div className="flex justify-center py-20 relative z-20 overflow-hidden">
      <style>{`
        @keyframes orbit {
          from { transform: rotate(0deg) translateX(45px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(45px) rotate(-360deg); }
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 20px rgba(240, 61, 51, 0.2); transform: scale(1); }
          50% { box-shadow: 0 0 40px rgba(240, 61, 51, 0.5); transform: scale(1.05); }
        }
        @keyframes ignition {
          0% { filter: brightness(1) blur(0); transform: scale(1); }
          50% { filter: brightness(3) blur(2px); transform: scale(1.2) translateY(-10px); }
          100% { filter: brightness(1) blur(0); transform: scale(1); }
        }
        @keyframes shake {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(2px, -2px); }
          75% { transform: translate(-2px, 2px); }
        }
        .ignition-active {
          animation: ignition 1.5s ease-in-out forwards, shake 0.1s infinite;
        }
      `}</style>
      
      <button
        onClick={scrollToTop}
        className={`group relative flex flex-col items-center gap-4 transition-all duration-500 ${isActivating ? 'ignition-active' : ''}`}
      >
        {/* Container do Círculo */}
        <div className="relative w-24 h-24 flex items-center justify-center">
          {/* Aura de Stand-by */}
          <div className="absolute inset-0 rounded-full border-2 border-brand-800/20 animate-[pulseGlow_3s_infinite_ease-in-out]" />
          
          {/* Ponto Orbitante (Radar) */}
          <div className="absolute w-2 h-2 bg-brand-500 rounded-full blur-[2px] animate-[orbit_4s_linear_infinite]" />
          
          {/* Fundo do Botão */}
          <div className="absolute inset-2 bg-zinc-900 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-brand-800 group-hover:border-brand-500 transition-all duration-500 group-hover:scale-110">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="32" 
              height="32" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="3" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className={`text-brand-500 group-hover:text-white transition-all duration-500 ${isActivating ? 'translate-y-[-20px] opacity-0' : ''}`}
            >
              <path d="m18 15-6-6-6 6"/>
            </svg>
            
            {/* Efeito de Rastro na ativação */}
            {isActivating && (
              <div className="absolute bottom-4 flex flex-col gap-1">
                <div className="w-1 h-8 bg-gradient-to-t from-transparent to-white animate-pulse" />
                <div className="w-1 h-4 bg-gradient-to-t from-transparent to-brand-400 opacity-50" />
              </div>
            )}
          </div>
        </div>

        {/* Texto do Botão */}
        <span className="text-[10px] font-black tracking-[0.4em] text-zinc-500 group-hover:text-brand-400 transition-colors uppercase">
          {isActivating ? 'Lançando...' : 'Voltar ao Topo'}
        </span>
      </button>
    </div>
  );
};
