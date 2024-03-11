import React, { useState } from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import { Close, Menu, ShoppingCartIcon } from "../../../assets/icons/MyIcons";

const TheMainHeader = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showShoppingCart, setShowShoppingCart] = useState(false);
  const [showBlackLayer, setShowBlackLayer] = useState(false);

  return (
    <>
      <header className="sides flex justify-between gap-12 py-1">
        <HeaderPart1
          setShowBlackLayer={setShowBlackLayer}
          setShowMenu={setShowMenu}
        />
        <HeaderPart2 />
        <HeaderPart3
          setShowShoppingCart={setShowShoppingCart}
          setShowBlackLayer={setShowBlackLayer}
        />
      </header>
      <SidePanel
        show={showMenu}
        setShow={setShowMenu}
        setShowBlackLayer={setShowBlackLayer}
        panelName={"menu"}
      />
      <SidePanel
        show={showShoppingCart}
        setShow={setShowShoppingCart}
        setShowBlackLayer={setShowBlackLayer}
        panelName={"shopping cart"}
      />
      <BlackLayer show={showBlackLayer} />
    </>
  );
};

const SidePanel = ({ show, setShow, setShowBlackLayer, panelName }) => {
  const sidePosition = panelName == "menu" ? "left" : "right";
  return (
    <div
      className={`fixed top-0 z-[4] h-screen w-10/12 bg-yellow-400 transition-all delay-75 duration-300 ease-linear ${show ? `${sidePosition}-0` : `-${sidePosition}-full`}`}
    >
      <div className="h-screen w-full bg-white">
        <div className="sides flex items-center justify-between bg-red-300 py-2">
          <p className=" uppercase">{panelName}</p>
          <div
            onClick={() => {
              setShow(false);
              setShowBlackLayer(false);
            }}
            className="icon-container"
          >
            X
          </div>
        </div>
      </div>
    </div>
  );
};

const BlackLayer = ({ show }) => {
  return (
    show && (
      <div className="duration-800 fixed right-0 top-0 z-[2] h-full w-full bg-black opacity-50 transition-all delay-300 ease-linear"></div>
    )
  );
};

const HeaderPart1 = ({ setShowBlackLayer, setShowMenu }) => {
  return (
    <div className="flex items-center">
      <div
        className="icon-container md:hidden"
        onClick={() => {
          setShowBlackLayer(true);
          setShowMenu(true);
        }}
      >
        <Menu />
      </div>
      <div className="hidden h-full items-center justify-center md:flex">
        <Logo />
      </div>
    </div>
  );
};

const HeaderPart2 = () => {
  return (
    <div className="flex flex-grow justify-center">
      <div className="md:hidden">
        <Logo />
      </div>
      <SearchBar devices="lg" />
    </div>
  );
};

const HeaderPart3 = ({ setShowShoppingCart, setShowBlackLayer }) => {
  return (
    <div className="flex items-center">
      <div
        onClick={() => {
          setShowShoppingCart(true);
          setShowBlackLayer(true);
        }}
        className="icon-container md:hidden"
      >
        <ShoppingCartIcon />
      </div>
      <NavLinks />
    </div>
  );
};

const NavLinks = () => {
  return (
    <nav className="hidden h-full gap-2 capitalize md:flex">
      <NavLink icon="fa-regular fa-circle-question" text="faq" />
      <NavLink icon="fa-brands fa-blogger" text="blogs" />
      <NavLink icon="fa-solid fa-id-card" text="contact" />
    </nav>
  );
};

const NavLink = ({ icon, text }) => {
  return (
    <Link to={`/${text}`}>
      <div className="flex h-full items-center gap-1 rounded-sm bg-white px-2 text-black">
        <i className={icon}></i>
        <p className="uppercase">{text}</p>
      </div>
    </Link>
  );
};

const Logo = () => {
  return (
    <div className="flex h-full items-center bg-blue-600 px-4 font-bold text-white">
      Journal
    </div>
  );
};

export default TheMainHeader;
