import { describe, it, expect } from 'vitest';
import { hashPassword, verifyPassword } from '../../src/core/utils/password';

describe('Password Utility Unit Tests', () => {
  it('should securely hash a plaintext password', async () => {
    const plainText = 'SecurePassword@2026';
    const hash = await hashPassword(plainText);

    expect(hash).toBeDefined();
    expect(hash).not.toEqual(plainText);
    expect(hash.startsWith('$2a$') || hash.startsWith('$2b$')).toBe(true);
  });

  it('should return true for matching password and hash', async () => {
    const plainText = 'SwadhyayiPlacement#1';
    const hash = await hashPassword(plainText);

    const isMatch = await verifyPassword(plainText, hash);
    expect(isMatch).toBe(true);
  });

  it('should return false for incorrect password', async () => {
    const plainText = 'CorrectPassword123';
    const hash = await hashPassword(plainText);

    const isMatch = await verifyPassword('WrongPassword456', hash);
    expect(isMatch).toBe(false);
  });
});
