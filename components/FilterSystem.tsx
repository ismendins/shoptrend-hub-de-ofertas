
import React from 'react';
import { Category, StoreType } from '../types';

export interface FilterState {
  category: string;
  store: string | 'all';
  sortBy: 'newest' | 'oldest' | 'popular';
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
    <div className="w-full space-y-8 mb-8 animate-in fade-in slide-in-from-top-4 duration-700">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Filtro de Categoria */}
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
              <option value="newest">Mais recentes</option>
              <option value="popular">Mais populares</option>
              <option value="oldest">Mais antigos</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500 group-hover:text-brand-500 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
