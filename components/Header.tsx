
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-white italic">S</div>
          <span className="text-xl font-extrabold tracking-tight">Shop<span className="text-indigo-500">Trend</span></span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <a href="#" className="hover:text-white transition-colors">Início</a>
          <a href="#products" className="hover:text-white transition-colors">Ofertas</a>
          <a href="#categories" className="hover:text-white transition-colors">Categorias</a>
          <a href="#testimonials" className="hover:text-white transition-colors">Depoimentos</a>
        </nav>

        <button className="bg-zinc-100 text-zinc-950 px-4 py-2 rounded-full text-sm font-bold hover:bg-white transition-all transform active:scale-95 shadow-lg shadow-white/5">
          Ver Promoções
        </button>
      </div>
    </header>
  );
};
