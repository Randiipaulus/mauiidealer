import React, { useState } from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'
import { MdLanguage } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosPerson } from "react-icons/io";
import { Link } from 'react-scroll';
import Login from '../../sections/Login';
import { IoMenuSharp } from "react-icons/io5";
import { IoCloseCircleOutline } from "react-icons/io5";



const Navbar = () => {

    const [open, setOpen]= useState(false)
    const [isActive, setIsActive] = useState(false);


    function openSide(){
      const sidebar = document.querySelector('.sidebar')
      sidebar.style.display = 'flex'
    }


    function closeSide(){
      const sidebar = document.querySelector('.sidebar')
      sidebar.style.display = 'none'
    }


  return ( 
    
    <div className="all-nav">
      <header className='bar-nav'>

        <div className="list-nav">
          <img src={logo} alt="" />

          <ul className="list-items">

          <Link to="hero" spy={true} smooth={true} offset={-100} duration={850}>
            <li>Home</li>
          </Link>            
            
          <Link to="coming" spy={true} smooth={true} offset={-150} duration={850}>
            <li>coming</li>
          </Link>

          <Link to="product" spy={true} smooth={true} offset={-110} duration={850}>
            <li>Vehicles</li>
          </Link>

          <Link to="services" spy={true} smooth={true} offset={-250} duration={850}>
            <li>Services</li>
          </Link>

          <Link to="contact" spy={true} smooth={true} offset={-150} duration={850}>
            <li>Contact Us</li>
          </Link>


          </ul>
        </div>

        <div className="icon-nav">
          <hr />
          <MdLanguage  className='icon-self-nav'/><p>English</p>
          <FaLocationDot className='icon-self-nav'/> <p>Find a Dealer</p>
          <IoIosPerson className='icon-self-nav'/> 
          <p 
            onClick={()=>{
              setOpen(!open);
              setIsActive(!isActive); 
            }}
            className='person-login'
            style={{
              cursor: 'pointer',
              color: isActive ? 'red' : 'white',  
              transform: isActive ? 'scale(1.25)' : 'scale(1)',
              fontWeight: isActive ? '600' : '500',
            }}
            >Login</p>
        </div>

      </header>

      {
        open?<Login />:null 
      }
      
        <div className="small-screen">

          <img src={logo} alt="" />

            <button onClick={openSide}><IoMenuSharp  className='open-side'/></button>

          <div className="sidebar">

            <ul className="items-sidebar">

            <Link to="hero" spy={true} smooth={true} offset={-100} duration={850}>
              <li>Home</li>
            </Link>            
              
            <Link to="coming" spy={true} smooth={true} offset={-150} duration={850}>
              <li>coming</li>
            </Link>

            <Link to="product" spy={true} smooth={true} offset={-110} duration={850}>
              <li>Vehicles</li>
            </Link>

            <Link to="services" spy={true} smooth={true} offset={-250} duration={850}>
              <li>Services</li>
            </Link>

            <Link to="contact" spy={true} smooth={true} offset={-150} duration={850}>
              <li>Contact Us</li>
            </Link>

            <button onClick={closeSide}><IoCloseCircleOutline className='close-side'/></button>

              </ul>

          </div>

        </div>


      </div>

  )
}

export default Navbar