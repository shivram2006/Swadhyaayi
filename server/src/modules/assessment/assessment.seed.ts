import { Assessment } from './assessment.model';
import { Institution } from '../tenant/tenant.model';
import { User } from '../user/user.model';
import { QuestionAptitude } from '../aptitude/aptitude.model';
import { QuestionCoding } from '../coding/coding.model';

export async function seedDemoAssessments(): Promise<void> {
  const institution = await Institution.findOne({ code: 'nit-surat' });
  if (!institution) return;

  const faculty = await User.findOne({ email: 'faculty@nit.ac.in' });
  if (!faculty) return;

  const [aptQuestions, codingQuestions] = await Promise.all([
    QuestionAptitude.find().limit(3),
    QuestionCoding.find().limit(2),
  ]);

  if (aptQuestions.length === 0 || codingQuestions.length === 0) return;

  const now = new Date();
  const startTime = new Date(now.getTime() - 2 * 60 * 60 * 1000); // started 2 hours ago
  const endTime = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000); // open for 7 days

  await Assessment.findOneAndUpdate(
    { institutionId: institution._id, title: 'TCS NQT National Placement Qualifier Mock' },
    {
      $set: {
        institutionId: institution._id,
        createdBy: faculty._id,
        title: 'TCS NQT National Placement Qualifier Mock',
        description: 'Comprehensive campus placement test covering Quantitative Aptitude, Logical Reasoning, and Algorithmic Problem Solving.',
        type: 'PLACEMENT_MOCK',
        status: 'PUBLISHED',
        startTime,
        endTime,
        durationMinutes: 90,
        targeting: {
          allStudents: true,
          departmentIds: [],
          batchIds: [],
          classIds: [],
        },
        sections: [
          {
            sectionId: 'sec-apt',
            title: 'Section 1: Quantitative & Reasoning Aptitude',
            type: 'APTITUDE',
            order: 1,
            durationMinutes: 40,
            negativeMarkingRatio: 0.25,
            passingCutoffPercentage: 40,
            questions: aptQuestions.map((q) => ({
              questionId: q._id,
              type: 'APTITUDE',
              points: 10,
            })),
          },
          {
            sectionId: 'sec-code',
            title: 'Section 2: Algorithmic Coding Assessment',
            type: 'CODING',
            order: 2,
            durationMinutes: 50,
            negativeMarkingRatio: 0,
            passingCutoffPercentage: 50,
            questions: codingQuestions.map((q) => ({
              questionId: q._id,
              type: 'CODING',
              points: 50,
            })),
          },
        ],
        proctoring: {
          enableProctoring: true,
          maxTabSwitches: 3,
          enforceFullscreen: true,
          blockCopyPaste: true,
          autoSubmitOnViolationLimit: false,
        },
      },
    },
    { upsert: true, new: true }
  );
}
