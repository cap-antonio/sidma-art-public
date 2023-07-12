export type TCSSIndent =
  | `${number}px ${number}px ${number}px ${number}px`
  | `${number}px ${number}px ${number}px`
  | `${number}px ${number}px`
  | `${number}px`
  | `${number}%`

export enum Pages {
  main = '/',
  contacts = '/contacts',
  shop = '/shop',
  blog = '/blog',
}
