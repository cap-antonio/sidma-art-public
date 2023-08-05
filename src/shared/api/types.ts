export type TPost = {
  id: string
  title: string
  text: string
  published: string
  source: 'instagram' | 'blogger'
  tags: Array<string>
  author: {
    name: string
    role?: string
    avatar?: string
  }
  img: {
    url: string
    alt: string
  }
}

export type TBloggerPostsResponse = {
  author: {
    displayName: string
    id: string
    image: { url: string }
    url: string
  }
  blog: { id: string }
  content: string
  etag: string
  id: string
  kind: string
  published: string
  replies: unknown
  selfLink: string
  title: string
  updated: string
  url: string
}

export type TGoogleBlogFeedResponse = {
  etag: string
  items: Array<TBloggerPostsResponse>
  kind: string
}
