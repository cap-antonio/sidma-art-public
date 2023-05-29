import { FC, PropsWithChildren, memo } from 'react'

import { StyledButton } from './styles'
import { TButton } from './types'

export const Button: FC<PropsWithChildren<TButton>> = memo(
  ({ children, ...rest }) => {
    return <StyledButton {...rest}>{children}</StyledButton>
  },
)
