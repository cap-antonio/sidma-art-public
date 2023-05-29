import { FC } from 'react'

import { Button, Input, Textarea } from 'src/shared/ui'
import { PageBlock, PageHeader } from 'src/widgets'
import { StyledContactsPage, FormWrapper } from './styles'

export const ContactsPage: FC = () => {
  return (
    <StyledContactsPage>
      <PageHeader>Контакты</PageHeader>
      <PageBlock>
        <FormWrapper>
          <Input placeholder="Name" margin="8px 0px" />
          <Input placeholder="email" margin="8px 0px" />
          <Textarea placeholder="Сообщение" margin="8px 0px" />
          <Button margin="8px 0px">Submit</Button>
        </FormWrapper>
      </PageBlock>
    </StyledContactsPage>
  )
}
