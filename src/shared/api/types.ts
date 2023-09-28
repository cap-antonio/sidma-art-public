export type TDirectusImage = {
  id: string
}
export type TDirectusAuthor = {
  authors_id: {
    id: string
    name: string
    role?: string
    avatar?: string
  }
}

export type TDirectusResponse<Key extends string, Data> = Record<Key, Data>
