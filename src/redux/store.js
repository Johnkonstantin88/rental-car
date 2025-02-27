import { configureStore } from '@reduxjs/toolkit';
import { brandsReducer } from './brands/slice';
import { carsReducer } from './cars/slice';
import { filterReducer } from './filter/slice';

export const store = configureStore({
  reducer: {
    brands: brandsReducer,
    cars: carsReducer,
    filter: filterReducer,
  },
});
