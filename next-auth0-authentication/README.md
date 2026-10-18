# Next.js + Auth0 Authentication and Authorization

🇬🇧 English | [🇹🇷 Türkçe](./README.tr.md)

> **Level:** Intermediate · **Estimated time:** 3–5 days · **Tech:** Next.js 14+ (App Router), NextAuth.js, Auth0, JWT, TypeScript, Tailwind CSS, Jest

## 📋 Task

Build an authentication system where users log in with **Auth0**, sessions are checked with **JWT**, and page access is restricted with **Next.js Middleware**. The project must follow **SOLID** principles and the **12 Factor App** methodology.

### Tech

- Next.js 14+ (App Router), TypeScript
- Auth0 (OAuth provider) + NextAuth.js
- JWT-based sessions
- Tailwind CSS (login page)
- Configuration via `.env` (12 Factor)

### Steps

1. **GitHub repo:** Create a public repo and develop on a `dev/v1.0.0` branch with frequent (hourly/daily) commits.
2. **Auth0 setup:** Create an application in Auth0 and configure the callback URLs.
3. **NextAuth integration:** Connect Auth0 as a NextAuth provider.
4. **Middleware protection:** Block unauthenticated users from protected pages.
5. **Code quality and SOLID:** Build a readable structure with clear separation of concerns.
6. **12 Factor compliance:** Read all secrets from environment variables.
7. **Testing and validation:** Write tests for the main components and pages.

### Bonus

- Role-based authorization (`admin`, `user`)
- Docker setup
- When done, open a pull request to the `prod/v1.0.0` branch and merge it.
- Use descriptive commit messages.

## 💡 Solution

- NextAuth is configured with the Auth0 provider under `src/app/api/auth/[...nextauth]`, using the JWT session strategy.
- In `middleware.ts`, `withAuth` from `next-auth/middleware` protects the `/admin` route. Unauthenticated users are redirected to the login page.
- `SessionProvider` and `AuthButton` are separate components, so sign-in/sign-out logic lives in one place.
- Page and component tests are written with Jest + React Testing Library.

### Pages

| Route | Description |
|---|---|
| `/` | Home page that greets the signed-in user |
| `/admin` | Protected page, only for signed-in users |
| `/api/auth/signin` | NextAuth sign-in page |

## 🚀 Getting started

Requirements: Node.js 18+ and a free [Auth0](https://auth0.com/) account

```bash
npm install
cp .env.example .env.local   # add your Auth0 credentials
npm run dev                  # http://localhost:3000
npm test
```

Don't forget to add `http://localhost:3000/api/auth/callback/auth0` to **Allowed Callback URLs** in the Auth0 dashboard.
