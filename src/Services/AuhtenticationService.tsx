import axios, { AxiosResponse } from 'axios';

interface Credentials {
  email: string;
  password: string;
}

interface User {
  
  email: string;
  password: string;
  department: string;
}

const API_URL = 'http://localhost:8080/api/v1/auth/singup';

export const useAuthService = (): {
  login: (credentials: Credentials) => Promise<any>;
  register: (user: User) => Promise<any>;
} => {
  const login = async (credentials: { email: string; password: string }) => {
    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/singin', credentials);
      const { token } = response.data;
        
      localStorage.setItem('token', token);
      return response.data;
    } catch (error) {
      throw new Error('Login failed');
    }
  };
  const register = async (user: User): Promise<AxiosResponse> => {
    try {
      const response = await axios.post(`${API_URL}signup`, user);
      const { token } = response.data;
       localStorage.setItem('token', token);

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        throw new Error(error.response.data.message || 'Registration failed');
      } else {
        throw new Error('Registration failed');
      }
    }

  };

  return { login, register };
};


