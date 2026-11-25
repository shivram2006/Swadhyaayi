import { Roadmap } from './roadmap.model';
import { AI_AND_DATA_ROADMAPS } from './data/aiAndDataRoadmaps.data';
import { WEB_AND_MOBILE_ROADMAPS } from './data/webAndMobileRoadmaps.data';
import { LANGUAGES_AND_SDE_ROADMAPS } from './data/languagesAndSdeRoadmaps.data';
import { INFRA_AND_SECURITY_ROADMAPS } from './data/infraAndSecurityRoadmaps.data';

export const ALL_19_ROADMAPS = [
  ...AI_AND_DATA_ROADMAPS,
  ...WEB_AND_MOBILE_ROADMAPS,
  ...LANGUAGES_AND_SDE_ROADMAPS,
  ...INFRA_AND_SECURITY_ROADMAPS,
];

export const seedAllRoadmaps = async () => {
  for (const roadmap of ALL_19_ROADMAPS) {
    await Roadmap.findOneAndUpdate(
      { slug: roadmap.slug },
      { $set: roadmap },
      { upsert: true, new: true }
    );
  }
  console.log(`[SEED] Pre-seeded all ${ALL_19_ROADMAPS.length} structured beginner-to-pro Career Roadmaps.`);
};

export const seedRoadmaps = seedAllRoadmaps;
