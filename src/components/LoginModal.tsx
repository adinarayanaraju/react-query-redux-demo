// src/components/LoginModal.tsx
import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import './LoginModal.css';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: Props) {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(username, password);
    onClose();
    alert('Logged in successfully!');
  };

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h3>Login</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
          <button className="btn primary" type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

// 5️⃣ LoginModal.tsx – Fake Login Modal

// Points implemented:

// Login form modal.

// Uses useAuth hook for login.

// Shows success notification on login.

// Close modal on background click.