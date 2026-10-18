# Recipe Finder

🇬🇧 English | [🇹🇷 Türkçe](./README.tr.md)

> **Level:** Beginner–Intermediate · **Estimated time:** 2–3 days · **Tech:** Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS 4, Spoonacular API

## 📋 Task

Build a **Next.js** app where users search recipes with filters, see the results on a separate page and view the details of each recipe.

### 1. Search page (home page)

- Styled with Tailwind CSS; the design is up to you.
- Form fields:
  - A text input for the recipe **query** (e.g. "pasta")
  - A dropdown for **cuisine** (Italian, Mexican, Chinese, etc., at least three options)
  - A number input for the maximum **preparation time** in minutes
- The **"Next"** button starts disabled and becomes enabled once at least one of the three fields is filled in.
- Clicking it navigates to the `recipes` page with the values passed as query parameters.

### 2. Recipes page (`/recipes`)

- Fetch data **on the server (SSR)**:
  `https://api.spoonacular.com/recipes/complexSearch?query=&cuisine=&maxReadyTime=&apiKey=`
- Cache the API response for **1 minute**.
- Show each recipe's title and image; clicking one navigates to `recipes/[id]`.
- Handle data-fetching errors.

### 3. Recipe details page (`/recipes/[id]`)

- Use the `https://api.spoonacular.com/recipes/{id}/information?apiKey=` endpoint.
- Show the **recipe title** and the **list of ingredients**. Extra info such as preparation time, servings or a summary is optional.

### 4. Other requirements

- Use React **`Suspense`** for loading states.
- The whole UI must use Tailwind CSS and be responsive and accessible.
- Keep the API key in an environment variable.
- Set up **ESLint** and **Prettier**.
- The README must cover setup, features and architecture.

## 💡 Solution

| File | Description |
|---|---|
| `src/app/page.tsx` | Home page with the search form |
| `src/app/recipes/page.tsx` | Search results (SSR, `revalidate = 60`) |
| `src/app/recipes/[id]/page.tsx` | Recipe details page |
| `src/services/recipe.service.ts` | Spoonacular API requests |
| `src/components/skeletons/` | Skeleton components used as `Suspense` fallbacks |
| `src/app/error.tsx`, `loading.tsx` | Global error and loading screens |

- The result list is wrapped in `Suspense`, showing a skeleton until data arrives.
- The cache duration is set to 1 minute with `export const revalidate = 60`.
- The form computes the "Next" button state from the filled fields and carries the values as URL parameters.

## 🚀 Getting started

Requirements: Node.js 18.17+ and a free [Spoonacular API key](https://spoonacular.com/food-api)

```bash
npm install
cp .env.example .env.local   # add your API key
npm run dev                  # http://localhost:3000
```

Production build:

```bash
npm run build
npm start
```
