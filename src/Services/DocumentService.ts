import axios from 'axios';
import axiosInstance from './axiosConifg';

export const getDocumentById = async (id: number) => {
  try {
    const response = await axiosInstance.get(`documents/${id}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message || 'Failed to fetch document');
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};