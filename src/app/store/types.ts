import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit'
import { store } from './store'
import { Dispatch } from 'react'

export type RootStore = ReturnType<typeof store.getState>

export type AppDispatch = ThunkDispatch<
  RootStore,
  null | undefined,
  AnyAction
> &
  Dispatch<AnyAction>
