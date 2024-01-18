import React, {useEffect} from 'react'
import './Coming.css'
import c1 from '../components/assets/c1.png'
import c2 from '../components/assets/c2.png'
import c3 from '../components/assets/c3.png'
import c4 from '../components/assets/c4.png'
import c5 from '../components/assets/c5.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import AOS from 'aos'
import 'aos/dist/aos.css'

const Coming = () => {

    useEffect(() => {
        AOS.init({duration: 1200})
    }, [])

  return (
    <div className='all-coming' data-aos='fade-up' id='coming'>
        <p>Available On Store Soon</p>
        <span>Stay Toned!</span>
        <hr />
        <>
            <Swiper 
            navigation={true} 
            modules={[Navigation]} 
            breakpoints={{
                1280: {
                  slidesPerView: 3,
                },
                980: {
                  slidesPerView: 2,
                },
                500: {
                  slidesPerView: 1,
                },
            }}
            className="slide-coming">

            <SwiperSlide>
                <img src={c1} alt="" />
                <p>Dodge Charger - 2021</p>
                <i>Coming Soon</i>
                </SwiperSlide>

            <SwiperSlide>
                <img src={c2} alt="" />
                <p>Lambo - 2021</p>
                <i>Coming Soon</i>
                </SwiperSlide>

            <SwiperSlide>
                <img src={c3} alt="" />
                <p>Porche - 2022</p>
                <i>Coming Soon</i>
                </SwiperSlide>

            <SwiperSlide>
                <img src={c4} alt="" />
                <p>Audi - 2023</p>
                <i>2021</i>
                </SwiperSlide>

            <SwiperSlide>
                <img src={c5} alt="" />
                <p>Porche 911 - 2021</p>
                <i>Coming Soon</i>
                </SwiperSlide>
    
        </Swiper>
        </>

    </div>
  )
}

export default Coming