// Points 44-50: Product filtering by category, price, multiple checkboxes, sliders, popup feedback
import React, { useState } from 'react';
import '../styles/ProductFilter.css';

interface FilterProps {
  categories: string[];
  onFilter: (selectedCategories: string[], priceRange: [number, number]) => void;
}

const ProductFilter: React.FC<FilterProps> = ({ categories, onFilter }) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
  const [popup, setPopup] = useState('');

  const toggleCategory = (cat: string) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const applyFilter = () => {
    onFilter(selectedCategories, priceRange);
    setPopup(`Filter applied! Categories: ${selectedCategories.join(', ')} Price: $${priceRange[0]}-$${priceRange[1]}`);
    setTimeout(() => setPopup(''), 2500);
  };

  return (
    <div className="filter-card">
      <h3>Filter Products</h3>
      <div className="filter-section">
        <strong>Categories:</strong>
        {categories.map((cat) => (
          <label key={cat} className="checkbox-label">
            <input
              type="checkbox"
              checked={selectedCategories.includes(cat)}
              onChange={() => toggleCategory(cat)}
            />
            {cat}
          </label>
        ))}
      </div>
      <div className="filter-section">
        <strong>Price Range:</strong>
        <input
          type="range"
          min={0}
          max={500}
          value={priceRange[1]}
          onChange={(e) => setPriceRange([0, Number(e.target.value)])}
        />
        <div>${priceRange[0]} - ${priceRange[1]}</div>
      </div>
      <button className="btn apply-btn" onClick={applyFilter}>Apply Filter</button>

      {popup && <div className="popup">{popup}</div>}
    </div>
  );
};

export default ProductFilter;

// ProductFilter component implemented with:

// Category checkboxes

// Price range slider

// Popup notifications for filter applied

// Responsive, styled UI

// Points 44–50 covered