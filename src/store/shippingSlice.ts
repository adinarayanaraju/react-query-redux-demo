import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ShippingState {
  defaultAddressId: string | null;
  deliverySpeed: 'standard' | 'express' | 'eco-friendly';
  deliveryInstructions: string;
}

const initialState: ShippingState = {
  defaultAddressId: null,
  deliverySpeed: 'standard',
  deliveryInstructions: '',
};

export const shippingSlice = createSlice({
  name: 'shipping',
  initialState,
  reducers: {
    setDefaultAddress(state, action: PayloadAction<string | null>) {
      state.defaultAddressId = action.payload;
    },
    setDeliverySpeed(state, action: PayloadAction<'standard' | 'express' | 'eco-friendly'>) {
      state.deliverySpeed = action.payload;
    },
    setDeliveryInstructions(state, action: PayloadAction<string>) {
      state.deliveryInstructions = action.payload;
    },
  },
});

export const { setDefaultAddress, setDeliverySpeed, setDeliveryInstructions } = shippingSlice.actions;

export default shippingSlice.reducer;
