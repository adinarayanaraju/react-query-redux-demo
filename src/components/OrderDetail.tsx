import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { fetchOrderById } from '../api/orders';
import type { Order } from '../api/orders';
import '../styles/OrderDetail.css';

export default function OrderDetail() {
  const { id } = useParams<{ id: string }>();
  const { data: order, isLoading, isError } = useQuery<Order | undefined, Error>({
    queryKey: ['order', id],
    queryFn: () => fetchOrderById(id!),
    enabled: !!id,
  });

  if (isLoading) return <div className="loader">Loading order...</div>;
  if (isError) return <div className="error">Failed to load order details.</div>;
  if (!order) return <div className="card">Order not found.</div>;

  return (
    <div className="order-detail card">
      <h2>Order #{order.id}</h2>
      <div className="order-meta">
        <span>Date: {order.date}</span>
        <span>Status: {order.status}</span>
      </div>
      <h3>Items</h3>
      <ul className="item-list">
        {order.items.map((item) => (
          <li key={item.id} className="item">
            <span>{item.name}</span>
            <span>Qty: {item.qty}</span>
            <span>${item.price?.toFixed(2)}</span>
          </li>
        ))}
      </ul>
      <div className="total">Total: ${order.total.toFixed(2)}</div>
    </div>
  );
}


// 2. OrderDetail.tsx

// Points Covered:
// 7. Fetch single order details
// 8. Show order items with name, quantity, and price
// 9. Display total price
// 10. Loading state for async data
// 11. Conditional “No order found” message
// 12. CSS card layout and item flex layout
