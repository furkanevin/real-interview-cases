'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const BasketContext = createContext();

export function BasketProvider({ children }) {
  // localStorage only exists in the browser, so the basket starts empty on the
  // server and is loaded from localStorage after the component mounts.
  const [basket, setBasket] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('basket'));
      if (Array.isArray(saved)) setBasket(saved);
    } catch {
      // ignore corrupt data and start with an empty basket
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) localStorage.setItem('basket', JSON.stringify(basket));
  }, [basket, isLoaded]);

  const addToBasket = (newProduct) => {
    const found = basket.find((i) => i.id === newProduct.id);

    if (found) {
      const updated = { ...found, amount: found.amount + 1 };

      const newBasket = basket.map((item) =>
        item.id === updated.id ? updated : item
      );

      setBasket(newBasket);

      toast.info(`Ürün miktarı arttırıldı (${updated.amount})`);
    } else {
      setBasket([...basket, { ...newProduct, amount: 1 }]);

      toast.success('Ürün sepete eklendi');
    }
  };

  const removeFromBasket = (delete_id) => {
    const filtred = basket.filter((i) => i.id !== delete_id);

    setBasket(filtred);

    toast.error('Ürün sepetten kaldırıldı');
  };

  const decreaseAmount = (delete_id) => {
    const found = basket.find((i) => i.id === delete_id);

    if (found.amount > 1) {
      const updated = { ...found, amount: found.amount - 1 };

      const newBasket = basket.map((i) => (i.id === updated.id ? updated : i));

      setBasket(newBasket);

      toast.info(`Ürünün miktarı azaltıldı (${updated.amount})`);
    } else {
      removeFromBasket(delete_id);
    }
  };

  return (
    <BasketContext.Provider
      value={{ basket, addToBasket, removeFromBasket, decreaseAmount }}
    >
      {children}
    </BasketContext.Provider>
  );
}

export function useBasketContext() {
  return useContext(BasketContext);
}
