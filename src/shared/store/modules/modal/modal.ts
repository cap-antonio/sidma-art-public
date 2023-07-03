import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ModalState } from './types'

const initialState: ModalState = {
  drawer: {
    isOpen: false,
    content: 'headerLinks',
  },
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    onToggleDrawer: (state) => {
      state.drawer.isOpen = !state.drawer.isOpen
    },
    setDrawerIsOpen: (state, action: PayloadAction<boolean>) => {
      state.drawer.isOpen = action.payload
    },
  },
})

export const { onToggleDrawer, setDrawerIsOpen } = modalSlice.actions

export const modalReducer = modalSlice.reducer
