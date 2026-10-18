import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import NewsFeed from '../NewsFeed/NewsFeed';
import { api, matchesCategory } from '../../utils/api';
import './News.css';

const ITEMS_PER_PAGE = 3;

const News = ({ category }) => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(0);

  useEffect(() => {
    api
      .get('/feed')
      .then((res) => setNews(res.data))
      .catch(() => setError('News could not be loaded. Is json-server running?'))
      .finally(() => setIsLoading(false));
  }, []);

  // kategori değişince ilk sayfaya dön
  useEffect(() => {
    setPage(0);
  }, [category]);

  const filteredNews = news.filter((item) => matchesCategory(item, category));
  const pageCount = Math.ceil(filteredNews.length / ITEMS_PER_PAGE);
  const offset = page * ITEMS_PER_PAGE;
  const currentItems = filteredNews.slice(offset, offset + ITEMS_PER_PAGE);

  return (
    <div>
      <h1>News</h1>

      {isLoading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-danger">{error}</p>}
      {!isLoading && !error && filteredNews.length === 0 && (
        <p className="text-center">No news found in this category.</p>
      )}

      {currentItems.map((item) => (
        <NewsFeed key={item.id} singleNews={item} />
      ))}

      {pageCount > 1 && (
        <ReactPaginate
          breakLabel="..."
          previousLabel="‹ prev"
          nextLabel="next ›"
          onPageChange={(event) => setPage(event.selected)}
          forcePage={page}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          className="pagination"
        />
      )}
    </div>
  );
};

export default News;
