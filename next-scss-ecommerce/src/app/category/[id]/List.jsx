'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const PAGE_SIZE = 3;

const List = ({ products }) => {
  const [limit, setLimit] = useState(PAGE_SIZE);

  return (
    <>
      <div className="cards-wrapper">
        {products.slice(0, limit).map((product) => (
          <Link
            href={`/product/${product.id}`}
            key={product.id}
            className="card"
          >
            <Image src={product.image} width={200} height={300} alt={product.title} />
            <h3>{product.title}</h3>
            <b>${product.price}</b>
          </Link>
        ))}
      </div>

      {limit < products.length && (
        <div className="load-more">
          <button onClick={() => setLimit(limit + PAGE_SIZE)}>LOAD MORE</button>
        </div>
      )}
    </>
  );
};

export default List;
