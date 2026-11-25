import { Types } from 'mongoose';
import { Assessment, AssessmentSession, IAssessment, ProctoringEventType } from './assessment.model';
import { QuestionAptitude } from '../aptitude/aptitude.model';
import { QuestionCoding } from '../coding/coding.model';
import { SandboxRunner } from '../coding/runner/sandboxRunner';
import { User } from '../user/user.model';
import { NotFoundError, ValidationError, ConflictError } from '../../core/utils/appError';

export class AssessmentService {
  static async createAssessment(data: any, institutionId: string, userId: string) {
    const start = new Date(data.startTime);
    const end = new Date(data.endTime);

    if (start >= end) {
      throw new ValidationError('Assessment start time must be before end time');
    }

    const instId = new Types.ObjectId(institutionId);
    const uId = new Types.ObjectId(userId);

    const assessment = await Assessment.create({
      ...data,
      institutionId: instId,
      createdBy: uId,
      startTime: start,
      endTime: end,
    });

    return assessment;
  }

  static async getAssessments(institutionId: string, studentCohort?: { departmentId?: string; batchId?: string; classId?: string }) {
    const instId = new Types.ObjectId(institutionId);
    const query: any = { institutionId: instId, status: { $ne: 'ARCHIVED' } };

    const assessments = await Assessment.find(query).sort({ startTime: -1 }).lean();

    // Aggregate session counts (attempts, submissions, avg percentage) per assessment
    const assessmentIds = assessments.map((a) => a._id);
    const sessionStats = await AssessmentSession.aggregate([
      { $match: { assessmentId: { $in: assessmentIds } } },
      {
        $group: {
          _id: '$assessmentId',
          attemptedCount: { $sum: 1 },
          submittedCount: {
            $sum: {
              $cond: [{ $in: ['$status', ['SUBMITTED', 'AUTO_SUBMITTED']] }, 1, 0],
            },
          },
          avgPct: {
            $avg: {
              $cond: [{ $in: ['$status', ['SUBMITTED', 'AUTO_SUBMITTED']] }, '$percentage', null],
            },
          },
        },
      },
    ]);
    const statsMap = new Map(sessionStats.map((s: any) => [s._id.toString(), s]));

    return assessments.map((a) => {
      let isEligible = true;

      if (studentCohort && !a.targeting?.allStudents) {
        const depMatch = studentCohort.departmentId && a.targeting.departmentIds?.some((id: any) => id.toString() === studentCohort.departmentId);
        const batchMatch = studentCohort.batchId && a.targeting.batchIds?.some((id: any) => id.toString() === studentCohort.batchId);
        const classMatch = studentCohort.classId && a.targeting.classIds?.some((id: any) => id.toString() === studentCohort.classId);

        isEligible = !!(depMatch || batchMatch || classMatch);
      }

      const totalQuestions = a.sections.reduce((acc, s) => acc + (s.questions?.length || 0), 0);
      const totalPoints = a.sections.reduce(
        (acc, s) => acc + s.questions.reduce((qAcc, q) => qAcc + q.points, 0),
        0
      );

      const stats = statsMap.get(a._id.toString());

      return {
        _id: a._id,
        title: a.title,
        description: a.description,
        type: a.type,
        status: a.status,
        startTime: a.startTime,
        endTime: a.endTime,
        durationMinutes: a.durationMinutes,
        isEligible,
        totalSections: a.sections.length,
        totalQuestions,
        totalPoints,
        proctoringEnabled: a.proctoring?.enableProctoring ?? true,
        attemptedCount: stats?.attemptedCount || 0,
        submittedCount: stats?.submittedCount || 0,
        averagePercentage: stats?.avgPct != null ? Math.round(stats.avgPct) : null,
      };
    });
  }

  static async getAssessmentById(assessmentId: string, institutionId?: string) {
    const query: any = { _id: new Types.ObjectId(assessmentId) };
    if (institutionId) query.institutionId = new Types.ObjectId(institutionId);

    const assessment = await Assessment.findOne(query).lean();
    if (!assessment) throw new NotFoundError('Assessment not found');

    return assessment;
  }

  static async startSession(assessmentId: string, userId: string, institutionId: string, accessCode?: string) {
    const aId = new Types.ObjectId(assessmentId);
    const uId = new Types.ObjectId(userId);
    const instId = new Types.ObjectId(institutionId);

    const assessment = await Assessment.findById(aId);
    if (!assessment) throw new NotFoundError('Assessment not found');

    const now = new Date();
    if (now < assessment.startTime) {
      throw new ValidationError('This assessment has not started yet');
    }
    if (now > assessment.endTime) {
      throw new ValidationError('This assessment window has closed');
    }

    if (assessment.targeting.accessCode && assessment.targeting.accessCode !== accessCode) {
      throw new ValidationError('Invalid assessment access code');
    }

    // Check existing session
    let session = await AssessmentSession.findOne({ assessmentId: aId, userId: uId });

    if (session) {
      if (session.status === 'SUBMITTED' || session.status === 'AUTO_SUBMITTED') {
        throw new ConflictError('You have already submitted this assessment');
      }
    } else {
      // Build shuffled question list
      const shuffled: { sectionId: string; questionId: Types.ObjectId; type: 'APTITUDE' | 'CODING'; points: number }[] = [];

      assessment.sections.forEach((sec) => {
        const secQuestions = [...sec.questions];
        // Fisher-Yates shuffle
        for (let i = secQuestions.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [secQuestions[i], secQuestions[j]] = [secQuestions[j], secQuestions[i]];
        }
        secQuestions.forEach((q) => {
          shuffled.push({
            sectionId: sec.sectionId,
            questionId: q.questionId,
            type: q.type,
            points: q.points,
          });
        });
      });

      const maxScore = shuffled.reduce((sum, q) => sum + q.points, 0);
      const expiresAt = new Date(Math.min(now.getTime() + assessment.durationMinutes * 60 * 1000, assessment.endTime.getTime()));

      try {
        session = await AssessmentSession.create({
          assessmentId: aId,
          userId: uId,
          institutionId: instId,
          status: 'IN_PROGRESS',
          startedAt: now,
          expiresAt,
          shuffledQuestions: shuffled,
          answers: [],
          proctoringEvents: [],
          tabSwitchCount: 0,
          isFlaggedForCheating: false,
          totalScore: 0,
          maxPossibleScore: maxScore,
          percentage: 0,
          isPassed: false,
        });
      } catch (createErr: any) {
        // Handle concurrent StrictMode / double-click duplicate insert gracefully
        if (createErr?.code === 11000) {
          session = await AssessmentSession.findOne({ assessmentId: aId, userId: uId });
          if (!session) throw createErr;
        } else {
          throw createErr;
        }
      }
    }

    // Fetch actual question content safely (hide answers & hidden test cases)
    const aptitudeIds = session.shuffledQuestions.filter((q) => q.type === 'APTITUDE').map((q) => q.questionId);
    const codingIds = session.shuffledQuestions.filter((q) => q.type === 'CODING').map((q) => q.questionId);

    const [aptitudeQuestions, codingQuestions] = await Promise.all([
      QuestionAptitude.find({ _id: { $in: aptitudeIds } }).select('-correctOptionId -explanation').lean(),
      QuestionCoding.find({ _id: { $in: codingIds } }).select('-hiddenTestCases').lean(),
    ]);

    const aptitudeMap = new Map(aptitudeQuestions.map((q) => [q._id.toString(), q]));
    const codingMap = new Map(codingQuestions.map((q) => [q._id.toString(), q]));

    const populatedQuestions = session.shuffledQuestions.map((item) => {
      const qIdStr = item.questionId.toString();
      const content = item.type === 'APTITUDE' ? aptitudeMap.get(qIdStr) : codingMap.get(qIdStr);
      return {
        sectionId: item.sectionId,
        questionId: item.questionId,
        type: item.type,
        points: item.points,
        questionData: content || null,
      };
    });

    return {
      session: {
        _id: session._id,
        assessmentId: session.assessmentId,
        status: session.status,
        startedAt: session.startedAt,
        expiresAt: session.expiresAt,
        tabSwitchCount: session.tabSwitchCount,
        answers: session.answers,
      },
      assessment: {
        _id: assessment._id,
        title: assessment.title,
        durationMinutes: assessment.durationMinutes,
        sections: assessment.sections.map((s) => ({
          sectionId: s.sectionId,
          title: s.title,
          type: s.type,
          order: s.order,
          durationMinutes: s.durationMinutes,
        })),
        proctoring: assessment.proctoring,
      },
      questions: populatedQuestions,
    };
  }

  static async recordTelemetry(assessmentId: string, userId: string, eventType: ProctoringEventType, details?: string) {
    const session = await AssessmentSession.findOne({
      assessmentId: new Types.ObjectId(assessmentId),
      userId: new Types.ObjectId(userId),
      status: 'IN_PROGRESS',
    });

    if (!session) throw new NotFoundError('Active assessment session not found');

    session.proctoringEvents.push({
      eventType,
      timestamp: new Date(),
      details,
    });

    if (eventType === 'TAB_SWITCH') {
      session.tabSwitchCount += 1;
    }

    const assessment = await Assessment.findById(session.assessmentId).lean();
    const maxSwitches = assessment?.proctoring?.maxTabSwitches ?? 3;

    if (session.tabSwitchCount >= maxSwitches) {
      session.isFlaggedForCheating = true;
    }

    let autoSubmitted = false;
    if (assessment?.proctoring?.autoSubmitOnViolationLimit && session.tabSwitchCount >= maxSwitches) {
      session.status = 'AUTO_SUBMITTED';
      session.submittedAt = new Date();
      autoSubmitted = true;
    }

    await session.save();

    return {
      tabSwitchCount: session.tabSwitchCount,
      isFlaggedForCheating: session.isFlaggedForCheating,
      autoSubmitted,
    };
  }

  static async saveAnswer(assessmentId: string, userId: string, answerData: any) {
    const session = await AssessmentSession.findOne({
      assessmentId: new Types.ObjectId(assessmentId),
      userId: new Types.ObjectId(userId),
      status: 'IN_PROGRESS',
    });

    if (!session) throw new NotFoundError('Active assessment session not found');

    const qIdStr = answerData.questionId.toString();
    const existingIdx = session.answers.findIndex((a) => a.questionId.toString() === qIdStr);

    const qObjectId = Types.ObjectId.isValid(answerData.questionId)
      ? new Types.ObjectId(answerData.questionId)
      : (answerData.questionId as any);

    if (existingIdx !== -1) {
      session.answers[existingIdx] = {
        ...session.answers[existingIdx],
        ...answerData,
        questionId: qObjectId,
      };
    } else {
      session.answers.push({
        ...answerData,
        questionId: qObjectId,
        scoreAwarded: 0,
      });
    }

    await session.save();
    return { saved: true, totalAnswers: session.answers.length };
  }

  static async runCode(
    assessmentId: string,
    userId: string,
    questionId: string,
    language: string,
    code: string,
    customInput?: string
  ) {
    const aId = new Types.ObjectId(assessmentId);
    const uId = new Types.ObjectId(userId);

    const session = await AssessmentSession.findOne({
      assessmentId: aId,
      userId: uId,
      status: 'IN_PROGRESS',
    });
    if (!session) throw new NotFoundError('Active assessment session not found');

    let question: any = null;
    if (Types.ObjectId.isValid(questionId)) {
      question = await QuestionCoding.findById(questionId).lean();
    }

    const timeLimitMs = question?.timeLimitMs || 2000;

    if (customInput !== undefined && customInput.trim() !== '') {
      const singleRes = await SandboxRunner.executeSingle(language, code, customInput, timeLimitMs);
      return {
        isCustomInput: true,
        output: singleRes.stdout,
        error: singleRes.stderr,
        status: singleRes.status,
        executionTimeMs: singleRes.executionTimeMs,
        memoryUsedKb: singleRes.memoryUsedKb,
      };
    }

    const sampleCases = (question?.sampleTestCases || []).map((s: any) => ({
      input: s.input,
      expectedOutput: s.output,
    }));

    if (sampleCases.length === 0) {
      const singleRes = await SandboxRunner.executeSingle(language, code, '', timeLimitMs);
      return {
        isCustomInput: false,
        overallStatus: singleRes.status,
        totalCases: 1,
        passedCases: singleRes.status === 'ACCEPTED' ? 1 : 0,
        maxExecutionTimeMs: singleRes.executionTimeMs,
        maxMemoryUsedKb: singleRes.memoryUsedKb,
        firstFailedCase:
          singleRes.status !== 'ACCEPTED'
            ? {
                caseNumber: 1,
                input: '(None)',
                expectedOutput: '(Clean Execution)',
                actualOutput: singleRes.stdout || singleRes.stderr,
                errorLog: singleRes.errorLog,
              }
            : undefined,
      };
    }

    const result = await SandboxRunner.evaluateBatch(language, code, sampleCases, timeLimitMs);
    return {
      isCustomInput: false,
      overallStatus: result.overallStatus,
      totalCases: result.totalCases,
      passedCases: result.passedCases,
      maxExecutionTimeMs: result.maxExecutionTimeMs,
      maxMemoryUsedKb: result.maxMemoryUsedKb,
      firstFailedCase: result.firstFailedCase,
    };
  }

  static async submitAssessment(assessmentId: string, userId: string, submittedAnswers?: any[]) {
    const aId = new Types.ObjectId(assessmentId);
    const uId = new Types.ObjectId(userId);

    const session = await AssessmentSession.findOne({ assessmentId: aId, userId: uId });
    if (!session) throw new NotFoundError('Session not found');

    if (session.status === 'SUBMITTED') {
      return session;
    }

    // Merge latest client-side answers before grading so unsaved edits are never lost
    if (Array.isArray(submittedAnswers) && submittedAnswers.length > 0) {
      for (const item of submittedAnswers) {
        if (!item?.questionId) continue;
        const qIdStr = item.questionId.toString();
        const existingIdx = session.answers.findIndex((a) => a.questionId.toString() === qIdStr);
        const qObjectId = Types.ObjectId.isValid(item.questionId)
          ? new Types.ObjectId(item.questionId)
          : (item.questionId as any);

        if (existingIdx >= 0) {
          if (item.selectedOptionId !== undefined) session.answers[existingIdx].selectedOptionId = item.selectedOptionId;
          if (item.code !== undefined) session.answers[existingIdx].code = item.code;
          if (item.language !== undefined) session.answers[existingIdx].language = item.language;
        } else {
          session.answers.push({
            questionId: qObjectId,
            type: item.type || 'CODING',
            selectedOptionId: item.selectedOptionId,
            code: item.code,
            language: item.language,
            isCorrect: false,
            scoreAwarded: 0,
            timeSpentSeconds: 0,
          });
        }
      }
    }

    const assessment = await Assessment.findById(aId);
    if (!assessment) throw new NotFoundError('Assessment not found');

    // Section lookups
    const sectionMap = new Map(assessment.sections.map((s) => [s.sectionId, s]));

    // Evaluate answers
    const aptitudeIds = session.shuffledQuestions.filter((q) => q.type === 'APTITUDE').map((q) => q.questionId);
    const codingIds = session.shuffledQuestions.filter((q) => q.type === 'CODING').map((q) => q.questionId);

    const [aptitudeQuestions, codingQuestions] = await Promise.all([
      QuestionAptitude.find({ _id: { $in: aptitudeIds } }).lean(),
      QuestionCoding.find({ _id: { $in: codingIds } }).lean(),
    ]);

    const aptMap = new Map(aptitudeQuestions.map((q) => [q._id.toString(), q]));
    const codingMap = new Map(codingQuestions.map((q) => [q._id.toString(), q]));

    let totalScore = 0;

    for (const sq of session.shuffledQuestions) {
      const ans = session.answers.find((a) => a.questionId.toString() === sq.questionId.toString());
      const section = sectionMap.get(sq.sectionId);
      const negRatio = section?.negativeMarkingRatio || 0;

      if (sq.type === 'APTITUDE') {
        const fullQ = aptMap.get(sq.questionId.toString());
        if (ans && fullQ) {
          if (ans.selectedOptionId === fullQ.correctOptionId) {
            ans.isCorrect = true;
            ans.scoreAwarded = sq.points;
            totalScore += sq.points;
          } else if (ans.selectedOptionId) {
            ans.isCorrect = false;
            const penalty = Math.round(sq.points * negRatio * 100) / 100;
            ans.scoreAwarded = -penalty;
            totalScore -= penalty;
          }
        }
      } else if (sq.type === 'CODING') {
        const fullQ = codingMap.get(sq.questionId.toString());
        if (ans && ans.code && ans.code.trim().length > 0) {
          const lang = ans.language || 'python';
          const testCasesToEvaluate: { input: string; expectedOutput: string; weight?: number }[] = [];

          if (fullQ?.hiddenTestCases && fullQ.hiddenTestCases.length > 0) {
            fullQ.hiddenTestCases.forEach((tc: any) => {
              testCasesToEvaluate.push({ input: tc.input, expectedOutput: tc.expectedOutput, weight: tc.weight || 1 });
            });
          } else if (fullQ?.sampleTestCases && fullQ.sampleTestCases.length > 0) {
            fullQ.sampleTestCases.forEach((tc: any) => {
              testCasesToEvaluate.push({ input: tc.input, expectedOutput: tc.output, weight: 1 });
            });
          }

          if (testCasesToEvaluate.length > 0) {
            try {
              const evalResult = await SandboxRunner.evaluateBatch(
                lang,
                ans.code,
                testCasesToEvaluate,
                fullQ?.timeLimitMs || 2000
              );
              ans.executionStatus = evalResult.overallStatus;
              ans.testCasesPassed = evalResult.passedCases;
              ans.totalTestCases = evalResult.totalCases;

              const passRatio = evalResult.totalCases > 0 ? evalResult.passedCases / evalResult.totalCases : 0;
              const pointsEarned = Math.round(sq.points * passRatio * 100) / 100;
              ans.scoreAwarded = pointsEarned;
              ans.isCorrect = evalResult.passedCases === evalResult.totalCases && evalResult.totalCases > 0;
              totalScore += pointsEarned;
            } catch (runnerErr) {
              console.error(`Assessment coding grading runner error for question ${sq.questionId}:`, runnerErr);
              ans.executionStatus = 'PENDING_REVIEW';
              ans.isCorrect = true;
              ans.scoreAwarded = sq.points;
              totalScore += sq.points;
            }
          } else {
            ans.executionStatus = 'ACCEPTED';
            ans.isCorrect = true;
            ans.scoreAwarded = sq.points;
            totalScore += sq.points;
          }
        } else if (ans) {
          ans.executionStatus = 'NOT_ATTEMPTED';
          ans.isCorrect = false;
          ans.scoreAwarded = 0;
        }
      }
    }

    totalScore = Math.max(0, Math.round(totalScore * 100) / 100);
    const maxScore = Math.max(1, session.maxPossibleScore);
    const pct = Math.min(100, Math.round((totalScore / maxScore) * 100));

    session.status = session.status === 'AUTO_SUBMITTED' ? 'AUTO_SUBMITTED' : 'SUBMITTED';
    session.submittedAt = new Date();
    session.totalScore = totalScore;
    session.percentage = pct;
    session.isPassed = pct >= 40;

    await session.save();

    // Increment user metrics
    await User.findByIdAndUpdate(uId, {
      $inc: { 'metrics.totalPoints': totalScore, 'metrics.aptitudeTestsTaken': 1 },
    });

    return session;
  }

  static async getLiveMonitor(assessmentId: string, institutionId: string) {
    const aId = new Types.ObjectId(assessmentId);
    const instId = new Types.ObjectId(institutionId);

    const assessment = await Assessment.findOne({ _id: aId, institutionId: instId }).lean();
    if (!assessment) throw new NotFoundError('Assessment not found');

    const sessions = await AssessmentSession.find({ assessmentId: aId })
      .populate('userId', 'firstName lastName rollNumber email')
      .sort({ startedAt: -1 })
      .lean();

    return {
      assessment: {
        _id: assessment._id,
        title: assessment.title,
        startTime: assessment.startTime,
        endTime: assessment.endTime,
        durationMinutes: assessment.durationMinutes,
        maxTabSwitches: assessment.proctoring?.maxTabSwitches ?? 3,
      },
      candidates: sessions.map((s: any) => ({
        sessionId: s._id,
        userId: s.userId?._id,
        name: s.userId ? `${s.userId.firstName} ${s.userId.lastName}` : 'Candidate',
        rollNumber: s.userId?.rollNumber,
        email: s.userId?.email,
        status: s.status,
        startedAt: s.startedAt,
        submittedAt: s.submittedAt,
        tabSwitchCount: s.tabSwitchCount,
        isFlaggedForCheating: s.isFlaggedForCheating,
        totalScore: s.totalScore,
        maxPossibleScore: s.maxPossibleScore,
        percentage: s.percentage,
        isPassed: s.isPassed,
      })),
    };
  }

  static async getFacultySubmissionsOverview(institutionId: string) {
    const instId = new Types.ObjectId(institutionId);

    const sessions = await AssessmentSession.find({ institutionId: instId })
      .populate('userId', 'firstName lastName rollNumber email')
      .populate('assessmentId', 'title')
      .sort({ submittedAt: -1, startedAt: -1 })
      .limit(50)
      .lean();

    const submitted = sessions.filter((s: any) => s.status === 'SUBMITTED' || s.status === 'AUTO_SUBMITTED');
    const avgPct =
      submitted.length > 0
        ? Math.round(submitted.reduce((acc: number, s: any) => acc + (s.percentage || 0), 0) / submitted.length)
        : 0;

    return {
      stats: {
        totalAttempts: sessions.length,
        totalSubmissions: submitted.length,
        averagePercentage: avgPct,
      },
      submissions: sessions.map((s: any) => ({
        sessionId: s._id,
        assessmentId: s.assessmentId?._id || s.assessmentId,
        assessmentTitle: s.assessmentId?.title || 'Assessment',
        userId: s.userId?._id,
        studentName: s.userId ? `${s.userId.firstName} ${s.userId.lastName}` : 'Student',
        rollNumber: s.userId?.rollNumber,
        email: s.userId?.email,
        status: s.status,
        totalScore: s.totalScore || 0,
        maxPossibleScore: s.maxPossibleScore || 0,
        percentage: s.percentage || 0,
        isPassed: !!s.isPassed,
        tabSwitchCount: s.tabSwitchCount || 0,
        startedAt: s.startedAt,
        submittedAt: s.submittedAt,
      })),
    };
  }

  static async getAssessmentAnalytics(assessmentId: string, institutionId: string) {
    const aId = new Types.ObjectId(assessmentId);
    const instId = new Types.ObjectId(institutionId);

    const assessment = await Assessment.findOne({ _id: aId, institutionId: instId }).lean();
    if (!assessment) throw new NotFoundError('Assessment not found');

    const sessions = await AssessmentSession.find({ assessmentId: aId, status: { $in: ['SUBMITTED', 'AUTO_SUBMITTED'] } })
      .populate('userId', 'firstName lastName rollNumber email')
      .sort({ totalScore: -1 })
      .lean();

    const totalSubmitted = sessions.length;
    const scores = sessions.map((s) => s.totalScore);
    const highestScore = scores.length > 0 ? Math.max(...scores) : 0;
    const lowestScore = scores.length > 0 ? Math.min(...scores) : 0;
    const avgScore = scores.length > 0 ? Math.round((scores.reduce((a, b) => a + b, 0) / scores.length) * 10) / 10 : 0;
    const passedCount = sessions.filter((s) => s.isPassed).length;
    const passPercentage = totalSubmitted > 0 ? Math.round((passedCount / totalSubmitted) * 100) : 0;

    return {
      assessmentTitle: assessment.title,
      summary: {
        totalSubmitted,
        highestScore,
        lowestScore,
        avgScore,
        passedCount,
        passPercentage,
      },
      rankedResults: sessions.map((s: any, idx) => ({
        rank: idx + 1,
        name: s.userId ? `${s.userId.firstName} ${s.userId.lastName}` : 'Candidate',
        rollNumber: s.userId?.rollNumber,
        email: s.userId?.email,
        totalScore: s.totalScore,
        percentage: s.percentage,
        isPassed: s.isPassed,
        tabSwitches: s.tabSwitchCount,
        isFlagged: s.isFlaggedForCheating,
      })),
    };
  }
}
