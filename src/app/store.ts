import { configureStore } from '@reduxjs/toolkit';
import sortingReducer from '../features/sorter/sortingSlice';
import loadingReducer from '../features/loading/loadingSlice'


export const store = configureStore({
  reducer: {
    sorter: sortingReducer,
    loader: loadingReducer
  },
});



export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
