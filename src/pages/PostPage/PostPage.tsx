import { FC } from 'react'

import { StyledBlogPostPage } from './styles'
import { Post } from 'src/widgets'

export const PostPage: FC = () => {
  return (
    <StyledBlogPostPage>
      <Post />
    </StyledBlogPostPage>
  )
}
