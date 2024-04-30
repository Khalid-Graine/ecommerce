import React from "react";

const TheFooter = () => {
  return (
    <div className="">
      <div>links</div>
      <div className="sides grid grid-cols-1 bg-[#303841] lg:grid-cols-2 py-8 gap-y-12">
        <div>
        
        <TheTitle text={'follow us'} />
          <div className="my-2"></div>
          <SocialMedia />
          <p>Copyright © 2019, Your Store, All Rights Reserved</p>
        </div>
        <div>
          
          <TheTitle text={'newsletter'} />
          <p>
          Don not miss any updates or promotions by signing up to our newsletter.
          </p>
          <TheForm />
        </div>
      </div>
    </div>
  );
};

export default TheFooter;
const TheTitle = ({text}) => {
  return (
    <div className="text-lg font-semibold text-white uppercase">
      {text}
    </div>
  )
}

const TheForm = () => {
  return (
    <form >
            <div className="w-full flex rounded-md overflow-hidden">
              <input type="text" className="flex-grow" />
              <button type="submit" className="px-2 bg-blue-500 text-white py-1">submit</button>
            </div>
            <div className="flex gap-2">
            <input type="checkbox"  />
            <p>I have read and agree to the <span className="text-blue-500">Privacy Policy</span></p>
            </div>
          </form>
  )
}
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
