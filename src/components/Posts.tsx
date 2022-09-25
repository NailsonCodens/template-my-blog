import Post from 'interfacestypes/posts'
import { FC } from 'react'

import { styled } from 'stitches.config'

const PostsContainer = styled('section', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
  /* variants: {
    color: {
      red: {
        backgroundColor: 'red'
      },
      blue: {
        backgroundColor: 'blue'
      }
    }
  },
  defaultVariants: {
    color: 'blue'
  } */
})

const PostsSubContainer = styled('section', {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: '50px',
  width: '100%',
  height: '100%',
  border: 'none'
})

const PostContainer = styled('div', {
  width: 'calc(33.33333% - 40px)',
  height: '420px',
  borderRadius: '10px',
  border: '1px solid $borderpost'
})

const EmptyContainer = styled('div', {
  width: '100%',
  background: 'red'
})

const Title = styled('p', {
  fontSize: '18px',
  textAlign: 'left',
  marginLeft: '0.5rem',
  marginTop: '0.5rem',
  fontFamily: 'Mukta'
})

const Category = styled('p', {
  fontSize: '13px',
  textAlign: 'left',
  marginLeft: '0.2rem',
  marginTop: '0.5rem',
  fontFamily: 'raleway',
  fontWeight: '800',
  padding: '2px 5px',
  color: '$blue'
})

const Image = styled('img', {
  objectFit: 'cover',
  width: '100%',
  borderTopLeftRadius: '$borderTLR',
  borderTopRightRadius: '$borderTRR' // montar aqui uma regra de variavel para poder usar todas as bordas radius e poder mudar num lugar só
})

interface PostProps {
  posts: Post[]
}

const Posts: FC<PostProps> = ({ posts }: PostProps) => {
  return (
    <PostsContainer>
      <PostsSubContainer>
        {posts.map((post, index) => {
          return (
            <PostContainer key={index}>
              <Image src="https://image.shutterstock.com/image-photo/word-example-written-on-magnifying-260nw-1883859943.jpg" />
              <Category>{post.category}</Category>
              <Title>{post.title}</Title>
            </PostContainer>
          )
        })}
        {posts.length === 0 ? (
          <EmptyContainer className="emptydiv">
            Ops! Parece que você entrou no deserto do conteúdo
            <p>Encontramos um total de 0 posts</p>
          </EmptyContainer>
        ) : (
          ''
        )}
      </PostsSubContainer>
    </PostsContainer>
  )
}

export default Posts
