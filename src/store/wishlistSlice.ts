import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Product } from '../types';

interface WishlistState {
  items: Product[];
}

const initialState: WishlistState = { items: [] };

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist(state, action: PayloadAction<Product>) {
      const found = state.items.find((i) => i.id === action.payload.id);
      if (!found) {
        state.items.push(action.payload);
      }
    },
    removeFromWishlist(state, action: PayloadAction<string>) {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
