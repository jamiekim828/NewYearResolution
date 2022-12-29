import { createSlice } from '@reduxjs/toolkit';

import { Resolution } from '../../type/type';

// type of the initial state
type InitialStateType = {
  resolution: Resolution[];
  favorite: Resolution[];
};

// declare initial state
const initialState: InitialStateType = {
  resolution: [],
  favorite: [],
};

// resolution slice containing the name, initialState, reducers
const resolutionSlice = createSlice({
  name: 'resolution',
  initialState,
  reducers: {
    addResolution: (state, action) => {
      if (
        state.resolution.some((item) => item.title === action.payload.title)
      ) {
        alert('This resolution is already exist');
      } else {
        state.resolution.push(action.payload);
      }
    },
    deleteResolution: (state, action) => {
      state.resolution = state.resolution.filter(
        (item) => item.title !== action.payload.title
      );
    },
    addFavorite: (state, action) => {
      state.favorite.push(action.payload);
    },
  },
});

// export actions and reducer
export const actions = resolutionSlice.actions;
export default resolutionSlice.reducer;
