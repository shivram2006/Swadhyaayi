import { Types } from 'mongoose';
import { Opportunity, JobApplication, IOpportunity, IJobApplication, ApplicationStage } from './opportunity.model';
import { OpportunityMatcher, ICandidateProfileForMatch } from './opportunity.matcher';
import { User } from '../user/user.model';
import { Batch } from '../tenant/tenant.model';
import { NotFoundError, ForbiddenError, ValidationError } from '../../core/utils/appError';

export class OpportunityService {
  static async getOpportunities(
    filters: {
      type?: string;
      workMode?: string;
      source?: string;
      search?: string;
      onlyEligible?: boolean;
    },
    studentUser?: any,
    institutionId?: string
  ): Promise<any[]> {
    const query: any = { status: 'ACTIVE' };

    if (filters.type) query.type = filters.type;
    if (filters.workMode) query.workMode = filters.workMode;
    if (filters.source) query.source = filters.source;
    if (filters.search) {
      const regex = new RegExp(filters.search, 'i');
      query.$or = [{ title: regex }, { 'company.name': regex }, { 'requirements.skills': regex }];
    }

    const opportunities = await Opportunity.find(query).sort({ createdAt: -1 }).lean();

    // If no student context, return plain opportunities
    if (!studentUser || studentUser.role !== 'STUDENT') {
      return opportunities;
    }

    // Load full student profile for dynamic match scoring
    const studentDoc = await User.findById(studentUser.userId || studentUser._id).lean();
    let graduationYear: string | undefined;

    if (studentDoc?.batchId) {
      const batchDoc = await Batch.findById(studentDoc.batchId).select('graduationYear').lean();
      if (batchDoc?.graduationYear) graduationYear = batchDoc.graduationYear.toString();
    }

    const candidateProfile: ICandidateProfileForMatch = {
      skills: studentDoc?.profile?.skills || [],
      cgpa: studentDoc?.profile?.cgpa,
      graduationYear,
      codingProblemsSolved: studentDoc?.metrics?.codingProblemsSolved || 0,
      departmentId: studentDoc?.departmentId?.toString(),
    };

    // Load student existing applications
    const existingApps = await JobApplication.find({
      institutionId: new Types.ObjectId(institutionId || studentDoc?.institutionId?.toString()),
      userId: studentDoc?._id,
    })
      .select('opportunityId stage appliedDate')
      .lean();

    const appMap = new Map<string, any>();
    existingApps.forEach((app) => {
      appMap.set(app.opportunityId.toString(), app);
    });

    let enriched = opportunities.map((opp) => {
      const match = OpportunityMatcher.calculate(opp.requirements || {}, candidateProfile);
      const app = appMap.get(opp._id.toString());

      return {
        ...opp,
        matchDetails: match,
        applicationStatus: app
          ? {
              isApplied: true,
              stage: app.stage,
              appliedDate: app.appliedDate,
            }
          : {
              isApplied: false,
              stage: null,
              appliedDate: null,
            },
      };
    });

    if (filters.onlyEligible) {
      enriched = enriched.filter((o) => o.matchDetails.isEligible);
    }

    // Sort by Match Score descending
    enriched.sort((a, b) => b.matchDetails.matchScore - a.matchDetails.matchScore);

    return enriched;
  }

  static async getOpportunityById(id: string, studentUser?: any): Promise<any> {
    if (!Types.ObjectId.isValid(id)) {
      throw new ValidationError('Invalid opportunity ID format');
    }

    const opp = await Opportunity.findById(id).lean();
    if (!opp) {
      throw new NotFoundError('Opportunity not found');
    }

    if (!studentUser || studentUser.role !== 'STUDENT') {
      return opp;
    }

    const studentDoc = await User.findById(studentUser.userId || studentUser._id).lean();
    let graduationYear: string | undefined;

    if (studentDoc?.batchId) {
      const batchDoc = await Batch.findById(studentDoc.batchId).select('graduationYear').lean();
      if (batchDoc?.graduationYear) graduationYear = batchDoc.graduationYear.toString();
    }

    const candidateProfile: ICandidateProfileForMatch = {
      skills: studentDoc?.profile?.skills || [],
      cgpa: studentDoc?.profile?.cgpa,
      graduationYear,
      codingProblemsSolved: studentDoc?.metrics?.codingProblemsSolved || 0,
    };

    const match = OpportunityMatcher.calculate(opp.requirements || {}, candidateProfile);

    const app = await JobApplication.findOne({
      opportunityId: opp._id,
      userId: studentDoc?._id,
    }).lean();

    return {
      ...opp,
      matchDetails: match,
      applicationStatus: app
        ? {
            isApplied: true,
            stage: app.stage,
            appliedDate: app.appliedDate,
            applicationId: app._id,
          }
        : {
            isApplied: false,
            stage: null,
            appliedDate: null,
          },
    };
  }

  static async createOpportunity(data: any, institutionId?: string): Promise<IOpportunity> {
    const opp = new Opportunity({
      ...data,
      institutionId: institutionId ? new Types.ObjectId(institutionId) : null,
    });
    await opp.save();
    return opp;
  }

  static async createApplication(
    opportunityId: string,
    resumeId: string | undefined,
    stage: ApplicationStage,
    notes: string | undefined,
    institutionId: string,
    userId: string
  ): Promise<IJobApplication> {
    if (!Types.ObjectId.isValid(opportunityId)) {
      throw new ValidationError('Invalid opportunity ID');
    }

    const opp = await Opportunity.findById(opportunityId);
    if (!opp) {
      throw new NotFoundError('Opportunity not found');
    }

    let existing = await JobApplication.findOne({
      opportunityId: opp._id,
      userId: new Types.ObjectId(userId),
    });

    if (existing) {
      existing.stage = stage;
      if (notes) existing.notes = notes;
      if (resumeId && Types.ObjectId.isValid(resumeId)) existing.resumeId = new Types.ObjectId(resumeId);
      existing.stageHistory.push({
        stage,
        timestamp: new Date(),
        notes: notes || `Moved to ${stage}`,
      });
      await existing.save();
      return existing;
    }

    const application = new JobApplication({
      institutionId: new Types.ObjectId(institutionId),
      userId: new Types.ObjectId(userId),
      opportunityId: opp._id,
      resumeId: resumeId && Types.ObjectId.isValid(resumeId) ? new Types.ObjectId(resumeId) : undefined,
      stage,
      appliedDate: stage === 'SAVED' ? undefined : new Date(),
      stageHistory: [
        {
          stage,
          timestamp: new Date(),
          notes: notes || `Application initiated in ${stage}`,
        },
      ],
      notes: notes || '',
    });

    await application.save();
    return application;
  }

  static async getStudentApplications(institutionId: string, userId: string): Promise<IJobApplication[]> {
    return JobApplication.find({
      institutionId: new Types.ObjectId(institutionId),
      userId: new Types.ObjectId(userId),
    })
      .populate('opportunityId', 'title company type workMode location salary applyUrl')
      .sort({ updatedAt: -1 })
      .lean() as unknown as IJobApplication[];
  }

  static async updateApplicationStage(
    id: string,
    stage: ApplicationStage,
    notes?: string,
    interviewDate?: string,
    offerDetails?: any,
    institutionId?: string,
    userId?: string
  ): Promise<IJobApplication> {
    if (!Types.ObjectId.isValid(id)) {
      throw new ValidationError('Invalid application ID');
    }

    const app = await JobApplication.findById(id);
    if (!app) {
      throw new NotFoundError('Job application not found');
    }

    if (userId && app.userId.toString() !== userId) {
      throw new ForbiddenError('You can only update your own applications');
    }

    app.stage = stage;
    if (notes) app.notes = notes;
    if (interviewDate) app.interviewDate = new Date(interviewDate);
    if (offerDetails) app.offerDetails = offerDetails;

    app.stageHistory.push({
      stage,
      timestamp: new Date(),
      notes: notes || `Stage updated to ${stage}`,
    });

    await app.save();
    return app;
  }

  static async deleteApplication(id: string, userId: string): Promise<{ message: string }> {
    if (!Types.ObjectId.isValid(id)) {
      throw new ValidationError('Invalid application ID');
    }

    const app = await JobApplication.findById(id);
    if (!app) {
      throw new NotFoundError('Job application not found');
    }

    if (app.userId.toString() !== userId) {
      throw new ForbiddenError('You can only delete your own applications');
    }

    await JobApplication.deleteOne({ _id: app._id });
    return { message: 'Application deleted successfully' };
  }

  static async getPlacementAnalytics(institutionId: string): Promise<any> {
    const instId = new Types.ObjectId(institutionId);

    const totalOpportunities = await Opportunity.countDocuments({
      $or: [{ institutionId: null }, { institutionId: instId }],
    });

    const applications = await JobApplication.find({ institutionId: instId }).lean();
    const totalApplications = applications.length;

    const stageFunnel = {
      SAVED: 0,
      APPLIED: 0,
      OA_SCHEDULED: 0,
      INTERVIEW: 0,
      OFFERED: 0,
      REJECTED: 0,
    };

    let totalCtc = 0;
    let maxCtc = 0;
    let offersCount = 0;

    applications.forEach((app) => {
      if (stageFunnel[app.stage] !== undefined) {
        stageFunnel[app.stage]++;
      }
      if (app.stage === 'OFFERED' && app.offerDetails?.ctc) {
        offersCount++;
        totalCtc += app.offerDetails.ctc;
        if (app.offerDetails.ctc > maxCtc) maxCtc = app.offerDetails.ctc;
      }
    });

    const averageCtc = offersCount > 0 ? Math.round((totalCtc / offersCount) * 10) / 10 : 0;

    return {
      totalOpportunities,
      totalApplications,
      totalOffers: stageFunnel.OFFERED,
      interviewPipeline: stageFunnel.INTERVIEW + stageFunnel.OA_SCHEDULED,
      averageCtc,
      highestCtc: maxCtc,
      stageFunnel,
    };
  }
}
