import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'

import {IoLogoTwitter} from 'react-icons/io'
import { BsLinkedin} from 'react-icons/bs'
import { BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
	<footer>

   <a href='#top' className='footer__logo'>T M Shakib Mahmud</a>
    <ul className='permalinks'>
      <li><a href='#top'>Home</a></li>
      <li><a href='#about'>About</a></li>
      <li><a href='#experience'>Experience</a></li>
      {/* <li><a href='#services'>Services</a></li>
      <li><a href='#portfolio'>Portfolio</a></li> 
      <li><a href='#testimonials'>Testimonials</a></li>*/}
      <li><a href='#contact'>Contact</a></li>

    </ul>

    <div className='footer__socials'>
    <a href="https://www.facebook.com/shakib.mahmood.3" target='_blank' rel="noopener noreferrer">
      <FaFacebookF/>
      </a>
      <a href="https://www.linkedin.com/in/t-m-shakib-mahmud-b5758618a" target='_blank' rel="noopener noreferrer">
      <BsLinkedin />
      </a>
      <a href="https://github.com" target='_blank'  rel="noopener noreferrer">
      <BsGithub/>
      </a>
      <a href='https://twitter.com' target='_blank' rel="noopener noreferrer">
      <IoLogoTwitter />
      </a>

     
    </div>

    <div className='footer__copyright'>
      <small>&copy; T M Shakib Mahmud. All rights reserved. </small>

    </div>

  </footer> 
  )
}

export default Footer
