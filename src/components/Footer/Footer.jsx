import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <>
      <div className="footer" id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                 <img src={assets.logo}  className='footer-logo' alt='' />
                 <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit, animi!</p>
                 <div className="footer-social-icons">
                    <a href="https://www.facebook.com/Aadityadav.comm" target="_blank" rel="noopener noreferrer">
                    <img src={assets.facebook_icon} alt="" />
                    </a>

                    <a href="https://www.instagram.com/aadityadavvv/" target="_blank" rel="noopener noreferrer">
                    <img src={assets.twitter_icon} alt="" />
                    </a>

                    <a href="https://www.linkedin.com/in/aadit-yadav-b17636258/" target="_blank" rel="noopener noreferrer">
                    <img src={assets.linkedin_icon} alt="" />
                    </a>
                 </div>
            </div>


         <div className="footer-content-center">
             <h2>COMPANY</h2>
             <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
             </ul>
            </div>


            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>

                <ul>
                    <li>9821747900</li>
                    <li>aadityadav.dev@gmail.com</li>
                </ul>
            </div>
           
        </div>
         <hr />
         <p>All rights reserved. © 2025 Copyright@2025 | Powered by AADITYADAV </p>
      </div>

    </>
  )
}

export default Footer