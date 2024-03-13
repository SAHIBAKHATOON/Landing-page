import React from 'react'
import './Header.css'
import {   Link } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6"
 
const Header = () => {
  return (
    <div className='header-section'> 
      <div className='logo'>
       <h1>Journalist</h1>
      </div>
      <div className="dropdown">
  <span><FaBarsStaggered className='bar'/> </span>
  <div className="dropdown-content">
    <p><Link to="/">Home</Link></p>
    <p><Link to="/about">About</Link></p>
    <p><Link to="/course">Courses</Link></p>
  </div>
</div>
      
      <div className='list-item'>
        <ul>       
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/course">Courses</Link></li>
        </ul>     
      </div>
      {/*  */}
      
{/*  */}
    </div>
 
  )
}

export default Header