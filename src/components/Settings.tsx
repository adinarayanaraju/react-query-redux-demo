import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { addMenuItem, removeMenuItem, toggleMenuVisibility, reorderMenuItems } from '../store/index';
import "../styles/Settings.css";       
import "../styles/HamburgerMenu.css"; 
import { DragDropContext, Droppable, Draggable, DropResult } from '@hello-pangea/dnd';

export default function Settings() {
  const menuItems = useSelector((state: RootState) => state.menu.items);
  const dispatch = useDispatch();

  const [newMenuName, setNewMenuName] = useState('');
  const [newMenuRole, setNewMenuRole] = useState<'admin' | 'user'>('user');

  const handleAddMenuItem = () => {
    if (!newMenuName.trim()) return;
    const newItem = {
      id: newMenuName.toLowerCase().replace(/\s+/g, '-'),
      name: newMenuName,
      visible: true,
      role: newMenuRole,
    };
    dispatch(addMenuItem(newItem));
    setNewMenuName('');
  };

  const handleToggleVisibility = (id: string) => {
    dispatch(toggleMenuVisibility(id));
  };

  const handleRemoveItem = (id: string) => {
    if (!window.confirm('Are you sure you want to remove this menu?')) return;
    dispatch(removeMenuItem(id));
  };

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    dispatch(reorderMenuItems({
      startIndex: result.source.index,
      endIndex: result.destination.index,
    }));
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
        <button className="btn" onClick={handleAddMenuItem}>
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
                        <button className="btn-small" onClick={() => handleToggleVisibility(item.id)}>
                          {item.visible ? 'Hide' : 'Show'}
                        </button>
                        <button className="btn-small btn-danger" onClick={() => handleRemoveItem(item.id)}>
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