import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchProductById } from '../api/products';
import ProductRating from './ProductRating';
import ProductReviews from './ProductReviews';
// import RelatedProducts from './RelatedProducts'; // This component does not exist

export default function ProductDetailPage() {
  const { productId } = useParams<{ productId: string }>();
  const { data: product, isLoading } = useQuery({
    queryKey: ['product', productId],
    queryFn: () => fetchProductById(productId!),
    enabled: !!productId,
  });

  if (isLoading) return <div className="loader">Loading...</div>;
  if (!product) return <div>Product not found.</div>;

  return (
    <div>
      <h2>{product.name}</h2>
      <p>${product.price.toFixed(2)}</p>
      <p>In Stock: {product.inStock}</p>
      <ProductRating productId={productId!} />
      <ProductReviews productId={productId!} />
      {/* <RelatedProducts productId={productId} /> */}
    </div>
  );
}
