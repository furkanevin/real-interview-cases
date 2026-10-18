import { getByCategory } from '@/app/utils/api';
import List from './List';

const Category = async ({ params }) => {
  const category = decodeURIComponent(params.id);
  const products = await getByCategory(category);

  return (
    <div className="category-page">
      <div className="container">
        <h1>{category}</h1>
        <List products={products} />
      </div>
    </div>
  );
};

export default Category;
