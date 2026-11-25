import mongoose from 'mongoose';
import { config } from '../config';
import { seedInitialAptitudeQuestions } from '../modules/aptitude/aptitude.seed';

const run = async () => {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(config.mongoUri);
    console.log('Connected to MongoDB. Seeding 400 aptitude questions...');
    await seedInitialAptitudeQuestions();
    console.log('Done! Exiting.');
    process.exit(0);
  } catch (err) {
    console.error('Seed failed:', err);
    process.exit(1);
  }
};

run();
