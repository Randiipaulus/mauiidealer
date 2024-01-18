import React, {useEffect} from 'react'
import './Contact.css'
import AOS from 'aos'
import 'aos/dist/aos.css'


const Contact = () => {

  useEffect(() => {
    AOS.init({duration: 1200})
    }, []) 

  return (
    <div className='all-contact' data-aos='fade-left' id='contact'>

      <div className="left-contact">

        <p>Contact Us</p>
        <hr />

        <span>Welcome to our Contact Page! Excited to assist you. Questions
          about our cars, test drives, or anything else? We're here! Our team
          is dedicated to ensuring your car-buying experience is top-notch. Reach
          out through the form or find our contact details below. Let's get started
          on finding your perfect car!</span>

      </div>

      <div className="right-contact">

        <p>Get in Touch</p>
        <hr />

        <div className="list-contact">
          <span>Your Name </span>
          <input type="text" placeholder=''/>
        </div>

        <div className="list-contact">
          <span>Your Last Name</span>
          <input type="text" placeholder=''/>
        </div>

        <div className="list-contact">
          <span>Phone Number</span>
          <input type="number" placeholder=''/>
        </div>

        <div className="list-contact">
          <span>Your Address</span>
          <input type="text" placeholder=''/>
        </div>

        <button>Submit</button>

      </div>
        
    </div>
  )
}

export default Contact