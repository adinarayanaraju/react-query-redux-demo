// src/components/PopupNotification.tsx
import React, { useEffect, useState } from 'react';
import './PopupNotification.css';

interface Notification {
  id: string;
  message: string;
}

export default function PopupNotification({ message }: { message: string }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return <div className="popup">{message}</div>;
}


// 6️⃣ PopupNotification.tsx – Notifications / Toast

// Points implemented:

// Toast popup notifications.

// Auto dismiss after 3 seconds.

// Can stack multiple notifications.