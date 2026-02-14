
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-brand-800 rounded-lg flex items-center justify-center font-bold text-white italic shadow-lg shadow-brand-800/20">S</div>
              <span className="text-xl font-bold tracking-tight text-white">ShopTrend</span>
            </div>
            <p className="text-zinc-500 max-w-sm leading-relaxed">
              Sua curadoria definitiva de produtos virais e ofertas imperdíveis da Amazon, Shopee, TikTok Shop e AliExpress. 
              Encontramos o melhor para você não perder tempo nem dinheiro.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Navegação</h4>
            <ul className="space-y-4 text-zinc-500 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ver Promoções</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacidade</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Redes Sociais</h4>
            <div className="flex gap-4">
              {/* TikTok Icon */}
              <a href="#" className="w-12 h-12 bg-zinc-900 rounded-2xl flex items-center justify-center hover:bg-zinc-800 transition-all border border-zinc-800 group shadow-xl hover:-translate-y-1">
                <svg className="w-6 h-6 text-zinc-400 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.03 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.81.33-.85.51-1.44 1.43-1.58 2.41-.14 1.01.23 2.08.94 2.79.68.68 1.66 1.04 2.63.94 1.31-.07 2.5-1.01 2.87-2.26.11-.38.14-.77.14-1.17V.02z" />
                </svg>
              </a>
              {/* Instagram Icon */}
              <a href="#" className="w-12 h-12 bg-zinc-900 rounded-2xl flex items-center justify-center hover:bg-zinc-800 transition-all border border-zinc-800 group shadow-xl hover:-translate-y-1">
                <svg className="w-6 h-6 text-zinc-400 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              {/* Telegram Icon */}
              <a href="#" className="w-12 h-12 bg-zinc-900 rounded-2xl flex items-center justify-center hover:bg-zinc-800 transition-all border border-zinc-800 group shadow-xl hover:-translate-y-1">
                <svg className="w-6 h-6 text-zinc-400 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-600 text-xs">
          <p>© 2024 ShopTrend Curadoria. Todos os direitos reservados.</p>
          <div className="flex gap-8">
            <span className="flex items-center gap-1">Desenvolvido com <span className="text-brand-500 inline-flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg></span> para você</span>
          </div>
        </div>
      </div>
    </footer>
  );
};