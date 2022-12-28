import { createSlice } from '@reduxjs/toolkit';
import { Resolution } from '../../type/type';

type InitialStateType = {
  resolution: Resolution[];
};

const initialState: InitialStateType = {
  resolution: [],
};

const resolutionSlice = createSlice({
  name: 'resolution',
  initialState,
  reducers: {
    addResolution: (state, action) => {
      state.resolution.push(action.payload);
    },
    deleteResolution: (state, action) => {},
  },
});

export const actions = resolutionSlice.actions;
export default resolutionSlice.reducer;
