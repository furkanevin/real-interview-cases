import { configureStore } from '@reduxjs/toolkit';
import cartReducer, { CART_STORAGE_KEY } from './slices/cartSlice';
import { productsApi } from './query/productsApi';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware),
});

// Sepet her değiştiğinde localStorage'a yazılır
let previousItems = store.getState().cart.cartItems;
store.subscribe(() => {
  const { cartItems } = store.getState().cart;
  if (cartItems !== previousItems) {
    previousItems = cartItems;
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
  }
});

export default store;
