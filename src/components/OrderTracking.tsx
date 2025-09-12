// Points 51-60: Order tracking component with step tracker, popups, and hover effects
import React, { useState, useEffect } from 'react';
import '../styles/OrderTracking.css';

interface OrderTrackingProps {
  orderId: string;
  statusSteps?: string[];
}

const defaultSteps = ['Ordered', 'Processed', 'Shipped', 'Out for delivery', 'Delivered'];

const OrderTracking: React.FC<OrderTrackingProps> = ({ orderId, statusSteps = defaultSteps }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [popup, setPopup] = useState('');

  // Simulate order status updates
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < statusSteps.length - 1) {
          setPopup(`Order ${orderId} status updated: ${statusSteps[prev + 1]}`);
          setTimeout(() => setPopup(''), 2500);
          return prev + 1;
        }
        return prev;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [orderId, statusSteps]);

  return (
    <div className="order-tracking-card">
      <h3>Order Tracking</h3>
      <div className="steps-container">
        {statusSteps.map((step, index) => (
          <div
            key={step}
            className={`step ${index <= currentStep ? 'completed' : ''}`}
            title={step}
          >
            <div className="step-circle">{index + 1}</div>
            <div className="step-label">{step}</div>
          </div>
        ))}
      </div>
      <div className="estimated">
        Estimated delivery: <strong>{new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toDateString()}</strong>
      </div>

      {popup && <div className="popup">{popup}</div>}
    </div>
  );
};

export default OrderTracking;


// ✅ OrderTracking component implemented with:

// Step tracker for order status

// Automatic status updates every 5 seconds

// Popup notification on status change

// Estimated delivery date

// Hover effects on step circles

// Responsive layout
