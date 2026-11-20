# REVERSE ENGINEERING ANALYSIS (REA) — MILESTONE 6: THREE-LEVEL LEADERBOARD ENGINE

## 1. Executive Problem Statement & Motivation
Gamification and competitive peer benchmarking are the primary psychological drivers of student engagement on platforms like LeetCode (Contest Rating), Codeforces (Divisions), HackerRank, and CodeChef (Star Ratings).

However, existing competitive programming platforms suffer from a fundamental limitation in university and college environments:
1. **Lack of Institutional Context:** A student ranked #45,000 on LeetCode cannot tell if they are the top coder in their department or where they stand among batchmates competing for the same on-campus recruitment drives (e.g., Google, Amazon, Microsoft campus visits).
2. **Disconnected Skills:** LeetCode ranks purely algorithmic coding. Real campus placement tests consist of both algorithmic coding and rigorous aptitude (Quantitative, Logical, Verbal, Core CS MCQs). A pure coding leaderboard fails to predict placement readiness.
3. **Expensive Recalculation Bottlenecks:** Naive database queries (`SELECT * FROM users ORDER BY totalScore DESC LIMIT 50`) perform table scans and temporary sorting on disk when thousands of students submit code concurrently, crashing university servers during live tests or weekly contests.

### Swadhyayi Three-Level Leaderboard Objective
To deliver a real-time, three-tiered ranking engine supporting:
- **Level 1 (Global):** Cross-institutional benchmarking across all registered universities.
- **Level 2 (Institution):** University/College-wide ranking among peers within the same institution.
- **Level 3 (Class/Section):** Hyper-local ranking within the student's specific academic department, graduation batch, and section.

The system updates ranks in $O(\log N)$ time using Redis Sorted Sets / In-Memory Skiplists and computes multi-metric placement scores combining Coding, Aptitude, Speed, and Streak consistency.

---

## 2. Competitive Reverse Engineering Matrix

| Feature | LeetCode | HackerRank | Codeforces | Striver / Sheets | Swadhyayi 3-Tier Leaderboard |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Global Ranking** | Yes (Contest Rating) | Yes (Global Rank) | Yes (Elo Rating) | No | **Yes (Cross-college placement ranking)** |
| **College Ranking** | No (Fragmented Edu accounts) | Weak (Campus Leaderboards require enterprise custom setup) | No | No | **Yes (Automatic tenant scoping via `institutionId`)** |
| **Class/Section Ranking** | No | No | No | No | **Yes (Department + Batch + Class Section scoping)** |
| **Combined Score (Coding + Aptitude)** | No (Code only) | No (Contests only) | No (Code only) | No | **Yes (Weighted Coding + Aptitude + Speed + Streak)** |
| **Rank Update Complexity** | Batch daily sync | Contests only | Post-contest rating recalculation | None | **Sub-second $O(\log N)$ Redis Sorted Set updates** |
| **My Rank Sticky Telemetry** | Profile page only | Profile only | Profile only | None | **Instant sticky bar with exact rank + percentile** |

---

## 3. Mathematical Scoring Engine & Metrics

The Swadhyayi Leaderboard uses a composite placement score:
$$\text{Composite Score} = S_{coding} + S_{aptitude} + S_{streak} + S_{speed}$$

Where:
- $S_{coding} = \sum (\text{Accepted Problem Points})$ (Weighted 5 pts for Beginner, 10 for Easy, 20 for Medium, 40 for Hard, 80 for Expert).
- $S_{aptitude} = \sum (\text{Correct MCQ Points}) \times (\text{Accuracy Percentage} / 100)$.
- $S_{streak} = \min(100, \text{Daily Streak Days} \times 5)$ (Encourages daily problem solving, capped at 100 bonus pts).
- $S_{speed} = \max(0, 50 - \text{Average Speed Seconds Per Problem})$ (Rewarded for fast algorithmic & aptitude thinking).

In addition to the composite score, the leaderboard provides dedicated views for:
1. `OVERALL` — Composite placement score.
2. `CODING` — Pure algorithmic problem points and questions solved.
3. `APTITUDE` — Pure aptitude MCQ points and accuracy %.
4. `STREAK` — Longest active study streaks.

---

## 4. Architectural Implementation Strategy: In-Memory Ranked Set & Redis Adapter

### 4.1 Redis Sorted Set Architecture ($O(\log N)$)
In production environments with Redis:
- Global key: `lb:global:<metric>:<timeframe>`
- Institution key: `lb:inst:<institutionId>:<metric>:<timeframe>`
- Class key: `lb:class:<classId>:<metric>:<timeframe>`

When a student submits a problem:
1. `ZINCRBY lb:global:overall:all <points> <userId>`
2. `ZINCRBY lb:inst:<institutionId>:overall:all <points> <userId>`
3. `ZINCRBY lb:class:<classId>:overall:all <points> <userId>`
4. Look up rank: `ZREVRANK key <userId>` ($O(\log N)$).
5. Query page $k$: `ZREVRANGEWITHSCORES key offset limit` ($O(\log N + M)$).

### 4.2 Resilient Fallback Engine
To ensure high developer velocity, zero external dependency failure during test runs, and offline execution, `LeaderboardService` integrates a thread-safe in-memory skiplist/sorted index when Redis is unavailable, backed by MongoDB projections for warm reboots.

---

## 5. Security & Multi-Tenancy Boundary Enforcement
- Students from College A can NEVER inspect or leak internal Class/Section rankings of College B.
- Scope `INSTITUTION` automatically scopes to `req.user.institutionId`.
- Scope `CLASS` automatically scopes to `req.user.classId`.
- Super Admins can filter by any institution for platform telemetry.
