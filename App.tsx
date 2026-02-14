
import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductCard } from './components/ProductCard';
import { Footer } from './components/Footer';
import { LiquidBackground } from './components/LiquidBackground';
import { PromotionsScreen } from './components/PromotionsScreen';
import { MOCK_PRODUCTS } from './constants';

type ViewType = 'home' | 'promotions';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>('home');

  const handleViewChange = (view: ViewType) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const featuredProducts = MOCK_PRODUCTS.slice(0, 5);

  return (
    <div className="min-h-screen text-zinc-50 selection:bg-brand-800 selection:text-white relative">
      <LiquidBackground />
      
      <div className="relative z-10">
        <Header currentView={currentView} onViewChange={handleViewChange} />

        <main>
          {currentView === 'home' ? (
            <>
              <Hero onViewChange={handleViewChange} />

              {/* Seção de Destaques na Home */}
              <section id="products" className="py-24 max-w-[1600px] mx-auto px-4">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                  <div className="max-w-xl">
                    <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight leading-none">
                      Achados que são <span className="text-brand-500 italic">Tendência</span>
                    </h2>
                    <p className="text-zinc-400 text-lg font-medium">
                      Produtos selecionados que estão bombando nas redes sociais agora.
                    </p>
                  </div>
                  <button 
                    onClick={() => handleViewChange('promotions')}
                    className="group flex items-center gap-3 text-brand-500 font-bold hover:text-white transition-colors text-lg"
                  >
                    Ver catálogo completo 
                    <svg className="group-hover:translate-x-2 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                  {featuredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>

                {/* Banner VIP */}
                <div className="mt-32 p-10 md:p-16 rounded-[3.5rem] bg-gradient-to-br from-brand-900/40 to-brand-800/10 border border-white/10 backdrop-blur-3xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
                  <div className="relative z-10 text-center md:text-left max-w-md">
                    <h3 className="text-3xl md:text-5xl font-black mb-4 tracking-tighter">Ofertas no Telegram</h3>
                    <p className="text-brand-100 opacity-60 text-lg">Receba cupons exclusivos e alertas de estoque zero antes de todo mundo.</p>
                  </div>
                  <button className="relative z-10 px-12 py-6 bg-white text-brand-900 font-black rounded-[2rem] shadow-2xl hover:bg-brand-50 transition-all transform hover:-translate-y-1 active:scale-95 text-xl">
                    ENTRAR NO GRUPO VIP
                  </button>
                </div>
              </section>

              <section id="how-it-works" className="py-24 bg-zinc-950/40 backdrop-blur-3xl border-y border-zinc-800/50">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
                  <div className="group">
                    <div className="w-20 h-20 bg-brand-500/10 rounded-3xl flex items-center justify-center mx-auto mb-8 text-brand-500 border border-brand-500/20">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    </div>
                    <h4 className="text-2xl font-bold mb-4">Seleção Verificada</h4>
                    <p className="text-zinc-500">Links para lojas oficiais e vendedores com alta reputação.</p>
                  </div>
                  <div className="group">
                    <div className="w-20 h-20 bg-brand-600/10 rounded-3xl flex items-center justify-center mx-auto mb-8 text-brand-600 border border-brand-600/20">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v3m0 12v3M5.31 5.31l2.12 2.12m9.14 9.14l2.12 2.12M3 12h3m12 0h3M5.31 18.69l2.12-2.12m9.14-9.14l2.12-2.12"/></svg>
                    </div>
                    <h4 className="text-2xl font-bold mb-4">Tendências Virais</h4>
                    <p className="text-zinc-500">O que está viralizando no TikTok e Instagram no mundo todo.</p>
                  </div>
                  <div className="group">
                    <div className="w-20 h-20 bg-brand-700/10 rounded-3xl flex items-center justify-center mx-auto mb-8 text-brand-700 border border-brand-700/20">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22.5V12"/></svg>
                    </div>
                    <h4 className="text-2xl font-bold mb-4">Melhores Plataformas</h4>
                    <p className="text-zinc-500">Curadoria focada em Amazon, Shopee e AliExpress.</p>
                  </div>
                </div>
              </section>
            </>
          ) : (
            <PromotionsScreen />
          )}
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;
