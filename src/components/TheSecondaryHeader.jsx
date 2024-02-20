import React, { useState } from "react";
import useScrollPosition from "../hooks/seScrollPosition";
import { Link } from "react-router-dom";

const TheSecondaryHeader = () => {
  const scrollPosition = useScrollPosition();
  return (
    <div
      className={`hidden bg-blue-800 w-full md:flex justify-between    ${
        scrollPosition > 190 ? "fixed  top-0 right-0 " : "relative"
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
      <div className=" bg-green-500 h-full  rounded-r-sm rounded-b-none flex justify-center items-center sides">
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
    <div className="flex gap-6 items-center text-gray-200">
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
      className="flex gap-1 items-center bg-green-500 h-full rounded-l-sm rounded-b-none text-white sides relative"
    >
      <p>0 items(s) - $0.00</p>
      <i className="fa-solid fa-cart-shopping"></i>
      {showDropDown && (
        <div className="w-[300px] absolute  top-full right-0 bg-white shadow-md  text-black p-1">
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
      className="flex flex-col items-center relative"
    >
      <i className="fa-regular fa-circle-user text-[23px]"></i>
      <p className="text-xs text-">Account</p>
      {showDropDown && (
        <div className=" absolute bg-white w-20 -left-[50%] top-full rounded-sm">
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
    <Link to={"wishlist"} className="flex flex-col items-center relative">
      <i className="fa-solid fa-heart text-[24px]"></i>
      <p className="text-xs">wishlist</p>
      <div className=" absolute bg-red-600 text-white size-4 rounded-full flex justify-center items-center text-xs top-1 right-1 font-semibold">
        4
      </div>
    </Link>
  );
};
export default TheSecondaryHeader;
