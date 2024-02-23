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
      <div className="flex justify-center gap-2 py-2 bg-gray-400">
        <span>X</span>
        <p>FREE FAST SHIPPING ON ORDERS ABOVE $100</p>
      </div>
      
    </>
  );
};

export default Home;
