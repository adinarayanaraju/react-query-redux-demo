import React from 'react';
import './GiftCards.css';

interface GiftCard {
  id: string;
  name: string;
  amount: number;
}

const giftCards: GiftCard[] = [
  { id: 'g1', name: 'Amazon Gift Card', amount: 100 },
  { id: 'g2', name: 'Netflix Gift Card', amount: 50 },
];

export default function GiftCards() {
  return (
    <div className="gift-cards">
      <h3>Gift Cards</h3>
      <ul>
        {giftCards.map((g) => (
          <li key={g.id}>
            {g.name} - ${g.amount}
            <button>Redeem</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
