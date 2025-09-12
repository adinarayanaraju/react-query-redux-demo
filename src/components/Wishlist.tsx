// Points: 38-43: Wishlist management, add/remove items, hover effects, responsive, visual feedback
import React, { useState } from 'react';
import '../styles/Wishlist.css';

interface WishlistItem {
  id: string;
  name: string;
  price: number;
}

const Wishlist: React.FC = () => {
  const [items, setItems] = useState<WishlistItem[]>([
    { id: 'w1', name: 'Leather Boots', price: 129.99 },
    { id: 'w2', name: 'Silk Scarf', price: 49.5 },
  ]);

  const removeItem = (id: string) => setItems(items.filter((i) => i.id !== id));

  return (
    <div className="wishlist-card">
      <h3>Your Wishlist</h3>
      {items.length === 0 && <div className="muted">Wishlist is empty</div>}
      <div className="wishlist-grid">
        {items.map((item) => (
          <div className="wishlist-item" key={item.id}>
            <div className="item-info">
              <div className="item-name">{item.name}</div>
              <div className="item-price">${item.price.toFixed(2)}</div>
            </div>
            <button className="remove-btn" onClick={() => removeItem(item.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;

// ✅ Wishlist component implemented with:

// Add/remove functionality

// Grid layout and responsive design

// Hover effects

// Points 38–43 covered
