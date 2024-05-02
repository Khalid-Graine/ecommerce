import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { sliderSettings } from '../../../assets/js/sliderSettings';

const HomeCarousel = () => {
  return (
    <div className=" col-span-6 h-[300px] w-full bg-yellow-500">
        <div className="p-4 ">
        <div className="slider-container px-2 ">
          <Slider {...sliderSettings}>
          <Carouselitem />
          <Carouselitem />
          <Carouselitem />
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default HomeCarousel

const Carouselitem = () => {
    return (
        <div className='bg-white p-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, dolore mollitia. Hic, ex consequuntur reiciendis illo aut amet velit voluptates enim dolor obcaecati ea voluptatibus perspiciatis similique modi ut mollitia, aliquam sunt distinctio tempora quis est consequatur. Mollitia, unde vel.</div>
    )
}