import { z } from 'zod';

export interface ParsedStudentRow {
  firstName: string;
  lastName: string;
  email: string;
  rollNumber: string;
  departmentCode: string;
  batchName: string;
  section: string;
}

export interface BulkParseResult {
  validRows: ParsedStudentRow[];
  errors: { row: number; error: string; raw: string }[];
}

const studentRowSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  rollNumber: z.string().min(1, 'Roll number is required'),
  departmentCode: z.string().min(1, 'Department code is required'),
  batchName: z.string().min(1, 'Batch name is required'),
  section: z.string().min(1, 'Section is required'),
});

export const parseStudentCSV = (csvContent: string): BulkParseResult => {
  const lines = csvContent
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter((l) => l.length > 0);

  if (lines.length < 2) {
    return {
      validRows: [],
      errors: [{ row: 1, error: 'CSV file must contain a header row and at least one data row', raw: '' }],
    };
  }

  // Header validation
  const headers = lines[0].split(',').map((h) => h.trim().toLowerCase());
  const expected = ['firstname', 'lastname', 'email', 'rollnumber', 'departmentcode', 'batchname', 'section'];

  const missingHeaders = expected.filter((exp) => !headers.includes(exp));
  if (missingHeaders.length > 0) {
    return {
      validRows: [],
      errors: [
        {
          row: 1,
          error: `Missing required CSV column headers: ${missingHeaders.join(', ')}`,
          raw: lines[0],
        },
      ],
    };
  }

  const headerIndices = {
    firstName: headers.indexOf('firstname'),
    lastName: headers.indexOf('lastname'),
    email: headers.indexOf('email'),
    rollNumber: headers.indexOf('rollnumber'),
    departmentCode: headers.indexOf('departmentcode'),
    batchName: headers.indexOf('batchname'),
    section: headers.indexOf('section'),
  };

  const validRows: ParsedStudentRow[] = [];
  const errors: { row: number; error: string; raw: string }[] = [];

  for (let i = 1; i < lines.length; i++) {
    const rawLine = lines[i];
    const cols = rawLine.split(',').map((c) => c.trim().replace(/^["']|["']$/g, ''));

    const rowObj = {
      firstName: cols[headerIndices.firstName] || '',
      lastName: cols[headerIndices.lastName] || '',
      email: cols[headerIndices.email]?.toLowerCase() || '',
      rollNumber: cols[headerIndices.rollNumber]?.toUpperCase() || '',
      departmentCode: cols[headerIndices.departmentCode]?.toUpperCase() || '',
      batchName: cols[headerIndices.batchName] || '',
      section: cols[headerIndices.section]?.toUpperCase() || '',
    };

    const parseResult = studentRowSchema.safeParse(rowObj);
    if (parseResult.success) {
      validRows.push(parseResult.data);
    } else {
      const issueMsgs = parseResult.error.issues.map((iss) => `${iss.path.join('.')}: ${iss.message}`).join('; ');
      errors.push({
        row: i + 1,
        error: issueMsgs,
        raw: rawLine,
      });
    }
  }

  return { validRows, errors };
};
