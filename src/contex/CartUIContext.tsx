import React, { createContext, useContext, useState, useMemo } from 'react';

type CartUIContextType = {
  isOpen: boolean;
  toggle: () => void;
  open: () => void;
  close: () => void;
};

const CartUIContext = createContext<CartUIContextType | null>(null);

export const CartUIProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((o) => !o);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  const value = useMemo(() => ({ isOpen, toggle, open, close }), [isOpen]);

  return <CartUIContext.Provider value={value}>{children}</CartUIContext.Provider>;
};

export const useCartUI = () => {
  const ctx = useContext(CartUIContext);
  if (!ctx) throw new Error('useCartUI must be used within CartUIProvider');
  return ctx;
};


// Points covered:

// Cart drawer toggle (open/close)

// Uses React Context + useMemo for optimization

// Fully typed TypeScript context