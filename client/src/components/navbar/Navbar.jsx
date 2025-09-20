import React from 'react'
import "./Navbar.scss"

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='container'>
        <div className='logo'>
          <span className='text'>Xhinrr</span>
          <span className='dot'>.</span>
        </div>
        <div className='nav-links'>
          <span>Xhinrr Pro</span>
          <span>Explore</span>
          <span>EN</span>
          <span>Sign In</span>
          <span>Become a Seller</span>
          <button>Join</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar