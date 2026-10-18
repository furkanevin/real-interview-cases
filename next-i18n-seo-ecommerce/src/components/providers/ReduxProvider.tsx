"use client";

import { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "@/store";
import { hydrateCart, type CartItem } from "@/store/slices/cartSlice";

const CART_STORAGE_KEY = "cart";

interface ReduxProviderProps {
  children: React.ReactNode;
}

export default function ReduxProvider({ children }: ReduxProviderProps) {
  // Sepet sunucuda boş başlar (hydration uyumu için); tarayıcıda localStorage'dan yüklenir
  // ve her değişiklikte tekrar yazılır.
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(CART_STORAGE_KEY) ?? "[]") as CartItem[];
      if (Array.isArray(saved) && saved.length > 0) store.dispatch(hydrateCart(saved));
    } catch {
      // bozuk veri: boş sepetle devam et
    }

    let previousItems = store.getState().cart.items;
    return store.subscribe(() => {
      const { items } = store.getState().cart;
      if (items !== previousItems) {
        previousItems = items;
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
      }
    });
  }, []);

  return <Provider store={store}>{children}</Provider>;
}
