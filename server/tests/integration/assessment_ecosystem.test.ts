import { describe, it, expect, vi } from 'vitest';
import request from 'supertest';
import { createApp } from '../../src/app';
import { generateAccessToken } from '../../src/core/utils/jwt';
import { Assessment, AssessmentSession } from '../../src/modules/assessment/assessment.model';
import { QuestionAptitude } from '../../src/modules/aptitude/aptitude.model';
import { QuestionCoding } from '../../src/modules/coding/coding.model';
import { User } from '../../src/modules/user/user.model';

describe('Institutional Test & Live Proctoring API Integration Tests', () => {
  const app = createApp();

  const studentToken = generateAccessToken({
    userId: '60d5ecb8b5c9c614b8e8b003',
    role: 'STUDENT',
    institutionId: '60d5ecb8b5c9c614b8e8b999',
  });

  const facultyToken = generateAccessToken({
    userId: '60d5ecb8b5c9c614b8e8b002',
    role: 'FACULTY',
    institutionId: '60d5ecb8b5c9c614b8e8b999',
  });

  const now = new Date();
  const mockAssessment = {
    _id: '60d5ecb8b5c9c614b8e8ba01',
    institutionId: '60d5ecb8b5c9c614b8e8b999',
    createdBy: '60d5ecb8b5c9c614b8e8b002',
    title: 'TCS NQT Campus Qualifier Mock',
    description: 'Placement assessment test',
    type: 'PLACEMENT_MOCK',
    status: 'PUBLISHED',
    startTime: new Date(now.getTime() - 60 * 60 * 1000), // started 1 hr ago
    endTime: new Date(now.getTime() + 24 * 60 * 60 * 1000), // ends in 24 hrs
    durationMinutes: 60,
    targeting: { allStudents: true, departmentIds: [], batchIds: [], classIds: [] },
    sections: [
      {
        sectionId: 'sec-1',
        title: 'Quantitative Aptitude',
        type: 'APTITUDE',
        order: 1,
        negativeMarkingRatio: 0.25,
        passingCutoffPercentage: 40,
        questions: [{ questionId: '60d5ecb8b5c9c614b8e8bf01', type: 'APTITUDE', points: 10 }],
      },
    ],
    proctoring: {
      enableProctoring: true,
      maxTabSwitches: 3,
      enforceFullscreen: true,
      blockCopyPaste: true,
      autoSubmitOnViolationLimit: false,
    },
  };

  describe('GET /api/v1/assessments', () => {
    it('should require authentication token (returns 401)', async () => {
      const res = await request(app).get('/api/v1/assessments');
      expect(res.status).toBe(401);
    });

    it('should list assessments for authenticated student', async () => {
      vi.spyOn(Assessment, 'find').mockReturnValue({
        sort: vi.fn().mockReturnValue({
          lean: vi.fn().mockResolvedValue([mockAssessment]),
        }),
      } as any);

      vi.spyOn(User, 'findById').mockReturnValue({
        select: vi.fn().mockReturnValue({
          lean: vi.fn().mockResolvedValue({
            departmentId: '60d5ecb8b5c9c614b8e8bd01',
          }),
        }),
      } as any);

      const res = await request(app)
        .get('/api/v1/assessments')
        .set('Authorization', `Bearer ${studentToken}`);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(Array.isArray(res.body.data)).toBe(true);
      expect(res.body.data[0].title).toBe('TCS NQT Campus Qualifier Mock');
      expect(res.body.data[0].totalPoints).toBe(10);
    });
  });

  describe('POST /api/v1/assessments (RBAC)', () => {
    it('should reject STUDENT attempting to create an assessment (403 Forbidden)', async () => {
      const res = await request(app)
        .post('/api/v1/assessments')
        .set('Authorization', `Bearer ${studentToken}`)
        .send({
          title: 'Unauthorized Test',
        });

      expect(res.status).toBe(403);
      expect(res.body.error.code).toBe('FORBIDDEN');
    });

    it('should allow FACULTY to create an assessment', async () => {
      vi.spyOn(Assessment, 'create').mockResolvedValue(mockAssessment as any);

      const res = await request(app)
        .post('/api/v1/assessments')
        .set('Authorization', `Bearer ${facultyToken}`)
        .send({
          title: 'TCS NQT Campus Qualifier Mock',
          description: 'Placement assessment test',
          type: 'PLACEMENT_MOCK',
          startTime: new Date(now.getTime() - 60 * 60 * 1000).toISOString(),
          endTime: new Date(now.getTime() + 24 * 60 * 60 * 1000).toISOString(),
          durationMinutes: 60,
          sections: [
            {
              sectionId: 'sec-1',
              title: 'Quantitative Aptitude',
              type: 'APTITUDE',
              order: 1,
              questions: [
                { questionId: '60d5ecb8b5c9c614b8e8bf01', type: 'APTITUDE', points: 10 },
              ],
            },
          ],
        });

      expect(res.status).toBe(201);
      expect(res.body.success).toBe(true);
    });
  });

  describe('POST /api/v1/assessments/:id/start & Live Proctoring', () => {
    it('should start session and strictly exclude correct answers & explanations from payload', async () => {
      vi.spyOn(Assessment, 'findById').mockResolvedValue(mockAssessment as any);
      vi.spyOn(AssessmentSession, 'findOne').mockResolvedValue(null);

      const mockSession: any = {
        _id: '60d5ecb8b5c9c614b8e8bs01',
        assessmentId: mockAssessment._id,
        status: 'IN_PROGRESS',
        startedAt: new Date(),
        expiresAt: new Date(now.getTime() + 60 * 60 * 1000),
        tabSwitchCount: 0,
        shuffledQuestions: [
          {
            sectionId: 'sec-1',
            questionId: '60d5ecb8b5c9c614b8e8bf01',
            type: 'APTITUDE',
            points: 10,
          },
        ],
        answers: [],
      };

      vi.spyOn(AssessmentSession, 'create').mockResolvedValue(mockSession);

      vi.spyOn(QuestionAptitude, 'find').mockReturnValue({
        select: vi.fn().mockReturnValue({
          lean: vi.fn().mockResolvedValue([
            {
              _id: '60d5ecb8b5c9c614b8e8bf01',
              title: 'Time and Work Problem',
              options: [{ id: 'A', text: '5 days' }, { id: 'B', text: '10 days' }],
            },
          ]),
        }),
      } as any);

      vi.spyOn(QuestionCoding, 'find').mockReturnValue({
        select: vi.fn().mockReturnValue({
          lean: vi.fn().mockResolvedValue([]),
        }),
      } as any);

      const res = await request(app)
        .post(`/api/v1/assessments/${mockAssessment._id}/start`)
        .set('Authorization', `Bearer ${studentToken}`);

      expect(res.status).toBe(201);
      expect(res.body.data.session.status).toBe('IN_PROGRESS');
      expect(res.body.data.questions).toHaveLength(1);
      // Security check: correct option must not be leaked
      expect(res.body.data.questions[0].questionData.correctOptionId).toBeUndefined();
      expect(res.body.data.questions[0].questionData.explanation).toBeUndefined();
    });

    it('should record TAB_SWITCH telemetry and increment violation counter', async () => {
      const mockSessionDoc: any = {
        _id: '60d5ecb8b5c9c614b8e8bs01',
        assessmentId: mockAssessment._id,
        status: 'IN_PROGRESS',
        tabSwitchCount: 2,
        isFlaggedForCheating: false,
        proctoringEvents: [],
        save: vi.fn().mockResolvedValue(true),
      };

      vi.spyOn(AssessmentSession, 'findOne').mockResolvedValue(mockSessionDoc);
      vi.spyOn(Assessment, 'findById').mockReturnValue({
        lean: vi.fn().mockResolvedValue(mockAssessment),
      } as any);

      const res = await request(app)
        .post(`/api/v1/assessments/${mockAssessment._id}/telemetry`)
        .set('Authorization', `Bearer ${studentToken}`)
        .send({
          eventType: 'TAB_SWITCH',
          details: 'User navigated away to browser tab',
        });

      expect(res.status).toBe(200);
      expect(res.body.data.tabSwitchCount).toBe(3);
      // Reached maxTabSwitches (3) -> flagged
      expect(res.body.data.isFlaggedForCheating).toBe(true);
    });

    it('should save answer state during exam', async () => {
      const mockSessionDoc: any = {
        _id: '60d5ecb8b5c9c614b8e8bs01',
        answers: [],
        save: vi.fn().mockResolvedValue(true),
      };

      vi.spyOn(AssessmentSession, 'findOne').mockResolvedValue(mockSessionDoc);

      const res = await request(app)
        .post(`/api/v1/assessments/${mockAssessment._id}/save-answer`)
        .set('Authorization', `Bearer ${studentToken}`)
        .send({
          questionId: '60d5ecb8b5c9c614b8e8bf01',
          type: 'APTITUDE',
          selectedOptionId: 'B',
          timeSpentSeconds: 45,
        });

      expect(res.status).toBe(200);
      expect(res.body.data.saved).toBe(true);
    });

    it('should grade assessment upon submission and calculate score with negative marking', async () => {
      const mockSessionDoc: any = {
        _id: '60d5ecb8b5c9c614b8e8bs01',
        assessmentId: mockAssessment._id,
        status: 'IN_PROGRESS',
        maxPossibleScore: 10,
        shuffledQuestions: [
          {
            sectionId: 'sec-1',
            questionId: '60d5ecb8b5c9c614b8e8bf01',
            type: 'APTITUDE',
            points: 10,
          },
        ],
        answers: [
          {
            questionId: '60d5ecb8b5c9c614b8e8bf01',
            selectedOptionId: 'B', // correct
          },
        ],
        save: vi.fn().mockResolvedValue(true),
      };

      vi.spyOn(AssessmentSession, 'findOne').mockResolvedValue(mockSessionDoc);
      vi.spyOn(Assessment, 'findById').mockResolvedValue(mockAssessment as any);
      vi.spyOn(QuestionAptitude, 'find').mockReturnValue({
        lean: vi.fn().mockResolvedValue([
          { _id: '60d5ecb8b5c9c614b8e8bf01', correctOptionId: 'B' },
        ]),
      } as any);
      vi.spyOn(User, 'findByIdAndUpdate').mockResolvedValue({} as any);

      const res = await request(app)
        .post(`/api/v1/assessments/${mockAssessment._id}/submit`)
        .set('Authorization', `Bearer ${studentToken}`);

      expect(res.status).toBe(200);
      expect(mockSessionDoc.status).toBe('SUBMITTED');
      expect(mockSessionDoc.totalScore).toBe(10);
      expect(mockSessionDoc.percentage).toBe(100);
      expect(mockSessionDoc.isPassed).toBe(true);
    });
  });

  describe('GET /api/v1/assessments/:id/monitor (Faculty Live Proctoring)', () => {
    it('should reject STUDENT attempting to monitor live exam with 403 Forbidden', async () => {
      const res = await request(app)
        .get(`/api/v1/assessments/${mockAssessment._id}/monitor`)
        .set('Authorization', `Bearer ${studentToken}`);

      expect(res.status).toBe(403);
    });

    it('should allow FACULTY to access live proctoring dashboard', async () => {
      vi.spyOn(Assessment, 'findOne').mockReturnValue({
        lean: vi.fn().mockResolvedValue(mockAssessment),
      } as any);

      vi.spyOn(AssessmentSession, 'find').mockReturnValue({
        populate: vi.fn().mockReturnValue({
          sort: vi.fn().mockReturnValue({
            lean: vi.fn().mockResolvedValue([
              {
                _id: '60d5ecb8b5c9c614b8e8bs01',
                userId: { firstName: 'Rohan', lastName: 'Verma', rollNumber: '23CS01' },
                status: 'IN_PROGRESS',
                tabSwitchCount: 1,
                isFlaggedForCheating: false,
                totalScore: 0,
              },
            ]),
          }),
        }),
      } as any);

      const res = await request(app)
        .get(`/api/v1/assessments/${mockAssessment._id}/monitor`)
        .set('Authorization', `Bearer ${facultyToken}`);

      expect(res.status).toBe(200);
      expect(res.body.data.candidates).toHaveLength(1);
      expect(res.body.data.candidates[0].name).toBe('Rohan Verma');
      expect(res.body.data.candidates[0].tabSwitchCount).toBe(1);
    });
  });
});
