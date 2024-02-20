import React, { useState } from "react";

import CurrencyIcon from "./CurrencyIcon";

const DropDownMenu = ({
  availableCurrencies,
  selectedCurrency,
  setSelectedCurrency,
  side = "-left-0",
}) => {
  const [show, setShow] = useState(false);

  const handleClick = (item) => {
    setShow(false);
    setSelectedCurrency(item);
  };
  return (
    <div>
      <div
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        className="flex items-center"
      >
        <CurrencyIcon currency={selectedCurrency} />
        <CurrencyButton currency={selectedCurrency} />
      </div>

      {show && (
        <div
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
          className="relative transition delay-75 duration-400 ease-in-out rounded-xl"
        >
          <div className={`${side} absolute z-50  top-[0px] mr-4 pt-2 min-w-28 `}>
            <DropdownMenuContent {...{ availableCurrencies, handleClick }} />
          </div>
        </div>
      )}
    </div>
  );
};
const DropdownMenuContent = ({ availableCurrencies, handleClick }) => {
  return (
    <ul className="bg-white text-gray-600 border-[.5px] border-gray-75 shadow-sm   cursor-pointer flex flex-col rounded-sm">
      {availableCurrencies.map((item, index) => (
        <li
          key={index}
          onClick={() => handleClick(item)}
          className="py-1 pl-3   border-transparent  hover:text-black rounded-sm flex gap-1"
        >
          <CurrencyIcon currency={item} />
          <p className="capitalize"> {item}</p>
        </li>
      ))}
    </ul>
  );
};
const CurrencyButton = ({ currency }) => {
  return (
    <button
      className={"px-2 py-1 rounded-sm flex items-center justify-center gap-2 "}
    >
      <p className="capitalize">{currency}</p>

      <i className="fa-solid fa-sort-down -mt-1"></i>
    </button>
  );
};
export default DropDownMenu;
