import React from 'react';

interface ProductRatingProps {
  productId: string;
}

export default function ProductRating({ productId }: ProductRatingProps) {
  return (
    <div className="card">
      <h3>Rate this product</h3>
      {/* The Ratings component is used for the actual rating stars */}
    </div>
  );
}
