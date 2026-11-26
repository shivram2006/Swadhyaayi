import { Institution } from '../tenant/tenant.model';
import { User, IUserDocument } from '../user/user.model';
import { hashPassword, verifyPassword } from '../../core/utils/password';
import { generateAccessToken, generateRefreshToken, verifyRefreshToken } from '../../core/utils/jwt';
import { ConflictError, UnauthorizedError, NotFoundError } from '../../core/utils/appError';

export class AuthService {
  static async registerInstitution(data: {
    institutionName: string;
    institutionCode: string;
    contactEmail: string;
    adminFirstName: string;
    adminLastName: string;
    adminEmail: string;
    adminPassword: string;
  }) {
    const existingInst = await Institution.findOne({ code: data.institutionCode.toLowerCase() });
    if (existingInst) {
      throw new ConflictError(`Institution code '${data.institutionCode}' is already registered`);
    }

    const existingUser = await User.findOne({ email: data.adminEmail.toLowerCase() });
    if (existingUser) {
      throw new ConflictError(`Email '${data.adminEmail}' is already registered`);
    }

    const institution = await Institution.create({
      name: data.institutionName,
      code: data.institutionCode.toLowerCase(),
      contactEmail: data.contactEmail.toLowerCase(),
      status: 'ACTIVE',
    });

    const passwordHash = await hashPassword(data.adminPassword);
    const adminUser = await User.create({
      institutionId: institution._id,
      email: data.adminEmail.toLowerCase(),
      passwordHash,
      role: 'INSTITUTION_ADMIN',
      firstName: data.adminFirstName,
      lastName: data.adminLastName,
      status: 'ACTIVE',
    });

    const tokenPayload = {
      userId: adminUser._id.toString(),
      role: adminUser.role,
      institutionId: institution._id.toString(),
    };

    const accessToken = generateAccessToken(tokenPayload);
    const refreshToken = generateRefreshToken(tokenPayload);

    adminUser.refreshTokenHash = await hashPassword(refreshToken);
    await adminUser.save();

    return {
      institution: {
        id: institution._id,
        name: institution.name,
        code: institution.code,
      },
      user: {
        id: adminUser._id,
        email: adminUser.email,
        firstName: adminUser.firstName,
        lastName: adminUser.lastName,
        role: adminUser.role,
      },
      tokens: {
        accessToken,
        refreshToken,
      },
    };
  }

  static async login(email: string, plainTextPassword: string) {
    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) {
      throw new UnauthorizedError('Invalid email or password');
    }

    const isMatch = await verifyPassword(plainTextPassword, user.passwordHash);
    if (!isMatch) {
      throw new UnauthorizedError('Invalid email or password');
    }

    if (user.status !== 'ACTIVE') {
      throw new UnauthorizedError('Your account has been deactivated or suspended');
    }

    let institution = null;
    if (user.institutionId) {
      institution = await Institution.findById(user.institutionId);
      if (institution && institution.status !== 'ACTIVE') {
        throw new UnauthorizedError('Your institution subscription is suspended or inactive');
      }
    }

    const tokenPayload = {
      userId: user._id.toString(),
      role: user.role,
      institutionId: user.institutionId?.toString(),
    };

    const accessToken = generateAccessToken(tokenPayload);
    const refreshToken = generateRefreshToken(tokenPayload);

    user.refreshTokenHash = await hashPassword(refreshToken);
    user.metrics.lastActiveDate = new Date();
    await user.save();

    return {
      user: {
        id: user._id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
        institutionId: user.institutionId,
        institutionName: institution?.name,
        isSubscribed: !!user.isSubscribed,
        subscriptionPlan: user.subscriptionPlan,
      },
      tokens: {
        accessToken,
        refreshToken,
      },
    };
  }

  static async refreshToken(incomingRefreshToken: string) {
    let payload;
    try {
      payload = verifyRefreshToken(incomingRefreshToken);
    } catch {
      throw new UnauthorizedError('Invalid or expired refresh token');
    }

    const user = await User.findById(payload.userId);
    if (!user || !user.refreshTokenHash) {
      throw new UnauthorizedError('Session terminated. Please login again');
    }

    const isMatch = await verifyPassword(incomingRefreshToken, user.refreshTokenHash);
    if (!isMatch) {
      // Possible token reuse attack - revoke token hash
      user.refreshTokenHash = undefined;
      await user.save();
      throw new UnauthorizedError('Token reuse detected. Session invalidated for security');
    }

    const tokenPayload = {
      userId: user._id.toString(),
      role: user.role,
      institutionId: user.institutionId?.toString(),
    };

    const newAccessToken = generateAccessToken(tokenPayload);
    const newRefreshToken = generateRefreshToken(tokenPayload);

    user.refreshTokenHash = await hashPassword(newRefreshToken);
    await user.save();

    return {
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
    };
  }

  static async logout(userId: string) {
    const user = await User.findById(userId);
    if (user) {
      user.refreshTokenHash = undefined;
      await user.save();
    }
  }

  static async getMe(userId: string) {
    const user = await User.findById(userId)
      .select('-passwordHash -refreshTokenHash')
      .populate('departmentId', 'name code')
      .populate('batchId', 'name graduationYear currentAcademicYear')
      .populate('classId', 'section semester');

    if (!user) {
      throw new NotFoundError('User profile not found');
    }

    let institution = null;
    if (user.institutionId) {
      institution = await Institution.findById(user.institutionId).select('name code status settings');
    }

    return {
      user,
      institution,
    };
  }
}
