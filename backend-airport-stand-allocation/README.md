# Airport Stand Allocation Service

🇬🇧 English | [🇹🇷 Türkçe](./README.tr.md)

> **Level:** Advanced · **Estimated time:** 6–10 hours · **Tech:** Node.js, TypeScript, Bun, PostgreSQL, Drizzle ORM, Vitest, Docker

## 📋 Task

You are inheriting a half-finished Node/TypeScript service written for an airport's ground operations team. Its job is to assign aircraft to parking spots (**stands**) without conflicts. The task has three parts:

1. **Fix the bug:** Make the failing tests pass.
2. **Implement the missing endpoint:** `POST /flights/check-allocation`
3. **Explain your decisions:** Answer the four questions in `DECISIONS.md` briefly and defensibly.

> New to aviation terms? Read [`given-case/GLOSSARY.md`](./given-case/GLOSSARY.md) first. It explains stands, MARS stands, block time and the rest of the vocabulary with visuals.

### Domain rules

1. A flight occupies its assigned stand for the half-open interval `[blockStart, blockEnd)`. Back-to-back flights (one ends at `T`, the next starts at `T`) do **not** conflict.
2. **MARS stands:** Some stands have a parent and two sub-stands. The parent takes one wide-body aircraft; each sub-stand takes one narrow-body. A parent and its sub-stands are mutually exclusive (`stands.parent_stand_id`).
3. **Towing flights** (`flightType = 'towing'`) also occupy the stand and must be included in conflict checks.
4. **Soft-deleted flights** (`deletedAt IS NOT NULL`) must be ignored.
5. **Stand closures** (`stand_unavailability` table, e.g. maintenance) block the stand for `[start_at, end_at)` and must be returned as conflicts.
6. All API timestamps are in `Asia/Singapore` (UTC+8); the database stores UTC.

### Task 1: Failing tests

Running `bun run test` shows two failing tests in `findConflicts`:

- Back-to-back flights (`10:00–11:00` and `11:00–12:00`) are reported as a conflict.
- Soft-deleted flights are still returned.

### Task 2: Endpoint

```
POST /flights/check-allocation
Body:   { "standId": string, "blockStart": ISO-8601, "blockEnd": ISO-8601, "excludeFlightId"?: string }
200 OK: { "flightConflicts": Flight[], "unavailabilities": StandUnavailability[] }
```

The endpoint must satisfy all six rules above, and it must come with tests covering its behaviour.

### Evaluation criteria

1. Do all tests pass?
2. Does the endpoint satisfy every rule, including the easy-to-miss ones?
3. Are there tests for the cases the code depends on?
4. Are the `DECISIONS.md` answers honest and defensible?
5. Code quality: readability, naming, type safety. Over-engineering is not rewarded.

## 📁 Folder structure

| Folder | Contents |
|---|---|
| [`given-case/`](./given-case) | The starter project given to the candidate (buggy and incomplete) |
| [`solved-case/`](./solved-case) | The solution: fixed tests, new endpoint, completed `DECISIONS.md` |
| [`solved-case/_INTERVIEW_NOTES.md`](./solved-case/_INTERVIEW_NOTES.md) | Interview prep notes (in Turkish): root cause of the bug and likely questions |

## 💡 Solution

- **Bug 1:** The conflict check used a closed interval (`lte`). Switching to a half-open interval (`lt`) stops back-to-back flights from conflicting.
- **Bug 2:** Soft-deleted rows were being returned. Instead of adding `isNull` to every query, a **view** that exposes only active flights is used.
- **Endpoint:** Rather than extending `findConflicts`, a separate `findAllocationConflicts` was written. It checks the MARS parent/sub-stand relationship, towing flights and stand closures together, and returns flight conflicts and closures in separate lists.
- The reasoning behind every design decision is in [`solved-case/DECISIONS.md`](./solved-case/DECISIONS.md).

## 🚀 Getting started

Requirements: **Bun ≥ 1.0** and **Docker**

```bash
cd solved-case            # or given-case
docker compose up -d      # starts Postgres on :55432
cp .env.example .env
bun install
bun run db:push           # applies the schema
bun run test
bun run db:seed           # demo data
bun run dev               # server on :8080
```
