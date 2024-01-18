import React from 'react'
import './Items.css'
import cars from '../assets/cars'
import { FaMapLocation } from "react-icons/fa6";
import { FaTachometerAlt, FaCar, FaCheckCircle } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { PiEngineFill } from "react-icons/pi";



const items = ( {count }) => {

  const all_cars = cars.slice(0, count);
  
  return (
    <div className='all-item'>

      <p className='title-item'>Our Selection of Cars avaliable</p>
      <p className='sec-title-item'>Today!</p>
      
      <ul className='container-item'>
        {all_cars.map(cars =>

          <li key={cars.id} className='li-item'> 
              <img src={cars.photo} alt="" />
              <p>{cars.year} {cars.brand} {cars.model}</p>


             <div className="info-item">
                <p><FaTachometerAlt /> {cars.miles1},{cars.miles2}</p>
                  <hr />
                <p><FaCar /> {cars.transmition}</p>
                  <hr />
                <p><FaMapLocation /> {cars.location}</p>
              </div>


                <i>${cars.price1},{cars.price2}</i>

              <ul className="extra-item">
                <li><FaCheckCircle className='icon-item1'/> {cars.accident}</li>
                <li><FaCar className='icon-item2'/> {cars.Body}</li>
                <li><PiEngineFill className='icon-item3'/> {cars.Engine}</li>
                <li><BsFillFuelPumpFill className='icon-item4'/> {cars.fuel}</li>
                <li><IoIosPeople className='icon-item5'/> {cars.owner}</li>
              </ul>

          </li>
          )}

      </ul>
    </div>
  )
}

export default items