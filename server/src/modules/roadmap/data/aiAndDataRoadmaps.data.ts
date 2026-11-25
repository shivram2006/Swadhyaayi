export const AI_AND_DATA_ROADMAPS = [
  {
    slug: 'artificial-intelligence',
    title: 'Artificial Intelligence (AI)',
    category: 'AI & Data',
    description: 'Complete AI roadmap from Python & Math foundations to Classical Search & Logic, Machine Learning, Deep Learning, and Modern Agentic AI systems.',
    version: 2,
    estimatedHours: 200,
    prerequisites: ['Basic Programming Logic'],
    icon: 'Brain',
    stages: [
      {
        stageId: 'ai-s1',
        title: 'Python & Mathematical Foundations',
        order: 1,
        topics: [
          {
            topicId: 'ai-t1',
            title: 'Python Programming for AI',
            subtopics: ['Variables, Input/Output, Conditionals (if-else) & Loops', 'Functions, Lists, Dictionaries & Comprehensions', 'NumPy Arrays, Broadcasting & Vectorization', 'Pandas DataFrames & Data Manipulation'],
            toolsAndTechnologies: ['Python', 'NumPy', 'Pandas', 'Jupyter'],
            industrySkills: ['Scientific Python'],
            recommendedResources: [{ title: 'Python Data Science Handbook', type: 'BOOK' }],
          },
          {
            topicId: 'ai-t2',
            title: 'Math for AI (Linear Algebra, Calculus & Probability)',
            subtopics: ['Vectors, Matrices, Dot Products & Eigenvalues', 'Derivatives, Gradients & Chain Rule', 'Probability Distributions & Bayes Theorem', 'Expectation, Variance & Information Entropy'],
            toolsAndTechnologies: ['SciPy', 'SymPy'],
            industrySkills: ['Mathematical Modeling'],
            recommendedResources: [{ title: '3Blue1Brown Essence of Linear Algebra & Calculus', type: 'COURSE' }],
          },
        ],
        practicalAssignments: [
          { id: 'ai-a1', title: 'Matrix Ops & Bayes Calculator in NumPy', description: 'Implement linear transformations and Bayesian posterior updates from scratch.', difficulty: 'BEGINNER' },
        ],
        capstoneProjects: [],
        interviewPreparation: [
          { question: 'Why is vectorization in NumPy much faster than Python loops?', concept: 'NumPy executes contiguous C/SIMD operations without Python interpreter loop overhead or dynamic type checks.' },
        ],
      },
      {
        stageId: 'ai-s2',
        title: 'Classical AI: Search, Logic & Uncertainty',
        order: 2,
        topics: [
          {
            topicId: 'ai-t3',
            title: 'Search Algorithms & Game Playing',
            subtopics: ['State Space Representation', 'Uninformed Search (BFS, DFS, Uniform Cost)', 'Informed Search (Greedy Best-First, A* Search, Heuristics)', 'Adversarial Search (Minimax, Alpha-Beta Pruning)'],
            toolsAndTechnologies: ['Python', 'NetworkX'],
            industrySkills: ['Heuristic Search', 'Constraint Satisfaction'],
            recommendedResources: [{ title: 'CS188: Berkeley Artificial Intelligence', type: 'COURSE' }],
          },
          {
            topicId: 'ai-t4',
            title: 'Knowledge Representation & MDPs',
            subtopics: ['Propositional & First-Order Logic', 'Bayesian Networks & Conditional Independence', 'Markov Decision Processes (MDPs) & Bellman Equation', 'Value Iteration & Policy Iteration'],
            toolsAndTechnologies: ['pgmpy', 'Python'],
            industrySkills: ['Probabilistic Reasoning', 'Sequential Decision Making'],
            recommendedResources: [{ title: 'Russell & Norvig: AI: A Modern Approach', type: 'BOOK' }],
          },
        ],
        practicalAssignments: [
          { id: 'ai-a2', title: 'A* Grid Pathfinding & Minimax Tic-Tac-Toe', description: 'Implement optimal pathfinding and an unbeatable adversarial agent.', difficulty: 'INTERMEDIATE' },
        ],
        capstoneProjects: [],
        interviewPreparation: [
          { question: 'What makes a heuristic admissible in A* search?', concept: 'An admissible heuristic never overestimates the true cost to reach the goal, guaranteeing A* finds an optimal path.' },
        ],
      },
      {
        stageId: 'ai-s3',
        title: 'Machine Learning, Deep Learning & GenAI',
        order: 3,
        topics: [
          {
            topicId: 'ai-t5',
            title: 'Supervised, Unsupervised & Reinforcement Learning',
            subtopics: ['Regression, Classification & Decision Trees', 'Clustering (K-Means) & Dimensionality Reduction (PCA)', 'Q-Learning & Deep Q-Networks (DQN)'],
            toolsAndTechnologies: ['Scikit-Learn', 'Gymnasium'],
            industrySkills: ['Predictive Modeling', 'RL Agents'],
            recommendedResources: [{ title: 'Andrew Ng Machine Learning Specialization', type: 'COURSE' }],
          },
          {
            topicId: 'ai-t6',
            title: 'Neural Networks, Transformers & AI Agents',
            subtopics: ['Perceptrons, Backpropagation & Activation Functions', 'CNNs for Vision & RNNs/Transformers for Sequences', 'LLMs, Prompting, Tool Calling & RAG Pipelines'],
            toolsAndTechnologies: ['PyTorch', 'HuggingFace', 'LangGraph'],
            industrySkills: ['Deep Learning', 'Agentic AI'],
            recommendedResources: [{ title: 'CS224N / DeepLearning.AI', type: 'COURSE' }],
          },
        ],
        practicalAssignments: [],
        capstoneProjects: [
          { id: 'ai-p1', title: 'Autonomous Multi-Step Research & Pathfinding Agent', description: 'Combine search/planning with LLM tool calling and evaluation metrics.', deliverables: ['Python agent repo', 'Evaluation benchmarks'] },
        ],
        interviewPreparation: [
          { question: 'Explain the vanishing gradient problem and how ResNets/ReLU solve it.', concept: 'Sigmoid derivatives < 1 shrink gradients exponentially in deep nets; ReLU keeps gradient 1 for positive inputs and skip connections create direct gradient highways.' },
        ],
      },
    ],
  },
  {
    slug: 'machine-learning',
    title: 'Machine Learning (ML)',
    category: 'AI & Data',
    description: 'End-to-end ML roadmap: Python & NumPy/Pandas, Statistics, Supervised & Unsupervised Algorithms, Ensembles, Deep Learning with PyTorch, and Model Deployment.',
    version: 2,
    estimatedHours: 190,
    prerequisites: ['Basic Programming'],
    icon: 'Cpu',
    stages: [
      {
        stageId: 'ml-s1',
        title: 'Python, Data Wrangling & Statistics',
        order: 1,
        topics: [
          {
            topicId: 'ml-t1',
            title: 'Python Data Stack & EDA',
            subtopics: ['NumPy Vectorization & Broadcasting', 'Pandas Data Cleaning, Missing Values & GroupBy', 'Exploratory Visualization (Matplotlib & Seaborn)', 'Feature Encoding, Scaling & Train/Test Split'],
            toolsAndTechnologies: ['Python', 'NumPy', 'Pandas', 'Seaborn'],
            industrySkills: ['Data Preprocessing', 'Feature Engineering'],
            recommendedResources: [{ title: 'Hands-On Machine Learning (Ch 1-2)', type: 'BOOK' }],
          },
          {
            topicId: 'ml-t2',
            title: 'Probability, Statistics & Linear Algebra',
            subtopics: ['Mean, Variance, Covariance & Correlation', 'Normal, Binomial & Poisson Distributions', 'Hypothesis Testing & p-values', 'Gradient Descent & Loss Functions (MSE, Cross-Entropy)'],
            toolsAndTechnologies: ['SciPy', 'Statsmodels'],
            industrySkills: ['Statistical Rigor'],
            recommendedResources: [{ title: 'StatQuest with Josh Starmer', type: 'COURSE' }],
          },
        ],
        practicalAssignments: [
          { id: 'ml-a1', title: 'End-to-End EDA & Cleaning Pipeline', description: 'Clean a noisy housing dataset and build a reproducible Scikit-Learn ColumnTransformer.', difficulty: 'BEGINNER' },
        ],
        capstoneProjects: [],
        interviewPreparation: [
          { question: 'Why should feature scaling (StandardScaler) be fit ONLY on training data?', concept: 'Fitting on validation/test data causes data leakage, leaking test distribution statistics into the model.' },
        ],
      },
      {
        stageId: 'ml-s2',
        title: 'Supervised & Unsupervised Algorithms',
        order: 2,
        topics: [
          {
            topicId: 'ml-t3',
            title: 'Core Supervised Learning',
            subtopics: ['Linear Regression & Regularization (Ridge, Lasso)', 'Logistic Regression & Softmax', 'k-NN, Naive Bayes & Support Vector Machines (SVM)', 'Evaluation Metrics (RMSE, Precision, Recall, F1, ROC-AUC)'],
            toolsAndTechnologies: ['Scikit-Learn'],
            industrySkills: ['Bias-Variance Tradeoff', 'Model Evaluation'],
            recommendedResources: [{ title: 'Scikit-Learn User Guide', type: 'DOCUMENTATION' }],
          },
          {
            topicId: 'ml-t4',
            title: 'Tree Ensembles & Unsupervised Learning',
            subtopics: ['Decision Trees (Gini vs Entropy)', 'Bagging & Random Forests', 'Gradient Boosting (XGBoost, LightGBM, CatBoost)', 'K-Means, DBSCAN, PCA & Hyperparameter Tuning (Optuna)'],
            toolsAndTechnologies: ['XGBoost', 'LightGBM', 'Optuna', 'SHAP'],
            industrySkills: ['Tabular ML Mastery', 'Explainable AI'],
            recommendedResources: [{ title: 'XGBoost Documentation', type: 'DOCUMENTATION' }],
          },
        ],
        practicalAssignments: [
          { id: 'ml-a2', title: 'Imbalanced Fraud Detection with XGBoost & SHAP', description: 'Optimize PR-AUC on imbalanced transactions and explain predictions with SHAP.', difficulty: 'INTERMEDIATE' },
        ],
        capstoneProjects: [],
        interviewPreparation: [
          { question: 'What is the difference between Bagging (Random Forest) and Boosting (XGBoost)?', concept: 'Bagging trains trees in parallel on bootstrap samples to reduce variance; Boosting trains trees sequentially on residuals to reduce bias.' },
        ],
      },
      {
        stageId: 'ml-s3',
        title: 'Deep Learning & Serving Models',
        order: 3,
        topics: [
          {
            topicId: 'ml-t5',
            title: 'PyTorch Neural Networks & Deployment',
            subtopics: ['Tensors, Autograd & Training Loops in PyTorch', 'Optimizers (SGD, AdamW), Dropout & BatchNorm', 'Transfer Learning for Vision & Text', 'Serving Models via FastAPI & Docker'],
            toolsAndTechnologies: ['PyTorch', 'FastAPI', 'Docker'],
            industrySkills: ['Deep Learning', 'Model Serving'],
            recommendedResources: [{ title: 'PyTorch Official Tutorials', type: 'DOCUMENTATION' }],
          },
        ],
        practicalAssignments: [],
        capstoneProjects: [
          { id: 'ml-p1', title: 'Customer Churn Predictor & FastAPI Service', description: 'Train, tune, explain with SHAP, and serve an ML model behind a Dockerized FastAPI endpoint.', deliverables: ['Trained pipeline', 'SHAP notebook', 'FastAPI + Docker repo'] },
        ],
        interviewPreparation: [
          { question: 'How do L1 (Lasso) and L2 (Ridge) regularization differ?', concept: 'L1 penalizes |w| driving weak weights to zero (feature selection); L2 penalizes w^2 shrinking weights smoothly.' },
        ],
      },
    ],
  },
  {
    slug: 'data-science',
    title: 'Data Science',
    category: 'AI & Data',
    description: 'Master SQL, Python (Pandas/NumPy), Exploratory Data Analysis, Statistics & A/B Testing, Predictive Modeling, and Executive Data Storytelling.',
    version: 2,
    estimatedHours: 170,
    prerequisites: ['Basic Math'],
    icon: 'LineChart',
    stages: [
      {
        stageId: 'ds-s1',
        title: 'Python, SQL & Data Wrangling',
        order: 1,
        topics: [
          {
            topicId: 'ds-t1',
            title: 'SQL for Data Science',
            subtopics: ['Joins, Aggregations & Filtering', 'CTEs & Subqueries', 'Window Functions (Cohort & Funnel Queries)'],
            toolsAndTechnologies: ['PostgreSQL', 'DuckDB'],
            industrySkills: ['Data Extraction'],
            recommendedResources: [{ title: 'Mode SQL Tutorial', type: 'COURSE' }],
          },
          {
            topicId: 'ds-t2',
            title: 'Python, Pandas & Data Visualization',
            subtopics: ['Python Basics & Functions', 'Pandas Merging, Pivoting & Time-Series Resampling', 'Matplotlib, Seaborn & Plotly Interactive Charts'],
            toolsAndTechnologies: ['Python', 'Pandas', 'Plotly'],
            industrySkills: ['Exploratory Data Analysis (EDA)'],
            recommendedResources: [{ title: 'Kaggle Learn: Pandas & Visualization', type: 'COURSE' }],
          },
        ],
        practicalAssignments: [
          { id: 'ds-a1', title: 'E-Commerce Funnel & Cohort Analysis', description: 'Compute retention cohorts in SQL and plot drop-offs in Python.', difficulty: 'BEGINNER' },
        ],
        capstoneProjects: [],
        interviewPreparation: [
          { question: 'How do you handle missing values in a dataset?', concept: 'Assess MCAR/MAR/MNAR, then drop, impute (mean/median/mode or KNN/iterative), or add a missingness indicator flag.' },
        ],
      },
      {
        stageId: 'ds-s2',
        title: 'Statistics, A/B Testing & Predictive Modeling',
        order: 2,
        topics: [
          {
            topicId: 'ds-t3',
            title: 'Inferential Statistics & A/B Testing',
            subtopics: ['Central Limit Theorem & Confidence Intervals', 'Hypothesis Testing (t-test, Chi-Square, Mann-Whitney)', 'Statistical Power, Sample Size & p-hacking Avoidance'],
            toolsAndTechnologies: ['SciPy', 'Statsmodels'],
            industrySkills: ['Product Experimentation'],
            recommendedResources: [{ title: 'Trustworthy Online Controlled Experiments', type: 'BOOK' }],
          },
          {
            topicId: 'ds-t4',
            title: 'Predictive Modeling & Storytelling',
            subtopics: ['Regression & Classification with Scikit-Learn', 'Time Series Forecasting (Prophet / ARIMA)', 'Communicating Business Impact & Dashboards'],
            toolsAndTechnologies: ['Scikit-Learn', 'Streamlit', 'Power BI'],
            industrySkills: ['Business Forecasting', 'Stakeholder Storytelling'],
            recommendedResources: [{ title: 'Storytelling with Data', type: 'BOOK' }],
          },
        ],
        practicalAssignments: [],
        capstoneProjects: [
          { id: 'ds-p1', title: 'Product Experimentation & Churn Insights Platform', description: 'Analyze an A/B test, build a churn risk model, and publish an interactive Streamlit report.', deliverables: ['Experiment report', 'Streamlit dashboard'] },
        ],
        interviewPreparation: [
          { question: 'What is a Type I vs Type II error in A/B testing?', concept: 'Type I (false positive) rejects a true null hypothesis (alpha); Type II (false negative) fails to detect a real effect (beta).' },
        ],
      },
    ],
  },
  {
    slug: 'data-analytics',
    title: 'Data Analytics & Business Intelligence',
    category: 'AI & Data',
    description: 'Go from Excel & Spreadsheets to Advanced SQL, Python data cleaning, Power BI / Tableau dashboards, and KPI-driven business decision making.',
    version: 2,
    estimatedHours: 140,
    prerequisites: ['Basic Math'],
    icon: 'BarChart3',
    stages: [
      {
        stageId: 'da-s1',
        title: 'Spreadsheets & SQL Foundations',
        order: 1,
        topics: [
          {
            topicId: 'da-t1',
            title: 'Excel & Google Sheets Mastery',
            subtopics: ['XLOOKUP, INDEX-MATCH & Conditional Formulas', 'Pivot Tables & Pivot Charts', 'Power Query Data Cleaning & Macros Basics'],
            toolsAndTechnologies: ['Microsoft Excel', 'Google Sheets'],
            industrySkills: ['Spreadsheet Modeling'],
            recommendedResources: [{ title: 'ExcelJet Formulas Guide', type: 'DOCUMENTATION' }],
          },
          {
            topicId: 'da-t2',
            title: 'SQL for Business Analytics',
            subtopics: ['SELECT, JOIN, GROUP BY & CASE WHEN', 'CTEs & Window Functions (Running Totals, YoY Growth)', 'Writing Clean KPI Queries'],
            toolsAndTechnologies: ['PostgreSQL', 'BigQuery'],
            industrySkills: ['Analytical SQL'],
            recommendedResources: [{ title: 'SQLBolt Interactive Lessons', type: 'COURSE' }],
          },
        ],
        practicalAssignments: [
          { id: 'da-a1', title: 'Retail Sales KPI Report in SQL & Excel', description: 'Calculate MoM revenue growth, top SKUs, and regional margins.', difficulty: 'BEGINNER' },
        ],
        capstoneProjects: [],
        interviewPreparation: [
          { question: 'What is the difference between WHERE and HAVING in SQL?', concept: 'WHERE filters individual rows before grouping; HAVING filters aggregated groups after GROUP BY.' },
        ],
      },
      {
        stageId: 'da-s2',
        title: 'BI Dashboards & Python Automation',
        order: 2,
        topics: [
          {
            topicId: 'da-t3',
            title: 'Power BI & Tableau Visualization',
            subtopics: ['Star Schema Data Modeling (Fact vs Dimension Tables)', 'DAX Measures & Calculated Columns', 'Interactive Filters, Drill-Downs & Dashboard UX'],
            toolsAndTechnologies: ['Power BI', 'Tableau'],
            industrySkills: ['Executive Dashboards', 'Data Modeling'],
            recommendedResources: [{ title: 'Microsoft Learn: Power BI Path', type: 'COURSE' }],
          },
          {
            topicId: 'da-t4',
            title: 'Python (Pandas) & Business Metrics',
            subtopics: ['Automating CSV/Excel Reports with Pandas', 'North Star Metrics, CAC, LTV & Churn Rate', 'Presenting Actionable Recommendations'],
            toolsAndTechnologies: ['Python', 'Pandas'],
            industrySkills: ['Product & Revenue Analytics'],
            recommendedResources: [{ title: 'Lean Analytics', type: 'BOOK' }],
          },
        ],
        practicalAssignments: [],
        capstoneProjects: [
          { id: 'da-p1', title: 'SaaS Revenue & Customer Retention BI Suite', description: 'Connect PostgreSQL to Power BI/Tableau with a clean star schema and executive KPI views.', deliverables: ['PBIX / Tableau workbook', 'Insights deck'] },
        ],
        interviewPreparation: [
          { question: 'Why is a Star Schema preferred over a single flat table in Power BI?', concept: 'Star schemas separate facts from dimensions, reducing redundancy, speeding up DAX aggregations, and preventing ambiguous filter paths.' },
        ],
      },
    ],
  },
  {
    slug: 'generative-ai',
    title: 'Generative AI & LLM Systems',
    category: 'AI & Data',
    description: 'Build production LLM applications: Python & Transformer foundations, Prompt Engineering, Embeddings & RAG pipelines, Tool-Calling Agents, Fine-Tuning, and Evals.',
    version: 2,
    estimatedHours: 150,
    prerequisites: ['Python Basics'],
    icon: 'Sparkles',
    stages: [
      {
        stageId: 'genai-s1',
        title: 'LLM Foundations & Prompt Engineering',
        order: 1,
        topics: [
          {
            topicId: 'genai-t1',
            title: 'Transformers, Tokenization & APIs',
            subtopics: ['How LLMs Work (Tokens, Context Window, Attention)', 'Temperature, Top-P & Sampling Parameters', 'Calling LLM APIs & Streaming Responses', 'Structured JSON Outputs & Function/Tool Calling'],
            toolsAndTechnologies: ['Python', 'Gemini API', 'OpenAI SDK'],
            industrySkills: ['LLM Integration'],
            recommendedResources: [{ title: 'Andrej Karpathy: Intro to Large Language Models', type: 'COURSE' }],
          },
          {
            topicId: 'genai-t2',
            title: 'Prompt Engineering Patterns',
            subtopics: ['Zero-Shot, Few-Shot & Chain-of-Thought', 'System Prompts & Role Conditioning', 'Prompt Injection Defense & Guardrails'],
            toolsAndTechnologies: ['Promptfoo', 'Pydantic'],
            industrySkills: ['Reliable Prompt Design'],
            recommendedResources: [{ title: 'Prompt Engineering Guide (dair.ai)', type: 'DOCUMENTATION' }],
          },
        ],
        practicalAssignments: [
          { id: 'genai-a1', title: 'Structured Resume & JD Extractor', description: 'Use tool calling / JSON schema output to parse PDFs reliably.', difficulty: 'BEGINNER' },
        ],
        capstoneProjects: [],
        interviewPreparation: [
          { question: 'How does Temperature affect LLM token generation?', concept: 'Lower temperature sharpens the probability distribution (more deterministic); higher temperature flattens it (more creative/diverse).' },
        ],
      },
      {
        stageId: 'genai-s2',
        title: 'RAG, Vector DBs & Agentic Workflows',
        order: 2,
        topics: [
          {
            topicId: 'genai-t3',
            title: 'Embeddings & Retrieval-Augmented Generation (RAG)',
            subtopics: ['Text Chunking Strategies & Overlap', 'Dense Embeddings & Cosine Similarity', 'Vector Databases (Chroma, Qdrant, pgvector)', 'Hybrid Search (BM25 + Vector) & Reranking'],
            toolsAndTechnologies: ['pgvector', 'Qdrant', 'Chroma', 'LangChain'],
            industrySkills: ['Enterprise RAG Architecture'],
            recommendedResources: [{ title: 'Pinecone / Qdrant RAG Guides', type: 'DOCUMENTATION' }],
          },
          {
            topicId: 'genai-t4',
            title: 'AI Agents, Fine-Tuning & Evaluation',
            subtopics: ['ReAct Agents, Memory & Multi-Step Planning', 'LoRA / QLoRA Parameter-Efficient Fine-Tuning', 'LLM-as-a-Judge, Faithfulness & Hallucination Evals'],
            toolsAndTechnologies: ['LangGraph', 'HuggingFace PEFT', 'Ragas'],
            industrySkills: ['Agentic Systems', 'LLM Evaluation'],
            recommendedResources: [{ title: 'Building Effective Agents - Anthropic', type: 'DOCUMENTATION' }],
          },
        ],
        practicalAssignments: [],
        capstoneProjects: [
          { id: 'genai-p1', title: 'Citation-Verified Enterprise Document RAG Assistant', description: 'Ingest PDFs with hybrid search + reranking and evaluate faithfulness with automated test sets.', deliverables: ['RAG API', 'Eval scorecard'] },
        ],
        interviewPreparation: [
          { question: 'Why combine BM25 keyword search with vector search in RAG?', concept: 'Vector search captures semantic meaning while BM25 excels at exact part numbers, acronyms, and rare proper nouns.' },
        ],
      },
    ],
  },
  {
    slug: 'mlops',
    title: 'MLOps: Production ML Engineering',
    category: 'AI & Data',
    description: 'Take ML models from notebooks to production: Reproducible Environments, Experiment Tracking, Data/Training Pipelines, Low-Latency Serving, and Drift Monitoring.',
    version: 2,
    estimatedHours: 140,
    prerequisites: ['Python', 'Machine Learning Basics'],
    icon: 'Workflow',
    stages: [
      {
        stageId: 'mlops-s1',
        title: 'Reproducibility, Versioning & Tracking',
        order: 1,
        topics: [
          {
            topicId: 'mlops-t1',
            title: 'Code, Data & Model Versioning',
            subtopics: ['Clean Python Packaging & Docker for ML', 'Data Versioning (DVC) & Feature Stores', 'Experiment Tracking & Model Registry (MLflow / W&B)'],
            toolsAndTechnologies: ['Docker', 'DVC', 'MLflow'],
            industrySkills: ['Reproducible ML'],
            recommendedResources: [{ title: 'Made With ML - Goku Mohandas', type: 'COURSE' }],
          },
        ],
        practicalAssignments: [
          { id: 'mlops-a1', title: 'MLflow Tracking & Registry Setup', description: 'Log hyperparameters, metrics, and artifacts to MLflow and promote a staging model.', difficulty: 'BEGINNER' },
        ],
        capstoneProjects: [],
        interviewPreparation: [
          { question: 'Why is a Model Registry important in MLOps?', concept: 'It provides lineage, stage transitions (Staging/Production), and rollback capability separate from raw code commits.' },
        ],
      },
      {
        stageId: 'mlops-s2',
        title: 'Pipelines, Serving & Drift Monitoring',
        order: 2,
        topics: [
          {
            topicId: 'mlops-t2',
            title: 'Automated Training Pipelines & Serving',
            subtopics: ['Workflow Orchestration (Airflow / Prefect)', 'Batch vs Real-Time Inference (FastAPI / Triton / vLLM)', 'CI/CD for ML (Automated Data & Model Tests)'],
            toolsAndTechnologies: ['Airflow', 'FastAPI', 'GitHub Actions'],
            industrySkills: ['CT/CI/CD for ML'],
            recommendedResources: [{ title: 'Designing Machine Learning Systems - Chip Huyen', type: 'BOOK' }],
          },
          {
            topicId: 'mlops-t3',
            title: 'Production Monitoring & Drift Detection',
            subtopics: ['Data Drift vs Concept Drift', 'Shadow Deployments & Canary Rollouts', 'Alerting & Automated Retraining Triggers'],
            toolsAndTechnologies: ['Evidently AI', 'Prometheus', 'Grafana'],
            industrySkills: ['ML Observability'],
            recommendedResources: [{ title: 'Evidently AI Documentation', type: 'DOCUMENTATION' }],
          },
        ],
        practicalAssignments: [],
        capstoneProjects: [
          { id: 'mlops-p1', title: 'End-to-End Drift-Aware ML Serving Platform', description: 'Automated training pipeline with MLflow registry, FastAPI serving, and Evidently drift alerts.', deliverables: ['Docker Compose stack', 'Monitoring dashboard'] },
        ],
        interviewPreparation: [
          { question: 'Explain the difference between Data Drift and Concept Drift.', concept: 'Data drift means input feature distributions P(X) changed; concept drift means the relationship P(Y|X) itself changed.' },
        ],
      },
    ],
  },
];
