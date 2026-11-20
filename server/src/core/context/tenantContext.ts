import { AsyncLocalStorage } from 'async_hooks';

export interface ITenantContext {
  tenantId?: string;
  userId?: string;
  role?: string;
  isSuperAdmin?: boolean;
}

const tenantStorage = new AsyncLocalStorage<ITenantContext>();

export const runWithTenantContext = <T>(context: ITenantContext, fn: () => T): T => {
  return tenantStorage.run(context, fn);
};

export const getTenantContext = (): ITenantContext | undefined => {
  return tenantStorage.getStore();
};
