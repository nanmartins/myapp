import React from 'react'
import './Navbar.css'
import logo from '../../assets/binary-code.png'

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <img className="logo-img" src={logo} alt=""/>
        <ul className="nav-links">
          <li><a href="#" className="links">About</a></li>
          <li><a href="#" className="links">Projects</a></li>
          <li><a href="#" className="links">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
