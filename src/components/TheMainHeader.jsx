import React, { useState } from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const TheMainHeader = () => {
  const [showMenu , setShowMenu] = useState(false)
   return (
    <div>
      <header className="flex  py-1 justify-between gap-12 sides">
      <HeaderPart1 {...{setShowMenu}} />
      <HeaderPart2 />
      <HeaderPart3  />
    </header>
      <div className={`bg-yellow-400 px-10 w-full h-screen py-3 fixed top-0 transition-all delay-75 duration-300 ease-linear z-[2] ${ showMenu ? 'left-0' : '-left-full'}`}>
     
     <button onClick={ () => setShowMenu(false)}>hide</button>
    
      </div>
    </div>
    
  );
};

const HeaderPart1 = ({setShowMenu}) => {

  return (
    <div className="flex items-center">
      <i onClick={() => setShowMenu(true)} className="fa-solid fa-bars md:hidden"></i>
      <div className="hidden md:block">
      <Logo />
      </div>
    </div>
  );
};

const HeaderPart2 = () => {
  return (
    <div className="flex-grow flex justify-center ">
      <div className="md:hidden">
        <Logo />
      </div>
      <SearchBar devices="lg" />
    </div>
  );
};

const HeaderPart3 = () => {
  return (
    <div className="flex items-center">
      <i  className="fa-solid fa-cart-shopping md:hidden"></i>
      <NavLinks />
    </div>
  );
};

const NavLinks = () => {
  return (
    <nav className="hidden h-full md:flex gap-2 items-center capitalize">
      <NavLink icon="fa-regular fa-circle-question" text="faq" />
      <NavLink icon="fa-brands fa-blogger" text="blogs" />
      <NavLink icon="fa-solid fa-id-card" text="contact" />
    </nav>
  );
};

const NavLink = ({ icon, text }) => {
  return (
    <Link to={`/${text}`}>
    <div className="bg-white text-black flex items-center gap-1 h-full rounded-sm px-2">
      <i className={icon}></i>
      <p className="uppercase">{text}</p>   
    </div>
    </Link>
  );
};

const Logo = () => {
  return (
    <div className="font-bold text-xl bg-blue-300 rounded-sm px-4 h-full ">Journal</div>
  )
}

const SmallDevicesMenu =  () => {
  return (
    <div className="bg-yellow-300">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia fuga saepe quis eum doloribus sunt odio, officiis labore vitae reprehenderit?
    </div>
  )
}
export default TheMainHeader;
