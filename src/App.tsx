import React, { useEffect } from 'react';
import { Provider as ReduxProvider, useDispatch } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { store, setMenuItems, MenuItem } from './store';
import HamburgerMenu from './components/HamburgerMenu';
import Settings from './components/Settings';
import Dashboard from './components/Dashboard';
import OrdersPage from './components/OrdersPage';
import OrderDetail from './components/OrderDetail';
import ProductsPage from './components/ProductsPage';
import WishlistPage from './components/WishlistPage';
import ProfilePage from './components/ProfilePage';
import CheckoutPage from './components/CheckoutPage';
import SupportPage from './components/SupportPage';
import { Routes, Route } from 'react-router-dom';
import './App.css';

const queryClient = new QueryClient();

const initialMenu: MenuItem[] = [
  { id: 'dashboard', name: 'Dashboard', visible: true, role: 'admin' },
  { id: 'products', name: 'Products', visible: true, role: 'user' },
  { id: 'orders', name: 'Orders', visible: true, role: 'user' },
  { id: 'wishlist', name: 'Wishlist', visible: true, role: 'user' },
  { id: 'profile', name: 'Profile', visible: true, role: 'user' },
  { id: 'checkout', name: 'Checkout', visible: true, role: 'user' },
  { id: 'support', name: 'Support', visible: true, role: 'user' },
  { id: 'settings', name: 'Settings', visible: true, role: 'admin' },
];

function AppRoot() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setMenuItems(initialMenu));
  }, [dispatch]);

  return (
    <div className="app">
      <HamburgerMenu />
      <main className="container">
        <Routes>
          <Route path="/" element={<h2>Welcome Home</h2>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/orders/:id" element={<OrderDetail />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <ReduxProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <AppRoot />
      </QueryClientProvider>
    </ReduxProvider>
  );
}