import { FC } from 'react'
import * as icons from './icons'

import { TIconNames } from './types'

const GetIcon: FC<{ icon: TIconNames }> = ({ icon }) => {
  const Component = icons[icon]
  return icons[icon] && <Component />
}

export const Icon = ({ name }: { name: TIconNames }) => <GetIcon icon={name} />
