# University List: Filtering, Pagination and Login

🇬🇧 English | [🇹🇷 Türkçe](./README.tr.md)

> **Level:** Intermediate · **Estimated time:** 3–4 days · **Tech:** React 18, Vite, React Router, Context API, Tailwind CSS, Axios, json-server

> ℹ️ The original task text was not saved, so the task below was reconstructed from the solution code.

## 📋 Task

Build an app for students who want to study abroad, listing university programmes with detailed filtering. Only registered users can enter the app.

### Requirements

**Authentication**
- **Register page (`/register`):** Sign up with name, email and password. The same email cannot be registered twice.
- **Login page (`/`):** Email and password check; on success, redirect to the list.

**List (`/main`)**
- University cards: logo, name, country, duration, language and fee.
- Filters in a side panel:
  - Dropdowns for university, country, duration and language
  - A **range slider** for the fee
  - Sorting options (e.g. fee ascending/descending)
  - A "Clear filters" button
- **Pagination**
- Filters, sorting and the current page are kept **in the URL**.

**Detail (`/main/:id`)**
- All information about the selected university.

**Other**
- Loading, error and 404 pages.

## 💡 Solution

- **json-server** is used as the backend; data lives in `db.json` (`universities`, `users`).
- Filtering, sorting and pagination are delegated entirely to json-server query parameters: `country=`, `cost_gte=`, `cost_lte=`, `_sort=`, `_order=`, `_page=`, `_limit=`. The total count is read from the `X-Total-Count` header.
- All filter values are kept in the URL with `useSearchParams`. Changing a filter resets the page to 1.
- The list data is managed with `UniversityContext`.
- Dropdown options are built from the data with duplicates removed (`utils/removeDuplicates.js`).
- Libraries: `react-select`, `react-range-slider-input`, `react-paginate`.

## 🚀 Getting started

In two separate terminals:

```bash
npm install
npm run server   # json-server → http://localhost:3000
npm run dev      # http://localhost:5173
```

Demo login: `demo@example.com` / `password1`
