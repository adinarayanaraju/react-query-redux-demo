// src/components/Header.tsx
import React, { useState } from 'react';
import { useCartUI } from '../context/CartUIContext';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import HamburgerMenu from './HamburgerMenu';
import './Header.css';

export default function Header() {
  const { open } = useCartUI();
  const items = useSelector((s: RootState) => s.cart.items);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="header">
      <div className="header-left">
        <button className="hamburger-btn" onClick={toggleMenu}>
          ☰
        </button>
        <h1>Mini Shop</h1>
      </div>

      <div className="header-right">
        <button className="cart-btn" onClick={open}>
          🛒 Cart <span className="badge">{items.length}</span>
        </button>
      </div>

      <HamburgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
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