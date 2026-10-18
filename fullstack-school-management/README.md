# School Management System (Full-Stack Skill Test)

🇬🇧 English | [🇹🇷 Türkçe](./README.tr.md)

> **Level:** Intermediate–Advanced · **Tech:** React 18, TypeScript, MUI, Redux Toolkit, Node.js, Express, PostgreSQL

> [!CAUTION]
> **This case contained malware.** Please read the [Security warning](#security-warning) section first.

## 📋 Task

The candidate receives a ready-made full-stack application that manages students, staff, classes, notices and leave requests. Depending on the position, the candidate is asked to solve one of the following problems.

### Problem 1: Frontend
**Fix the "Add New Notice" page** (`/app/notices/add`)
- When "Save" is clicked, the `description` field is not saved.
- The field must be bound to the form correctly and sent to the API.
- Skills tested: React, form handling, state, API integration.

### Problem 2: Backend
**Complete the student CRUD operations** (`backend/src/modules/students/students-controller.js`)
- The controller functions are empty. Listing, creating, detail, updating and status changes must be implemented.
- The service layer (`students-service.js`) is ready and must be called correctly from the controller.
- Skills tested: Node.js, Express, PostgreSQL, API design, error handling.

### Problem 3: Blockchain
**Certificate verification system**
- Write a smart contract for student achievement certificates.
- Add a Web3 wallet connection to the frontend.
- Store certificate metadata on IPFS.

<a id="security-warning"></a>

## 🛡️ Security warning: fake interview attack

This project is a typical example of the **"fake job interview"** attacks that have targeted developers in recent years. The original code contained the following:

1. `backend/src/modules/departments/department-module.js` sent a request to a remote address **as soon as the server started** (the moment the file was `require`d).
2. The remote server deliberately returned an **error**, with JavaScript code hidden in the error message.
3. `backend/src/utils/apiErrorHandler.js`, a file that looked like an "error handler", **executed** that text with `new Function.constructor("require", code)`.

Result: simply typing `npm start` gave the attacker full code execution on your machine (`require` → file system, network, `child_process`). Code like this usually steals browser crypto wallets, saved passwords and SSH keys.

**The malicious code has been removed from the version in this repo.** The rest of the application works as before.

### How to protect yourself

- **Read** any project you are sent **before running it**. Look especially for `eval`, `new Function`, `Function.constructor`, `child_process`, and code that runs at `require` time.
- Check the `preinstall` / `postinstall` scripts in `package.json`.
- Hard-coded URLs unrelated to the project (e.g. `*.vercel.app`) and "secret" headers are red flags.
- If possible, run take-home projects inside a **virtual machine or container**.
- Be extra careful with rushed interview processes about "crypto", "blockchain" or "Web3".

## 🚀 Getting started

Requirements: Node.js 16+, PostgreSQL 12+

```bash
# Database
createdb school_mgmt
psql -d school_mgmt -f seed_db/tables.sql
psql -d school_mgmt -f seed_db/seed-db.sql

# Backend (http://localhost:5007)
cd backend
npm install
cp .env.example .env
npm start

# Frontend (http://localhost:5173)
cd frontend
npm install
cp .env.example .env
npm run dev
```

Demo login: `admin@school-admin.com` / `3OU4zn3q6Zh9`

## 📁 Folder structure

```
├── frontend/   # React + TypeScript + MUI + Redux Toolkit (RTK Query)
├── backend/    # Node.js + Express + PostgreSQL (JWT, CSRF, Argon2)
└── seed_db/    # Database schema and seed data
```

Detailed docs: [`frontend/README.md`](./frontend/README.md), [`backend/README.md`](./backend/README.md), [`seed_db/README.md`](./seed_db/README.md)

## 💡 Solution

This folder contains the case **as it was given**. The problems have not been solved yet, so you can use it as an exercise.
