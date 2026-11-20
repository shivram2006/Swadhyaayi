# MILESTONE 4: FOCUSED REVERSE ENGINEERING ANALYSIS (REA)
## Aptitude Preparation Ecosystem: Quantitative, Logical, Verbal & Technical MCQs

### 1. Problem Analysis
Campus placements across Tier-1, Tier-2, and Tier-3 institutions almost uniformly begin with a **General Aptitude & Technical Screening Exam** (e.g., TCS NQT, Infosys DSE, Cognizant GenC, Accenture, Capgemini, AMCAT, CoCubes). Over 60% of engineering students are eliminated at this very first hurdle before their coding skills are ever evaluated.

Existing student preparation platforms (IndiaBIX, Sanfoundry, GeeksforGeeks Aptitude) suffer from:
1. **No Speed vs. Accuracy Telemetry:** Aptitude tests in campus drives are strictly time-bound (typically 60–90 seconds per question). Practicing without time pressure produces a false sense of readiness. Swadhyayi must track both **speed (seconds per question)** and **accuracy (%)**.
2. **Disconnected Topic Practice:** Practice is usually unguided. Students do not know whether their weakness lies in Quantitative (e.g. Time & Work), Logical (e.g. Syllogisms), or Verbal (e.g. Reading Comprehension).
3. **Institutional Invisibility:** Placement officers have no way to know which student batches are struggling with Quantitative vs Technical MCQs prior to company screening drives.

---

### 2. Proposed Solution
- **Taxonomy of Core Categories:**
  - `QUANTITATIVE`: Time and Work, Percentages, Profit and Loss, Permutations & Combinations, Probability, Speed Distance Time.
  - `LOGICAL_REASONING`: Syllogisms, Blood Relations, Seating Arrangements, Coding-Decoding, Data Sufficiency.
  - `VERBAL_ABILITY`: Reading Comprehension, Sentence Correction, Vocabulary, Para Jumbles.
  - `TECHNICAL_MCQ`: Operating Systems, DBMS & SQL, Computer Networks, Object-Oriented Programming (Java/C++), Data Structures.
- **Two Distinct Practice Modes:**
  1. **Topic Drill Mode (Self-Paced):** Untimed, provides immediate instant feedback on option selection with step-by-step mathematical/conceptual explanations.
  2. **Timed Mock Test Mode:** Strict countdown timer (e.g., 15 minutes for 15 questions), calculates speed-per-question metrics, generates a post-test scorecard with diagnostics.
- **Analytics & Diagnostic Aggregation:**
  - Tracks individual student metrics: `aptitudeAccuracy`, `avgSpeedSeconds`, category-wise strengths and weak areas.
  - Generates institutional class analytics for faculty and placement officers.

---

### 3. Alternative Solutions Evaluated
1. **Third-Party External Quiz Widgets:**
   - *Pros:* Fast setup.
   - *Cons:* No multi-tenant data isolation; impossible to track student history inside the college's placement analytics dashboard; external ad tracking.
   - *Verdict:* Rejected in favor of a native database-backed question bank.
2. **Client-Side-Only Scoring:**
   - *Pros:* Less server load.
   - *Cons:* Subject to client-side tampering (students could inspect network payloads to view the answer before submitting).
   - *Verdict:* Rejected. In Mock Test mode, `correctOptionId` is validated and scored strictly server-side upon session submission.

---

### 4. Advantages & Disadvantages of Selected Approach
- **Advantages:**
  - Real-time diagnostic insights on student speed and accuracy.
  - Pre-seeded with verified corporate aptitude questions (TCS, Infosys, Wipro, Cognizant, Accenture).
  - Clear explanations that teach underlying mathematical shortcuts and formulas.
- **Disadvantages:**
  - Requires maintaining a large, curated question bank.
  - *Mitigation:* System allows Super Admin and College Faculty to add custom institutional aptitude questions.

---

### 5. Performance Implications
- Question queries utilize compound indexes `{ category: 1, subcategory: 1, difficulty: 1 }`.
- Session completions are logged with a single atomic insert into `aptitude_sessions`.

---

### 6. Security Implications
- `correctOptionId` and `explanation` are omitted from question payload during timed mock tests until submission to prevent DevTools inspection cheating.
- RBAC enforces that only Faculty and Admins can create or modify questions.

---

### 7. Testing Strategy
- **Unit Tests:**
  - Scorecard calculation: Accuracy percentage, average speed per question.
  - Answer verification utility.
- **Integration Tests:**
  - Querying questions by category and difficulty.
  - Submitting single practice answer and verifying step-by-step explanation response.
  - Submitting complete mock session and verifying metric updates on student profile.
  - RBAC protection on question creation.
