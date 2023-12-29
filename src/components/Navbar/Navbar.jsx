import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <p className='logo'>Logo</p>
        <ul className="nav-links">
          <li><a href="#" className="links">Home</a></li>
          <li><a href="#" className="links">About</a></li>
          <li><a href="#" className="links">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
