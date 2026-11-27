import dotenv from 'dotenv';
dotenv.config({ path: '.env' });

import mongoose from 'mongoose';
import { QuestionCoding } from '../modules/coding/coding.model';
import { DriverGenerator } from '../modules/coding/runner/driverGenerator';

async function run() {
  const uri = process.env.MONGO_URI || process.env.MONGODB_URI || process.env.DATABASE_URL;
  if (!uri) {
    throw new Error('MONGO_URI not found in server/.env');
  }

  await mongoose.connect(uri);
  const questions = await QuestionCoding.find({ status: 'PUBLISHED' }).lean();
  console.log(`Found ${questions.length} published coding questions.`);

  let updatedCount = 0;
  let expandedSamplesCount = 0;

  const bulkOps: any[] = [];

  for (const q of questions) {
    const sampleCases = [...(q.sampleTestCases || [])];
    const hiddenCases = [...(q.hiddenTestCases || [])];

    // Ensure at least 2 sample cases when hidden cases exist so single-value hardcoding fails Run Code too
    if (sampleCases.length < 2 && hiddenCases.length > 0) {
      for (const hc of hiddenCases) {
        if (sampleCases.length >= 2) break;
        const alreadyInSample = sampleCases.some((sc) => sc.input.trim() === hc.input.trim());
        if (!alreadyInSample) {
          sampleCases.push({
            input: hc.input,
            output: hc.expectedOutput,
            explanation: 'Additional verification sample case.',
          });
          expandedSamplesCount++;
        }
      }
    }

    const combinedCases = [
      ...sampleCases.map((s) => ({ input: s.input, expectedOutput: s.output })),
      ...hiddenCases.map((h) => ({ input: h.input, expectedOutput: h.expectedOutput })),
    ];

    if (combinedCases.length === 0) continue;

    const bundle = DriverGenerator.generateFromCases(q.title, combinedCases, q.description || '');

    bulkOps.push({
      updateOne: {
        filter: { _id: q._id },
        update: {
          $set: {
            functionSignature: {
              methodName: bundle.methodName,
              params: bundle.params,
              returnType: bundle.returnType,
            },
            starterCode: bundle.starterCode,
            sampleTestCases: sampleCases,
          },
        },
      },
    });
    updatedCount++;
  }

  if (bulkOps.length > 0) {
    await QuestionCoding.bulkWrite(bulkOps);
  }

  console.log(`Updated ${updatedCount} questions with LeetCode-style starterCode + hidden driverCode.`);
  console.log(`Expanded sampleTestCases on ${expandedSamplesCount} sample slots.`);
  await mongoose.disconnect();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
