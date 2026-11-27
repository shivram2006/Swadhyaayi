import axios from 'axios';
import {
  IOpportunity,
  IJobApplication,
  IPlacementAnalytics,
  ApplicationStage,
} from './types';

export const OpportunityApi = {
  getOpportunities: async (params?: {
    type?: string;
    workMode?: string;
    source?: string;
    search?: string;
    onlyEligible?: boolean;
  }): Promise<IOpportunity[]> => {
    const res = await axios.get('/opportunities', { params });
    return res.data?.data || [];
  },

  getExternalJobs: async (params?: {
    q?: string;
    country?: string;
    datePosted?: string;
    remoteOnly?: boolean;
    employmentTypes?: string;
  }): Promise<{ jobs: IOpportunity[]; cached: boolean; query: string }> => {
    const res = await axios.get('/opportunities/external', { params });
    return res.data?.data || { jobs: [], cached: false, query: '' };
  },

  getOpportunityById: async (id: string): Promise<IOpportunity> => {
    const res = await axios.get(`/opportunities/${id}`);
    return res.data?.data;
  },

  createOpportunity: async (data: any): Promise<IOpportunity> => {
    const res = await axios.post('/opportunities', data);
    return res.data?.data;
  },

  getApplications: async (): Promise<IJobApplication[]> => {
    const res = await axios.get('/applications');
    return res.data?.data || [];
  },

  createApplication: async (payload: {
    opportunityId: string;
    resumeId?: string;
    stage?: ApplicationStage;
    notes?: string;
  }): Promise<IJobApplication> => {
    const res = await axios.post('/applications', payload);
    return res.data?.data;
  },

  updateApplicationStage: async (
    id: string,
    payload: {
      stage: ApplicationStage;
      notes?: string;
      interviewDate?: string;
      offerDetails?: any;
    }
  ): Promise<IJobApplication> => {
    const res = await axios.patch(`/applications/${id}/stage`, payload);
    return res.data?.data;
  },

  deleteApplication: async (id: string): Promise<{ message: string }> => {
    const res = await axios.delete(`/applications/${id}`);
    return res.data?.data;
  },

  getPlacementAnalytics: async (): Promise<IPlacementAnalytics> => {
    const res = await axios.get('/applications/analytics');
    return res.data?.data;
  },
};
