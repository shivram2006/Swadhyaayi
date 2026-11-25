import { Types } from 'mongoose';
import { Department, Batch, Class, Institution } from './tenant.model';
import { User } from '../user/user.model';
import { ConflictError, NotFoundError, ForbiddenError } from '../../core/utils/appError';

export class TenantService {
  static async createDepartment(institutionId: string, data: { name: string; code: string }) {
    const existing = await Department.findOne({
      institutionId: new Types.ObjectId(institutionId),
      code: data.code.toUpperCase(),
    });

    if (existing) {
      throw new ConflictError(`Department code '${data.code.toUpperCase()}' already exists in this institution`);
    }

    const dept = await Department.create({
      institutionId: new Types.ObjectId(institutionId),
      name: data.name,
      code: data.code.toUpperCase(),
      status: 'ACTIVE',
    });

    return dept;
  }

  static async getDepartments(institutionId: string) {
    return Department.find({ institutionId: new Types.ObjectId(institutionId) }).sort({ name: 1 });
  }

  static async createBatch(
    institutionId: string,
    data: { name: string; graduationYear: number; currentAcademicYear: number }
  ) {
    const batch = await Batch.create({
      institutionId: new Types.ObjectId(institutionId),
      name: data.name,
      graduationYear: data.graduationYear,
      currentAcademicYear: data.currentAcademicYear || 1,
      status: 'ACTIVE',
    });

    return batch;
  }

  static async getBatches(institutionId: string) {
    return Batch.find({ institutionId: new Types.ObjectId(institutionId) }).sort({ graduationYear: 1 });
  }

  static async upgradeBatch(institutionId: string, batchId: string) {
    const batch = await Batch.findOne({
      _id: new Types.ObjectId(batchId),
      institutionId: new Types.ObjectId(institutionId),
    });

    if (!batch) {
      throw new NotFoundError('Batch not found');
    }

    if (batch.status === 'GRADUATED' || batch.status === 'ARCHIVED') {
      throw new ConflictError('Cannot upgrade an archived or graduated batch');
    }

    const nextYear = batch.currentAcademicYear + 1;
    if (nextYear > 4) {
      batch.currentAcademicYear = 4;
      batch.status = 'GRADUATED';
    } else {
      batch.currentAcademicYear = nextYear;
    }

    await batch.save();

    // Increment semesters for classes tied to this batch
    await Class.updateMany(
      { batchId: batch._id, institutionId: new Types.ObjectId(institutionId) },
      { $inc: { semester: 2 } } // 1 academic year = 2 semesters
    );

    return batch;
  }

  static async createClass(
    institutionId: string,
    data: { departmentId: string; batchId: string; section: string; semester: number }
  ) {
    // Verify department belongs to this institution
    const dept = await Department.findOne({
      _id: new Types.ObjectId(data.departmentId),
      institutionId: new Types.ObjectId(institutionId),
    });
    if (!dept) {
      throw new NotFoundError('Department not found in this institution');
    }

    // Verify batch belongs to this institution
    const batch = await Batch.findOne({
      _id: new Types.ObjectId(data.batchId),
      institutionId: new Types.ObjectId(institutionId),
    });
    if (!batch) {
      throw new NotFoundError('Batch not found in this institution');
    }

    const existingClass = await Class.findOne({
      institutionId: new Types.ObjectId(institutionId),
      departmentId: dept._id,
      batchId: batch._id,
      section: data.section.toUpperCase(),
    });

    if (existingClass) {
      throw new ConflictError(
        `Class for Department '${dept.code}', Batch '${batch.name}', Section '${data.section.toUpperCase()}' already exists`
      );
    }

    const newClass = await Class.create({
      institutionId: new Types.ObjectId(institutionId),
      departmentId: dept._id,
      batchId: batch._id,
      section: data.section.toUpperCase(),
      semester: data.semester || 1,
    });

    return newClass.populate([
      { path: 'departmentId', select: 'name code' },
      { path: 'batchId', select: 'name graduationYear' },
    ]);
  }

  static async getClasses(institutionId: string) {
    return Class.find({ institutionId: new Types.ObjectId(institutionId) })
      .populate('departmentId', 'name code')
      .populate('batchId', 'name graduationYear currentAcademicYear')
      .sort({ departmentId: 1, batchId: 1, section: 1 });
  }

  static async getTenantOverview(institutionId: string) {
    const instId = new Types.ObjectId(institutionId);

    const [institution, totalDepts, totalBatches, totalClasses, totalStudents, totalFaculty] = await Promise.all([
      Institution.findById(instId),
      Department.countDocuments({ institutionId: instId, status: 'ACTIVE' }),
      Batch.countDocuments({ institutionId: instId, status: 'ACTIVE' }),
      Class.countDocuments({ institutionId: instId }),
      User.countDocuments({ institutionId: instId, role: 'STUDENT', status: 'ACTIVE' }),
      User.countDocuments({ institutionId: instId, role: 'FACULTY', status: 'ACTIVE' }),
    ]);

    if (!institution) {
      throw new NotFoundError('Institution not found');
    }

    return {
      institution: {
        id: institution._id,
        name: institution.name,
        code: institution.code,
        status: institution.status,
        settings: institution.settings,
      },
      metrics: {
        totalDepartments: totalDepts,
        totalBatches: totalBatches,
        totalClasses: totalClasses,
        totalStudents,
        totalFaculty,
      },
    };
  }

  static async getFacultyMembers(institutionId: string) {
    return User.find({
      institutionId: new Types.ObjectId(institutionId),
      role: 'FACULTY',
      status: { $ne: 'SUSPENDED' },
    })
      .select('firstName lastName email assignedCohorts status')
      .sort({ firstName: 1, lastName: 1 })
      .lean();
  }

  static async getMyAssignedCohorts(userId: string) {
    const user = await User.findById(userId).select('assignedCohorts').lean();
    return user?.assignedCohorts || [];
  }

  static async assignFacultyCohorts(
    institutionId: string,
    facultyId: string,
    cohorts: { course: string; semester: number; section: string }[]
  ) {
    const normalized = (cohorts || [])
      .filter((c) => c.course?.trim() && c.section?.trim() && Number(c.semester) > 0)
      .map((c) => ({
        course: c.course.trim(),
        semester: Number(c.semester),
        section: c.section.trim().toUpperCase(),
      }));

    // Deduplicate
    const uniqueMap = new Map<string, { course: string; semester: number; section: string }>();
    normalized.forEach((c) => {
      uniqueMap.set(`${c.course.toLowerCase()}|${c.semester}|${c.section}`, c);
    });

    const updated = await User.findOneAndUpdate(
      {
        _id: new Types.ObjectId(facultyId),
        institutionId: new Types.ObjectId(institutionId),
        role: 'FACULTY',
      },
      { $set: { assignedCohorts: Array.from(uniqueMap.values()) } },
      { new: true }
    ).select('firstName lastName email assignedCohorts');

    if (!updated) {
      throw new NotFoundError('Faculty member not found in this institution');
    }

    return updated;
  }
}
