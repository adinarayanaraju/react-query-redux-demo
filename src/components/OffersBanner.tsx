import React from 'react';
import './OffersBanner.css';

const offers = [
  { id: 'o1', title: '10% off on all jackets!' },
  { id: 'o2', title: 'Buy 2 Stickers, Get 1 Free!' },
];

export default function OffersBanner() {
  return (
    <div className="offers-banner">
      {offers.map((offer) => (
        <div key={offer.id} className="offer-item">
          {offer.title}
        </div>
      ))}
    </div>
  );
}
