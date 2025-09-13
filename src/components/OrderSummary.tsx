import React from 'react';
import '../styles/OrderSummary.css';

interface Item {
  name: string;
  qty: number;
  price: number;
}

export default function OrderSummary({ items }: { items: Item[] }) {
  const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <div className="order-summary">
      <h3>Order Summary</h3>
      <ul>
        {items.map((i, idx) => (
          <li key={idx}>
            {i.name} x{i.qty} - ${i.price.toFixed(2)}
          </li>
        ))}
      </ul>
      <div className="total">Subtotal: ${subtotal.toFixed(2)}</div>
    </div>
  );
}
