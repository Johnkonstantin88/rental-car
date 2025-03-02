import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const favouriteSlice = createSlice({
  name: 'favouriteCars',
  initialState,
  reducers: {
    addFavourite(state, { payload }) {
      state.items.push(payload);
    },

    removeFavoirite(state, { payload }) {
      const index = state.items.findIndex(item => item.id === payload.id);
      state.items.splice(index, 1);
    },
  },
});

export const { addFavourite, removeFavoirite } = favouriteSlice.actions;

export const favouriteReducer = favouriteSlice.reducer;
