import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { HomeSliderSettings } from "../../../assets/js/HomeSliderSettings";
import "../../../assets/css/HomeCarousel.css";
const HomeCarousel = () => {
  return (
    <div className="Home-carousel col-span-6 h-[300px] w-full bg-yellow-500 px-0">
      <div className="w-full ">
        <Slider {...HomeSliderSettings}>
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
    <div className=" relative flex h-[300px] items-center overflow-auto rounded-sm p-4 hover:cursor-pointer">
      <div className="flex flex-col gap-2">
        <p className="w-fit rounded-sm  bg-blue-600 px-2  py-1 font-semibold text-white">
          title{" "}
        </p>
        <h3 className=" text-3xl font-bold text-white">
          Lorem ipsum dolor sit.
        </h3>
        <button className="flex  w-fit items-center gap-2 rounded-sm border px-3 py-1 text-white transition-all duration-100 ease-linear hover:gap-3">
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
