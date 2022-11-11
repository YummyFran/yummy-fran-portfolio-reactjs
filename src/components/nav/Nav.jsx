import React from 'react'
import github from '../../assets/github.svg'
import './Nav.css'

function Nav() {
  return (
    <nav>
      <div className="logo clickable" >
        <div className="logo-icon">YF</div>
        <div className="name">Yummy Fran</div>
      </div>
      <ul>
        <li className='clickable'><a href="#" >Home</a></li>
        <li className='clickable'><a href="#">About</a></li>
        <li className='clickable'><a href="#">Contact</a></li>
      </ul>
      <div className="visit clickable">
        <a href="#">Visit me</a>
        <img src={github} alt="github" />
      </div>
    </nav>
  )
}

export default Nav
