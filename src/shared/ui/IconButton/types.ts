import { TIconNames } from '../Icon/types'

export type TIconButton = {
  onClick?: () => void
  variant?: 'primary' | 'secondary'
  iconName?: TIconNames
}
