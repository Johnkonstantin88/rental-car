import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { brandsReducer } from './brands/slice';
import { carsReducer } from './cars/slice';
import { filterReducer } from './filter/slice';
import { favouriteReducer } from './favourite/slice';

const authPersistConfig = {
  key: 'favouriteCars',
  storage,
  whitelist: ['items'],
};

export const store = configureStore({
  reducer: {
    brands: brandsReducer,
    cars: carsReducer,
    favouriteCars: persistReducer(authPersistConfig, favouriteReducer),
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
