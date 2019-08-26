import React, { useState } from 'react'
import { routes } from '../const/routes'
import { NavLink } from 'react-router-dom'
import { Dropdown } from 'semantic-ui-react'


import { NavContainer,
         NavRow,
         NavLeft,
         NavRight,
         NavMiddle,
         Link,
         HamburgerContainer,
         HamburgerBar,
         Overlay
 } from './style'


const NavBar = ({ routes = [] }) => {
  const [ isOpen, setIsOpen ] = useState(false)



  window.onresize = () => (window.innerWidth > 900 && isOpen) && setIsOpen(false)

  console.log(isOpen);
  return (
    <NavContainer color={'pink'}>
      <NavRow>
        <NavLeft>
          <p> VIDYA GAMES </p>
        </NavLeft>
        <NavMiddle> </NavMiddle>
          <Dropdown text='Consoles'>
            <Dropdown.Menu>
              <Link to ='/home'> <Dropdown.Item text='PC' /></ Link>
              <Dropdown.Divider />
              <Link to ='/ps'><Dropdown.Item text='PS4' /></ Link>
              <Dropdown.Divider />
              <Link to ='/>'><Dropdown.Item text='NINTENDO SWITCH' /></ Link>
              <Dropdown.Divider />
              <Link to ='/>'><Dropdown.Item text='XBOX ONE' /></ Link>
            </Dropdown.Menu>
          </Dropdown>

        <NavRight>
          {
            routes.map(route =>
              <Link exact to={`/${route}`}>{route}</Link>
            )
          }

          <Hamburger setIsOpen={setIsOpen} isOpen={isOpen} />
        </NavRight>
      </NavRow>
      <Overlay className={isOpen ? "show" : "hide"}>
      {
            routes.map(route =>
              <Link exact to={`/${route}`}>{route}</Link>
            )
          }

      </Overlay>
    </NavContainer>
  )
}

 const Hamburger = ({setIsOpen, isOpen}) =>
  <HamburgerContainer className={isOpen ? "open" : "closed"} onClick={() => setIsOpen(!isOpen)}>
    <HamburgerBar></HamburgerBar>
    <HamburgerBar></HamburgerBar>
    <HamburgerBar></HamburgerBar>
  </HamburgerContainer>

  export default NavBar
