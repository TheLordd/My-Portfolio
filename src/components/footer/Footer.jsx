import React from 'react'
import './footer.css'
import { FaFacebook } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { FaSquareXTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>BELBA</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#Experience">Experience</a></li>
        <li><a href="#Services">Services</a></li>
        <li><a href="#Portfolio">Portfolio</a></li>
        {/* <li><a href="Testimonials">Testimonials</a></li> */}
        <li><a href="#Contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://web.facebook.com/TheLordddddd"><FaFacebook /></a>
        <a href="https://www.instagram.com/thelordbelba/"><FiInstagram /></a>
        <a href="https://twitter.com/BELBA_13"><FaSquareXTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; BELBA NGOY | 2023</small>
      </div>
    </footer>
  )
}

export default Footer