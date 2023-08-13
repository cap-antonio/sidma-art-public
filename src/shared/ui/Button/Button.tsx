import { FC, PropsWithChildren, memo } from 'react'
import cn from 'classnames'

import './styles.scss'
import { TButton } from './types'

export const Button: FC<PropsWithChildren<TButton>> = memo(
  ({ children, className, ...rest }) => {
    const buttonClassNames = cn('button', className)
    return (
      <button className={buttonClassNames} {...rest}>
        {children}
      </button>
    )
  },
)
