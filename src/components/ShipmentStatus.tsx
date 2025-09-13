import React from 'react';
import './ShipmentStatus.css';

interface ShipmentProps {
  orderId: string;
  status: 'Pending' | 'Shipped' | 'Delivered' | 'Cancelled';
}

export default function ShipmentStatus({ orderId, status }: ShipmentProps) {
  return (
    <div className="shipment-status">
      <h3>Shipment Status</h3>
      <p>Order ID: <strong>{orderId}</strong></p>
      <p>Status: <strong>{status}</strong></p>
      <div className="progress-bar">
        <div className={`progress ${status}`}></div>
      </div>
    </div>
  );
}
