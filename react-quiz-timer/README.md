# Timed Quiz App

🇬🇧 English | [🇹🇷 Türkçe](./README.tr.md)

> **Level:** Beginner · **Estimated time:** 1 day · **Tech:** React 18, Vite, Tailwind CSS, Axios

> ℹ️ The original task text was not saved, so the task below was reconstructed from the solution code.

## 📋 Task

Build a quiz app where questions are shown one after another, each with a **time limit**.

### Requirements

- Questions come from a JSON source. Each has a text, 4 options (A–D) and the correct answer.
- Only **one question** is shown at a time.
- Each question has a **countdown timer** (e.g. 30 seconds):
  - The options are **locked** for the first few seconds so the user reads the question first.
  - When time runs out, the app moves to the next question automatically, even without an answer.
- The user's chosen answers are recorded.
- When the quiz ends, a results table shows the **given answer**, the **correct answer** and whether it was **right or wrong** for each question.

## 💡 Solution

- Questions are fetched from `public/db.json` with `axios`.
- The timer runs with `setInterval` inside a `useEffect`. Each time the question changes, the interval is cleared and recreated (the cleanup function prevents multiple timers from running).
- Whether the options are locked is computed from the remaining time (`disabled={timeLeft > ...}`).
- When time runs out or an answer is chosen, `handleNextQuestion` moves to the next question and adds the chosen answer to the `answers` array.
- After the last question, the `AnswerTable` component shows the results in a table.

## 🚀 Getting started

```bash
npm install
npm run dev   # http://localhost:5173
```
