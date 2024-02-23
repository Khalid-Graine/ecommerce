import React, { useState } from "react";

import CurrencyIcon from "./CurrencyIcon";
import { KeyboardArrowDown } from "../../../assets/icons/MyIcons";

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
          className="duration-400 relative rounded-xl transition delay-75 ease-in-out"
        >
          <div
            className={`${side} absolute top-[0px]  z-50 mr-4 min-w-28 pt-2 `}
          >
            <DropdownMenuContent {...{ availableCurrencies, handleClick }} />
          </div>
        </div>
      )}
    </div>
  );
};
const DropdownMenuContent = ({ availableCurrencies, handleClick }) => {
  return (
    <ul className="border-gray-75 flex cursor-pointer flex-col rounded-sm   border-[.5px] bg-white text-gray-600 shadow-sm">
      {availableCurrencies.map((item, index) => (
        <li
          key={index}
          onClick={() => handleClick(item)}
          className="flex gap-1   rounded-sm  border-transparent py-1 pl-3 hover:text-black"
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
      className={"flex items-center justify-center gap-0 rounded-sm px-2 py-1 "}
    >
      <p className="capitalize">{currency}</p>
      <KeyboardArrowDown />
    </button>
  );
};
export default DropDownMenu;
