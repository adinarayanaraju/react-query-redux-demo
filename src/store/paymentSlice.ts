import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface PaymentMethod {
  id: string;
  type: 'card' | 'paypal';
  last4: string;
}

interface PaymentState {
  methods: PaymentMethod[];
  defaultMethodId: string | null;
}

const initialState: PaymentState = {
  methods: [
    { id: 'pm1', type: 'card', last4: '1234' },
    { id: 'pm2', type: 'card', last4: '5678' },
    { id: 'pm3', type: 'paypal', last4: '...com' },
  ],
  defaultMethodId: 'pm1',
};

export const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    addPaymentMethod(state, action: PayloadAction<Omit<PaymentMethod, 'id'>>) {
      const newMethod = { ...action.payload, id: `pm${state.methods.length + 1}` };
      state.methods.push(newMethod);
    },
    removePaymentMethod(state, action: PayloadAction<string>) {
      state.methods = state.methods.filter(m => m.id !== action.payload);
      if (state.defaultMethodId === action.payload) {
        state.defaultMethodId = state.methods.length > 0 ? state.methods[0].id : null;
      }
    },
    setDefaultPaymentMethod(state, action: PayloadAction<string>) {
      state.defaultMethodId = action.payload;
    },
  },
});

export const { addPaymentMethod, removePaymentMethod, setDefaultPaymentMethod } = paymentSlice.actions;

export default paymentSlice.reducer;
