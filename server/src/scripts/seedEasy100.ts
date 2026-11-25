import mongoose from 'mongoose';
import { config } from '../config';
import { seedEasyPractice100 } from '../modules/coding/easyPractice100.seed';
import { QuestionCoding } from '../modules/coding/coding.model';

const run = async () => {
  try {
    await mongoose.connect(config.mongoUri);
    console.log('[EASY 100 SEED] Connected to MongoDB.');

    await seedEasyPractice100();

    const easyCount = await QuestionCoding.countDocuments({
      status: 'PUBLISHED',
      difficulty: 'EASY',
      isAssessmentOnly: { $ne: true },
    });
    const totalCount = await QuestionCoding.countDocuments({
      status: 'PUBLISHED',
      isAssessmentOnly: { $ne: true },
    });

    console.log(`[EASY 100 SEED] Total EASY problems in catalog: ${easyCount}`);
    console.log(`[EASY 100 SEED] Total Coding problems in catalog: ${totalCount}`);

    await mongoose.disconnect();
    process.exit(0);
  } catch (err) {
    console.error('[EASY 100 SEED] Error:', err);
    process.exit(1);
  }
};

run();
