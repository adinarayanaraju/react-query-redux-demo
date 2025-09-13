import React, { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import '../styles/UserProfile.css';

export default function UserProfile() {
  const { user, updateUser } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }
  }, [user]);

  if (!user) {
    return <div className="card">Please log in to see your profile.</div>;
  }

  const handleSave = async () => {
    try {
      await updateUser(name, email);
      alert('Profile saved successfully!');
    } catch (_error) {
      alert('Failed to save profile.');
    }
  };

  return (
    <div className="user-profile card">
      <h2>User Profile</h2>
      <div className="field">
        <label>Name:</label>
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="field">
        <label>Email:</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <button className="btn primary" onClick={handleSave}>Save</button>
    </div>
  );
}


// 4. UserProfile.tsx

// Points Covered:
// 19. Editable name and email fields
// 20. Two-way binding with useState
// 21. Save button
// 22. CSS card layout with shadow
// 23. Input field styling
// 24. Responsive form layout