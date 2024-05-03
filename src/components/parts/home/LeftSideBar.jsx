import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { HomeSliderSettings } from "../../../assets/js/HomeSliderSettings";
import "../../../assets/css/HomeCarousel.css";
import { TestimonialsSliderSettings } from "../../../assets/js/TestimonialsSliderSettings";

const LeftSideBar = () => {
  return (
    <div className="hidden  
     min-w-[230px] flex-col  px-4 py-2 lm:flex">
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
       <div className="Testimonials-Carousel">
       <Slider className="* *:bg-yellow-400 p-2" {...TestimonialsSliderSettings}>
          <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, sapiente.</div>
          <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, sapiente.</div>
          <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, sapiente.</div>
          <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, sapiente.</div>
        </Slider>
       </div>
      </div>
    </div>
  );
};

export default LeftSideBar;


const TestimonialsCarousel = () => {
  return (
    <div>e</div>
  )
}
