# REVERSE ENGINEERING ANALYSIS (REA): MODULE 8 — ATS RESUME BUILDER & TECH-STACK MATCHER

**Document ID:** `REA-M8-RESUME-ATS`  
**Classification:** Product Architecture, Parsing Engine & Algorithm Specification  
**System:** Swadhyayi Enterprise B2B SaaS  
**Target Milestone:** Milestone 8  

---

## 1. Executive Summary & Problem Space

### 1.1 The Core Problem
University engineering students applying for campus placements and off-campus roles face a massive barrier: **Applicant Tracking Systems (ATS)** such as Taleo, Workday, Greenhouse, Lever, and iCIMS filter out over 75% of resumes before a human recruiter ever sees them. Students commonly fail due to:
1. Non-parseable visual formats (two-column layouts, graphics, tables, canvas text, text boxes).
2. Weak bullet points lacking quantifiable impact (absence of the Google XYZ format: *"Accomplished [X] as measured by [Y], by doing [Z]"*).
3. Missing critical hard skill keywords matching the target job description (e.g. applying for Full Stack without mentioning REST APIs, Docker, or Redis).
4. Disjointed profiles between university placement portals and student resumes.

### 1.2 The Swadhyayi Solution
Swadhyayi provides an integrated **ATS-Compliant Resume Suite**:
- **Structured Data Modeling:** Resumes stored as structured JSON in MongoDB, ensuring complete programmatic analysis, versioning, and seamless synchronization with student platform achievements (problems solved, roadmaps completed).
- **Dual-Engine ATS Scorer:**
  - **Structural Parser:** Evaluates standard section presence, contact formatting, bullet counts, and metric presence (numbers, percentages, scale indicators).
  - **Tech-Stack Semantic Matcher:** Analyzes keyword density against 7 target engineering roles (Full Stack / MERN, Java SDE, Python / AI-ML, Frontend, Backend, DevOps / Cloud, Data Analytics) and flags missing critical keywords.
- **Export Engine:** Produces clean, machine-parseable, single-column printable PDFs adhering strictly to Harvard/MIT career services standards.

---

## 2. Reverse Engineering Existing Platforms

| Feature / Dimension | Resume Worded | Jobscan | Reactive Resume | Swadhyayi ATS Suite |
| :--- | :--- | :--- | :--- | :--- |
| **Parsing Target** | General corporate | Enterprise ATS | Self-hosted basic | **Engineering & Tech Placement ATS** |
| **Action Verb Engine** | Yes (heuristic) | Keyword match only | No | **Google XYZ Formula + Action Verb Index** |
| **Tech-Stack Tailoring**| Manual upload | Job description diff | None | **Preset Track Matcher (19 Tracks) + Custom Job Diff** |
| **Platform Sync** | None | None | None | **One-click sync with Coding & Roadmap metrics** |
| **Multi-Tenancy** | B2C single user | B2C single user | Open source | **B2B University Isolation & Placement Officer Audit**|

---

## 3. Data Architecture & Schema Design

### 3.1 Resume Schema (`Resume`)
```typescript
interface IResume {
  _id: Types.ObjectId;
  institutionId: Types.ObjectId;
  userId: Types.ObjectId;
  title: string; // e.g. "Software Engineer Resume - 2026"
  targetRole: string; // "mern" | "java" | "frontend" | "backend" | "aiml" | "devops" | "sde"
  isDefault: boolean;
  
  // Section 1: Contact & Personal
  personalInfo: {
    fullName: string;
    email: string;
    phone: string;
    location: string;
    linkedinUrl?: string;
    githubUrl?: string;
    portfolioUrl?: string;
    codingProfiles?: {
      leetcode?: string;
      codeforces?: string;
      hackerrank?: string;
      swadhyayi?: string;
    };
  };

  // Section 2: Summary / Objective
  summary: string;

  // Section 3: Education
  education: Array<{
    institution: string;
    degree: string;
    fieldOfStudy: string;
    startDate: string;
    endDate: string;
    current: boolean;
    cgpaOrPercentage: string;
    location: string;
  }>;

  // Section 4: Technical Skills
  skills: {
    languages: string[];
    frameworks: string[];
    databases: string[];
    toolsAndCloud: string[];
    coreFundamentals: string[];
  };

  // Section 5: Experience & Internships
  experience: Array<{
    company: string;
    role: string;
    location: string;
    startDate: string;
    endDate: string;
    current: boolean;
    bullets: string[];
  }>;

  // Section 6: Projects
  projects: Array<{
    title: string;
    techStack: string[];
    liveUrl?: string;
    githubUrl?: string;
    startDate?: string;
    endDate?: string;
    bullets: string[];
  }>;

  // Section 7: Certifications & Achievements
  certifications: Array<{
    name: string;
    issuer: string;
    issueDate: string;
    credentialUrl?: string;
  }>;
  achievements: string[]; // e.g. "Ranked Top 1% in Swadhyayi Global Leaderboard"

  // Precomputed ATS Score Cache
  atsScoreCache?: {
    totalScore: number;
    sectionScores: {
      completeness: number;
      actionVerbs: number;
      quantifiableMetrics: number;
      keywordMatch: number;
    };
    missingKeywords: string[];
    formattingIssues: string[];
    lastCalculatedAt: Date;
  };

  createdAt: Date;
  updatedAt: Date;
}
```

---

## 4. ATS Scoring Algorithm & Heuristics

The ATS Score is calculated on a 100-point scale across 4 core dimensions:

$$\text{ATS Score} = S_{\text{sections}} (25) + S_{\text{verbs}} (25) + S_{\text{metrics}} (25) + S_{\text{keywords}} (25)$$

### 4.1 Section Completeness (Max 25 pts)
- Contact Info complete (Name, Email, Phone, GitHub, LinkedIn): 5 pts
- Summary provided (>30 chars, <300 chars): 4 pts
- Education provided with CGPA: 4 pts
- Technical Skills populated across $\ge 3$ skill buckets: 4 pts
- Projects populated ($\ge 2$ projects with $\ge 2$ bullets each): 4 pts
- Experience or Achievements populated: 4 pts

### 4.2 Strong Action Verbs & Google XYZ Formula (Max 25 pts)
Scans all project and experience bullet points against a curated dictionary of **150+ Strong Engineering Action Verbs** (e.g., *Architected, Engineered, Optimized, Spearheaded, Implemented, Streamlined, Reduced, Accelerated, Refactored*).
- Weak verbs penalized (*Assisted, Worked on, Handled, Helped*).
- Score awarded proportionally: $\min(25, \text{actionVerbCount} \times 3.5)$.

### 4.3 Quantifiable Metrics (Max 25 pts)
Scans bullets with regex patterns for quantifiable results:
- Percentages (`\b\d+(\.\d+)?%\b`)
- Multipliers & Latency (`\b\d+x\b`, `\b\d+\s*(ms|s|seconds|minutes)\b`)
- User & Data scales (`\b\d+[kKmMbB]?\+?\s*(users|requests|records|queries|qps)\b`)
- Currency / Cost reductions (`\$|₹|\bINR\b`)
- Score: $\ge 4$ quantifiable bullets = 25 pts; 3 bullets = 20 pts; 2 bullets = 15 pts; 1 bullet = 8 pts.

### 4.4 Tech-Stack Keyword Density & Role Matching (Max 25 pts)
Compares resume skill sets and project descriptions against standardized keyword profiles:
- **MERN / Full Stack:** React, Node.js, Express, MongoDB, TypeScript, REST API, Redux/Zustand, Docker, Redis, Tailwind CSS, Jest/Vitest.
- **Java SDE:** Java, Spring Boot, Hibernate/JPA, Microservices, SQL, Kafka/RabbitMQ, JUnit, Docker, Multithreading, DSA.
- **AI / ML / Data Science:** Python, PyTorch/TensorFlow, Scikit-Learn, Pandas, NumPy, NLP, Computer Vision, SQL, Docker, MLflow.
- **DevOps / Cloud:** Docker, Kubernetes, CI/CD, AWS/GCP, Terraform, Linux, Prometheus, Grafana, Bash, Git.
- Computes match ratio: $\text{Match Ratio} = \frac{|\text{Resume Keywords} \cap \text{Track Keywords}|}{|\text{Track Keywords}|} \times 25$.
- Returns exact list of **Missing Recommended Keywords**.

---

## 5. Security & Multi-Tenancy Assurance
1. **Tenant Scoping:** All resume queries scoped to the authenticated user's `institutionId` and `userId`.
2. **Placement Officer Access:** Placement Coordinators and Faculty can read student resumes for verification and campus shortlisting within their tenant scope only.
3. **Cross-Tenant Prevention:** Strictly impossible for a student or recruiter from Institution A to query or modify resumes belonging to Institution B.

---

## 6. Verification & Test Plan
- **Unit Tests:**
  - Parsing and score calculation engine.
  - Action verb detection (strong vs weak).
  - Quantifiable metrics regex matchers.
  - Role keyword matcher and missing keyword suggestions.
  - Section completeness validators.
- **Integration Tests:**
  - `POST /api/v1/resumes`: Create resume with validation.
  - `GET /api/v1/resumes`: List student resumes.
  - `GET /api/v1/resumes/:id`: Fetch single resume.
  - `PUT /api/v1/resumes/:id`: Update resume and trigger ATS recalculation.
  - `POST /api/v1/resumes/:id/analyze`: Real-time ATS scan against target role or custom JD.
  - `POST /api/v1/resumes/sync-profile`: Synchronize profile data into resume draft.
  - `DELETE /api/v1/resumes/:id`: Remove resume.
  - RBAC verification (students own resumes; faculty read-only in tenant).
