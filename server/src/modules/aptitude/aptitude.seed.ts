import { QuestionAptitude } from './aptitude.model';

export const seedInitialAptitudeQuestions = async () => {
  const mcqs = [
    // 1. QUANTITATIVE - Time and Work
    {
      category: 'QUANTITATIVE',
      subcategory: 'Time and Work',
      difficulty: 'EASY',
      questionText: 'A can complete a piece of work in 12 days, and B can complete the same work in 24 days. If they work together, in how many days will the work be completed?',
      options: [
        { id: 'A', text: '6 days' },
        { id: 'B', text: '8 days' },
        { id: 'C', text: '9 days' },
        { id: 'D', text: '10 days' },
      ],
      correctOptionId: 'B',
      explanation: `Step 1: Work done by A in 1 day = 1/12.
Step 2: Work done by B in 1 day = 1/24.
Step 3: Work done by (A + B) in 1 day = 1/12 + 1/24 = 3/24 = 1/8.
Therefore, total days required = 8 days.`,
      companyTags: [
        { company: 'TCS', yearReported: 2024 },
        { company: 'Infosys', yearReported: 2023 },
      ],
      isGlobal: true,
      status: 'PUBLISHED',
    },
    // 2. QUANTITATIVE - Percentages
    {
      category: 'QUANTITATIVE',
      subcategory: 'Percentages',
      difficulty: 'EASY',
      questionText: "If A's salary is 25% more than B's salary, by what percentage is B's salary less than A's salary?",
      options: [
        { id: 'A', text: '20%' },
        { id: 'B', text: '25%' },
        { id: 'C', text: '16.66%' },
        { id: 'D', text: '33.33%' },
      ],
      correctOptionId: 'A',
      explanation: `Let B's salary = 100.
Then A's salary = 125.
Difference = 125 - 100 = 25.
Percentage B is less than A = (25 / 125) * 100 = 20%.`,
      companyTags: [
        { company: 'Cognizant', yearReported: 2024 },
        { company: 'Wipro', yearReported: 2023 },
      ],
      isGlobal: true,
      status: 'PUBLISHED',
    },
    // 3. LOGICAL REASONING - Syllogisms
    {
      category: 'LOGICAL_REASONING',
      subcategory: 'Syllogisms',
      difficulty: 'MEDIUM',
      questionText: `Statements:
1. All mangoes are fruits.
2. Some fruits are sweet.

Conclusions:
I. Some mangoes are sweet.
II. All fruits are mangoes.`,
      options: [
        { id: 'A', text: 'Only Conclusion I follows' },
        { id: 'B', text: 'Only Conclusion II follows' },
        { id: 'C', text: 'Neither Conclusion I nor II follows' },
        { id: 'D', text: 'Both Conclusions I and II follow' },
      ],
      correctOptionId: 'C',
      explanation: `From the Venn diagram:
The set of mangoes is entirely contained inside fruits. Some fruits are sweet, but that intersection does not necessarily overlap with mangoes.
Neither conclusion logically follows with certainty.`,
      companyTags: [
        { company: 'Accenture', yearReported: 2024 },
        { company: 'Capgemini', yearReported: 2023 },
      ],
      isGlobal: true,
      status: 'PUBLISHED',
    },
    // 4. VERBAL ABILITY - Sentence Correction
    {
      category: 'VERBAL_ABILITY',
      subcategory: 'Sentence Correction',
      difficulty: 'EASY',
      questionText: 'Identify the grammatically correct sentence:',
      options: [
        { id: 'A', text: 'Neither of the students were prepared for the exam.' },
        { id: 'B', text: 'Neither of the students was prepared for the exam.' },
        { id: 'C', text: 'Neither of the students are prepared for the exam.' },
        { id: 'D', text: 'Neither of the students have been prepared for the exam.' },
      ],
      correctOptionId: 'B',
      explanation: `"Neither" is a singular pronoun and takes a singular verb ("was", not "were"). Therefore, "Neither of the students was prepared for the exam" is correct.`,
      companyTags: [
        { company: 'TCS', yearReported: 2024 },
        { company: 'Deloitte', yearReported: 2023 },
      ],
      isGlobal: true,
      status: 'PUBLISHED',
    },
    // 5. TECHNICAL MCQ - DBMS & SQL
    {
      category: 'TECHNICAL_MCQ',
      subcategory: 'DBMS & SQL',
      difficulty: 'MEDIUM',
      questionText: 'Which property of ACID guarantees that database transactions are committed permanently even in the event of a system crash or power outage?',
      options: [
        { id: 'A', text: 'Atomicity' },
        { id: 'B', text: 'Consistency' },
        { id: 'C', text: 'Isolation' },
        { id: 'D', text: 'Durability' },
      ],
      correctOptionId: 'D',
      explanation: `Durability ensures that once a transaction has been committed, it will remain committed even in the case of a system crash (typically recorded via write-ahead transaction logs).`,
      companyTags: [
        { company: 'Amazon', yearReported: 2024 },
        { company: 'Oracle', yearReported: 2024 },
      ],
      isGlobal: true,
      status: 'PUBLISHED',
    },
  ];

  for (const mcq of mcqs) {
    await QuestionAptitude.findOneAndUpdate(
      { questionText: mcq.questionText },
      mcq,
      { upsert: true, new: true }
    );
  }

  console.log(`[SEED] Pre-seeded ${mcqs.length} aptitude and technical MCQs.`);
};
