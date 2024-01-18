import React from 'react';
import './Happy.css'
import client from '../assets/client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


 
const Happy = () => {

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      };

  return (
    <div className='all-happy'>

        <p className='title-happy'>Best in the car bussiness we dont say it</p>
        <span className='title2-happy'>Our Custumer says it</span>
                    
        <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="list-happy"
      >
            {client.map(client =>
                
                <SwiperSlide key={client.id} className='item-happy'>
                    
                    <div className="left-side-happy">
                        <img src={client.photo} alt="" />
                        <p>{client.location}</p>
                    </div>

                    <div className="right-side-happy">
                        <p>{client.review}</p>
                        <span>{client.star}</span>
                    </div>

                </SwiperSlide>

                )}

            </Swiper>

    </div>
  )
}

export default Happy