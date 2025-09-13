import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SilentHours {
  start: string;
  end: string;
}

export interface NotificationSettings {
  orderConfirmation: boolean;
  shippingUpdate: boolean;
  promotional: boolean;
  silentHours: SilentHours | null;
}

const initialState: NotificationSettings = {
  orderConfirmation: true,
  shippingUpdate: true,
  promotional: false,
  silentHours: null,
};

export const notificationSettingsSlice = createSlice({
  name: 'notificationSettings',
  initialState,
  reducers: {
    toggleNotificationSetting(state, action: PayloadAction<keyof Omit<NotificationSettings, 'silentHours'>>) {
      state[action.payload] = !state[action.payload];
    },
    setSilentHours(state, action: PayloadAction<SilentHours | null>) {
      state.silentHours = action.payload;
    },
  },
});

export const { toggleNotificationSetting, setSilentHours } = notificationSettingsSlice.actions;

export default notificationSettingsSlice.reducer;
