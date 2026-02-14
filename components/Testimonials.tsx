
import React from 'react';

const REVIEWS = [
  {
    name: "Ana Beatriz",
    comment: "Melhor curadoria de produtos da Shopee que já vi. Achei vários itens que não conseguia encontrar sozinha!",
    role: "Compradora Frequente",
    avatar: "https://i.pravatar.cc/150?u=ana"
  },
  {
    name: "Carlos Eduardo",
    comment: "Sempre fico de olho no canal deles e do site para pegar as promos do AliExpress. Realmente os preços são imbatíveis.",
    role: "Entusiasta de Tech",
    avatar: "https://i.pravatar.cc/150?u=carlos"
  },
  {
    name: "Juliana Silva",
    comment: "Produtos virais do TikTok que realmente funcionam. Comprei a luminária e o umidificador, chegou super rápido.",
    role: "Criadora de Conteúdo",
    avatar: "https://i.pravatar.cc/150?u=juliana"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 border-t border-zinc-900 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Quem Compra, Aprova</h2>
          <p className="text-zinc-500">Milhares de clientes satisfeitos em todo o Brasil.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, i) => (
            <div key={i} className="bg-zinc-900/50 p-8 rounded-3xl border border-zinc-800 flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full border border-zinc-700" />
                <div>
                  <h4 className="font-bold text-white">{review.name}</h4>
                  <p className="text-xs text-zinc-500">{review.role}</p>
                </div>
              </div>
              <p className="text-zinc-400 italic leading-relaxed flex-grow">
                "{review.comment}"
              </p>
              <div className="mt-6 flex gap-1 text-yellow-500">
                {[...Array(5)].map((_, j) => <span key={j}>⭐</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
