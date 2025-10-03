import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <Link to='/'><img src={assets.logo} alt="" /></Link> 
          <p>Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Impedit vero totam in tenetur ea sequi natus quis,
            magni magnam sed perferendis quod debitis laudantium animi placeat expedita, quidem dolor odio.</p>

            <div className="footer-social-icon">
              <img src={assets.facebook_icon} alt="" />
              <img src={assets.twitter_icon} alt="" />
              <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <li>Home</li>
          <li>About Us</li>
          <li>Delivery</li>
          <li>Privacy Policy</li>
        </div>
        <div className="footer-content-right">
                <h2>Get In Touch</h2>
                <ul>
                  <li>+1-323-232-4244</li>
                  <li>ContactfOOdie@Gmail.com</li>
                </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2025 @ fOOdie.com- ALL Right Reserved</p>
    </div>
  )
}

export default Footer
