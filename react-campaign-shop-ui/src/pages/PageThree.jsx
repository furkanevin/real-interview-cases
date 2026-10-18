import { useState } from 'react';
import BackButton from '../components/BackButton';
import Header from '../components/Header';
import { IoIosSearch } from 'react-icons/io';
import { products } from '../constants';
import Card from '../components/Card';
import { SlBasket } from 'react-icons/sl';

// Kullanıcının harcayabileceği toplam puan
const POINT_BALANCE = 500;

const PageThree = () => {
  const [search, setSearch] = useState('');
  // { [ürün adı]: adet }
  const [cart, setCart] = useState({});

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.trim().toLowerCase())
  );

  const totalPoints = products.reduce(
    (sum, product) => sum + (cart[product.name] || 0) * product.point,
    0
  );
  const remainingPoints = POINT_BALANCE - totalPoints;
  const cartItems = products.filter((product) => cart[product.name] > 0);

  const changeQuantity = (product, change) => {
    setCart((prev) => {
      const quantity = Math.max((prev[product.name] || 0) + change, 0);
      return { ...prev, [product.name]: quantity };
    });
  };

  const handleOrder = () => {
    alert(`Siparişiniz alındı! Harcanan puan: ${totalPoints}`);
    setCart({});
  };

  return (
    <div className="max-w-[1440px] mx-auto lg:py-20 p-10">
      <Header />

      <div className="flex gap-5  my-10 border-b pb-5">
        <BackButton />

        <div className="flex justify-between items-center border rounded flex-1 px-4 gap-2">
          <input
            className="flex-1 outline-none"
            placeholder="Ürün adına göre arayın"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <IoIosSearch className="text-lg text-gray-500" />
        </div>
      </div>

      <div className="flex gap-6 max-md:flex-col-reverse">
        <div className="flex-1">
          {filteredProducts.length === 0 ? (
            <p className="text-gray-500 text-center py-10">
              Aramanıza uygun ürün bulunamadı.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
              {filteredProducts.map((product) => (
                <Card
                  key={product.name}
                  product={product}
                  isPointMode
                  quantity={cart[product.name] || 0}
                  canIncrease={product.point <= remainingPoints}
                  onIncrease={() => changeQuantity(product, 1)}
                  onDecrease={() => changeQuantity(product, -1)}
                />
              ))}
            </div>
          )}
        </div>

        <div className="md:w-[240px] shrink-0">
          <div className="flex items-center">
            <p className="bg-blue-500 text-white p-2 font-semibold text-sm whitespace-nowrap rounded flex-1">
              Kalan Puanınız
            </p>

            <span className="border border-blue-500 rounded p-2 font-semibold">
              {remainingPoints}
            </span>
          </div>

          <div className="border mt-8 mb-2 p-2">
            <div className="border-b flex justify-between pb-2">
              <h3>Sepetiniz</h3>
              <SlBasket />
            </div>

            {cartItems.length === 0 ? (
              <p className="text-gray-400 text-sm my-3">Sepetiniz boş.</p>
            ) : (
              <ul className="text-sm my-3 flex flex-col gap-1">
                {cartItems.map((product) => (
                  <li key={product.name} className="flex justify-between gap-2">
                    <span className="line-clamp-1">
                      {cart[product.name]} × {product.name}
                    </span>
                    <span className="whitespace-nowrap">
                      {cart[product.name] * product.point} P
                    </span>
                  </li>
                ))}
              </ul>
            )}

            <h2 className="font-semibold text-sm border-t pt-2">
              Toplam {totalPoints} Puan
            </h2>
          </div>

          <button
            onClick={handleOrder}
            disabled={cartItems.length === 0}
            className="bg-orange-500 text-white w-full p-2 rounded hover:bg-orange-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Siparişi Tamamla
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageThree;
