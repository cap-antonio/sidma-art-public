import { useRouter } from 'next/router'
import { FC } from 'react'

export const Post: FC = () => {
  const { id } = useRouter().query as { id: string }
  return <>{JSON.stringify(id)}</>
}
