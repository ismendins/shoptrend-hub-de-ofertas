import React, { useState, useMemo, useEffect } from 'react';
import { CATEGORIES } from '../constants';
import { ProductCard } from './ProductCard';
import { FilterSystem, FilterState } from './FilterSystem';
import { ProductService } from '../services/api';
import { Product } from '../types';

interface PromotionsScreenProps {
  initialStore?: string;
}

export const PromotionsScreen: React.FC<PromotionsScreenProps> = ({ initialStore = 'all' }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const [filters, setFilters] = useState<FilterState>({
    category: 'all',
    store: initialStore,
    sortBy: 'popular'
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [itemsPerPage, setItemsPerPage] = useState(25);
  const [currentPage, setCurrentPage] = useState(1);

  // Buscar produtos do backend
  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const data = await ProductService.getProducts();
      setProducts(data);
    } catch (err) {
      console.error('Erro:', err);
      setError('Não foi possível conectar ao servidor. Tente novamente mais tarde.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
  window.scrollTo({ top: 0, behavior: "smooth" });
}, [currentPage, filters]);

  // Atualizar filtro de loja quando initialStore mudar
  useEffect(() => {
    setFilters(prev => ({ ...prev, store: initialStore }));
  }, [initialStore]);

  // Rastrear clique e atualizar no backend
  const handleTrackClick = async (id: string) => {
    // Atualização otimista no UI
    setProducts(prev => prev.map(p => 
      p.id === id ? { ...p, clicks: (p.clicks || 0) + 1 } : p
    ));
    
    // Sincronizar com o backend
    await ProductService.recordClick(id);
  };

  // Identificar os 3 produtos mais populares
  const top3Ids = useMemo(() => {
    return [...products]
      .sort((a, b) => (b.clicks || 0) - (a.clicks || 0))
      .slice(0, 3)
      .filter(p => (p.clicks || 0) > 0)
      .map(p => p.id);
  }, [products]);

  // Filtrar e ordenar produtos
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filtro de busca
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(p => 
        p.title.toLowerCase().includes(q) || 
        `#${p.catalogNumber}`.includes(q)
      );
    }

    // Filtro de categoria
    if (filters.category !== 'all') {
      result = result.filter(p => p.category === filters.category);
    }

    // Filtro de loja
    if (filters.store !== 'all') {
      result = result.filter(p => p.store === filters.store);
    }

    // Ordenação
    result.sort((a, b) => {
      if (filters.sortBy === 'popular') {
        return (b.clicks || 0) - (a.clicks || 0) || b.catalogNumber - a.catalogNumber;
      }
      if (filters.sortBy === 'newest') return b.catalogNumber - a.catalogNumber;
      if (filters.sortBy === 'oldest') return a.catalogNumber - b.catalogNumber;
      return 0;
    });

    return result;
  }, [products, filters, searchQuery]);

  const totalItems = filteredProducts.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredProducts.slice(start, start + itemsPerPage);
  }, [filteredProducts, currentPage, itemsPerPage]);

  // Resetar página ao mudar filtros
  useEffect(() => { 
    setCurrentPage(1); 
  }, [filters, searchQuery, itemsPerPage]);

  // Estado de loading
  if (loading) {
    return (
      <div className="pt-60 flex flex-col items-center justify-center min-h-screen">
        <div className="relative">
          <div className="w-20 h-20 border-4 border-zinc-800 border-t-brand-500 rounded-full animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center font-black text-brand-500 text-xs italic">S</div>
        </div>
        <p className="mt-8 text-zinc-500 font-black tracking-[0.3em] uppercase text-xs animate-pulse">
          Carregando produtos...
        </p>
      </div>
    );
  }

  // Estado de erro
  if (error) {
    return (
      <div className="pt-60 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <div className="w-16 h-16 bg-red-500/10 text-red-500 rounded-full flex items-center justify-center mb-6 border border-red-500/20">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
            <path d="M12 9v4"/>
            <path d="M12 17h.01"/>
          </svg>
        </div>
        <h2 className="text-2xl font-black mb-2 uppercase tracking-tighter">Erro na Conexão</h2>
        <p className="text-zinc-500 mb-8 max-w-sm">{error}</p>
        <button 
          onClick={fetchProducts}
          className="px-8 py-4 bg-brand-500 text-white font-black rounded-2xl hover:bg-brand-600 transition-all active:scale-95 shadow-xl shadow-brand-500/20"
        >
          TENTAR NOVAMENTE
        </button>
      </div>
    );
  }

  return (
    <section className="pt-32 pb-24 max-w-[1600px] mx-auto px-4 min-h-screen">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
        <div>
          <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">
            Todos os <span className="text-brand-500 underline decoration-brand-800/30 underline-offset-8">Achadinhos</span>
          </h1>
          <p className="text-zinc-500 text-lg">Ranking atualizado em tempo real baseado em acessos.</p>
        </div>

        {/* Busca */}
        <div className="relative w-full lg:max-w-md">
          <input 
            type="text" 
            placeholder="Pesquisar por nome ou #número..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-zinc-900/80 border-2 border-zinc-800 focus:border-brand-800 text-white px-6 py-4 rounded-[2rem] font-bold transition-all outline-none pl-14 backdrop-blur-2xl shadow-2xl shadow-brand-800/5"
          />
          <div className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Filtros */}
      <FilterSystem 
        categories={CATEGORIES} 
        filters={filters} 
        onFilterChange={setFilters} 
      />

      {/* Info e Seletor de Itens */}
      <div className="mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 px-4 py-3 bg-brand-800/5 border border-brand-800/10 rounded-2xl w-full sm:w-auto">
          <span className="text-brand-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="16" x2="12" y2="12"/>
              <line x1="12" y1="8" x2="12.01" y2="8"/>
            </svg>
          </span>
          <p className="text-zinc-400 text-sm font-medium">
            Mostrando {totalItems} resultados
          </p>
        </div>

        <div className="flex flex-col gap-2 min-w-[180px] w-full sm:w-auto">
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
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Grid de Produtos */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {paginatedProducts.map((product) => (
            <div key={product.id} className="animate-in fade-in zoom-in-95 duration-500">
              <ProductCard 
                product={product}
                onTrackClick={handleTrackClick}
                isPopular={top3Ids.includes(product.id)}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="py-32 text-center bg-zinc-900/30 backdrop-blur-xl rounded-[3rem] border border-zinc-800 border-dashed">
          <h3 className="text-2xl font-bold text-white mb-2">Nenhum item encontrado</h3>
          <button 
            onClick={() => setSearchQuery('')}
            className="mt-8 text-brand-500 font-bold hover:text-white transition-colors"
          >
            Limpar busca
          </button>
        </div>
      )}

      {/* Paginação */}
      {totalPages > 1 && (
        <div className="mt-20 flex flex-col items-center gap-6">
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800 text-zinc-400 hover:text-white disabled:opacity-30 transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6"/>
              </svg>
            </button>
            <span className="text-white font-black text-lg">{currentPage} / {totalPages}</span>
            <button 
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className="p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800 text-zinc-400 hover:text-white disabled:opacity-30 transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};