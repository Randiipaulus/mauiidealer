import React from 'react';
import './Footer.css'
import { CiLocationOn } from "react-icons/ci";
import { FaPhone, FaFacebook, FaInstagram } from "react-icons/fa";
import { MdOutlinePhonelink } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import logo from '../assets/logo.png'
   
const Footer = () => {
  return (
    <div className='all-footer'>

      <div className="container-footer">

        <img src={logo} alt="" />

        <div className="branches-f">
          <p>Our Branches</p>
            
          <ul className="bran-list-f">
            <li><CiLocationOn /> New York</li>
            <li><CiLocationOn /> Florida</li>
            <li><CiLocationOn /> Indiana</li>
            <li><CiLocationOn /> California</li>
            <li><CiLocationOn /> Texas</li>
          </ul>
        </div>

        <div className="branches-f">
          <p>Support</p>
          <ul className="bran-list-f">
            <li><FaPhone /> 1-351-349-6855</li>
            <li><IoIosMail /> MauiiDealer@Gmail.com</li>
            <li><MdOutlinePhonelink /> Support me</li>
          </ul>
        </div>

        <div className="branches-f">
          <p>Social Media</p>
            
          <ul className="bran-list-f">
            <li><FaFacebook /> Facebook</li>
            <li><FaInstagram /> Instagram</li>
            <li><FaSquareXTwitter /> X</li>
            <li><SiGmail /> Gmail</li>
          </ul>
        </div>

        <div className="letter-footer">
          <p>Our NewsLetter</p>

          <span>Be the first to know about 
            exciting new designs, special events
            and much more.</span>

          <input type="text" placeholder='Enter your email address'/>
          <i>Sign Up</i>
        </div>

      </div>

      <div className="copy-f">
        <p>Copyrights © | All Rights Reserved</p>
      </div>

    </div>
  )
}

export default Footer