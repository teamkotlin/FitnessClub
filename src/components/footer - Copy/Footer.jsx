import React from 'react'
import Github from '../../assets/github.png'
import Instagram from '../../assets/instagram.png'
import Linkedin from '../../assets/linkedin.png'
import Logo from '../../assets/logo.png'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer-container'>
        <hr />
        <div className="blur footer-blur"></div>
      <div className='social-icons'>
        <img src={Github} alt="" />
        <img src={Instagram} alt="" />
        <img src={Linkedin} alt="" />
      </div>
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
    </div>
  )
}

export default Footer
