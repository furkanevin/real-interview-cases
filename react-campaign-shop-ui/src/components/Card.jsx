const Card = ({
  product,
  isPointMode,
  quantity = 0,
  canIncrease = true,
  onIncrease,
  onDecrease,
}) => {
  return (
    <div className="border p-2 rounded flex flex-col gap-3">
      <img
        className="rounded w-full object-contain"
        src={product.image}
        alt={product.name}
      />

      <h4 className="font-bold text-xl line-clamp-1">{product.name}</h4>
      <p>{product.spec}</p>

      {isPointMode ? (
        <div className="flex justify-between items-center">
          <p className="font-bold">{product.point} Puan</p>
          <div className="border rounded-full py-1 px-4 flex items-center gap-4">
            <button
              onClick={onDecrease}
              disabled={quantity === 0}
              aria-label={`${product.name} adedini azalt`}
              className="disabled:text-gray-300"
            >
              −
            </button>
            <span className="min-w-[1ch] text-center">{quantity}</span>
            <button
              onClick={onIncrease}
              disabled={!canIncrease}
              aria-label={`${product.name} adedini artır`}
              className="disabled:text-gray-300"
            >
              +
            </button>
          </div>
        </div>
      ) : (
        <p className="font-bold">
          Çekilişe verilen ürün sayısı: {product.amount} adet
        </p>
      )}
    </div>
  );
};

export default Card;
