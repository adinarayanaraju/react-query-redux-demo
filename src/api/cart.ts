import type { CartItem } from '../types';

// Temporary cart store
let cart: CartItem[] = [];

// Add item to cart
export const addToCartApi = (item: CartItem): Promise<CartItem[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const found = cart.find((i) => i.id === item.id);
      if (found) {
        found.qty += item.qty;
      } else {
        cart.push({ ...item });
      }
      resolve(cart);
    }, 300);
  });
};

// Remove item from cart
export const removeFromCartApi = (id: string): Promise<CartItem[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      cart = cart.filter((i) => i.id !== id);
      resolve(cart);
    }, 300);
  });
};

// Clear cart
export const clearCartApi = (): Promise<CartItem[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      cart = [];
      resolve(cart);
    }, 300);
  });
};

// Fetch current cart
export const fetchCartApi = (): Promise<CartItem[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cart);
    }, 300);
  });
};


// Points covered:

// Fake cart operations: add, remove, clear, fetch

// Mock server response delay

// Fully typed with TypeScript