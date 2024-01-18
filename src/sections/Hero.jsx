import React, {useEffect} from 'react'
import 'swiper/css';
import Slider from '../components/slider/Slider';
import AOS from 'aos'
import 'aos/dist/aos.css'


const Hero = () => {

  useEffect(() => {
    AOS.init({duration: 1200})
    }, [])

  return (
    <div className='all-hero' data-aos='fade-up' id='hero'>
       
      <div className="slider-hero">
        <Slider />
      </div> 

        

    </div>
  )
}

export default Hero