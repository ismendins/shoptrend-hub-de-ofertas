export enum StoreType {
  SHOPEE = 'Shopee',
  TIKTOK = 'TikTok Shop',
  ALIEXPRESS = 'AliExpress',
  AMAZON = 'Amazon'
}

export interface Product {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  imageUrl: string;
  store: StoreType;
  link: string;
  rating: number;
  reviews: number;
  tag?: string;
  category: string;
}

export interface Category {
  id: string;
  label: string;
  icon: string;
}
