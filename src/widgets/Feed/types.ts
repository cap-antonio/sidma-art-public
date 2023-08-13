import { TPost } from '@shared/api'

export type TDividedPosts = {
  first: TPost
} & Record<'other' | 'seconds', Array<TPost>>
