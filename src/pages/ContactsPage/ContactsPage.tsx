import { FC } from 'react'
import { PageBlock, PageHeader } from '@entities'
import { Button, Input, Textarea } from '@shared/ui'

import './styles.scss'

export const ContactsPage: FC = () => {
  return (
    <section>
      <PageHeader>Contacts</PageHeader>
      <PageBlock>
        <div className="form-wrapper">
          <Input placeholder="Name" className="margin" />
          <Input placeholder="email" className="margin" />
          <Textarea placeholder="Сообщение" className="margin" />
          <Button className="margin">Submit</Button>
        </div>
      </PageBlock>
    </section>
  )
}
