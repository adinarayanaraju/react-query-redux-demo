// src/components/Header.tsx
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, openCart } from '../store';
import HamburgerMenu from './HamburgerMenu';
import '../styles/Header.css';

export default function Header() {
  const dispatch = useDispatch();
  const items = useSelector((s: RootState) => s.cart.items);
  const logoUrl = useSelector((s: RootState) => s.siteConfig.logoUrl);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="header">
      <div className="header-left">
        <button className="hamburger-btn" onClick={toggleMenu}>
          ☰
        </button>
        <img src={logoUrl} alt="logo" className="logo" />
        <h1>Mini Shop</h1>
      </div>

      <div className="header-right">
        <button className="cart-btn" onClick={() => dispatch(openCart())}>
          🛒 Cart <span className="badge">{items.length}</span>
        </button>
      </div>

      <HamburgerMenu />
    </header>
  );
}


// 1️⃣ Header.tsx – Main Header + Hamburger Menu + Cart Button

// Points implemented:

// Displays site title (Mini Shop).

// Shows Cart button with item count badge.

// Integrates Hamburger menu for mobile responsiveness.

// Toggle menu on click.

// Fully typed with TypeScript.

// Styled with CSS (Header.css).