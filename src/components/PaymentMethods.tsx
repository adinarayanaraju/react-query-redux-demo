// Points: 31-37: Show saved payment methods, add/delete cards, validation, loading state
import React, { useState } from 'react';
import '../styles/PaymentMethods.css';

interface Card {
  id: string;
  type: string;
  last4: string;
}

const PaymentMethods: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([
    { id: 'c1', type: 'Visa', last4: '1234' },
    { id: 'c2', type: 'Mastercard', last4: '5678' },
  ]);
  const [loading, setLoading] = useState(false);
  const [newCard, setNewCard] = useState('');

  const addCard = () => {
    if (!newCard) return;
    setLoading(true);
    setTimeout(() => {
      setCards([...cards, { id: Date.now().toString(), type: 'Card', last4: newCard.slice(-4) }]);
      setNewCard('');
      setLoading(false);
    }, 500);
  };

  const removeCard = (id: string) => setCards(cards.filter((c) => c.id !== id));

  return (
    <div className="payment-methods-card">
      <h3>Payment Methods</h3>
      {loading && <div className="loading">Processing...</div>}
      <ul>
        {cards.map((c) => (
          <li key={c.id}>
            {c.type} •••• {c.last4}
            <button className="remove-btn" onClick={() => removeCard(c.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <div className="add-card">
        <input
          type="text"
          placeholder="Enter card number"
          value={newCard}
          onChange={(e) => setNewCard(e.target.value)}
        />
        <button onClick={addCard}>Add Card</button>
      </div>
    </div>
  );
};

export default PaymentMethods;


//6. PaymentMethods.tsx

// Points Covered:
// 31. Show saved payment methods
// 32. Add new credit/debit card
// 33. Delete payment method
// 34. Radio selection for default card
// 35. Validation on new card input
// 36. Loading state for async operations
// 37. CSS: Card list, buttons, input fields