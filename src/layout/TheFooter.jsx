import React, { useState } from "react";

const TheFooter = () => {
  return (
    <div>




      <div className="sides py-4 bg-gray-600 grid grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-4">
        <div>
          <TheTitle text={'text'} />
          <ul>
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
          </ul>
        </div>
        <div>
          <h3>title Lorem, ipsum.</h3>
          <ul>
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
          </ul>
        </div>
        <div>
          <h3>title Lorem, ipsum.</h3>
          <ul>
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
          </ul>
        </div>
        <div>
          <h3>title Lorem, ipsum.</h3>
          <ul>
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
          </ul>
        </div>
      </div>





      <div className="sides grid grid-cols-1 gap-y-12 bg-[#303841] py-4 lg:grid-cols-2">
        {/* right-part */}
        <div>
          <TheTitle text={"follow us"} />
          <SocialMedia />
          <p className="mt-1 text-[#cccccc]">
            Copyright © 2019, Your Store, All Rights Reserved
          </p>
        </div>
        {/* left-part */}
        <div>
          <TheTitle text={"newsletter"} />
          <p className="text-[#cccccc]">
            Don not miss any updates or promotions by signing up to our
            newsletter.
          </p>
          <TheForm />
        </div>
      </div>
    </div>
  );
};

export default TheFooter;

const TheTitle = ({ text }) => {
  return (
    <div className="mb-2 w-fit border-0 border-b border-red-400 pb-[0.5px] text-lg font-semibold uppercase text-white">
      {text}
    </div>
  );
};

const TheForm = () => {
  const [isChecked, setIsChecked] = useState(false);
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const [email, setEmail] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isChecked) {
      alert("Warning: You must agree to the Privacy Policy!");
      return;
    }

    if (emailRegex.test(email)) {
      alert("You have been subscribed to our newsletter.");
      setEmail("");
      setIsChecked(false);
    } else {
      alert("E-Mail Address does not appear to be valid!");
    }
  };
  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <div className="my-1 flex w-full overflow-hidden rounded-sm">
        <input
          type="text"
          placeholder="Write your email "
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-grow px-2"
        />
        <button type="submit" className="bg-blue-500 px-2 py-1 text-white">
          submit
        </button>
      </div>
      <div className="flex gap-2">
        <input
          type="checkbox"
          onChange={() => setIsChecked(!isChecked)}
          checked={isChecked}
        />
        <p className="text-[#cccccc]">
          I have read and agree to the{" "}
          <span className="text-blue-500">Privacy Policy</span>
        </p>
      </div>
    </form>
  );
};
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
