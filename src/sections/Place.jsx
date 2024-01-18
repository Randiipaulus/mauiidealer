import React, {useEffect} from 'react'
import './Place.css'
import AOS from 'aos'
import 'aos/dist/aos.css'



const Place = () => {

    useEffect(() => {
        AOS.init({duration: 1200})
    }, []) 

  return (
    <div className='all-place' data-aos='fade-up'>
        
            <p>Directions or Phone Number </p>
            <i>Find Us Here</i>

        <div className="container-place">

            <div className="left-place">

                <iframe 
                title="Google Maps Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d195600.62651656457!2d-75.28283529109018!3d40.00264429450516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6b7d8d4b54beb%3A0x89f514d88c3e58c1!2sPhiladelphia%2C%20PA!5e0!3m2!1sen!2sus!4v1705182990877!5m2!1sen!2sus" />
            </div>

            <div className="right-place">

                <span>For any question or help need it contact out team at  </span>
                    <br />
                <span>1-344-674-3456</span>
                    <br />
                    <br />
                <span>Avaliable 24/7</span>
                    
                
            </div>
        </div>
    </div>
  )
}

export default Place