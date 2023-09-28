import { FC, PropsWithChildren } from 'react'
import Head from 'next/head'

import { capitalizeFirstCharacter } from '@shared/utils/helpers'
import './styles.scss'

export const PageHeader: FC<PropsWithChildren> = ({ children }) => (
  <>
    <Head>
      <title>{children}</title>
    </Head>
    <h1 className="page-header">
      {capitalizeFirstCharacter(typeof children === 'string' ? children : '')}
    </h1>
  </>
)
