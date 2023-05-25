import { FC } from 'react'

import { StyledContactsPage } from './styles'

import { Button, Input, Textarea } from 'src/shared/ui'
import { PageBlock, PageHeader } from 'src/widgets/index'

export const ContactsPage: FC = () => {
  return (
    <StyledContactsPage variant="primary">
      <PageHeader>Контакты</PageHeader>
      <PageBlock>
        <Input placeholder="Имя" variant="secondary" margin="16px" />
        <Input placeholder="email" variant="secondary" margin="16px" />
        <Textarea placeholder="Сообщение" variant="secondary" margin="16px" />
        <Button variant="secondary" margin="16px">
          Submit
        </Button>
      </PageBlock>
    </StyledContactsPage>
  )
}
