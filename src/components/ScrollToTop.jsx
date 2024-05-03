import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
    className={`fixed  right-4  rounded-full text-white transition-all ease-in-out duration-1000 delay-75 ${isVisible ? 'bottom-4': ' -bottom-full'}`}
    onClick={scrollToTop}
  >
    <i className="fa-solid fa-circle-arrow-up  text-4xl text-blue-500 "></i>
  </button>
  );
};

export default ScrollToTop;
