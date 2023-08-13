import { FC, PropsWithChildren } from 'react'

import './styles.scss'

import { TLabel } from './types'

export const Label: FC<PropsWithChildren<TLabel>> = ({ children, ...rest }) => {
  return (
    <label className="label" {...rest}>
      {children}
    </label>
  )
}
