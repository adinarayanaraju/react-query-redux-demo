import React from "react";
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import CheckoutForm from "./CheckoutForm";
import OrderSummary from "./OrderSummary";

export default function CheckoutPage() {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  return (
    <div>
      <h2>Checkout</h2>
      <div style={{ display: 'flex', gap: '2rem' }}>
        <div style={{ flex: 2 }}>
          <CheckoutForm onSubmit={(data) => console.log(data)} />
        </div>
        <div style={{ flex: 1 }}>
          <OrderSummary items={cartItems} />
        </div>
      </div>
    </div>
  );
}
