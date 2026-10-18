# E-Commerce with Redux Toolkit Query

🇬🇧 English | [🇹🇷 Türkçe](./README.tr.md)

> **Level:** Beginner–Intermediate · **Estimated time:** 1–2 days · **Tech:** React 18, Vite, Redux Toolkit, RTK Query, React Router, React Bootstrap, React Toastify, Fake Store API

![Screenshot](./screenshot.webp)

> ℹ️ The original task text was not saved, so the task below was reconstructed from the solution code.

## 📋 Task

Build an e-commerce app that lists products from the [Fake Store API](https://fakestoreapi.com/) and manages a shopping cart. Use **RTK Query** for data fetching and a **Redux Toolkit slice** for the cart.

### Requirements

- **Home page (`/`):** Products as cards (image, title, price, "Add to cart" button).
- **Cart page (`/cart`):** Items in the cart, increase/decrease quantity, remove items, clear the cart and the total price.
- The header shows the total number of items in the cart.
- The cart must persist across **page reloads**.
- Cart actions show a toast notification.
- Navigating to a non-existent page shows a 404 page.

## 💡 Solution

- `src/redux/query/productsApi.js`: The products endpoint is defined with `createApi` and `fetchBaseQuery`; components get loading, error and data states from the `useGetProductsQuery` hook.
- `src/redux/slices/cartSlice.js`: **Pure** reducers for adding, decreasing, removing and clearing. Totals are not stored in state; the memoized `selectCartTotals` selector derives the item count and amount from the cart.
- `src/redux/store.js`: Creates the store and saves the cart to `localStorage` with `store.subscribe` whenever it changes. The cart is read from `localStorage` on startup.
- Side effects stay out of reducers: toast notifications are shown by the components that dispatch the actions.
- The UI is built with React Bootstrap components.

## 🚀 Getting started

```bash
npm install
npm run dev   # http://localhost:5173
```
