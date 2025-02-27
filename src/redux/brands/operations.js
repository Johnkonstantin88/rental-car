import rentalCarInstance from '../../api/rentalCarInstance';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchBrands = createAsyncThunk(
  'brands/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await rentalCarInstance.get('/brands');
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
