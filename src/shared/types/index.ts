export type TCSSIndent =
  | `${number}px ${number}px ${number}px ${number}px`
  | `${number}px ${number}px ${number}px`
  | `${number}px ${number}px`
  | `${number}px`
  | `${number}%`

export enum Pages {
  gallery = '/',
  contacts = '/contacts',
  shop = '/shop',
  blog = '/blog',
}

export type TPageInitialData<Data> = {
  initialData: Data
}
