import React from 'react';
import logo from '../Images/logo.svg';
import '../App.css';

function Navbar() {
  return (
    <div className='navbar'>
        <img src={logo} alt='logo'/>
    
    <ul class="navbar_right ">
        <li>Features</li>
        <li>Team</li>
        <li>Sign In</li>
    
    </ul>
    </div>
  )
}

export default Navbar