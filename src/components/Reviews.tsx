import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchReviews, submitReview, Review } from '../api/reviews';
import './Reviews.css';

export default function Reviews({ productId }: { productId: string }) {
  const queryClient = useQueryClient();
  const { data: reviews, isLoading } = useQuery({
    queryKey: ['reviews', productId],
    queryFn: () => fetchReviews(productId)
  });
  const [text, setText] = useState('');

  const mutation = useMutation({
    mutationFn: submitReview,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['reviews', productId] });
    },
  });

  const handlePost = () => {
    if (text.trim()) {
      // The submitReview mock expects a rating, which we don't have here.
      // I'll add a dummy rating of 0.
      mutation.mutate({ productId, text, rating: 0 });
      setText('');
    }
  };

  if (isLoading) return <div className="loader">Loading reviews...</div>;

  return (
    <div className="card reviews">
      <h3>Reviews</h3>
      <ul>
        {reviews?.map((r: Review) => (
          <li key={r.id}>
            <strong>Rating: {r.rating}/5</strong>: {r.text}
          </li>
        ))}
      </ul>
      <div className="review-input">
        <input
          type="text"
          placeholder="Write a review..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="btn" onClick={handlePost}>Post</button>
      </div>
    </div>
  );
}
