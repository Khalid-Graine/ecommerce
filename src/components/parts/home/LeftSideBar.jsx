import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import "../../../assets/css/TestimonialsCarousel.css";
import { TestimonialsSliderSettings } from "../../../assets/js/TestimonialsSliderSettings";

const LeftSideBar = () => {
  const Testimonials = [{
    user: 'test',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At distinctio necessitatibus voluptates facilis non, ab repudiandae ipsam qui enim cupiditate id nisi eius dolor iusto saepe laboriosam eligendi nemo facere.'
  }]
  return (
    
    <div className="hidden  
     max-w-[230px] flex-col  px-4 py-2 lm:flex">
      <div>
       
        <p className="title">title</p>
        <ul>
          <li>Product 1</li>
          <li>Product 2</li>
          <li>Product 3</li>
          <li>Product 4</li>
        </ul>
      </div>
      <div className="line"></div>
      <div>
        <p className="title">WHAT PEOPLE SAY:</p>
        <TestimonialsCarousel />
       <div className="Testimonials-Carousel max-w-min">
       <Slider className="* *:bg-yellow-400 " {...TestimonialsSliderSettings}>
          
        </Slider>
       </div>
      </div>
    </div>
  );
};

export default LeftSideBar;


const CarouselItem = () => {
  return (
    <div>e</div>
  )
}
