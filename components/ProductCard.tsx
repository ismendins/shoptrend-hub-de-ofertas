
import React from 'react';
import { Product, StoreType } from '../types';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const getStoreStyles = (store: StoreType) => {
    switch (store) {
      case StoreType.SHOPEE: return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      case StoreType.TIKTOK: return 'bg-pink-500/20 text-pink-400 border-pink-500/30';
      case StoreType.ALIEXPRESS: return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-zinc-500/20 text-zinc-400 border-zinc-500/30';
    }
  };

  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
    : null;

  return (
    <div className="group relative bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-2xl rounded-[2.5rem] overflow-hidden hover:border-indigo-500/50 hover:bg-zinc-900/60 transition-all duration-500 flex flex-col h-full shadow-2xl shadow-black/50">
      {/* Image Container */}
      <div className="aspect-[4/5] relative overflow-hidden">
        <img 
          src={product.imageUrl} 
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
        />
        
        {/* Dark Vignette on Image */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.tag && (
            <span className="bg-indigo-600 text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest shadow-2xl">
              {product.tag}
            </span>
          )}
          {discount && (
            <span className="bg-emerald-500 text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest shadow-2xl">
              -{discount}%
            </span>
          )}
        </div>
        
        {/* Rating overlay */}
        <div className="absolute bottom-4 right-4 flex items-center gap-1.5 bg-black/40 backdrop-blur-xl px-3 py-1.5 rounded-2xl text-xs font-bold text-yellow-400 border border-white/10">
          <span>⭐</span>
          <span>{product.rating}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-4">
            <span className={`inline-block text-[10px] font-black px-3 py-1 rounded-full border mb-3 uppercase tracking-widest ${getStoreStyles(product.store)}`}>
            {product.store}
            </span>
            <h3 className="text-lg font-bold text-white line-clamp-2 leading-snug group-hover:text-indigo-300 transition-colors">
            {product.title}
            </h3>
        </div>

        <div className="mt-auto pt-4 flex items-center justify-between">
          <div className="flex flex-col">
            {product.originalPrice && (
              <span className="text-xs text-zinc-500 line-through font-medium">R$ {product.originalPrice.toFixed(2)}</span>
            )}
            <div className="flex items-baseline gap-1">
                <span className="text-zinc-400 text-xs font-bold">R$</span>
                <span className="text-3xl font-black text-white tracking-tighter">{product.price.toFixed(2)}</span>
            </div>
          </div>
          
          <a 
            href={product.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 bg-white text-black rounded-3xl flex items-center justify-center hover:bg-indigo-400 hover:text-white transition-all transform hover:rotate-12 active:scale-90 shadow-xl shadow-white/5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </div>
  );
};
