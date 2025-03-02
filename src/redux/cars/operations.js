import rentalCarInstance from '../../api/rentalCarInstance';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCars = createAsyncThunk(
  'cars/fetchAll',
  async (filter, thunkAPI) => {
    try {
      const { cars } = thunkAPI.getState();
      const isPagination = filter.page !== 1;

      const response = await rentalCarInstance.get('/cars', { params: filter });

      return isPagination
        ? {
            ...response.data,
            cars: [...cars.items.cars, ...response.data.cars],
          }
        : response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
