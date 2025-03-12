import { createSlice } from '@reduxjs/toolkit';
import { fetchCars, fetchCarDetails } from './operations';

const initialState = {
  items: {
    cars: [],
    page: null,
    totalCars: null,
    totalPages: null,
  },
  carDetails: null,
  loading: false,
  error: null,
};

const handlePending = state => {
  state.loading = true;
};

const handleRejected = (state, { payload }) => {
  state.loading = false;
  state.error = payload;
};

export const carsSlice = createSlice({
  name: 'cars',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchCars.pending, handlePending)
      .addCase(fetchCars.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
        state.items.cars = payload.cars;
        state.items.page = payload.page;
        state.items.totalCars = payload.totalCars;
        state.items.totalPages = payload.totalPages;
      })
      .addCase(fetchCars.rejected, handleRejected)
      .addCase(fetchCarDetails.pending, state => {
        state.carDetails = null;
        state.loading = true;
      })
      .addCase(fetchCarDetails.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
        state.carDetails = payload;
      })
      .addCase(fetchCarDetails.rejected, handleRejected);
  },
});

export const carsReducer = carsSlice.reducer;
