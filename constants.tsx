
import { StoreType, Product, Category } from './types';

export const CATEGORIES: Category[] = [
  { id: 'all', label: 'Todos'},
  { id: 'tech', label: 'Tech'},
  { id: 'home', label: 'Casa'},
  { id: 'pets', label: 'Animais de Estimação'},
  { id: 'beauty', label: 'Beleza'},
  { id: 'gadgets', label: 'Acessórios'},
];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    title: 'Fone de Ouvido QKZ AK6 Intra-Auricular, Driver Dinâmico de 10mm',
    imageUrl: 'https://m.media-amazon.com/images/I/61dRAo4rlGL._AC_AIweblab1006854,T4_FMavif_SF1050,1050_PQ64_.jpg?aicid=detailPage-mediaBlock',
    store: StoreType.AMAZON,
    link: 'https://amzn.to/4tGtchE',
    catalogNumber: 1,
    tag: 'Mais Vendido',
    category: 'tech'
  },
  {
    id: '2',
    title: 'JBL, Caixa de Som, Boombox 4, Bluetooth, Som JBL Pro, AI Sound Boost',
    imageUrl: 'https://m.media-amazon.com/images/I/71FPDlwePVL._AC_AIweblab1006854,T4_FMavif_SF1050,1050_PQ64_.jpg?aicid=detailPage-mediaBlock',
    store: StoreType.AMAZON,
    link: 'https://amzn.to/4rvXMJh',
    catalogNumber: 2,
    tag: 'Escolha Amazon',
    category: 'tech'
  },
  {
    id: '3',
    title: 'Mini Aspirador Portátil 2 em 1 – Função Aspirar e Soprar',
    imageUrl: 'https://m.media-amazon.com/images/I/512WnDmBfAL._AC_AIweblab1006854,T4_FMavif_SF1050,1050_PQ64_.jpg?aicid=detailPage-mediaBlock',
    store: StoreType.AMAZON,
    link: 'https://amzn.to/3OJWeg6',
    catalogNumber: 3,
    tag: 'Escolha Amazon',
    category: 'home'
  },
  {
    id: '4',
    title: 'Loofah-Bath-Sponge Conjunto de malha de renda >> 2 esponjas em 1 da Shower Bouquet',
    imageUrl: 'https://m.media-amazon.com/images/I/819M2qdPwXL._AC_AIweblab1006854,T4_FMavif_SF1050,1050_PQ64_.jpg?aicid=detailPage-mediaBlock',
    store: StoreType.AMAZON,
    link: 'https://amzn.to/4rMlWPi',
    catalogNumber: 4,
    tag: 'Melhor Preço',
    category: 'home'
  },
  {
    id: '5',
    title: 'Esfregão Elétrico de Limpeza Giratório 9 em 1',
    imageUrl: 'https://m.media-amazon.com/images/I/61I1vfHZyRL._AC_AIweblab1006854,T4_FMavif_SF1050,1050_PQ64_.jpg?aicid=detailPage-mediaBlock',
    store: StoreType.AMAZON,
    link: 'https://m.media-amazon.com/images/I/61I1vfHZyRL._AC_AIweblab1006854,T4_FMavif_SF1050,1050_PQ64_.jpg?aicid=detailPage-mediaBlock',
    catalogNumber: 5,
    tag: 'Oferta do Dia',
    category: 'home'
  },
  {
    id: '6',
    title: 'ONXE Projetor de lâmpada lunar com controle remoto – Luz noturna de farol para crianças, luz de lua',
    imageUrl: 'https://m.media-amazon.com/images/I/71pEeY7ABSL._AC_AIweblab1006854,T4_FMavif_SF1050,1050_PQ64_.jpg?aicid=detailPage-mediaBlock',
    store: StoreType.AMAZON,
    link: 'https://amzn.to/4kCyqqs',
    catalogNumber: 6,
    category: 'home'
  },
  {
    id: '7',
    title: 'Escova de cabelo Mister – Escova pulverizadora de névoa de cabelo',
    imageUrl: 'https://m.media-amazon.com/images/I/7132SqDcyQL._AC_AIweblab1006854,T4_FMavif_SF1050,1050_PQ64_.jpg?aicid=detailPage-mediaBlock',
    store: StoreType.AMAZON,
    link: 'https://amzn.to/3MNMvVB',
    catalogNumber: 7,
    tag: 'Novidade',
    category: 'beauty'
  },
  {
    id: '8',
    title: '4 clipes de garra de nuvem para mulheres, clipes macios flexíveis e inquebráveis',
    imageUrl: 'https://m.media-amazon.com/images/I/71OAnFRWXFL._AC_AIweblab1006854,T4_FMavif_SF1050,1050_PQ64_.jpg?aicid=detailPage-mediaBlocko-3m.webp',
    store: StoreType.TIKTOK,
    link: 'https://amzn.to/46JtJW5',
    catalogNumber: 8,
    category: 'gadgets'
  }
];
