import { QuestionAptitude } from './aptitude.model';
import { LOGICAL_REASONING_QUESTIONS } from './data/logicalReasoning.data';
import { QUANTITATIVE_QUESTIONS } from './data/quantitative.data';
import { VERBAL_ABILITY_QUESTIONS } from './data/verbalAbility.data';
import { TECHNICAL_MCQ_QUESTIONS } from './data/technicalMcq.data';

export const seedInitialAptitudeQuestions = async () => {
  const allQuestions = [
    ...LOGICAL_REASONING_QUESTIONS,
    ...QUANTITATIVE_QUESTIONS,
    ...VERBAL_ABILITY_QUESTIONS,
    ...TECHNICAL_MCQ_QUESTIONS,
  ];

  const ops = allQuestions.map((q) => ({
    updateOne: {
      filter: { category: q.category, questionText: q.questionText },
      update: {
        $set: {
          ...q,
          companyTags: [
            { company: 'TCS', yearReported: 2025 },
            { company: 'Infosys', yearReported: 2025 },
            { company: 'Accenture', yearReported: 2025 },
          ],
          isGlobal: true,
          status: 'PUBLISHED' as const,
        },
      },
      upsert: true,
    },
  }));

  if (ops.length > 0) {
    await QuestionAptitude.bulkWrite(ops, { ordered: false });
  }

  console.log(
    `[SEED] Pre-seeded ${allQuestions.length} aptitude & technical MCQs (LR: ${LOGICAL_REASONING_QUESTIONS.length}, Quant: ${QUANTITATIVE_QUESTIONS.length}, Verbal: ${VERBAL_ABILITY_QUESTIONS.length}, Tech: ${TECHNICAL_MCQ_QUESTIONS.length}).`
  );
};
