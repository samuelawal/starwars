import React from 'react'
import logo from '../assets/starwars-logo.png'
const StarwarsLogo = () => {
  return (
    <div className='myLogo'>
    <img src={logo} alt="star wars logo" width="300"/>
    <p className='logo_text'>The Force awaits you..</p>
    </div>
  )
}

export default StarwarsLogo