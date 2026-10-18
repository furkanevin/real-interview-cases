# SaaS Admin Dashboard

🇬🇧 English | [🇹🇷 Türkçe](./README.tr.md)

> **Level:** Intermediate · **Estimated time:** 3–5 days · **Tech:** React 18, Vite, TypeScript, SCSS, Recharts, Framer Motion, React Router

![Screenshot](./screenshot.webp)

## 📋 Task

Replicate, **as precisely as possible**, the UI and interactions of a **SaaS client dashboard** shown in a screen recording (GIF) sent to you.

### Requirements

1. Study the UI and interactions in the GIF.
2. Use any frontend technology you like (React, Vue, Angular, etc.).
3. Aim for **pixel-perfect** accuracy.
4. Pay attention to details such as **animations, transitions and responsiveness**.
5. Deploy the project and provide a **live demo** link.
6. Share the code in a private GitHub repository.

### Evaluation

- A user-friendly, visually appealing dashboard design
- Functionality and responsive behaviour across devices
- Animations that improve the user experience
- Code quality, clear usage instructions and a clean design

> ℹ️ The GIF provided with the task is not included in this repo.

## 💡 Solution

- **Layout:** `Navbar`, a left `Menu`, the content area and a `Footer`. The layout and routes are defined once with `createBrowserRouter` outside the `App` component (`/` and `/users/:id`).
- **Menu:** Built from the `menu` array in `src/data.ts`. Pages that are not part of the case have no `url`, so they are shown as disabled items instead of dead links. The active page is highlighted with `NavLink`.
- **Home page:** A dashboard split into boxes with CSS Grid:
  - `TopBox`: recent messages list
  - `ChartBox`: small line charts for total users, products, revenue and ratio
  - `BigChartBox`: revenue analytics area chart
  - `PieChartBox`: leads by source
  - `BarChartBox`: total visits and profit charts
- **User page (`/users/:id`):** The `Single` component shows user details, an activity chart and a timeline.
- Charts use **Recharts**; entry animations in `TopBox` and `Members` use **Framer Motion**.
- Responsive breakpoints are defined as mixins in `styles/responsive.scss`; colours are in `styles/variables.scss`.
- Sample data is in `src/data.ts`.

## 🚀 Getting started

```bash
npm install
npm run dev   # http://localhost:5173
```
