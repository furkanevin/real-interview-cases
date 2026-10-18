'use client';
import { useBasketContext } from '../context/basketContext';
import ItemCard from './ItemCard';

const CartItems = () => {
  const { basket } = useBasketContext();

  return (
    <div>
      {basket.length === 0 ? (
        <p>Your basket is empty.</p>
      ) : (
        basket.map((product) => <ItemCard product={product} key={product.id} />)
      )}
    </div>
  );
};

export default CartItems;
