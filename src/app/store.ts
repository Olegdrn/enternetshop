import { configureStore } from '@reduxjs/toolkit';
import sortingReducer from '../features/sorter/sortingSlice';


export const store = configureStore({
  reducer: {
    sorter: sortingReducer,
  },
});



export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
