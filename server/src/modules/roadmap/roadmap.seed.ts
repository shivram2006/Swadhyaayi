import { Roadmap } from './roadmap.model';

export const ALL_19_ROADMAPS = [
  {
    slug: 'artificial-intelligence',
    title: 'Artificial Intelligence (AI)',
    category: 'AI & Data',
    description: 'Master foundational AI concepts, search algorithms, heuristic search, knowledge representation, probabilistic reasoning, and modern neural network foundations.',
    version: 1,
    estimatedHours: 160,
    prerequisites: ['Linear Algebra', 'Multivariate Calculus', 'Probability & Statistics', 'Python Basics'],
    icon: 'Brain',
    stages: [
      {
        stageId: 'ai-s1',
        title: 'Mathematical & Logical Foundations for AI',
        order: 1,
        topics: [
          {
            topicId: 'ai-t1',
            title: 'Search Algorithms & Heuristics',
            subtopics: ['Uninformed Search (BFS, DFS, UCS)', 'Informed Search (A* Search, IDA*)', 'Adversarial Search (Minimax, Alpha-Beta Pruning)'],
            toolsAndTechnologies: ['Python', 'NetworkX', 'NumPy'],
            industrySkills: ['Algorithmic Reasoning', 'State Space Graph Search', 'Constraint Satisfaction'],
            recommendedResources: [
              { title: 'Russell & Norvig: Artificial Intelligence: A Modern Approach', type: 'BOOK' },
              { title: 'CS188: Berkeley Artificial Intelligence', type: 'COURSE' },
            ],
          },
          {
            topicId: 'ai-t2',
            title: 'Knowledge Representation & Expert Systems',
            subtopics: ['First-Order Logic', 'Ontologies and Semantic Web', 'Inference Engines', 'Fuzzy Logic'],
            toolsAndTechnologies: ['Prolog', 'PySwip', 'Protégé'],
            industrySkills: ['Rule-Based Systems', 'Knowledge Graph Modeling'],
            recommendedResources: [{ title: 'Stanford Knowledge Representation Notes', type: 'DOCUMENTATION' }],
          },
        ],
        practicalAssignments: [
          { id: 'ai-a1', title: 'Implement A* Pathfinding for Grid Maps', description: 'Build A* search with Euclidean and Manhattan heuristics.', difficulty: 'INTERMEDIATE' },
          { id: 'ai-a2', title: 'Connect-Four AI with Alpha-Beta Pruning', description: 'Write an unbeatable adversarial agent with evaluation functions.', difficulty: 'ADVANCED' },
        ],
        capstoneProjects: [
          { id: 'ai-p1', title: 'Autonomous Pacman AI Agent', description: 'Construct a state-evaluating agent navigating ghosts and maximizing pellet collection.', deliverables: ['Game engine agent', 'Performance benchmarking report'] },
        ],
        interviewPreparation: [
          { question: 'What makes a heuristic admissible and consistent in A* search?', concept: 'Admissibility guarantees optimality; consistency ensures monotonic cost growth without re-expanding closed nodes.' },
        ],
      },
      {
        stageId: 'ai-s2',
        title: 'Probabilistic Reasoning & Neural Architectures',
        order: 2,
        topics: [
          {
            topicId: 'ai-t3',
            title: 'Bayesian Networks & Markov Decision Processes',
            subtopics: ['Conditional Independence', 'Exact and Approximate Inference', 'Markov Decision Processes (MDPs)', 'Bellman Equation'],
            toolsAndTechnologies: ['PyMC3', 'pgmpy', 'SciPy'],
            industrySkills: ['Uncertainty Modeling', 'Stochastic Decision Making'],
            recommendedResources: [{ title: 'Probabilistic Graphical Models - Koller', type: 'BOOK' }],
          },
        ],
        practicalAssignments: [
          { id: 'ai-a3', title: 'Medical Diagnosis Bayesian Network', description: 'Model causal disease symptoms and calculate posterior probabilities.', difficulty: 'INTERMEDIATE' },
        ],
        capstoneProjects: [
          { id: 'ai-p2', title: 'Automated Portfolio Optimizer via MDP', description: 'Formulate asset rebalancing as an MDP solved by Value Iteration.', deliverables: ['MDP Python solver', 'Backtest performance analysis'] },
        ],
        interviewPreparation: [
          { question: 'Explain how Bellman Optimality equations derive optimal policies in MDPs.', concept: 'Decomposes value into immediate reward plus discounted expected value of successor states.' },
        ],
      },
    ],
  },
  {
    slug: 'machine-learning',
    title: 'Machine Learning (ML)',
    category: 'AI & Data',
    description: 'Comprehensive supervised, unsupervised, and ensemble machine learning algorithms, rigorous validation, loss optimization, and feature engineering.',
    version: 1,
    estimatedHours: 150,
    prerequisites: ['Python', 'Pandas & NumPy', 'Statistics & Calculus'],
    icon: 'Cpu',
    stages: [
      {
        stageId: 'ml-s1',
        title: 'Supervised Learning & Statistical Modeling',
        order: 1,
        topics: [
          {
            topicId: 'ml-t1',
            title: 'Regression & Classification Foundations',
            subtopics: ['Linear Regression & OLS', 'Regularization (Ridge, Lasso, ElasticNet)', 'Logistic Regression', 'Support Vector Machines (SVM)', 'Decision Trees'],
            toolsAndTechnologies: ['Scikit-Learn', 'NumPy', 'Matplotlib', 'Seaborn'],
            industrySkills: ['Bias-Variance Tradeoff', 'Cross-Validation', 'Evaluation Metrics (ROC-AUC, F1, PR-AUC)'],
            recommendedResources: [
              { title: 'Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow', type: 'BOOK' },
              { title: 'Andrew Ng Machine Learning Specialization', type: 'COURSE' },
            ],
          },
        ],
        practicalAssignments: [
          { id: 'ml-a1', title: 'House Price Prediction with Ridge & Lasso', description: 'Engineer polynomial features and perform nested cross-validation.', difficulty: 'BEGINNER' },
          { id: 'ml-a2', title: 'Credit Card Fraud Detection', description: 'Handle severe class imbalance using SMOTE and cost-sensitive classification.', difficulty: 'INTERMEDIATE' },
        ],
        capstoneProjects: [
          { id: 'ml-p1', title: 'Customer Churn Predictor Pipeline', description: 'End-to-end churn prediction model with SHAP explainability dashboard.', deliverables: ['Scikit-learn pipeline', 'SHAP feature importance plots', 'FastAPI inference endpoint'] },
        ],
        interviewPreparation: [
          { question: 'What is the mathematical difference between L1 (Lasso) and L2 (Ridge) regularization?', concept: 'L1 adds absolute coefficient values driving weights to zero (sparsity); L2 adds squared values shrinking weights evenly.' },
        ],
      },
      {
        stageId: 'ml-s2',
        title: 'Ensemble Learning & Unsupervised Clustering',
        order: 2,
        topics: [
          {
            topicId: 'ml-t2',
            title: 'Boosting, Bagging & Dimensionality Reduction',
            subtopics: ['Random Forests', 'Gradient Boosting (XGBoost, LightGBM, CatBoost)', 'K-Means Clustering', 'DBSCAN', 'PCA & t-SNE'],
            toolsAndTechnologies: ['XGBoost', 'LightGBM', 'Optuna', 'Scikit-Learn'],
            industrySkills: ['Hyperparameter Tuning', 'Cluster Validation (Silhouette Score)', 'Latent Space Exploration'],
            recommendedResources: [{ title: 'XGBoost Official Documentation & Case Studies', type: 'DOCUMENTATION' }],
          },
        ],
        practicalAssignments: [
          { id: 'ml-a3', title: 'Kaggle Titanic & Housing Competitions', description: 'Stack XGBoost, LightGBM and CatBoost with Optuna bayesian tuning.', difficulty: 'INTERMEDIATE' },
        ],
        capstoneProjects: [
          { id: 'ml-p2', title: 'E-Commerce Customer Segmentation Engine', description: 'Cluster 500k customer purchase profiles using PCA and Gaussian Mixture Models.', deliverables: ['Segmentation notebook', 'Marketing persona insights report'] },
        ],
        interviewPreparation: [
          { question: 'Why does Gradient Boosting train models sequentially whereas Random Forests train in parallel?', concept: 'Random Forest trains independent trees on bootstrapped data (bagging); Gradient Boosting trains each tree on residuals of previous trees (boosting).' },
        ],
      },
    ],
  },
  {
    slug: 'data-science',
    title: 'Data Science',
    category: 'AI & Data',
    description: 'Transform raw enterprise data into statistical insights and predictive intelligence via exploratory analysis, hypothesis testing, and narrative visualization.',
    version: 1,
    estimatedHours: 140,
    prerequisites: ['Python or R', 'Basic Statistics', 'SQL Foundations'],
    icon: 'BarChart2',
    stages: [
      {
        stageId: 'ds-s1',
        title: 'Exploratory Data Analysis & Statistical Inference',
        order: 1,
        topics: [
          {
            topicId: 'ds-t1',
            title: 'Data Wrangling & Statistical Tests',
            subtopics: ['Missing Value Imputation', 'Outlier Detection (IQR, Z-Score)', 'Hypothesis Testing (t-test, ANOVA, Chi-Square)', 'A/B Testing Frameworks'],
            toolsAndTechnologies: ['Pandas', 'SciPy', 'Statsmodels', 'Seaborn'],
            industrySkills: ['Statistical Rigor', 'Sample Size Determination', 'P-value Interpretation'],
            recommendedResources: [{ title: 'Practical Statistics for Data Scientists - Bruce & Bruce', type: 'BOOK' }],
          },
        ],
        practicalAssignments: [
          { id: 'ds-a1', title: 'SaaS Signup Funnel A/B Test Analysis', description: 'Compute statistical power, z-statistic, and confidence intervals for two landing pages.', difficulty: 'INTERMEDIATE' },
        ],
        capstoneProjects: [
          { id: 'ds-p1', title: 'Healthcare Patient Readmission Analytics', description: 'Clean electronic health records, discover risk factors, and build interactive Streamlit dashboard.', deliverables: ['EDA notebook', 'Interactive Streamlit app', 'Executive summary presentation'] },
        ],
        interviewPreparation: [
          { question: 'What is Type I error vs Type II error in an A/B test?', concept: 'Type I (false positive) rejects true null; Type II (false negative) fails to reject false null.' },
        ],
      },
    ],
  },
  {
    slug: 'data-analytics',
    title: 'Data Analytics',
    category: 'AI & Data',
    description: 'Master advanced SQL, data warehousing schemas (Star, Snowflake), ETL pipelines, and executive BI dashboards in Tableau and PowerBI.',
    version: 1,
    estimatedHours: 110,
    prerequisites: ['Basic Excel', 'Foundational Database Concepts'],
    icon: 'PieChart',
    stages: [
      {
        stageId: 'da-s1',
        title: 'Enterprise SQL & BI Dashboards',
        order: 1,
        topics: [
          {
            topicId: 'da-t1',
            title: 'Advanced SQL for Analytics',
            subtopics: ['Window Functions (ROW_NUMBER, RANK, NTILE)', 'Common Table Expressions (CTEs)', 'Cohort Retention Analysis', 'Aggregate Rollups'],
            toolsAndTechnologies: ['PostgreSQL', 'Snowflake', 'BigQuery', 'PowerBI', 'Tableau'],
            industrySkills: ['Business Metric Calculation (LTV, CAC, MRR)', 'Dashboard Design', 'Data Storytelling'],
            recommendedResources: [{ title: 'SQL for Data Analysis - Cathy Tanimura', type: 'BOOK' }],
          },
        ],
        practicalAssignments: [
          { id: 'da-a1', title: 'Monthly Recurring Revenue (MRR) Cohort SQL', description: 'Write SQL query tracking customer retention curves over 12 months.', difficulty: 'INTERMEDIATE' },
        ],
        capstoneProjects: [
          { id: 'da-p1', title: 'Executive Sales & Logistics PowerBI Dashboard', description: 'Build end-to-end BI dashboard modeling regional revenue, margins, and supply chain delays.', deliverables: ['PowerBI/Tableau workbook', 'Data schema model', 'KPI metrics dictionary'] },
        ],
        interviewPreparation: [
          { question: 'What is the performance difference between RANK() and DENSE_RANK() in SQL?', concept: 'RANK() skips positions for tied values (1, 2, 2, 4); DENSE_RANK() does not skip (1, 2, 2, 3).' },
        ],
      },
    ],
  },
  {
    slug: 'full-stack-web-development',
    title: 'Full Stack Web Development',
    category: 'Software Engineering',
    description: 'Master modern full-stack web applications spanning responsive frontend clients, scalable REST & GraphQL backends, databases, security, and cloud deployment.',
    version: 1,
    estimatedHours: 180,
    prerequisites: ['HTML/CSS/JS Basics', 'Basic Git'],
    icon: 'Globe',
    stages: [
      {
        stageId: 'fs-s1',
        title: 'Core Full-Stack Architecture & Modern React',
        order: 1,
        topics: [
          {
            topicId: 'fs-t1',
            title: 'Client Architecture & API Integration',
            subtopics: ['Modern React 19 Patterns', 'State Management (Zustand/Redux Toolkit)', 'TanStack Query (React Query)', 'Tailwind CSS'],
            toolsAndTechnologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Axios'],
            industrySkills: ['Component Composition', 'Server State Caching', 'Optimistic UI Updates'],
            recommendedResources: [{ title: 'Full Stack Open - University of Helsinki', type: 'COURSE' }],
          },
        ],
        practicalAssignments: [
          { id: 'fs-a1', title: 'Infinite Scrolling Feed with TanStack Query', description: 'Implement cursor pagination with optimistic bookmarking.', difficulty: 'INTERMEDIATE' },
        ],
        capstoneProjects: [
          { id: 'fs-p1', title: 'Real-Time Collaborative Kanban Board', description: 'Build Trello clone with drag-and-drop, WebSocket real-time syncing, and JWT authentication.', deliverables: ['Frontend React app', 'Express REST API', 'WebSocket server', 'MongoDB schema'] },
        ],
        interviewPreparation: [
          { question: 'How do you prevent Cross-Site Scripting (XSS) and Cross-Site Request Forgery (CSRF) in full-stack applications?', concept: 'Sanitize user inputs, escape HTML, store JWT in HttpOnly SameSite cookies, and use CSRF tokens for mutating requests.' },
        ],
      },
    ],
  },
  {
    slug: 'frontend-development',
    title: 'Frontend Development',
    category: 'Software Engineering',
    description: 'Master modern browser mechanics, deep React/Next.js architectures, accessibility (a11y), responsive design, Web Vitals, and client state orchestration.',
    version: 1,
    estimatedHours: 130,
    prerequisites: ['JavaScript ES6+', 'HTML5 & CSS3'],
    icon: 'Layout',
    stages: [
      {
        stageId: 'fe-s1',
        title: 'Advanced React, Next.js & Performance',
        order: 1,
        topics: [
          {
            topicId: 'fe-t1',
            title: 'React Internals, Virtual DOM & Core Web Vitals',
            subtopics: ['Fiber Architecture & Reconciliation', 'Hooks Lifecycle & Custom Hooks', 'Server Components (RSC)', 'Core Web Vitals (LCP, FID/INP, CLS)'],
            toolsAndTechnologies: ['React', 'Next.js', 'Lighthouse', 'Webpack/Vite', 'Storybook'],
            industrySkills: ['Bundle Splitting', 'Accessibility WCAG 2.1 AA', 'Micro-Frontends'],
            recommendedResources: [{ title: 'React Documentation (react.dev)', type: 'DOCUMENTATION' }],
          },
        ],
        practicalAssignments: [
          { id: 'fe-a1', title: 'Custom Virtualized List Component', description: 'Render 100,000 DOM rows smoothly using windowing techniques.', difficulty: 'ADVANCED' },
        ],
        capstoneProjects: [
          { id: 'fe-p1', title: 'Enterprise Design System & Component Library', description: 'Publish accessible, themed Tailwind UI kit with Storybook documentation and automated chromatic tests.', deliverables: ['Storybook deployment', 'NPM component library package', 'Accessibility audit score > 98'] },
        ],
        interviewPreparation: [
          { question: 'How does React 18 Concurrent Mode enable non-blocking UI rendering?', concept: 'Uses time-slicing via scheduler to interrupt long renders for urgent user events (typing/clicks) without freezing the main thread.' },
        ],
      },
    ],
  },
  {
    slug: 'backend-development',
    title: 'Backend Development',
    category: 'Software Engineering',
    description: 'Design robust, scalable distributed backend systems, relational & NoSQL databases, caching layers, message queues, and bulletproof security protocols.',
    version: 1,
    estimatedHours: 150,
    prerequisites: ['Core Programming Language (Node/Go/Java)', 'Basic Networking'],
    icon: 'Server',
    stages: [
      {
        stageId: 'be-s1',
        title: 'API Design, Concurrency & Microservices',
        order: 1,
        topics: [
          {
            topicId: 'be-t1',
            title: 'Distributed Systems & Asynchronous Message Queues',
            subtopics: ['RESTful API Best Practices & OpenAPI', 'Redis In-Memory Caching (Cache-Aside, Write-Through)', 'Event-Driven Architecture with RabbitMQ/Kafka', 'Database Sharding & Replication'],
            toolsAndTechnologies: ['Node.js', 'Express', 'Redis', 'PostgreSQL', 'RabbitMQ', 'Docker'],
            industrySkills: ['Rate Limiting', 'Idempotency Keys', 'Graceful Degradation', 'Database Transaction Isolation Levels'],
            recommendedResources: [{ title: 'Designing Data-Intensive Applications - Martin Kleppmann', type: 'BOOK' }],
          },
        ],
        practicalAssignments: [
          { id: 'be-a1', title: 'Distributed Rate Limiter with Redis Token Bucket', description: 'Prevent API abuse by enforcing IP & tenant limits using Lua scripts in Redis.', difficulty: 'INTERMEDIATE' },
        ],
        capstoneProjects: [
          { id: 'be-p1', title: 'High-Throughput Notification Dispatch Engine', description: 'Process 10,000 notifications/sec via RabbitMQ workers, email/SMS adapters, with dead-letter queue retry logic.', deliverables: ['Microservice repo', 'Docker Compose cluster', 'Throughput benchmark test script'] },
        ],
        interviewPreparation: [
          { question: 'What is the difference between Pessimistic and Optimistic Concurrency Control in relational databases?', concept: 'Pessimistic locks rows upfront (SELECT FOR UPDATE) preventing concurrent writes; Optimistic checks a version column before commit, aborting on collision.' },
        ],
      },
    ],
  },
  {
    slug: 'mern-stack',
    title: 'MERN Stack Development',
    category: 'Software Engineering',
    description: 'Master MongoDB, Express.js, React, and Node.js for building scalable, enterprise-grade, JavaScript-driven full-stack web applications.',
    version: 1,
    estimatedHours: 140,
    prerequisites: ['Modern JavaScript (ES6+)', 'HTML & CSS'],
    icon: 'Layers',
    stages: [
      {
        stageId: 'mern-s1',
        title: 'MERN Architecture, Authentication & Production Deployment',
        order: 1,
        topics: [
          {
            topicId: 'mern-t1',
            title: 'Node.js Runtime & Express Middleware Architecture',
            subtopics: ['Event Loop & Non-blocking I/O', 'Express Middleware Pipeline', 'JWT Stateless Auth & HttpOnly Cookies', 'Mongoose Modeling & Aggregation Pipelines'],
            toolsAndTechnologies: ['Node.js', 'Express', 'MongoDB Atlas', 'Mongoose', 'React', 'Zod'],
            industrySkills: ['Tenant Scoping', 'Schema Validation', 'Bcrypt Hashing', 'Async Error Handling'],
            recommendedResources: [{ title: 'Node.js Official Documentation & Guides', type: 'DOCUMENTATION' }],
          },
        ],
        practicalAssignments: [
          { id: 'mern-a1', title: 'Multi-Stage MongoDB Aggregation Pipeline', description: 'Compute monthly student revenue grouped by campus and academic tier.', difficulty: 'INTERMEDIATE' },
        ],
        capstoneProjects: [
          { id: 'mern-p1', title: 'Enterprise Placement SaaS Management System', description: 'Build multi-tenant platform with RBAC, batch CSV student onboarding, and real-time placement tracking.', deliverables: ['Express API', 'React SPA', 'MongoDB aggregation reports'] },
        ],
        interviewPreparation: [
          { question: 'Explain the 6 phases of the Node.js Event Loop.', concept: 'Timers -> Pending Callbacks -> Idle/Prepare -> Poll -> Check (setImmediate) -> Close Callbacks.' },
        ],
      },
    ],
  },
  {
    slug: 'java-development',
    title: 'Java Enterprise Development',
    category: 'Software Engineering',
    description: 'Master Java 21, Spring Boot 3, Spring Data JPA, Hibernate, Microservices, multithreading, and enterprise cloud-native patterns.',
    version: 1,
    estimatedHours: 160,
    prerequisites: ['OOP Principles', 'Basic Data Structures'],
    icon: 'Coffee',
    stages: [
      {
        stageId: 'java-s1',
        title: 'Core Java Concurrency & Spring Boot Microservices',
        order: 1,
        topics: [
          {
            topicId: 'java-t1',
            title: 'Java 21 Modern Features & Spring Boot 3',
            subtopics: ['Virtual Threads (Project Loom)', 'Streams API & Functional Interfaces', 'Spring Boot Dependency Injection & Spring Security', 'Hibernate N+1 Problem & Entity Mappings'],
            toolsAndTechnologies: ['Java 21', 'Spring Boot 3', 'Hibernate', 'Maven/Gradle', 'PostgreSQL', 'JUnit 5 & Mockito'],
            industrySkills: ['Enterprise Architecture', 'Thread Pooling', 'Clean Code & SOLID Principles'],
            recommendedResources: [{ title: 'Effective Java - Joshua Bloch', type: 'BOOK' }],
          },
        ],
        practicalAssignments: [
          { id: 'java-a1', title: 'High-Concurrency Web Crawler with Virtual Threads', description: 'Crawl 5,000 URLs concurrently using Java 21 Virtual Threads.', difficulty: 'ADVANCED' },
        ],
        capstoneProjects: [
          { id: 'java-p1', title: 'Banking Core Transaction Microservice', description: 'Build ACID-compliant account transfer service with distributed locking, Spring Security JWT, and OpenAPI docs.', deliverables: ['Spring Boot project', 'Flyway database migrations', '90%+ test coverage with Mockito'] },
        ],
        interviewPreparation: [
          { question: 'How do Java 21 Virtual Threads differ from traditional Platform (OS) Threads?', concept: 'Platform threads map 1:1 to OS kernel threads (~1MB stack); Virtual threads are lightweight user-mode threads managed by JVM (~few KB) multiplexed onto a pool of carrier threads.' },
        ],
      },
    ],
  },
  {
    slug: 'python-development',
    title: 'Python Development',
    category: 'Software Engineering',
    description: 'Master advanced Python 3, asynchronous programming with asyncio, modern web frameworks (FastAPI/Django), automated testing, and clean software architecture.',
    version: 1,
    estimatedHours: 130,
    prerequisites: ['Basic Python Syntax', 'General Programming Logic'],
    icon: 'Code',
    stages: [
      {
        stageId: 'py-s1',
        title: 'Advanced Python Mechanics & Asynchronous FastAPI',
        order: 1,
        topics: [
          {
            topicId: 'py-t1',
            title: 'Metaprogramming, Generators & Asyncio',
            subtopics: ['Generators & Coroutines', 'Decorators & Context Managers', 'Asyncio Event Loop & Concurrency', 'FastAPI Dependency Injection & Pydantic V2'],
            toolsAndTechnologies: ['Python 3.12', 'FastAPI', 'Pydantic', 'Asyncio', 'Alembic', 'Pytest'],
            industrySkills: ['Type Hinting & Static Analysis (mypy)', 'RESTful Microservices', 'High-Performance Asynchronous I/O'],
            recommendedResources: [{ title: 'Fluent Python - Luciano Ramalho', type: 'BOOK' }],
          },
        ],
        practicalAssignments: [
          { id: 'py-a1', title: 'Custom Cache Decorator with TTL & LRU Eviction', description: 'Write an asynchronous memoization decorator supporting Redis and in-memory fallback.', difficulty: 'INTERMEDIATE' },
        ],
        capstoneProjects: [
          { id: 'py-p1', title: 'Asynchronous Web Scraper & Intelligence Aggregator', description: 'Build FastAPI backend aggregating job postings via Playwright and Asyncio workers with Celery tasks.', deliverables: ['FastAPI application', 'Pydantic data schemas', 'Automated pytest suite'] },
        ],
        interviewPreparation: [
          { question: 'What is the Global Interpreter Lock (GIL) in CPython and when does it not hinder concurrency?', concept: 'The GIL prevents multi-threaded bytecode execution on multiple CPU cores for CPU-bound tasks, but releases during I/O operations (network/disk calls).' },
        ],
      },
    ],
  },
  {
    slug: 'devops',
    title: 'DevOps & Site Reliability Engineering',
    category: 'Cloud & DevOps',
    description: 'Automate software delivery pipelines with GitOps, Docker, Kubernetes, CI/CD, Infrastructure as Code (Terraform), and Prometheus/Grafana observability.',
    version: 1,
    estimatedHours: 160,
    prerequisites: ['Linux Command Line Basics', 'Basic Networking (TCP/IP, DNS)'],
    icon: 'Terminal',
    stages: [
      {
        stageId: 'devops-s1',
        title: 'Container Orchestration & CI/CD Pipelines',
        order: 1,
        topics: [
          {
            topicId: 'devops-t1',
            title: 'Docker Containerization & Kubernetes Cluster Management',
            subtopics: ['Multi-Stage Dockerfile Optimization', 'Kubernetes Pods, Deployments, Services & Ingress', 'Helm Charts & ConfigMaps', 'GitHub Actions CI/CD Pipeline Automation'],
            toolsAndTechnologies: ['Docker', 'Kubernetes', 'Helm', 'GitHub Actions', 'Terraform', 'Prometheus', 'Grafana'],
            industrySkills: ['Zero-Downtime Rolling Updates', 'Container Security Scanning (Trivy)', 'Infrastructure as Code (IaC)'],
            recommendedResources: [{ title: 'The DevOps Handbook - Gene Kim et al.', type: 'BOOK' }],
          },
        ],
        practicalAssignments: [
          { id: 'devops-a1', title: 'Multi-Stage Production Docker Build', description: 'Shrink a Node/React production image from 1.2GB to under 80MB using Alpine and multi-stage copying.', difficulty: 'BEGINNER' },
        ],
        capstoneProjects: [
          { id: 'devops-p1', title: 'Production GitOps Pipeline with Helm & ArgoCD', description: 'Deploy resilient multi-microservice app onto Kubernetes with automated canary deployments and Grafana alerting.', deliverables: ['Kubernetes manifests', 'Helm chart repo', 'Prometheus dashboard export'] },
        ],
        interviewPreparation: [
          { question: 'What is the difference between a Kubernetes NodePort, ClusterIP, and LoadBalancer service?', concept: 'ClusterIP exposes service internally; NodePort opens a static port on every cluster node; LoadBalancer provisions an external cloud cloud-provider load balancer.' },
        ],
      },
    ],
  },
  {
    slug: 'cloud-computing',
    title: 'Cloud Computing Architecture (AWS & GCP)',
    category: 'Cloud & DevOps',
    description: 'Design highly available, fault-tolerant, cost-optimized, and secure enterprise architectures on leading cloud platforms (AWS/GCP).',
    version: 1,
    estimatedHours: 140,
    prerequisites: ['Basic Linux', 'Network Fundamentals'],
    icon: 'Cloud',
    stages: [
      {
        stageId: 'cloud-s1',
        title: 'AWS Cloud Architecture & Serverless Computing',
        order: 1,
        topics: [
          {
            topicId: 'cloud-t1',
            title: 'VPC Networking, IAM Security & Serverless',
            subtopics: ['VPC Subnets, Route Tables & NAT Gateways', 'IAM Least-Privilege Policies & Roles', 'AWS Lambda & API Gateway', 'S3 Object Storage & CloudFront CDN'],
            toolsAndTechnologies: ['AWS (VPC, EC2, S3, RDS, Lambda, IAM)', 'Terraform', 'AWS CDK'],
            industrySkills: ['Cloud Cost Optimization', 'Disaster Recovery (RTO/RPO)', 'Multi-AZ High Availability'],
            recommendedResources: [{ title: 'AWS Well-Architected Framework Whitepapers', type: 'DOCUMENTATION' }],
          },
        ],
        practicalAssignments: [
          { id: 'cloud-a1', title: 'Automated Terraform VPC & Auto-Scaling Group', description: 'Provision secure multi-AZ VPC with public and private subnets via Terraform.', difficulty: 'INTERMEDIATE' },
        ],
        capstoneProjects: [
          { id: 'cloud-p1', title: 'Serverless Video Transcoding Architecture', description: 'Event-driven architecture: S3 upload triggers Lambda, spins up Fargate transcoder, and writes metadata to DynamoDB.', deliverables: ['Terraform IaC scripts', 'Lambda handler source code', 'Architecture diagram'] },
        ],
        interviewPreparation: [
          { question: 'Explain the AWS Shared Responsibility Model.', concept: 'AWS is responsible for security OF the cloud (hardware, facilities, host OS, virtualization); customer is responsible for security IN the cloud (data, IAM, network configs, guest OS).' },
        ],
      },
    ],
  },
  {
    slug: 'cybersecurity',
    title: 'Cybersecurity & Ethical Hacking',
    category: 'Cybersecurity & Systems',
    description: 'Protect enterprise infrastructure, master OWASP Top 10 web vulnerabilities, ethical hacking, network analysis, and cryptography.',
    version: 1,
    estimatedHours: 150,
    prerequisites: ['Networking (OSI Model, Wireshark)', 'Linux Operating System'],
    icon: 'Shield',
    stages: [
      {
        stageId: 'sec-s1',
        title: 'Application Security & Penetration Testing',
        order: 1,
        topics: [
          {
            topicId: 'sec-t1',
            title: 'OWASP Top 10 & Web Application Exploits',
            subtopics: ['SQL Injection (SQLi) & Blind SQLi', 'Cross-Site Scripting (XSS) Stored vs Reflected', 'Server-Side Request Forgery (SSRF)', 'JWT Cryptographic Vulnerabilities'],
            toolsAndTechnologies: ['Burp Suite', 'OWASP ZAP', 'Nmap', 'Wireshark', 'Metasploit', 'Kali Linux'],
            industrySkills: ['Vulnerability Assessment', 'Threat Modeling (STRIDE)', 'Secure Code Auditing'],
            recommendedResources: [{ title: 'PortSwigger Web Security Academy', type: 'COURSE' }],
          },
        ],
        practicalAssignments: [
          { id: 'sec-a1', title: 'Exploit & Patch SQL Injection on Vulnerable Node App', description: 'Demonstrate union-based exploit extracting password hashes, then fix using parameterized queries.', difficulty: 'INTERMEDIATE' },
        ],
        capstoneProjects: [
          { id: 'sec-p1', title: 'Comprehensive Penetration Testing Audit Report', description: 'Conduct authorized black-box security audit against a mock financial portal and draft industry-standard remediations.', deliverables: ['Executive audit report', 'Proof of Concept exploit scripts', 'Remediation patch guide'] },
        ],
        interviewPreparation: [
          { question: 'What is SSRF (Server-Side Request Forgery) and how does it compromise cloud metadata endpoints?', concept: 'SSRF tricks a server into making HTTP requests to internal resources (like AWS 169.254.169.254 metadata service), exposing secret IAM credentials.' },
        ],
      },
    ],
  },
  {
    slug: 'software-development-engineering',
    title: 'Software Development Engineering (SDE)',
    category: 'Software Engineering',
    description: 'The premier placement curriculum: rigorous Data Structures & Algorithms, Low-Level System Design (LLD), and High-Level Distributed Architecture (HLD).',
    version: 1,
    estimatedHours: 180,
    prerequisites: ['C++, Java, or Python', 'Discrete Mathematics'],
    icon: 'GitBranch',
    stages: [
      {
        stageId: 'sde-s1',
        title: 'Advanced DSA & Algorithmic Patterns',
        order: 1,
        topics: [
          {
            topicId: 'sde-t1',
            title: 'Dynamic Programming, Graph Theory & Trees',
            subtopics: ['Multidimensional DP & Memoization', 'Shortest Paths (Dijkstra, Bellman-Ford)', 'Topological Sorting & Kahn Algorithm', 'Tries & Segment Trees'],
            toolsAndTechnologies: ['C++', 'Java', 'Python', 'LeetCode', 'GDB'],
            industrySkills: ['Asymptotic Complexity Analysis', 'Corner-Case Verification', 'Space Optimization'],
            recommendedResources: [{ title: 'Introduction to Algorithms (CLRS)', type: 'BOOK' }],
          },
        ],
        practicalAssignments: [
          { id: 'sde-a1', title: 'Implement Segment Tree with Range Sum & Point Updates', description: 'Write O(log N) query and update algorithms from scratch.', difficulty: 'ADVANCED' },
        ],
        capstoneProjects: [
          { id: 'sde-p1', title: 'High-Level Design of Distributed URL Shortener (Bitly)', description: 'Design 100M daily writes system with consistent hashing, Redis caching, Base62 encoding, and DB sharding.', deliverables: ['HLD architecture diagram', 'Capacity estimation spreadsheet', 'API contract specification'] },
        ],
        interviewPreparation: [
          { question: 'How does Consistent Hashing minimize key remapping when adding or removing cache nodes?', concept: 'Maps both servers and keys onto a circular ring (0 to 2^32-1); adding a node only remaps keys belonging to the immediate neighboring slice rather than reshuffling all keys.' },
        ],
      },
    ],
  },
  {
    slug: 'android-development',
    title: 'Modern Android Development (Kotlin)',
    category: 'Mobile Development',
    description: 'Build native, modern Android applications using Kotlin, Jetpack Compose, Coroutines, Flow, Room Database, and Clean MVVM Architecture.',
    version: 1,
    estimatedHours: 140,
    prerequisites: ['Kotlin Basics', 'Object-Oriented Programming'],
    icon: 'Smartphone',
    stages: [
      {
        stageId: 'android-s1',
        title: 'Jetpack Compose, Coroutines & Clean Architecture',
        order: 1,
        topics: [
          {
            topicId: 'android-t1',
            title: 'Modern Declarative UI & Reactive State',
            subtopics: ['Jetpack Compose State & Recomposition', 'Kotlin Coroutines & StateFlow', 'Room Local Database & Offline-First Sync', 'Hilt Dependency Injection'],
            toolsAndTechnologies: ['Kotlin', 'Android Studio', 'Jetpack Compose', 'Room', 'Retrofit', 'Hilt'],
            industrySkills: ['Clean Architecture (MVVM)', 'Offline-First Synchronization', 'Material Design 3'],
            recommendedResources: [{ title: 'Android Developers Official Jetpack Compose Roadmap', type: 'DOCUMENTATION' }],
          },
        ],
        practicalAssignments: [
          { id: 'android-a1', title: 'Offline-First Notes App with Room & Compose', description: 'Build responsive UI observing StateFlow from Room DAO with live search filter.', difficulty: 'INTERMEDIATE' },
        ],
        capstoneProjects: [
          { id: 'android-p1', title: 'Crypto Portfolio Tracker Android App', description: 'Live Binance API tracking app with real-time WebSocket prices, candlestick charts, and background WorkManager notifications.', deliverables: ['Android Studio project (APK)', 'MVVM clean architecture tests'] },
        ],
        interviewPreparation: [
          { question: 'Why are Kotlin Coroutines preferred over Android AsyncTasks or raw Threads?', concept: 'Coroutines are cooperative, non-blocking lightweight constructs providing structured concurrency without thread starvation or memory leaks.' },
        ],
      },
    ],
  },
  {
    slug: 'ios-development',
    title: 'Native iOS Development (SwiftUI)',
    category: 'Mobile Development',
    description: 'Build native iOS apps with Swift 6, SwiftUI declarative views, SwiftData/CoreData persistence, Combine reactive frameworks, and Apple HIG.',
    version: 1,
    estimatedHours: 140,
    prerequisites: ['Swift Basics', 'OOP Fundamentals'],
    icon: 'Tablet',
    stages: [
      {
        stageId: 'ios-s1',
        title: 'Declarative SwiftUI & Modern Swift Concurrency',
        order: 1,
        topics: [
          {
            topicId: 'ios-t1',
            title: 'SwiftUI Views, Navigation & SwiftData',
            subtopics: ['SwiftUI View Lifecycle & State Objects (@State, @Binding, @Observable)', 'Swift Concurrency (async/await, Actors)', 'SwiftData Persistence Model', 'URLSession & Codable Networking'],
            toolsAndTechnologies: ['Swift 6', 'Xcode', 'SwiftUI', 'SwiftData', 'Combine', 'TestFlight'],
            industrySkills: ['Apple Human Interface Guidelines', 'Actor-Isolated Thread Safety', 'Memory Graph Debugging'],
            recommendedResources: [{ title: '100 Days of SwiftUI - Paul Hudson', type: 'COURSE' }],
          },
        ],
        practicalAssignments: [
          { id: 'ios-a1', title: 'Expense Tracker with SwiftData & Interactive Charts', description: 'Model monthly expenses using SwiftData schemas and Swift Charts.', difficulty: 'INTERMEDIATE' },
        ],
        capstoneProjects: [
          { id: 'ios-p1', title: 'Social Fitness Activity Tracker iOS App', description: 'HealthKit integration, interactive step tracker, social feed, and Apple Watch companion app.', deliverables: ['Xcode workspace', 'App Store ready screenshots', 'Unit & UI test suites'] },
        ],
        interviewPreparation: [
          { question: 'What problem do Swift Actors solve in concurrent programming?', concept: 'Actors protect mutable state by ensuring only one task can access their isolated state at any given time, eliminating data races at compile time.' },
        ],
      },
    ],
  },
  {
    slug: 'database-engineering',
    title: 'Database Engineering & Storage Engines',
    category: 'Software Engineering',
    description: 'Deep dive into relational storage internals (B-Trees, LSM-Trees), query planners, ACID transaction isolation, distributed consensus, and replication.',
    version: 1,
    estimatedHours: 130,
    prerequisites: ['SQL Basics', 'Operating Systems (Disk I/O, Memory)'],
    icon: 'Database',
    stages: [
      {
        stageId: 'db-s1',
        title: 'Storage Engines, Indexing & Query Optimization',
        order: 1,
        topics: [
          {
            topicId: 'db-t1',
            title: 'B+ Tree Index Internals & Query Execution Plans',
            subtopics: ['B+ Trees vs LSM Trees (Postgres vs Cassandra/RocksDB)', 'Write-Ahead Logging (WAL)', 'EXPLAIN ANALYZE & Index Scans vs Seq Scans', 'MVCC (Multi-Version Concurrency Control)'],
            toolsAndTechnologies: ['PostgreSQL', 'MySQL (InnoDB)', 'Redis', 'Cassandra', 'pg_stat_statements'],
            industrySkills: ['Database Index Tuning', 'Query Execution Profiling', 'Connection Pool Tuning (PgBouncer)'],
            recommendedResources: [{ title: 'Database Internals - Alex Petrov', type: 'BOOK' }],
          },
        ],
        practicalAssignments: [
          { id: 'db-a1', title: 'Optimize Slow Query with EXPLAIN ANALYZE', description: 'Refactor a 10M row table query reducing runtime from 4,500ms to 8ms via composite covering indexes.', difficulty: 'ADVANCED' },
        ],
        capstoneProjects: [
          { id: 'db-p1', title: 'Custom In-Memory Key-Value Storage Engine with WAL', description: 'Build simplified Redis clone in C++/Python implementing B-Tree indexing and append-only disk persistence.', deliverables: ['Storage engine code', 'Crash-recovery verification test suite', 'Read/write throughput benchmark'] },
        ],
        interviewPreparation: [
          { question: 'Why are B+ Trees favored over Binary Search Trees or Hash Tables for disk-based relational databases?', concept: 'B+ Trees have high branching factor minimizing disk page seeks, and leaf nodes are linked sequentially allowing fast range scans.' },
        ],
      },
    ],
  },
  {
    slug: 'generative-ai',
    title: 'Generative AI & LLM Systems',
    category: 'AI & Data',
    description: 'Build enterprise-grade AI agents, Retrieval-Augmented Generation (RAG) pipelines, fine-tuned foundational models, and multi-agent systems.',
    version: 1,
    estimatedHours: 150,
    prerequisites: ['Python Proficiency', 'Basic Machine Learning & Deep Learning'],
    icon: 'Sparkles',
    stages: [
      {
        stageId: 'genai-s1',
        title: 'Large Language Models, RAG & Vector Embeddings',
        order: 1,
        topics: [
          {
            topicId: 'genai-t1',
            title: 'Transformer Architecture & RAG Pipelines',
            subtopics: ['Self-Attention & Transformer Mechanics', 'Vector Embeddings & Semantic Search', 'Vector Databases (Pinecone, ChromaDB, pgvector)', 'Chunking Strategies & Context Re-ranking (Cohere)'],
            toolsAndTechnologies: ['Python', 'OpenAI/Gemini APIs', 'LangChain', 'LlamaIndex', 'ChromaDB', 'Hugging Face Transformers'],
            industrySkills: ['Prompt Engineering & Few-Shot Learning', 'RAG Hallucination Mitigation', 'Evaluation with Ragas'],
            recommendedResources: [{ title: 'Attention Is All You Need (Vaswani et al.)', type: 'DOCUMENTATION' }],
          },
        ],
        practicalAssignments: [
          { id: 'genai-a1', title: 'Enterprise Document RAG Assistant with Hybrid Search', description: 'Ingest 500-page college policy PDFs, embed into Chroma, and answer student questions with verified citations.', difficulty: 'INTERMEDIATE' },
        ],
        capstoneProjects: [
          { id: 'genai-p1', title: 'Autonomous Multi-Agent Technical Interview Simulator', description: 'Build team of collaborating LLM agents (Interviewer, System Evaluator, Scorecard Generator) conducting voice/text coding interviews.', deliverables: ['LangGraph agent pipeline', 'Streamlit interactive chat interface', 'Benchmarking metrics evaluation'] },
        ],
        interviewPreparation: [
          { question: 'How does self-attention compute token relationships in the Transformer architecture?', concept: 'Calculates dot product of Query and Key vectors scaled by sqrt(d_k), applies Softmax to yield attention weights, and multiplies by Value vectors.' },
        ],
      },
    ],
  },
  {
    slug: 'mlops',
    title: 'MLOps: Machine Learning Operations & Production',
    category: 'AI & Data',
    description: 'Transition ML prototypes to resilient production systems via automated pipelines, experiment tracking, model registries, feature stores, and drift monitoring.',
    version: 1,
    estimatedHours: 140,
    prerequisites: ['Machine Learning Basics', 'Docker & DevOps Foundations'],
    icon: 'Activity',
    stages: [
      {
        stageId: 'mlops-s1',
        title: 'CI/CD for ML, Experiment Tracking & Drift Detection',
        order: 1,
        topics: [
          {
            topicId: 'mlops-t1',
            title: 'Experiment Tracking, Model Registries & Serving',
            subtopics: ['Experiment Versioning with MLflow & DVC', 'Automated ML Pipelines with Kubeflow/Airflow', 'High-Throughput Model Serving with Triton & FastAPI', 'Concept Drift & Data Drift Detection (Evidently AI)'],
            toolsAndTechnologies: ['MLflow', 'DVC', 'Docker', 'Kubeflow', 'FastAPI', 'Evidently AI', 'Prometheus'],
            industrySkills: ['Model Lineage & Governance', 'Automated Model Retraining Triggers', 'Inference Latency Optimization'],
            recommendedResources: [{ title: 'Building Machine Learning Pipelines - Valliappa Lakshmanan', type: 'BOOK' }],
          },
        ],
        practicalAssignments: [
          { id: 'mlops-a1', title: 'MLflow Experiment Tracking & Model Registry Deployment', description: 'Log model parameters, ROC metrics, and register champion model for production rollout.', difficulty: 'INTERMEDIATE' },
        ],
        capstoneProjects: [
          { id: 'mlops-p1', title: 'Continuous Training & Drift-Aware Serving Platform', description: 'End-to-end pipeline: Ingest live transactions, serve predictions under 20ms, detect covariate drift, and trigger automatic retraining.', deliverables: ['Airflow DAGs', 'MLflow tracking server setup', 'Evidently drift dashboard'] },
        ],
        interviewPreparation: [
          { question: 'What is the difference between Data Drift and Concept Drift in production ML?', concept: 'Data drift is a shift in the input feature distribution P(X) without changing P(Y|X); Concept drift is a change in the underlying statistical relationship between features and target P(Y|X).' },
        ],
      },
    ],
  },
];

export async function seedRoadmaps(): Promise<void> {
  for (const roadmap of ALL_19_ROADMAPS) {
    await Roadmap.findOneAndUpdate({ slug: roadmap.slug }, { $set: roadmap }, { upsert: true, new: true });
  }
}
