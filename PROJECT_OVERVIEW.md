# SWADHYAYI — Project Overview & Ecosystem Master Guide

## 1. Executive Summary
**Swadhyayi** is an enterprise-grade, multi-tenant B2B SaaS platform engineered for higher education institutions (universities and engineering colleges). It consolidates the entire technical skill development, coding practice, aptitude training, career roadmapping, institutional testing, and placement ecosystem into a single unified workspace.

### Key Value Propositions
- **For Students:** Structured pattern-first coding practice, 19 industry-aligned roadmaps, multi-tier leaderboards (Global, Institution, Class), ATS resume optimization, and skill-matched job discovery.
- **For Faculty:** Intuitive test builder with randomized question banks, automated grading, live test telemetry, and granular diagnostic analytics on class weaknesses.
- **For Placement Officers (TPOs) & Deans:** Real-time visibility into student cohort readiness, automated company-specific mock tests, ATS benchmark tracking, and exportable audit reports.
- **For Institution Admins:** Multi-department and academic batch progression management, faculty allocation, role-based access, and seat quota governance.

---

## 2. Institutional Organizational Hierarchy
In Swadhyayi, **University and College are the exact same organizational entity** (`Institution`). The system maintains a clean 4-tier structural hierarchy:

```
[ Institution / University / College ]
      │
      ├── [ Department ] (e.g., Computer Science & Engineering, Information Technology)
      │         │
      │         └── [ Class / Section ] (e.g., CSE-Section A, Semester 6)
      │                   │
      │                   └── [ Student Accounts ]
      │
      └── [ Batch ] (e.g., 2023-2027, Graduation Year 2027)
```

---

## 3. User Roles & Access Control Matrix (RBAC)

| Role | Scope | Permissions Summary |
| :--- | :--- | :--- |
| **Super Admin** | Platform-Wide | Manages all institutions, subscriptions, global question banks, global roadmaps, global audit logs, and system health. |
| **Institution Admin** | Single Institution | Manages departments, batches, classes, faculty assignments, student bulk onboarding, institutional subscription, and college-wide analytics. |
| **Placement Officer** | Single Institution | Creates company-specific placement assessments, monitors batch readiness indices, views ATS metrics, exports TPO reports. |
| **Faculty** | Assigned Classes / Dept | Creates tests and assignments, monitors live test sessions, tracks class-wise and student-wise performance, views student progress. |
| **Student** | Personal + Class Scope | Solves coding & aptitude problems, tracks roadmaps, takes assigned tests, builds & analyzes ATS resumes, views 3-tier leaderboards, applies for jobs. |
| **Recruiter** (Future) | Assigned Drives | Views shortlisted candidate profiles, publishes campus job drives, accesses verified test scores. |

---

## 4. High-Level Technology Stack

- **Frontend:** React 18+ (TypeScript), Vite, Tailwind CSS, TanStack Query, React Router, Monaco Editor, Lucide Icons.
- **Backend:** Node.js (TypeScript), Express.js, Zod Validation, JWT with httpOnly Refresh Tokens, AsyncLocalStorage Tenant Context.
- **Database:** MongoDB with Mongoose (Compound Indexes, ACID Transactions where needed, Discriminator-based multi-tenancy).
- **Cache & Queues:** Redis (v7+) with BullMQ for asynchronous workloads (compiler submission pipeline, ATS parsing, bulk CSV imports, test auto-save batching).
- **Code Execution:** Sandboxed Judge0 CE / Isolated Docker Runner with strict cgroups v2, seccomp filters, and zero egress networking.
- **DevOps:** Docker, Docker Compose, Nginx Reverse Proxy, Vitest, Supertest, Playwright, k6.

---

## 5. Development Milestones & Roadmap
- **Milestone 1:** Foundation, Modular Monolith Scaffolding, Authentication & Multi-Tenancy Engine *(In Progress)*
- **Milestone 2:** Student Ecosystem, Academic Hierarchy & Batch Progression
- **Milestone 3:** Coding Practice Platform & Sandboxed Compiler
- **Milestone 4:** Aptitude Preparation Ecosystem
- **Milestone 5:** Industry Roadmaps Engine (19 Career Tracks)
- **Milestone 6:** Three-Level Competitive Leaderboards (Global, Institution, Class)
- **Milestone 7:** Institutional Test Builder & Live Proctoring
- **Milestone 8:** ATS-Friendly Resume Builder & Tech-Stack Analyzer
- **Milestone 9:** Jobs & Internship Aggregator
- **Milestone 10:** SaaS Administration & Subscription Billing Engine
- **Milestone 11:** Performance Optimization & 5,000-User Load Testing
- **Milestone 12:** Production Deployment, CI/CD & Final Verification
