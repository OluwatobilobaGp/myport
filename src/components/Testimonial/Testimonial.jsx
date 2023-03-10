import React from 'react'
import './testimonial.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import profilePic1 from '../../img/profile1.jpg'
import profilePic2 from '../../img/profile2.jpg'
import profilePic3 from '../../img/profile3.jpg'
import profilePic4 from '../../img/profile4.jpg'
import profilePic5 from '../../img/profile5.jpg'
import profilePic6 from '../../img/profile6.jpg'
import { Pagination } from "swiper";
import 'swiper/css/pagination';
import 'swiper/css'


const Testimonial = () => {

    const clients =[
        {
            img: profilePic1,
            review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur expedita temporibus ipsa ea officia nulla quam quas rem voluptatum, dolor eum reprehenderit illum asperiores quis placeat eaque eveniet vitae voluptates.",
        },
        {
            img: profilePic2,
            review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur expedita temporibus ipsa ea officia nulla quam quas rem voluptatum, dolor eum reprehenderit illum asperiores quis placeat eaque eveniet vitae voluptates.",
        },
        {
            img: profilePic3,
            review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur expedita temporibus ipsa ea officia nulla quam quas rem voluptatum, dolor eum reprehenderit illum asperiores quis placeat eaque eveniet vitae voluptates.",
        },
        {
            img: profilePic4,
            review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur expedita temporibus ipsa ea officia nulla quam quas rem voluptatum, dolor eum reprehenderit illum asperiores quis placeat eaque eveniet vitae voluptates.",
        },
        {
            img: profilePic5,
            review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur expedita temporibus ipsa ea officia nulla quam quas rem voluptatum, dolor eum reprehenderit illum asperiores quis placeat eaque eveniet vitae voluptates.",
        },
        {
            img: profilePic6,
            review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur expedita temporibus ipsa ea officia nulla quam quas rem voluptatum, dolor eum reprehenderit illum asperiores quis placeat eaque eveniet vitae voluptates.",
        },
    ]

    return (
        <div className="t-wrapper">
            <div className="t-heading">
                <span>Clients Always get</span>
                <span> Exceptional Work</span>
                <span> From me....</span>
                <div className="blur t-blur1" style={{ background: "var(--blur1)" }}></div>
                <div className="blur t-blur2" style={{ background: "var(--blur2)" }}></div>
            </div>
            {/* Slider */}
            <Swiper 
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{clickable:true}}
            
            >
                {clients.map((client, Index) => {
                    return (
                        <SwiperSlide key={Index}>
                            <div className="testimonial">
                                <img src={client.img} alt="" />
                                <span>{client.review}</span>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>

        </div>
    )
}

export default Testimonial