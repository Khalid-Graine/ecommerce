import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { HomeSliderSettings } from "../../../assets/js/HomeSliderSettings";
import '../../../assets/css/HomeCarousel.css'
const HomeCarousel = () => {
  return (
    <div className="Home-carousel col-span-6 h-[300px] w-full bg-yellow-500 px-0">
      <div className="w-full ">
        <Slider className="border" {...HomeSliderSettings}>
          <Carouselitem />
          <Carouselitem />
          <Carouselitem />
        </Slider>
      </div>
    </div>
  );
};

export default HomeCarousel;

const Carouselitem = () => {
  return (
    <div className=" relative h-[300px] p-4 flex items-center hover:cursor-pointer">
      <div className="flex gap-2 flex-col">
        <p className="rounded-sm text-white  py-1 bg-blue-600  w-fit px-2 font-semibold">title </p>
        <h3 className=" text-3xl text-white font-bold">Lorem ipsum dolor sit.</h3>
        <button className="border  py-1 text-white w-fit px-3 rounded-sm flex items-center gap-2 hover:gap-3 transition-all ease-linear duration-100">
          <span>Read more</span>
        <i className="fa-solid fa-arrow-right-long"></i>
        </button>
      </div>
      <img
        src="src/assets/iphone.jpg"
        className="absolute right-0 top-0 -z-10 h-full w-full object-fill"
        alt=""
      />
    </div>
  );
};
