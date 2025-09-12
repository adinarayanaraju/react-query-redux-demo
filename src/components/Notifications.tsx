import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchNotifications } from '../api/notifications';
import './Notifications.css';

interface Notification {
  id: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  read: boolean;
}

export default function Notifications() {
  const { data: notifications } = useQuery<Notification[]>(['notifications'], fetchNotifications);
  const [visible, setVisible] = useState<Notification[]>([]);

  useEffect(() => {
    if (notifications) setVisible(notifications.slice(0, 5));
  }, [notifications]);

  const dismiss = (id: string) => {
    setVisible((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <div className="notifications-container">
      {visible?.map((n) => (
        <div key={n.id} className={`notification ${n.type}`}>
          <span>{n.message}</span>
          <button className="dismiss-btn" onClick={() => dismiss(n.id)}>
            ×
          </button>
        </div>
      ))}
    </div>
  );
}
