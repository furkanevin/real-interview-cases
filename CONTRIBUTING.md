# Contributing

🇬🇧 English | [🇹🇷 Türkçe](./CONTRIBUTING.tr.md)

Thanks for wanting to contribute! This repo grows with real take-home assignments shared by developers like you. Every new case helps someone prepare for their next interview.

## What can I contribute?

- **A new case:** A take-home assignment you received during a hiring process, with your solution.
- **A solution to an unsolved case:** For example [fullstack-school-management](./fullstack-school-management).
- **Fixes:** Broken setup steps, outdated dependencies, typos or unclear task descriptions.

Not sure if something fits? [Open an issue](../../issues/new/choose) first and ask.

## Rules for new cases

### 1. Remove everything that identifies the company

This is the most important rule. Before opening a pull request, make sure **none** of the following remain anywhere in your files, including `package.json`, `index.html`, image files and code comments:

- Company or product names, logos, brand colours described by name
- Email addresses, names of recruiters or employees, GitHub usernames
- Links to the company's website, Notion, Figma or internal APIs
- Passwords, API keys or tokens (even test ones)
- The original task document (PDF, DOCX, ODT, email screenshots)

**Rewrite the task in your own words** in the README instead of copying the original text.

If the solution depends on the company's private API, move the URL and key into a `.env` file and provide a `.env.example` with placeholder values.

### 2. Check the code for malware

Some fake job offers send "take-home assignments" that contain malware (see [fullstack-school-management](./fullstack-school-management#security-warning)). Before submitting, check that the project does **not** contain:

- `eval`, `new Function`, `Function.constructor` or `child_process` running unknown code
- Requests to unrelated, hard-coded URLs (e.g. random `*.vercel.app` hosts) at startup
- Suspicious `preinstall` / `postinstall` scripts in `package.json`

If you find something like this, don't remove it silently: open an issue so we can document it as a warning.

### 3. Follow the folder and README structure

- **Folder name:** English, kebab-case, starting with the main technology: `html-`, `javascript-`, `react-`, `next-`, `react-native-`, `backend-` or `fullstack-`. Example: `react-weather-app`.
- **Two READMEs:** `README.md` (English) and `README.tr.md` (Turkish). If you can only write one language, open the PR anyway and say so; we will help with the translation.
- Use the templates in [`.github/case-template/`](./.github/case-template) for both files.
- If you have a screenshot, save it as `screenshot.webp` in the case folder.
- Don't commit `node_modules`, build output or `.env` files.

### 4. Add the case to the root README

Add a row to the right level table in both [`README.md`](./README.md) and [`README.tr.md`](./README.tr.md).

| Level | When to use |
|---|---|
| 🟢 Beginner | A few hours to 1–2 days, HTML/CSS or basic React |
| 🟡 Beginner–Intermediate | API integration, routing, simple state management |
| 🟠 Intermediate | TypeScript, global state, tests, auth |
| 🔴 Intermediate–Advanced / Advanced | Architecture, backend, mobile, CI/CD, large codebases |

## Opening a pull request

1. Fork the repo and create a branch: `git checkout -b add-react-weather-app`
2. Add your case following the rules above.
3. Make sure the project runs with the steps in your README.
4. Open a pull request and fill in the checklist.

## Code of conduct

Be kind and constructive. Everyone here is learning.
