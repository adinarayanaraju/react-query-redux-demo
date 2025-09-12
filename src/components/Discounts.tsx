import React from 'react';
import './Discounts.css';

export default function Discounts({ appliedDiscount }: { appliedDiscount?: string }) {
  return (
    <div className="discounts">
      {appliedDiscount ? (
        <div className="applied">Discount applied: {appliedDiscount}</div>
      ) : (
        <div className="none">No discounts applied</div>
      )}
    </div>
  );
}
