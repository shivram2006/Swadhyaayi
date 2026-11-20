import { describe, it, expect } from 'vitest';
import { parseStudentCSV } from '../../src/modules/student/student.bulk';

describe('Student Bulk CSV Parsing Unit Tests', () => {
  it('should parse valid CSV text with headers into structured student objects', () => {
    const csv = `firstName,lastName,email,rollNumber,departmentCode,batchName,section
Rahul,Verma,rahul.verma@nit.ac.in,U23CS101,CSE,Batch 2023-2027,A
Sneha,Patel,sneha.patel@nit.ac.in,U23CS102,CSE,Batch 2023-2027,B`;

    const result = parseStudentCSV(csv);
    expect(result.validRows.length).toBe(2);
    expect(result.errors.length).toBe(0);

    const first = result.validRows[0];
    expect(first.firstName).toBe('Rahul');
    expect(first.lastName).toBe('Verma');
    expect(first.email).toBe('rahul.verma@nit.ac.in');
    expect(first.rollNumber).toBe('U23CS101');
    expect(first.departmentCode).toBe('CSE');
    expect(first.batchName).toBe('Batch 2023-2027');
    expect(first.section).toBe('A');
  });

  it('should reject CSV without required headers and report missing columns', () => {
    const invalidCsv = `name,email,branch
John,john@nit.ac.in,CSE`;

    const result = parseStudentCSV(invalidCsv);
    expect(result.validRows.length).toBe(0);
    expect(result.errors.length).toBeGreaterThan(0);
    expect(result.errors[0].error).toContain('Missing required CSV column headers');
  });

  it('should flag rows with invalid email formats and capture exact row numbers', () => {
    const csv = `firstName,lastName,email,rollNumber,departmentCode,batchName,section
Aarav,Sharma,not-an-email,U23CS103,CSE,Batch 2023-2027,A
Rohan,Mehta,rohan@nit.ac.in,U23CS104,CSE,Batch 2023-2027,A`;

    const result = parseStudentCSV(csv);
    expect(result.validRows.length).toBe(1);
    expect(result.errors.length).toBe(1);
    expect(result.errors[0].row).toBe(2);
    expect(result.errors[0].error).toContain('Invalid email');
    expect(result.validRows[0].firstName).toBe('Rohan');
  });

  it('should handle Windows CRLF line endings and quotation marks cleanly', () => {
    const csv = "firstName,lastName,email,rollNumber,departmentCode,batchName,section\r\n\"Priya\",\"Nair\",\"priya@nit.ac.in\",\"U23CS105\",\"CSE\",\"Batch 2023-2027\",\"A\"";

    const result = parseStudentCSV(csv);
    expect(result.validRows.length).toBe(1);
    expect(result.validRows[0].firstName).toBe('Priya');
    expect(result.validRows[0].rollNumber).toBe('U23CS105');
  });
});
