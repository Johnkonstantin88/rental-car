import { createSlice } from '@reduxjs/toolkit';
import { fetchBrands } from './operations';

const initialState = {
  items: null,
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

export const brandsSlice = createSlice({
  name: 'brands',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchBrands.pending, handlePending)
      .addCase(fetchBrands.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
        state.items = payload;
      })
      .addCase(fetchBrands.rejected, handleRejected);
  },
});

export const brandsReducer = brandsSlice.reducer;
