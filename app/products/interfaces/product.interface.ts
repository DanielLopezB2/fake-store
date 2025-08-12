import type { Category } from '~/categories/interfaces/category.interface';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: Category;
  image: string;
  rating: Rating;
}

export interface Rating {
  rate: number;
  count: number;
}
