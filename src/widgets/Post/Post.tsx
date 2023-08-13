import { useFetchPostQuery } from '@shared/api'
import { useRouter } from 'next/router'
import { FC } from 'react'

export const Post: FC = () => {
  const { id } = useRouter().query as { id: string }
  const { data } = useFetchPostQuery(id)
  return <>{JSON.stringify(data)}</>
}
