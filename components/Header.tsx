
import React, { useState } from 'react';
import logo from './assets/logo.png';

interface HeaderProps {
  currentView: 'home' | 'promotions';
  onViewChange: (view: 'home' | 'promotions') => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView, onViewChange }) => {
  const [isActivating, setIsActivating] = useState(false);
  const [statusText, setStatusText] = useState('');

  const handleAction = () => {
    if (isActivating) return;
    
    setIsActivating(true);
    setStatusText(currentView === 'promotions' ? 'RE-SINCRONIZANDO...' : 'SINCRONIZANDO...');
    
    setTimeout(() => setStatusText('ATUALIZANDO...'), 600);

    setTimeout(() => {
      onViewChange('promotions');
      setIsActivating(false);
      setStatusText('');
    }, 1200);
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-zinc-950/60 backdrop-blur-2xl border-b border-zinc-800/50">
      <style>{`
        @keyframes borderRotate {
          100% { transform: rotate(360deg); }
        }
        @keyframes headerTextGlitch {
          0%, 100% { transform: translate(0); opacity: 1; }
          25% { transform: translate(-1px, 1px); opacity: 0.9; }
          50% { transform: translate(1px, -1px); opacity: 0.8; }
          75% { transform: translate(-1px, -1px); opacity: 0.9; }
        }
        @keyframes headerLoadBar {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        .neon-border-wrapper {
          position: relative;
          padding: 1px;
          border-radius: 1rem;
          overflow: hidden;
          transition: transform 0.3s ease;
        }
        .neon-border-wrapper:hover {
          transform: scale(1.05);
        }
        .rotating-track {
          position: absolute;
          top: -50%; left: -50%; width: 200%; height: 200%;
          background: conic-gradient(transparent, transparent, transparent, #f03d33);
          animation: borderRotate 4s linear infinite;
        }
        .btn-content-surface {
          position: relative;
          z-index: 10;
          background: #09090b;
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 170px;
          height: 44px;
          border-radius: 0.9rem;
        }
        .header-activating-text {
          animation: headerTextGlitch 0.2s infinite;
        }
        .header-loading-overlay {
          position: absolute;
          left: 0; top: 0; bottom: 0;
          background: rgba(240, 61, 51, 0.15);
          animation: headerLoadBar 1.2s linear forwards;
          border-right: 2px solid #f03d33;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <button 
          onClick={() => onViewChange('home')}
          className="transition-transform active:scale-95 outline-none"
        >
<img 
  src={logo} 
  alt="ShopTrend Logo" 
className="h-[75px] w-auto object-contain transition-transform duration-500 hover:scale-105"/>        </button>
        
        <nav className="hidden md:flex items-center gap-10 text-sm font-bold text-zinc-400 uppercase tracking-widest">
          <button 
            onClick={() => onViewChange('home')} 
            className={`hover:text-white transition-colors ${currentView === 'home' ? 'text-white border-b-2 border-brand-800 pb-1' : ''}`}
          >
            Início
          </button>
          <button 
            onClick={() => onViewChange('promotions')} 
            className={`hover:text-white transition-colors ${currentView === 'promotions' ? 'text-white border-b-2 border-brand-800 pb-1' : ''}`}
          >
            Ofertas
          </button>
        </nav>

        <div className={`neon-border-wrapper ${isActivating ? 'shadow-[0_0_25px_rgba(240,61,51,0.4)] scale-110' : ''}`}>
          <div className="rotating-track" />
          
          <button 
            onClick={handleAction}
            className={`btn-content-surface relative overflow-hidden px-6 py-3 text-[10px] tracking-[0.2em] font-black transition-all ${isActivating ? 'text-brand-400' : 'text-white hover:text-brand-400'}`}
          >
            {isActivating && <div className="header-loading-overlay" />}
            <span className={`relative z-20 ${isActivating ? 'header-activating-text' : ''}`}>
              {isActivating ? statusText : currentView === 'promotions' ? 'EXPLORANDO...' : 'VER PROMOÇÕES'}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
