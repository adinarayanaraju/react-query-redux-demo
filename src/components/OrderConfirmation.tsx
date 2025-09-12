import React from 'react';
import './OrderConfirmation.css';

export default function OrderConfirmation({ orderId }: { orderId: string }) {
  return (
    <div className="order-confirmation">
      <h3>Thank you for your order!</h3>
      <p>Your Order ID: <strong>{orderId}</strong></p>
      <p>We will notify you once your order is shipped.</p>
    </div>
  );
}
