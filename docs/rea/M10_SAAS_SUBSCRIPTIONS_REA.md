# REVERSE ENGINEERING ANALYSIS (REA): MODULE 10 — SAAS MANAGEMENT & SUBSCRIPTIONS

**Document ID:** `REA-M10-SAAS-SUBSCRIPTIONS`  
**Classification:** B2B Multi-Tenant Commercial Architecture, Quotas & Billing Engine  
**System:** Swadhyayi Enterprise B2B SaaS  
**Target Milestone:** Milestone 10  

---

## 1. Executive Summary & Problem Space

### 1.1 The Core Problem
Universities and colleges operate on strict institutional budgeting cycles with defined student cohort seat allocations. To make Swadhyayi commercially viable as an enterprise B2B SaaS platform, the system requires:
1. **Granular License Quota Enforcement:** Strict prevention of unauthorized seat overages without crashing active classroom sessions.
2. **Tier-Differentiated Feature Flags:** Capability fencing (e.g. basic question bank vs custom proctoring & dedicated campus drives).
3. **Automated Lifecycle & Grace Period Handling:** Seamless handling of trial expirations, renewal notices, and invoice generation.
4. **Super Admin Central Command:** Real-time visibility into Monthly Recurring Revenue (MRR), total active colleges, student seat utilization, and instant quota modifications.

---

## 2. Subscription Tiers & Feature Matrix

| Capability / Resource | Free Trial (14 Days) | Standard Campus | Enterprise University |
| :--- | :--- | :--- | :--- |
| **Student Seat Limit** | 50 students | Up to 1,000 students | **Unlimited / Custom Quota** |
| **Question Bank Access** | Basic DSA & Aptitude | Full 28 Patterns + MCQs | **Full + Custom Institutional Pool** |
| **Proctored Assessments** | Up to 2 concurrent tests | Up to 10 concurrent tests | **Unlimited Concurrent Proctoring** |
| **ATS Resume Suite** | Basic Template | Full Harvard ATS + Scorer | **Full + Placement Cell Audit** |
| **Jobs & Campus Drives** | Verified Partner Jobs | Partner + 3 Campus Drives | **Unlimited Campus Drives + TPO Radar** |
| **Custom Branding** | No | Basic Logo | **White-label / Custom College Domain** |
| **Support SLA** | Community | Standard Email (24h) | **Dedicated Account Manager (1h SLA)** |

---

## 3. Data Architecture & Schemas

### 3.1 `Subscription` Schema
```typescript
interface ISubscription {
  _id: Types.ObjectId;
  institutionId: Types.ObjectId;
  tier: 'FREE_TRIAL' | 'STANDARD_CAMPUS' | 'ENTERPRISE_UNIVERSITY';
  status: 'ACTIVE' | 'PAST_DUE' | 'EXPIRED' | 'CANCELLED';
  currentPeriodStart: Date;
  currentPeriodEnd: Date;
  seatLimit: number;
  activeSeatsUsed: number;
  billingCycle: 'MONTHLY' | 'ANNUAL';
  pricing: {
    amount: number;
    currency: string;
  };
  features: {
    maxConcurrentAssessments: number;
    customBranding: boolean;
    dedicatedSandboxCluster: boolean;
    campusDrivesEnabled: boolean;
  };
  paymentGateway?: {
    provider: 'RAZORPAY' | 'STRIPE' | 'OFFLINE_INVOICE';
    subscriptionId?: string;
    customerId?: string;
  };
  invoices: Array<{
    invoiceNumber: string;
    amount: number;
    currency: string;
    status: 'PAID' | 'PENDING' | 'FAILED';
    issuedAt: Date;
    paidAt?: Date;
    pdfUrl?: string;
  }>;
  createdAt: Date;
  updatedAt: Date;
}
```

---

## 4. Quota Enforcement Logic

$$\text{Can Enroll Student} = (\text{activeSeatsUsed} < \text{seatLimit}) \lor (\text{tier} == \text{'ENTERPRISE\_UNIVERSITY'} \land \text{seatLimit} == 0)$$

- **At Single Enrollment / CSV Import:**
  The `StudentService` validates `Subscription.activeSeatsUsed + newCount <= Subscription.seatLimit`.
  If exceeded, throws `SubscriptionLimitExceededError` ("Seat quota reached: 500/500 seats utilized. Please upgrade your institutional tier.").
- **Subscription Expiry:**
  When `currentPeriodEnd < now` and status is `EXPIRED`, write operations (new tests, new student onboarding) are suspended while student read-only revision access is preserved during a 7-day grace period.

---

## 5. Verification & Test Plan
- **Unit Tests:**
  - Seat quota validation (allows within limit, rejects on overflow).
  - Feature gating checks (campus drives enabled only on Standard/Enterprise).
  - Subscription status transitions (`ACTIVE`, `EXPIRED`, `CANCELLED`).
  - Invoice generation and MRR calculation.
- **Integration Tests:**
  - `GET /api/v1/subscriptions/current`: College admin inspects active subscription and seat usage.
  - `POST /api/v1/subscriptions/upgrade`: College admin requests plan upgrade or seat expansion.
  - `GET /api/v1/super/subscriptions`: Super Admin lists platform-wide subscriptions with MRR telemetry.
  - `PATCH /api/v1/super/subscriptions/:id/seats`: Super Admin adjusts seat quota directly.
  - `POST /api/v1/subscriptions/webhook`: Handles Stripe/Razorpay payment webhook events.
