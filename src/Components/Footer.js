import React from 'react'
import logo from '../Images/logo.svg';
import find from '../Images/icon-location.svg';
import phone from '../Images/icon-phone.svg';
import email from '../Images/icon-email.svg';
import { BsFacebook } from "react-icons/bs";
import {BsTwitter } from "react-icons/bs";
import {BsInstagram } from "react-icons/bs";


function Footer() {
  return (
    <div className='footer'>
        <img src={logo} alt='logo'/>
        <div className='footer-content'>
        <div className='footer-one'>
        <img className='find' src={ find} alt='find'/>

        <p className='footer-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br/>incididunt ut labore et 
  dolore magna aliqua</p>
        </div>

        <div className="footer-two">
            <div className='icon'>
                <img src={phone} alt='phone'/>
                <p>+1-543-123-4567</p>

            </div>
            <div className='icon'>
            <img src={email} alt='phone'/> 
            <p>example@fylo.com</p>
            </div>
        </div>
        
        <div className='footer-three'>
            <p className='p-color'>About Us</p>
            <p className='p-color'>Jobs</p>
            <p className='p-color'>Press</p>
            <p className='p-color'> Blog</p>
        </div>

        <div className='footer-three'>
        <p className='p-color'>Contact Us</p>
            <p className='p-color'>Terms</p>
            <p className='p-color'>Privacy</p>
        </div>

        <div className='footer-icons'>
        <BsFacebook/>
        <BsTwitter/>
        <BsInstagram/>

        </div>
</div>

<p class="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a href="https://github.com/BushraSayed72">Bushra Sayed</a>.
    </p>
    </div>
  )
}

export default Footer