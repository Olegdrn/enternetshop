import { configureStore } from '@reduxjs/toolkit';
import sortingReducer from '../features/sorter/sortingSlice';
import loadingReducer from '../features/loading/loadingSlice';
import searchingReducer from '../features/searching/searchingSlice';
import paginationReducer from '../features/pagination/paginationSlice'


export const store = configureStore({
  reducer: {
    sorter: sortingReducer,
    loader: loadingReducer,
    searcher: searchingReducer,
    paginator: paginationReducer
  },
});



export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
