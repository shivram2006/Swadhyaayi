# SWADHYAYI — Changelog

All notable changes to the Swadhyayi Enterprise SaaS platform will be documented in this file.

## [2.0.0] - 2026-11-20

### Milestone 12: Production Deployment, CI/CD & Final Architecture Audit Completed
- **Multi-Container Production Orchestration:** Developed `docker-compose.yml` linking all 5 containerized tiers:
  - `mongo`: MongoDB 7.0 with persistent storage volume (`mongo-data`) and health check ping.
  - `redis`: Redis 7.0 alpine cluster cache with persistent volume (`redis-data`) for $O(\log N)$ sorted set leaderboards.
  - `api`: Node.js Express clustered application container with Python 3 and GCC runtime for isolated sandboxed code execution.
  - `client`: React Vite application container running on Alpine Nginx.
  - `nginx`: High-performance reverse proxy routing `/api` traffic to backend and `/` to React SPA.
- **Production Nginx Reverse Proxy (`nginx/nginx.conf`):**
  - Gzip compression enabled across all text, JSON, SVG, and JavaScript assets.
  - IP-based rate limiting zone (`rate=50r/s`, `burst=100 nodelay`).
  - Security headers enforced (`X-Frame-Options: SAMEORIGIN`, `X-Content-Type-Options: nosniff`, `X-XSS-Protection`, `Referrer-Policy`).
  - Max client payload limit configured to `15M` for CSV imports, PDF resumes, and multi-file code submissions.
- **Multi-Stage Dockerfiles:**
  - `server/Dockerfile`: Multi-stage build (Node 20 builder -> Node 20 slim runner with sandboxed execution runtimes, non-root `node` user).
  - `client/Dockerfile`: Multi-stage build (Node 20 builder -> Nginx alpine runner with client-side SPA fallback).
- **Automated GitHub Actions CI/CD (`.github/workflows/ci.yml`):**
  - Automates linting, type-checking, server Vitest tests (155 tests), client Vitest tests (2 tests), server/client production compilation, and Docker Compose syntax validation on all pushes and pull requests to `main`/`master`.
- **Automated QA & Final Audit:** Added 4 new automated tests validating container configurations, Nginx directives, Dockerfiles, and CI/CD pipelines. Total passing tests across the monorepo: **157 automated tests passed 100% with zero TypeScript errors and zero warnings**.

---

## [1.11.0] - 2026-11-20

### Milestone 11: 5,000 Concurrent Users Scalability & k6 Load Suite Completed
- **High-Throughput Database Optimization:** Configured MongoDB connection pooling with `maxPoolSize: 100`, `minPoolSize: 20`, `maxIdleTimeMS: 30000`, and `socketTimeoutMS: 45000` to prevent socket exhaustion during concurrent exam start bursts.
- **Compound Multi-Tenant Indexing:** Verified compound indexes on all high-traffic collections (`User`, `AssessmentSession`, `QuestionCoding`, `JobApplication`, `Subscription`).
- **k6 Load Testing Suite:**
  - `load-tests/assessment_5k_load.js`: Simulates 5,000 concurrent students launching tests, streaming proctoring telemetry heartbeats, saving draft answers, and final submissions with `<350ms` p95 threshold.
  - `load-tests/leaderboard_5k_load.js`: Simulates 5,000 concurrent students querying Global, College, and Class leaderboards with `<200ms` p95 read threshold.
  - `load-tests/coding_arena_load.js`: Simulates peak coding contest submissions with process isolation and rate-limiting abuse protection.
- **Automated QA & Testing:** Added 4 new automated tests validating load testing SLA contracts, threshold configurations, and k6 suite integrity. Total passing tests across the monorepo: **153 automated tests passed 100%**.

---

## [1.10.0] - 2026-11-20

### Milestone 10: SaaS Subscriptions & Institutional Seat Management Completed
- **Commercial Subscription Architecture:** Built `Subscription` model supporting multi-tenant commercial lifecycle across three structured tiers:
  - Free Trial: 50 student seats, 14-day evaluation, basic assessments.
  - Standard Campus: 500 student seats, full 28 algorithmic patterns, 10 concurrent proctored exams, ATS resume suite, campus recruitment drives.
  - Enterprise University: Unlimited seats, 50 concurrent proctored exams, custom branding, dedicated sandbox execution cluster, placement intelligence radar.
- **Granular License Quota Enforcement (`checkSeatAvailability`):**
  - Enforces student seat limits at single enrollment and bulk CSV onboarding.
  - Automatically updates seat utilization counters (`activeSeatsUsed`) synced with live institutional student counts.
- **Invoicing & Billing Engine:**
  - Automated invoice generation upon plan creation, seat expansions, and annual/monthly renewals.
  - Payment gateway webhook receiver (`POST /api/v1/subscriptions/webhook`) ready for Stripe / Razorpay event ingestion.
- **Frontend SaaS Command Centers:**
  - `CollegeSubscriptionPage`: Institutional view with real-time seat utilization progress bar, quota remaining, plan comparison grid, and billing receipts table.
  - `SuperAdminSubscriptionsPage`: Platform-wide executive radar computing MRR, ARR, total active colleges, student seat capacity, and quota override controls.
- **Automated QA & Testing:** Added 13 new automated tests (5 unit tests for seat limits, enterprise overrides, and feature configurations + 8 integration tests for subscription retrieval, tier upgrades, invoices, and Super Admin telemetry). Total passing tests across the monorepo: **149 automated tests passed 100%**.

---

## [1.9.0] - 2026-11-20

### Milestone 9: Jobs & Internships Portal & Kanban Tracker Completed
- **Opportunity & Application Schemas:** Built `Opportunity` and `JobApplication` schemas supporting both global verified tech listings and exclusive institutional campus recruitment drives.
- **Automated Eligibility & Multi-Dimensional Match Engine (`OpportunityMatcher`):**
  - Evaluates candidate skill overlap against job requirements (50 pts).
  - Enforces minimum CGPA threshold cutoffs (20 pts).
  - Enforces allowed graduation batch years (15 pts).
  - Awards verified platform coding mastery bonus based on problems solved (15 pts).
  - Generates transparent, human-readable eligibility diagnostics.
- **Application Lifecycle & Kanban Pipeline:**
  - Full tracking across 6 recruitment stages: `SAVED` (Wishlist), `APPLIED` (Submitted), `OA_SCHEDULED` (Online Assessment), `INTERVIEW` (Technical/HR), `OFFERED` (Job Offer with CTC recording), `REJECTED` (Archived).
  - Event-sourced `stageHistory` recording timestamped progression and candidate notes.
- **Placement Cell Intelligence & Analytics:**
  - `getPlacementAnalytics`: Computes institutional conversion funnels, placed candidate counts, median/average CTC, and active pipeline sizes for university Placement Officers and College Admins.
- **Frontend Career Hub:**
  - `JobDiscoveryPage`: Filterable job catalog (role type, remote/hybrid work modes, search by company or tech, and "Only Show Eligible Roles" toggle) with Match Score circular dials and job detail modal.
  - `ApplicationTrackerPage`: Interactive 6-column Kanban board with real-time stage advance dropdowns, CTC recordings, and date tracking.
  - `PlacementAnalyticsPage`: Institutional radar with KPI gauges, recruitment conversion funnel, and one-click campus drive publisher.
- **Automated QA & Testing:** Added 14 new automated tests (5 unit tests for match scoring and cutoff checks + 9 integration tests for opportunity retrieval, student application flow, stage transitions, and placement analytics). Total passing tests across the monorepo: **136 automated tests passed 100%**.

---

## [1.8.0] - 2026-11-20

### Milestone 8: ATS Resume Builder & Tech-Stack Matcher Completed
- **Data Model & Scoping Engine:** Built `Resume` model with multi-tenant scoping, storing personal details, educational history, categorised skills buckets (languages, frameworks, databases, tools, core fundamentals), internships/experience, technical projects, certifications, and verified achievements.
- **Dual-Engine ATS Scorer (`ResumeAnalyzer`):**
  - Section Completeness Scorer (25 pts): checks contact channels, email validity, summary length (40-400 chars), education with CGPA, skills breadth, and project density.
  - Action Verbs Evaluator (25 pts): scans bullet points against 150+ strong engineering action verbs (*Architected, Engineered, Optimized, Spearheaded, Streamlined*), penalizing weak verbs (*assisted, helped, worked on*).
  - Quantifiable Metrics Regex Engine (25 pts): detects percentages, latency reductions, multipliers, monetary values, and user/request scales (Google XYZ format).
  - Role-Tailored Keyword Matcher (25 pts): computes keyword density against 7 target tracks (MERN, Java SDE, AI/ML, Frontend, Backend, DevOps, SDE) and flags missing critical keywords.
  - Custom Job Description Scanner: dynamically extracts and matches technical tokens from any user-pasted job description.
- **One-Click Profile Synchronization:** `syncFromProfile` pulls verified student profile data, institution name, department, CGPA, verified algorithmic problems solved (across 28 DSA patterns), and competitive leaderboard rank into a pre-populated draft resume.
- **Frontend ATS Workspace:**
  - `ResumeListPage`: Overview analytics, highest ATS score gauge, total quantifiable metrics counter, and multi-track resume cards.
  - `ResumeEditorPage`: Split-screen editor featuring tabbed sections, real-time Google XYZ hints, circular ATS score dial, missing keywords inspector with 1-click "+ Add to Skills", Harvard print-ready preview, and browser print PDF generation.
- **Automated QA & Testing:** Added 17 new automated tests (6 unit tests for parsing, verbs, regex metrics, and role keywords + 11 integration tests for resume creation, profile sync, raw analysis, re-scoring, and RBAC isolation). Total passing tests across the monorepo: **122 automated tests passed 100%**.

---

## [1.7.0] - 2026-11-20

### Milestone 7: Institutional Test Builder & Live Proctoring Completed
- **Assessment & Session Models:** Built `Assessment` and `AssessmentSession` schemas with audience targeting (by department, academic batch, and class section), multi-section support (MCQ + Coding challenges), negative marking configurations (e.g. -0.25 per wrong answer), question randomization, and proctoring rules (`maxTabSwitches: 3`, fullscreen enforcement, paste blocking).
- **Proctoring Telemetry & Anti-Cheat Engine:**
  - `recordTelemetry`: Records timestamped client violation events (`TAB_SWITCH`, `FULLSCREEN_EXIT`, `WINDOW_BLUR`) in the session's audit log.
  - Automatically flags session as suspected cheating when violation counts exceed institutional thresholds.
  - Strict payload sanitization: answers and hidden testcases are stripped from client payloads upon test start.
- **Automated Grading & Scorecard Generator:**
  - `submitAssessment`: Automatically evaluates MCQ options and coding solutions, applies section negative penalties, updates student overall metrics (`testParticipationCount`, `totalTestsPassed`), and calculates percentile standings.
- **Frontend Assessment Experience:**
  - `AssessmentListPage`: Filterable list of Live, Upcoming, and Past tests with duration badges, eligibility badges, and one-click test launch.
  - `AssessmentArenaPage`: Distraction-free proctored workspace, fullscreen enforcement, tab-switch detection via `visibilitychange` with alert warning modal, countdown timer, question palette, split MCQ/coding view, and immediate scorecard modal upon submission.
  - `FacultyAssessmentMonitorPage`: Real-time student status radar, tab-switch violation tracker, live candidate table, and one-click CSV export for placement shortlisting.
- **Automated QA & Testing:** Added 16 new automated tests (6 unit tests for scoring, negative marking, and proctoring violations + 10 integration tests for test creation, schedule validation, telemetry, draft saving, submission grading, and live monitor). Total passing tests across the monorepo: **105 automated tests passed 100%**.

---

## [1.6.0] - 2026-11-20

### Milestone 6: Three-Level Leaderboard System Completed
- **Architecture & Scoping Engine:** Implemented three isolated ranking tiers:
  - Global Leaderboard (cross-institution merit benchmarking with tenant bypass options).
  - Institution Leaderboard (automatic tenant scoping to the student's university/college).
  - Class/Section Leaderboard (hyper-local departmental cohort ranking).
- **In-Memory & Redis Ranked Set Service:** Built `RankedSetService` providing $O(\log N)$ binary-indexed rank lookups, score updates without recomputing full leaderboards from scratch, and range slicing.
- **Multi-Metric Scoring System:** Supports dynamic sorting across Overall Placement Points, Coding Masters (`metrics.codingScore`), Aptitude Specialists (`metrics.aptitudeScore`), and Daily Streak Champions (`metrics.currentStreak`).
- **Real-Time Student Telemetry (`myRank`):** Enriches every query with the student's personal rank and top percentile calculation, even when the student is not on the first page of results.
- **Frontend Competitive Arena:**
  - `LeaderboardPage`: Scope switcher (Global, College, Class), metric filter pills, timeframe selector (All-Time, Monthly, Weekly), search bar.
  - Top 3 Visual Podium: Gold, Silver, and Bronze trophy cards with glowing badges and student placement scores.
  - Paginated student table highlighting the current student's row with rank badges, problem count, and streaks.
- **Automated QA & Testing:** Added 12 new automated tests (5 unit tests for `RankedSetService` binary search insertion, repositioning, and key isolation + 7 integration tests for scope validation, metrics, and personal rank calculation). Total passing tests across the monorepo: **89 automated tests passed 100%**.

---

## [1.5.0] - 2026-11-20

### Milestone 5: Dynamic Industry-Ready Roadmaps (19 Tracks) Completed
- **Curriculum Architecture & Data Models:** Built `Roadmap` and `UserRoadmapProgress` schemas supporting 19 verified career tracks (Artificial Intelligence, Machine Learning, Data Science, Data Analytics, Full Stack Web Development, Frontend Development, Backend Development, MERN Stack, Java Enterprise, Python Development, DevOps, Cloud Computing, Cybersecurity, Software Development Engineering, Android Development, iOS Development, Database Engineering, Generative AI, MLOps).
- **Dynamic Curriculum & Version Control:** All stages, topics, tools, industry skills, practical assignments, capstone projects, and interview questions are stored in MongoDB, allowing university placement cells and super admins to push updates instantly with zero application downtime.
- **Atomic Student Progress Tracking:** Implemented server-side calculation of topic completion percentages, assignment checks, capstone project tracking, and completion status.
- **Frontend Exploration & Learning Arena:**
  - `RoadmapCatalogPage`: Search bar, category filter pills, statistics gauge, track cards with mastery progress bars and metadata pills.
  - `RoadmapViewerPage`: Stage-by-stage node progression, topic checklists with subtopic tags and tools, practical hands-on assignments with difficulty badges, capstone portfolio projects with deliverables, and collapsible interview prep accordions.
- **Automated QA & Testing:** Added 14 new automated tests (5 unit tests for progress calculation and set deduplication + 9 integration tests for roadmap discovery, slug queries, student enrollment, progress sync, and RBAC authorization). Total passing tests across the monorepo: **77 automated tests passed 100%**.

---

## [1.4.0] - 2026-11-20

### Milestone 4: Aptitude Preparation Ecosystem Completed
- **Question & Session Models:** Built `QuestionAptitude` and `AptitudeSession` schemas supporting 8 categories (Quantitative Aptitude, Logical Reasoning, Verbal Ability, Analytical Reasoning, Data Interpretation, Numerical Ability, General Programming Aptitude, Technical MCQs).
- **Dual Practice Modes:**
  - Topic-Wise Practice Mode: Instant step-by-step mathematical and conceptual explanation accordion upon answering each question.
  - Timed Mock Test Mode: Anti-cheat query protection strictly stripping correct option IDs and explanations from initial query payloads, enforced countdown timer, and comprehensive post-exam scorecard.
- **Speed & Accuracy Analytics Engine:**
  - Tracks time spent per question, aggregate accuracy percentage, and difficulty-weighted score points.
  - Computes average speed in seconds per question and records category-wise mastery analytics.
- **Frontend Hub & Exam Arena:**
  - `AptitudeHubPage`: Category selector cards, difficulty filters, mode toggle, and student aptitude performance summary.
  - `AptitudePracticePage`: Interactive question navigator, option selection with instant feedback in practice mode, floating countdown timer in mock mode, and scorecard modal.
- **Automated QA & Testing:** Added 10 new tests (4 unit tests for scoring and speed calculation + 6 integration tests for aptitude endpoints, category discovery, answer verification, and RBAC). Total passing tests across the monorepo: **63 automated tests passed 100%**.

---

## [1.3.0] - 2026-11-20

### Milestone 3: Coding Practice Platform, Pattern Bank & Sandbox Compiler Completed
- **Problem & Submission Models:** Built `QuestionCoding` and `SubmissionCoding` schemas featuring 28 algorithmic patterns, verified company interview tags (year reported, verification flag, report frequency, and campus source note), difficulty classifications, starter code, sample and hidden testcases.
- **Sandboxed Execution Runner:** Developed `SandboxRunner` supporting isolated execution with wall-clock execution limits (2,000ms), memory caps (256MB), and strict sub-process containment preventing arbitrary host filesystem access or socket operations.
- **Testcase Comparator:** Implemented `TestCaseComparator` with whitespace, newline normalization (CRLF vs LF), and line-level diff generation on Wrong Answer verdicts.
- **Submission Tracking & Automatic Point Engine:**
  - Evaluates code against hidden test cases and records submissions with execution time (ms), memory (KB), test cases passed/total, and error logs.
  - Automatically awards weighted score points (5 to 80 points) and increments `codingProblemsSolved` on first Accepted solution.
- **Pre-Seeded Problem Catalog:** Pre-seeded standard pattern problems ("Two Sum", "Longest Substring Without Repeating Characters", "Daily Temperatures") with Python and JavaScript starter codes, driver harnesses, and complexity analyses.
- **Frontend Workspace & Problem Catalog:**
  - `CodingProblemListPage`: Horizontal scrollable algorithmic pattern chips, company dropdown filters with verified badges, search bar, and acceptance statistics.
  - `CodingWorkspacePage`: Split IDE layout featuring Description (with hints accordion and company tags), Editorial walkthrough, Submissions history tab, multi-language selector, Monaco-styled code editor, and execution console with Sample Cases, Custom Input, and Verdict diagnostics.
- **Automated QA & Testing:** Added 17 new tests (10 unit tests for comparator and sandbox runner + 7 integration tests for coding APIs, filters, and security). Total passing tests across the monorepo: **53 automated tests passed 100%**.

---

## [1.2.0] - 2026-11-20

### Milestone 2: Student Ecosystem, Academic Hierarchy & Bulk Onboarding Completed
- Extended `User` model with `academicHistory` array tracking all batch upgrades, class section transfers, and semester transitions without historical data loss.
- Developed `parseStudentCSV` utility with row-level Zod validation, header auditing, and duplicate email/roll number detection within tenant scope.
- Implemented single student onboarding, bulk import, student transfer, and profile APIs.
- Built `StudentManagementPage` and `StudentProfilePage` in the frontend.

---

## [1.1.0] - 2026-11-20

### Milestone 1: Foundation, Authentication & Multi-Tenancy Engine Completed
- Initialized monorepo with npm workspaces (`server`, `client`).
- Implemented `AsyncLocalStorage` tenant context and automatic Mongoose tenant scoping plugin.
- Built stateless JWT access tokens + rotating refresh tokens with Bcrypt hash validation.
- RBAC middleware protecting all endpoints across 5 roles.
- Built enterprise dark-theme UI with role-based dashboards (`StudentDashboard`, `InstitutionAdminDashboard`, `FacultyDashboard`, `SuperAdminDashboard`).
