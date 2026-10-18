# Weather Dashboard UI

🇬🇧 English | [🇹🇷 Türkçe](./README.tr.md)

> **Level:** Beginner · **Estimated time:** 1–2 days · **Tech:** React 18, Vite, SCSS, Swiper

> ℹ️ The original task text was not saved, so the task below was reconstructed from the solution code.

## 📋 Task

Code a **weather dashboard** UI from the provided design. The data is read from a ready-made JSON file; no real API is needed. The focus is on **splitting the UI into components** and **matching the design exactly with SCSS**.

### Requirements

The page has two columns:

**Left column**
- City name, current temperature, weather type and date
- Side menu: Weather, Cities, Settings
- Image cards titled "Activities in your area"
- Horizontally scrollable (slider) cards

**Right column**
- Logo
- **Hourly forecast:** Temperatures for the hours of the day
- **Air conditions:** Real feel, wind, chance of rain, UV index
- Weekly weather

Data must be read from `src/db.json`.

## 💡 Solution

- The design is split into six components (`Component0` … `Component5`), each with its own `index.jsx` and `.scss` file.
- Data is imported directly from `db.json` (`import data from "../../db.json"`), with no separate request.
- The weekly weather cards use `swiper`.
- The main layout is built with Flexbox as `container-left` / `container-right`.

## 🚀 Getting started

```bash
npm install
npm run dev   # http://localhost:5173
```
