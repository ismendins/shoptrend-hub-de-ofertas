
import { StoreType, Product, Category } from './types';

export const CATEGORIES: Category[] = [
  { id: 'all', label: 'Todos', icon: '🛍️' },
  { id: 'tech', label: 'Tech', icon: '💻' },
  { id: 'home', label: 'Casa', icon: '🏠' },
  { id: 'beauty', label: 'Beleza', icon: '💄' },
  { id: 'gadgets', label: 'Acessórios', icon: '🔌' },
];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    title: 'Fone de Ouvido Bluetooth Hi-Fi Pro',
    price: 89.90,
    originalPrice: 159.00,
    imageUrl: 'https://picsum.photos/seed/tech1/600/600',
    store: StoreType.SHOPEE,
    link: '#',
    rating: 4.8,
    reviews: 1240,
    tag: 'Mais Vendido',
    category: 'tech'
  },
  {
    id: '2',
    title: 'Luminária RGB Inteligente TikTok Style',
    price: 124.50,
    originalPrice: 199.00,
    imageUrl: 'https://picsum.photos/seed/lamp/600/600',
    store: StoreType.TIKTOK,
    link: '#',
    rating: 4.9,
    reviews: 850,
    tag: 'Viral no TikTok',
    category: 'home'
  },
  {
    id: '3',
    title: 'Smartwatch Ultra Series 9 AMOLED',
    price: 245.00,
    originalPrice: 450.00,
    imageUrl: 'https://picsum.photos/seed/watch/600/600',
    store: StoreType.ALIEXPRESS,
    link: '#',
    rating: 4.7,
    reviews: 3200,
    tag: 'Melhor Preço',
    category: 'tech'
  },
  {
    id: '4',
    title: 'Kit de Pincéis Profissionais 12 Peças',
    price: 45.90,
    originalPrice: 89.00,
    imageUrl: 'https://picsum.photos/seed/beauty/600/600',
    store: StoreType.SHOPEE,
    link: '#',
    rating: 4.9,
    reviews: 540,
    category: 'beauty'
  },
  {
    id: '5',
    title: 'Mini Projetor Portátil 4K UHD',
    price: 399.00,
    originalPrice: 750.00,
    imageUrl: 'https://picsum.photos/seed/projector/600/600',
    store: StoreType.ALIEXPRESS,
    link: '#',
    rating: 4.6,
    reviews: 150,
    tag: 'Novidade',
    category: 'tech'
  },
  {
    id: '6',
    title: 'Organizador de Cabos Magnético',
    price: 19.90,
    originalPrice: 35.00,
    imageUrl: 'https://picsum.photos/seed/cable/600/600',
    store: StoreType.TIKTOK,
    link: '#',
    rating: 4.8,
    reviews: 2100,
    category: 'gadgets'
  },
  {
    id: '7',
    title: 'Teclado Mecânico Compacto RGB',
    price: 167.00,
    originalPrice: 280.00,
    imageUrl: 'https://picsum.photos/seed/keyboard/600/600',
    store: StoreType.ALIEXPRESS,
    link: '#',
    rating: 4.8,
    reviews: 950,
    tag: 'Escolha do Editor',
    category: 'tech'
  },
  {
    id: '8',
    title: 'Umidificador de Ar Estilo Vulcão',
    price: 78.00,
    originalPrice: 120.00,
    imageUrl: 'https://picsum.photos/seed/humid/600/600',
    store: StoreType.TIKTOK,
    link: '#',
    rating: 4.9,
    reviews: 430,
    category: 'home'
  }
];
