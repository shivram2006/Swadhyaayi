# REVERSE ENGINEERING ANALYSIS (REA): MODULE 12 — PRODUCTION DEPLOYMENT & FINAL AUDIT

**Document ID:** `REA-M12-PRODUCTION-DEPLOYMENT`  
**Classification:** DevOps Architecture, Container Orchestration & Production Hardening Specification  
**System:** Swadhyayi Enterprise B2B SaaS  
**Target Milestone:** Milestone 12  

---

## 1. Executive Summary & Infrastructure Architecture

### 1.1 Production Goals
Swadhyayi is engineered as an enterprise-grade multi-tenant B2B SaaS platform. In production, it must guarantee:
1. **High Availability & Fault Tolerance:** Automatic restart policies, zero-downtime rolling updates, and database replica persistence.
2. **Security & Sandbox Isolation:** Hardened Nginx edge proxy, non-root container users, resource bounds (CPU/memory caps), and isolated sub-process code execution.
3. **Automated CI/CD Verification:** Every commit verified through automated type-checking, 100% passing Vitest suites, and container build validation.

---

## 2. Multi-Container Topography (`docker-compose.yml`)

```
                          [ Internet / Campus WAN ]
                                      │ (Ports 80 / 443)
                                      ▼
                        ┌───────────────────────────┐
                        │    Nginx Reverse Proxy    │
                        │ (Gzip, Rate Limit, HTTP2) │
                        └─────────────┬─────────────┘
                                      │
            ┌─────────────────────────┴─────────────────────────┐
            │ (Reverse Proxy `/api/v1`)                         │ (Static Files `/`)
            ▼                                                   ▼
┌───────────────────────────┐                       ┌───────────────────────────┐
│     Node.js API Cluster   │                       │   React Vite Nginx Dist   │
│ (Express + TS + Sandboxes)│                       │  (Tailwind, SPA Routing)  │
└─────────────┬─────────────┘                       └───────────────────────────┘
              │
    ┌─────────┴─────────┐
    ▼                   ▼
┌───────────────┐ ┌───────────────┐
│ MongoDB 7.0   │ │ Redis 7.0     │
│ Persistent Vol│ │ Persistent Vol│
└───────────────┘ └───────────────┘
```

---

## 3. Production Nginx Reverse Proxy Specifications
- **Client Max Body Size:** `15M` (for CSV imports, resumes, and code submission payloads).
- **Rate Limiting:**
  - `limit_req_zone $binary_remote_addr zone=api_limit:10m rate=50r/s;`
  - Burst allowance: `burst=100 nodelay`.
- **Gzip Compression:** Active for `text/plain`, `text/css`, `application/json`, `application/javascript`, `text/xml`, `application/xml`.
- **Static Asset Caching:** `/assets/` directory served with `Cache-Control: public, max-age=31536000, immutable`.
- **SPA Fallback:** `try_files $uri $uri/ /index.html;` for client-side HTML5 routing.

---

## 4. CI/CD Automation Matrix (`.github/workflows/ci.yml`)
- **Stage 1: Code Quality & Type Integrity:**
  - `npm run build --workspace=server`
  - `npm run build --workspace=client`
- **Stage 2: Automated Testing:**
  - `npm run test --workspace=server` (151+ tests)
  - `npm run test --workspace=client` (2+ tests)
- **Stage 3: Container Build Validation:**
  - Multi-stage Docker build for both backend and frontend images.
