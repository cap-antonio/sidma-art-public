import { TIconNames } from '../Icon/types'

export type TIconButton = {
  onClick?: () => void
  variant?: 'primary' | 'secondary'
  iconName?: TIconNames
  iconName2?: TIconNames
  iconName3?: TIconNames
}
