import React from 'react'
import { Nav, NavLink } from './NavbarElement'

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/" >
          Home
        </NavLink>
        <NavLink to="/characters" activeStyle>
          Characters
        </NavLink>
        <NavLink to="/artifacts" activeStyle>
          Artifacts
        </NavLink>
        <NavLink to="/weapons" activeStyle>
          Weapons
        </NavLink>
      </Nav>
    </>
  )
}

export default Navbar;