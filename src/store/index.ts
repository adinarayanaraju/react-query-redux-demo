import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { cartSlice } from './cartSlice';

interface MenuItem {
  id: string;
  name: string;
  visible: boolean;
  role?: 'admin' | 'user';
}

const menuSlice = createSlice({
  name: 'menu',
  initialState: { items: [] as MenuItem[] },
  reducers: {
    setMenuItems: (state, action: PayloadAction<MenuItem[]>) => {
      state.items = action.payload;
    },
    updateMenuItem: (state, action: PayloadAction<MenuItem>) => {
      const index = state.items.findIndex((i) => i.id === action.payload.id);
      if (index !== -1) state.items[index] = action.payload;
    },
  },
});

export const { setMenuItems, updateMenuItem } = menuSlice.actions;

export const store = configureStore({
  reducer: { cart: cartSlice.reducer, menu: menuSlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;



// ✅ Points covered:

// Configured Redux store

// Typed RootState and AppDispatch for usage in hooks

// Ready to integrate with React + React Query