// -----------------------------
// Global TypeScript types
// -----------------------------

// Product type
export interface Product {
  id: string;
  name: string;
  price?: number;
  inStock?: boolean;
}

// Cart Item type
export interface CartItem {
  id: string;
  name: string;
  qty: number;
  price?: number;
  inStock?: boolean;
}

// Auth type
export interface User {
  id: string;
  name: string;
  token: string;
}


// Points covered:

// Strong typing for products, cart items, and user auth.

// Ensures TypeScript safety across the app.