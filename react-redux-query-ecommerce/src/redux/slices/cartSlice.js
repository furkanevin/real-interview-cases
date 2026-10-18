import { createSlice, createSelector } from '@reduxjs/toolkit';

export const CART_STORAGE_KEY = 'cartItems';

const loadCartItems = () => {
  try {
    return JSON.parse(localStorage.getItem(CART_STORAGE_KEY)) ?? [];
  } catch {
    return [];
  }
};

// Reducer'lar saf fonksiyonlardır: localStorage'a yazma ve bildirim gösterme gibi
// yan etkiler burada değil, store (persist) ve bileşenlerde (toast) yapılır.
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: loadCartItems(),
  },
  reducers: {
    addToCart(state, action) {
      const existing = state.cartItems.find((item) => item.id === action.payload.id);

      if (existing) {
        existing.cartQuantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, cartQuantity: 1 });
      }
    },

    decreaseCart(state, action) {
      const existing = state.cartItems.find((item) => item.id === action.payload.id);
      if (!existing) return;

      if (existing.cartQuantity > 1) {
        existing.cartQuantity -= 1;
      } else {
        state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
      }
    },

    removeFromCart(state, action) {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
    },

    clearCart(state) {
      state.cartItems = [];
    },
  },
});

export const { addToCart, decreaseCart, removeFromCart, clearCart } = cartSlice.actions;

export const selectCartItems = (state) => state.cart.cartItems;

// Toplamlar state'te tutulmaz, sepetten türetilir (memoized selector)
export const selectCartTotals = createSelector([selectCartItems], (items) => {
  const quantity = items.reduce((sum, item) => sum + item.cartQuantity, 0);
  const amount = items.reduce((sum, item) => sum + item.price * item.cartQuantity, 0);

  return { quantity, amount: Number(amount.toFixed(2)) };
});

export default cartSlice.reducer;
