import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { User, Institution } from '../types/auth';

interface AuthContextType {
  user: User | null;
  institution: Institution | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  registerInstitution: (data: any) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Configure Axios Defaults
axios.defaults.baseURL = 'http://localhost:5000/api/v1';
axios.defaults.withCredentials = true;

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [institution, setInstitution] = useState<Institution | null>(null);
  const [token, setToken] = useState<string | null>(() => localStorage.getItem('swadhyayi_token'));
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Set Authorization header whenever token changes
  useEffect(() => {
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      localStorage.setItem('swadhyayi_token', token);
    } else {
      delete axios.defaults.headers.common['Authorization'];
      localStorage.removeItem('swadhyayi_token');
    }
  }, [token]);

  // Load current user profile on initial mount
  useEffect(() => {
    const fetchMe = async () => {
      if (!token) {
        setIsLoading(false);
        return;
      }
      try {
        const res = await axios.get('/auth/me');
        if (res.data.success) {
          const u = res.data.data.user;
          setUser({
            id: u._id || u.id,
            email: u.email,
            firstName: u.firstName,
            lastName: u.lastName,
            role: u.role,
            institutionId: u.institutionId,
            rollNumber: u.rollNumber,
            departmentId: u.departmentId?._id || u.departmentId,
            batchId: u.batchId?._id || u.batchId,
            classId: u.classId?._id || u.classId,
            metrics: u.metrics,
          });
          setInstitution(res.data.data.institution);
        }
      } catch (err) {
        console.error('Failed to restore session:', err);
        setToken(null);
        setUser(null);
        setInstitution(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMe();
  }, [token]);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const res = await axios.post('/auth/login', { email, password });
      if (res.data.success) {
        const { user: userData, tokens } = res.data.data;
        setToken(tokens.accessToken);
        setUser(userData);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const registerInstitution = async (data: any) => {
    setIsLoading(true);
    try {
      const res = await axios.post('/auth/register-institution', data);
      if (res.data.success) {
        const { user: userData, institution: instData, tokens } = res.data.data;
        setToken(tokens.accessToken);
        setUser(userData);
        setInstitution(instData);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      await axios.post('/auth/logout');
    } catch {
      // Ignore logout errors
    } finally {
      setToken(null);
      setUser(null);
      setInstitution(null);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        institution,
        token,
        isAuthenticated: !!user,
        isLoading,
        login,
        registerInstitution,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
