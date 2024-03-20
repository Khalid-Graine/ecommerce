import { useState } from "react";
import SearchBar from "./SearchBar";
import { Menu, ShoppingCartIcon } from "../../../assets/icons/MyIcons";
import BlackLayer from "../../ui/BlackLayer";
import NavLink from "../../ui/NavLink";

const TheMainHeader = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showShoppingCart, setShowShoppingCart] = useState(false);
  const [showBlackLayer, setShowBlackLayer] = useState(false);
  

  return (
    <>
      <header className="sides flex justify-between gap-12 py-1">
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
        <div className="flex flex-grow justify-center">
          <div className="md:hidden">
            <Logo />
          </div>
          <SearchBar devices="lg" />
        </div>
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
          <nav className="hidden h-full gap-2 capitalize md:flex">
      <NavLink icon="fa-regular fa-circle-question" text="faq" />
      <NavLink icon="fa-brands fa-blogger" text="blogs" />
      <NavLink icon="fa-solid fa-id-card" text="contact" />
    </nav>
        </div>
      </header>

      
      <div
        className={`fixed top-0 z-[4] h-screen w-10/12 bg-yellow-400 transition-all delay-75 duration-300 ease-linear 

      ${showMenu ? "left-0" : `-left-full`}

      `}
      >
        <div className="h-screen w-full bg-white">
          <div className="sides flex items-center justify-between bg-red-300 py-2">
            <p className=" uppercase">Menu</p>
            <div
              onClick={() => {
                setShowMenu(false);
                setShowBlackLayer(false);
              }}
              className="icon-container"
            >
              Xx
            </div>
          </div>
        </div>
      </div>

      
      <div
        className={`fixed top-0 z-[4] h-screen w-10/12 bg-yellow-400 transition-all delay-75 duration-300 ease-linear 

      ${showShoppingCart ? "right-0" : `-right-full`}

      `}
      >
        <div className="h-screen w-full bg-white">
          <div className="sides flex items-center justify-between bg-red-300 py-2">
            <p className=" uppercase">shopping cart</p>
            <div
              onClick={() => {
                setShowShoppingCart(false);
                setShowBlackLayer(false);
              }}
              className="icon-container"
            >
              Xx
            </div>
          </div>
        </div>
      </div>

      <BlackLayer show={showBlackLayer} />
    </>
  );
};


// const NavLink = ({ icon, text }) => {
//   return (
//     <Link to={`/${text}`}>
//       <div className="flex h-full items-center gap-1 rounded-sm bg-white px-2 text-black">
//         <i className={icon}></i>
//         <p className="uppercase">{text}</p>
//       </div>
//     </Link>
//   );
// };

const Logo = () => {
  return (
    <div className="flex h-full items-center bg-blue-600 px-4 font-bold text-white">
      Journal
    </div>
  );
};

export default TheMainHeader;
