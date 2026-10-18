# E-Commerce with Redux Toolkit Query

🇬🇧 English | [🇹🇷 Türkçe](./README.tr.md)

> **Level:** Beginner–Intermediate · **Estimated time:** 1–2 days · **Tech:** React 18, Vite, Redux Toolkit, RTK Query, React Router, React Bootstrap, React Toastify, Fake Store API

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
- `src/redux/slices/cartSlice.js`: Reducers for adding, decreasing, removing, clearing and computing totals. The cart is written to `localStorage` on every change and read from it on startup.
- Notifications are shown from inside the reducers with `react-toastify`.
- The UI is built with React Bootstrap components.

## 🚀 Getting started

```bash
npm install
npm run dev   # http://localhost:5173
```
