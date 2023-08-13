import { TPost } from '@shared/api'

export type TDevidedPosts = {
  latest: TPost
} & Record<'other' | 'seconds', Array<TPost>>
