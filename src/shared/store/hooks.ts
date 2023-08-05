import fastDeepEqual from 'fast-deep-equal'
import {
  useDispatch as originUseDispatch,
  useSelector as originUseSelector,
} from 'react-redux'

import { AppDispatch, RootStore } from './types'

export const useDispatch = () => originUseDispatch<AppDispatch>()

export const useSelector = <Selected = unknown>(
  selector: (state: RootStore) => Selected,
  equalityFn?: (left: Selected, right: Selected) => boolean,
): Selected =>
  originUseSelector<RootStore, Selected>(
    (state) => selector(state),
    equalityFn || fastDeepEqual,
  )
