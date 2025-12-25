
export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  soldCount: number;
  image: string;
  category: string;
  description: string;
  isNew?: boolean;
  onSale?: boolean;
  discount?: string;
}

export interface CartItem extends Product {
  quantity: number;
}
