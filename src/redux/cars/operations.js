import rentalCarInstance from '../../api/rentalCarInstance';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCars = createAsyncThunk(
  'cars/fetchAll',
  async (filter, thunkAPI) => {
    // const params = new URLSearchParams(filter);

    try {
      const response = await rentalCarInstance.get('/cars', { params: filter });
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
