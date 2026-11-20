# REVERSE ENGINEERING ANALYSIS (REA): MODULE 11 — 5,000 CONCURRENT USERS SCALABILITY & LOAD TESTING

**Document ID:** `REA-M11-SCALABILITY-5K-LOAD`  
**Classification:** Performance Engineering, Capacity Planning & High-Concurrency Architecture  
**System:** Swadhyayi Enterprise B2B SaaS  
**Target Milestone:** Milestone 11  

---

## 1. Executive Summary & Problem Space

### 1.1 The High-Stakes Concurrency Problem
Campus recruitment exams present an extreme concurrency spike pattern:
- **The "Exam Bell" Spike:** At 10:00 AM sharp, 5,000 students across 10 university departments hit `POST /api/v1/assessments/:id/start` simultaneously within a 30-second window.
- **Continuous Telemetry Floods:** Fullscreen checks, window blur events, and heartbeat telemetry emit 5,000+ requests per second (RPS) throughout the examination duration.
- **Contest Code Execution Bursts:** During coding rounds, students run code iterations concurrently, which can easily exhaust host CPU cores and memory if sandboxes are not throttled and queued.
- **Leaderboard Stampedes:** When tests conclude, thousands of candidates refresh leaderboards concurrently, causing catastrophic database table scans if rankings are not indexed or cached in Redis.

### 1.2 Target Performance Benchmarks (SLAs)
1. **Concurrent Users (VUs):** 5,000 simultaneous active candidates.
2. **Read Latency (p95):** $< 200\text{ms}$ for question fetching, leaderboard ranks, and job feeds.
3. **Write Latency (p95):** $< 350\text{ms}$ for answer draft saves and telemetry logging.
4. **Error Rate:** $< 0.1\%$ HTTP 5xx errors under maximum sustained peak load.
5. **CPU / Memory Limits:** Predictable sub-process resource bounds avoiding host starvation.

---

## 2. Architectural Pillars for 5,000 Concurrent Users

```
                   [ 5,000 Concurrent Students ]
                                 │
                                 ▼
                     [ Nginx Reverse Proxy ]
               (SSL Termination, Gzip, Rate Limiting)
                                 │
           ┌─────────────────────┴─────────────────────┐
           ▼                                           ▼
 [ Node.js Express API #1 ]                 [ Node.js Express API #2 ]
  (Cluster Worker Thread)                    (Cluster Worker Thread)
           │                                           │
     ┌─────┴───────────────┐                     ┌─────┴───────────────┐
     ▼                     ▼                     ▼                     ▼
[ Redis 7 Cluster ]  [ MongoDB Pool ]      [ Redis 7 Cluster ]  [ MongoDB Pool ]
 (O(log N) Leaderboards, (maxPoolSize: 100, (O(log N) Leaderboards, (maxPoolSize: 100,
  Token Cache)        Compound Indexes)      Token Cache)        Compound Indexes)
```

### 2.1 Database Connection Pooling & Compound Indexing
MongoDB driver default connection pool (`maxPoolSize: 10`) chokes under 5,000 concurrent requests.
- **Optimized Connection Pool:** Set `maxPoolSize: 100`, `minPoolSize: 20`, `maxIdleTimeMS: 30000`.
- **Compound Index Hierarchy:**
  - `User`: `{ institutionId: 1, role: 1, status: 1 }`
  - `AssessmentSession`: `{ assessmentId: 1, userId: 1 }` (unique compound index)
  - `QuestionCoding`: `{ pattern: 1, difficulty: 1, institutionId: 1 }`
  - `QuestionAptitude`: `{ category: 1, difficulty: 1 }`
  - `JobApplication`: `{ userId: 1, opportunityId: 1 }` (unique compound index)
  - `Subscription`: `{ institutionId: 1 }` (unique index)

### 2.2 Leaderboards $O(\log N)$ Redis Sorted Sets
Querying and sorting 5,000 student documents on every request via MongoDB `find().sort({ points: -1 })` yields $O(N \log N)$ complexity and heavy memory locks.
Swadhyayi implements **RankedSetService** backed by Redis sorted sets (`ZADD`, `ZREVRANK`, `ZREVRANGE`):
- Score updates: $O(\log N)$
- Top-100 slice lookups: $O(\log N + M)$
- Personal student rank (`myRank`): $O(\log N)$

---

## 3. k6 Test Scenarios & Execution Matrix

### 3.1 Scenario 1: `k6/assessment_5k_load.js`
- **Ramping VUs:** 0 to 5,000 VUs over 60 seconds, sustained at 5,000 VUs for 180 seconds.
- **Workflow:**
  1. Student authenticates via JWT.
  2. Student launches test session (`POST /api/v1/assessments/:id/start`).
  3. Student fetches test questions (MCQ + Coding).
  4. Student submits 5 periodic proctoring telemetry heartbeats (`POST /api/v1/assessments/:id/telemetry`).
  5. Student saves draft answers periodically (`POST /api/v1/assessments/:id/answer`).
  6. Student submits final test (`POST /api/v1/assessments/:id/submit`).

### 3.2 Scenario 2: `k6/leaderboard_5k_load.js`
- **Ramping VUs:** 1,000 to 5,000 VUs querying global and institutional leaderboard tiers with pagination and metric filtering (`CODING`, `APTITUDE`, `OVERALL`, `STREAK`).

### 3.3 Scenario 3: `k6/coding_arena_load.js`
- **Simulates sandboxed code execution queue:** Rate limits incoming execution requests and queues jobs to prevent process forks exceeding host capacity.

---

## 4. Verification & Validation Criteria
- All k6 script files syntactically validated and executable.
- Threshold configurations enforced:
  - `http_req_duration: ['p(95)<350']`
  - `http_req_failed: ['rate<0.01']` (error rate below 1%)
