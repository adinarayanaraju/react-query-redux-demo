import React, { useEffect } from 'react';
import { Provider as ReduxProvider, useDispatch, useSelector } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { store, setMenuItems, MenuItem, RootState } from './store';
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
import ReviewsPage from './components/ReviewsPage';
import ContactPage from './components/ContactPage';
import ProtectedRoute from './components/ProtectedRoute';
import ProductDetailPage from './components/ProductDetailPage';
import OrderTrackingPage from './components/OrderTrackingPage';
import CouponsPage from './components/CouponsPage';
import PaymentStatusPage from './components/PaymentStatusPage';
import PromotionsPage from './components/PromotionsPage';
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
  { id: 'contact', name: 'Contact', visible: true, role: 'user' },
  { id: 'coupons', name: 'Coupons', visible: true, role: 'user' },
  { id: 'promotions', name: 'Promotions', visible: true, role: 'user' },
  { id: 'settings', name: 'Settings', visible: true, role: 'admin' },
];

const routeComponents: Record<string, React.ReactNode> = {
  dashboard: <Dashboard />,
  products: <ProductsPage />,
  orders: <ProtectedRoute><OrdersPage /></ProtectedRoute>,
  wishlist: <WishlistPage />,
  profile: <ProtectedRoute><ProfilePage /></ProtectedRoute>,
  checkout: <CheckoutPage />,
  support: <SupportPage />,
  contact: <ContactPage />,
  coupons: <CouponsPage />,
  promotions: <PromotionsPage />,
  settings: <Settings />,
};

function AppRoot() {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.theme);
  const routes = useSelector((state: RootState) => state.menu.routes);
  const { themeColor } = useSelector((state: RootState) => state.siteConfig);

  useEffect(() => {
    dispatch(setMenuItems(initialMenu));
  }, [dispatch]);

  useEffect(() => {
    document.documentElement.style.setProperty('--color-primary', themeColor);
  }, [themeColor]);

  return (
    <div className={`app ${theme}`}>
      <HamburgerMenu />
      <main className="container">
        <Routes>
          <Route path="/" element={<h2>Welcome Home</h2>} />
          {routes.filter(r => r.visible).map(route => (
            <Route key={route.id} path={`/${route.id}`} element={routeComponents[route.id]} />
          ))}
          {/* Static routes */}
          <Route path="/orders/:id" element={<OrderDetail />} />
          <Route path="/products/:productId" element={<ProductDetailPage />} />
          <Route path="/tracking/:orderId" element={<OrderTrackingPage />} />
          <Route path="/payment-status" element={<PaymentStatusPage />} />
          <Route path="/reviews/:productId" element={<ReviewsPage />} />
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