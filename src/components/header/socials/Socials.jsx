import React from 'react'
import './Socials.css'
import github from '../../../assets/github.svg'
import facebook from '../../../assets/facebook.svg'
import instagram from '../../../assets/instagram.svg'

function Socials() {
  return (
    <div className="socials">
        <img src={github} alt="github" className='clickable'/>
        <img src={facebook} alt="facebook" className='clickable'/>
        <img src={instagram} alt="instagram" className='clickable'/>
    </div>
  )
}

export default Socials
