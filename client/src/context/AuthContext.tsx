import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { User, Institution } from '../types/auth';

interface AuthContextType {
  user: User | null;
  institution: Institution | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<User | null>;
  registerInstitution: (data: any) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Configure Axios Defaults
axios.defaults.baseURL = 'http://localhost:5000/api/v1';
axios.defaults.withCredentials = true;

// Initialize Authorization header synchronously if token exists in localStorage
const initialToken = localStorage.getItem('swadhyayi_token');
if (initialToken) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${initialToken}`;
}

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

  // Silent token refresh interceptor on 401 responses
  useEffect(() => {
    let refreshPromise: Promise<string | null> | null = null;

    const interceptorId = axios.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;
        const status = error.response?.status;
        const url: string = originalRequest?.url || '';

        // Skip refresh for auth endpoints or already retried requests
        if (
          status === 401 &&
          originalRequest &&
          !originalRequest._retry &&
          !url.includes('/auth/login') &&
          !url.includes('/auth/refresh-token') &&
          !url.includes('/auth/register-institution')
        ) {
          originalRequest._retry = true;

          try {
            if (!refreshPromise) {
              const storedRefresh = localStorage.getItem('swadhyayi_refresh_token');
              refreshPromise = axios
                .post('/auth/refresh-token', storedRefresh ? { refreshToken: storedRefresh } : {})
                .then((res) => {
                  const newAccessToken = res.data?.data?.accessToken;
                  if (newAccessToken) {
                    setToken(newAccessToken);
                    axios.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;
                    localStorage.setItem('swadhyayi_token', newAccessToken);
                    return newAccessToken;
                  }
                  return null;
                })
                .finally(() => {
                  refreshPromise = null;
                });
            }

            const newToken = await refreshPromise;
            if (newToken) {
              originalRequest.headers = originalRequest.headers || {};
              originalRequest.headers['Authorization'] = `Bearer ${newToken}`;
              return axios(originalRequest);
            }
          } catch {
            // Refresh failed — clear session so user can log in again
            localStorage.removeItem('swadhyayi_refresh_token');
            setToken(null);
            setUser(null);
            setInstitution(null);
          }
        }

        return Promise.reject(error);
      }
    );

    return () => {
      axios.interceptors.response.eject(interceptorId);
    };
  }, []);

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

  const login = async (email: string, password: string): Promise<User | null> => {
    setIsLoading(true);
    try {
      const res = await axios.post('/auth/login', { email, password });
      if (res.data.success) {
        const { user: userData, tokens } = res.data.data;
        if (tokens?.refreshToken) {
          localStorage.setItem('swadhyayi_refresh_token', tokens.refreshToken);
        }
        setToken(tokens.accessToken);
        setUser(userData);
        return userData;
      }
      return null;
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
        if (tokens?.refreshToken) {
          localStorage.setItem('swadhyayi_refresh_token', tokens.refreshToken);
        }
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
      localStorage.removeItem('swadhyayi_refresh_token');
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
