import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import homeImg from '../images/home.svg'
import aboutImg from '../images/about.svg'
import enterImg from '../images/enter.svg'
import logoImg from '../images/logo.svg'

const Header = styled.header`
  border-bottom: 1px solid #d9d9d9;
  border-top: px solid #d9d9d9;
  
`

const HeaderContainer = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
`

const Nav = styled.nav`

`

const Logo = styled.a`
  display: flex;
  align-items: center;

`

const LogoImage = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 20px;
`

const NavImage = styled.img`
  width: 25px;
  height: 25px;
`

const MenuList = styled.ul`
  display: flex;
`

const MenuListItem = styled.li`
  &:not(:last-child) {
    margin-right: 30px;
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
          <LogoImage
            src={logoImg}
            alt="logo-img"
          />
        </Logo>
        <Nav>
          <MenuList>
            <MenuListItem>
              <MenuListItemLink to="/" exact>
                <NavImage
                  src={homeImg}
                  alt="home"
                />
              </MenuListItemLink>
            </MenuListItem>
            <MenuListItem>
              <MenuListItemLink to="/about">
                <NavImage
                  src={aboutImg}
                  alt="about"
                />
              </MenuListItemLink>
            </MenuListItem>
            {/* <MenuListItem>
              <MenuListItemLink to="/createcard">
                CreateCard
              </MenuListItemLink>
            </MenuListItem> */}
            <MenuListItem>
              <MenuListItemLink to="/auth">
                <NavImage
                  src={enterImg}
                  alt="about"
                />
              </MenuListItemLink>
            </MenuListItem>
          </MenuList>
        </Nav>

      </HeaderContainer>
    </Header>
  )
}

export default Navbar
