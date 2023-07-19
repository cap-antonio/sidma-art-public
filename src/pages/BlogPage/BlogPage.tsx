import { FC } from 'react'
import { StyledBlogPage } from './styles'
import { PageHeader } from 'src/entities'
import { Feed } from 'src/widgets'

export const BlogPage: FC = () => {
  return (
    <StyledBlogPage>
      <PageHeader>Блог</PageHeader>
      <Feed />
    </StyledBlogPage>
  )
}
