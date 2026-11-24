import axios from 'axios';
import { IResume, IATSAnalysisResult, TargetRole, IATSUploadCheckResult } from './types';

export const ResumeApi = {
  getResumes: async (): Promise<IResume[]> => {
    const res = await axios.get('/resumes');
    return res.data?.data || [];
  },

  getResumeById: async (id: string): Promise<IResume> => {
    const res = await axios.get(`/resumes/${id}`);
    return res.data?.data;
  },

  createResume: async (data: Partial<IResume>): Promise<IResume> => {
    const res = await axios.post('/resumes', data);
    return res.data?.data;
  },

  updateResume: async (id: string, data: Partial<IResume>): Promise<IResume> => {
    const res = await axios.put(`/resumes/${id}`, data);
    return res.data?.data;
  },

  deleteResume: async (id: string): Promise<{ message: string }> => {
    const res = await axios.delete(`/resumes/${id}`);
    return res.data?.data;
  },

  syncFromProfile: async (): Promise<Partial<IResume>> => {
    const res = await axios.get('/resumes/sync-profile');
    return res.data?.data;
  },

  analyzeRawResume: async (
    resume: Partial<IResume>,
    customJobDescription?: string
  ): Promise<IATSAnalysisResult> => {
    const res = await axios.post('/resumes/analyze-raw', {
      resume,
      customJobDescription,
    });
    return res.data?.data;
  },

  analyzeResume: async (
    id: string,
    customJobDescription?: string,
    targetRole?: TargetRole
  ): Promise<IATSAnalysisResult> => {
    const res = await axios.post(`/resumes/${id}/analyze`, {
      customJobDescription,
      targetRole,
    });
    return res.data?.data;
  },

  checkAtsScore: async (
    file?: File | null,
    rawText?: string,
    targetRole: TargetRole = 'sde',
    customJobDescription?: string
  ): Promise<IATSUploadCheckResult> => {
    const formData = new FormData();
    if (file) {
      formData.append('file', file);
    }
    if (rawText) {
      formData.append('rawText', rawText);
    }
    formData.append('targetRole', targetRole);
    if (customJobDescription) {
      formData.append('customJobDescription', customJobDescription);
    }

    const res = await axios.post('/resumes/check-ats', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return res.data?.data;
  },
};
