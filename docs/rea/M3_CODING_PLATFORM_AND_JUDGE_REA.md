# MILESTONE 3: FOCUSED REVERSE ENGINEERING ANALYSIS (REA)
## Coding Practice Platform, Pattern-Based Engine & Sandboxed Execution Judge

### 1. Problem Analysis
University placement preparation for software engineering (SDE, Full Stack, Systems) is centered around Data Structures and Algorithms (DSA). However, existing student platforms fail higher-education placement workflows in three fundamental ways:
1. **Topic-First vs. Pattern-First Inefficiency:** Platforms like LeetCode and GeeksforGeeks index primarily by broad data structures (e.g., "Arrays" with 800+ questions). Students experience cognitive overload and lack structural pattern recognition. Modern tech interviews test algorithmic patterns (e.g., Sliding Window, Two Pointers, Monotonic Stack, Fast & Slow Pointers, Topological Sort). Swadhyayi must make **Pattern-First Filtering a first-class citizen**.
2. **Unverified Company Interview Tags:** Free sites display crowdsourced or fabricated company interview tags without provenance. Swadhyayi must store and display verified company tag provenance (year reported, verified flag, frequency count, and provenance note) to distinguish verified campus drive questions from unverified forum claims.
3. **Execution Security & Sandboxing (The RCE Threat):** Executing arbitrary student code submitted in C, C++, Java, Python, JavaScript, TypeScript, or C# is a catastrophic security risk if handled incorrectly. A student could submit fork bombs (`while(1) fork()`), port scanners, file system wipers (`fs.rmdirSync('/')`), or memory exhaustion loops. The execution engine must enforce strict process isolation, CPU quotas, memory caps, disabled networking, and non-root sandbox execution.

---

### 2. Proposed Solution
- **Pattern-First Problem Model:** Every question is indexed by multiple recognized problem-solving patterns (e.g., Two Pointers, Prefix Sum, Monotonic Stack) alongside difficulty (Beginner to Expert) and company tags.
- **Pluggable Sandboxed Execution Runner Architecture (`ICodeRunner`):**
  - Production Engine: Isolated Docker container / self-hosted **Judge0 Community Edition** with Linux cgroups v2, seccomp filters, and zero egress networking.
  - Development / Fallback Engine: Isolated Node.js child process / worker runner enforcing CPU wall-clock timeouts (2,000ms), memory limits (256MB), and strict exit code validation.
  - Testcase Evaluator: Normalizes trailing whitespace, Windows CRLF vs Linux LF line endings, and precision formatting before determining status:
    - `ACCEPTED` (AC)
    - `WRONG_ANSWER` (WA)
    - `TIME_LIMIT_EXCEEDED` (TLE)
    - `MEMORY_LIMIT_EXCEEDED` (MLE)
    - `COMPILATION_ERROR` (CE)
    - `RUNTIME_ERROR` (RE)
- **Submission Tracking & Metric Updates:**
  - Every submission is recorded in `submissions_coding` with execution time (ms), memory (KB), test cases passed/total, language, code, and error logs.
  - Upon first Accepted submission for a problem, the student's `codingProblemsSolved` and `totalPoints` are atomically incremented.
- **Monaco Code Editor Workspace:**
  - Professional split-view IDE with syntax highlighting, language selector, boilerplate driver code, custom input runner, and sample/hidden testcase tabs.

---

### 3. Alternative Solutions Evaluated
1. **Executing Code Directly via `eval()` or Node `vm` Module:**
   - *Verdict:* **COMPLETELY REJECTED.** Node's `vm` module is not a security sandbox and is trivial to escape, giving full root/system access to the host machine.
2. **Relying Exclusively on Commercial Paid APIs (e.g. HackerRank API / RapidAPI):**
   - *Pros:* Offloads execution.
   - *Cons:* Extremely expensive for thousands of college test submissions; subject to external API rate limits and vendor outages during campus tests.
   - *Verdict:* Rejected in favor of self-hosted, scalable runner abstraction.

---

### 4. Advantages & Disadvantages of Selected Approach
- **Advantages:**
  - Sub-second feedback for student code runs.
  - Total isolation: arbitrary student code cannot access the host machine, filesystem, or database.
  - Multi-language extensibility (C, C++, Java, Python, JS, TS, C#).
  - Robust pattern-first pedagogical learning model.
- **Disadvantages:**
  - Compiling C++ or Java requires local toolchains or containerized compilers.
  - *Mitigation:* Multi-tier execution architecture supporting both native and Dockerized Judge0 configurations.

---

### 5. Performance Implications
- Sample test runs execute synchronously within 1.5 seconds.
- Submissions evaluate against all hidden testcases sequentially or in parallel batches.
- Questions are cached in memory/Redis and queried using compound indexes `{ patterns: 1, difficulty: 1 }` and `{ "companyTags.company": 1 }`.

---

### 6. Security Implications
- Hidden testcases are **strictly excluded** from client responses on problem queries (`.select('-hiddenTestCases')`).
- Maximum code payload size capped at 64KB to prevent payload flooding.
- Process sandboxing caps wall-clock time at 2,000ms and memory at 256MB.
- Network access is disabled during execution.

---

### 7. Testing Strategy
- **Unit Tests:**
  - Testcase output comparator (verifying handling of trailing whitespace, line endings, formatting diffs).
  - Runner timeout enforcement (verifying infinite loop `while(true)` terminates with TLE).
  - Memory limit enforcement.
- **Integration Tests:**
  - Querying coding questions with pattern, company, and difficulty filters.
  - Running sample testcases (returning Accepted vs Wrong Answer).
  - Submitting code against hidden testcases and verifying submission record creation and status calculation.
  - Security test: verifying student requests cannot retrieve hidden testcase contents.
