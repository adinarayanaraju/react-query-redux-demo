import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { cartSlice } from './cartSlice';

export interface MenuItem {
  id: string;
  name: string;
  visible: boolean;
  role?: 'admin' | 'user';
}

export interface RouteItem extends MenuItem {}

const menuSlice = createSlice({
  name: 'menu',
  initialState: { items: [] as MenuItem[], routes: [] as RouteItem[] },
  reducers: {
    setMenuItems: (state, action: PayloadAction<MenuItem[]>) => {
      state.items = action.payload;
      if (state.routes.length === 0) {
        state.routes = action.payload.map(item => ({...item}));
      }
    },
    toggleRouteVisibility: (state, action: PayloadAction<string>) => {
      const route = state.routes.find(route => route.id === action.payload);
      if (route) {
        route.visible = !route.visible;
      }
    },
    addMenuItem: (state, action: PayloadAction<MenuItem>) => {
      state.items.push(action.payload);
    },
    removeMenuItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    toggleMenuVisibility: (state, action: PayloadAction<string>) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        item.visible = !item.visible;
      }
    },
    reorderMenuItems: (state, action: PayloadAction<{ startIndex: number, endIndex: number }>) => {
      const { startIndex, endIndex } = action.payload;
      const [removed] = state.items.splice(startIndex, 1);
      state.items.splice(endIndex, 0, removed);
    },
  },
});

export const { setMenuItems, addMenuItem, removeMenuItem, toggleMenuVisibility, reorderMenuItems, toggleRouteVisibility } = menuSlice.actions;

import { wishlistSlice } from './wishlistSlice';
import { themeSlice } from './themeSlice';
import { productSlice } from './productSlice';
import { addressSlice } from './addressSlice';
import { notificationSettingsSlice } from './notificationSettingsSlice';
import { paymentSlice } from './paymentSlice';
import { personalizationSlice } from './personalizationSlice';
import { shippingSlice } from './shippingSlice';
import { usersSlice } from './usersSlice';
import { siteConfigSlice } from './siteConfigSlice';

const uiSlice = createSlice({
  name: 'ui',
  initialState: { cartUI: { isOpen: false } },
  reducers: {
    openCart: (state) => {
      state.cartUI.isOpen = true;
    },
    closeCart: (state) => {
      state.cartUI.isOpen = false;
    },
  }
});

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    menu: menuSlice.reducer,
    wishlist: wishlistSlice.reducer,
    ui: uiSlice.reducer,
    theme: themeSlice.reducer,
    products: productSlice.reducer,
    addresses: addressSlice.reducer,
    notificationSettings: notificationSettingsSlice.reducer,
    payment: paymentSlice.reducer,
    personalization: personalizationSlice.reducer,
    shipping: shippingSlice.reducer,
    users: usersSlice.reducer,
    siteConfig: siteConfigSlice.reducer,
  },
});

export const { openCart, closeCart } = uiSlice.actions;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;



// ✅ Points covered:

// Configured Redux store

// Typed RootState and AppDispatch for usage in hooks

// Ready to integrate with React + React Query