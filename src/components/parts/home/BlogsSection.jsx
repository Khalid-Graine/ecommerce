import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const BlogsSection = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow:   <div
    className="border p-2 bg-orange-400"
    style={{ display: "block" }}
    
  />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
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
      <div className=" p-6">
        <div className="slider-container mx-2">
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
    <div className="flex  w-full border border-red-500">
      <div className="bg-white flex flex-col items-center justify-center">
        <h3>{text}</h3>
        <p>title</p>
        <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
        <div className="w-full h-[180px] overflow-hidden flex justify-center items-center  rounded-md"><img src="src/assets/iphone.jpg"  alt="" />
        </div>
        
      </div>
    </div>
  );
};


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green",color: 'red' }}
        onClick={onClick}
      />
    );
  }