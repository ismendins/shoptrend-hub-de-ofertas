
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-white italic">S</div>
              <span className="text-xl font-bold tracking-tight text-white">ShopTrend</span>
            </div>
            <p className="text-zinc-500 max-w-sm leading-relaxed">
              Sua curadoria definitiva de produtos virais e ofertas imperdíveis das maiores lojas globais. 
              Encontramos o melhor para você não perder tempo nem dinheiro.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Links Úteis</h4>
            <ul className="space-y-4 text-zinc-500 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Como Comprar</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Perguntas Frequentes</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Redes Sociais</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-zinc-900 rounded-xl flex items-center justify-center hover:bg-zinc-800 transition-colors border border-zinc-800">
                <span className="text-zinc-400">TikTok</span>
              </a>
              <a href="#" className="w-10 h-10 bg-zinc-900 rounded-xl flex items-center justify-center hover:bg-zinc-800 transition-colors border border-zinc-800">
                <span className="text-zinc-400">Insta</span>
              </a>
              <a href="#" className="w-10 h-10 bg-zinc-900 rounded-xl flex items-center justify-center hover:bg-zinc-800 transition-colors border border-zinc-800">
                <span className="text-zinc-400">Tele</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-600 text-xs">
          <p>© 2024 ShopTrend Curadoria. Todos os direitos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-zinc-400">Termos de Uso</a>
            <a href="#" className="hover:text-zinc-400">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
