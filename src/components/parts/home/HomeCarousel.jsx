import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { HomeSliderSettings } from "../../../assets/js/HomeSliderSettings";

const HomeCarousel = () => {
  return (
    <div className="col-span-6 h-[300px] w-full bg-yellow-500 px-0">
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
    <div className=" relative h-[300px] p-4 flex items-center">
      <div className="flex gap-2 flex-col">
        <p className="rounded-sm text-white  py-1 bg-blue-400  w-fit px-2 ">title </p>
        <h3 className=" text-xl text-white">Lorem ipsum dolor sit.</h3>
        <button className="border  py-1 text-white w-fit px-6 rounded-sm">read more</button>
      </div>
      <img
        src="src/assets/iphone.jpg"
        className="absolute right-0 top-0 -z-10 h-full w-full object-fill"
        alt=""
      />
    </div>
  );
};
