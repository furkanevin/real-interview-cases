# Timed Quiz App

🇬🇧 English | [🇹🇷 Türkçe](./README.tr.md)

> **Level:** Beginner · **Estimated time:** 1 day · **Tech:** React 18, Vite, Tailwind CSS, Axios

![Screenshot](./screenshot.webp)

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
- Timing is controlled by two constants: `QUESTION_TIME = 30` and `LOCK_TIME = 10`. Options are locked during the first 10 seconds and a message shows how long is left.
- The timer `useEffect` resets the countdown whenever the question changes and clears its interval in the cleanup function. A second effect watches `timeLeft` and moves to the next question when it reaches 0, so no side effects run inside a state updater.
- Radio buttons are controlled by state (`checked`), so no DOM refs or form resets are needed. Locked options cannot be selected.
- Once an answer is selected, the user can move on early with the "Next question" button.
- Answers are stored by question index; the results table matches each answer to its own question, so skipped questions don't shift the results.

## 🚀 Getting started

```bash
npm install
npm run dev   # http://localhost:5173
```
