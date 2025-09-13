// -----------------------------
// Global TypeScript types
// -----------------------------

// Product type
export interface Product {
  id: string;
  name: string;
  price: number;
  inStock: number;
  discount?: number;
  demand?: number;
}

// Cart Item type
export interface CartItem {
  id: string;
  name: string;
  qty: number;
  price: number;
  inStock: number;
}

// Auth type
export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  token: string;
  role?: 'admin' | 'user';
}


// Points covered:

// Strong typing for products, cart items, and user auth.

// Ensures TypeScript safety across the app.