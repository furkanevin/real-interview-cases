# Real Estate Listing Filter

🇬🇧 English | [🇹🇷 Türkçe](./README.tr.md)

> **Level:** Beginner–Intermediate · **Estimated time:** 1–2 days · **Tech:** React 18, Vite, React Router, Context API, Tailwind CSS, Axios

> ℹ️ The original task text was not saved, so the task below was reconstructed from the solution code.

## 📋 Task

Build an interface that lists listings from a real estate company's API and filters them by **listing type** and **location**.

### Requirements

- Listings and location data (province/district) are fetched from the API.
- The filter panel has two tabs:
  - **Tab 1:** Listing type (For sale / For rent)
  - **Tab 2:** Province and district selection. The district list depends on the selected province.
- Filters are kept in **URL parameters** (`?tip=&il=&ilçe=`), so they survive page reloads and shared links.
- Listing cards show the title and a shortened description.
- Loading and error states are shown.
- Two different layouts using the same components:
  - `/` → filter on the left, listings on the right
  - `/page-two` → listings on the left, filter on the right

## 💡 Solution

- Fetching and filtering happen in `src/context/apiContext.jsx` with the **Context API**. Filter values are read from the URL with `useSearchParams`, and the list is re-filtered whenever the URL changes.
- **Two tabs, one form:** Both tabs stay in the DOM and the inactive one is only hidden, so a listing type chosen in the first tab and a location chosen in the second are submitted together. The tab buttons are `type="button"`, so switching tabs doesn't submit the form.
- On submit, empty fields are removed from the URL instead of being left behind; the "Clear" button resets every filter.
- The header shows how many listings match out of the total, and results are shown 10 at a time with a "Show more" button.
- Duplicate provinces are removed with `utils/getUnique.js`; the district list updates when the province changes.
- The `Filter` and `Content` components are reused on both pages; only their order changes.

## 🚀 Getting started

```bash
npm install
cp .env.example .env   # set the API URL and key
npm run dev            # http://localhost:5173
```

### API

| Endpoint | Description |
|---|---|
| `GET {VITE_API_BASE_URL}/list?key={VITE_API_KEY}` | Listings |
| `GET {VITE_API_BASE_URL}/locationLookup?key={VITE_API_KEY}` | Provinces / districts |
