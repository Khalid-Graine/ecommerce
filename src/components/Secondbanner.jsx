import React, { useContext, useState } from "react";
import DropDownMenu from "./DropDownMenu";
import SocialMedia from "./SocialMedia";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedCurrency } from "../store/reducers/currencyReducer";

const Secondbanner = () => {
 
 const { availableCurrencies,selectedCurrency } = useSelector( (state) => state.currency);
  const Dispatch = useDispatch();

  const handeSetSelectedCurrency = (c) => {
    Dispatch(setSelectedCurrency(c))
  }
 
  return (
    <div className="bg-red-600 flex justify-between text-white sides">
      <SocialMedia />
      <LoginRegisterButtons />
      <FreeShipping />
      
        <DropDownMenu
          side={"-right-4"}
          setSelectedCurrency={handeSetSelectedCurrency}
          {...{selectedCurrency,availableCurrencies}}
        />
     
    </div>
  );
};
const LoginRegisterButtons = () => {
  return (
    <div className="flex md:hidden gap-2">
      <button>Login</button>
      <button>Rogister</button>
    </div>
  );
};
const FreeShipping = () => {
  return (
    <div className="hidden md:flex text-white items-center gap-1">
      <i className="fa-solid fa-solid fa-truck-fast"></i>
      <p>FREE SHIPPING OVER $100</p>
    </div>
  );
};
export default Secondbanner;
