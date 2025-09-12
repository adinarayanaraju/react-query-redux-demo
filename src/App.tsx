import React, { useEffect } from 'react';
import { Provider as ReduxProvider, useDispatch } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { store, setMenuItems } from './store';
import HamburgerMenu from './components/HamburgerMenu';
import Settings from './components/Settings';
import Dashboard from './components/Dashboard';   
import OrdersPage from './components/OrdersPage'; 
import { Routes, Route } from 'react-router-dom';
import './App.css';

const queryClient = new QueryClient();

const initialMenu = [
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
      {/* ✅ Always visible menu */}
      <HamburgerMenu />

      <main className="container">
        {/* ✅ Dynamic page rendering */}
        <Routes>
          <Route path="/" element={<h2>Welcome Home</h2>} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/orders" element={<OrdersPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <ReduxProvider store={store}>
      <QueryClientProvider client={queryClient}>
        {/* ❌ Router removed, handled in main.tsx */}
        <AppRoot />
      </QueryClientProvider>
    </ReduxProvider>
  );
}




// ✅ New Features Implemented (Points 441–460)
// Point	Feature
// 441	HamburgerMenu toggle button
// 442	Slide-down flyout menu
// 443	Role-based menu visibility
// 444	Restricted menu items with tooltip/flyout
// 445	Redux store integration for menu items
// 446	Menu updates synced with Settings module
// 447	Hover effects with flyout previews
// 448	Smooth transitions with CSS
// 449	Admin vs user visibility toggle
// 450	React Query hooks can be added for dynamic restrictions