import React from "react";
import "./index.css";
import { Col, Row } from "antd";
import img from "../../img/portfolio-2.png"
import img2 from "../../img/portfolio-3.png"
import img3 from "../../img/portfolio-4.png"
import img4 from "../../img/portfolio-6-1.png"
import img5 from "../../img/portfolio-7-1.png"

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

const Portfolio = () => {
  return (
    <>
      <div className="ab_h main_ex">
        <h1>My Portfolio</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="ab_line"></div>
      <Row className="">
        <Col xs={24} sm={24} md={24} xxl={10} xl={10} lg={10}></Col>
      </Row>
      <Swiper
        slidesPerView={Autoplay}
        spaceBetween={10}
        centeredSlides={true}
        
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={img} alt="" width={200} height={100}/></SwiperSlide>
        <SwiperSlide><img src={img2} alt="" width={200} height={100}/></SwiperSlide>
        <SwiperSlide><img src={img3} alt="" width={200} height={100}/></SwiperSlide>
        <SwiperSlide><img src={img4} alt="" width={200} height={100}/></SwiperSlide>
        <SwiperSlide><img src={img5} alt="" width={200} height={100}/></SwiperSlide>

        
      </Swiper>
    </>
  );
};
export default Portfolio;
