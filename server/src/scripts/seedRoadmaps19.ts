import mongoose from 'mongoose';
import { config } from '../config';
import { seedAllRoadmaps } from '../modules/roadmap/roadmap.seed';
import { Roadmap } from '../modules/roadmap/roadmap.model';

const run = async () => {
  try {
    await mongoose.connect(config.mongoUri);
    console.log('[ROADMAP SEED] Connected to MongoDB.');

    await seedAllRoadmaps();

    const roadmaps = await Roadmap.find({}, 'slug title stages').lean();
    console.log(`[ROADMAP SEED] Verified ${roadmaps.length} roadmaps in DB:`);
    roadmaps.forEach((r: any) => {
      const topicCount = (r.stages || []).reduce((acc: number, s: any) => acc + (s.topics?.length || 0), 0);
      console.log(`  - ${r.slug}: ${r.stages?.length || 0} stages, ${topicCount} topics`);
    });

    await mongoose.disconnect();
    process.exit(0);
  } catch (err) {
    console.error('[ROADMAP SEED] Error:', err);
    process.exit(1);
  }
};

run();
