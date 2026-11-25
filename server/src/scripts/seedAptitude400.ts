import mongoose from 'mongoose';
import { config } from '../config';
import { seedInitialAptitudeQuestions } from '../modules/aptitude/aptitude.seed';
import { QuestionAptitude } from '../modules/aptitude/aptitude.model';

const run = async () => {
  try {
    await mongoose.connect(config.mongoUri);
    console.log('[APTITUDE SEED] Connected to MongoDB.');

    await seedInitialAptitudeQuestions();

    const counts = await QuestionAptitude.aggregate([
      { $match: { status: 'PUBLISHED' } },
      { $group: { _id: '$category', total: { $sum: 1 } } },
      { $sort: { _id: 1 } },
    ]);

    console.log('[APTITUDE SEED] Live question counts per category:');
    counts.forEach((c) => console.log(`  - ${c._id}: ${c.total}`));

    await mongoose.disconnect();
    process.exit(0);
  } catch (err) {
    console.error('[APTITUDE SEED] Error:', err);
    process.exit(1);
  }
};

run();
