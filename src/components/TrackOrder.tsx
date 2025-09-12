import React from 'react';
import './TrackOrder.css';

export default function TrackOrder({ status }: { status: string }) {
  return (
    <div className="track-order">
      <h3>Track Your Order</h3>
      <p>Status: <strong>{status}</strong></p>
      <div className="progress-bar">
        <div className={`progress ${status.toLowerCase()}`}></div>
      </div>
    </div>
  );
}
