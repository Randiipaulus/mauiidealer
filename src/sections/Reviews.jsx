import React, {useEffect} from 'react'
import './Review.css'
import Happy from '../components/happy/Happy'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Reviews = () => {

  useEffect(() => {
    AOS.init({duration: 1200})
    }, [])

  return (
    <div className='all-review' data-aos='fade-right'>
        
       <Happy />

    </div>
  )
}

export default Reviews