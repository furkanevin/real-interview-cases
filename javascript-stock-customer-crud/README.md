# JavaScript Stock & Customer Management (CRUD)

🇬🇧 English | [🇹🇷 Türkçe](./README.tr.md)

> **Level:** Beginner–Intermediate · **Estimated time:** 2–3 days · **Tech:** Vanilla JavaScript (ES Modules), Axios, SCSS, Toastify

> ℹ️ The original task text was not saved, so the task below was reconstructed from the solution code.

## 📋 Task

Using the test API of an accounting / e-invoicing company, build an interface to manage **stock** and **customer** records. No framework: just HTML, CSS and JavaScript.

### Requirements

- Two tabs at the top: **Stocks** and **Customers**.
- **Stocks** table: stock name, seller code, unit name, price, VAT rate and active status.
- **Customers** table: title/full name, tax or national ID number, tax office, contact info and city/district.
- Full **CRUD** for both modules:
  - List records from the API (`GET`)
  - Add a new record with a form inside a modal (`POST`)
  - Edit a record using the same modal (`PUT`)
  - Delete a record (`DELETE`)
- Validation errors returned by the API must be shown as toast notifications.
- Requests must be authorized with a `Bearer` token.

### API

| Action | Endpoint |
|---|---|
| List / create / update stocks | `/general/Stocks` |
| Delete a stock | `/general/Stocks/{id}` |
| List / create / update customers | `/general/Customers` |
| Delete a customer | `/general/Customers/{id}` |

## 💡 Solution

The code is split into three modules:

| File | Responsibility |
|---|---|
| `js-code/api.js` | Axios setup, all API requests, error notifications |
| `js-code/ui.js` | Creating, updating and removing table rows (DOM work) |
| `js-code/app.js` | Event listeners, tab switching, opening/closing modals |

- A **single modal** is used for both creating and editing. The current action is tracked with the `data-mode` and `data-editId` attributes.
- Form data is read with `FormData` and converted to an object.
- **XSS protection:** Rows are built as HTML strings, so every value coming from the API goes through an `escapeHtml` helper before being inserted. Without it, a stock name like `<img src=x onerror=...>` would run as code.
- Row buttons use `data-action="edit"` / `data-action="delete"` instead of repeated `id`s (an `id` must be unique on the page), and event delegation on the table body handles the clicks.
- Deleting asks for confirmation first.
- API errors are shown as red notifications with `Toastify`.

## 🚀 Getting started

1. Add your API credentials:

   ```bash
   cp js-code/config.example.js js-code/config.js
   ```

   Put the API URL and token into `config.js`. This file is git-ignored.

2. Because ES Modules are used, serve the folder with a local server instead of opening the file directly. For example the VS Code **Live Server** extension, or:

   ```bash
   npx serve .
   ```

To compile SCSS changes:

```bash
npx sass style.scss style.css --watch
```
