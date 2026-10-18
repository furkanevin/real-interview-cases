# Weather Dashboard UI

🇬🇧 English | [🇹🇷 Türkçe](./README.tr.md)

> **Level:** Beginner · **Estimated time:** 1–2 days · **Tech:** React 18, Vite, SCSS

![Screenshot](./screenshot.webp)

> ℹ️ The original task text was not saved, so the task below was reconstructed from the solution code.

## 📋 Task

Code a **weather dashboard** UI from the provided design. The data is read from a ready-made JSON file; no real API is needed. The focus is on **splitting the UI into components** and **matching the design exactly with SCSS**.

### Requirements

- **Navigation:** A side menu with the logo and links (Weather, Cities, Map, Settings).
- **Current weather:** City name, date, weather condition and current temperature.
- **Activities:** Image cards titled "Activities in your area".
- **Weekly forecast:** A card for each day of the week, with buttons to switch between last week, this week and next week.
- **Hourly forecast:** Temperatures for the hours of the day.
- **Air conditions:** Real feel, wind, chance of rain and UV index.
- The layout must be responsive.
- All values must be read from a local JSON file.

## 💡 Solution

The solution was refactored to serve as a clean reference: every part of the screen is a named component, all values come from the data file, and the UI is readable on both desktop and mobile.

| Component | Responsibility |
|---|---|
| `Sidebar` | Logo and navigation (horizontal bar on mobile) |
| `CurrentWeather` | City, date, condition and temperature |
| `Activities` | Activity cards |
| `WeeklyForecast` | 7-day forecast with previous / next week navigation |
| `HourlyForecast` | Hourly temperatures as a bar chart |
| `AirConditions` | Real feel, wind, chance of rain and UV index |

- **Data:** Everything lives in `src/data/weather.json` with clear field names (`temperature`, `airConditions.wind`, `hourly[]`, `weekly[]`). Nothing is hard-coded in the components; data is passed down from `App` as props.
- **Helpers:** `src/utils/weather.js` maps a condition (e.g. `thunder`) to its icon and label, and formats dates with `Intl.DateTimeFormat`.
- **Styling:** Each component has its own SCSS file using BEM-style class names. Shared colours, the glass panel mixin and breakpoints live in `src/styles/_variables.scss`.
- **Readability:** Semi-transparent dark panels with `backdrop-filter` keep the text readable on top of the stormy background image.
- **Responsive:** Three columns on desktop, a single column on tablets and phones.
- **Performance:** The background image was resized from 4096px (3.4 MB) to 1920px (about 100 KB), and four unused slider libraries were removed.

## 🚀 Getting started

```bash
npm install
npm run dev   # http://localhost:5173
```
