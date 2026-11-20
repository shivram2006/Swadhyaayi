import { describe, it, expect } from 'vitest';
import { generateAccessToken, generateRefreshToken, verifyAccessToken, verifyRefreshToken } from '../../src/core/utils/jwt';

describe('JWT Utility Unit Tests', () => {
  const samplePayload = {
    userId: '60d5ecb8b5c9c614b8e8b123',
    role: 'INSTITUTION_ADMIN',
    institutionId: '60d5ecb8b5c9c614b8e8b999',
  };

  it('should generate and verify an access token', () => {
    const token = generateAccessToken(samplePayload);
    expect(token).toBeDefined();

    const decoded = verifyAccessToken(token);
    expect(decoded.userId).toBe(samplePayload.userId);
    expect(decoded.role).toBe(samplePayload.role);
    expect(decoded.institutionId).toBe(samplePayload.institutionId);
  });

  it('should generate and verify a refresh token', () => {
    const token = generateRefreshToken(samplePayload);
    expect(token).toBeDefined();

    const decoded = verifyRefreshToken(token);
    expect(decoded.userId).toBe(samplePayload.userId);
    expect(decoded.role).toBe(samplePayload.role);
  });

  it('should throw an error when verifying an invalid or tampered token', () => {
    const token = generateAccessToken(samplePayload);
    const tampered = token.slice(0, -6) + 'abcdef';

    expect(() => verifyAccessToken(tampered)).toThrow();
  });
});
