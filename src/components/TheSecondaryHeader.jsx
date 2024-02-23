import React, { useState } from "react";
import useScrollPosition from "../hooks/seScrollPosition";
import { Link } from "react-router-dom";

const TheSecondaryHeader = () => {
  const scrollPosition = useScrollPosition();
  return (
    <div
      className={`bg-1 hidden  w-full justify-between md:flex    ${
        scrollPosition > 190 ? "fixed  right-0 top-0 " : "relative"
      }`}
    >
      <ThePart1 />
      <ThePart2 />
    </div>
  );
};

const ThePart1 = () => {
  return (
    <div className="flex items-center gap-6 ">
      <div className=" sides flex  h-full items-center justify-center rounded-b-none rounded-r-sm bg-green-500">
        <p>All departemesnt</p>
      </div>
      <div className="flex items-center gap-2 text-gray-200">
        <div>Fullwidth</div>
        <div>Specials</div>
        <div>Dropdown</div>
      </div>
    </div>
  );
};
const ThePart2 = () => {
  return (
    <div className="flex items-center gap-6 text-gray-200">
      <div className="flex items-center gap-2">
        <AccountInfo />
        <TheWIshLIst />
      </div>
      <ShopingCartItems />
    </div>
  );
};
const ShopingCartItems = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  return (
    <Link
      to={"checkout"}
      onMouseEnter={() => setShowDropDown(true)}
      onMouseLeave={() => setShowDropDown(false)}
      className="sides relative flex h-full items-center gap-1 rounded-b-none rounded-l-sm bg-green-500 text-white"
    >
      <p>0 items(s) - $0.00</p>
      <i className="fa-solid fa-cart-shopping"></i>
      {showDropDown && (
        <div className="absolute right-0  top-full w-[300px] bg-white p-1  text-black shadow-md">
          <ul>
            <li>test</li>
            <li>test</li>
            <li>test</li>
          </ul>
        </div>
      )}
    </Link>
  );
};
const AccountInfo = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  return (
    <Link
      to={"account"}
      onMouseEnter={() => setShowDropDown(true)}
      onMouseLeave={() => setShowDropDown(false)}
      className="relative flex flex-col items-center"
    >
      <i className="fa-regular fa-circle-user text-[23px]"></i>
      <p className="text- text-xs">Account</p>
      {showDropDown && (
        <div className=" absolute -left-[50%] top-full w-20 rounded-sm bg-white">
          <ul id="content" className="p-1 text-gray-500 ">
            <li>test</li>
            <li>test</li>
            <li>test</li>
          </ul>
        </div>
      )}
    </Link>
  );
};

const TheWIshLIst = () => {
  return (
    <Link to={"wishlist"} className="relative flex flex-col items-center">
      <i className="fa-solid fa-heart text-[24px]"></i>
      <p className="text-xs">wishlist</p>
      <div className=" absolute right-1 top-1 flex size-4 items-center justify-center rounded-full bg-red-600 text-xs font-semibold text-white">
        4
      </div>
    </Link>
  );
};
export default TheSecondaryHeader;
