import React from 'react';
import { Order } from '../api/orders';
import '../styles/RecentOrders.css';

interface RecentOrdersProps {
  orders: Order[];
}

export default function RecentOrders({ orders }: RecentOrdersProps) {
  return (
    <div className="recent-orders card">
      <h3>Recent Orders</h3>
      <ul>
        {orders.slice(0, 5).map(order => (
          <li key={order.id}>
            <span>Order #{order.id}</span>
            <span>{order.date}</span>
            <span>{order.status}</span>
            <span>${order.total.toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
