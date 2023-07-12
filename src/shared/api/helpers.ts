import { TBloggerPostsResponse, TPost } from './types'

export const prepareBloggerResponseToPost = (
  post: TBloggerPostsResponse,
): TPost => {
  const description = post.content.match(/<div[^>]*>(.*?)<\/div>/)?.[1] || ''
  const tagsMatches = post.content.match(/#\w+/g) || undefined
  const tags = tagsMatches
    ? tagsMatches.map((tag) => tag.charAt(1).toUpperCase() + tag.slice(2))
    : []

  const title = post.title || description.slice(0, 15)

  return {
    id: post.id,
    title,
    text: description,
    source: 'blogger',
    tags,
    published: post.updated,
    author: {
      name: post.author.displayName,
      avatar: `https:${post.author.image.url}`,
    },
    img: {
      url: post.content.match(/src\s*=\s*["']([^"']+)["']/)?.[1] || '',
      alt: `${title} image`,
    },
  }
}
