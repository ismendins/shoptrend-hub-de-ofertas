
import React from 'react';
import { Category, StoreType } from '../types';

export interface FilterState {
  category: string;
  store: string | 'all';
  sortBy: 'rating' | 'default';
}

interface FilterSystemProps {
  categories: Category[];
  filters: FilterState;
  onFilterChange: (newFilters: FilterState) => void;
}

export const FilterSystem: React.FC<FilterSystemProps> = ({ 
  categories, 
  filters, 
  onFilterChange 
}) => {
  const updateFilter = (key: keyof FilterState, value: any) => {
    onFilterChange({ ...filters, [key]: value });
  };

  return (
    <div className="w-full space-y-8 mb-12 animate-in fade-in slide-in-from-top-4 duration-700">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Filtro de Categoria (Dropdown) */}
        <div className="flex flex-col gap-3">
          <label className="text-xs font-black text-zinc-500 uppercase tracking-[0.2em] ml-2">Categoria</label>
          <div className="relative group">
            <select 
              value={filters.category}
              onChange={(e) => updateFilter('category', e.target.value)}
              className="w-full bg-zinc-900/50 border border-zinc-800 text-zinc-300 px-4 py-4 rounded-2xl font-bold focus:outline-none focus:border-brand-800 transition-colors backdrop-blur-md appearance-none cursor-pointer"
            >
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.label}
                </option>
              ))}
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500 group-hover:text-brand-500 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </div>
          </div>
        </div>

        {/* Filtro de Loja */}
        <div className="flex flex-col gap-3">
          <label className="text-xs font-black text-zinc-500 uppercase tracking-[0.2em] ml-2">Plataforma</label>
          <div className="relative group">
            <select 
              value={filters.store}
              onChange={(e) => updateFilter('store', e.target.value)}
              className="w-full bg-zinc-900/50 border border-zinc-800 text-zinc-300 px-4 py-4 rounded-2xl font-bold focus:outline-none focus:border-brand-800 transition-colors backdrop-blur-md appearance-none cursor-pointer"
            >
              <option value="all">Todas as Lojas</option>
              {Object.values(StoreType).map(store => (
                <option key={store} value={store}>{store}</option>
              ))}
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500 group-hover:text-brand-500 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </div>
          </div>
        </div>

        {/* Ordenação */}
        <div className="flex flex-col gap-3">
          <label className="text-xs font-black text-zinc-500 uppercase tracking-[0.2em] ml-2">Ordenar por</label>
          <div className="relative group">
            <select 
              value={filters.sortBy}
              onChange={(e) => updateFilter('sortBy', e.target.value)}
              className="w-full bg-zinc-900/50 border border-zinc-800 text-zinc-300 px-4 py-4 rounded-2xl font-bold focus:outline-none focus:border-brand-800 transition-colors backdrop-blur-md appearance-none cursor-pointer"
            >
              <option value="default">Destaques</option>
              <option value="rating">Melhor Avaliados</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500 group-hover:text-brand-500 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </div>
          </div>
        </div>
      </div>

      {/* Info de Resultados */}
      <div className="flex items-center gap-3 px-2 py-4 bg-brand-800/5 border border-brand-800/10 rounded-2xl">
        <span className="text-brand-500">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
        </span>
        <p className="text-zinc-400 text-sm font-medium">
          Dica: Clique em qualquer card para ser redirecionado automaticamente para a oferta oficial.
        </p>
      </div>
    </div>
  );
};