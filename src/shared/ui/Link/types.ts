import { LinkProps } from 'next/link'

export type TLink = {
  to: string
  hover?: boolean
}

export type ExtendedLinkProps = LinkProps & {
  hover?: string
}
