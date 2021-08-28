import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Header = styled.header`
  border: 1px solid black;
`

const HeaderContainer = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 20px;
`

const Nav = styled.nav`

`

const Logo = styled.a`
  
`

const MenuList = styled.ul`
  display: flex;
`

const MenuListItem = styled.li`
  &:not(:last-child) {
    margin-right: 20px;
  }
`

const MenuListItemLink = styled(NavLink)`
  color: red;
`

const Navbar = () => {
  return (
    <Header>
      <HeaderContainer>
        <Logo>
          Social Network SPA
        </Logo>
        <Nav>
          <MenuList>
            <MenuListItem>
              <MenuListItemLink to="/" exact>
                Home
              </MenuListItemLink>
            </MenuListItem>
            <MenuListItem>
              <MenuListItemLink to="/about">
                About
              </MenuListItemLink>
            </MenuListItem>
          </MenuList>
        </Nav>

      </HeaderContainer>
    </Header>
  )
}

export default Navbar
