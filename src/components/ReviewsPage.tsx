import React from 'react';
import { useParams } from 'react-router-dom';
import Reviews from './Reviews';
import Ratings from './Ratings';

export default function ReviewsPage() {
  const { productId } = useParams<{ productId: string }>();

  if (!productId) {
    return <div>Product not found.</div>;
  }

  return (
    <div>
      <h2>Reviews for Product {productId}</h2>
      <Ratings productId={productId} />
      <Reviews productId={productId} />
    </div>
  );
}
