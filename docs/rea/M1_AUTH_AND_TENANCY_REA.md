# MILESTONE 1: FOCUSED REVERSE ENGINEERING ANALYSIS (REA)
## Authentication, Multi-Tenancy & Foundation Engine

### 1. Problem Analysis
Swadhyayi requires an enterprise-level multi-tenant SaaS foundation capable of hosting hundreds of colleges with thousands of students each. Key technical challenges include:
- **Strict Data Isolation:** College A must never under any circumstances be able to view, query, or mutate College B's records.
- **Role-Based Access Control (RBAC):** Five distinct roles (`SUPER_ADMIN`, `INSTITUTION_ADMIN`, `PLACEMENT_OFFICER`, `FACULTY`, `STUDENT`) with strictly separated permissions.
- **Session & Token Management:** Stateless JWT access tokens (15-min lifespan) paired with cryptographically secure, rotating refresh tokens stored as hashed values in the database and delivered via `httpOnly` secure cookies.
- **Performance at 5,000 Concurrency:** The foundation must not introduce synchronous bottlenecks or N+1 query overhead.

---

### 2. Proposed Solution
- **Multi-Tenancy:** Shared database with `institutionId` discriminator field on all tenant-scoped collections (`departments`, `batches`, `classes`, `users`, `tests`, `submissions`, `resumes`).
- **Context Injection:** Node.js `AsyncLocalStorage` stores the authenticated user's `tenantId` and `userId` across the async request execution context.
- **Automatic Scoping Plugin:** A global Mongoose plugin transparently injects `{ institutionId: tenantId }` into all `find`, `findOne`, `findOneAndUpdate`, `countDocuments`, and `delete` operations.
- **Centralized Middleware:** `authenticateToken`, `requireRoles(...)`, and `validateRequest(zodSchema)`.
- **Stateless Server Architecture:** Node.js + Express + TypeScript structured as a Modular Monolith.

---

### 3. Alternative Solutions Evaluated
1. **Database-Per-Tenant Model:**
   - *Pros:* Physical database boundary between tenants.
   - *Cons:* Connection pool exhaustion in Node.js when connecting to hundreds of databases; extremely high operational cost; complex multi-database schema migration pipelines; impossible to perform global queries (e.g., Global Leaderboard).
   - *Verdict:* Rejected in favor of discriminator-based logical isolation with automated query filtering.
2. **Schema-Per-Tenant Model (PostgreSQL):**
   - *Pros:* Logical isolation within one database.
   - *Cons:* Swadhyayi uses MongoDB for its flexible schema (question testcases, roadmap nodes, resume ASTs).
   - *Verdict:* Not applicable to MongoDB.

---

### 4. Advantages & Disadvantages of Selected Approach
- **Advantages:**
  - Highly optimized single connection pool.
  - Compound indexes (`{ institutionId: 1, ... }`) yield sub-5ms query times.
  - Seamless global resources (Global Coding Bank, Global Aptitude Bank, Global Roadmaps).
  - Simple deployment and backup processes.
- **Disadvantages:**
  - Accidental omission of `institutionId` in a query could cause cross-tenant data leakage if not guarded by middleware.
  - *Mitigation:* Mitigated at two layers: (1) Automatic Mongoose tenant scoping plugin, and (2) Automated integration tests attempting cross-tenant queries.

---

### 5. Performance Implications
- All tenant queries utilize compound indexes with `institutionId` as the leading index prefix.
- JWT verification is done in-memory via crypto (sub-1ms) without hitting the database for every single read.
- Database hits are reserved for mutations, token refreshes, and data retrieval.

---

### 6. Security Implications
- **NoSQL Injection Defense:** All user inputs are sanitized and validated against strict Zod schemas before reaching Mongoose.
- **Password Storage:** Bcrypt with 12 salt rounds.
- **Token Invalidation:** Refresh tokens are hashed in DB; logging out or rotating immediately invalidates the previous token hash.
- **IDOR Protection:** Every query implicitly matches `institutionId: req.user.institutionId`.

---

### 7. Testing Strategy
1. **Unit Tests:**
   - Password hashing and verification.
   - JWT generation and payload verification.
   - Zod request schema validation (testing valid data, invalid formats, missing fields, malicious injections).
2. **Integration Tests:**
   - User registration (Institution Admin and Student self-registration).
   - Authentication flow (Login, Refresh Token Rotation, Logout, Invalid Credentials).
   - RBAC enforcement (Student attempting to access Faculty endpoint -> 403 Forbidden).
   - **Cross-Tenant IDOR Regression Test:** Institution Admin of College A attempting to fetch College B's department or student list -> Returns 403 Forbidden or 404 Not Found.
