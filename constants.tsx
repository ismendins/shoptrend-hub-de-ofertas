
import { StoreType, Product, Category } from './types';

export const CATEGORIES: Category[] = [
  { id: 'all', label: 'Todos', icon: '' },
  { id: 'tech', label: 'Tech', icon: '' },
  { id: 'home', label: 'Casa', icon: '' },
  { id: 'pets', label: 'Animais de Estimação', icon: ''},
  { id: 'beauty', label: 'Beleza', icon: '' },
  { id: 'gadgets', label: 'Acessórios', icon: '' },
];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    title: 'Fone de Ouvido Bluetooth Hi-Fi Pro',
    price: 89.90,
    originalPrice: 159.00,
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600&h=600&auto=format&fit=crop',
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
    imageUrl: 'https://images.unsplash.com/photo-1534073828943-f801091bb18c?q=80&w=600&h=600&auto=format&fit=crop',
    store: StoreType.TIKTOK,
    link: '#',
    rating: 4.9,
    reviews: 850,
    tag: 'Viral no TikTok',
    category: 'home'
  },
  {
    id: 'amz-1',
    title: 'Echo Pop | Smart speaker compacto com Alexa',
    price: 349.00,
    originalPrice: 399.00,
    imageUrl: 'https://images.unsplash.com/photo-1589492477829-5e65395b66cc?q=80&w=600&h=600&auto=format&fit=crop',
    store: StoreType.AMAZON,
    link: '#',
    rating: 4.9,
    reviews: 15400,
    tag: 'Escolha Amazon',
    category: 'tech'
  },
  {
    id: '3',
    title: 'Smartwatch Ultra Series 9 AMOLED',
    price: 245.00,
    originalPrice: 450.00,
    imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=600&h=600&auto=format&fit=crop',
    store: StoreType.ALIEXPRESS,
    link: '#',
    rating: 4.7,
    reviews: 3200,
    tag: 'Melhor Preço',
    category: 'tech'
  },
  {
    id: 'amz-2',
    title: 'Kindle 11ª Geração – Mais leve e com tela de 300 ppi',
    price: 499.00,
    originalPrice: 549.00,
    imageUrl: 'https://m.media-amazon.com/images/I/51KaXPehm2L._AC_SL1500_.jpg',
    store: StoreType.AMAZON,
    link: '#',
    rating: 5.0,
    reviews: 8900,
    tag: 'Oferta do Dia',
    category: 'tech'
  },
  {
    id: '4',
    title: 'Kit de Pincéis Profissionais 12 Peças',
    price: 45.90,
    originalPrice: 89.00,
    imageUrl: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=600&h=600&auto=format&fit=crop',
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
    imageUrl: 'https://images.unsplash.com/photo-1535016120720-40c646bebbbb?q=80&w=600&h=600&auto=format&fit=crop',
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
    imageUrl: 'https://images.unsplash.com/photo-1544333316-f3316f78816c?q=80&w=600&h=600&auto=format&fit=crop',
    store: StoreType.TIKTOK,
    link: '#',
    rating: 4.8,
    reviews: 2100,
    category: 'gadgets'
  }
];
