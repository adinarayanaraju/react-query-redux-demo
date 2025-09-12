import React, { useState } from 'react';
import './SearchFilter.css';

export default function SearchFilter({ onSearch }: { onSearch: (query: string) => void }) {
  const [query, setQuery] = useState('');

  const handleSearch = () => onSearch(query);

  return (
    <div className="search-filter">
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="btn" onClick={handleSearch}>Search</button>
    </div>
  );
}
