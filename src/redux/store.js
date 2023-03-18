import { configureStore } from '@reduxjs/toolkit';

import rootReducer from '../redux/root-reduсer';

export const store = configureStore({
  reducer: rootReducer,
  
});

export default store;