import axios from 'axios';
import {
  ISubscription,
  ISubscriptionInvoice,
  IAdminSubscriptionTelemetry,
  SubscriptionTier,
  BillingCycle,
} from './types';

export const SubscriptionApi = {
  getCurrentSubscription: async (): Promise<ISubscription> => {
    const res = await axios.get('/subscriptions/current');
    return res.data?.data;
  },

  upgradeSubscription: async (payload: {
    tier: SubscriptionTier;
    billingCycle?: BillingCycle;
    additionalSeats?: number;
  }): Promise<ISubscription> => {
    const res = await axios.post('/subscriptions/upgrade', payload);
    return res.data?.data;
  },

  getInvoices: async (): Promise<ISubscriptionInvoice[]> => {
    const res = await axios.get('/subscriptions/invoices');
    return res.data?.data || [];
  },

  getAdminTelemetry: async (): Promise<IAdminSubscriptionTelemetry> => {
    const res = await axios.get('/subscriptions/admin/telemetry');
    return res.data?.data;
  },

  adminAdjustSeats: async (id: string, seatLimit: number): Promise<ISubscription> => {
    const res = await axios.patch(`/subscriptions/admin/${id}/seats`, { seatLimit });
    return res.data?.data;
  },
};
