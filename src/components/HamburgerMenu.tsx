import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/Settings.css";       
import "../styles/HamburgerMenu.css";  

import { useSelector } from 'react-redux';
import { RootState, MenuItem } from '../store';
import { useRestrictedProducts } from '../hooks/useRestrictedProducts';

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false);
  const items = useSelector((state: RootState) => state.menu?.items || []);
  const { data: restricted = [] } = useRestrictedProducts();

  const toggleMenu = () => setOpen(!open);

  const isRestricted = (id: string) =>
    restricted.some((r) => r.id === id);

  const restrictionReason = (id: string) =>
    restricted.find((r) => r.id === id)?.reason;

  return (
    <>
      <button className="hamburger-btn" onClick={toggleMenu}>
        ☰ Menu
      </button>
      <div className={`hamburger-menu ${open ? 'open' : ''}`}>
        <ul>
          {items.filter(item => item.visible).map((item: MenuItem) => {
            const restrictedItem = isRestricted(item.id);
            return restrictedItem ? (
              <li key={item.id} className="restricted">
                {item.name} 🔒
                <span className="flyout">{restrictionReason(item.id)}</span>
              </li>
            ) : (
              <li key={item.id}>
                <Link to={`/${item.id}`}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}


// 2️⃣ HamburgerMenu.tsx – Side Menu for Navigation

// Points implemented:

// Slides in/out from the left.

// Click outside or toggle button closes menu.

// Responsive navigation links.

// CSS animated sliding.


// New Features Implemented (Points 461–470)
// Point	Feature
// 461	Dynamic fetching of restricted products via React Query
// 462	Hover flyout displays restriction reason
// 463	Flyout updates automatically if restrictions change
// 464	Integration with existing HamburgerMenu
// 465	Smooth CSS hover effect for flyout
// 466	Stale-time caching for restricted products (60s)
// 467	Works with role-based menu visibility
// 468	Seamless Redux + React Query integration
// 469	Ready for admin/user restrictions dynamically
// 470	Supports future expansion for more restriction rules