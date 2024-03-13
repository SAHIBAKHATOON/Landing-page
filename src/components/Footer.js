import React from 'react'
import './Footer.css'
import { MdCall } from "react-icons/md";
import { FaFacebook,FaInstagram , FaTwitter,FaYoutube  } from "react-icons/fa";
const Footer = () => {
     
  return (
   <>
   <div className='footer'>
     <div className='footer-section'> 
     <div className='about'>
     <h3>About Us</h3>
     <ul>
        <li>Home</li>
        <li>About</li>
        <li>Courses</li>
     </ul>
     </div>
     <div className='contact'>
     <h3>Contact Us</h3>
     <ul>
        <li><MdCall /> +914567943234</li>
        <li><MdCall /> 3463332943</li>
     </ul>
     </div>
     <div className='email'>
     <h3>E-mail</h3>

     <ul>
      <li>Term and Service</li>
      <li>Privacy Policy</li>
        <li>abc@gmail.com</li>
          
     </ul>
     </div>
     <div className='social-icon'>
     <FaFacebook />
     <FaInstagram />
     <FaTwitter />
     <FaYoutube />
     </div>
     
    </div>
   </div>
    
   </>
   
  )
}

export default Footer