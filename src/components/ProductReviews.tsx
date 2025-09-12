import React from 'react';
import './ProductReviews.css';

interface Review {
  id: string;
  user: string;
  comment: string;
  rating: number;
}

const reviews: Review[] = [
  { id: 'r1', user: 'Alice', comment: 'Great product!', rating: 5 },
  { id: 'r2', user: 'Bob', comment: 'Satisfactory', rating: 3 },
];

export default function ProductReviews() {
  return (
    <div className="product-reviews">
      <h3>Product Reviews</h3>
      {reviews.map((r) => (
        <div key={r.id} className="review">
          <div className="user">{r.user}</div>
          <div className="rating">{'⭐'.repeat(r.rating)}</div>
          <div className="comment">{r.comment}</div>
        </div>
      ))}
    </div>
  );
}
