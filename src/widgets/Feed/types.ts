import { TPost } from '@shared/api'

export type TDividedPosts = Record<'other' | 'seconds' | 'latest', Array<TPost>>
