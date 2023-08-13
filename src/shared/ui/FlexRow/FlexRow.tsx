import { FC, PropsWithChildren } from 'react'
import classNames from 'classnames'

import './styles.scss'
import { TFlexRow } from './types'

export const FlexRow: FC<PropsWithChildren<TFlexRow>> = ({
  children,
  className,
  justify = 'flex-start',
  align = 'flex-start',
  wrap,
}) => {
  const flexRowClass = classNames(
    className,
    'flex-row',
    `justify__${justify}`,
    `align__${align}`,
    {
      wrap: wrap,
    },
  )

  return <div className={flexRowClass}>{children}</div>
}
