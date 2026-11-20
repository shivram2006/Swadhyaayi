import { describe, it, expect } from 'vitest';
import { runWithTenantContext, getTenantContext } from '../../src/core/context/tenantContext';

describe('AsyncLocalStorage Tenant Context Unit Tests', () => {
  it('should store and retrieve tenant context across async call chain', async () => {
    const contextA = { tenantId: 'tenant_college_A', userId: 'user_1', role: 'STUDENT' };
    const contextB = { tenantId: 'tenant_college_B', userId: 'user_2', role: 'INSTITUTION_ADMIN' };

    const taskA = async () => {
      return runWithTenantContext(contextA, async () => {
        await new Promise((resolve) => setTimeout(resolve, 20));
        const ctx = getTenantContext();
        return ctx?.tenantId;
      });
    };

    const taskB = async () => {
      return runWithTenantContext(contextB, async () => {
        await new Promise((resolve) => setTimeout(resolve, 10));
        const ctx = getTenantContext();
        return ctx?.tenantId;
      });
    };

    const [resultA, resultB] = await Promise.all([taskA(), taskB()]);

    expect(resultA).toBe('tenant_college_A');
    expect(resultB).toBe('tenant_college_B');
  });

  it('should return undefined when outside an active tenant context', () => {
    const ctx = getTenantContext();
    expect(ctx).toBeUndefined();
  });
});
