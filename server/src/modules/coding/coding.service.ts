import { Types } from 'mongoose';
import { QuestionCoding, SubmissionCoding, CodingDifficulty, CodingCategory } from './coding.model';
import { User } from '../user/user.model';
import { NotFoundError, ConflictError } from '../../core/utils/appError';
import { SandboxRunner } from './runner/sandboxRunner';

export class CodingService {
  static async getQuestions(
    filters: {
      pattern?: string;
      company?: string;
      difficulty?: CodingDifficulty;
      category?: CodingCategory;
      topic?: string;
      search?: string;
      page?: number;
      limit?: number;
    },
    userId?: string
  ) {
    const query: any = { status: 'PUBLISHED' };

    if (filters.difficulty) query.difficulty = filters.difficulty;
    if (filters.category) query.category = filters.category;
    if (filters.pattern) query.patterns = { $regex: new RegExp(filters.pattern, 'i') };
    if (filters.topic) query.topics = { $regex: new RegExp(filters.topic, 'i') };
    if (filters.company) {
      query['companyTags.company'] = { $regex: new RegExp(`^${filters.company}$`, 'i') };
    }

    if (filters.search) {
      const searchRegex = new RegExp(filters.search, 'i');
      query.$or = [{ title: searchRegex }, { slug: searchRegex }, { patterns: searchRegex }, { topics: searchRegex }];
    }

    const page = Math.max(1, filters.page || 1);
    const limit = Math.min(100, Math.max(1, filters.limit || 25));
    const skip = (page - 1) * limit;

    const [questions, totalCount] = await Promise.all([
      QuestionCoding.find(query)
        .select('-hiddenTestCases -starterCode.driverCode')
        .sort({ difficulty: 1, createdAt: -1 })
        .skip(skip)
        .limit(limit),
      QuestionCoding.countDocuments(query),
    ]);

    // Check user solved status if userId provided
    let solvedQuestionIds = new Set<string>();
    if (userId) {
      const userSubmissions = await SubmissionCoding.find({
        userId: new Types.ObjectId(userId),
        status: 'ACCEPTED',
      }).select('questionId');
      userSubmissions.forEach((s) => solvedQuestionIds.add(s.questionId.toString()));
    }

    const mapped = questions.map((q) => {
      const obj: any = q.toObject();
      obj.isSolved = solvedQuestionIds.has(q._id.toString());
      return obj;
    });

    return {
      questions: mapped,
      meta: {
        page,
        limit,
        totalCount,
        totalPages: Math.ceil(totalCount / limit),
      },
    };
  }

  static async getQuestionBySlug(slug: string, userRole?: string) {
    const query: any = QuestionCoding.findOne({ slug: slug.toLowerCase() });

    // Hide hidden test cases from students
    if (userRole === 'STUDENT' || !userRole) {
      query.select('-hiddenTestCases -starterCode.driverCode');
    }

    const question = await query;
    if (!question) {
      throw new NotFoundError(`Problem with slug '${slug}' not found`);
    }

    return question;
  }

  static async runCode(
    _userId: string,
    questionId: string,
    language: string,
    code: string,
    customInput?: string
  ) {
    const question = await QuestionCoding.findById(questionId);
    if (!question) throw new NotFoundError('Question not found');

    if (customInput !== undefined) {
      const singleRes = await SandboxRunner.executeSingle(language, code, customInput, question.timeLimitMs);
      return {
        isCustomInput: true,
        output: singleRes.stdout,
        error: singleRes.stderr,
        status: singleRes.status,
        executionTimeMs: singleRes.executionTimeMs,
        memoryUsedKb: singleRes.memoryUsedKb,
      };
    }

    // Run against sample test cases
    const sampleCases = question.sampleTestCases.map((s) => ({
      input: s.input,
      expectedOutput: s.output,
    }));

    const result = await SandboxRunner.evaluateBatch(language, code, sampleCases, question.timeLimitMs);
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

  static async submitCode(
    userId: string,
    institutionId: string | undefined,
    questionId: string,
    language: string,
    code: string
  ) {
    const qId = new Types.ObjectId(questionId);
    const uId = new Types.ObjectId(userId);

    const question = await QuestionCoding.findById(qId);
    if (!question) throw new NotFoundError('Question not found');

    const testCases = question.hiddenTestCases.map((tc) => ({
      input: tc.input,
      expectedOutput: tc.expectedOutput,
    }));

    // If no hidden testcases, fallback to sample cases
    const casesToTest = testCases.length > 0 ? testCases : question.sampleTestCases.map((s) => ({ input: s.input, expectedOutput: s.output }));

    const evalResult = await SandboxRunner.evaluateBatch(language, code, casesToTest, question.timeLimitMs);

    // Record submission
    const submission = await SubmissionCoding.create({
      userId: uId,
      institutionId: institutionId ? new Types.ObjectId(institutionId) : undefined,
      questionId: qId,
      language,
      code,
      status: evalResult.overallStatus,
      executionTimeMs: evalResult.maxExecutionTimeMs,
      memoryUsedKb: evalResult.maxMemoryUsedKb,
      testCasesPassed: evalResult.passedCases,
      totalTestCases: evalResult.totalCases,
      errorLog: evalResult.firstFailedCase?.errorLog,
    });

    // Update question submission stats
    question.totalSubmissions += 1;
    if (evalResult.overallStatus === 'ACCEPTED') {
      question.acceptedSubmissions += 1;
    }
    await question.save();

    // If Accepted, check if already solved; if first time solve, update user score & solved count
    if (evalResult.overallStatus === 'ACCEPTED') {
      const priorAccepted = await SubmissionCoding.findOne({
        _id: { $ne: submission._id },
        userId: uId,
        questionId: qId,
        status: 'ACCEPTED',
      });

      if (!priorAccepted) {
        const difficultyPoints: Record<string, number> = {
          BEGINNER: 5,
          EASY: 10,
          MEDIUM: 20,
          HARD: 40,
          EXPERT: 80,
        };

        const points = difficultyPoints[question.difficulty] || 10;
        await User.findByIdAndUpdate(uId, {
          $inc: {
            'metrics.codingProblemsSolved': 1,
            'metrics.totalPoints': points,
          },
          $set: { 'metrics.lastActiveDate': new Date() },
        });
      }
    }

    return {
      submissionId: submission._id,
      status: submission.status,
      executionTimeMs: submission.executionTimeMs,
      memoryUsedKb: submission.memoryUsedKb,
      testCasesPassed: submission.testCasesPassed,
      totalTestCases: submission.totalTestCases,
      firstFailedCase: evalResult.firstFailedCase,
      createdAt: submission.createdAt,
    };
  }

  static async getSubmissions(userId: string, questionId: string) {
    return SubmissionCoding.find({
      userId: new Types.ObjectId(userId),
      questionId: new Types.ObjectId(questionId),
    })
      .select('-code')
      .sort({ createdAt: -1 })
      .limit(20);
  }

  static async createQuestion(
    data: any,
    institutionId?: string,
    isGlobal: boolean = true
  ) {
    const existing = await QuestionCoding.findOne({ slug: data.slug.toLowerCase() });
    if (existing) {
      throw new ConflictError(`Question with slug '${data.slug}' already exists`);
    }

    const question = await QuestionCoding.create({
      ...data,
      slug: data.slug.toLowerCase(),
      isGlobal,
      institutionId: institutionId ? new Types.ObjectId(institutionId) : undefined,
    });

    return question;
  }
}
