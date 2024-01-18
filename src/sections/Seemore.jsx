import React, {useEffect} from 'react'
import './Seemore.css'
import { IoIosArrowDropdownCircle } from "react-icons/io";
import AOS from 'aos'
import 'aos/dist/aos.css'



const Seemore = ({onClick}) => {

    useEffect(() => {
        AOS.init({duration: 1100})
      }, [])


  return (
    <div className='all-see' data-aos='fade-up'>
        
        <button onClick={onClick}>Load More Cars <IoIosArrowDropdownCircle /></button>

    </div>
  )
}

export default Seemore