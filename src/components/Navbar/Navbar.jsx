import React from 'react'
import './Navbar.css'
import logo from '../../assets/binary-code.png'

const Navbar = ({setContent}) => {

  const handleClick = (e) => {
    e.preventDefault()
    // setContent('/about')
    // if (e.target.innerText === 'Home') {
    if(e.target.src === true) {
      setContent('Home')
    }
    setContent(e.target.innerText)
    // }

  }
  return (
    <header>
      <nav className="navbar">
        <img className="logo-img" src={logo} onClick={handleClick} alt=""/>
        <ul className="nav-links">
          <li><a href="/about" className="links" onClick={handleClick}>About</a></li>
          <li><a href="#" className="links" onClick={handleClick}>Projects</a></li>
          <li><a href="#" className="links" onClick={handleClick}>Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
