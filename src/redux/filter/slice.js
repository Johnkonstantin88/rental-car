import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: {
    brand: null,
    rentalPrice: null,
    minMileage: null,
    maxMileage: null,
    limit: 12,
    page: 1,
  },
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeBrandFilter(state, { payload }) {
      state.filter = {
        brand: payload.brand,
        rentalPrice: payload.rentalPrice,
        minMileage: payload.minMileage,
        maxMileage: payload.maxMileage,
        limit: payload.limit,
        page: payload.page,
      };
    },
    changePaginationFilter(state, { payload }) {
      state.filter = {
        limit: payload.limit,
        page: payload.page,
      };
    },
  },
});

export const { changeBrandFilter, changePaginationFilter } =
  filterSlice.actions;

export const filterReducer = filterSlice.reducer;
