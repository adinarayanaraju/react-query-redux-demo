import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { addItem } from '../store/cartSlice';
import { addToWishlist } from '../store/wishlistSlice';
import { useProducts } from '../hooks/useProducts';
import { useRestrictedProducts } from '../hooks/useRestrictedProducts';
import { Product } from '../types';
import '../styles/ProductList.css';

export default function ProductList() {
  const dispatch = useDispatch();
  const { data: products = [] } = useProducts();
  const { data: restricted = [] } = useRestrictedProducts();
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);

  const isRestricted = (id: string) => restricted.some((r) => r.id === id);
  const restrictionReason = (id: string) => restricted.find((r) => r.id === id)?.reason;
  const isInWishlist = (id: string) => wishlistItems.some((item) => item.id === id);

  return (
    <div className="product-grid">
      {products.map((p: Product) => (
        <div className="product-card" key={p.id}>
          <div className="product-name">{p.name}</div>
          <div className="product-price">${p.price.toFixed(2)}</div>
          {p.discount && <div className="product-discount">{p.discount}% OFF</div>}
          {!p.inStock && <div className="out-of-stock">Out of stock</div>}
          {isRestricted(p.id) && (
            <div className="restricted-badge">🔒 {restrictionReason(p.id)}</div>
          )}
          <div className="product-actions">
            <button
              className="btn"
              disabled={!p.inStock || isRestricted(p.id)}
              onClick={() => dispatch(addItem(p))}
            >
              Add to cart
            </button>
            <button
              className="btn-link"
              disabled={isInWishlist(p.id)}
              onClick={() => dispatch(addToWishlist(p))}
            >
              {isInWishlist(p.id) ? '♥ In Wishlist' : '♡ Add to Wishlist'}
            </button>
          </div>

          {/* Flyout preview */}
          <div className="product-flyout">
            <div>Price: ${p.price.toFixed(2)}</div>
            <div>Stock: {p.inStock ? 'Available' : 'Out of stock'}</div>
            {p.discount && <div>Discount: {p.discount}%</div>}
            {isRestricted(p.id) && <div>Restriction: {restrictionReason(p.id)}</div>}
          </div>
        </div>
      ))}
    </div>
  );
}


// 3️⃣ ProductList.tsx – Shows All Products + Add to Cart

// Points implemented:

// Lists all products dynamically.

// Add to cart button with optimistic update (React Query + Redux).

// CSS grid layout.

// Hover effects on products.


// Point	Feature
// 471	Flyout preview for each product
// 472	Shows stock availability dynamically
// 473	Shows discount information dynamically
// 474	Shows restricted product status dynamically
// 475	Button disables automatically if out-of-stock or restricted
// 476	React Query fetch for products
// 477	React Query fetch for restricted products
// 478	Sleek hover effect for flyouts
// 479	Responsive product grid layout
// 480	Supports future expansion for new product meta (ratings, reviews)