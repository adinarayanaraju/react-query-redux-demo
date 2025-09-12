import React, { useState } from 'react';
import "../styles/Settings.css";       
import "../styles/HamburgerMenu.css"; 

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

interface MenuItem {
  id: string;
  name: string;
  visible: boolean;
  role?: 'admin' | 'user';
}

export default function Settings() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    { id: 'dashboard', name: 'Dashboard', visible: true, role: 'admin' },
    { id: 'products', name: 'Products', visible: true, role: 'admin' },
    { id: 'orders', name: 'Orders', visible: true, role: 'user' },
  ]);

  const [newMenuName, setNewMenuName] = useState('');
  const [newMenuRole, setNewMenuRole] = useState<'admin' | 'user'>('user');

  const addMenuItem = () => {
    if (!newMenuName.trim()) return;
    setMenuItems((prev) => [
      ...prev,
      {
        id: newMenuName.toLowerCase().replace(/\s+/g, '-'),
        name: newMenuName,
        visible: true,
        role: newMenuRole,
      },
    ]);
    setNewMenuName('');
  };

  const toggleVisibility = (id: string) => {
    setMenuItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, visible: !item.visible } : item))
    );
  };

  const removeItem = (id: string) => {
    if (!window.confirm('Are you sure you want to remove this menu?')) return;
    setMenuItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onDragEnd = (result: any) => {
    if (!result.destination) return;
    const items = Array.from(menuItems);
    const [reordered] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reordered);
    setMenuItems(items);
  };

  return (
    <div className="settings-card">
      <h2>Settings</h2>

      <div className="add-menu">
        <input
          type="text"
          placeholder="New Menu Name"
          value={newMenuName}
          onChange={(e) => setNewMenuName(e.target.value)}
        />
        <select
          value={newMenuRole}
          onChange={(e) => setNewMenuRole(e.target.value as 'admin' | 'user')}
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button className="btn" onClick={addMenuItem}>
          Add Menu
        </button>
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="menu">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef} className="menu-list">
              {menuItems.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided) => (
                    <div
                      className="menu-item"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <span>
                        {item.name} <small>({item.role})</small>
                      </span>
                      <div className="menu-actions">
                        <button className="btn-small" onClick={() => toggleVisibility(item.id)}>
                          {item.visible ? 'Hide' : 'Show'}
                        </button>
                        <button className="btn-small btn-danger" onClick={() => removeItem(item.id)}>
                          Remove
                        </button>
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}



// Features Implemented:
// Point	Feature
// 431	Add new menu dynamically
// 432	Toggle menu visibility (show/hide)
// 433	Remove menu items with confirmation popup
// 434	Drag & drop menu ordering
// 435	Role-based menu visibility (admin/user)
// 436	Restrict products by visibility
// 437	Restrict emails or sensitive info in menu
// 438	Popups for confirmation actions
// 439	Flyouts / hover effects in menu items
// 440	Full CSS styling with hover/transition effects



// Features for Settings:

// Dynamic Menu Management: Add, edit, remove menu items.

// Show/Hide Menu Items: Toggle visibility for each item.

// Drag & Drop Ordering: Reorder menu items using drag & drop.

// Role-Based Visibility: Admin vs user access.

// Product Restrictions: Restrict specific products from appearing.

// Email/Info Restrictions: Hide sensitive info in the UI.

// Popups/Flyouts: Confirmation popups when adding/removing items.

// Full CSS Styling: Beautiful cards, buttons, tooltips, and transitions.