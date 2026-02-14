
import React, { useState, useMemo, useEffect } from 'react';
import { MOCK_PRODUCTS, CATEGORIES } from '../constants';
import { ProductCard } from './ProductCard';
import { FilterSystem, FilterState } from './FilterSystem';

export const PromotionsScreen: React.FC = () => {
  const [filters, setFilters] = useState<FilterState>({
    category: 'all',
    store: 'all',
    sortBy: 'default'
  });

  const [itemsPerPage, setItemsPerPage] = useState<number>(25);
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Resetar página quando filtros ou limite mudar
  useEffect(() => {
    setCurrentPage(1);
  }, [filters, itemsPerPage]);

  const filteredProducts = useMemo(() => {
    let result = [...MOCK_PRODUCTS];

    // Filtro de Categoria
    if (filters.category !== 'all') {
      result = result.filter(p => p.category === filters.category);
    }

    // Filtro de Loja
    if (filters.store !== 'all') {
      result = result.filter(p => p.store === filters.store);
    }

    // Ordenação
    switch (filters.sortBy) {
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return result;
  }, [filters]);

  const totalItems = filteredProducts.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredProducts.slice(start, start + itemsPerPage);
  }, [filteredProducts, currentPage, itemsPerPage]);

  return (
    <section className="pt-32 pb-24 max-w-[1600px] mx-auto px-4 min-h-screen">
      <div className="mb-16">
        <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">
          Todos os <span className="text-brand-500 underline decoration-brand-800/30 underline-offset-8">Achadinhos</span>
        </h1>
        <p className="text-zinc-500 text-lg">Navegue por nosso catálogo completo. Clique em qualquer item para ver na loja.</p>
      </div>

      <FilterSystem 
        categories={CATEGORIES} 
        filters={filters} 
        onFilterChange={setFilters} 
      />

      {/* Barra de utilidades logo acima da lista */}
      <div className="mb-6 flex justify-end">
        <div className="flex flex-col gap-2 min-w-[180px]">
          <label className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] ml-2">Itens por página</label>
          <div className="relative group">
            <select 
              value={itemsPerPage}
              onChange={(e) => setItemsPerPage(Number(e.target.value))}
              className="w-full bg-zinc-900/50 border border-zinc-800 text-zinc-300 px-4 py-2.5 rounded-xl font-bold focus:outline-none focus:border-brand-800 transition-colors backdrop-blur-md appearance-none cursor-pointer text-sm"
            >
              <option value={25}>25 itens</option>
              <option value={50}>50 itens</option>
              <option value={100}>100 itens</option>
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500 group-hover:text-brand-500 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {paginatedProducts.map((product, idx) => (
          <div key={`${product.id}-${idx}`} className="animate-in fade-in zoom-in-95 duration-500">
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 ? (
        <div className="py-32 text-center bg-zinc-900/30 backdrop-blur-xl rounded-[3rem] border border-zinc-800 border-dashed">
          <div className="flex justify-center text-zinc-600 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Nenhum item encontrado</h3>
          <p className="text-zinc-500">Tente ajustar seus filtros para encontrar outros produtos.</p>
          <button 
            onClick={() => setFilters({ category: 'all', store: 'all', sortBy: 'default' })}
            className="mt-8 text-brand-500 font-bold hover:text-white transition-colors"
          >
            Limpar todos os filtros
          </button>
        </div>
      ) : (
        /* Controles de Paginação */
        <div className="mt-20 flex flex-col items-center gap-6">
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800 text-zinc-400 hover:text-white hover:border-brand-800 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            
            <div className="flex items-center gap-1 px-4">
               <span className="text-white font-black text-lg">{currentPage}</span>
               <span className="text-zinc-600 font-bold mx-1">/</span>
               <span className="text-zinc-500 font-bold">{totalPages}</span>
            </div>

            <button 
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className="p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800 text-zinc-400 hover:text-white hover:border-brand-800 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
          
          <p className="text-zinc-500 text-sm font-medium">
            Mostrando {paginatedProducts.length} de {totalItems} achadinhos encontrados
          </p>
        </div>
      )}
    </section>
  );
};
