import { FC } from 'react'
import { useParams } from 'react-router-dom'
import { StyledBlogPostPage } from './styles'

export const PostPage: FC = () => {
  const { postId } = useParams()
  console.log({ postId })
  return <StyledBlogPostPage> </StyledBlogPostPage>
}
