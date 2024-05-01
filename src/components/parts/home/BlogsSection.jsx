import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { sliderSettings } from "./../../../assets/js/sliderSettings";
import { useState } from "react";

const BlogsSection = () => {
  const [Blogs, setBlogs] = useState([
    {
      title: "test test test",
      date: "02 aug",
      imagePath: "",
      description:
        "Sign up and Save! Get a $10 gift in your inbox immediately after you sign up for our newsletter",
      blogLink: "#",
      commentCount: "77000",
      viewCount: "21222",
      author: "Admin",
    },
    {
      title: "test test test",
      date: "02 aug",
      imagePath: "",
      description:
        "Sign up and Save! Get a $10 gift in your inbox immediately after you sign up for our newsletter",
      blogLink: "#",
      commentCount: "77000",
      viewCount: "21222",
      author: "Admin",
    },
    {
      title: "test test test",
      date: "02 aug",
      imagePath: "",
      description:
        "Sign up and Save! Get a $10 gift in your inbox immediately after you sign up for our newsletter",
      blogLink: "#",
      commentCount: "77000",
      viewCount: "21222",
      author: "Admin",
    },
    {
      title: "test test test",
      date: "02 aug",
      imagePath: "",
      description:
        "Sign up and Save! Get a $10 gift in your inbox immediately after you sign up for our newsletter",
      blogLink: "#",
      commentCount: "77000",
      viewCount: "21222",
      author: "Admin",
    },
  ]);

  console.log(Blogs);
  return (
    <div className="sides bg-gray-200 py-10">
      <div>From the Blog</div>
      <div className="p-4 ">
        <div className="slider-container px-2 ">
          <Slider {...sliderSettings}>
            {
              Blogs.map((blog,i) => (
              //  <CarouselItemContainer>
              //   <BlogTopInfo />
              //   <BlogInfo />
              //  </CarouselItemContainer>
              <CarouselItem blog={blog} />
              ))
            }
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default BlogsSection;
const CarouselItemContainer = ({ children }) => {
  return (
    <div className="flex  w-full  p-2 ">
      <div className="blog-cart flex flex-col items-center justify-center overflow-hidden   rounded-t-sm border bg-white">
        {children}
      </div>
    </div>
  );
};
const CarouselItem = ({blog}) => {
  return (
    <div className="flex  w-full  p-2 ">
      <div className="blog-cart flex flex-col items-center justify-center overflow-hidden   rounded-t-sm border bg-white">
        <div className="relative flex h-[180px] w-full items-center justify-center overflow-hidden bg-yellow-300">
          <a href="#">
            <img
              src="src/assets/iphone.jpg"
              className="h-full w-full object-fill grayscale transition-all delay-75 duration-500 ease-in-out hover:grayscale-0"
              alt=""
            />
          </a>
          <div className="absolute left-2 top-2 flex size-10 flex-col items-center justify-center bg-red-500  leading-4 text-white ">
            <span className="font-semibold">02</span>
            <span className="text-xs">Aug</span>
          </div>
          <div className="absolute bottom-0 w-full bg-black bg-opacity-50 py-1 text-center text-white ">
            <ul className="flex justify-center gap-4 text-sm *:flex *:items-center *:gap-1">
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
        <div className="flex flex-col items-center gap-2 py-3">
          <a href="#">
            <h3 className=" text-lg font-bold text-[#303841]">
              {blog.title}
            </h3>
          </a>
          <p className="text-center text-[#333333]">
            {blog.description}
          </p>
          <a href="#">
            <button className="mb-2 rounded-sm bg-blue-500 px-6 py-1 uppercase text-white">
              Read
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
