import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Resolution } from '../../type/type';

// type of the initial state
type InitialState = {
  resolution: Resolution[];
  favorite: Resolution[];
};

// declare initial state
const initialState: InitialState = {
  resolution: [],
  favorite: [],
};

// resolution slice containing the name, initialState, reducers
const resolutionSlice = createSlice({
  name: 'resolution',
  initialState,
  reducers: {
    addResolution: (state, action: PayloadAction<Resolution>) => {
      state.resolution.push(action.payload);
    },
    deleteResolution: (state, action) => {
      state.resolution = state.resolution.filter(
        (item) => item.title !== action.payload.title
      );
      state.favorite = state.favorite.filter(
        (item) => item.title !== action.payload.title
      );
    },
    addFavorite: (state, action) => {
      state.favorite.push(action.payload);
    },
    deleteFavorite: (state, action) => {
      state.favorite = state.favorite.filter(
        (item) => item.title !== action.payload.title
      );
    },
  },
});

// export actions and reducer
export const actions = resolutionSlice.actions;
export default resolutionSlice.reducer;
