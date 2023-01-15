import { configureStore } from '@reduxjs/toolkit';
import riddleReducer from '../features/riddle/riddleSlice';
import sideNavReducer from '../features/sideNav/sideNavSlice';

export default configureStore({
  reducer: {
    riddle: riddleReducer,
    sideNav: sideNavReducer
  }
});
