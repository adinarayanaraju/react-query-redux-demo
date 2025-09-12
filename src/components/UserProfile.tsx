import React, { useState } from 'react';
import './UserProfile.css';

export default function UserProfile() {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john@example.com');

  return (
    <div className="user-profile card">
      <h2>User Profile</h2>
      <div className="field">
        <label>Name:</label>
        <input value={name} onChange={(e)=>setName(e.target.value)} />
      </div>
      <div className="field">
        <label>Email:</label>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} />
      </div>
      <button className="btn primary">Save</button>
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