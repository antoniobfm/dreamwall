import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '@/services/apiClient';

// Demo purposes only

interface IInitialLoadResponse {
  id: string;
  name: string;
  phone_number: string;
}

export const initialLoad = createAsyncThunk(
  '/walls/initial-load',
  async (): Promise<IInitialLoadResponse> => {
    const response = await api.post('/walls/initial-load');

    return response.data;
  },
);
