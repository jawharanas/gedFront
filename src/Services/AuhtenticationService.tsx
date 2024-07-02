import axios, { AxiosResponse } from 'axios';

interface Credentials {
  email: string;
  password: string;
}

interface User {
  
  email: string;
  password: string;
}

const API_URL = 'http://localhost:8080/api/auth/';

export const useAuthService = (): {
  login: (credentials: Credentials) => Promise<any>;
  register: (user: User) => Promise<any>;
} => {
  const login = async (credentials: Credentials): Promise<AxiosResponse> => {
    try {
      const response = await axios.post(`${API_URL}signin`, credentials);
      return response;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  const register = async (user: User): Promise<AxiosResponse> => {
    try {
      const response = await axios.post(`${API_URL}signup`, user);
      return response;
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    }
  };

  return { login, register };
};

