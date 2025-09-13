import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchOrderById } from '../api/orders';
import OrderTracking from './OrderTracking';
import ShipmentStatus from './ShipmentStatus';

export default function OrderTrackingPage() {
  const { orderId } = useParams<{ orderId: string }>();
  const { data: order, isLoading } = useQuery({
    queryKey: ['order', orderId],
    queryFn: () => fetchOrderById(orderId!),
    enabled: !!orderId,
  });

  if (isLoading) return <div className="loader">Loading...</div>;
  if (!order) return <div>Order not found.</div>;

  return (
    <div>
      <h2>Order Tracking for Order #{orderId}</h2>
      <OrderTracking orderId={orderId!} />
      <ShipmentStatus orderId={orderId!} status={order.status} />
    </div>
  );
}
