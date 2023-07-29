import { TPost } from 'src/shared/api'

export type TDevidedPosts = {
  latest: TPost
} & Record<'other' | 'seconds', Array<TPost>>
