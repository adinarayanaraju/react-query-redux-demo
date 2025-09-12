import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchReviews, postReview } from '../api/reviews';
import './Reviews.css';

export default function Reviews({ productId }: { productId: string }) {
  const queryClient = useQueryClient();
  const { data: reviews, isLoading } = useQuery(['reviews', productId], () => fetchReviews(productId));
  const [text, setText] = useState('');

  const mutation = useMutation(postReview, {
    onSuccess: () => queryClient.invalidateQueries(['reviews', productId]),
  });

  const handlePost = () => {
    if (text.trim()) {
      mutation.mutate({ productId, text });
      setText('');
    }
  };

  if (isLoading) return <div className="loader">Loading reviews...</div>;

  return (
    <div className="card reviews">
      <h3>Reviews</h3>
      <ul>
        {reviews?.map((r) => (
          <li key={r.id}>
            <strong>{r.user}</strong>: {r.text}
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
