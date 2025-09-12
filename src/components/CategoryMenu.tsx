import React, { useState } from 'react';
import './CategoryMenu.css';

const categories = ['Clothing', 'Accessories', 'Electronics', 'Toys', 'Books'];

export default function CategoryMenu({ onSelect }: { onSelect: (cat: string) => void }) {
  const [active, setActive] = useState('');

  return (
    <div className="category-menu">
      {categories.map((cat) => (
        <button
          key={cat}
          className={active === cat ? 'active' : ''}
          onClick={() => { setActive(cat); onSelect(cat); }}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
