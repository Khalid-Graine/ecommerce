import CenterArea from "../components/parts/home/CenterArea";
import LeftSideBar from "../components/parts/home/LeftSideBar";
import RightSideBar from "../components/parts/home/RightSideBar";

const Home = () => {
  return (
    <>
      <div className="flex">
        {/* left side */}
        <LeftSideBar />
        {/* center */}
        <CenterArea />
        {/* right */}
        <RightSideBar />
      </div>
      <div className="flex items-center justify-center gap-1 bg-[#d3d3d3] py-3  text-[#333333] ">
        <i className="fa-solid fa-truck-fast"></i>
        <p>FREE FAST SHIPPING ON ORDERS ABOVE $100</p>
      </div>
      <div className="sides">
        <h3 className="my-3 mt-5 text-center">Why Buy From Us?</h3>
        <ul className="bg-green-100 grid grid-cols-2 gap-6">
          <li className="flex flex-col items-center gap-2">
            <div className="bg-red-300 size-20 flex justify-center items-center rounded-full *:text-3xl">
            <i className="fa-solid fa-hourglass-start"></i>
            </div>
            <h3>title</h3>
            <p>description Lorem ipsum dolor sit amet.</p>
          </li>
          <li className="flex flex-col items-center gap-2">
            <div className="bg-red-300 size-20 flex justify-center items-center rounded-full *:text-3xl">
            <i className="fa-solid fa-hourglass-start"></i>
            </div>
            <h3>title</h3>
            <p>description Lorem ipsum dolor sit amet.</p>
          </li>
          <li className="flex flex-col items-center gap-2">
            <div className="bg-red-300 size-20 flex justify-center items-center rounded-full *:text-3xl">
            <i className="fa-solid fa-hourglass-start"></i>
            </div>
            <h3>title</h3>
            <p>description Lorem ipsum dolor sit amet.</p>
          </li>
          <li className="flex flex-col items-center gap-2">
            <div className="bg-red-300 size-20 flex justify-center items-center rounded-full *:text-3xl">
            <i className="fa-solid fa-hourglass-start"></i>
            </div>
            <h3>title</h3>
            <p>description Lorem ipsum dolor sit amet.</p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Home;
