import { createSlice } from '@reduxjs/toolkit';
import { Resolution } from '../../type/type';

type InitialStateType = {
  resolution: Resolution[];
  favorite: Resolution[];
};

const initialState: InitialStateType = {
  resolution: [],
  favorite: [],
};

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

export const actions = resolutionSlice.actions;
export default resolutionSlice.reducer;
