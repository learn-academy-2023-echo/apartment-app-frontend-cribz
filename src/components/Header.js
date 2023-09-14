import React from "react"
import { Nav, NavItem } from "reactstrap"
import { NavLink } from "react-router-dom"
import './Header.css'

const Header = () => {
  return (
    <Nav className='nav-bar'>
      <NavItem>
        <NavLink to="/" className="nav-link">
          Home Page
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/apartmentindex" className="nav-link">
          See All Apartments
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/apartmentnew" className="nav-link">
          New Apartment
        </NavLink>
      </NavItem>
    </Nav>
  )
}

export default Header