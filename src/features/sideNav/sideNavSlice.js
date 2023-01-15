import { createSlice } from '@reduxjs/toolkit';

export const sideNavSlice = createSlice({
  name: 'sideNav',
  initialState: {
    show: false,
    displayWidth: window.innerWidth
  },
  reducers: {
    updateShow: (state) => {
      state.show = state.show ? false : true;
    },
    updateDisplayWidth: (state, action) => {
      state.displayWidth = action.payload;
    }
  }
});

export const { updateShow, updateDisplayWidth } = sideNavSlice.actions;

export default sideNavSlice.reducer;
