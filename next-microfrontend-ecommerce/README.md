# Microfrontend E-Commerce (Next.js + Docker)

🇬🇧 English | [🇹🇷 Türkçe](./README.tr.md)

> **Level:** Advanced · **Estimated time:** 5–7 days · **Tech:** Next.js 14 (App Router), TypeScript, Tailwind CSS, Docker, Docker Compose, Fake Store API

![Screenshot](./screenshot.webp)

> ℹ️ The original task text was not saved, so the task below was reconstructed from the solution code.

## 📋 Task

Split an e-commerce site into two independent Next.js applications using a **microfrontend architecture**. Each app must be developed and run on its own, yet the user should feel like they are using a single site.

### Applications

| App | Port | Responsibility |
|---|---|---|
| **Home** | 3000 | Product list and product detail pages |
| **Cart** | 3001 | Shopping cart management |

### Requirements

- Product data must come from the [Fake Store API](https://fakestoreapi.com/).
- **Home:** Responsive product grid, product detail page, "Add to cart" button with a toast notification.
- **Cart:** List items, increase/decrease quantity, remove items, clear the cart, subtotal/tax/total summary and an empty cart state.
- The **cart state must stay in sync** between the two apps: an item added in Home must appear in Cart immediately.
- Both apps must share common types and services.
- Each app needs a `Dockerfile`, and the whole system must start with a single `docker-compose` command.
- Use TypeScript and Tailwind CSS.

## 💡 Solution

- **Routing:** `next.config.js` in the Home app forwards `/cart/*` requests to the Cart app (3001) with `rewrites`, so the user reaches both apps through one address.
- **Shared code:** The `shared/` folder contains common types (`types`) and the cart service (`services/CartManager.ts`).
- **Cart sync:** `CartManager` stores the cart in `localStorage` (key `e-commerce-cart`) and listens to the browser's `storage` event. A change in one app is reflected in the other instantly, with no need for Redux, BroadcastChannel or URL parameters.
- **Fault tolerance:** Loading states, error screens and safe defaults when `localStorage` is unavailable.

## 🚀 Getting started

Requirements: Node.js 18+, Docker and Docker Compose

**With Docker:**

```bash
docker-compose up --build
```

**Local development:**

```bash
./start-dev.sh
```

or in two separate terminals:

```bash
cd home && npm install && npm run dev   # http://localhost:3000
cd cart && npm install && npm run dev   # http://localhost:3001
```

## 📁 Folder structure

```
├── home/                # Product list and detail app
├── cart/                # Cart app
├── shared/              # Shared types and CartManager service
├── docker-compose.yml
└── start-dev.sh         # Starts both apps together
```
