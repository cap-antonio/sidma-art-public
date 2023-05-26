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
          <Input placeholder="Name" variant="secondary" margin="8px 0px" />
          <Input placeholder="email" variant="secondary" margin="8px 0px" />
          <Textarea
            placeholder="Сообщение"
            variant="secondary"
            margin="8px 0px"
          />
          <Button variant="secondary" margin="8px 0px">
            Submit
          </Button>
        </FormWrapper>
      </PageBlock>
    </StyledContactsPage>
  )
}
