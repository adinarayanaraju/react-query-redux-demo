import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { fetchOrders } from '../api/orders';
import type { Order } from '../api/orders';
import '../styles/OrderHistory.css';

export default function OrderHistory() {
  const { data: orders, isLoading, isError } = useQuery<Order[], Error>({
    queryKey: ['orders'],
    queryFn: fetchOrders
  });

  if (isLoading) return <div className="loader">Loading orders...</div>;
  if (isError) return <div className="error">Failed to load orders.</div>;

  return (
    <div className="order-history card">
      <h2>Your Orders</h2>
      {orders && orders.length === 0 ? (
        <div>No past orders.</div>
      ) : (
        <ul className="order-list">
          {orders?.map((order) => (
            <li key={order.id} className="order-item">
              <div className="order-info">
                <span>Order #{order.id}</span>
                <span>{order.date}</span>
                <span>Status: {order.status}</span>
                <span>Total: ${order.total.toFixed(2)}</span>
              </div>
              <Link to={`/orders/${order.id}`} className="btn">View Details</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}


// OrderHistory.tsx

// Points Covered:

// Display past orders

// Show order ID, date, status, total

// Loading state with a loader

// Conditional empty state message

// CSS card layout with shadow and padding

// Responsive flex layout for order items