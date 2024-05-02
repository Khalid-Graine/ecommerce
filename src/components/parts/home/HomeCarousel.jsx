import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { HomeSliderSettings } from '../../../assets/js/HomeSliderSettings';

const HomeCarousel = () => {
  return (
    <div className="col-span-6 h-[300px] w-full bg-yellow-500 px-10">
        <div className=''>
          <Slider className='border '  {...HomeSliderSettings}>
          <Carouselitem />
          <Carouselitem />
          <Carouselitem />
          </Slider>
        </div>
     
    </div>
  )
}

export default HomeCarousel

const Carouselitem = () => {
    return (
        <div className='bg-white p-4 h-[300px] flex justify-center items-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, dolore mollitia. Hic, ex consequuntur reiciendis illo aut amet velit voluptates enim dolor obcaecati ea voluptatibus perspiciatis similique modi ut mollitia, aliquam sunt distinctio tempora quis est consequatur. Mollitia, unde vel. </div>
    )
}