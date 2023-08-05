import { configureStore } from '@reduxjs/toolkit'

import { modalReducer } from './modules'
import { baseApi } from '../api'

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
})
