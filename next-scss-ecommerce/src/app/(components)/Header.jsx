import Link from 'next/link';
import BasketButton from './BasketButton';

async function getData() {
  const res = await fetch(`https://fakestoreapi.com/products/categories`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

const Header = async () => {
  const categories = await getData();

  return (
    <header>
      <div className="container">
        <Link href={'/'} className="logo">
          <h1>SCSS Store</h1>
          <p>Next.js e-commerce</p>
        </Link>

        <nav>
          {categories?.map((item) => (
            <Link key={item} href={`/category/${item}`}>{item}</Link>
          ))}
        </nav>

        <BasketButton />
      </div>
    </header>
  );
};

export default Header;
