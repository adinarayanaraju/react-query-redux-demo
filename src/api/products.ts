import type { Product } from '../types';

const products: Product[] = [
  { id: 'p1', name: 'Shiny Hat', price: 19.99, inStock: 10, discount: 10 },
  { id: 'p2', name: 'Puffer Jacket', price: 49.5, inStock: 5 },
  { id: 'p3', name: 'Sticker Pack', price: 9.75, inStock: 0 },
  { id: 'p4', name: 'Premium Jacket', price: 99.99, inStock: 3, discount: 20 },
];

// Generate more products
for (let i = 5; i <= 30; i++) {
  products.push({
    id: `p${i}`,
    name: `Product ${i}`,
    price: Math.floor(Math.random() * 100) + 1,
    inStock: Math.floor(Math.random() * 20),
    discount: Math.random() > 0.7 ? Math.floor(Math.random() * 20) + 5 : undefined,
    demand: Math.floor(Math.random() * 10) + 1,
  });
}

// Mock prices
const mockPrices: Record<string, number> = {};
products.forEach(p => {
  mockPrices[p.id] = p.price;
});


// Mock availability
const mockAvailability: Record<string, number> = {};
products.forEach(p => {
  mockAvailability[p.id] = p.inStock;
});

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
export const fetchAvailability = (ids: string[]): Promise<Record<string, number>> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const avail: Record<string, number> = {};
      ids.forEach((id) => (avail[id] = mockAvailability[id] ?? 0));
      resolve(avail);
    }, 400);
  });
};


// Points covered:

// Fake products API with prices and availability

// Simulates server delay

// Handles multiple products for React Query fetching