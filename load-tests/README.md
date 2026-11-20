# SWADHYAYI — 5,000 Concurrent Users k6 Load Testing Suite

This suite verifies that the Swadhyayi Enterprise SaaS platform sustains 5,000 concurrent students during high-stakes university placement examinations, live coding contests, and leaderboard stampedes.

## Prerequisites
- Install [k6](https://k6.io/docs/get-started/installation/):
  ```powershell
  winget install k6 --source winget
  # or via chocolatey
  choco install k6
  ```

## Test Scripts

### 1. Assessment & Live Proctoring Load Test (5,000 VUs)
Simulates 5,000 students starting the exam simultaneously, streaming proctoring telemetry (tab-switches, window blurs), saving draft answers, and submitting.
```powershell
k6 run load-tests/assessment_5k_load.js -e API_BASE_URL="http://localhost:5000/api/v1"
```

### 2. Leaderboard High-Concurrency Test (5,000 VUs)
Simulates 5,000 concurrent students reading Global, College, and Class leaderboards backed by $O(\log N)$ Redis sorted sets.
```powershell
k6 run load-tests/leaderboard_5k_load.js -e API_BASE_URL="http://localhost:5000/api/v1"
```

### 3. Coding Arena Submission Burst Test (2,500 VUs)
Validates sandboxed execution queues and rate-limiting abuse protection under contest conditions.
```powershell
k6 run load-tests/coding_arena_load.js -e API_BASE_URL="http://localhost:5000/api/v1"
```

## Performance SLAs & Thresholds
- **Read Requests (p95):** $< 200\text{ms}$
- **Draft Answer Saves (p95):** $< 350\text{ms}$
- **Error Rate:** $< 1\%$ HTTP 5xx errors under peak 5,000 VU load
