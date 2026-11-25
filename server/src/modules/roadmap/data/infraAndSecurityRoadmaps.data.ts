export const INFRA_AND_SECURITY_ROADMAPS = [
  {
    slug: 'devops',
    title: 'DevOps & Site Reliability Engineering',
    category: 'Cloud & Security',
    description: 'Master Linux, Networking, Git, Scripting, Docker containers, CI/CD pipelines, Kubernetes orchestration, Terraform IaC, and Prometheus/Grafana observability.',
    version: 2,
    estimatedHours: 190,
    prerequisites: ['Basic Computer Literacy'],
    icon: 'Infinity',
    stages: [
      {
        stageId: 'dev-s1',
        title: 'Linux, Networking & Scripting Foundations',
        order: 1,
        topics: [
          {
            topicId: 'dev-t1',
            title: 'Linux Administration & Shell Scripting',
            subtopics: ['File System, Permissions (chmod/chown) & Users', 'Process Management (ps, top, systemd, journalctl)', 'Bash Scripting (variables, if-else, loops, cron)', 'SSH, Firewalls (ufw) & Package Management'],
            toolsAndTechnologies: ['Ubuntu/Linux', 'Bash', 'systemd'],
            industrySkills: ['Linux Operations', 'Automation Scripting'],
            recommendedResources: [{ title: 'Linux Journey', type: 'COURSE' }],
          },
          {
            topicId: 'dev-t2',
            title: 'Networking, Reverse Proxies & Git',
            subtopics: ['DNS, TCP/IP, Ports, HTTP/HTTPS & TLS Certs', 'Nginx Reverse Proxy & Load Balancing', 'Git Branching, Tagging & Release Workflows'],
            toolsAndTechnologies: ['Nginx', 'Git', 'OpenSSL'],
            industrySkills: ['Traffic Routing', 'TLS Management'],
            recommendedResources: [{ title: 'Nginx Beginner Guide', type: 'DOCUMENTATION' }],
          },
        ],
        practicalAssignments: [
          { id: 'dev-a1', title: 'Automated Backup & Health Check Bash Script', description: 'Write a cron-scheduled script monitoring disk/CPU and rotating compressed backups.', difficulty: 'BEGINNER' },
        ],
        capstoneProjects: [],
        interviewPreparation: [
          { question: 'What happens when a process runs out of file descriptors in Linux?', concept: 'New sockets/files fail with EMFILE ("Too many open files"); inspect with lsof/ulimit.' },
        ],
      },
      {
        stageId: 'dev-s2',
        title: 'Containers & CI/CD Automation',
        order: 2,
        topics: [
          {
            topicId: 'dev-t3',
            title: 'Docker & Containerization',
            subtopics: ['Images, Containers, Layers & Volumes', 'Writing Optimized Multi-Stage Dockerfiles', 'Docker Compose & Bridge Networking', 'Container Security & Non-Root Users'],
            toolsAndTechnologies: ['Docker', 'Docker Compose'],
            industrySkills: ['Container Packaging'],
            recommendedResources: [{ title: 'Docker Official Docs', type: 'DOCUMENTATION' }],
          },
          {
            topicId: 'dev-t4',
            title: 'CI/CD Pipelines',
            subtopics: ['Continuous Integration (Lint, Test, Build)', 'GitHub Actions Workflows, Secrets & Caching', 'Blue-Green & Canary Deployment Strategies'],
            toolsAndTechnologies: ['GitHub Actions', 'Jenkins'],
            industrySkills: ['Automated Delivery'],
            recommendedResources: [{ title: 'GitHub Actions Docs', type: 'DOCUMENTATION' }],
          },
        ],
        practicalAssignments: [
          { id: 'dev-a2', title: 'Multi-Stage Docker + GitHub Actions Pipeline', description: 'Build, test, scan, and push a container image automatically on merge to main.', difficulty: 'INTERMEDIATE' },
        ],
        capstoneProjects: [],
        interviewPreparation: [
          { question: 'Why use multi-stage Docker builds?', concept: 'They separate build toolchains from the final runtime image, drastically shrinking image size and attack surface.' },
        ],
      },
      {
        stageId: 'dev-s3',
        title: 'Kubernetes, Terraform & Observability',
        order: 3,
        topics: [
          {
            topicId: 'dev-t5',
            title: 'Kubernetes & Infrastructure as Code (Terraform)',
            subtopics: ['K8s Architecture (Pods, Deployments, Services, Ingress)', 'ConfigMaps, Secrets & Horizontal Pod Autoscaler', 'Terraform Providers, State, Modules & Plan/Apply'],
            toolsAndTechnologies: ['Kubernetes', 'Helm', 'Terraform'],
            industrySkills: ['Container Orchestration', 'IaC'],
            recommendedResources: [{ title: 'Kubernetes Official Tutorials', type: 'DOCUMENTATION' }],
          },
          {
            topicId: 'dev-t6',
            title: 'Monitoring, Logging & SRE Practices',
            subtopics: ['SLIs, SLOs & Error Budgets', 'Metrics Collection with Prometheus & Grafana Dashboards', 'Centralized Logging (Loki / ELK)'],
            toolsAndTechnologies: ['Prometheus', 'Grafana', 'Loki'],
            industrySkills: ['Production Observability', 'Incident Response'],
            recommendedResources: [{ title: 'Google SRE Book (Free Online)', type: 'BOOK' }],
          },
        ],
        practicalAssignments: [],
        capstoneProjects: [
          { id: 'dev-p1', title: 'Zero-Downtime K8s + Terraform + Observability Stack', description: 'Provision cloud infra with Terraform, deploy microservices on K8s via CI/CD, and monitor with Grafana.', deliverables: ['Terraform configs', 'K8s manifests', 'Grafana dashboard JSON'] },
        ],
        interviewPreparation: [
          { question: 'What is the difference between a Kubernetes Deployment and a StatefulSet?', concept: 'Deployments manage stateless interchangeable pods; StatefulSets provide stable network IDs and persistent storage per pod.' },
        ],
      },
    ],
  },
  {
    slug: 'cloud-computing',
    title: 'Cloud Computing & Architecture (AWS / GCP)',
    category: 'Cloud & Security',
    description: 'Learn cloud from networking & IAM basics to Compute (EC2/Lambda), Storage (S3), VPC Design, Managed Databases, Serverless, and Well-Architected Cost/Security.',
    version: 2,
    estimatedHours: 160,
    prerequisites: ['Basic OS & Networking'],
    icon: 'Cloud',
    stages: [
      {
        stageId: 'cc-s1',
        title: 'Cloud Core: IAM, Compute & Storage',
        order: 1,
        topics: [
          {
            topicId: 'cc-t1',
            title: 'Cloud Fundamentals & IAM Security',
            subtopics: ['IaaS, PaaS, SaaS & Shared Responsibility Model', 'Regions, Availability Zones & Edge Locations', 'IAM Users, Roles, Policies & Least Privilege', 'Billing Alerts & Cost Management'],
            toolsAndTechnologies: ['AWS IAM', 'AWS CLI'],
            industrySkills: ['Cloud Identity Security'],
            recommendedResources: [{ title: 'AWS Cloud Practitioner Essentials', type: 'COURSE' }],
          },
          {
            topicId: 'cc-t2',
            title: 'Compute, Object Storage & VPC Networking',
            subtopics: ['Virtual Machines (EC2) & Auto Scaling Groups', 'Object Storage (S3), Lifecycle Rules & CloudFront CDN', 'VPC, Subnets (Public/Private), NAT Gateway & Security Groups'],
            toolsAndTechnologies: ['EC2', 'S3', 'VPC', 'CloudFront'],
            industrySkills: ['Cloud Infrastructure Design'],
            recommendedResources: [{ title: 'AWS Solutions Architect Official Guide', type: 'DOCUMENTATION' }],
          },
        ],
        practicalAssignments: [
          { id: 'cc-a1', title: 'Secure Multi-Tier VPC Architecture', description: 'Place web servers in public subnets and databases in private subnets with least-privilege security groups.', difficulty: 'BEGINNER' },
        ],
        capstoneProjects: [],
        interviewPreparation: [
          { question: 'What is the difference between Security Groups and Network ACLs in AWS?', concept: 'Security Groups are stateful and attach to instances (allow rules only); NACLs are stateless and attach to subnets (allow & deny rules).' },
        ],
      },
      {
        stageId: 'cc-s2',
        title: 'Serverless, Managed DBs & IaC',
        order: 2,
        topics: [
          {
            topicId: 'cc-t3',
            title: 'Serverless, Managed Databases & Containers',
            subtopics: ['AWS Lambda, API Gateway & EventBridge', 'Managed RDS (Multi-AZ) & DynamoDB', 'ECS / Fargate & Managed Kubernetes (EKS)', 'Infrastructure as Code with Terraform / CloudFormation'],
            toolsAndTechnologies: ['AWS Lambda', 'RDS', 'DynamoDB', 'Terraform'],
            industrySkills: ['Serverless Architecture', 'High Availability'],
            recommendedResources: [{ title: 'AWS Well-Architected Framework', type: 'DOCUMENTATION' }],
          },
        ],
        practicalAssignments: [],
        capstoneProjects: [
          { id: 'cc-p1', title: 'Serverless Image Processing & CDN Pipeline', description: 'Upload to S3 -> trigger Lambda thumbnailer -> store metadata in DynamoDB -> serve via CloudFront.', deliverables: ['Terraform/SAM template', 'Architecture diagram'] },
        ],
        interviewPreparation: [
          { question: 'What is a Lambda cold start and how can you minimize it?', concept: 'Latency when initializing a new execution environment; minimize with smaller bundles, lighter runtimes, or Provisioned Concurrency.' },
        ],
      },
    ],
  },
  {
    slug: 'cybersecurity',
    title: 'Cybersecurity & AppSec Engineering',
    category: 'Cloud & Security',
    description: 'Start with OS & Network internals, learn Cryptography & Identity, master OWASP Top 10 web security, SOC/SIEM defense, and ethical penetration testing.',
    version: 2,
    estimatedHours: 180,
    prerequisites: ['Basic Networking & Linux'],
    icon: 'ShieldCheck',
    stages: [
      {
        stageId: 'sec-s1',
        title: 'Networking, Linux & Security Foundations',
        order: 1,
        topics: [
          {
            topicId: 'sec-t1',
            title: 'Network Protocols, Packet Analysis & Linux',
            subtopics: ['TCP/IP, DNS, ARP, HTTP & TLS Handshake', 'Packet Inspection with Wireshark & tcpdump', 'Linux Permissions, Processes & Hardening'],
            toolsAndTechnologies: ['Wireshark', 'Nmap', 'Linux'],
            industrySkills: ['Traffic Analysis', 'System Hardening'],
            recommendedResources: [{ title: 'TryHackMe Pre-Security Path', type: 'COURSE' }],
          },
          {
            topicId: 'sec-t2',
            title: 'Cryptography & Identity Fundamentals',
            subtopics: ['Symmetric (AES) vs Asymmetric (RSA/ECC) Encryption', 'Hashing (SHA-256) vs Password Hashing (Argon2/bcrypt)', 'PKI, Digital Signatures & TLS Certificates', 'CIA Triad, Threat Modeling & Zero Trust'],
            toolsAndTechnologies: ['OpenSSL', 'GnuPG'],
            industrySkills: ['Applied Cryptography'],
            recommendedResources: [{ title: 'CryptoHack Interactive Challenges', type: 'COURSE' }],
          },
        ],
        practicalAssignments: [
          { id: 'sec-a1', title: 'PCAP Traffic & TLS Inspection Lab', description: 'Analyze captured packets in Wireshark to identify cleartext leaks and suspicious scans.', difficulty: 'BEGINNER' },
        ],
        capstoneProjects: [],
        interviewPreparation: [
          { question: 'Why should passwords never be stored with plain SHA-256?', concept: 'Fast hashes without salt/work-factor are vulnerable to GPU brute-force and rainbow tables; use salted Argon2 or bcrypt.' },
        ],
      },
      {
        stageId: 'sec-s2',
        title: 'Web AppSec (OWASP Top 10) & Defense',
        order: 2,
        topics: [
          {
            topicId: 'sec-t3',
            title: 'OWASP Top 10 & Secure Coding',
            subtopics: ['SQL Injection & Parameterized Queries', 'XSS (Stored/Reflected) & Content Security Policy (CSP)', 'CSRF, SSRF & Broken Access Control (IDOR)', 'Security Testing with Burp Suite & OWASP ZAP'],
            toolsAndTechnologies: ['Burp Suite', 'OWASP ZAP'],
            industrySkills: ['Vulnerability Assessment', 'Secure Code Review'],
            recommendedResources: [{ title: 'PortSwigger Web Security Academy', type: 'COURSE' }],
          },
          {
            topicId: 'sec-t4',
            title: 'SOC Operations, SIEM & Incident Response',
            subtopics: ['Log Correlation & SIEM Alerting', 'MITRE ATT&CK Framework Basics', 'Incident Response Lifecycle (Containment, Eradication, Recovery)'],
            toolsAndTechnologies: ['Wazuh', 'Splunk'],
            industrySkills: ['Threat Detection', 'Incident Handling'],
            recommendedResources: [{ title: 'MITRE ATT&CK Navigator', type: 'DOCUMENTATION' }],
          },
        ],
        practicalAssignments: [],
        capstoneProjects: [
          { id: 'sec-p1', title: 'Vulnerable Web App Audit & Hardening Report', description: 'Identify and patch SQLi, XSS, IDOR, and weak auth in a sample web application.', deliverables: ['Pentest findings report', 'Patched PRs'] },
        ],
        interviewPreparation: [
          { question: 'How do you prevent Insecure Direct Object Reference (IDOR) vulnerabilities?', concept: 'Enforce server-side ownership/tenant authorization checks on every object lookup rather than trusting client-supplied IDs.' },
        ],
      },
    ],
  },
];
