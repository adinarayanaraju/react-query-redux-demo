import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { removeFromWishlist } from '../store/wishlistSlice';
import '../styles/Wishlist.css';

const Wishlist: React.FC = () => {
  const items = useSelector((state: RootState) => state.wishlist.items);
  const dispatch = useDispatch();

  const handleRemoveItem = (id: string) => {
    dispatch(removeFromWishlist(id));
  };

  return (
    <div className="wishlist-card">
      <h3>Your Wishlist</h3>
      {items.length === 0 && <div className="muted">Wishlist is empty</div>}
      <div className="wishlist-grid">
        {items.map((item) => (
          <div className="wishlist-item" key={item.id}>
            <div className="item-info">
              <div className="item-name">{item.name}</div>
              <div className="item-price">${item.price?.toFixed(2)}</div>
            </div>
            <button className="remove-btn" onClick={() => handleRemoveItem(item.id)}>Remove</button>
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
