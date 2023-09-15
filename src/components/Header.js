import React from "react"
import { Nav, NavItem } from "reactstrap"
import { NavLink } from "react-router-dom"
import './Header.css'

const Header = ({ currentUser, signOut }) => {
  const handleClick = () => {
    signOut()
  }

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
      {/* currentuser exists */}
      {currentUser && (
        <>
        <NavItem>
          <NavLink to="/myapartments" className="nav-link">
            My Apartments
          </NavLink>
        </NavItem>
        <NavItem>
        <NavLink to="/" className="nav-link" onClick={handleClick}>
          Sign Out
        </NavLink>
      </NavItem>
      </>
      )}
      {/* currentuser is false aka doesn't exist */}
      {!currentUser && (
        <>
          <NavItem>
            <NavLink to="/signin" className="nav-link">
              Log In
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/signup" className="nav-link">
              Sign Up
            </NavLink>
          </NavItem>
          
        </>
      )}
    </Nav>
  )
}

export default Header