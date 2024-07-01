// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './counter/counterSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;