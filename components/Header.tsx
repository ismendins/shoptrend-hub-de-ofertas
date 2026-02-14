
import React from 'react';

interface HeaderProps {
  currentView: 'home' | 'promotions';
  onViewChange: (view: 'home' | 'promotions') => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView, onViewChange }) => {
  return (
    <header className="fixed top-0 z-50 w-full bg-zinc-950/60 backdrop-blur-2xl border-b border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <button 
          onClick={() => onViewChange('home')}
          className="flex items-center gap-2 group hover:scale-105 transition-transform"
        >
          <div className="w-10 h-10 bg-brand-800 rounded-xl flex items-center justify-center font-black text-white italic shadow-lg shadow-brand-800/20 group-hover:rotate-6 transition-transform">S</div>
          <span className="text-2xl font-black tracking-tighter text-white">Shop<span className="text-brand-500">Trend</span></span>
        </button>
        
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

        <button 
          onClick={() => onViewChange('promotions')}
          className="bg-white text-black px-6 py-3 rounded-2xl text-sm font-black hover:bg-brand-800 hover:text-white transition-all transform active:scale-95 shadow-xl shadow-white/5"
        >
          {currentView === 'promotions' ? 'Explorando...' : 'Ver Promoções'}
        </button>
      </div>
    </header>
  );
};