import React from 'react'
import  "./Hero.css";
import heroImg from '../images/journalist.webp'
const Hero = () => {
  return (
   <div className='hero'>
     <div className='hero-section'>
        <div>
            <h2>Welcome to an Exclusive Journey into the World of Journalism!</h2>
            <p>Are you passionate about storytelling, uncovering truths, and making an impact through words? Join Mr. Arun, a seasoned journalist with decades of experience, on a transformative two-week online course designed just for you!</p>
            <button>More about Journalist</button>
        </div>
        <div className='hero-img'>
            <img src={heroImg} alt="" />
        </div>
    </div>
   </div>
  
  )
}

export default Hero