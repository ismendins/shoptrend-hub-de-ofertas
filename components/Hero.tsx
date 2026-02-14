
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 md:pt-40 md:pb-32">
      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-indigo-300 text-xs font-bold mb-10 backdrop-blur-md">
          <span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-ping"></span>
          OFERTAS ATUALIZADAS AGORA
        </div>
        
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9] bg-gradient-to-b from-white via-white to-zinc-600 bg-clip-text text-transparent">
          O Futuro das <br />Suas Compras.
        </h1>
        
        <p className="max-w-3xl mx-auto text-zinc-400 text-xl md:text-2xl mb-12 leading-relaxed font-medium">
          Sua curadoria de elite para os produtos virais da <span className="text-orange-400 font-bold">Shopee</span>, 
          <span className="text-pink-400 font-bold"> TikTok</span> e 
          <span className="text-red-400 font-bold"> AliExpress</span>.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href="#products" className="w-full sm:w-auto px-10 py-5 bg-white text-black font-black rounded-2xl transition-all shadow-2xl shadow-white/10 text-xl hover:scale-105 active:scale-95">
            Explorar Achadinhos
          </a>
          <button className="w-full sm:w-auto px-10 py-5 bg-zinc-900/50 border border-zinc-800 hover:bg-zinc-800 text-zinc-100 font-bold rounded-2xl transition-all text-xl backdrop-blur-md">
            Como funciona?
          </button>
        </div>

        <div className="mt-24 flex flex-wrap items-center justify-center gap-x-12 gap-y-8 grayscale opacity-40 hover:opacity-70 transition-opacity duration-700">
            <span className="text-3xl font-black italic tracking-tighter">SHOPEE</span>
            <span className="text-3xl font-black tracking-tight">TIKTOK SHOP</span>
            <span className="text-3xl font-black tracking-widest">ALIEXPRESS</span>
            <span className="hidden sm:block text-3xl font-black tracking-tighter">AMAZON</span>
        </div>
      </div>
    </section>
  );
};
