import { FC } from 'react'
import classNames from 'classnames'

import './styles.scss'
import { Label } from '../Label'

import { TInput } from './types'

export const Input: FC<TInput> = ({ label, className, ...rest }) => {
  const inputClassNames = classNames('input-wrapper', className)
  return (
    <div className={inputClassNames}>
      {label && <Label>{label}</Label>}
      <input className="input" {...rest} />
    </div>
  )
}
