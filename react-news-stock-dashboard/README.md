# Financial News & Stock Tracker

🇬🇧 English | [🇹🇷 Türkçe](./README.tr.md)

> **Level:** Beginner–Intermediate · **Estimated time:** 2–3 days · **Tech:** React 18, Vite, React Router, Bootstrap, Axios, json-server, React Paginate

> ℹ️ The original task text was not saved, so the task below was reconstructed from the solution code.

## 📋 Task

Build a news site interface that shows financial news and stock/crypto search results. The data follows the format of the [Alpha Vantage](https://www.alphavantage.co/) API (`NEWS_SENTIMENT` and `SYMBOL_SEARCH`).

### Requirements

- **Header:** Site name and a category menu (Home, Economy, Technology, Blockchain). The active category must be highlighted.
- **News list:** Cards with an image, title, summary, author and publish date, with **pagination**.
- **News detail (`/newsDetail/:id`):** The full article and a link to the source.
- **Stock panel:** A side panel with a list of symbols that can be **searched** by symbol.
- Responsive design (Bootstrap grid).

## 💡 Solution

- The free API has a low request limit, so sample API responses were saved to `db.json` and served as a local REST API with **json-server** (`/feed`, `/matches`).
- The news list is paginated with `react-paginate`.
- Stock search filters the already-fetched list on the client.
- Code that calls Alpha Vantage directly is left commented out in `src/constant.js`; you can switch to live data with your own API key.

## 🚀 Getting started

In two separate terminals:

```bash
npm install
npm run server   # json-server → http://localhost:3050
npm run dev      # http://localhost:5173
```

To use the live API, get a free key from [Alpha Vantage](https://www.alphavantage.co/support/#api-key) and copy `src/.env.example` to `.env`.
