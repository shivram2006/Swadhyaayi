export const LANGUAGES_AND_SDE_ROADMAPS = [
  {
    slug: 'python-development',
    title: 'Python Development (Beginner to Backend)',
    category: 'Backend & Languages',
    description: 'Start from Python basics (variables, input/output, if-else, loops, functions), progress to OOP & async Python, and build production APIs with FastAPI & Django.',
    version: 2,
    estimatedHours: 160,
    prerequisites: ['Basic Computer Literacy'],
    icon: 'Code2',
    stages: [
      {
        stageId: 'py-s1',
        title: 'Python Fundamentals',
        order: 1,
        topics: [
          {
            topicId: 'py-t1',
            title: 'Python Basics & Control Flow',
            subtopics: ['Variables, Data Types & Type Casting', 'Input / Output (input(), print(), f-strings)', 'Conditional Statements (if, elif, else)', 'Loops (for, while, break, continue, range)', 'Functions, Arguments, Return & Lambda'],
            toolsAndTechnologies: ['Python 3.12', 'VS Code'],
            industrySkills: ['Procedural Programming', 'Clean Python Syntax'],
            recommendedResources: [{ title: 'Official Python Tutorial', type: 'DOCUMENTATION' }],
          },
          {
            topicId: 'py-t2',
            title: 'Data Structures, Strings & Error Handling',
            subtopics: ['Lists, Tuples, Sets & Dictionaries', 'List & Dict Comprehensions', 'String Slicing & Methods', 'Exception Handling (try, except, finally, raise)', 'File I/O & Context Managers (with open)'],
            toolsAndTechnologies: ['Python Standard Library'],
            industrySkills: ['Pythonic Data Manipulation', 'Defensive Coding'],
            recommendedResources: [{ title: 'Automate the Boring Stuff with Python', type: 'BOOK' }],
          },
          {
            topicId: 'py-t3',
            title: 'Modules, Packages & Environments',
            subtopics: ['Importing & Creating Modules', 'Virtual Environments (venv, uv, poetry)', 'pip & requirements.txt / pyproject.toml', 'Git & GitHub Basics'],
            toolsAndTechnologies: ['venv', 'pip', 'uv', 'Git'],
            industrySkills: ['Dependency Management', 'Reproducible Environments'],
            recommendedResources: [{ title: 'Real Python: Virtual Environments Primer', type: 'DOCUMENTATION' }],
          },
        ],
        practicalAssignments: [
          { id: 'py-a1', title: 'CLI Expense & CSV Analyzer', description: 'Build a menu-driven CLI using functions, dicts, exception handling, and CSV file I/O.', difficulty: 'BEGINNER' },
        ],
        capstoneProjects: [],
        interviewPreparation: [
          { question: 'What is the difference between a list and a tuple in Python?', concept: 'Lists are mutable (dynamic arrays); tuples are immutable, hashable (if elements are), and slightly faster.' },
        ],
      },
      {
        stageId: 'py-s2',
        title: 'Object-Oriented & Intermediate Python',
        order: 2,
        topics: [
          {
            topicId: 'py-t4',
            title: 'Object-Oriented Programming (OOP)',
            subtopics: ['Classes, Objects & __init__', 'Encapsulation, Inheritance & Polymorphism', 'Dunder / Magic Methods (__str__, __repr__, __eq__)', 'Dataclasses & Abstract Base Classes'],
            toolsAndTechnologies: ['dataclasses', 'abc'],
            industrySkills: ['Object-Oriented Design'],
            recommendedResources: [{ title: 'Fluent Python - Luciano Ramalho', type: 'BOOK' }],
          },
          {
            topicId: 'py-t5',
            title: 'Advanced Python & Concurrency',
            subtopics: ['Iterators, Generators (yield) & Decorators', 'Type Hints & Static Checking (mypy / pyright)', 'Multithreading vs Multiprocessing (GIL)', 'Asyncio (async/await) & HTTP Requests (httpx)'],
            toolsAndTechnologies: ['mypy', 'asyncio', 'httpx'],
            industrySkills: ['Async I/O', 'Memory-Efficient Streams'],
            recommendedResources: [{ title: 'Real Python Asyncio Guide', type: 'DOCUMENTATION' }],
          },
        ],
        practicalAssignments: [
          { id: 'py-a2', title: 'Async Web Scraper & Rate Limiter', description: 'Fetch 50+ pages concurrently using asyncio and httpx with retry decorators.', difficulty: 'INTERMEDIATE' },
        ],
        capstoneProjects: [],
        interviewPreparation: [
          { question: 'What is the Python GIL and when does asyncio or multiprocessing help?', concept: 'The Global Interpreter Lock allows one thread to execute Python bytecode at a time; use asyncio for I/O-bound concurrency and multiprocessing for CPU-bound parallelism.' },
        ],
      },
      {
        stageId: 'py-s3',
        title: 'Backend Frameworks, Databases & Testing',
        order: 3,
        topics: [
          {
            topicId: 'py-t6',
            title: 'FastAPI & Django Web Development',
            subtopics: ['FastAPI Path/Query Params & Dependency Injection', 'Pydantic v2 Data Validation & Serialization', 'Django MVT, Admin & Django ORM', 'JWT Authentication & Background Tasks (Celery)'],
            toolsAndTechnologies: ['FastAPI', 'Pydantic', 'Django', 'Uvicorn', 'Celery'],
            industrySkills: ['High-Performance Python APIs', 'Schema Validation'],
            recommendedResources: [{ title: 'FastAPI Official Tutorial', type: 'DOCUMENTATION' }],
          },
          {
            topicId: 'py-t7',
            title: 'Databases, Pytest & Deployment',
            subtopics: ['PostgreSQL with SQLAlchemy & Alembic Migrations', 'Redis Caching', 'Automated Testing with Pytest & Fixtures', 'Dockerizing Python Apps'],
            toolsAndTechnologies: ['PostgreSQL', 'SQLAlchemy', 'Pytest', 'Docker'],
            industrySkills: ['Test-Driven Python', 'Containerized Deployment'],
            recommendedResources: [{ title: 'Pytest Official Docs', type: 'DOCUMENTATION' }],
          },
        ],
        practicalAssignments: [],
        capstoneProjects: [
          { id: 'py-p1', title: 'Production FastAPI SaaS Backend', description: 'Async FastAPI service with PostgreSQL + SQLAlchemy, JWT auth, Celery background jobs, Pytest suite, and Docker.', deliverables: ['OpenAPI Swagger docs', 'Pytest coverage report', 'Dockerfile'] },
        ],
        interviewPreparation: [
          { question: 'Why does FastAPI use Pydantic?', concept: 'Pydantic provides runtime type validation, serialization, and automatic OpenAPI/JSON Schema generation from Python type hints.' },
        ],
      },
    ],
  },
  {
    slug: 'java-development',
    title: 'Java & Spring Boot Enterprise',
    category: 'Backend & Languages',
    description: 'Master Core Java & OOP from scratch, Collections & Streams, SQL/JPA, Spring Boot REST APIs, Spring Security, Microservices, and Kafka.',
    version: 2,
    estimatedHours: 190,
    prerequisites: ['Basic Logic'],
    icon: 'Coffee',
    stages: [
      {
        stageId: 'java-s1',
        title: 'Core Java & OOP Fundamentals',
        order: 1,
        topics: [
          {
            topicId: 'java-t1',
            title: 'Java Syntax, Control Flow & Arrays',
            subtopics: ['JDK, JRE, JVM Architecture', 'Data Types, Operators & Scanner I/O', 'Conditionals (if-else, switch) & Loops', 'Methods, Strings & Arrays'],
            toolsAndTechnologies: ['Java 21', 'IntelliJ IDEA', 'Maven'],
            industrySkills: ['Core Java Syntax'],
            recommendedResources: [{ title: 'Oracle Java Tutorials', type: 'DOCUMENTATION' }],
          },
          {
            topicId: 'java-t2',
            title: 'Object-Oriented Programming in Java',
            subtopics: ['Classes, Constructors & `this`/`super`', 'Encapsulation, Inheritance & Polymorphism', 'Abstract Classes & Interfaces', 'Exception Handling (Checked vs Unchecked)'],
            toolsAndTechnologies: ['Java OOP'],
            industrySkills: ['Object-Oriented Modeling'],
            recommendedResources: [{ title: 'Effective Java - Joshua Bloch', type: 'BOOK' }],
          },
        ],
        practicalAssignments: [
          { id: 'java-a1', title: 'Banking Ledger Console System', description: 'Implement accounts, transactions, and custom exceptions using OOP.', difficulty: 'BEGINNER' },
        ],
        capstoneProjects: [],
        interviewPreparation: [
          { question: 'What is the difference between abstract classes and interfaces in Java?', concept: 'Abstract classes can hold mutable state and constructors; interfaces define contracts (with default/static methods) and support multiple inheritance.' },
        ],
      },
      {
        stageId: 'java-s2',
        title: 'Collections, Streams & Concurrency',
        order: 2,
        topics: [
          {
            topicId: 'java-t3',
            title: 'Collections Framework & Generics',
            subtopics: ['List (ArrayList, LinkedList), Set (HashSet, TreeSet)', 'Map (HashMap, ConcurrentHashMap) Internals', 'Generics, Comparable & Comparator', 'Streams API, Lambdas & Optional'],
            toolsAndTechnologies: ['Java Collections', 'Streams API'],
            industrySkills: ['Functional Data Processing'],
            recommendedResources: [{ title: 'Baeldung Java Collections & Streams', type: 'DOCUMENTATION' }],
          },
          {
            topicId: 'java-t4',
            title: 'Multithreading & JVM Memory',
            subtopics: ['Threads, Runnable & ExecutorService', 'Synchronization, Locks & Volatile', 'CompletableFuture & Virtual Threads (Java 21)', 'Heap, Stack & Garbage Collection Basics'],
            toolsAndTechnologies: ['java.util.concurrent', 'JVisualVM'],
            industrySkills: ['Concurrent Java Systems'],
            recommendedResources: [{ title: 'Java Concurrency in Practice', type: 'BOOK' }],
          },
        ],
        practicalAssignments: [
          { id: 'java-a2', title: 'Parallel Log Aggregator', description: 'Process large log files concurrently with ExecutorService and Streams.', difficulty: 'INTERMEDIATE' },
        ],
        capstoneProjects: [],
        interviewPreparation: [
          { question: 'How does HashMap handle hash collisions in Java 8+?', concept: 'Buckets use linked lists that convert into balanced red-black trees when bucket size exceeds the treeify threshold (8).' },
        ],
      },
      {
        stageId: 'java-s3',
        title: 'Spring Boot, Databases & Microservices',
        order: 3,
        topics: [
          {
            topicId: 'java-t5',
            title: 'Spring Core, Spring Boot & JPA',
            subtopics: ['Dependency Injection & IoC Container', 'REST Controllers, DTOs & Validation', 'Spring Data JPA, Hibernate & PostgreSQL/MySQL', 'Spring Security & JWT Authentication'],
            toolsAndTechnologies: ['Spring Boot 3', 'Spring Data JPA', 'MySQL', 'PostgreSQL'],
            industrySkills: ['Enterprise REST Services', 'ORM Tuning'],
            recommendedResources: [{ title: 'Spring Boot Official Guides', type: 'DOCUMENTATION' }],
          },
          {
            topicId: 'java-t6',
            title: 'Microservices, Kafka & Testing',
            subtopics: ['Service Discovery & API Gateway', 'Event-Driven Messaging with Apache Kafka', 'Unit & Integration Testing (JUnit 5, Mockito)', 'Dockerizing Spring Boot Apps'],
            toolsAndTechnologies: ['Apache Kafka', 'JUnit 5', 'Mockito', 'Docker'],
            industrySkills: ['Distributed Java Microservices'],
            recommendedResources: [{ title: 'Spring Microservices in Action', type: 'BOOK' }],
          },
        ],
        practicalAssignments: [],
        capstoneProjects: [
          { id: 'java-p1', title: 'Order & Payment Microservices Suite', description: 'Spring Boot + JPA + Kafka event-driven services with JWT auth and JUnit tests.', deliverables: ['Docker Compose setup', 'Swagger API docs', 'JUnit report'] },
        ],
        interviewPreparation: [
          { question: 'What is the N+1 query problem in Hibernate/JPA and how do you fix it?', concept: 'Lazy loading triggers 1 query for parents + N queries for children; fix using JOIN FETCH or @EntityGraph.' },
        ],
      },
    ],
  },
  {
    slug: 'software-development-engineering',
    title: 'Software Development Engineer (SDE)',
    category: 'Backend & Languages',
    description: 'Complete placement & product-company SDE prep: Programming & OOP, Data Structures & Algorithms, CS Fundamentals (OS, DBMS, CN), and System Design.',
    version: 2,
    estimatedHours: 220,
    prerequisites: ['Basic Math & Logic'],
    icon: 'Terminal',
    stages: [
      {
        stageId: 'sde-s1',
        title: 'Programming & Core Data Structures',
        order: 1,
        topics: [
          {
            topicId: 'sde-t1',
            title: 'Language Mastery & Complexity Analysis',
            subtopics: ['C++ / Java / Python Syntax & STL/Collections', 'Time & Space Complexity (Big-O, Omega, Theta)', 'Recursion & Backtracking Foundations', 'Bit Manipulation & Math Basics'],
            toolsAndTechnologies: ['C++ / Java / Python', 'Git'],
            industrySkills: ['Algorithmic Efficiency'],
            recommendedResources: [{ title: 'Striver A2Z DSA Sheet', type: 'COURSE' }],
          },
          {
            topicId: 'sde-t2',
            title: 'Linear Data Structures',
            subtopics: ['Arrays, Two Pointers & Sliding Window', 'Hashing (Maps & Sets) & Prefix Sums', 'Strings & Pattern Matching', 'Linked Lists, Stacks & Queues (Monotonic)'],
            toolsAndTechnologies: ['Swadhyayi Coding Arena'],
            industrySkills: ['Problem Decomposition'],
            recommendedResources: [{ title: 'Cracking the Coding Interview', type: 'BOOK' }],
          },
        ],
        practicalAssignments: [
          { id: 'sde-a1', title: 'Solve 50 Array, String & Stack Problems', description: 'Master sliding window, binary search, and monotonic stack patterns.', difficulty: 'BEGINNER' },
        ],
        capstoneProjects: [],
        interviewPreparation: [
          { question: 'When do you apply Sliding Window vs Prefix Sum?', concept: 'Sliding window works for contiguous subarrays with monotonic conditions (often positive numbers); prefix sum + hashmap handles negative values.' },
        ],
      },
      {
        stageId: 'sde-s2',
        title: 'Trees, Graphs & Dynamic Programming',
        order: 2,
        topics: [
          {
            topicId: 'sde-t3',
            title: 'Trees, Heaps & Tries',
            subtopics: ['Binary Trees (DFS/BFS, Traversals, LCA)', 'Binary Search Trees (Validate, Kth Smallest)', 'Heaps / Priority Queues (Top-K, Median)', 'Tries (Prefix Trees)'],
            toolsAndTechnologies: ['C++ / Java / Python'],
            industrySkills: ['Hierarchical Data Modeling'],
            recommendedResources: [{ title: 'NeetCode 150 Roadmap', type: 'COURSE' }],
          },
          {
            topicId: 'sde-t4',
            title: 'Graphs & Dynamic Programming',
            subtopics: ['Graph BFS, DFS, Cycle Detection & Topological Sort', 'Shortest Paths (Dijkstra, Bellman-Ford) & Union-Find', '1D/2D DP (Knapsack, LCS, LIS, Grid Paths)', 'DP on Trees & Memoization vs Tabulation'],
            toolsAndTechnologies: ['C++ / Java / Python'],
            industrySkills: ['Optimization & State Transitions'],
            recommendedResources: [{ title: 'Competitive Programmer’s Handbook', type: 'BOOK' }],
          },
        ],
        practicalAssignments: [
          { id: 'sde-a2', title: 'Solve 50 Tree, Graph & DP Problems', description: 'Practice Dijkstra, DSU, and standard DP patterns.', difficulty: 'INTERMEDIATE' },
        ],
        capstoneProjects: [],
        interviewPreparation: [
          { question: 'How does Dijkstra fail on negative edge weights and what replaces it?', concept: 'Greedy relaxation assumes path costs never decrease; Bellman-Ford handles negative weights.' },
        ],
      },
      {
        stageId: 'sde-s3',
        title: 'CS Fundamentals & System Design',
        order: 3,
        topics: [
          {
            topicId: 'sde-t5',
            title: 'OS, DBMS & Computer Networks',
            subtopics: ['Processes, Threads, Deadlocks & Virtual Memory', 'SQL Queries, Normalization, ACID & B-Tree Indexing', 'TCP/UDP, HTTP/HTTPS, DNS & Load Balancing'],
            toolsAndTechnologies: ['PostgreSQL', 'Linux'],
            industrySkills: ['Core CS Interview Readiness'],
            recommendedResources: [{ title: 'OSTEP (Operating Systems: Three Easy Pieces)', type: 'BOOK' }],
          },
          {
            topicId: 'sde-t6',
            title: 'Low-Level & High-Level System Design',
            subtopics: ['SOLID Principles & Design Patterns (Singleton, Factory, Strategy, Observer)', 'Scaling: Load Balancers, Caching, CDNs & Sharding', 'Designing URL Shortener, Rate Limiter & Chat System'],
            toolsAndTechnologies: ['UML', 'Excalidraw', 'Redis'],
            industrySkills: ['Object-Oriented LLD', 'Scalable HLD'],
            recommendedResources: [{ title: 'System Design Interview - Alex Xu', type: 'BOOK' }],
          },
        ],
        practicalAssignments: [],
        capstoneProjects: [
          { id: 'sde-p1', title: 'Design & Implement an In-Memory LRU Cache + Rate Limiter', description: 'Thread-safe O(1) LRU cache with TTL and token-bucket rate limiter.', deliverables: ['Clean OOP code', 'Unit & concurrency tests'] },
        ],
        interviewPreparation: [
          { question: 'How do you design an O(1) LRU Cache?', concept: 'Combine a HashMap (key -> node) for O(1) lookup with a Doubly Linked List for O(1) eviction and recency updates.' },
        ],
      },
    ],
  },
  {
    slug: 'database-engineering',
    title: 'Database Engineering & Internals',
    category: 'Backend & Languages',
    description: 'From SQL fundamentals and normalization to B+ Tree indexing, query execution plans, ACID isolation levels, sharding, and storage engine internals.',
    version: 2,
    estimatedHours: 140,
    prerequisites: ['Basic Programming'],
    icon: 'Database',
    stages: [
      {
        stageId: 'db-s1',
        title: 'SQL Mastery & Relational Modeling',
        order: 1,
        topics: [
          {
            topicId: 'db-t1',
            title: 'SQL Queries, Joins & Window Functions',
            subtopics: ['SELECT, WHERE, GROUP BY & HAVING', 'INNER, LEFT, RIGHT & FULL OUTER Joins', 'CTEs, Subqueries & Window Functions (ROW_NUMBER, RANK, LAG)'],
            toolsAndTechnologies: ['PostgreSQL', 'MySQL'],
            industrySkills: ['Complex Analytical SQL'],
            recommendedResources: [{ title: 'PostgreSQL Official Documentation', type: 'DOCUMENTATION' }],
          },
          {
            topicId: 'db-t2',
            title: 'Normalization & Schema Design',
            subtopics: ['ER Diagrams & Cardinality', '1NF, 2NF, 3NF & BCNF', 'Denormalization Trade-offs for Read Performance'],
            toolsAndTechnologies: ['dbdiagram.io', 'PostgreSQL'],
            industrySkills: ['Relational Data Modeling'],
            recommendedResources: [{ title: 'Database Design for Mere Mortals', type: 'BOOK' }],
          },
        ],
        practicalAssignments: [
          { id: 'db-a1', title: 'Multi-Tenant SaaS Schema & Window Queries', description: 'Model users, orders, and invoices in 3NF and write cohort retention SQL.', difficulty: 'BEGINNER' },
        ],
        capstoneProjects: [],
        interviewPreparation: [
          { question: 'What is the difference between RANK() and DENSE_RANK()?', concept: 'RANK() skips numbers after ties (1, 1, 3), while DENSE_RANK() leaves no gaps (1, 1, 2).' },
        ],
      },
      {
        stageId: 'db-s2',
        title: 'Indexing, Transactions & Internals',
        order: 2,
        topics: [
          {
            topicId: 'db-t3',
            title: 'B+ Tree Indexing & Query Optimization',
            subtopics: ['B+ Tree vs Hash vs GIN Indexes', 'Composite Index Column Ordering', 'Reading EXPLAIN ANALYZE Execution Plans', 'Sequential Scan vs Index Scan vs Index-Only Scan'],
            toolsAndTechnologies: ['PostgreSQL EXPLAIN'],
            industrySkills: ['Query Performance Engineering'],
            recommendedResources: [{ title: 'Use The Index, Luke', type: 'BOOK' }],
          },
          {
            topicId: 'db-t4',
            title: 'ACID, Isolation Levels & Distributed DBs',
            subtopics: ['Write-Ahead Logging (WAL) & Crash Recovery', 'Isolation Levels (Read Committed, Repeatable Read, Serializable)', 'MVCC & Deadlock Detection', 'Replication, Partitioning & Sharding'],
            toolsAndTechnologies: ['PostgreSQL', 'Redis', 'RocksDB'],
            industrySkills: ['Storage Engine Internals', 'Distributed Data'],
            recommendedResources: [{ title: 'Database Internals - Alex Petrov', type: 'BOOK' }],
          },
        ],
        practicalAssignments: [],
        capstoneProjects: [
          { id: 'db-p1', title: 'Optimize a 10M-Row Query & Build a Simple WAL KV Store', description: 'Speed up slow SQL queries via covering indexes and build a crash-safe append-only KV store.', deliverables: ['Before/after EXPLAIN plans', 'KV store repo'] },
        ],
        interviewPreparation: [
          { question: 'How does MVCC allow readers not to block writers in PostgreSQL?', concept: 'Each row stores version visibility metadata (xmin/xmax), letting readers see a consistent snapshot without taking read locks.' },
        ],
      },
    ],
  },
];
