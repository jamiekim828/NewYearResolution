import { configureStore } from '@reduxjs/toolkit';

import resolutionReducer from './slice/resolution';

const store = configureStore({
  reducer: {
    resolution: resolutionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
