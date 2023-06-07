import { FC } from 'react'
import { StyledBlogPage } from './styles'
import { PageHeader } from 'src/widgets'

export const BlogPage: FC = () => {
  return (
    <StyledBlogPage>
      <PageHeader>Блог</PageHeader>
      Blog content
    </StyledBlogPage>
  )
}
