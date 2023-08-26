import { FC, PropsWithChildren } from 'react'
import NextLink from 'next/link'
import classNames from 'classnames'

import './styles.scss'

import { TLink } from './types'

export const Link: FC<PropsWithChildren<TLink>> = ({
  href,
  children,
  className,
  noHover,
  ...rest
}) => {
  const linkClassNames = classNames('custom-link', className, {
    'no-hover': noHover,
  })
  return (
    <NextLink href={href} {...rest} className={linkClassNames}>
      {children}
    </NextLink>
  )
}
