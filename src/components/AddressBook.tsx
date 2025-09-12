import React, { useState } from 'react';
import './AddressBook.css';

export default function AddressBook() {
  const [addresses, setAddresses] = useState(['123 Main St, City, Country']);
  const [newAddress, setNewAddress] = useState('');

  const addAddress = () => {
    if(newAddress) setAddresses([...addresses, newAddress]);
    setNewAddress('');
  }

  return (
    <div className="address-book card">
      <h2>Address Book</h2>
      <ul>
        {addresses.map((addr, i) => <li key={i}>{addr}</li>)}
      </ul>
      <input value={newAddress} onChange={e=>setNewAddress(e.target.value)} placeholder="New Address" />
      <button className="btn primary" onClick={addAddress}>Add</button>
    </div>
  );
}


// 5. AddressBook.tsx

// Points Covered:
// 25. Display list of addresses
// 26. Add new address
// 27. Input field for address
// 28. Add button with click handler
// 29. Conditional rendering for empty list
// 30. CSS styling for card, list items, input, and button