import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const BlogsSection = () => {
  var settings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,

          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="sides bg-gray-200 py-10">
      <div>From the Blog</div>
      <div className="p-4 ">
        <div className="slider-container px-2 ">
          <Slider {...settings}>
            <CarouselItem text={"1"} />
            <CarouselItem text={"2"} />
            <CarouselItem text={"3"} />
            <CarouselItem text={"4"} />
            <CarouselItem text={"5"} />
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default BlogsSection;

const CarouselItem = ({ text }) => {
  return (
    <div className="flex  w-full  p-2 ">
      <div className="flex flex-col items-center justify-center   bg-white overflow-hidden rounded-t-sm">
        <div className="flex h-[180px] w-full items-center justify-center overflow-hidden relative">
          <img src="src/assets/iphone.jpg" alt="" />
          <div className="absolute top-2 left-2 bg-green-300 flex flex-col justify-center items-center size-10  leading-4 ">
            <span className="font-semibold">02</span>
            <span>Aug</span>
          </div>
          <div className="bg-black absolute bottom-0 w-full text-white text-center py-1">Lorem ipsum dolor sit amet.</div>
        </div>
        <p>title {text}</p>
        <p className="text-center">
          Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Voluptatum, sit blanditiis? Quos numquam animi nesciunt tenetur
          adipisci at consequuntur consequatur? ipsum dolor sit amet. Lorem
          ipsum dolor sit amet.
        </p>
        <button className="rounded-sm bg-blue-500 px-6 py-1 uppercase text-white mb-2">
          Read
        </button>
      </div>
    </div>
  );
};
