import React from 'react'
import './portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import Sidebar from "../../img/sidebar.png"
import Ecommerce from '../../img/ecommerce.png'
import HDC from '../../img/hoc.png'
import MusicApp from '../../img/musicapp.png'
import 'swiper/css'
import { themeContext } from '../../Context'
import { useContext } from 'react'


const Portfolio = () => {
  const theme = useContext (themeContext);
  const darkMode = theme.state.darkMode;
return (
    <div className="portfolio" id='Porfolio'>
      {/* heading */}
      <span style={{color: darkMode? 'white': ''}}> Recent Projects </span>
      <span> Porfolio </span>

      {/* slider */}
      <Swiper
      spaceBetween={30}
      slidesPerView={3}
      grabCursor={true}
      className='portfolio-slider'
      >
      <SwiperSlide>
          <img src={Sidebar} alt="" srcset="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" srcset="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" srcset="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HDC} alt="" srcset="" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Portfolio