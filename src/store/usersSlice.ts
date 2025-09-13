import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { User } from '../types';

interface UsersState {
  users: User[];
}

const initialState: UsersState = {
  users: [
    { id: 'u1', name: 'John Doe', email: 'john.doe@example.com', phone: '123-456-7890', token: 'fake-jwt-token-12345', role: 'admin' },
    { id: 'u2', name: 'Jane Smith', email: 'jane.smith@example.com', phone: '098-765-4321', token: 'fake-jwt-token-67890', role: 'user' },
  ],
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUserRole(state, action: PayloadAction<{ id: string; role: 'admin' | 'user' }>) {
      const user = state.users.find(u => u.id === action.payload.id);
      if (user) {
        user.role = action.payload.role;
      }
    },
  },
});

export const { setUserRole } = usersSlice.actions;

export default usersSlice.reducer;
