# Covid-19 World Map

🇬🇧 English | [🇹🇷 Türkçe](./README.tr.md)

> **Level:** Intermediate · **Estimated time:** 2–3 days · **Tech:** React 18, Vite, Redux, Redux-Saga, React Router, Tailwind CSS, Vitest, React Testing Library

![Screenshot](./screenshot.webp)

> ℹ️ The original task text was not saved, so the task below was reconstructed from the solution code.

## 📋 Task

Build an app that shows each country's Covid-19 statistics through an interactive **world map**. State must be managed with **Redux + Redux-Saga**, and the app must be **tested**.

### Requirements

- **Home page:** A clickable world map. Clicking a country navigates to that country's detail page.
- **Search:** Typing a country name into the search box in the navbar also navigates to the detail page.
- **Detail page (`/detail?country=`):** The country's flag and statistics such as confirmed cases, deaths, recoveries and active cases.
- Data fetching must be handled with **Redux-Saga**.
- Loading and error states must be shown to the user.
- Large numbers must be shortened for readability (e.g. `1.2M`).
- Write tests for the detail page with **Vitest + React Testing Library** (loading, error and data states).

### APIs

- Statistics: [Covid-19 Statistics (RapidAPI)](https://rapidapi.com/axisbits-axisbits-default/api/covid-19-statistics), `GET /reports?q={country}`
- Flags: [REST Countries](https://restcountries.com/), `GET /v3.1/name/{country}`

## 💡 Solution

- The map uses `@react-map/world`; the selected country is passed to the detail page as a URL parameter via `onSelect`.
- `redux/sagas/statisticsSaga.js` fetches the statistics and the flag in one flow and dispatches the result to the reducer.
- API requests live in `src/service` and `src/utils/api.js`. The RapidAPI key is read from an environment variable.
- `DetailPage.test.jsx` mocks the store with `redux-mock-store` and tests the loading, error and success states.

## 🚀 Getting started

Requirements: a free [RapidAPI](https://rapidapi.com/) account subscribed to the Covid-19 Statistics API

```bash
npm install
cp .env.example .env   # set VITE_RAPIDAPI_KEY
npm run dev            # http://localhost:5173
npm test               # Vitest
```
