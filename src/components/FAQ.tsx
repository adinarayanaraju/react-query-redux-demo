import React, { useState } from 'react';
import './FAQ.css';

const faqs = [
  { question: 'How to place an order?', answer: 'Select a product and checkout.' },
  { question: 'Return policy?', answer: 'You can return within 30 days.' },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="faq">
      <h3>FAQ</h3>
      {faqs.map((f, idx) => (
        <div key={idx} className="faq-item">
          <div className="question" onClick={() => setOpenIndex(openIndex === idx ? null : idx)}>
            {f.question}
          </div>
          {openIndex === idx && <div className="answer">{f.answer}</div>}
        </div>
      ))}
    </div>
  );
}
