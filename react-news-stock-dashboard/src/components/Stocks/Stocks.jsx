import { useEffect, useState } from 'react';
import { api } from '../../utils/api';
import './Stocks.css';

const Stocks = () => {
  const [stocks, setStocks] = useState([]);
  const [search, setSearch] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .get('/matches')
      .then((res) => setStocks(res.data))
      .catch(() => setError('Stocks could not be loaded.'));
  }, []);

  // sembol veya şirket adına göre, yazdıkça filtrele
  const query = search.trim().toLowerCase();
  const filteredStocks = stocks.filter(
    (stock) =>
      stock['1. symbol'].toLowerCase().includes(query) ||
      stock['2. name'].toLowerCase().includes(query)
  );

  return (
    <div className="p-2">
      <h1>Stock Market</h1>

      <input
        className="form-control mb-3"
        type="search"
        placeholder="Search by symbol or name"
        aria-label="Search stocks"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {error && <p className="text-danger">{error}</p>}

      <table className="table table-striped table-dark table-responsive">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Symbol</th>
            <th scope="col">Name</th>
            <th scope="col">Currency</th>
            <th scope="col">Match</th>
          </tr>
        </thead>
        <tbody>
          {filteredStocks.map((stock, i) => (
            <tr key={stock['1. symbol']}>
              <th scope="row">{i + 1}</th>
              <td>{stock['1. symbol']}</td>
              <td>{stock['2. name']}</td>
              <td>{stock['8. currency']}</td>
              <td>{stock['9. matchScore']}</td>
            </tr>
          ))}
          {filteredStocks.length === 0 && !error && (
            <tr>
              <td colSpan={5} className="text-center">
                No results
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Stocks;
