import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type TUser = {
  themeMode: 'dark' | 'light'
}

const initialState: TUser = {
  themeMode: 'light',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeThemeMode: (state, action: PayloadAction<'dark' | 'light'>) => {
      state.themeMode = action.payload
    },
  },
})

export const { changeThemeMode } = userSlice.actions
