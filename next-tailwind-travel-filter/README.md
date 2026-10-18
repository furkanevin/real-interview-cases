# Travel & Tour Filtering UI

🇬🇧 English | [🇹🇷 Türkçe](./README.tr.md)

> **Level:** Intermediate · **Estimated time:** 3–4 days · **Tech:** Next.js 15 (App Router), TypeScript, Tailwind CSS, Context API

## 📋 Task

Build a **category-based filtering** UI for a travel site that lists tours, tickets, car rentals and transfers. The provided Figma design is a reference; it doesn't have to match exactly and you are free to improve it visually. The page must be **responsive**.

### Navbar

- A navbar that fits the overall design of the site.
- **Favorites**, **Cart** and **Login** (or user profile) in the top right.
- Clicking the **burger menu** in the top left opens a **popup** with the filters.

### Filter popup

- Categories in the top-left corner of the popup: **Tours, Tickets, Rent, Transfer**.
- The user picks a category first; that category's filter options appear below it.
- Choosing another category shows that category's filters. **Searching two categories at the same time is not allowed.**
- All categories may use the same or similar filter fields.

### List

- **Tour cards** are listed when the page loads.
- Cards matching the filters chosen in the popup are listed.
- Mock data may be used.

### Colours

| Token | Value |
|---|---|
| `primary-400` | `#F2A945` |
| `primary-500` | `#F78410` |
| `primary-600` | `#E07516` |

### Delivery

The project must be deployed to **Vercel**.

## 💡 Solution

- Mock data and types live in separate files: `src/data/mock-data.ts`, `src/types/index.ts`.
- The selected category and filter values are kept with the **Context API** in `src/context/filter-context.tsx`, so the popup and the card list share the same state.
- Switching categories resets the previous category's filters, which prevents searching two categories at once.
- Components are grouped into `layout` (navbar etc.), `filters` (popup and filter fields) and `cards`.
- The brand colours are added to the Tailwind config as a `primary` palette.

## 🚀 Getting started

```bash
npm install
npm run dev   # http://localhost:3000
```
