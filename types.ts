
export enum StoreType {
  SHOPEE = 'Shopee',
  TIKTOK = 'TikTok Shop',
  ALIEXPRESS = 'AliExpress',
  AMAZON = 'Amazon'
}

export interface Product {
  id: string;
  title: string;
  imageUrl: string;
  store: StoreType;
  link: string;
  catalogNumber: number;
  tag?: string;
  category: string;
  clicks?: number; // Campo dinâmico para o ranking
}

export interface Category {
  id: string;
  label: string;
}
