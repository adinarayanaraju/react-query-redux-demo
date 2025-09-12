import React, { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { submitReview } from '../api/reviews';
import './Ratings.css';

export default function Ratings({ productId }: { productId: string }) {
  const queryClient = useQueryClient();
  const [rating, setRating] = useState(0);

  const mutation = useMutation({
    mutationFn: submitReview,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['reviews', productId] });
    },
  });

  const handleRate = (value: number) => {
    setRating(value);
    mutation.mutate({ productId, rating: value, text: 'Dummy review text' });
  };

  return (
    <div className="ratings">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`star ${star <= rating ? 'filled' : ''}`}
          onClick={() => handleRate(star)}
        >
          ★
        </span>
      ))}
    </div>
  );
}
