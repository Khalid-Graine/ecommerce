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
      <div className="flex justify-center items-center gap-1 py-2 bg-gray-400">
        <i className="fa-solid fa-truck-fast"></i>
        <p>FREE FAST SHIPPING ON ORDERS ABOVE $100</p>
      </div>
    </>
  );
};

export default Home;
