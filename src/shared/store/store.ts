import { configureStore } from '@reduxjs/toolkit'

import { modalReducer } from './modules'

export const store = configureStore({
  reducer: {
    modal: modalReducer,
  },
})
