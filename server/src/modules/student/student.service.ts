import { Types } from 'mongoose';
import { User } from '../user/user.model';
import { Department, Batch, Class } from '../tenant/tenant.model';
import { hashPassword } from '../../core/utils/password';
import { ConflictError, NotFoundError } from '../../core/utils/appError';
import { parseStudentCSV, ParsedStudentRow } from './student.bulk';

export class StudentService {
  static async createStudent(
    tenantId: string,
    data: {
      firstName: string;
      lastName: string;
      email: string;
      rollNumber: string;
      departmentId?: string;
      batchId?: string;
      classId?: string;
      course?: string;
      semester?: number;
      section?: string;
      password?: string;
    }
  ) {
    const instId = new Types.ObjectId(tenantId);

    // Check duplicate email
    const existingEmail = await User.findOne({ email: data.email.toLowerCase() });
    if (existingEmail) {
      throw new ConflictError(`User with email '${data.email}' already exists`);
    }

    // Check duplicate roll number in this institution
    const existingRoll = await User.findOne({
      institutionId: instId,
      rollNumber: data.rollNumber.toUpperCase(),
    });
    if (existingRoll) {
      throw new ConflictError(`Roll number '${data.rollNumber}' is already registered in this institution`);
    }

    // Verify foreign keys if provided
    const [dept, batch, cls] = await Promise.all([
      data.departmentId ? Department.findOne({ _id: new Types.ObjectId(data.departmentId), institutionId: instId }) : Promise.resolve(null),
      data.batchId ? Batch.findOne({ _id: new Types.ObjectId(data.batchId), institutionId: instId }) : Promise.resolve(null),
      data.classId ? Class.findOne({ _id: new Types.ObjectId(data.classId), institutionId: instId }) : Promise.resolve(null),
    ]);

    if (data.departmentId && !dept) throw new NotFoundError('Department not found in this institution');
    if (data.batchId && !batch) throw new NotFoundError('Batch not found in this institution');
    if (data.classId && !cls) throw new NotFoundError('Class not found in this institution');

    const passwordHash = await hashPassword(data.password || 'Password@123');
    const resolvedCourse = data.course?.trim() || dept?.name || undefined;
    const resolvedSemester = data.semester ? Number(data.semester) : cls?.semester || undefined;
    const resolvedSection = data.section?.trim().toUpperCase() || cls?.section || undefined;

    const student = await User.create({
      institutionId: instId,
      email: data.email.toLowerCase(),
      passwordHash,
      role: 'STUDENT',
      firstName: data.firstName,
      lastName: data.lastName,
      rollNumber: data.rollNumber.toUpperCase(),
      departmentId: dept?._id,
      batchId: batch?._id,
      classId: cls?._id,
      course: resolvedCourse,
      semester: resolvedSemester,
      section: resolvedSection,
      academicHistory: batch && cls && dept
        ? [
            {
              batchId: batch._id,
              classId: cls._id,
              departmentId: dept._id,
              academicYear: batch.currentAcademicYear,
              semester: cls.semester,
              transitionedAt: new Date(),
              reason: 'Initial enrollment',
            },
          ]
        : [],
      status: 'ACTIVE',
    });

    return student;
  }

  static async bulkImportStudents(tenantId: string, csvContent: string, defaultPassword: string = 'Password@123') {
    const instId = new Types.ObjectId(tenantId);
    const { validRows, errors: parseErrors } = parseStudentCSV(csvContent);

    if (validRows.length === 0) {
      return {
        importedCount: 0,
        skippedCount: parseErrors.length,
        errors: parseErrors,
      };
    }

    // Cache departments, batches, and classes for this institution
    const [departments, batches, classes] = await Promise.all([
      Department.find({ institutionId: instId }),
      Batch.find({ institutionId: instId }),
      Class.find({ institutionId: instId }).populate('batchId departmentId'),
    ]);

    const deptMap = new Map<string, Types.ObjectId>();
    departments.forEach((d) => deptMap.set(d.code.toUpperCase(), d._id as Types.ObjectId));

    const batchMap = new Map<string, Types.ObjectId>();
    batches.forEach((b) => batchMap.set(b.name.toLowerCase(), b._id as Types.ObjectId));

    const passwordHash = await hashPassword(defaultPassword);
    const executionErrors: { row: number; error: string; raw: string }[] = [...parseErrors];
    const studentsToInsert: any[] = [];

    // Track emails and roll numbers within current batch to prevent intra-file duplicates
    const seenEmails = new Set<string>();
    const seenRolls = new Set<string>();

    for (let i = 0; i < validRows.length; i++) {
      const row = validRows[i];
      const rowNum = i + 2; // account for header

      if (seenEmails.has(row.email)) {
        executionErrors.push({ row: rowNum, error: `Duplicate email '${row.email}' in upload file`, raw: JSON.stringify(row) });
        continue;
      }
      if (seenRolls.has(row.rollNumber)) {
        executionErrors.push({ row: rowNum, error: `Duplicate roll number '${row.rollNumber}' in upload file`, raw: JSON.stringify(row) });
        continue;
      }

      seenEmails.add(row.email);
      seenRolls.add(row.rollNumber);

      const deptId = deptMap.get(row.departmentCode.toUpperCase());
      if (!deptId) {
        executionErrors.push({ row: rowNum, error: `Department code '${row.departmentCode}' not found in institution`, raw: JSON.stringify(row) });
        continue;
      }

      const batchId = batchMap.get(row.batchName.toLowerCase());
      if (!batchId) {
        executionErrors.push({ row: rowNum, error: `Batch name '${row.batchName}' not found in institution`, raw: JSON.stringify(row) });
        continue;
      }

      // Find matching class
      const matchingClass = classes.find(
        (c: any) =>
          c.departmentId?._id?.toString() === deptId.toString() &&
          c.batchId?._id?.toString() === batchId.toString() &&
          c.section.toUpperCase() === row.section.toUpperCase()
      );

      if (!matchingClass) {
        executionErrors.push({
          row: rowNum,
          error: `No class section found for Dept: '${row.departmentCode}', Batch: '${row.batchName}', Section: '${row.section}'`,
          raw: JSON.stringify(row),
        });
        continue;
      }

      studentsToInsert.push({
        institutionId: instId,
        email: row.email.toLowerCase(),
        passwordHash,
        role: 'STUDENT',
        firstName: row.firstName,
        lastName: row.lastName,
        rollNumber: row.rollNumber.toUpperCase(),
        departmentId: deptId,
        batchId: batchId,
        classId: matchingClass._id,
        academicHistory: [
          {
            batchId,
            classId: matchingClass._id,
            departmentId: deptId,
            academicYear: 1,
            semester: matchingClass.semester,
            transitionedAt: new Date(),
            reason: 'Bulk CSV onboarding',
          },
        ],
        status: 'ACTIVE',
      });
    }

    let insertedCount = 0;
    if (studentsToInsert.length > 0) {
      try {
        // ordered: false allows valid rows to insert even if one fails uniqueness
        const result = await User.insertMany(studentsToInsert, { ordered: false });
        insertedCount = result.length;
      } catch (err: any) {
        if (err.insertedDocs) {
          insertedCount = err.insertedDocs.length;
        }
        if (err.writeErrors) {
          err.writeErrors.forEach((we: any) => {
            executionErrors.push({
              row: 0,
              error: `Database write error: ${we.errmsg || 'Duplicate key or constraint failure'}`,
              raw: '',
            });
          });
        }
      }
    }

    return {
      totalProcessed: validRows.length + parseErrors.length,
      importedCount: insertedCount,
      failedCount: executionErrors.length,
      errors: executionErrors,
    };
  }

  static async getStudents(
    tenantId: string,
    filters: {
      departmentId?: string;
      batchId?: string;
      classId?: string;
      search?: string;
      status?: string;
      page?: number;
      limit?: number;
    },
    requester?: { userId?: string; role?: string }
  ) {
    const instId = new Types.ObjectId(tenantId);
    const query: any = { institutionId: instId, role: 'STUDENT' };

    const page = Math.max(1, filters.page || 1);
    const limit = Math.min(100, Math.max(1, filters.limit || 20));

    if (requester?.role === 'FACULTY' && requester.userId) {
      const faculty = await User.findById(requester.userId).select('assignedCohorts').lean();
      const cohorts = (faculty?.assignedCohorts || []).filter(
        (c) => c.course && c.semester !== undefined && c.section
      );
      if (cohorts.length === 0) {
        return {
          students: [],
          meta: { page, limit, totalCount: 0, totalPages: 0 },
        };
      }
      const escapeRegex = (val: string) => val.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const cohortOr = cohorts.map((c) => ({
        course: new RegExp(`^${escapeRegex(c.course.trim())}$`, 'i'),
        semester: Number(c.semester),
        section: new RegExp(`^${escapeRegex(c.section.trim())}$`, 'i'),
      }));
      query.$and = [...(query.$and || []), { $or: cohortOr }];
    }

    if (filters.departmentId) query.departmentId = new Types.ObjectId(filters.departmentId);
    if (filters.batchId) query.batchId = new Types.ObjectId(filters.batchId);
    if (filters.classId) query.classId = new Types.ObjectId(filters.classId);
    if (filters.status) query.status = filters.status;

    if (filters.search) {
      const searchRegex = new RegExp(filters.search, 'i');
      query.$or = [{ firstName: searchRegex }, { lastName: searchRegex }, { email: searchRegex }, { rollNumber: searchRegex }];
    }

    const skip = (page - 1) * limit;

    const [students, totalCount] = await Promise.all([
      User.find(query)
        .select('-passwordHash -refreshTokenHash')
        .populate('departmentId', 'name code')
        .populate('batchId', 'name graduationYear currentAcademicYear')
        .populate('classId', 'section semester')
        .sort({ rollNumber: 1 })
        .skip(skip)
        .limit(limit),
      User.countDocuments(query),
    ]);

    return {
      students,
      meta: {
        page,
        limit,
        totalCount,
        totalPages: Math.ceil(totalCount / limit),
      },
    };
  }

  static async getStudentById(tenantId: string, studentId: string) {
    const student = await User.findOne({
      _id: new Types.ObjectId(studentId),
      institutionId: new Types.ObjectId(tenantId),
      role: 'STUDENT',
    })
      .select('-passwordHash -refreshTokenHash')
      .populate('departmentId', 'name code')
      .populate('batchId', 'name graduationYear currentAcademicYear')
      .populate('classId', 'section semester')
      .populate('academicHistory.batchId', 'name')
      .populate('academicHistory.departmentId', 'name code')
      .populate('academicHistory.classId', 'section semester');

    if (!student) {
      throw new NotFoundError('Student not found');
    }

    return student;
  }

  static async transferStudent(tenantId: string, studentId: string, targetClassId: string, reason: string) {
    const instId = new Types.ObjectId(tenantId);

    const student = await User.findOne({ _id: new Types.ObjectId(studentId), institutionId: instId });
    if (!student) throw new NotFoundError('Student not found in this institution');

    const targetClass = await Class.findOne({ _id: new Types.ObjectId(targetClassId), institutionId: instId }).populate('batchId departmentId');
    if (!targetClass) throw new NotFoundError('Target class section not found in this institution');

    // Archive previous state into academic history
    student.academicHistory.push({
      batchId: student.batchId,
      classId: student.classId,
      departmentId: student.departmentId,
      transitionedAt: new Date(),
      reason,
    });

    // Update current placement
    student.classId = targetClass._id as Types.ObjectId;
    student.batchId = targetClass.batchId?._id as Types.ObjectId;
    student.departmentId = targetClass.departmentId?._id as Types.ObjectId;

    await student.save();

    return student.populate([
      { path: 'departmentId', select: 'name code' },
      { path: 'batchId', select: 'name graduationYear' },
      { path: 'classId', select: 'section semester' },
    ]);
  }

  static async updateStudentStatus(tenantId: string, studentId: string, status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED') {
    const student = await User.findOneAndUpdate(
      { _id: new Types.ObjectId(studentId), institutionId: new Types.ObjectId(tenantId) },
      { status },
      { new: true }
    ).select('-passwordHash -refreshTokenHash');

    if (!student) throw new NotFoundError('Student not found');
    return student;
  }

  static async updateStudentProfile(tenantId: string, studentId: string, profileData: any) {
    const student = await User.findOne({
      _id: new Types.ObjectId(studentId),
      institutionId: new Types.ObjectId(tenantId),
    });

    if (!student) throw new NotFoundError('Student not found');

    if (profileData.phoneNumber !== undefined) student.profile.phoneNumber = profileData.phoneNumber;
    if (profileData.githubUrl !== undefined) student.profile.githubUrl = profileData.githubUrl;
    if (profileData.linkedinUrl !== undefined) student.profile.linkedinUrl = profileData.linkedinUrl;
    if (profileData.portfolioUrl !== undefined) student.profile.portfolioUrl = profileData.portfolioUrl;
    if (profileData.skills !== undefined) student.profile.skills = profileData.skills;
    if (profileData.targetDomain !== undefined) student.profile.targetDomain = profileData.targetDomain;
    if (profileData.cgpa !== undefined) student.profile.cgpa = profileData.cgpa;

    await student.save();
    const studentObj = student.toObject();
    delete (studentObj as any).passwordHash;
    delete (studentObj as any).refreshTokenHash;
    return studentObj;
  }
}
