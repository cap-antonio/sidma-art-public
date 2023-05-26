import { FC, PropsWithChildren, memo } from 'react'

import { StyledButton } from './styles'
import { TButton } from './types'

export const Button: FC<PropsWithChildren<TButton>> = memo(
  ({ variant = 'primary', children, ...rest }) => {
    return (
      <StyledButton variant={variant} {...rest}>
        {children}
      </StyledButton>
    )
  },
)
