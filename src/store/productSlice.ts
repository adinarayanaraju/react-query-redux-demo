import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Product } from '../types';

interface ProductState {
  products: Product[];
}

const initialState: ProductState = { products: [] };

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<Product[]>) {
      state.products = action.payload;
    },
    setProductStock(state, action: PayloadAction<{ id: string; stock: number }>) {
      const product = state.products.find(p => p.id === action.payload.id);
      if (product) {
        product.inStock = action.payload.stock;
      }
    },
  },
});

export const { setProducts, setProductStock } = productSlice.actions;

export default productSlice.reducer;
