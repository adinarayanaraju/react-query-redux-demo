import React from 'react';
import Coupons from './Coupons';
import Discounts from './Discounts';

export default function CouponsPage() {
  return (
    <div>
      <h2>Coupons & Discounts</h2>
      <Coupons onApply={(code) => alert(`Applied coupon: ${code}`)} />
      <Discounts />
    </div>
  );
}
