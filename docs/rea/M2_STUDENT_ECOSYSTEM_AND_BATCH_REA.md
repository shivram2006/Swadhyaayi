# MILESTONE 2: FOCUSED REVERSE ENGINEERING ANALYSIS (REA)
## Student Ecosystem, Academic Hierarchy & Bulk Ingestion Engine

### 1. Problem Analysis
Universities operate in cohorts of hundreds to thousands of students organized by:
- **Academic Years / Batches:** e.g., Batch 2023–2027 (4-year B.Tech / B.E.).
- **Departments:** e.g., CSE, IT, ECE, Mechanical.
- **Sections:** e.g., CSE-A, CSE-B (typically 60–75 students per section).

Key architectural and operational challenges:
1. **Bulk Ingestion at Scale:** Manually creating 1,000+ student accounts per college is impossible. Institutions require bulk CSV/Excel ingestion. If 5 rows out of 500 have formatting errors, the ingestion must not blindly crash; it must report the exact offending line numbers and field names while safely processing valid rows or running in an atomic transaction.
2. **Academic Progression Without Data Loss:** When a batch is promoted from Year 2 to Year 3, students must advance to Semesters 5 & 6 without losing historical test records, coding submissions, or leaderboard points.
3. **Student Transfers:** Students may change sections (e.g., CSE-A to CSE-B) or branches (e.g., ECE to CSE). Their past test submissions must remain intact.
4. **Tenant Isolation on Student Data:** College A must never view or search College B's student roster. Duplicate roll numbers are valid across different colleges, but must be unique within the same college.

---

### 2. Proposed Solution
- **Historical Batch Tracking Schema:** Add `academicHistory` array to `User` schema:
  `academicHistory: [{ batchId, classId, departmentId, academicYear, semester, transitionedAt }]`
  Whenever a student or batch is upgraded/transferred, the previous state is archived in `academicHistory`, and `currentBatchId`/`currentClassId` is updated.
- **Stream-Based Ingestion & Pre-Validation Engine:**
  - Support CSV format with standardized columns: `firstName`, `lastName`, `email`, `rollNumber`, `departmentCode`, `batchName`, `section`.
  - Validate each row against a strict Zod schema before executing bulk database operations.
  - Efficient MongoDB `bulkWrite` using `$setOnInsert` and upsert operations, preventing N+1 queries.
- **Comprehensive Student Management API:**
  - Filtering by Department, Batch, Class, Status (`ACTIVE`, `INACTIVE`, `SUSPENDED`), and search by text query.
  - Cursor/offset pagination for large student bodies.
  - Role-gated profile management (students can update their skills/social links, but cannot alter their rollNumber or department).

---

### 3. Alternative Solutions Evaluated
1. **Synchronous Row-by-Row `User.create` Loop:**
   - *Pros:* Simple to write.
   - *Cons:* Ingesting 2,000 students would take 2,000 separate network roundtrips to MongoDB, leading to HTTP request timeouts and memory spikes.
   - *Verdict:* Rejected in favor of batch validation + `bulkWrite` with chunking.
2. **Hard-Replacing Batch IDs on Promotion:**
   - *Pros:* Minimal schema.
   - *Cons:* Destroys historical audits. If TPO wants to know what a student scored during Year 1 vs Year 3, that lineage is lost.
   - *Verdict:* Rejected in favor of `academicHistory` event-sourcing log.

---

### 4. Advantages & Disadvantages of Selected Approach
- **Advantages:**
  - Zero data loss during academic year progression.
  - Sub-second processing for 500+ student records using chunked `bulkWrite`.
  - Detailed error reporting per row for administrators.
- **Disadvantages:**
  - Requires maintaining reference integrity when transferring students.
  - *Mitigation:* Validated via foreign key existence checks before bulk writing.

---

### 5. Performance Implications
- Ingestion of 1,000 students completes in < 1.2 seconds using batch chunking (chunks of 250).
- Student listings are backed by compound indexes `{ institutionId: 1, departmentId: 1, batchId: 1 }` and `{ institutionId: 1, rollNumber: 1 }`, ensuring sub-10ms query execution.

---

### 6. Security Implications
- Password generation for bulk onboarded students uses secure random temporary passwords or hashed initial passwords requiring a reset on first login.
- File upload validation enforces CSV MIME type and size limits (< 5MB) to protect against buffer overflow or malicious script upload.
- Tenant isolation: Roll numbers are unique scoped to `{ institutionId: 1, rollNumber: 1 }`.

---

### 7. Testing Strategy
- **Unit Tests:**
  - CSV row parsing and field normalization.
  - Row validation errors (invalid email format, missing rollNumber).
  - Academic history archiving on student transfer.
- **Integration Tests:**
  - Single student onboarding API.
  - Bulk student upload with mixed valid and invalid rows.
  - Student list pagination and multi-filter querying.
  - RBAC protection: Student cannot access student onboarding API; Faculty can view students in their department; Admin can manage all.
