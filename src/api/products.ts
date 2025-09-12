import type { Product } from '../types';

export interface Product {
  id: string;
  name: string;
  price: number;
  inStock: boolean;
  discount?: number;
}

const products: Product[] = [
  { id: 'p1', name: 'Shiny Hat', price: 19.99, inStock: true, discount: 10 },
  { id: 'p2', name: 'Puffer Jacket', price: 49.5, inStock: true },
  { id: 'p3', name: 'Sticker Pack', price: 9.75, inStock: false },
  { id: 'p4', name: 'Premium Jacket', price: 99.99, inStock: true, discount: 20 },
];
// Mock prices
const mockPrices: Record<string, number> = {
  p1: 19.99,
  p2: 49.5,
  p3: 9.75,
  p4: 79.99,
  p5: 24.99
};

// Mock availability
const mockAvailability: Record<string, boolean> = {
  p1: true,
  p2: true,
  p3: false,
  p4: true,
  p5: true
};

// Fetch products list
export const fetchProducts = () =>
  new Promise<Product[]>((resolve) => setTimeout(() => resolve(products), 500));

// Fetch prices for given product IDs
export const fetchPrices = (ids: string[]): Promise<Record<string, number>> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const prices: Record<string, number> = {};
      ids.forEach((id) => (prices[id] = mockPrices[id] ?? 0));
      resolve(prices);
    }, 400);
  });
};

// Check availability for given product IDs
export const fetchAvailability = (ids: string[]): Promise<Record<string, boolean>> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const avail: Record<string, boolean> = {};
      ids.forEach((id) => (avail[id] = mockAvailability[id] ?? false));
      resolve(avail);
    }, 400);
  });
};


// Points covered:

// Fake products API with prices and availability

// Simulates server delay

// Handles multiple products for React Query fetching