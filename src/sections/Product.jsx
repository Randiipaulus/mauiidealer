import React, {useEffect, useState} from 'react'
import Items from '../components/items/Items'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Seemore from './Seemore'

const Product = () => {

  useEffect(() => {
    AOS.init({duration: 1200})
    }, [])


    const [count, setCount] =useState(3);

  const handleLoadmore = () => {
    setCount(prevCount => prevCount + 3);
  };

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth >= 1400) {
        setCount(3);
      } else if (screenWidth >= 900) {
        setCount(2);
      } else {
        setCount(1); 
      }
    };

    window.addEventListener('resize', handleResize);

    // Initial call to set count based on the initial screen width
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='all-product' data-aos='fade-up' id='product'>
        
        <div className="items-product">
          <Items count={count}/>
        </div>
        
        <Seemore onClick={handleLoadmore}/>
    </div>
  )
}

export default Product