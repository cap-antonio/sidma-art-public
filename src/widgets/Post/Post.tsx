import { FC } from 'react'
import { useParams } from 'react-router-dom'

export const Post: FC = () => {
  const { postId } = useParams()
  console.log(postId)
  return <></>
}
