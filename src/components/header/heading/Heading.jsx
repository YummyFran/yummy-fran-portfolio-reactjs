import React from 'react'
import './Heading.css'

function Heading() {
  return (
    <div className="heading">
      <p>Hi there!</p>
      <h1>I’m Yummy Fran</h1>
      <p>a <span>web developer</span></p>
      <div className="buttons">
        <a href="#" className='clickable'>Download CV</a>
        <button className='clickable'>View Projects</button>
      </div>
    </div>
  )
}

export default Heading
