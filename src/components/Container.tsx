import { styled } from 'stitches.config'
import { FC } from 'react'
import { Props } from 'next/script'

const Main = styled('div', {
  '@bp3': {
    width: '1200px'
  }
})

const Containers = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: '10px',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  '&.containers-blog': {
    marginTop: '4rem'
  }
})

const Container: FC<Props> = ({ children }) => (
  <Containers className="containers-blog">
    <Main>{children}</Main>
  </Containers>
)

export default Container
