import { LinkProps } from 'next/link'

export type TLink = LinkProps & {
  noHover?: boolean
  className?: string
}
