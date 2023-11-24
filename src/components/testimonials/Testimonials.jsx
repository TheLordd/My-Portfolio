import React from 'react'
import './testimonials.css'
import AVTR from '../../assets/avatar.png'

// import Swiper core and required modules
import {  Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  
  {
    avatar: AVTR,
    name: 'Jason Okaye',
    review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam molestiae expedita eligendi quae dignissimos eius nisi non iste sequi distinctio eum explicabo voluptatem, temporibus beatae quasi tempora! Magni, et omnis?"
  },
  {
    avatar: AVTR,
    name: 'Jason Okaye',
    review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam molestiae expedita eligendi quae dignissimos eius nisi non iste sequi distinctio eum explicabo voluptatem, temporibus beatae quasi tempora! Magni, et omnis?"
  },
  {
    avatar: AVTR,
    name: 'Jason Okaye',
    review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam molestiae expedita eligendi quae dignissimos eius nisi non iste sequi distinctio eum explicabo voluptatem, temporibus beatae quasi tempora! Magni, et omnis?"
  },
  {
    avatar: AVTR,
    name: 'Jason Okaye',
    review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam molestiae expedita eligendi quae dignissimos eius nisi non iste sequi distinctio eum explicabo voluptatem, temporibus beatae quasi tempora! Magni, et omnis?"
  },
  
]

const Testimonials = () => {
  return (
    <section id='testimonial'>
      <h5>What Clients Say About me...</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container'
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
      {
          data.map(({avatar, name, review}, index) => {
            return(
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="user image" />
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">{review}</small>
             </SwiperSlide>
            )
          })
        }
        </Swiper>
    </section>
  )
}

export default Testimonials