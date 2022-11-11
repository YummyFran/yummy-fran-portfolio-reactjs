import React from 'react'
import './Header.css'

/*===== Components =====*/
import Nav from '../nav/Nav'
import Heading from './heading/Heading'
import Socials from './socials/Socials'
import Scroll from './scroll/Scroll'

function Header() {
  return (
    <header>
      <div className="container">
        <Nav />
        <Heading />
        <Socials />
        <Scroll />
      </div>
    </header>
  )
}

export default Header
