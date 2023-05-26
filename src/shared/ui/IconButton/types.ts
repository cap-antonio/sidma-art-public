import { TVariants } from 'src/shared/types'
import { TIconNames } from '../Icon/types'

export type TIconButton = {
  onClick?: () => void
  variant?: TVariants
  iconName?: TIconNames
}
