import { configureStore } from '@reduxjs/toolkit'
import { authApi } from './api/authApi'
// import { exampleApi } from './services/exampleApi'
// import exampleSlice from './services/exampleSlice'

export const store = configureStore({
  reducer: {
    

    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(authApi.middleware),
})