import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  brand: null,
  rentalPrice: null,
  minMileage: null,
  maxMileage: null,
  limit: 7,
  page: 1,
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeBrand(state, { payload }) {
      state.brand = payload;
    },
  },
});

export const { changeBrand } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
