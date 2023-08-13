import { FC } from 'react'
import classNames from 'classnames'

import './styles.scss'
import { Label } from '../Label'

import { TTextarea } from './types'

export const Textarea: FC<TTextarea> = ({ className, label, ...rest }) => {
  const textAreaClassName = classNames('textarea-wrapper', className)
  return (
    <div className={textAreaClassName}>
      {label && <Label>{label}</Label>}
      <textarea className="textarea" {...rest} />
    </div>
  )
}
