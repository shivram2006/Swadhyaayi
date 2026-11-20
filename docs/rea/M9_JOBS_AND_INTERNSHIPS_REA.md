# REVERSE ENGINEERING ANALYSIS (REA): MODULE 9 — JOBS & INTERNSHIPS PORTAL

**Document ID:** `REA-M9-JOBS-INTERNSHIPS`  
**Classification:** Product Architecture, Match Engine & Application Pipeline Specification  
**System:** Swadhyayi Enterprise B2B SaaS  
**Target Milestone:** Milestone 9  

---

## 1. Executive Summary & Problem Space

### 1.1 The Core Problem
Campus recruitment and technical job search for university engineering students suffer from three major deficiencies:
1. **Application Clutter & Ineligible Submissions:** Students apply blindly to hundreds of portals without knowing if their graduation year, CGPA, or core skills satisfy company filters, wasting applicant and recruiter bandwidth.
2. **Spreadsheet Tracking Friction:** Students track job applications, Online Assessments (OA), and interview stages in disconnected spreadsheets or notes apps with zero deadline reminders.
3. **Institutional Placement Blind Spots:** University Training and Placement Officers (TPOs) have no centralized telemetry on off-campus applications, interview pipelines, or real-time offer conversion rates across departments.

### 1.2 The Swadhyayi Solution
Swadhyayi provides an integrated **Jobs & Internships Ecosystem**:
- **Verified Opportunity Aggregator:** Unified feed supporting both **Campus Placement Drives** (institutional) and **Global Curated Opportunities** (off-campus verified listings).
- **Automated Eligibility & Skill Match Engine:** Real-time multi-dimensional scoring (0-100%) evaluating skills overlap, minimum CGPA cutoffs, batch graduation year, and platform coding metrics.
- **Application Pipeline Kanban:** Interactive candidate pipeline tracking stages (`SAVED` $\rightarrow$ `APPLIED` $\rightarrow$ `OA_SCHEDULED` $\rightarrow$ `INTERVIEW` $\rightarrow$ `OFFERED` / `REJECTED`).
- **Placement Cell Analytics:** Institutional dashboards computing department placement rates, median/average CTC, and active pipeline stages.

---

## 2. Reverse Engineering Existing Platforms

| Dimension | LinkedIn Jobs | Internshala | Handshake / Superset | Swadhyayi Ecosystem |
| :--- | :--- | :--- | :--- | :--- |
| **Target Audience**| General public | College interns | University campus | **College Placements + Verified Tech Opportunities** |
| **Eligibility Filter**| Self-reported keywords | Basic location/stipend | Rigid college portal | **Automated Skill + CGPA + Batch + Coding Score Match** |
| **Application Tracker**| Binary (Applied/Saved)| List view | Administrative status | **Full Kanban Pipeline with notes, dates, and offers** |
| **Platform Telemetry**| None | None | Manual company upload | **Direct linkage to student LeetCode/Swadhyayi scores** |
| **Multi-Tenancy** | Single public tenant | Single public tenant | Heavy setup | **B2B Multi-Tenant Campus Isolation + Global Feed** |

---

## 3. Data Architecture & Schemas

### 3.1 `Opportunity` Schema
```typescript
interface IOpportunity {
  _id: Types.ObjectId;
  institutionId?: Types.ObjectId; // null = Global Verified Listing; ObjectId = Institutional Campus Drive
  title: string;
  company: {
    name: string;
    logoUrl?: string;
    website?: string;
    industry?: string;
  };
  type: 'FULL_TIME' | 'INTERNSHIP' | 'CONTRACT';
  workMode: 'REMOTE' | 'HYBRID' | 'ON_SITE';
  location: string;
  salary: {
    min: number;
    max: number;
    currency: string; // e.g. "INR", "USD"
    period: 'LPA' | 'PER_MONTH' | 'PER_HOUR';
  };
  requirements: {
    skills: string[];
    minCgpa?: number;
    allowedBatches?: string[]; // e.g. ["2025", "2026"]
    allowedDepartments?: Types.ObjectId[];
  };
  description: string;
  applyUrl: string;
  source: 'CAMPUS_DRIVE' | 'VERIFIED_PARTNER' | 'LINKEDIN' | 'INTERNSHALA';
  deadline?: Date;
  status: 'ACTIVE' | 'EXPIRED' | 'CLOSED';
  createdAt: Date;
  updatedAt: Date;
}
```

### 3.2 `JobApplication` Schema
```typescript
interface IJobApplication {
  _id: Types.ObjectId;
  institutionId: Types.ObjectId;
  userId: Types.ObjectId;
  opportunityId: Types.ObjectId;
  resumeId?: Types.ObjectId;
  stage: 'SAVED' | 'APPLIED' | 'OA_SCHEDULED' | 'INTERVIEW' | 'OFFERED' | 'REJECTED';
  appliedDate?: Date;
  stageHistory: Array<{
    stage: string;
    timestamp: Date;
    notes?: string;
  }>;
  interviewDate?: Date;
  offerDetails?: {
    ctc?: number;
    currency?: string;
    designation?: string;
    accepted?: boolean;
  };
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}
```

---

## 4. Eligibility & Match Scoring Engine

$$\text{Match Score} = S_{\text{skills}} (50) + S_{\text{cgpa}} (20) + S_{\text{batch}} (15) + S_{\text{coding}} (15)$$

1. **Skill Overlap ($S_{\text{skills}}$, Max 50 pts):**
   $$\frac{|\text{Candidate Skills} \cap \text{Job Required Skills}|}{|\text{Job Required Skills}|} \times 50$$
2. **CGPA Eligibility ($S_{\text{cgpa}}$, Max 20 pts):**
   - If no min CGPA specified: 20 pts.
   - If candidate CGPA $\ge$ min CGPA: 20 pts.
   - If candidate CGPA $<$ min CGPA: 0 pts + Marked `INELIGIBLE`.
3. **Batch Eligibility ($S_{\text{batch}}$, Max 15 pts):**
   - If candidate graduation year in allowed batches: 15 pts.
   - Else: 0 pts + Marked `INELIGIBLE`.
4. **Coding Metric Mastery ($S_{\text{coding}}$, Max 15 pts):**
   - Evaluates candidate verified problems solved count: $\min(15, \text{problemsSolved} / 5)$.

---

## 5. Security, Multi-Tenancy & Auditing
- **Global vs Campus Drives:** Institutional users can view both global verified listings and exclusive campus drives hosted by their institution's placement cell.
- **Application Isolation:** Candidates only see and mutate their own applications. Placement coordinators have aggregate and student-level audit access within their institutional tenant scope.

---

## 6. Verification & Test Plan
- **Unit Tests:**
  - Eligibility and Match score calculation (skills overlap, CGPA cutoff check, batch check).
  - Pipeline stage transitions and event history logging.
  - Salary and currency formatting.
- **Integration Tests:**
  - `GET /api/v1/opportunities`: List opportunities with query filters and match scoring.
  - `POST /api/v1/opportunities`: Admin/Placement officer creates campus placement drive.
  - `POST /api/v1/applications`: Student applies or saves opportunity.
  - `GET /api/v1/applications`: Student retrieves pipeline applications grouped by stage.
  - `PATCH /api/v1/applications/:id/stage`: Transitions stage (e.g. `APPLIED` to `OA_SCHEDULED`).
  - `GET /api/v1/applications/analytics`: Placement officer retrieves institutional placement telemetry.
