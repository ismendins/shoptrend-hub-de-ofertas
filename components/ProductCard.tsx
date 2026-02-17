
import React from 'react';
import { Product, StoreType } from '../types';

interface ProductCardProps {
  product: Product;
  onTrackClick?: (id: string) => void;
  isPopular?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onTrackClick, isPopular }) => {
  const getStoreStyles = (store: StoreType) => {
    switch (store) {
      case StoreType.SHOPEE: return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      case StoreType.TIKTOK: return 'bg-pink-500/20 text-pink-400 border-pink-500/30';
      case StoreType.ALIEXPRESS: return 'bg-red-500/20 text-red-400 border-red-500/30';
      case StoreType.AMAZON: return 'bg-orange-600/20 text-[#ff6b00] border-[#ff6b00]/30';
      default: return 'bg-zinc-500/20 text-zinc-400 border-zinc-500/30';
    }
  };

  const formattedCatalogNumber = product.catalogNumber.toString().padStart(2, '0');

  const handleClick = () => {
    if (onTrackClick) onTrackClick(product.id);
  };

  return (
    <a 
      href={product.link}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="group relative bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-2xl rounded-[2.5rem] overflow-hidden hover:border-brand-800/50 hover:bg-zinc-900/60 transition-all duration-500 flex flex-col h-full shadow-2xl shadow-black/50 cursor-pointer"
    >
      <style>{`
        @keyframes tagPulse {
          0%, 100% { transform: scale(1); box-shadow: 0 0 10px rgba(240, 61, 51, 0.4); }
          50% { transform: scale(1.05); box-shadow: 0 0 20px rgba(240, 61, 51, 0.8); }
        }
        .popular-tag {
          animation: tagPulse 2s infinite ease-in-out;
          background: #f03d33 !important;
          color: white !important;
        }
      `}</style>

      {/* Image Container */}
      <div className="aspect-[3/4] relative overflow-hidden">
        <img 
          src={product.imageUrl} 
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
        
        {/* Badge de Tag */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {isPopular ? (
            <span className="popular-tag text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest shadow-2xl flex items-center gap-1.5">
              🔥 POPULAR
            </span>
          ) : product.tag && (
            <span className="bg-brand-800 text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest shadow-2xl">
              {product.tag}
            </span>
          )}
        </div>
        
        {/* Catalog Number Overlay */}
        <div className="absolute bottom-4 right-4 flex items-center gap-1.5 bg-black/60 backdrop-blur-xl px-4 py-2 rounded-2xl text-xs font-black text-white border border-white/10 group-hover:bg-brand-800/80 transition-colors">
          <span className="opacity-70 text-[10px]">CATÁLOGO</span>
          <span className="text-brand-400 group-hover:text-white">#{formattedCatalogNumber}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-4">
            <span className={`inline-block text-[10px] font-black px-3 py-1 rounded-full border mb-3 uppercase tracking-widest ${getStoreStyles(product.store)}`}>
              {product.store}
            </span>
            <h3 className="text-lg font-bold text-white line-clamp-3 leading-snug group-hover:text-brand-400 transition-colors">
              {product.title}
            </h3>
        </div>

        <div className="mt-auto pt-4 flex items-center justify-between">
          <span className="text-brand-500 text-[12px] font-black uppercase tracking-widest group-hover:translate-x-1 transition-transform inline-flex items-center gap-2">
            Ver detalhes
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </span>
          <div className="flex flex-col items-end">
            {isPopular && product.clicks && (
              <span className="text-[9px] text-zinc-500 font-bold uppercase mt-1 tracking-wider">
                {product.clicks} acessos
              </span>
            )}
          </div>
        </div>
      </div>
    </a>
  );
};
