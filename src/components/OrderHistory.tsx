import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchOrders } from '../api/orders';
import './OrderHistory.css';

export default function OrderHistory() {
  const { data: orders, isLoading } = useQuery(['orders'], fetchOrders);

  if (isLoading) return <div className="loader">Loading orders...</div>;

  return (
    <div className="order-history card">
      <h2>Your Orders</h2>
      {orders.length === 0 ? (
        <div>No past orders.</div>
      ) : (
        <ul>
          {orders.map((order: any) => (
            <li key={order.id}>
              <span>Order #{order.id}</span>
              <span>{order.date}</span>
              <span>Status: {order.status}</span>
              <span>Total: ${order.total.toFixed(2)}</span>
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