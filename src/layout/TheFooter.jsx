import React from "react";

const TheFooter = () => {
  return (
    <div className="">
      <div>links</div>
      <div className="sides grid grid-cols-1 bg-[#303841] lg:grid-cols-2">
        <div>
        <h3 className="text-lg font-semibold text-white uppercase">follow us</h3>
          <div className="my-2"></div>
          <SocialMedia />
          <p>Copyright © 2019, Your Store, All Rights Reserved</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white uppercase">NEWSLETTER</h3>
        </div>
      </div>
    </div>
  );
};

export default TheFooter;

const SocialMedia = () => {
  return (
    <ul className="flex gap-3 *:flex *:size-11 *:cursor-pointer *:items-center *:justify-center *:rounded-full *:bg-blue-500 *:text-2xl *:text-white">
      <li>
        <i className="fa-brands fa-facebook-f"></i>
      </li>
      <li>
        <i className="fa-brands fa-x-twitter"></i>
      </li>
      <li>
        <i className="fa-brands fa-pinterest-p"></i>
      </li>
      <li>
        <i className="fa-brands fa-instagram"></i>
      </li>
      <li>
        <i className="fa-brands fa-whatsapp"></i>
      </li>
      <li>
        <i className="fa-brands fa-reddit-alien"></i>
      </li>
    </ul>
  );
};
