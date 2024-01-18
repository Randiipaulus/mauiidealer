import React, {useEffect} from 'react'
import './Services.css'
import { FaMoneyBillTransfer, FaRoadCircleExclamation, FaMoneyBillTrendUp } from "react-icons/fa6";
import { FaMoneyCheck } from "react-icons/fa";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { SiSpeedtest } from "react-icons/si";
import { GiMechanicGarage, GiFlatTire } from "react-icons/gi";
import { TiDocumentText } from "react-icons/ti";
import AOS from 'aos'
import 'aos/dist/aos.css'



const Services = () => {

    useEffect(() => {
        AOS.init({duration: 1200})
    }, [])

  return (
    <div className='all-service' data-aos='fade-up' id='services'>  
        
        <div className="container-service">
            <i><RiMoneyDollarCircleLine /></i>
            <div className="info-service">
                <p>Financing Assistance</p>
                <hr />
                <span>Providing financing options and assistance for customers to purchase a vehicle</span>
            </div>

           <p className='container-btn'>Read More</p>
        </div>
 
        
        <div className="container-service">
            <i><FaMoneyCheck /></i>
            <div className="info-service">
                <p>Leasing Services</p>
                <hr />
                <span>Offering leasing options for those who prefer to lease a car instead of buying</span>
            </div>

            <p className='container-btn'>Read More</p>
        </div>
 
        
        <div className="container-service">
            <i><FaMoneyBillTransfer /></i>
            <div className="info-service">
                <p>Trade-In Services</p>
                <hr />
                <span>Allowing customers to trade in their existing vehicles as part of the purchase process</span>
            </div>

            <p className='container-btn'>Read More</p>
        </div>
 
        
        <div className="container-service">
            <i><SiSpeedtest /></i>
            <div className="info-service">
                <p>Test Drives</p>
                <hr />
                <span>Facilitating test drives for potential buyers to experience the vehicles firsthand</span>
            </div>

            <p className='container-btn'>Read More</p>
        </div>
 
        
        <div className="container-service">
            <i><GiMechanicGarage /></i>
            <div className="info-service">
                <p>Vehicle Maintenance and Repairs</p>
                <hr />
                <span>Routine maintenance services, including oil changes, tire rotations, and fluid checks</span>
            </div>

            <p className='container-btn'>Read More</p>
        </div>
 
        
        <div className="container-service">
            <i><TiDocumentText /></i>
            <div className="info-service">
                <p>Vehicle Inspections</p>
                <hr />
                <span>Conducting pre-purchase inspections to assess the condition of used cars</span>
            </div>

            <p className='container-btn'>Read More</p>
        </div>
 
        
        <div className="container-service">
            <i><GiFlatTire/></i>
            <div className="info-service">
                <p>Tire Services</p>
                <hr />
                <span>Tire sales, rotations, balancing, and alignment services</span>
            </div>

            <p className='container-btn'>Read More</p>
        </div>
 
        
        <div className="container-service">
            <i><FaMoneyBillTrendUp /></i>
            <div className="info-service">
                <p>Trade Show and Event Participation</p>
                <hr />
                <span>Participating in community events and trade shows to showcase vehicles and services</span>
            </div>

            <p className='container-btn'>Read More</p>
        </div>
 
        
        <div className="container-service">
            <i><FaRoadCircleExclamation /></i>
            <div className="info-service">
                <p>Roadside Assistance</p>
                <hr />
                <span>Offering assistance in case of breakdowns or emergencies, including towing services</span>
            </div>

            <p className='container-btn'>Read More</p>
        </div>
 
    </div>
  )
}

export default Services