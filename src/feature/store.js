import { configureStore } from '@reduxjs/toolkit'
import { authApi } from './api/authApi'
import authSlice from './services/authSlice'
import { productApi } from './api/productApi'
import productsSlice from './services/productsSlice'

export const store = configureStore({
  reducer: {
    auth:authSlice,
    products:productsSlice,
    [authApi.reducerPath]: authApi.reducer,
    [productApi.reducerPath]: productApi.reducer,

  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(authApi.middleware,productApi.middleware),
})