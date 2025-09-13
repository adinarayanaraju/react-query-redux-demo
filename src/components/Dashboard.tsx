import React from "react";
import { useQuery } from '@tanstack/react-query';
import { fetchOrders } from '../api/orders';
import { fetchProducts } from '../api/products';
import ProductGrid from './ProductGrid';
import RecentOrders from './RecentOrders';
import SalesChart from './SalesChart';
import '../styles/Dashboard.css';

export default function Dashboard() {
  const { data: orders = [] } = useQuery({ queryKey: ['orders'], queryFn: fetchOrders });
  const { data: products = [] } = useQuery({ queryKey: ['products'], queryFn: fetchProducts });

  return (
    <div className="dashboard card">
      <h2>Dashboard</h2>
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Orders</h3>
          <p>{orders.length}</p>
        </div>
        <div className="stat-card">
          <h3>Total Products</h3>
          <p>{products.length}</p>
        </div>
      </div>
      <SalesChart orders={orders} />
      <RecentOrders orders={orders} />
      <ProductGrid products={products} />
    </div>
  );
}
