
import { configureStore,  } from '@reduxjs/toolkit';
import ApiSlice1 from './apiSlice/ApiSlice1';
import ApiSlice2 from './apiSlice/ApiSlice2';
import ApiSlice3 from './apiSlice/ApiSlice3';

const store = configureStore({
  reducer: {
    api1: ApiSlice1,
    api2: ApiSlice2,
    api3: ApiSlice3,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      warnAfter: 1000000,
    },
  })
});

export default store;
