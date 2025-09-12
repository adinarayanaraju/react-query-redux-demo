import React, { useState } from 'react';
import './Coupons.css';

export default function Coupons({ onApply }: { onApply: (code: string) => void }) {
  const [code, setCode] = useState('');

  return (
    <div className="coupons">
      <input
        type="text"
        placeholder="Enter coupon code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button className="btn" onClick={() => onApply(code)}>Apply</button>
    </div>
  );
}
