import { styled } from 'stitches.config'
import { FC } from 'react'

const Header = styled('header', {
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  height: '60px',
  lineHeight: '60px',
  background: '$grey',
  '@bp3': {
    justifyContent: 'center',
    fontFamily: 'Poppins',
    fontWeight: '400',
    letterSpacing: '-1px'
  }
})

const Navbar = styled('nav', {
  '@bp3': {
    width: '1200px'
  },
  height: '50px'
})

const NavbarItem = styled('a', {
  width: '200px',
  margin: '20px',
  color: '$white',
  fontSize: '15px'
})

const Blog = styled('a', {
  width: '200px',
  margin: '20px',
  color: '$blue',
  fontSize: '15px',
  fontWeight: '600',
  textTransform: 'uppercase'
})

const Menu: FC = () => {
  return (
    <Header>
      <Navbar>
        <Blog
          css={{
            marginLeft: '0px'
          }}
        >
          Blog
        </Blog>
        <NavbarItem>Novidades</NavbarItem>
        <NavbarItem>Curiosidades</NavbarItem>
        <NavbarItem>Explode cabeça</NavbarItem>
      </Navbar>
    </Header>
  )
}

export default Menu
