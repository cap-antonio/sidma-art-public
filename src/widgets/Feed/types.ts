import { TPost } from '@shared/api'

export type TDevidedPosts = Record<'other' | 'seconds' | 'latest', Array<TPost>>
