import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import { moviesReducer } from './Movies';

const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
