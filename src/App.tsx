import React, { useEffect } from 'react';
import { Provider as ReduxProvider, useDispatch } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { store, setMenuItems, MenuItem } from './store';
import HamburgerMenu from './components/HamburgerMenu';
import Settings from './components/Settings';
import Dashboard from './components/Dashboard';
import OrdersPage from './components/OrdersPage';
import OrderDetail from './components/OrderDetail';
import { Routes, Route } from 'react-router-dom';
import './App.css';

const queryClient = new QueryClient();

const initialMenu: MenuItem[] = [
  { id: 'dashboard', name: 'Dashboard', visible: true, role: 'admin' },
  { id: 'products', name: 'Products', visible: true, role: 'admin' },
  { id: 'orders', name: 'Orders', visible: true, role: 'user' },
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
          <Route path="/settings" element={<Settings />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/orders/:id" element={<OrderDetail />} />
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