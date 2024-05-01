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
      <div className="flex flex-col items-center justify-center   overflow-hidden rounded-t-sm bg-white">
        <div className="relative flex h-[180px] w-full items-center justify-center overflow-hidden bg-yellow-300">
          <img src="src/assets/iphone.jpg" className="h-full w-full object-fill" alt="" />
          <div className="absolute left-2 top-2 flex size-10 flex-col items-center justify-center bg-red-500  leading-4 text-white ">
            <span className="font-semibold">02</span>
            <span className="text-xs">Aug</span>
          </div>
          <div className="absolute bottom-0 w-full bg-black bg-opacity-50 py-1 text-center text-white ">
            <ul className="flex justify-center gap-4 *:flex *:items-center *:gap-1 text-sm">
              <li>
                <i className="fa-solid fa-user"></i>
                <p>Admin</p>
              </li>
              <li>
                <i className="fa-regular fa-comment-dots"></i>
                <p>32000</p>
              </li>
              <li>
                <i className="fa-regular fa-eye"></i>
                <p>10234</p>
              </li>
            </ul>
          </div>
        </div>
       <div className="flex items-center flex-col gap-2 py-3">
       <h3 className=" font-bold text-lg text-[#303841]">title Lorem, ipsum {text}</h3>
        <p className="text-center text-[#333333]">
          Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Voluptatum, sit blanditiis? Quos numquam animi nesciunt tenetur
          adipisci at consequuntur consequatur? ipsum dolor sit amet. Lorem
          ipsum dolor sit amet.
        </p>
        <button className="mb-2 rounded-sm bg-blue-500 px-6 py-1 uppercase text-white">
          Read
        </button>
       </div>
      </div>
    </div>
  );
};
