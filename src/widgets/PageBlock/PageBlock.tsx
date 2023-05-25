import { FC, PropsWithChildren } from 'react'
import { FormWrapper, StyledPageBlock } from './styles'

export const PageBlock: FC<PropsWithChildren> = ({ children }) => {
  return (
    <StyledPageBlock>
      <FormWrapper>{children}</FormWrapper>
    </StyledPageBlock>
  )
}
