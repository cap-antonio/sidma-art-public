import { FC, useState } from 'react'

import './styles.scss'

export const FiltersColumn: FC = ({}) => {
  const [blockVisible, setBlockVisible] = useState(false)

  const toggleBlock = () => {
    setBlockVisible(!blockVisible)
  }
  return (
    <div
      className={`block ${blockVisible ? 'visible' : ''}`}
      onClick={toggleBlock}
    ></div>
  )
}
