import React from 'react';
import './WishlistNotifications.css';

interface WishlistItem {
  id: string;
  name: string;
  notify: boolean;
}

const wishlistItems: WishlistItem[] = [
  { id: 'w1', name: 'Shiny Hat', notify: true },
  { id: 'w2', name: 'Puffer Jacket', notify: false },
];

export default function WishlistNotifications() {
  return (
    <div className="wishlist-notifications">
      <h3>Wishlist Notifications</h3>
      <ul>
        {wishlistItems.map((item) => (
          <li key={item.id}>
            {item.name} {item.notify && <span className="badge">Notify Me</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}
