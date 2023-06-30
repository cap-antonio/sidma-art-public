import { TBloggerPostsResponse, TPost } from './types'

export const prepareBloggerResponseToPost = (
  post: TBloggerPostsResponse,
): TPost => {
  const description = post.content.match(/<div[^>]*>(.*?)<\/div>/)?.[1] || ''
  const tagsMatches = post.content.match(/#\w+/g) || undefined
  const tags = tagsMatches ? ['blogger', ...tagsMatches] : []

  const title = post.title || description.slice(0, 150)

  return {
    id: post.id,
    title,
    text: description,
    source: 'blogger',
    tags,
    published: post.published,
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
