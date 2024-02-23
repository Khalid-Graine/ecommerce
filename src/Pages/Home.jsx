import { IconTruckFast, TruckFast } from "../assets/icons/MyIcons";
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
      <div className="flex justify-center gap-2 bg-gray-400 py-2">
        {/* <img src="src/assets/icons/truck-fast.svg" className=" text-red-700" alt="" /> */}

        <div className="flex items-center justify-center">
          {/* <IconTruckFast className=" text-4xl text-gray-800 hover:text-red-700" />
       <IconTruckFast /> */}
          {/* <IconTruckFast /> */}
          <IconTruckFast className="bg-yellow-400 text-3xl" />
          
        </div>
        <TruckFast className="bg-yellow-400 text-3xl  " />
        <p>FREE FAST SHIPPING ON ORDERS ABOVE $100</p>
      </div>
      
    </>
  );
};

export default Home;
