
import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductCard } from './components/ProductCard';
import { CategoryFilter } from './components/CategoryFilter';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { LiquidBackground } from './components/LiquidBackground';
import { MOCK_PRODUCTS, CATEGORIES } from './constants';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'all') return MOCK_PRODUCTS;
    return MOCK_PRODUCTS.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen text-zinc-50 selection:bg-indigo-500 selection:text-white relative">
      <LiquidBackground />
      
      <div className="relative z-10">
        <Header />

        <main>
          <Hero />

          <section id="products" className="py-24 max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
                Achadinhos <span className="text-indigo-400">Premium</span>
              </h2>
              <p className="text-zinc-400 max-w-lg mx-auto text-lg">
                Curadoria manual dos itens mais desejados da internet com preços de importação.
              </p>
            </div>

            <CategoryFilter 
              categories={CATEGORIES} 
              activeCategory={activeCategory} 
              onCategoryChange={setActiveCategory} 
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {filteredProducts.map((product) => (
                <div key={product.id} className="animate-in fade-in slide-in-from-bottom-8 duration-700">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
            
            {filteredProducts.length === 0 && (
              <div className="py-20 text-center text-zinc-500 bg-zinc-900/20 backdrop-blur-xl rounded-3xl border border-zinc-800/50 border-dashed">
                Nenhum produto encontrado nesta categoria no momento.
              </div>
            )}

            <div className="mt-32 p-10 md:p-16 rounded-[3rem] bg-indigo-600/10 border border-indigo-500/20 backdrop-blur-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="relative z-10 text-center md:text-left max-w-md">
                <h3 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Ofertas no Telegram 🚀</h3>
                <p className="text-indigo-200/70 text-lg">Seja o primeiro a saber quando um item viral volta ao estoque.</p>
              </div>
              <button className="relative z-10 px-10 py-5 bg-indigo-500 text-white font-black rounded-2xl shadow-2xl shadow-indigo-500/40 hover:bg-indigo-400 transition-all transform hover:-translate-y-1 active:scale-95 text-lg">
                ENTRAR NO GRUPO VIP
              </button>
            </div>
          </section>

          <section className="py-24 bg-zinc-950/40 backdrop-blur-3xl border-y border-zinc-800/50">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
              <div className="group">
                <div className="w-20 h-20 bg-indigo-500/10 rounded-3xl flex items-center justify-center mx-auto mb-8 text-4xl group-hover:scale-110 transition-transform duration-500 border border-indigo-500/20 shadow-xl shadow-indigo-500/5">🛡️</div>
                <h4 className="text-2xl font-bold mb-4">Compra Segura</h4>
                <p className="text-zinc-500 leading-relaxed">Redirecionamos apenas para vendedores verificados e links oficiais.</p>
              </div>
              <div className="group">
                <div className="w-20 h-20 bg-pink-500/10 rounded-3xl flex items-center justify-center mx-auto mb-8 text-4xl group-hover:scale-110 transition-transform duration-500 border border-pink-500/20 shadow-xl shadow-pink-500/5">✨</div>
                <h4 className="text-2xl font-bold mb-4">Tendências Reais</h4>
                <p className="text-zinc-500 leading-relaxed">Produtos que estão bombando no TikTok e Instagram em tempo real.</p>
              </div>
              <div className="group">
                <div className="w-20 h-20 bg-cyan-500/10 rounded-3xl flex items-center justify-center mx-auto mb-8 text-4xl group-hover:scale-110 transition-transform duration-500 border border-cyan-500/20 shadow-xl shadow-cyan-500/5">💰</div>
                <h4 className="text-2xl font-bold mb-4">Economia Máxima</h4>
                <p className="text-zinc-500 leading-relaxed">Cupons exclusivos e comparativo de preços entre plataformas globais.</p>
              </div>
            </div>
          </section>

          <Testimonials />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;
