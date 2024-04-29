import React, { useState } from "react";

const OfferBanner = () => {
  const [showOfferBanner, setShowOfferBanner] = useState(true);

  const handleHideBanner = () => {
    setShowOfferBanner(false);
  };

  return (
    <div
      className={`sides    overflow-hidden bg-[#c4cafd] transition-all  delay-75  duration-500 ease-in-out ${showOfferBanner ? "h-8" : "h-0 "}`}
    >
      <div className=" h-full flex justify-center items-center">
        
        <div>
        <span className="font-bold"> 20% OFF</span> on all products{" "}
        <a href="http://" className="text-blue-600">
          Shop now
        </a>
        </div>
        <div onClick={handleHideBanner}>
          <i className="fa-solid fa-xmark ml-4 text-lg text-red-500 cursor-pointer"></i>
        </div>
      </div>
    </div>
  );
};

export default OfferBanner;
