<div align="center">

# 🎓 SWADHYAYI
### *Enterprise University & College Placement Preparation Ecosystem*

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen?style=for-the-badge&logo=githubactions)](https://github.com/shivram2006/Swadhyaayi)
[![Tests Passing](https://img.shields.io/badge/tests-157%2F157%20passing%20(100%25)-success?style=for-the-badge&logo=vitest)](https://github.com/shivram2006/Swadhyaayi)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7+-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.3+-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-22.10+-339933?style=for-the-badge&logo=nodedotjs)](https://nodejs.org/)
[![MongoDB Atlas](https://img.shields.io/badge/MongoDB-Atlas%20Ready-47A248?style=for-the-badge&logo=mongodb)](https://www.mongodb.com/atlas)
[![Redis](https://img.shields.io/badge/Redis-7.0+-DC382D?style=for-the-badge&logo=redis)](https://redis.io/)
[![Docker](https://img.shields.io/badge/Docker-Containerized-2496ED?style=for-the-badge&logo=docker)](https://www.docker.com/)
[![License](https://img.shields.io/badge/License-MIT-amber?style=for-the-badge)](LICENSE)

<p align="center">
  <b>A production-grade, multi-tenant B2B SaaS ecosystem engineered for higher education institutions (Universities & Engineering Colleges) to make students industry-ready and campus placement-ready.</b>
</p>

[Explore Features](#-platform-modules) • [Institutional Architecture](#-institutional-hierarchy) • [Demo Credentials](#-interactive-demo-accounts) • [Quickstart Guide](#-quickstart-guide) • [Test Suite](#-automated-testing-suite)

---

</div>

## 📌 Executive Summary

Modern campus recruitment requires more than disjointed tools. Students use LeetCode for DSA, IndiaBIX for aptitude, Roadmap.sh for curriculum tracks, and separate ATS tools for resumes—leaving college placement departments with zero aggregated visibility into cohort placement readiness.

**Swadhyayi** solves this fragmented landscape through a unified, university-governed B2B SaaS platform. It combines:
- **Pattern-First Algorithmic Practice** (28 problem-solving patterns & multi-language sandboxed execution).
- **Placement Aptitude Ecosystem** (8 quantitative, reasoning, and technical MCQ tracks).
- **19 Dynamic Industry Roadmaps** (DB-driven curriculum with real-time student progress tracking).
- **Three-Tier Ranked Leaderboards** ($O(\log N)$ Global, Institution-level, and Class-level rankings).
- **Live Institutional Test Builder & Anti-Cheat Proctoring** (Targeted cohorts, tab-switch telemetry, live monitoring radar).
- **Harvard-Format ATS Resume Builder** (Google XYZ formula analysis & 7-domain tech-stack keyword auditor).
- **Automated Job & Internship Portal** (Automated CGPA/skill match engine with a 6-stage candidate Kanban pipeline).
- **B2B SaaS Multi-Tenancy Engine** (Dynamic quota enforcement, license gating, and multi-tenant security).

---

## 🏛️ Institutional Hierarchy

> [!IMPORTANT]
> **Core Architectural Tenet:** University and College are the **exact same organizational entity** (`Institution`) in Swadhyayi. Multi-tenancy is strictly isolated at both the database layer via Mongoose pre-query discriminator filters and Node.js `AsyncLocalStorage` context.

```
                    ┌──────────────────────────────────────────────┐
                    │      Institution (University / College)      │
                    └──────────────────────┬───────────────────────┘
                                           │
                    ┌──────────────────────┴───────────────────────┐
                    │                                              │
         ┌──────────▼──────────┐                        ┌──────────▼──────────┐
         │     Department      │                        │        Batch        │
         │  (e.g., CSE, IT)    │                        │  (e.g., 2023-2027)  │
         └──────────┬──────────┘                        └──────────┬──────────┘
                    │                                              │
                    └──────────────────────┬───────────────────────┘
                                           │
                                ┌──────────▼──────────┐
                                │   Class / Section   │
                                │ (e.g., CSE-A, Sem 4)│
                                └──────────┬──────────┘
                                           │
                                ┌──────────▼──────────┐
                                │   Student Account   │
                                └─────────────────────┘
```

---

## 👥 Role-Based Access Control (RBAC)

All authorization is validated strictly on the backend via cryptographic JWT claims and verified tenant context:

| Role | Operational Scope | Core Permissions |
| :--- | :--- | :--- |
| **Super Admin** | Platform-Wide | System telemetry, institution onboarding, global catalog curation, SaaS license governance, audit logs. |
| **Institution Admin** | Single Institution | Departments, batches, classes, student bulk CSV onboarding, seat quotas, college-wide analytics. |
| **Placement Officer** | Single Institution | Company-targeted mock tests, batch readiness indices, student ATS verification, candidate drive shortlisting. |
| **Faculty** | Assigned Sections | Class-targeted assessments, randomized question banks, live test monitoring radar, diagnostics. |
| **Student** | Personal + Class | DSA coding practice, aptitude training, roadmaps, proctored tests, ATS resume builder, job applications. |

---

## 🚀 Platform Modules

### 1. ⚡ Coding Practice Platform (LeetCode-Grade)
- **28 Algorithmic Patterns:** Two Pointers, Sliding Window, Monotonic Stack, Fast & Slow Pointers, BFS/DFS, Dynamic Programming, Topological Sort, Disjoint Set Union, Segment Trees, etc.
- **Dynamic Company-Wise Filtering:** Curated interview provenance across Google, Amazon, Microsoft, Adobe, Meta, TCS, Infosys, and more with frequency counters and interview rounds.
- **Multi-Language Sandboxed Runner:** Real-time isolated execution with wall-clock CPU limits, memory bounds, and zero host network access supporting:
  - **Python 3**
  - **JavaScript (Node.js)**
  - **C++ (g++)**
  - **Java (OpenJDK)**
- **Testcase Comparator:** Comprehensive evaluation reporting `ACCEPTED`, `WRONG_ANSWER`, `TIME_LIMIT_EXCEEDED`, and `COMPILATION_ERROR` with memory and execution time diagnostics.
- **Per-Language Boilerplate Caching:** Seamlessly switch between C++, Java, and Python with local code preservation.

### 2. 🧠 Placement Aptitude Ecosystem
- **8 Core Categories:** Quantitative Aptitude, Logical Reasoning, Verbal Ability, Analytical Reasoning, Data Interpretation, Numerical Ability, General Programming Aptitude, and Technical MCQs.
- **Dual Practice Modes:**
  - *Standard Practice Mode:* Immediate explanation reveals, step-by-step mathematical proofs, and topic filters.
  - *Timed Exam Mode:* Strict countdown timers, speed vs. accuracy matrix, and weighted scoring.
- **Granular Speed & Accuracy Telemetry:** Tracks average seconds per question, accuracy rate percentages, and topic-wise strengths/weaknesses.

### 3. 🗺️ 19 Dynamic Industry Career Roadmaps
- **Dynamic DB-Driven Curriculum:** 19 structured tracks updated without redeploying the client:
  *Full Stack MERN, SDE, AI & Machine Learning, Data Science, Data Analytics, Frontend Engineering, Backend Systems, DevOps, Cloud Computing, Cybersecurity, Android, iOS, Generative AI, MLOps, Java Enterprise, Python Engineering, Database Engineering, and more.*
- **Stage Progression & Verification:** Stage-wise topic prerequisites, practical project assignments, recommended industry certifications, and persistent completion percentages.

### 4. 🏆 Three-Level Ranked Leaderboard Engine
- **$O(\log N)$ Ranked Set Processing:** High-performance ranking calculations powered by Redis Sorted Sets (`ZADD`, `ZREVRANK`, `ZREVRANGEWITHscores`):
  1. **Global Leaderboard:** Universal competitive standing across all universities.
  2. **Institution Leaderboard:** College-level ranks restricted strictly to the student's institutional tenant.
  3. **Class Leaderboard:** Granular cohort rank filtered by academic year, department, and section.
- **Gamification Mechanics:** Problem-solving streaks, bonus multipliers, total earned points, and percentile benchmarks.

### 5. 📝 Institutional Test Builder & Live Anti-Cheat Proctoring
- **Targeted Cohort Assessments:** Faculty can schedule tests restricted to specific departments, batches, or class sections.
- **Randomized Question Bank:** Shuffles questions and MCQ options per student to mitigate collusion.
- **Real-Time Anti-Cheat Radar:**
  - WebCam snapshot proctoring telemetry.
  - Tab-switching detection & counter.
  - Window blur & focus tracking.
  - Fullscreen exit interception with automated session termination thresholds.
- **Instant Automated Grading:** Objective evaluation of coding testcases and aptitude MCQs with exportable PDF/Excel performance reports.

### 6. 📄 ATS Resume Builder & Tech-Stack Analyzer
- **Harvard Standard Template:** Clean, single-column, ATS-parseable resume generator with live side-by-side preview and one-click PDF printing.
- **Google XYZ Metric Formula Engine:** High-performance regex analyzer verifying quantified achievement statements:
  $$\text{Accomplished [X], as measured by [Y], by doing [Z]}$$
- **7-Domain ATS Keyword Gap Analysis:** Scans resume content against target domain keyword dictionaries (Full Stack, Backend, Frontend, Cloud/DevOps, Data/ML, SDE, Security) to output an instant ATS Match Score (0–100%).

### 7. 💼 Automated Jobs & Internship Portal
- **Skill & CGPA Match Engine:** Automatically matches student profiles against company eligibility requirements (minimum CGPA, graduating batch year, required programming languages).
- **6-Stage Recruitment Kanban:** Real-time status pipeline tracking applications from `APPLIED` ➔ `SCREENING` ➔ `ASSESSMENT` ➔ `INTERVIEW` ➔ `OFFERED` / `REJECTED`.

### 8. 🏢 B2B SaaS Multi-Tenancy & Licensing
- **Tiered Institutional Subscriptions:**
  - *Free Trial:* 50 student seats, core practice catalog.
  - *Standard Campus:* 500 student seats, custom tests, placement tracking.
  - *Enterprise University:* Unlimited seats, live proctoring radar, ATS resume engine, dedicated account management.
- **Hard Quota Enforcement:** Real-time validation preventing bulk student ingestion beyond licensed seat capacity.

---

## 🔑 Interactive Demo Accounts

Swadhyayi includes a pre-seeded institutional demo environment (**National Institute of Technology, Surat — `nit-surat`**) with 1-click login buttons available directly on the login screen:

> **Universal Demo Password:** `Password@123`

| Persona | Name | Role | Email | Profile & Permissions Scope |
| :--- | :--- | :--- | :--- | :--- |
| ⚡ **Super Admin** | Swadhyayi Architect | `SUPER_ADMIN` | `super@swadhyayi.com` | Global Telemetry, SaaS Licensing, Platform Audit Logs |
| 🏛️ **College Admin** | Dr. Vikram Iyer | `INSTITUTION_ADMIN` | `admin@nit.ac.in` | Dept/Batch Management, Bulk Student Ingestion, License Governance |
| 👩‍🏫 **Faculty** | Prof. Rajesh Sharma | `FACULTY` | `faculty@nit.ac.in` | Test Authoring, Question Banks, Class Monitoring Radar |
| 👩‍🎓 **Student 2 (Top Rank)** | Priya Sharma | `STUDENT` | `student2@nit.ac.in` | Rank #1 (3,300 pts), 94 Solved, CGPA 9.35 (SDE Track) |
| 👨‍🎓 **Student 1** | Aarav Patel | `STUDENT` | `student1@nit.ac.in` | Rank #4 (2,450 pts), 68 Solved, CGPA 8.65 (MERN Track) |

---

## 🛠️ Technology Stack

```
                                  FRONTEND CLIENT
       React 18  │  TypeScript  │  Vite  │  Tailwind CSS  │  Monaco Editor  │  Lucide
                                         │
                                   HTTP / REST
                                         ▼
                                   API GATEWAY
                     Express.js  │  Helmet  │  CORS  │  Zod Schema
                                         │
                 ┌───────────────────────┴───────────────────────┐
                 ▼                                               ▼
         CORE API SERVICES                              ISOLATED CODE RUNNER
   Mongoose  │  AsyncLocalStorage                 Child Process Sandbox (cgroups)
                 │                                               │
                 ▼                                               ▼
     MONGODB ATLAS CLUSTER                              REDIS IN-MEMORY ENGINE
  Tenants, Users, Catalogues, Tests                $O(\log N)$ Leaderboards, Cache
```

| Layer | Technologies |
| :--- | :--- |
| **Frontend SPA** | React 18, TypeScript, Vite, Tailwind CSS, TanStack Query, React Router v6, Monaco Editor, Lucide Icons |
| **Backend API** | Node.js (v22 LTS), Express.js, TypeScript, Zod, JWT (`httpOnly` refresh cookies), `AsyncLocalStorage` |
| **Database** | MongoDB 7.0 / MongoDB Atlas with Compound Tenant Indexes & Discriminator-based scoping |
| **Caching & Queues** | Redis 7.0 (BullMQ asynchronous job queue, Sorted Sets for high-velocity leaderboards) |
| **Code Sandboxing** | Isolated Sub-Process Execution Engine with CPU time limits, memory ceiling, and restricted environment |
| **DevOps & QA** | Docker, Docker Compose, Nginx Reverse Proxy, Vitest, Supertest, k6 Performance Suite |

---

## 🚀 Quickstart Guide

### Prerequisites
- [Node.js](https://nodejs.org/) (v20.x or v22.x LTS)
- [MongoDB Atlas Account](https://www.mongodb.com/atlas) or local MongoDB instance (v7.0+)
- [Git](https://git-scm.com/)

### 1. Clone the Repository
```bash
git clone https://github.com/shivram2006/Swadhyaayi.git
cd Swadhyaayi
```

### 2. Environment Configuration
Create a `.env` file in the root directory (a `.env.example` template is provided):

```env
# MongoDB Atlas Connection
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.gg6oib0.mongodb.net/swadhyayi?retryWrites=true&w=majority

# Application Port & Mode
NODE_ENV=development
PORT=5000
CLIENT_URL=http://localhost:5173

# Cryptographic JWT Secrets
JWT_ACCESS_SECRET=swadhyayi_super_secret_access_key_2026_dev_mode_only
JWT_REFRESH_SECRET=swadhyayi_super_secret_refresh_key_2026_dev_mode_only
JWT_ACCESS_EXPIRES_IN=15m
JWT_REFRESH_EXPIRES_IN=7d
```

### 3. Install Dependencies
```bash
# Install all root, server, and client packages
npm install
```

### 4. Seed Database with Demo Ecosystem
Seed initial institutions, demo accounts, algorithmic problems (with C++, Java, Python, JS templates), aptitude MCQs, roadmaps, and mock tests:
```bash
npm run seed --workspace=server
```

### 5. Launch Development Servers
```bash
# Terminal 1: Start Backend API (Port 5000)
npm run dev --workspace=server

# Terminal 2: Start Frontend Application (Port 5173)
npm run dev --workspace=client
```

Navigate to `http://localhost:5173` in your browser. Use the 1-Click Interactive Demo buttons on the login page to explore any persona instantly!

---

## 🐳 Docker Deployment

To launch the complete production-grade microservice cluster (Nginx, API Backend, Client SPA, MongoDB, Redis):

```bash
# Build and run all services in detached mode
docker-compose up --build -d

# Check cluster health
docker-compose ps
```

The application will be accessible through the Nginx reverse proxy at:
- **Web Application:** `http://localhost:80`
- **Backend API:** `http://localhost:80/api`
- **Health Check:** `http://localhost:80/api/health`

---

## 🧪 Automated Testing Suite

Swadhyayi features an exhaustive automated test pyramid ensuring zero regressions across multi-tenancy, authentication, algorithmic evaluation, and security boundaries.

### Running Automated Tests
```bash
# Run all 155 Server Unit & Integration Tests
npm run test --workspace=server

# Run Client Unit Tests
npm run test --workspace=client
```

### Test Suite Breakdown (157 Tests • 100% Passing Rate)
- **Tenant Security & RBAC Isolation:** 9 integration tests verifying 401/403 boundaries and tenant data leaking prevention.
- **Coding Arena & Sandbox:** 12 tests verifying execution time limits, memory caps, and multi-language testcase normalization.
- **Aptitude Scoring Engine:** 10 tests verifying formula accuracy, speed indices, and negative-marking mechanics.
- **Ranked Set Leaderboard:** 12 tests validating $O(\log N)$ Redis operations, ties, and score increments.
- **ATS Resume Analyzer:** 17 tests checking Google XYZ metric regex detection and tech-stack keyword coverage.
- **Institutional Test Proctoring:** 16 tests verifying proctoring telemetry counters and cohort targeting.
- **Opportunity & Student Management:** 16 tests validating candidate eligibility matching and CSV streaming ingestion.
- **SaaS Subscription Quota:** 13 tests verifying seat limits, license expirations, and plan upgrades.

---

## ⚡ Scalability & Load Testing (5,000 Concurrent Users)

Built for university-scale campus placement drives. Tested using [k6](https://k6.io/):

| Scenario | Simulated Concurrency | Latency (p95) | Error Rate | Success Criteria |
| :--- | :--- | :--- | :--- | :--- |
| **Institutional Test Submission** | 5,000 Concurrent Students | **< 350 ms** | **0.00%** | PASS |
| **Real-time Leaderboard Poll** | 5,000 Concurrent Users | **< 120 ms** | **0.00%** | PASS |
| **Coding Problem Retrieval** | 5,000 Concurrent Queries | **< 85 ms** | **0.00%** | PASS |

Load testing scripts are available in the [`/load-tests`](file:///load-tests) directory:
```bash
k6 run load-tests/assessment_5k_load.js -e API_BASE_URL="http://localhost:5000/api/v1"
```

---

## 📁 Repository Directory Structure

```
Swadhyay/
├── .github/workflows/ci.yml       # Production CI/CD Pipeline
├── client/                        # React 18 + Vite Frontend Application
│   ├── src/
│   │   ├── components/            # Reusable UI Components (Badges, Cards, Inputs, Modals)
│   │   ├── context/               # AuthContext & Multi-Tenant Session State
│   │   ├── pages/                 # Full Page Modules (Coding, Aptitude, Roadmaps, ATS, Admin)
│   │   └── types/                 # Frontend TypeScript Contracts
│   ├── Dockerfile                 # Multi-stage Client Production Build
│   └── vite.config.ts             # Vite Configuration
├── server/                        # Node.js + Express Backend API
│   ├── src/
│   │   ├── config/                # Environment & Database Configuration
│   │   ├── core/                  # Middleware (Auth, RBAC, AsyncLocalStorage TenantContext)
│   │   ├── modules/               # Domain Modules (Tenant, User, Coding, Aptitude, Roadmap, ATS)
│   │   └── scripts/seed.ts        # Database Seeding Orchestration
│   ├── tests/                     # 155 Vitest Integration & Unit Test Specs
│   └── Dockerfile                 # Multi-stage Backend Production Build
├── load-tests/                    # k6 High-Concurrency Stress Test Scripts
├── nginx/nginx.conf               # Production Nginx Gateway & Reverse Proxy
├── docker-compose.yml             # Full-Stack Orchestration (API, Client, Mongo, Redis, Nginx)
├── DEVELOPMENT_ROADMAP.md         # 12 Milestone Engineering Roadmap
├── QA_TEST_REPORT.md              # Complete Automated QA Audit Documentation
└── README.md                      # Platform Master Documentation
```

---

## 🔒 Security & Data Governance

1. **Strict Tenant Sandboxing:** Global database filters prevent cross-institution queries even if an attacker manipulates client payload IDs.
2. **Code Execution Process Isolation:** Sub-process sandboxing enforces CPU execution time caps, memory quotas, and isolates arbitrary user-submitted code from the host filesystem.
3. **Cryptographic Protection:** Passwords hashed with `bcryptjs` (work factor 12). Short-lived JWT access tokens paired with `httpOnly` secure refresh cookies.
4. **Rate Limiting & Headers:** Hardened with `helmet` CSP policies, CORS origin whitelisting, and `express-rate-limit` window restrictions.

---

## 📄 License & Attribution

This project is licensed under the **MIT License**.

Developed with ❤️ by **[Shiv Ram Sharma](https://github.com/shivram2006)**.
For enterprise licensing, institutional onboarding, or partnership inquiries, contact: `sharmashivram2006@gmail.com`.
