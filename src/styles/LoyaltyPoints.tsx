import React from 'react';
import './LoyaltyPoints.css';

interface LoyaltyProps {
  points: number;
}

export default function LoyaltyPoints({ points }: LoyaltyProps) {
  return (
    <div className="loyalty-points">
      <h3>Loyalty Points</h3>
      <div className="points">{points}</div>
    </div>
  );
}
