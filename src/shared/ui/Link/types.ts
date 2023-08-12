import { LinkProps } from 'react-router-dom'

export type TLink = {
  to: string
  hover?: boolean
}

export type ExtendedLinkProps = LinkProps & {
  hover?: string
}
