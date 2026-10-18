import { useSearchParams } from 'react-router-dom';
import News from '../News/News';
import Stocks from '../Stocks/Stocks';
import { CATEGORIES } from '../../utils/api';
import './Home.css';

const Home = () => {
  // seçili kategori URL'de tutulur: /?category=Technology
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('category') ?? 'Home';

  const handleCategoryClick = (name) => {
    setSearchParams(name === 'Home' ? {} : { category: name });
  };

  return (
    <div>
      <h1 className="mt-4">
        Capital<span>Current</span>
      </h1>

      <nav aria-label="News categories">
        <ul className="d-flex list-unstyled gap-md-3 gap-sm-1 fs-6 justify-content-center align-items-center mt-4">
          {CATEGORIES.map(({ name }) => (
            <li key={name}>
              <button
                type="button"
                className={`category-btn ${activeCategory === name ? 'active' : ''}`}
                aria-current={activeCategory === name ? 'page' : undefined}
                onClick={() => handleCategoryClick(name)}
              >
                {name}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="home">
        <main>
          <News category={activeCategory} />
        </main>
        <aside>
          <Stocks />
        </aside>
      </div>
    </div>
  );
};

export default Home;
