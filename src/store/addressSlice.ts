import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Address {
  id: string;
  address: string;
}

interface AddressState {
  addresses: Address[];
}

const initialState: AddressState = {
  addresses: [{ id: 'a1', address: '123 Main St, City, Country' }],
};

export const addressSlice = createSlice({
  name: 'addresses',
  initialState,
  reducers: {
    addAddress(state, action: PayloadAction<string>) {
      const newAddress = {
        id: `a${state.addresses.length + 1}`,
        address: action.payload,
      };
      state.addresses.push(newAddress);
    },
    removeAddress(state, action: PayloadAction<string>) {
      state.addresses = state.addresses.filter(a => a.id !== action.payload);
    },
    updateAddress(state, action: PayloadAction<Address>) {
      const index = state.addresses.findIndex(a => a.id === action.payload.id);
      if (index !== -1) {
        state.addresses[index] = action.payload;
      }
    },
  },
});

export const { addAddress, removeAddress, updateAddress } = addressSlice.actions;

export default addressSlice.reducer;
