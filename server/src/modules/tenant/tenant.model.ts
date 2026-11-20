import { Schema, model, Document, Types } from 'mongoose';
import { getTenantContext } from '../../core/context/tenantContext';

// Helper to apply tenant scoping automatically
function applyTenantFilter(this: any) {
  const context = getTenantContext();
  if (context?.tenantId && !context?.isSuperAdmin) {
    this.where({ institutionId: new Types.ObjectId(context.tenantId) });
  }
}

// 1. Institution Model
export interface IInstitutionDocument extends Document {
  name: string;
  code: string;
  contactEmail: string;
  phone?: string;
  address?: {
    city: string;
    state: string;
    country: string;
    zipCode: string;
  };
  status: 'ACTIVE' | 'SUSPENDED' | 'EXPIRED' | 'TRIAL';
  settings: {
    allowedDomains: string[];
    branding: {
      logoUrl?: string;
      primaryColor?: string;
    };
    enableProctoring: boolean;
  };
  createdAt: Date;
  updatedAt: Date;
}

const InstitutionSchema = new Schema<IInstitutionDocument>(
  {
    name: { type: String, required: true, trim: true },
    code: { type: String, required: true, unique: true, lowercase: true, trim: true },
    contactEmail: { type: String, required: true, lowercase: true, trim: true },
    phone: { type: String, trim: true },
    address: {
      city: { type: String, default: '' },
      state: { type: String, default: '' },
      country: { type: String, default: 'India' },
      zipCode: { type: String, default: '' },
    },
    status: {
      type: String,
      enum: ['ACTIVE', 'SUSPENDED', 'EXPIRED', 'TRIAL'],
      default: 'ACTIVE',
      index: true,
    },
    settings: {
      allowedDomains: [{ type: String }],
      branding: {
        logoUrl: { type: String },
        primaryColor: { type: String, default: '#6366f1' },
      },
      enableProctoring: { type: Boolean, default: true },
    },
  },
  { timestamps: true }
);

export const Institution = model<IInstitutionDocument>('Institution', InstitutionSchema);

// 2. Department Model
export interface IDepartmentDocument extends Document {
  institutionId: Types.ObjectId;
  name: string;
  code: string;
  status: 'ACTIVE' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}

const DepartmentSchema = new Schema<IDepartmentDocument>(
  {
    institutionId: { type: Schema.Types.ObjectId, ref: 'Institution', required: true, index: true },
    name: { type: String, required: true, trim: true },
    code: { type: String, required: true, uppercase: true, trim: true },
    status: { type: String, enum: ['ACTIVE', 'ARCHIVED'], default: 'ACTIVE' },
  },
  { timestamps: true }
);

DepartmentSchema.index({ institutionId: 1, code: 1 }, { unique: true });
DepartmentSchema.pre(/^find/, applyTenantFilter);

export const Department = model<IDepartmentDocument>('Department', DepartmentSchema);

// 3. Batch Model
export interface IBatchDocument extends Document {
  institutionId: Types.ObjectId;
  name: string;
  graduationYear: number;
  currentAcademicYear: number;
  status: 'ACTIVE' | 'GRADUATED' | 'ARCHIVED';
  createdAt: Date;
  updatedAt: Date;
}

const BatchSchema = new Schema<IBatchDocument>(
  {
    institutionId: { type: Schema.Types.ObjectId, ref: 'Institution', required: true, index: true },
    name: { type: String, required: true, trim: true },
    graduationYear: { type: Number, required: true },
    currentAcademicYear: { type: Number, required: true, default: 1 },
    status: { type: String, enum: ['ACTIVE', 'GRADUATED', 'ARCHIVED'], default: 'ACTIVE' },
  },
  { timestamps: true }
);

BatchSchema.index({ institutionId: 1, graduationYear: 1 });
BatchSchema.pre(/^find/, applyTenantFilter);

export const Batch = model<IBatchDocument>('Batch', BatchSchema);

// 4. Class Model
export interface IClassDocument extends Document {
  institutionId: Types.ObjectId;
  departmentId: Types.ObjectId;
  batchId: Types.ObjectId;
  section: string;
  semester: number;
  createdAt: Date;
  updatedAt: Date;
}

const ClassSchema = new Schema<IClassDocument>(
  {
    institutionId: { type: Schema.Types.ObjectId, ref: 'Institution', required: true, index: true },
    departmentId: { type: Schema.Types.ObjectId, ref: 'Department', required: true, index: true },
    batchId: { type: Schema.Types.ObjectId, ref: 'Batch', required: true, index: true },
    section: { type: String, required: true, trim: true, uppercase: true },
    semester: { type: Number, required: true, default: 1 },
  },
  { timestamps: true }
);

ClassSchema.index({ institutionId: 1, departmentId: 1, batchId: 1, section: 1 }, { unique: true });
ClassSchema.pre(/^find/, applyTenantFilter);

export const Class = model<IClassDocument>('Class', ClassSchema);
