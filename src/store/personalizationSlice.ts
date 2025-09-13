import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface PersonalizationState {
  language: string;
  currency: string;
}

const initialState: PersonalizationState = {
  language: 'English',
  currency: 'USD',
};

export const personalizationSlice = createSlice({
  name: 'personalization',
  initialState,
  reducers: {
    setLanguage(state, action: PayloadAction<string>) {
      state.language = action.payload;
    },
    setCurrency(state, action: PayloadAction<string>) {
      state.currency = action.payload;
    },
  },
});

export const { setLanguage, setCurrency } = personalizationSlice.actions;

export default personalizationSlice.reducer;
