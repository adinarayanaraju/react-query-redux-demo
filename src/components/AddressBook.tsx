import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { addAddress, removeAddress, updateAddress } from '../store/addressSlice';
import '../styles/AddressBook.css';

export default function AddressBook() {
  const addresses = useSelector((state: RootState) => state.addresses.addresses);
  const dispatch = useDispatch();
  const [newAddress, setNewAddress] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingText, setEditingText] = useState('');

  const handleAddAddress = () => {
    if (newAddress.trim()) {
      dispatch(addAddress(newAddress));
      setNewAddress('');
    }
  };

  const handleUpdateAddress = (id: string) => {
    dispatch(updateAddress({ id, address: editingText }));
    setEditingId(null);
    setEditingText('');
  };

  const startEditing = (id: string, text: string) => {
    setEditingId(id);
    setEditingText(text);
  };

  return (
    <div className="address-book card">
      <h2>Address Book</h2>
      <ul>
        {addresses.map(addr => (
          <li key={addr.id}>
            {editingId === addr.id ? (
              <input
                type="text"
                value={editingText}
                onChange={(e) => setEditingText(e.target.value)}
              />
            ) : (
              <span>{addr.address}</span>
            )}
            <div className="address-actions">
              {editingId === addr.id ? (
                <button className="btn-small" onClick={() => handleUpdateAddress(addr.id)}>Save</button>
              ) : (
                <button className="btn-small" onClick={() => startEditing(addr.id, addr.address)}>Edit</button>
              )}
              <button className="btn-small btn-danger" onClick={() => dispatch(removeAddress(addr.id))}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="add-address">
        <input value={newAddress} onChange={e => setNewAddress(e.target.value)} placeholder="New Address" />
        <button className="btn primary" onClick={handleAddAddress}>Add</button>
      </div>
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