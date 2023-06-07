import { FC } from 'react'
import { StyledBlogPage } from './styles'
import { PageHeader } from 'src/widgets'

const posts = [
  {
    id: 1,
    title: 'What is Lorem Ipsum?',
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    date: 1686137522,
    source: 'instagram',
    tags: ['art', 'idea', 'design'],
    author: {
      name: 'Author name',
      role: 'artist',
    },
    img: {
      url: 'https://www.vectornator.io/blog/content/images/2022/07/what-is-vector-art.widget.png',
      alt: 'akt text',
    },
  },
  {
    id: 2,
    title: 'What is Lorem Ipsum?',
    text: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`,
    date: 1686137522,
    source: 'instagram',
    tags: ['art', 'idea', 'design'],
    author: {
      name: 'Author name',
      role: 'artist',
    },
    img: {
      url: 'https://img.freepik.com/free-vector/hand-drawn-picasso-style-illustration_23-2149577319.jpg',
      alt: 'akt text',
    },
  },
  {
    id: 3,
    title: 'What is Lorem Ipsum?',
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    date: 1686137522,
    source: 'instagram',
    tags: ['art', 'idea', 'design'],
    author: {
      name: 'Author name',
      role: 'artist',
    },
    img: {
      url: 'https://cdnb.artstation.com/p/assets/images/images/027/186/743/large/mani-frkz-master-01.jpg?1590832050',
      alt: 'akt text',
    },
  },
  {
    id: 4,
    title: 'What is Lorem Ipsum?',
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    date: 1686137522,
    source: 'instagram',
    tags: ['art', 'idea', 'design'],
    author: {
      name: 'Author name',
      role: 'artist',
    },
    img: {
      url: 'https://i.pinimg.com/originals/c0/54/5a/c0545ac22c75708ffcb8c4a4007c0b4b.jpg',
      alt: 'akt text',
    },
  },
  {
    id: 5,
    title: 'What is Lorem Ipsum?',
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    date: 1686137522,
    source: 'instagram',
    tags: ['art', 'idea', 'design'],
    author: {
      name: 'Author name',
      role: 'artist',
    },
    img: {
      url: 'https://img.freepik.com/premium-vector/astronaut-catching-star-illustration_153233-328.jpg',
      alt: 'akt text',
    },
  },
  {
    id: 6,
    title: 'What is Lorem Ipsum?',
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    date: 1686137522,
    source: 'instagram',
    tags: ['art', 'idea', 'design'],
    author: {
      name: 'Author name',
      role: 'artist',
    },
    img: {
      url: 'https://cdn.pixabay.com/photo/2020/08/19/09/52/vector-art-5500539_960_720.jpg',
      alt: 'akt text',
    },
  },
]

export const BlogPage: FC = () => {
  return (
    <StyledBlogPage>
      <PageHeader>Блог</PageHeader>
    </StyledBlogPage>
  )
}
