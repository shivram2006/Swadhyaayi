import mongoose from 'mongoose';
import { config } from '../config';
import { Institution, Department, Batch, Class } from '../modules/tenant/tenant.model';
import { User } from '../modules/user/user.model';
import { hashPassword } from '../core/utils/password';
import { seedInitialCodingProblems } from '../modules/coding/coding.seed';
import { seedInitialAptitudeQuestions } from '../modules/aptitude/aptitude.seed';
import { seedRoadmaps } from '../modules/roadmap/roadmap.seed';
import { seedDemoAssessments } from '../modules/assessment/assessment.seed';

export const seedDatabase = async () => {
  try {
    console.log('[SEED] Connecting to MongoDB at:', config.mongoUri);
    await mongoose.connect(config.mongoUri);
    console.log('[SEED] Connected. Cleaning up old demo data...');

    await Promise.all([
      Institution.deleteMany({ code: 'nit-surat' }),
      User.deleteMany({
        email: {
          $in: [
            'admin@nit.ac.in',
            'faculty@nit.ac.in',
            'student@nit.ac.in',
            'student1@nit.ac.in',
            'student2@nit.ac.in',
            'super@swadhyayi.com',
          ],
        },
      }),
    ]);

    console.log('[SEED] Creating Demo Institution: NIT Surat...');
    const institution = await Institution.create({
      name: 'National Institute of Technology, Surat',
      code: 'nit-surat',
      contactEmail: 'tpo@nitsurat.ac.in',
      phone: '+91 261 2259571',
      address: {
        city: 'Surat',
        state: 'Gujarat',
        country: 'India',
        zipCode: '395007',
      },
      status: 'ACTIVE',
      settings: {
        allowedDomains: ['@nitsurat.ac.in', '@nit.ac.in'],
        branding: {
          primaryColor: '#6366f1',
        },
        enableProctoring: true,
      },
    });

    console.log('[SEED] Creating Departments...');
    const [deptCSE, deptIT] = await Promise.all([
      Department.create({
        institutionId: institution._id,
        name: 'Computer Science & Engineering',
        code: 'CSE',
        status: 'ACTIVE',
      }),
      Department.create({
        institutionId: institution._id,
        name: 'Information Technology',
        code: 'IT',
        status: 'ACTIVE',
      }),
    ]);

    console.log('[SEED] Creating Batches...');
    const batch2027 = await Batch.create({
      institutionId: institution._id,
      name: 'Batch 2023-2027',
      graduationYear: 2027,
      currentAcademicYear: 2,
      status: 'ACTIVE',
    });

    console.log('[SEED] Creating Class Sections...');
    const classCSE_A = await Class.create({
      institutionId: institution._id,
      departmentId: deptCSE._id,
      batchId: batch2027._id,
      section: 'A',
      semester: 4,
    });

    console.log('[SEED] Creating Demo Accounts with password: Password@123 ...');
    const commonPasswordHash = await hashPassword('Password@123');

    // 1. Super Admin
    await User.create({
      email: 'super@swadhyayi.com',
      passwordHash: commonPasswordHash,
      role: 'SUPER_ADMIN',
      firstName: 'Swadhyayi',
      lastName: 'Architect',
      status: 'ACTIVE',
    });

    // 2. Institution Admin
    await User.create({
      institutionId: institution._id,
      email: 'admin@nit.ac.in',
      passwordHash: commonPasswordHash,
      role: 'INSTITUTION_ADMIN',
      firstName: 'Dr. Vikram',
      lastName: 'Iyer',
      status: 'ACTIVE',
    });

    // 3. Faculty
    await User.create({
      institutionId: institution._id,
      email: 'faculty@nit.ac.in',
      passwordHash: commonPasswordHash,
      role: 'FACULTY',
      firstName: 'Prof. Rajesh',
      lastName: 'Sharma',
      departmentId: deptCSE._id,
      status: 'ACTIVE',
    });

    // 4. Student 1 (Aarav Patel)
    await User.create({
      institutionId: institution._id,
      email: 'student1@nit.ac.in',
      passwordHash: commonPasswordHash,
      role: 'STUDENT',
      firstName: 'Aarav',
      lastName: 'Patel',
      rollNumber: 'U23CS042',
      departmentId: deptCSE._id,
      batchId: batch2027._id,
      classId: classCSE_A._id,
      status: 'ACTIVE',
      profile: {
        skills: ['C++', 'Python', 'React', 'Node.js', 'DSA', 'Tailwind CSS'],
        targetDomain: 'Full Stack MERN Developer',
        cgpa: 8.65,
      },
      metrics: {
        codingProblemsSolved: 68,
        codingScore: 1850,
        aptitudeTestsTaken: 22,
        aptitudeScore: 600,
        globalRank: 112,
        institutionRank: 4,
        currentStreak: 18,
        longestStreak: 25,
        lastActiveDate: new Date(),
        totalPoints: 2450,
      },
    });

    // 5. Student 2 (Priya Sharma)
    await User.create({
      institutionId: institution._id,
      email: 'student2@nit.ac.in',
      passwordHash: commonPasswordHash,
      role: 'STUDENT',
      firstName: 'Priya',
      lastName: 'Sharma',
      rollNumber: 'U23CS089',
      departmentId: deptCSE._id,
      batchId: batch2027._id,
      classId: classCSE_A._id,
      status: 'ACTIVE',
      profile: {
        skills: ['Java', 'Spring Boot', 'TypeScript', 'SQL', 'Algorithms', 'Docker'],
        targetDomain: 'Software Development Engineering (SDE)',
        cgpa: 9.35,
      },
      metrics: {
        codingProblemsSolved: 94,
        codingScore: 2420,
        aptitudeTestsTaken: 31,
        aptitudeScore: 880,
        globalRank: 42,
        institutionRank: 1,
        currentStreak: 24,
        longestStreak: 30,
        lastActiveDate: new Date(),
        totalPoints: 3300,
      },
    });

    // Also maintain student@nit.ac.in as default student alias for compatibility
    await User.create({
      institutionId: institution._id,
      email: 'student@nit.ac.in',
      passwordHash: commonPasswordHash,
      role: 'STUDENT',
      firstName: 'Aarav',
      lastName: 'Patel',
      rollNumber: 'U23CS001',
      departmentId: deptCSE._id,
      batchId: batch2027._id,
      classId: classCSE_A._id,
      status: 'ACTIVE',
      profile: {
        skills: ['C++', 'Python', 'React', 'Node.js', 'DSA'],
        targetDomain: 'Full Stack MERN Developer',
        cgpa: 8.65,
      },
      metrics: {
        codingProblemsSolved: 68,
        codingScore: 1850,
        aptitudeTestsTaken: 22,
        aptitudeScore: 600,
        globalRank: 112,
        institutionRank: 4,
        currentStreak: 18,
        longestStreak: 25,
        lastActiveDate: new Date(),
        totalPoints: 2450,
      },
    });

    console.log('[SEED] Pre-seeding Algorithmic Coding Problem Catalog...');
    await seedInitialCodingProblems();

    console.log('[SEED] Pre-seeding Aptitude & Technical MCQ Catalog...');
    await seedInitialAptitudeQuestions();

    console.log('[SEED] Pre-seeding 19 Industry-Ready Roadmaps...');
    await seedRoadmaps();

    console.log('[SEED] Pre-seeding Institutional Mock Placement Assessment...');
    await seedDemoAssessments();

    console.log('\n======================================================');
    console.log('✅ SWADHYAYI DEMO ENVIRONMENT SEEDED SUCCESSFULLY!');
    console.log('------------------------------------------------------');
    console.log('Institution: National Institute of Technology, Surat (nit-surat)');
    console.log('Credentials (Password for all: Password@123):');
    console.log('  👨‍🎓 Student 1:         student1@nit.ac.in (or student@nit.ac.in)');
    console.log('  👩‍🎓 Student 2:         student2@nit.ac.in');
    console.log('  👩‍🏫 Faculty:           faculty@nit.ac.in');
    console.log('  🏛️  College Admin:     admin@nit.ac.in');
    console.log('  ⚡ Super Admin:       super@swadhyayi.com');
    console.log('======================================================\n');

    await mongoose.connection.close();
    process.exit(0);
  } catch (err) {
    console.error('[SEED] Error seeding database:', err);
    process.exit(1);
  }
};

if (require.main === module) {
  seedDatabase();
}
