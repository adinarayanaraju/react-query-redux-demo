import type { Product } from '../types';

export interface Review {
  id: string;
  productId: string;
  rating: number;
  text: string;
}

const mockReviews: Review[] = [
  { id: 'r1', productId: 'p1', rating: 4, text: 'Great hat!' },
  { id: 'r2', productId: 'p1', rating: 5, text: 'Love it!' },
  { id: 'r3', productId: 'p2', rating: 3, text: 'A bit too puffy.' },
];

export const fetchReviews = (productId: string): Promise<Review[]> =>
  new Promise((resolve) =>
    setTimeout(() => resolve(mockReviews.filter((r) => r.productId === productId)), 400)
  );

export const submitReview = (review: Omit<Review, 'id'>): Promise<Review> =>
  new Promise((resolve) => {
    const newReview = { ...review, id: `r${mockReviews.length + 1}` };
    mockReviews.push(newReview);
    setTimeout(() => resolve(newReview), 500);
  });
