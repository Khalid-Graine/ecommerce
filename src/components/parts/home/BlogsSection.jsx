import React from 'react'


import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const BlogsSection = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  return (
    <div className='sides bg-yellow-200 py-10'>
        <div>From the Blog</div>
        <div className='mx-0'>
        <Slider {...settings}>
      
      <CarouselItem />
      <CarouselItem />
      <CarouselItem />
      <CarouselItem />
      
    </Slider>
        </div>
    </div>
  )
}

export default BlogsSection;


const CarouselItem = () => {
    return (
        <div className='border w-full border-red-500 py-10'>
        <h3>1</h3>
      </div>
    )
}