import type { Draft, PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { THomeState } from './types';

const initialState: THomeState = {
  name: '',
  profileImage: '',
};

export const setHomeState = (
  state: Draft<THomeState>,
  action: PayloadAction<THomeState['name']>,
) => {
  state.name = action.payload;
};

export const slice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setHome: setHomeState,
  },
});

export const { setHome } = slice.actions;
export default slice.reducer;
