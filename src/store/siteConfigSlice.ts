import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SiteConfigState {
  logoUrl: string;
  themeColor: string;
}

const initialState: SiteConfigState = {
  logoUrl: '/vite.svg',
  themeColor: '#646cff',
};

export const siteConfigSlice = createSlice({
  name: 'siteConfig',
  initialState,
  reducers: {
    setLogoUrl(state, action: PayloadAction<string>) {
      state.logoUrl = action.payload;
    },
    setThemeColor(state, action: PayloadAction<string>) {
      state.themeColor = action.payload;
    },
  },
});

export const { setLogoUrl, setThemeColor } = siteConfigSlice.actions;

export default siteConfigSlice.reducer;
