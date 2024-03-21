import React, { useState } from "react";
import { Close } from "../../../assets/icons/MyIcons";

const OfferBanner = () => {
  const [showOfferBanner, setShowOfferBanner] = useState(true);

  const handleHideBanner = () => {
    setShowOfferBanner(false);
  };

  return (
    <div
      className={`sides   flex w-full  items-center justify-between overflow-hidden bg-blue-500 transition-all delay-100 duration-500 ease-linear   ${
        showOfferBanner == true ? " bg-opacity-100" : "h-0 bg-opacity-0"
      }`}
    >
      <span></span>
      <p
        className={`transition-all delay-0 duration-150 ease-linear  ${
          showOfferBanner ? " opacity-100" : " opacity-0"
        }`}
      >
        Get 20% off on all our products this Friday!
      </p>

      <div onClick={handleHideBanner} >
      <i className="fa-solid fa-xmark text-xl text-white cursor-pointer hover:text-gray-300"></i>
      </div>
    </div>
  );
};

export default OfferBanner;
