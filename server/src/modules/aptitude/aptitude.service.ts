import { Types } from 'mongoose';
import { QuestionAptitude, AptitudeSession, AptitudeCategory, AptitudeDifficulty } from './aptitude.model';
import { User } from '../user/user.model';
import { NotFoundError } from '../../core/utils/appError';

export class AptitudeService {
  static async getCategories() {
    const rawCategories: { category: string; count: number; subcategories: string[] }[] = [
      {
        category: 'QUANTITATIVE',
        count: 0,
        subcategories: ['Time and Work', 'Percentages', 'Profit and Loss', 'Speed Distance Time', 'Permutations & Combinations'],
      },
      {
        category: 'LOGICAL_REASONING',
        count: 0,
        subcategories: ['Syllogisms', 'Blood Relations', 'Seating Arrangements', 'Coding-Decoding', 'Data Sufficiency'],
      },
      {
        category: 'VERBAL_ABILITY',
        count: 0,
        subcategories: ['Sentence Correction', 'Vocabulary & Synonyms', 'Reading Comprehension', 'Para Jumbles'],
      },
      {
        category: 'TECHNICAL_MCQ',
        count: 0,
        subcategories: ['DBMS & SQL', 'Operating Systems', 'Computer Networks', 'Data Structures & OOP'],
      },
    ];

    // Compute live question counts per category
    const counts = await QuestionAptitude.aggregate([
      { $match: { status: 'PUBLISHED' } },
      { $group: { _id: '$category', total: { $sum: 1 } } },
    ]);

    const countMap = new Map<string, number>();
    counts.forEach((c) => countMap.set(c._id, c.total));

    return rawCategories.map((rc) => ({
      ...rc,
      count: countMap.get(rc.category) || 0,
    }));
  }

  static async getQuestions(
    filters: {
      category?: AptitudeCategory;
      subcategory?: string;
      difficulty?: AptitudeDifficulty;
      limit?: number;
      mode?: 'PRACTICE' | 'MOCK';
    }
  ) {
    const query: any = { status: 'PUBLISHED' };

    if (filters.category) query.category = filters.category;
    if (filters.subcategory) query.subcategory = new RegExp(`^${filters.subcategory}$`, 'i');
    if (filters.difficulty) query.difficulty = filters.difficulty;

    const limit = Math.min(50, Math.max(1, filters.limit || 15));

    const mQuery: any = QuestionAptitude.find(query).limit(limit);

    // In Mock mode, hide answer and explanation to prevent client inspection
    if (filters.mode === 'MOCK') {
      mQuery.select('-correctOptionId -explanation');
    }

    const questions = await mQuery;
    return questions;
  }

  static async checkAnswer(questionId: string, selectedOptionId: string) {
    const question = await QuestionAptitude.findById(questionId);
    if (!question) throw new NotFoundError('Question not found');

    const isCorrect = question.correctOptionId === selectedOptionId;

    return {
      questionId: question._id,
      selectedOptionId,
      isCorrect,
      correctOptionId: question.correctOptionId,
      explanation: question.explanation,
    };
  }

  static async submitSession(
    userId: string,
    institutionId: string | undefined,
    data: {
      category?: string;
      subcategory?: string;
      mode: 'TOPIC_PRACTICE' | 'TIMED_MOCK';
      totalTimeSpentSeconds: number;
      answers: { questionId: string; selectedOptionId: string; timeSpentSeconds: number }[];
    }
  ) {
    const uId = new Types.ObjectId(userId);
    const questionIds = data.answers.map((a) => new Types.ObjectId(a.questionId));

    const questions = await QuestionAptitude.find({ _id: { $in: questionIds } });
    const questionMap = new Map<string, any>();
    questions.forEach((q) => questionMap.set(q._id.toString(), q));

    let correctCount = 0;
    const evaluatedAnswers: any[] = [];

    for (const ans of data.answers) {
      const q = questionMap.get(ans.questionId);
      const isCorrect = q ? q.correctOptionId === ans.selectedOptionId : false;
      if (isCorrect) correctCount++;

      evaluatedAnswers.push({
        questionId: new Types.ObjectId(ans.questionId),
        selectedOptionId: ans.selectedOptionId,
        isCorrect,
        timeSpentSeconds: ans.timeSpentSeconds || 0,
      });
    }

    const totalQuestions = data.answers.length;
    const wrongCount = totalQuestions - correctCount;
    const accuracyPercentage = Math.round((correctCount / totalQuestions) * 100);
    const averageSpeedSeconds = Math.round(data.totalTimeSpentSeconds / totalQuestions);

    const session = await AptitudeSession.create({
      userId: uId,
      institutionId: institutionId ? new Types.ObjectId(institutionId) : undefined,
      category: data.category,
      subcategory: data.subcategory,
      mode: data.mode,
      totalQuestions,
      correctCount,
      wrongCount,
      accuracyPercentage,
      totalTimeSpentSeconds: data.totalTimeSpentSeconds,
      averageSpeedSeconds,
      answers: evaluatedAnswers,
    });

    // Update user aptitude metrics & award points
    const pointsEarned = correctCount * 5;
    await User.findByIdAndUpdate(uId, {
      $inc: {
        'metrics.aptitudeTestsTaken': 1,
        'metrics.totalPoints': pointsEarned,
      },
      $set: { 'metrics.lastActiveDate': new Date() },
    });

    return {
      sessionId: session._id,
      totalQuestions,
      correctCount,
      wrongCount,
      accuracyPercentage,
      totalTimeSpentSeconds: data.totalTimeSpentSeconds,
      averageSpeedSeconds,
      pointsEarned,
      createdAt: session.createdAt,
    };
  }

  static async getStudentAnalytics(userId: string) {
    const uId = new Types.ObjectId(userId);

    const sessions = await AptitudeSession.find({ userId: uId }).sort({ createdAt: -1 }).limit(20);

    if (sessions.length === 0) {
      return {
        totalSessions: 0,
        overallAccuracy: 0,
        averageSpeedSeconds: 0,
        categoryBreakdown: [],
      };
    }

    let totalAnswered = 0;
    let totalCorrect = 0;
    let totalTime = 0;

    sessions.forEach((s) => {
      totalAnswered += s.totalQuestions;
      totalCorrect += s.correctCount;
      totalTime += s.totalTimeSpentSeconds;
    });

    const overallAccuracy = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;
    const avgSpeed = totalAnswered > 0 ? Math.round(totalTime / totalAnswered) : 0;

    return {
      totalSessions: sessions.length,
      overallAccuracy,
      averageSpeedSeconds: avgSpeed,
      recentSessions: sessions.map((s) => ({
        id: s._id,
        category: s.category || 'General Aptitude',
        mode: s.mode,
        accuracyPercentage: s.accuracyPercentage,
        averageSpeedSeconds: s.averageSpeedSeconds,
        totalQuestions: s.totalQuestions,
        createdAt: s.createdAt,
      })),
    };
  }

  static async createQuestion(data: any, institutionId?: string, isGlobal: boolean = true) {
    const question = await QuestionAptitude.create({
      ...data,
      isGlobal,
      institutionId: institutionId ? new Types.ObjectId(institutionId) : undefined,
      status: 'PUBLISHED',
    });
    return question;
  }
}
