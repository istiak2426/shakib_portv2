import React from 'react'
import { BsLinkedin} from 'react-icons/bs'
import { BsFacebook} from 'react-icons/bs'
import { FaInstagram } from "react-icons/fa";



const HeaderSocials = () => {
  return (
	<div className='header__socials'>
		<a href="https://www.linkedin.com/in/t-m-shakib-mahmud-b5758618a" target='_blank' rel="noopener noreferrer" ><BsLinkedin/></a>
		<a href="https://www.instagram.com/tm.shakib/" target='_blank'  rel="noopener noreferrer"><FaInstagram/></a>
		<a href="https://www.facebook.com/shakib.mahmood.3" target='_blank' rel="noopener noreferrer"><BsFacebook/></a>
	</div>
  )
}

export default HeaderSocials