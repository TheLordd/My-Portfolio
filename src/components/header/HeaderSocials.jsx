import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/belba-ngoy-aa46781a0/" target='_blank'><BsLinkedin /></a>
        <a href="https://github.com/TheLordd" target='_blank'><FaGithub /></a>
        <a href="https://www.instagram.com/thelordbelba/" target='_blank'><FaInstagramSquare /></a>
        <a href="https://www.facebook.com/TheLordddddd" target='_blank'><FaFacebookSquare /></a>

    </div>
  )
}

export default HeaderSocials