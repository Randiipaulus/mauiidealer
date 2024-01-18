import React, {useEffect} from 'react'
import './Ads.css'
import { FaWarehouse, FaCarSide } from "react-icons/fa";
import { IoCarSharp } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import AOS from 'aos'
import 'aos/dist/aos.css'

const Ads = () => {

    useEffect(() => {
        AOS.init({duration: 1200})
    }, [])

  return (
    <div className='all-ads' data-aos='fade-right'>
        
        <div className="containers-ads">
            <FaWarehouse className='icon-ads'/>
            <p>100+</p>
            <span>Branches</span>
        </div>
 
        
        <div className="containers-ads">
            <IoCarSharp className='icon-ads' /> 
            <p>1000+</p>
            <span>Cars Sold</span>
        </div>
 
        
        <div className="containers-ads">
            <IoIosPeople className='icon-ads' />
            <p>1000+</p>
            <span>Happy Clients</span>
        </div>
 
        
        <div className="containers-ads">
            <FaCarSide className='icon-ads' />
            <p>100+</p>
            <span>Coming to Store</span>
        </div>
 
    </div>
  )
}

export default Ads