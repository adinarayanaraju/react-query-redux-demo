import React from 'react';
import { Product } from '../types';
import '../styles/ProductGrid.css';

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="product-grid-dashboard">
      {products.map(product => (
        <div
          key={product.id}
          className={`product-card-dashboard ${product.inStock < 5 ? 'low-stock' : ''} ${(product.demand || 0) > 7 ? 'high-demand' : ''}`}
        >
          <h4>{product.name}</h4>
          <p>Price: ${product.price.toFixed(2)}</p>
          <p>Stock: {product.inStock}</p>
          <p>Demand: {product.demand || 0}/10</p>
        </div>
      ))}
    </div>
  );
}
