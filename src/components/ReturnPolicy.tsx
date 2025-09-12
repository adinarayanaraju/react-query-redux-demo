import React from 'react';
import './ReturnPolicy.css';

export default function ReturnPolicy() {
  return (
    <div className="return-policy">
      <h3>Return Policy</h3>
      <p>You can return any product within 30 days of purchase.</p>
      <ul>
        <li>Original packaging required</li>
        <li>Product should be unused</li>
        <li>Refund will be processed within 5 business days</li>
      </ul>
    </div>
  );
}
