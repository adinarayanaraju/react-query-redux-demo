import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchOrderDetail } from '../api/orders';
import './OrderDetail.css';

interface Props { orderId: string; }

export default function OrderDetail({ orderId }: Props) {
  const { data: order, isLoading } = useQuery(['orderDetail', orderId], () => fetchOrderDetail(orderId));

  if (isLoading) return <div className="loader">Loading order...</div>;
  if (!order) return <div>No order found.</div>;

  return (
    <div className="order-detail card">
      <h2>Order #{order.id}</h2>
      <div>Date: {order.date}</div>
      <div>Status: {order.status}</div>
      <div className="items">
        {order.items.map((item: any) => (
          <div key={item.id} className="item">
            <span>{item.name}</span>
            <span>Qty: {item.qty}</span>
            <span>${item.price.toFixed(2)}</span>
          </div>
        ))}
      </div>
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
