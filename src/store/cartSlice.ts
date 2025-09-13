import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { CartItem, Product } from '../types';

interface CartState {
  items: CartItem[];
}

const initialState: CartState = { items: [] };

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<Product>) {
      const found = state.items.find((i) => i.id === action.payload.id);
      if (found) {
        found.qty += 1;
      } else {
        state.items.push({ ...action.payload, qty: 1 });
      }
    },
    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },
    setQty(state, action: PayloadAction<{ id: string; qty: number }>) {
      const found = state.items.find((i) => i.id === action.payload.id);
      if (found) found.qty = Math.max(1, action.payload.qty);
    },
    clearCart(state) {
      state.items = [];
    }
  }
});

// Export actions
export const { addItem, removeItem, setQty, clearCart } = cartSlice.actions;

// Export reducer
export default cartSlice.reducer;


// ✅ Points covered:

// Redux Toolkit slice for cart operations

// Actions: addItem, removeItem, setQty, clearCart

// Fully typed with CartItem interface